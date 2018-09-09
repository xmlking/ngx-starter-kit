import { async, TestBed } from '@angular/core/testing';
import { ThemePickerComponent } from './theme-picker.component';
import { ThemePickerModule } from './theme-picker.module';

describe('ThemePickerComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ThemePickerModule],
    }).compileComponents();
  }));

  it('should install theme based on href', () => {
    const fixture = TestBed.createComponent(ThemePickerComponent);
    const component = fixture.componentInstance;
    const href = 'pink-bluegrey.css';
    spyOn(component.styleManager, 'setStyle');
    component.installTheme({
      primary: '#E91E63',
      accent: '#607D8B',
      href,
    });
    expect(component.styleManager.setStyle).toHaveBeenCalled();
    expect(component.styleManager.setStyle).toHaveBeenCalledWith('theme', `assets/${href}`);
  });
});
