import { SidenavItem, SidenavItemType } from './components/sidenav-item/sidenav-item.model';

export const defaultMenu: SidenavItem[] = [
  {
    name: 'Home',
    icon: 'home',
    link: '/home'
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard'
  },
  {
    name: 'Admin',
    icon: 'grade',
    link: '/admin'
  },
  {
    name: 'Dashboards',
    type: SidenavItemType.DropDown,
    icon: 'dashboard',
    chip: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
      },
      {
        name: 'Admin',
        link: '/admin',
        icon: 'dashboard'
      },
      {
        name: 'Home',
        link: '/home',
        icon: 'home'
      }
    ]
  },
  // {
  //   name: 'Custom components',
  //   type: SidenavItemType.Separator,
  // },
  {
    name: 'Material Widget',
    icon: 'widgets',
    children: [
      {
        name: 'Buttons',
        link: 'material-widgets/buttons',
        icon: 'indeterminate_check_box'
      },
      {
        name: 'List',
        link: 'material-widgets/list',
        icon: 'list'
      },
      {
        name: 'Stepper',
        link: 'material-widgets/stepper',
        icon: 'view_week'
      },
      {
        name: 'Expansion',
        link: 'material-widgets/expansion',
        icon: 'web_aaset'
      },
      {
        name: 'Progress Spinner',
        link: 'material-widgets/spinner',
        icon: 'cached'
      },
      {
        name: 'Cards',
        link: 'material-widgets/cards',
        icon: 'crop_16_9'
      },
      {
        name: 'Icons',
        link: 'material-widgets/icons',
        icon: 'gif'
      },
      {
        name: 'AutoComplete',
        link: 'material-widgets/autocomplete',
        icon: 'get_app'
      },
      {
        name: 'CheckBox',
        link: 'material-widgets/checkbox',
        icon: 'check_box'
      },
      {
        name: 'DatePicker',
        link: 'material-widgets/datepicker',
        icon: 'date_range'
      },

      {
        name: 'Slider',
        link: 'material-widgets/slider',
        icon: 'keyboard_tab'
      },
      {
        name: 'Slide Toggle',
        link: 'material-widgets/slide-toggle',
        icon: 'album'
      },
      {
        name: 'Menu',
        link: 'material-widgets/menu',
        icon: 'menu'
      },
      {
        name: 'Progress Bar',
        link: 'material-widgets/progress-bar',
        icon: 'trending_flat'
      },
      {
        name: 'Input',
        link: 'material-widgets/input',
        icon: 'input'
      },
      {
        name: 'Radio',
        icon: 'radio_button_checked',
        link: 'material-widgets/radio'
      },
      {
        name: 'Select',
        icon: 'select_all',
        link: 'material-widgets/select'
      }
    ]
  },
  {
    name: 'Dashboard',
    icon: 'list',
    chip: { value: 3, color: 'accent' },
    children: [
      {
        name: 'Overview',
        icon: 'filter_list',
        link: '/dashboard'
      },
      {
        name: 'Overview 1',
        icon: 'filter_list',
        link: '/dashboard/overview1'
      },
      {
        name: 'overview 2',
        icon: 'done_all',
        link: '/dashboard/overview2'
      },
      {
        name: 'overview 3',
        icon: 'filter_center_focus',
        link: '/dashboard/overview3'
      }
    ]
  },
  {
    name: 'Guarded Routes',
    icon: 'mode_edit',
    link: '/admin/guarded-routes'
  },
  {
    name: 'Scrumboard',
    link: '/home',
    icon: 'grade'
  },
  {
    name: 'Admin',
    icon: 'map',
    children: [
      {
        name: 'overview',
        icon: 'directions',
        link: '/admin'
      },
      {
        name: 'Products',
        icon: 'directions',
        link: '/admin/products'
      },
      {
        name: 'Orders',
        icon: 'directions',
        link: '/admin/orders'
      }
    ]
  },
  {
    name: 'Applications',
    icon: 'view_module',
    children: [
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard'
      },
      {
        name: 'mail',
        icon: 'mail',
        link: 'mail/mail'
      },
      {
        name: 'Editor',
        icon: 'editor',
        link: 'editor/editor'
      }
    ]
  },
  {
    name: 'Pages',
    icon: 'content_copy',
    children: [
      {
        name: 'Login',
        icon: 'work',
        link: '../login'
      },
      {
        name: 'Services',
        icon: 'local_laundry_service',
        link: 'pages/services'
      },
      {
        name: 'Contact',
        icon: 'directions',
        link: 'pages/contact'
      }
    ]
  },
  {
    name: 'Experiments',
    icon: 'pie_chart_outlined',
    children: [
      {
        name: 'experiments',
        icon: 'view_list',
        link: '/experiments'
      },
      {
        name: 'experiments1',
        icon: 'show_chart',
        link: '/experiments/experiment1'
      },
      {
        name: 'experiments3',
        icon: 'pie_chart',
        link: '/experiments/experiment2'
      },
      {
        name: 'Radio',
        icon: 'radio_remove_me',
        link: 'radio_remove_me/radio'
      }
    ]
  },
  {
    name: 'Multi-Level Menu',
    icon: 'menu',
    children: [
      {
        name: 'Level 1',
        link: '/level1',
        children: [
          {
            name: 'Level 2',
            link: '/level1/level2',
            children: [
              {
                name: 'Level 3',
                link: '/level1/level2/level3',
                children: [
                  {
                    name: 'Level 4',
                    link: '/level1/level2/level3/level4',
                    children: [
                      {
                        name: 'Level 5',
                        link: '/level1/level2/level3/level4/level5'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export const adminMenu: SidenavItem[] = [
  {
    name: 'Dashboard',
    type: SidenavItemType.DropDown,
    icon: 'dashboard',
    chip: { value: 1, color: 'accent' },
    tooltip: 'Dashboard',
    children: [
      {
        name: 'Dashboard',
        link: '/dashboard',
        icon: 'dashboard'
      },
      {
        name: 'Products',
        link: '/dashboard/products',
        icon: 'dashboard'
      },
      {
        name: 'Orders',
        link: '/dashboard/orders',
        icon: 'dashboard'
      }
    ]
  },
  {
    name: 'Custom components',
    type: SidenavItemType.Separator
  }
];

export const iconMenu: SidenavItem[] = [
  {
    name: 'Dashboard',
    type: SidenavItemType.DropDown,
    icon: 'dashboard',
    link: 'home',
    tooltip: 'Dashboard'
  },
  {
    name: 'HOME',
    type: SidenavItemType.Separator,
    icon: 'home',
    link: 'home',
    tooltip: 'Home'
  },
  {
    name: 'TOUR',
    type: SidenavItemType.Icon,
    icon: 'flight_takeoff',
    link: 'tour',
    tooltip: 'Tour'
  },
  {
    name: 'PROFILE',
    type: SidenavItemType.Icon,
    icon: 'person',
    link: 'profile/overview',
    tooltip: 'Profile'
  }
];
