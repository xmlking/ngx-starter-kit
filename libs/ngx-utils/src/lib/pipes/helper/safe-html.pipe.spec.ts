import { TestBed, inject } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { SafeHtmlPipe } from './safe-html.pipe';

  describe('SafeHtmlPipe', () => {
    beforeEach(() => {
      TestBed
        .configureTestingModule({
          imports: [
            BrowserModule
          ]
        });
    });

    it('create an instance', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
      const pipe = new SafeHtmlPipe(domSanitizer);
      expect(pipe).toBeTruthy();
    }));

    it('should create a safehtml construct', inject([DomSanitizer], (domSanitizer: DomSanitizer) => {
      const pipe = new SafeHtmlPipe(domSanitizer);
      const html = '<div><a href="ssb://ssb/@foobar">Link</a></div>';
      const output = pipe.transform(html);
      expect(output).toBeDefined();
      expect(output.constructor.name).toEqual('SafeHtmlImpl');
    }));
});
