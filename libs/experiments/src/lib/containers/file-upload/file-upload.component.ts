import { Component, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Crumb } from '@ngx-starter-kit/breadcrumbs';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'ngx-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [FileUploadService],
})
export class FileUploadComponent {
  crumbs: ReadonlyArray<Crumb> = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Experiments', link: '/dashboard/experiments' },
    { name: 'File Upload' },
  ];
  @ViewChild('myPond')
  myPond: any;
  myFiles = [];

  // Ref: https://pqina.nl/filepond/docs/patterns/api/server/
  uploadToServer = {
    process: (fieldName, file, metadata, load, error, progress, abort) => {
      // Create data object containing the file and the file metadata
      const formData = new FormData();
      formData.append(fieldName, file, file.name);
      formData.append(fieldName, JSON.stringify(metadata));
      this.uploadService.uploadFile(file, {}, 'tenant1').subscribe(
        data => {
          this.myPond.removeFiles();
          this.snackBar.open(`Uploaded Successfully`, '', {
            duration: 3000,
          });
        },
        err => {
          console.error(`File Upload Error: ${err.message}`);
          this.snackBar.open(`File Upload Error: ${err.message}`, '', {
            duration: 3000,
          });
        },
      );

      // Progress indicator supported, set progress to 25% of 1
      progress(true, 0.25, 1);

      // progress(false); // for infinite upload mode

      // Fake completion after 1 second
      const timer = setTimeout(() => {
        load('unique-file-id'); // or { body: 'unique-file-id' }
      }, 1000);

      // Should expose an abort method so the request can be cancelled by the user
      return {
        abort: () => {
          // abort your request here (we clear timer for demo purposes)
          clearTimeout(timer);

          // updates FilePond interface
          abort();
        },
      };
    },

    revert: (uniqueFileId, load, error) => {
      // Should get a file object here
      // ...

      // Can call the error method if something is wrong, should exit after
      // error('oh my goodness');

      // Should call the load method when done, no parameters required
      load();
    },

    load: (uniqueFileId, load, error, progress, abort, headers) => {
      // Should get a file object here
      // ...

      // Can call the error method if something is wrong, should exit after
      error('oh my goodness');

      // Can call the header method to supply FilePond with early response header string
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
      // headers(headersString);

      // Should call the progress method to update the progress to 100% before calling load
      // (endlessMode, loadedSize, totalSize)
      progress(true, 0, 1024);

      // Should call the load method with a file object or blob when done
      // load(file);

      // Should expose an abort method so the request can be cancelled
      return {
        abort: () => {
          // User tapped abort, cancel our ongoing actions here

          // Let FilePond know the request has been cancelled
          abort();
        },
      };
    },

    fetch: (url, load, error, progress, abort, headers) => {},

    restore: (uniqueFileId, load, error, progress, abort, headers) => {},
  };

  pondOptions = {
    name: 'filepond',
    multiple: true,
    maxFiles: 3,
    maxFileSize: '1MB',
    instantUpload: false,
    server: this.uploadToServer,
    acceptedFileTypes: 'image/*, application/pdf, application/*, text/plain, text/csv, .vsd',
  };

  constructor(public snackBar: MatSnackBar, private uploadService: FileUploadService) {}

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
    // FilePond instance methods are available on `this.myPond`
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }
}
