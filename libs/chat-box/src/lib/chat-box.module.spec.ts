import { async, TestBed } from '@angular/core/testing';
import { ChatBoxModule } from './chat-box.module';

describe('ChatBoxModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ChatBoxModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ChatBoxModule).toBeDefined();
  });
});
