import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'الرئيسية',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  // {
  //   title: 'IoT Dashboard',
  //   icon: 'home-outline',
  //   link: '/pages/iot-dashboard',
  // },
  {
    title: 'الميزات',
    group: true,
  },
  // {
  //   title: 'Layout',
  //   icon: 'layout-outline',
  //   children: [
  //     {
  //       title: 'Stepper',
  //       link: '/pages/layout/stepper',
  //     },
  //     {
  //       title: 'List',
  //       link: '/pages/layout/list',
  //     },
  //     {
  //       title: 'Infinite List',
  //       link: '/pages/layout/infinite-list',
  //     },
  //     {
  //       title: 'Accordion',
  //       link: '/pages/layout/accordion',
  //     },
  //     {
  //       title: 'Tabs',
  //       pathMatch: 'prefix',
  //       link: '/pages/layout/tabs',
  //     },
  //   ],
  // },
  {
    title: 'المشتريات',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'مشتريات',
        children: [
          {
            title: 'مشتريات محلية',
            link: '/pages/purchase/main',
          },
          {
            title: 'مشتريات أجنبية',
            link: '/pages/purchase/outside',
          },
        ],
      },
      {
        title: 'عمليات توسيط ',
        children: [
          {
            title: ' توسيط بإعتماد',
            link: '/pages/purchase/centering-main',
          },
          {
            title: 'توسيط برسم تحصيل',
            link: '/pages/purchase/brokered-fee',
          },
        ],
      },
      {
        title: 'متابعة الشحنات ',
        children: [
          {
            title: 'متابعة الحاويات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'متابعة مخلصي الجمارك ',
            link: '/pages/forms/inputs',
          },
          {
            title: 'متابعة الاستلامات ',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'الإعدادات',
        children: [
          {
            title: 'إضافة بضاعة',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إضافة مورد',
            link: '/pages/forms/inputs',
          },
        ],
      },
    ],
  },
  {
    title: 'مخازن ومبيعات',
    icon: 'layout-outline',
    children: [
      {
        title: 'مخازن',
        children: [
          {
            title: 'إذن إستلام',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إذن صرف',
            link: '/pages/forms/inputs',
          },
          {
            title: 'نقل مخزون',
            link: '/pages/forms/inputs',
          },
          {
            title: 'مسترجعات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'تعديل مخزون',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'مبيعات',
        children: [
          {
            title: 'فواتير',
            link: '/pages/forms/inputs',
          },
          {
            title: 'تخفيضات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'عروض',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إيصال قبض',
            link: '/pages/forms/inputs',
          },
          {
            title: 'تقارير',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'الإعدادات',
        children: [
          {
            title: 'إضافة مخزون',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إضافة زبون',
            link: '/pages/forms/inputs',
          },
        ],
      },
    ],
  },
  {
    title: 'المالية',
    icon: 'keypad-outline',
    children: [
      {
        title: 'الخزينة',
        children: [
          {
            title: 'ايرادات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'مصروفات',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'المصارف',
        children: [
          {
            title: 'ايرادات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'مصروفات',
            link: '/pages/forms/inputs',
          },
        ],
      },
    ],
  },
  {
    title: 'شؤون الموظفين',
    icon: 'browser-outline',
    children: [
      {
        title: 'الموظفين',
        children: [
          {
            title: 'قائمة الموظفين',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إضافة',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'المرتبات',
        children: [
          {
            title: 'قائمة المرتبات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إضافة',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'اجازات',
        children: [
          {
            title: 'طلبات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'موافقات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'رفض',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'ملف',
        children: [
          {
            title: 'قائمة الملف',
            link: '/pages/forms/inputs',
          },
          {
            title: 'موافقات',
            link: '/pages/forms/inputs',
          },
          {
            title: 'رفض',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'الحضور',
        children: [
          {
            title: 'تقرير يومي',
            link: '/pages/forms/inputs',
          },
          {
            title: 'تقرير شهري',
            link: '/pages/forms/inputs',
          },
          {
            title: 'تقرير سنوي',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'رسائل',
        children: [
          {
            title: 'قائمة الرسائل',
            link: '/pages/forms/inputs',
          },
          {
            title: 'إضافة',
            link: '/pages/forms/inputs',
          },
        ],
      },
    ],
  },
  {
    title: 'المحاسبة',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'اليومية',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'قيد اليومية',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'تسوية المصرف',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'ميزان المراجعة',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'التسويات السنوية',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'الاهلاكات',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
      {
        title: 'الاعدادات',
        children: [
          {
            title: 'child test 1',
            link: '/pages/forms/inputs',
          },
          {
            title: 'child test 2',
            link: '/pages/forms/inputs',
          },
        ],
      },
    ],
  },
  // ,
  // {
  //   title: 'UI Features',
  //   icon: 'keypad-outline',
  //   link: '/pages/ui-features',
  //   children: [
  //     {
  //       title: 'Grid',
  //       link: '/pages/ui-features/grid',
  //     },
  //     {
  //       title: 'Icons',
  //       link: '/pages/ui-features/icons',
  //     },
  //     {
  //       title: 'Typography',
  //       link: '/pages/ui-features/typography',
  //     },
  //     {
  //       title: 'Animated Searches',
  //       link: '/pages/ui-features/search-fields',
  //     },
  //   ],
  // },
  // {
  //   title: 'Modal & Overlays',
  //   icon: 'browser-outline',
  //   children: [
  //     {
  //       title: 'Dialog',
  //       link: '/pages/modal-overlays/dialog',
  //     },
  //     {
  //       title: 'Window',
  //       link: '/pages/modal-overlays/window',
  //     },
  //     {
  //       title: 'Popover',
  //       link: '/pages/modal-overlays/popover',
  //     },
  //     {
  //       title: 'Toastr',
  //       link: '/pages/modal-overlays/toastr',
  //     },
  //     {
  //       title: 'Tooltip',
  //       link: '/pages/modal-overlays/tooltip',
  //     },
  //   ],
  // },
  // {
  //   title: 'Extra Components',
  //   icon: 'message-circle-outline',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //     {
  //       title: 'Progress Bar',
  //       link: '/pages/extra-components/progress-bar',
  //     },
  //     {
  //       title: 'Spinner',
  //       link: '/pages/extra-components/spinner',
  //     },
  //     {
  //       title: 'Alert',
  //       link: '/pages/extra-components/alert',
  //     },
  //     {
  //       title: 'Calendar Kit',
  //       link: '/pages/extra-components/calendar-kit',
  //     },
  //     {
  //       title: 'Chat',
  //       link: '/pages/extra-components/chat',
  //     },
  //   ],
  // },
  // {
  //   title: 'Maps',
  //   icon: 'map-outline',
  //   children: [
  //     {
  //       title: 'Google Maps',
  //       link: '/pages/maps/gmaps',
  //     },
  //     {
  //       title: 'Leaflet Maps',
  //       link: '/pages/maps/leaflet',
  //     },
  //     {
  //       title: 'Bubble Maps',
  //       link: '/pages/maps/bubble',
  //     },
  //     {
  //       title: 'Search Maps',
  //       link: '/pages/maps/searchmap',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'pie-chart-outline',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'text-outline',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tables & Data',
  //   icon: 'grid-outline',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //     {
  //       title: 'Tree Grid',
  //       link: '/pages/tables/tree-grid',
  //     },
  //   ],
  // },
  // {
  //   title: 'Miscellaneous',
  //   icon: 'shuffle-2-outline',
  //   children: [
  //     {
  //       title: '404',
  //       link: '/pages/miscellaneous/404',
  //     },
  //   ],
  // },
  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: '/auth/login',
  //     },
  //     {
  //       title: 'Register',
  //       link: '/auth/register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: '/auth/request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: '/auth/reset-password',
  //     },
  //   ],
  // },
];
