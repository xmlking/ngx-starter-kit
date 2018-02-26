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
    icon: 'format_shapes',
    link: '/dashboard/overview1'
  },
  // {
  //   name: 'Custom components',
  //   type: SidenavItemType.Separator,
  // },
  {
    name: 'AppServers',
    type: SidenavItemType.DropDown,
    icon: 'dashboard',
    chip: { value: 1, color: 'accent' },
    tooltip: 'AppServers',
    children: [
      {
        name: 'Servers',
        link: '/dashboard/appservers/servers',
        icon: 'dashboard'
      },
      {
        name: 'DataSource',
        link: '/dashboard/appservers/datasource',
        icon: 'dashboard'
      },
      {
        name: 'MQSource',
        link: '/dashboard/appservers/mqsource',
        icon: 'home'
      },
      {
        name: 'AEMServers',
        link: '/dashboard/appservers/aemservers',
        icon: 'home'
      }
    ]
  },
  {
    name: 'Database',
    icon: 'list',
    chip: { value: 3, color: 'accent' },
    children: [
      {
        name: 'Servers',
        icon: 'filter_list',
        link: '/dashboard/database/servers'
      },
      {
        name: 'Oracle',
        icon: 'filter_center_focus',
        link: '/dashboard/database/oracle'
      },
      {
        name: 'MySQL',
        icon: 'filter_list',
        link: '/dashboard/database/mysql'
      },
      {
        name: 'DB2',
        icon: 'done_all',
        link: '/dashboard/database/db2'
      },
      {
        name: 'Sybase',
        icon: 'filter_center_focus',
        link: '/dashboard/database/sybase'
      }
    ]
  },
  {
    name: 'Layer7',
    icon: 'widgets',
    children: [
      {
        name: 'my.cnf',
        link: '/dashboard/layer7/my.cnf',
        icon: 'indeterminate_check_box'
      },
      {
        name: 'host.properties',
        link: '/dashboard/layer7/host.properties',
        icon: 'list'
      },
      {
        name: 'appliance.conf',
        link: '/dashboard/layer7/appliance.conf',
        icon: 'view_week'
      },
      {
        name: 'node.properties',
        link: '/dashboard/layer7/node.properties',
        icon: 'web_aaset'
      },
      {
        name: 'system.properties',
        link: '/dashboard/layer7/system.properties',
        icon: 'cached'
      },
      {
        name: 'appliancedefs.sh',
        link: '/dashboard/layer7/appliancedefs.sh',
        icon: 'crop_16_9'
      },
      {
        name: 'cluster.properties',
        link: '/dashboard/layer7/cluster.properties',
        icon: 'gif'
      }
    ]
  },
  {
    name: 'MapR',
    link: '/dashboard/mapr',
    icon: 'gif'
  },
  {
    name: 'NAS',
    icon: 'map',
    children: [
      {
        name: 'Cluster',
        icon: 'radio_remove_me',
        link: 'dashboard/nas/cluster'
      },
      {
        name: 'Cluster Node',
        icon: 'show_chart',
        link: 'dashboard/nas/cluster-node'
      },
      {
        name: 'Virtual NAS',
        icon: 'view_list',
        link: 'dashboard/nas/virtual-nas'
      },
      {
        name: 'Cluster Network',
        icon: 'directions',
        link: 'dashboard/nas/cluster-network'
      },
      {
        name: 'CIFS Shares',
        icon: 'editor',
        link: 'dashboard/nas/cifs-shares'
      },
      {
        name: 'NFS Shares',
        icon: 'mail',
        link: 'dashboard/nas/nas-shares'
      }
    ]
  },
  {
    name: 'DataPower',
    icon: 'view_module',
    children: [
      {
        name: 'serviceproxy',
        link: '/dashboard/datapower',
        icon: 'mail'
      }
    ]
  },
  {
    name: 'Experiments',
    icon: 'pie_chart_outlined',
    children: [
      {
        name: 'CRUD',
        icon: 'web_aaset',
        link: '/dashboard/crud'
      },
      {
        name: 'experiments',
        icon: 'view_list',
        link: '/experiments'
      },
      {
        name: 'experiments1',
        icon: 'show_chart',
        link: '/dashboard/overview1'
      },
      {
        name: 'experiments3',
        icon: 'pie_chart',
        link: '/dashboard/overview2'
      },
      {
        name: 'experiments3',
        icon: 'crop_16_9',
        link: '/dashboard/overview3'
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
