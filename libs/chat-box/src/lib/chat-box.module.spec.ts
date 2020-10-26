import { waitForAsync, TestBed } from '@angular/core/testing';
import { ChatBoxModule } from './chat-box.module';

describe('ChatBoxModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ChatBoxModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ChatBoxModule).toBeDefined();
  });
});
