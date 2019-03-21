import { Selector } from 'testcafe';

export default class NavbarPage {
  toolsDropDown: Selector;
  menuDropDown: Selector;
  logoutMenuItem: Selector;
  menuDropDownStudents: Selector;
  menuDropDownClasses: Selector;
  menuDropDownLessons: Selector;
  menuDropDownMap: Selector;
  menuDropDownUsers: Selector;
  username: Selector;
  url: string | null;
  constructor() {
    this.toolsDropDown = Selector('[id$="navbarDropdownMenuLink"]');
    this.menuDropDown = Selector('[id$="navbarDropdownMenuLink0"]');
    this.logoutMenuItem = Selector('[id$="logout"]');
    this.menuDropDownStudents = Selector('.nb-student');
    this.menuDropDownClasses = Selector('.nb-class');
    this.menuDropDownLessons = Selector('.nb-lesson');
    this.menuDropDownMap = Selector('.nb-map');
    this.menuDropDownUsers = Selector('.nb-user');
    this.username = Selector('.msw-header-user-name');
    this.url = null;
  }
}
