import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Gender, Profile } from '@ngx-starter-kit/models';

// TODO: https://netbasal.com/how-to-implement-file-uploading-in-angular-reactive-forms-89a3fffa1a03
@Component({
  selector: 'ngx-app-profile',
  templateUrl: './app-profile.component.html',
  styleUrls: ['./app-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppProfileComponent implements OnInit, OnDestroy {
  readonly genderOptions = Gender;
  @Input() oidcProfile: any;
  @Input() appProfile: Profile;
  imagePath = this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/avatars/noavatar.png');
  editing = false;
  hasAvatar = true;
  formGroup: FormGroup;
  @ViewChild('myPond', { static: true }) myPond: any;
  files = [];
  // files = [
  //   {
  //     source: '12345',
  //     options: {
  //       type: 'limbo', // `local` or `limbo`
  //     },
  //   },
  // ];

  server = {
    timeout: 7000,
    fetch: (url, load, error, progress, abort, headers) => {},
    restore: (uniqueFileId, load, error, progress, abort, headers) => {},
    load: (source, load, error, progress, abort, headers) => {
      fetch(`data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`)
        .then(r => r.blob())
        .then(load)
        .catch(error);
      return { abort };
    },

    process: (fieldName, file, metadata, load, error, progress, abort) => {
      // Create data object containing the file and the file metadata

      console.log('test');
      const formData = new FormData();
      formData.append(fieldName, file, file.name);

      const request = new XMLHttpRequest();
      request.open('POST', '/ajax/image-upload/xxxxxx');
      // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));

      request.upload.onprogress = e => {
        progress(e.lengthComputable, e.loaded, e.total);
      };

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          load(request.responseText);
        } else {
          error('Error');
        }
      };

      request.send(formData);
      return {
        abort: () => {
          request.abort();
          abort();
        }
      };
    },

    revert: (uniqueFileId, load, error) => {
      const formData = new FormData();
      formData.append('unique', uniqueFileId);
      formData.append('_method', 'DELETE');

      const request = new XMLHttpRequest();
      request.open('POST', '/ajax/image-delete');
      // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));

      request.onload = () => {
        if (request.status >= 200 && request.status < 300) {
          load(request.responseText);
        } else {
          error('Error');
        }
      };

      request.send(formData);
      return {
        abort: () => {
          request.abort();
          // abort();
        }
      };
    }
  };

  pondOptions = {
    name: 'app-profile-avatar',
    maxFileSize: '1MB',
    dropOnPage: true,
    instantUpload: false,
    dropValidation: true,
    acceptedFileTypes: 'image/*',
    server: {
      timeout: 7000,
      load: this.loadHandler.bind(this),
      process: this.processHandler.bind(this)
    },
    imagePreviewHeight: 170,
    imageCropAspectRatio: '1:1',
    imageResizeTargetWidth: 200,
    imageResizeTargetHeight: 200,
    stylePanelLayout: 'compact circle',
    styleLoadIndicatorPosition: 'center bottom',
    styleProgressIndicatorPosition: 'right bottom',
    styleButtonRemoveItemPosition: 'left bottom',
    styleButtonProcessItemPosition: 'right bottom'
  };

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.appProfile) {
      this.formGroup = this.fb.group({
        file: [],
        gender: [this.appProfile.gender],
        mobilePhone: [this.appProfile.mobilePhone]
      });
    } else {
      this.formGroup = this.fb.group({
        file: [],
        gender: [],
        mobilePhone: []
      });
    }

    if (this.appProfile && this.appProfile.avatar) {
      this.files = [
        {
          source: this.appProfile.avatar.title,
          options: {
            type: 'local'
          }
        }
      ];

      this.imagePath = this.sanitizer.bypassSecurityTrustResourceUrl(
        `data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`
      );
    } else {
      this.hasAvatar = false;
    }
  }

  loadHandler(source, load, error, progress, abort, headers) {
    if (this.appProfile && this.appProfile.avatar) {
      fetch(`data:${this.appProfile.avatar.mimeType};base64,${this.appProfile.avatar.data}`)
        .then(r => r.blob())
        .then(load)
        .catch(error);
      return { abort };
    } else {
      return {
        abort
      };
    }
  }

  processHandler(fieldName, file, metadata, load, error, progress, abort) {
    // Create data object containing the file and the file metadata

    console.log('test');
    const formData = new FormData();
    formData.append(fieldName, file, file.name);

    const request = new XMLHttpRequest();
    request.open('POST', '/ajax/image-upload/xxxxxx');
    // request.setRequestHeader('X-CSRF-TOKEN' , $('meta[name="csrf-token"]').attr('content'));

    request.upload.onprogress = e => {
      progress(e.lengthComputable, e.loaded, e.total);
    };

    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        load(request.responseText);
      } else {
        error('Error');
      }
    };

    request.send(formData);
    return {
      abort: () => {
        request.abort();
        abort();
      }
    };
  }

  save(): void {
    this.editing = false;
    console.log(this.formGroup);
    // const uploadData = new FormData();
    // uploadData.append('email', this.formGroup.get('email').value);
    // uploadData.append('file', this.formGroup.get('file').value);
  }

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    // console.log('A file was added', event);
    console.log('A file was added', event.file);
  }

  pondHandleRemoveFile(event: any): void {
    console.log('A file was removed', event.file);
    console.log('A file was removed1111', this.files);
  }

  createProfile() {
    console.log(this.myPond.server);
    this.myPond.processFile().then(file => {
      // File has been processed
    });
  }

  updateProfile() {
    // const files = this.myPond.getFile();
    this.myPond.processFile(/* id */).then(file => {
      // File has been processed
    });
  }

  deleteProfile() {}

  ngOnDestroy() {}

  emitUpload(event: Event) {
    // this.myPond.emit();
    console.log('emitUpload', event);
  }

  removeAll() {
    this.myPond.removeFiles();
  }
}

// TODO: https://www.joshmorony.com/displaying-upload-download-progress-in-an-ionic-application/
// https://github.com/ErazerBrecht/ErazerCQRS/blob/master/
// Erazer.Web.Angular/src/app/components/image-uploader/image-uploader.component.ts
