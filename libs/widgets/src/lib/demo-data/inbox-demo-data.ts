import { subDays, subHours, subMinutes, subWeeks } from 'date-fns';
import { Color } from './color.interface';
import { Mail } from './mail.interface';

/* tslint:disable:max-line-length */
export const labelColors: Color[] = [
  {
    name: 'Indigo',
    code: '#3F51B5',
  },
  {
    name: 'Teal',
    code: '#009688',
  },
  {
    name: 'Light Blue',
    code: '#03A9F4',
  },
  {
    name: 'Deep Purple',
    code: '#673AB7',
  },
  {
    name: 'Purple',
    code: '#9C27B0',
  },
  {
    name: 'Green',
    code: '#4CAF50',
  },
  {
    name: 'Deep Orange',
    code: '#FF5722',
  },
  {
    name: 'Red',
    code: '#f44336',
  },
  {
    name: 'Yellow',
    code: '#FFEB3B',
  },
];

export const inboxMails: Mail[] = [
  {
    id: '5aaa797a5416f2348280d365',
    from: {
      name: 'Nichols Obrien',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Nulla ut est fugiat sint sit ut id aliqua reprehenderit duis aliquip culpa nostrud.',
    content:
      'Mollit labore consequat adipisicing adipisicing. Ullamco est laboris quis minim consectetur consectetur tempor anim adipisicing est dolore cillum excepteur. Cupidatat ut aliqua nisi reprehenderit Lorem.',
    when: subWeeks(new Date(), 66),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }, { name: 'Priority', color: '#f44336' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797a42552b86e1fa2d3f',
    from: {
      name: 'Dona Kirk',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Aliquip laboris reprehenderit adipisicing culpa.',
    content:
      'Laboris aute nostrud labore dolore laborum sint occaecat in exercitation dolore qui. Irure velit amet nostrud pariatur et amet incididunt laborum aute. Fugiat voluptate reprehenderit laboris laboris magna consequat ex magna elit fugiat magna dolore aliquip.',
    when: subMinutes(new Date(), 7),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'sent',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797a405e7a894676e6c5',
    from: {
      name: 'Valenzuela Atkinson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Esse laboris nulla in pariatur mollit id dolor velit cillum dolor cillum.',
    content:
      'Voluptate irure enim est anim non commodo ad reprehenderit ea quis incididunt et aliquip. Reprehenderit deserunt cupidatat reprehenderit enim quis id tempor ipsum est dolor exercitation consectetur. Tempor nulla do aute veniam qui laboris ullamco voluptate enim.',
    when: subMinutes(new Date(), 94),
    read: false,
    starred: false,
    labels: [],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797a7eac0b92ec5ea57a',
    from: {
      name: 'Jimenez Dalton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Minim minim sit labore nostrud cillum labore.',
    content:
      'Voluptate ut enim adipisicing reprehenderit voluptate velit officia dolore quis pariatur adipisicing. Eu occaecat officia in proident do exercitation esse cillum commodo voluptate enim. Laboris est nisi dolore ullamco quis cupidatat aliquip enim occaecat labore laborum elit non.',
    when: subHours(new Date(), 50),
    read: true,
    starred: false,
    labels: [],
    group: 'primary',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797a7470a5a6e66bd638',
    from: {
      name: 'Mccray Chandler',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Mollit labore nisi nostrud non incididunt do ullamco in consequat consequat occaecat adipisicing anim.',
    content:
      'Elit nisi cupidatat voluptate non velit et qui dolore voluptate aute eiusmod officia nulla Lorem. Aliqua ex et do veniam commodo enim. Lorem reprehenderit sunt fugiat cupidatat laborum enim esse pariatur quis eu exercitation dolore incididunt.',
    when: subHours(new Date(), 92),
    read: false,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'social',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797a6f110373f5d7afcf',
    from: {
      name: 'Chen Fields',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Culpa duis laborum sit minim et ipsum et reprehenderit ut reprehenderit.',
    content:
      'Adipisicing dolor elit excepteur aute aute sit occaecat qui duis Lorem veniam. Culpa sit duis consequat officia dolore tempor cillum ipsum laborum. Pariatur officia laborum nulla dolore amet fugiat commodo mollit amet cupidatat in et.',
    when: subWeeks(new Date(), 38),
    read: false,
    starred: false,
    labels: [],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797a7e3c9c1a9fbb37df',
    from: {
      name: 'Bernice Guy',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ullamco dolore amet reprehenderit consequat cillum ad eiusmod reprehenderit.',
    content:
      'Lorem ad ut nulla labore commodo excepteur dolore est sint. Pariatur adipisicing duis tempor dolor exercitation culpa laboris nulla quis amet irure eu. Deserunt cillum voluptate ut velit et eiusmod labore aute amet.',
    when: subWeeks(new Date(), 39),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'trash',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797a74af67b35a55bdfc',
    from: {
      name: 'Allen Walton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sunt ea laboris enim in sunt aliquip et fugiat occaecat adipisicing irure ea.',
    content:
      'Labore culpa in qui sunt anim ipsum labore reprehenderit ipsum minim sunt voluptate. Commodo fugiat mollit nulla aliquip ullamco pariatur et ipsum sit nulla. Aute commodo magna eiusmod officia do est magna minim sit cillum eu.',
    when: subHours(new Date(), 20),
    read: false,
    starred: true,
    labels: [],
    group: 'sent',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797af301d85874b38301',
    from: {
      name: 'Keisha Prince',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject:
      'Irure voluptate mollit voluptate ut elit Lorem aliquip reprehenderit ut minim adipisicing esse exercitation elit.',
    content:
      'Sit duis eu enim elit consectetur deserunt voluptate id esse consectetur voluptate consequat deserunt in. Voluptate proident excepteur excepteur elit pariatur id labore. Consequat aute deserunt consequat sunt enim aliqua excepteur elit aute nisi.',
    when: subDays(new Date(), 11),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797af9d59b1b2e78f566',
    from: {
      name: 'Hines Chaney',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Pariatur reprehenderit labore consectetur id laboris ipsum Lorem commodo ea minim mollit magna mollit.',
    content:
      'Nulla irure ea voluptate ut laborum dolore proident esse qui eu. Anim dolore magna do velit laboris aliqua nostrud minim ipsum. Qui tempor do est et non amet nostrud anim cupidatat ex aliquip et nisi.',
    when: subDays(new Date(), 26),
    read: false,
    starred: false,
    labels: [],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797a22bb3083a62fec12',
    from: {
      name: 'Paige Morris',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Consequat aute ea qui exercitation consequat labore sint anim.',
    content:
      'Est voluptate labore dolore sunt consectetur cillum adipisicing excepteur quis ullamco ex veniam. Fugiat voluptate Lorem incididunt dolor eu aute. Labore esse eiusmod cupidatat ad ullamco laboris ullamco deserunt aliqua sunt eu.',
    when: subMinutes(new Date(), 46),
    read: true,
    starred: false,
    labels: [],
    group: 'sent',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797a8e9a5de30fcd9317',
    from: {
      name: 'Vaughan Acevedo',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sit minim enim dolore eiusmod nulla nostrud deserunt laborum enim eiusmod laborum eiusmod.',
    content:
      'Ipsum consequat enim pariatur et nulla magna dolor ex dolore consequat fugiat occaecat. Elit duis sit est voluptate amet exercitation enim consectetur nisi. Esse eu nisi reprehenderit non.',
    when: subDays(new Date(), 27),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'social',
    attachments: [],
  },
  {
    id: '5aaa797a758be20e9d7fb18a',
    from: {
      name: 'Jackson Solis',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Enim cillum qui nulla ex do do enim aliqua nostrud consequat enim.',
    content:
      'Et esse fugiat nulla sunt ut sint fugiat. Non duis cillum irure nisi pariatur magna dolore proident. Laboris magna adipisicing consectetur mollit consectetur dolore.',
    when: subHours(new Date(), 49),
    read: false,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'trash',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797a5ba62821cc52db49',
    from: {
      name: 'Pauline Sherman',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Voluptate voluptate ad irure ipsum sint deserunt dolor nulla ipsum esse.',
    content:
      'Nostrud magna nisi reprehenderit non adipisicing laboris est tempor consectetur veniam veniam. Ad excepteur tempor in ut labore nulla sint minim exercitation et culpa dolor. Anim reprehenderit occaecat tempor ex cupidatat minim.',
    when: subWeeks(new Date(), 49),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797a55d2fc99f3e1a4bf',
    from: {
      name: 'Olson Gould',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Laborum proident exercitation labore commodo amet irure id quis ea officia sit elit.',
    content:
      'Irure aliqua consectetur ad reprehenderit cillum ullamco commodo excepteur non pariatur. Aliqua excepteur et irure voluptate et do velit dolore ut in enim laborum laboris amet. Esse occaecat cupidatat velit culpa irure.',
    when: subDays(new Date(), 26),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'primary',
    attachments: ['assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797a20d0690dc7676ccc',
    from: {
      name: 'Mercedes Mcbride',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Irure cillum labore nostrud irure do commodo officia consectetur cillum laboris quis amet dolore.',
    content:
      'Ex occaecat Lorem adipisicing esse eu non cupidatat cupidatat. Laborum exercitation officia laborum excepteur non proident sint velit dolor duis minim. Cillum officia dolore consequat minim esse labore.',
    when: subHours(new Date(), 4),
    read: true,
    starred: false,
    labels: [],
    group: 'social',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797ade2766fa8226bdb9',
    from: {
      name: 'Alexander Watts',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Minim exercitation ipsum dolore sint do.',
    content:
      'Lorem quis est tempor nulla magna consectetur ex voluptate consequat sint ad enim. Amet magna esse do ut laboris. Laborum enim proident ut velit consectetur aute ea irure et minim fugiat ea.',
    when: subMinutes(new Date(), 5),
    read: true,
    starred: false,
    labels: [],
    group: 'promotions',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797a6aa19a3008aeefe0',
    from: {
      name: 'Elsie Rosa',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Et fugiat anim sunt voluptate veniam ea anim.',
    content:
      'Amet et dolore in proident tempor fugiat magna veniam laborum in esse quis quis eiusmod. Eu elit culpa irure non do ullamco ea tempor. Officia do deserunt in velit sunt ullamco anim duis eiusmod consequat in.',
    when: subDays(new Date(), 69),
    read: true,
    starred: false,
    labels: [],
    group: 'sent',
    attachments: [],
  },
  {
    id: '5aaa797aaddf87549c1bb19f',
    from: {
      name: 'Carol Holland',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Incididunt reprehenderit fugiat deserunt laborum in ad tempor deserunt irure esse fugiat.',
    content:
      'Sint elit magna laboris laboris. Aliqua sit officia reprehenderit proident in minim enim fugiat do consequat adipisicing enim. Cillum non duis occaecat irure laborum ipsum.',
    when: subHours(new Date(), 21),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797afdf0257e8c98b506',
    from: {
      name: 'Wendi Robertson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Velit culpa qui qui culpa laboris fugiat quis labore velit cillum exercitation velit occaecat.',
    content:
      'Eiusmod aliqua duis mollit culpa aliqua excepteur. In velit commodo fugiat aute minim. Deserunt ea fugiat non culpa adipisicing adipisicing cupidatat.',
    when: subMinutes(new Date(), 71),
    read: true,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797ac063963d7bb431b2',
    from: {
      name: 'Thelma Norton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Commodo quis commodo nostrud eiusmod sunt mollit non anim excepteur.',
    content:
      'Esse non culpa culpa occaecat dolor sint. Qui veniam aute dolore labore dolore excepteur. Est Lorem sint incididunt sint ex.',
    when: subWeeks(new Date(), 82),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797a81639a7ba27eec2f',
    from: {
      name: 'Sellers Hamilton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Anim aliqua officia cillum non nisi quis Lorem duis labore do consectetur anim.',
    content:
      'Enim nulla officia non anim duis exercitation ut eu laborum Lorem excepteur commodo duis reprehenderit. Cupidatat deserunt non exercitation labore eu pariatur labore ut id aliqua voluptate sunt. Exercitation dolore deserunt pariatur exercitation occaecat deserunt exercitation nostrud quis incididunt sunt Lorem ut.',
    when: subMinutes(new Date(), 30),
    read: true,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }, { name: 'Priority', color: '#f44336' }],
    group: 'trash',
    attachments: [],
  },
  {
    id: '5aaa797a1032b6a0ed355030',
    from: {
      name: 'Franks Howell',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Occaecat non quis ut sint magna aliquip esse sit incididunt irure exercitation.',
    content:
      'Aliqua ex aliqua quis tempor id. Officia reprehenderit occaecat voluptate consectetur duis minim Lorem cillum minim ea aute aliquip. Amet voluptate aute ea id.',
    when: subHours(new Date(), 36),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797af5014ca11ba340b1',
    from: {
      name: 'Tania Bolton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sit eiusmod sit consectetur nisi enim.',
    content:
      'Consectetur adipisicing eu tempor sunt est laborum irure qui. Lorem labore velit duis sit anim dolore et elit excepteur cupidatat in cillum pariatur esse. Nulla esse duis proident culpa sit eu sint.',
    when: subDays(new Date(), 34),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: ['assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797aa1e4b09dce5cfb05',
    from: {
      name: 'Shepard Hart',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Non ea officia voluptate do aute ea elit minim.',
    content:
      'Velit magna nostrud laboris consequat ut. Nisi esse non sunt dolore culpa ullamco. Ad non eiusmod esse adipisicing aute labore do reprehenderit culpa in eu occaecat qui.',
    when: subWeeks(new Date(), 50),
    read: false,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'trash',
    attachments: [],
  },
  {
    id: '5aaa797a20ae69f0c031707d',
    from: {
      name: 'Solis Cummings',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Incididunt reprehenderit fugiat ad ullamco nulla minim consequat sunt.',
    content:
      'Tempor exercitation minim reprehenderit culpa nostrud minim. Nulla irure incididunt officia anim Lorem. Cupidatat consectetur velit velit esse id veniam excepteur.',
    when: subMinutes(new Date(), 33),
    read: false,
    starred: false,
    labels: [],
    group: 'spam',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797aebeabe6c4ba22dc8',
    from: {
      name: 'Salazar Reed',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Qui duis id exercitation sint duis dolor excepteur qui tempor irure et minim culpa ad.',
    content:
      'Dolor est veniam ullamco esse eu ad deserunt fugiat reprehenderit officia id. Consectetur est minim incididunt consectetur Lorem deserunt deserunt. In do reprehenderit cillum dolor ea et quis aliqua labore dolore veniam et eu culpa.',
    when: subHours(new Date(), 26),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797a5e6ad95e0d2cf06a',
    from: {
      name: 'Dudley Richards',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Mollit do in laboris quis cillum mollit nulla non.',
    content:
      'Fugiat ut amet veniam irure ea esse eiusmod occaecat dolore aute magna dolor. Mollit elit sint ullamco aliqua deserunt qui amet ipsum ex qui. Officia tempor in consectetur eiusmod esse.',
    when: subDays(new Date(), 30),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'sent',
    attachments: ['assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797a9270b42e1631ce7e',
    from: {
      name: 'Stuart Velez',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Minim proident ex id tempor veniam pariatur.',
    content:
      'Ullamco pariatur veniam aliqua amet proident proident fugiat velit esse. Amet in exercitation officia tempor do officia dolor aliquip. Non sunt adipisicing cillum est incididunt est velit dolore laborum enim nulla.',
    when: subMinutes(new Date(), 31),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797ad2b38cdbd2865a4b',
    from: {
      name: 'Jo Meyers',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Anim ut id qui ipsum incididunt in minim veniam incididunt quis.',
    content:
      'Ad ullamco cillum cupidatat proident dolor qui eu. Sit amet reprehenderit irure sit eiusmod pariatur pariatur magna deserunt fugiat mollit ut. Et laborum fugiat mollit amet.',
    when: subWeeks(new Date(), 98),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'trash',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797b5f2fe71db8cd9feb',
    from: {
      name: 'Williamson Bonner',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Id aute in et veniam.',
    content:
      'Quis sunt ad est qui occaecat incididunt minim ex eiusmod pariatur proident Lorem laborum sint. Pariatur quis eu Lorem nulla sit enim. Dolor aute veniam eiusmod sunt ullamco officia dolore ad sint nulla labore.',
    when: subWeeks(new Date(), 63),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797b090aa6894d6506e7',
    from: {
      name: 'Mccormick Roy',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Esse est nisi anim elit quis laboris ea eiusmod do voluptate velit.',
    content:
      'Sit ad veniam sint amet excepteur adipisicing ea aliqua tempor reprehenderit adipisicing minim ad nulla. Sunt Lorem pariatur est reprehenderit sit consequat aliquip amet duis laborum mollit adipisicing esse. Sint velit et elit nulla laborum.',
    when: subWeeks(new Date(), 26),
    read: true,
    starred: false,
    labels: [],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797b293f1c38175a4bce',
    from: {
      name: 'Gilbert Hurst',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Qui nulla occaecat do fugiat.',
    content:
      'Ullamco culpa Lorem adipisicing in exercitation dolor fugiat quis nulla. Veniam in cupidatat ea proident consectetur sunt anim elit consequat minim ex. Cillum veniam reprehenderit cillum labore elit irure cillum.',
    when: subWeeks(new Date(), 91),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }, { name: 'Business', color: '#3F51B5' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b78cecb2170ce2900',
    from: {
      name: 'Moody Moses',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Veniam ut voluptate laborum nisi id ea Lorem qui quis adipisicing excepteur et.',
    content:
      'Magna tempor labore consequat occaecat eiusmod occaecat anim sint ad cupidatat est sint labore est. Reprehenderit cupidatat minim ullamco dolor cupidatat commodo consectetur id est commodo minim consectetur reprehenderit. Sint amet esse mollit voluptate proident cupidatat id nulla nostrud ad adipisicing minim laboris.',
    when: subMinutes(new Date(), 2),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'spam',
    attachments: ['assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797bee6a8903eb58d310',
    from: {
      name: 'Ericka Alford',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Dolore aliquip velit consequat incididunt culpa ipsum fugiat magna exercitation ut consectetur ea.',
    content:
      'Elit eiusmod dolore est ex anim dolor culpa sint consequat. Deserunt nisi mollit anim anim esse exercitation magna aliqua. Sint laboris labore esse nostrud est esse minim id nulla ad nostrud ad irure.',
    when: subMinutes(new Date(), 12),
    read: false,
    starred: false,
    labels: [],
    group: 'social',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b14299482420d2130',
    from: {
      name: 'Best Pruitt',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Irure fugiat ea ipsum eiusmod culpa deserunt proident esse.',
    content:
      'Consectetur amet sint aliquip sit labore do laborum officia duis Lorem qui sint adipisicing commodo. Proident non consequat do consectetur mollit consequat est fugiat. Duis dolor dolor sit et in consequat consequat quis deserunt Lorem nisi ullamco.',
    when: subWeeks(new Date(), 55),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797bad58caabb50533bc',
    from: {
      name: 'Crosby Camacho',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Incididunt laboris reprehenderit ut exercitation exercitation aliquip consequat.',
    content:
      'Est fugiat aute dolor anim laboris ut consequat nulla cupidatat duis laborum cupidatat ullamco. Minim cupidatat ad aute pariatur labore irure cupidatat sunt anim nisi. Amet esse labore voluptate mollit consectetur proident adipisicing sit excepteur cillum ad.',
    when: subMinutes(new Date(), 21),
    read: true,
    starred: false,
    labels: [],
    group: 'drafts',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b6be95c1f6af630f6',
    from: {
      name: 'Davenport Jennings',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Non non dolor laboris sit aliquip est pariatur ad in do duis Lorem.',
    content:
      'Anim qui incididunt ex deserunt occaecat laborum proident in deserunt. Anim ipsum qui aliquip laborum in ut elit quis labore et. Pariatur proident consequat fugiat nisi ullamco enim culpa nisi nisi adipisicing veniam.',
    when: subMinutes(new Date(), 8),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797b8d06bbf8e950fa16',
    from: {
      name: 'Laurel Mathews',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Aute proident id id ad ad cupidatat.',
    content:
      'Do ad duis sunt dolor fugiat reprehenderit mollit adipisicing deserunt sunt minim. Id proident ullamco Lorem amet culpa velit eu officia excepteur. Laborum exercitation fugiat aute dolor magna non dolore ut.',
    when: subDays(new Date(), 86),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'social',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797b759345ba3f5fcd2c',
    from: {
      name: 'Foster Giles',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Laboris anim excepteur consectetur occaecat ut non.',
    content:
      'Lorem nostrud et est Lorem irure veniam Lorem deserunt tempor nostrud culpa. Ut nulla amet irure magna reprehenderit culpa pariatur est ut sint ullamco nostrud. Pariatur dolor elit nulla cillum nostrud id.',
    when: subHours(new Date(), 63),
    read: true,
    starred: false,
    labels: [],
    group: 'promotions',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b8cfb86416e1acf49',
    from: {
      name: 'Juliet Erickson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Pariatur cillum pariatur dolore esse incididunt ut quis enim culpa.',
    content:
      'Commodo aliquip labore cillum esse in aute aliqua. Proident adipisicing Lorem deserunt dolore est do non magna Lorem officia laborum dolore dolor dolor. Ipsum aliqua velit incididunt dolor eu laborum pariatur ipsum duis duis sit incididunt velit.',
    when: subMinutes(new Date(), 11),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797b93866411512a6026',
    from: {
      name: 'Johns Strickland',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Incididunt deserunt sint laboris commodo ea et ullamco voluptate cupidatat esse eiusmod qui.',
    content:
      'In dolore voluptate ullamco eu duis minim eiusmod duis anim minim. Dolore labore ipsum officia ipsum dolore commodo mollit. Esse fugiat commodo nulla dolor non commodo culpa laboris et id eiusmod laboris cupidatat velit.',
    when: subWeeks(new Date(), 51),
    read: true,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'drafts',
    attachments: [],
  },
  {
    id: '5aaa797b89f432a6a38811e1',
    from: {
      name: 'Sharlene Conley',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Lorem proident aliqua mollit aliquip sint velit.',
    content:
      'Aliqua commodo consectetur aute ut. Ipsum excepteur fugiat mollit adipisicing incididunt anim eiusmod non cupidatat. Commodo deserunt proident aute minim.',
    when: subHours(new Date(), 48),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797ba0bafdf084a1c2b9',
    from: {
      name: 'Mallory Mcleod',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Non ex excepteur amet consequat est deserunt.',
    content:
      'Voluptate in pariatur Lorem pariatur eu et eu eiusmod aute esse. Est sint dolor Lorem do esse laboris minim excepteur sunt irure ex. Officia exercitation Lorem reprehenderit ut ut sunt qui aute.',
    when: subWeeks(new Date(), 41),
    read: false,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'social',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b5f42c84c212a8e22',
    from: {
      name: 'Noemi Wooten',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Incididunt duis consequat irure qui velit deserunt velit consequat do eiusmod non sint sint tempor.',
    content:
      'Aliquip aliquip occaecat enim aliquip minim ea aliquip consectetur labore eiusmod adipisicing nostrud. Incididunt laboris tempor minim ipsum sint aliquip dolore anim in. Reprehenderit esse labore irure id cupidatat nostrud cupidatat Lorem fugiat est eu consectetur.',
    when: subMinutes(new Date(), 24),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Priority', color: '#f44336' }],
    group: 'trash',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b13dbf07966dfbbc4',
    from: {
      name: 'Melendez Campbell',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Exercitation pariatur in culpa eiusmod aliqua et aute.',
    content:
      'Ut occaecat pariatur enim commodo ad dolor incididunt laboris occaecat nulla nulla. Velit voluptate veniam amet labore aliqua eiusmod adipisicing. Mollit minim consectetur labore ipsum adipisicing nisi enim officia.',
    when: subWeeks(new Date(), 55),
    read: true,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b2f3b8ad312951b23',
    from: {
      name: 'Dale Munoz',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Anim ex irure culpa mollit ut anim laborum.',
    content:
      'Dolore dolore nisi quis pariatur sunt in commodo aute. Nisi adipisicing aliqua officia adipisicing dolor deserunt reprehenderit consectetur qui elit elit. Cillum incididunt nisi reprehenderit aliquip ullamco et.',
    when: subMinutes(new Date(), 46),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b45d2c6b4dbeadb6d',
    from: {
      name: 'Monroe Jensen',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Do aliquip pariatur cupidatat dolor voluptate incididunt elit.',
    content:
      'Id adipisicing ullamco et est ullamco est. Sint laborum id veniam deserunt sunt tempor ut in sint reprehenderit reprehenderit. Nisi sit aliqua laboris veniam sunt.',
    when: subHours(new Date(), 60),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797be1df17814206c960',
    from: {
      name: 'Spence Henderson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Cillum ipsum nulla deserunt cupidatat officia nulla ex tempor enim labore.',
    content:
      'Enim occaecat ipsum dolore irure deserunt nostrud ipsum nulla adipisicing. Sunt occaecat et culpa adipisicing aliquip. Nostrud ut id deserunt voluptate mollit eiusmod qui id culpa.',
    when: subDays(new Date(), 7),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797bb8c4f2416c15ead5',
    from: {
      name: 'Schneider Mcmahon',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Velit sunt deserunt tempor consectetur proident tempor ut laborum id anim consequat ullamco qui.',
    content:
      'Adipisicing consectetur adipisicing incididunt deserunt id nisi nulla eu excepteur. Sint ullamco nostrud minim esse do. Excepteur eu ut proident elit esse ex dolor consequat veniam mollit do excepteur.',
    when: subDays(new Date(), 41),
    read: true,
    starred: false,
    labels: [],
    group: 'primary',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b6c0c971c013c99ce',
    from: {
      name: 'Logan Hooper',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ex irure laborum eiusmod amet dolore.',
    content:
      'Sint in consequat in nisi cupidatat fugiat mollit in. Enim aliquip laboris sint aute nulla commodo sunt. Proident consequat occaecat pariatur ullamco Lorem ut tempor nisi in fugiat.',
    when: subHours(new Date(), 76),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Priority', color: '#f44336' }],
    group: 'promotions',
    attachments: [],
  },
  {
    id: '5aaa797b7e978c829ad4a090',
    from: {
      name: 'Theresa Wallace',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Amet eu adipisicing qui aute ut tempor elit do eu tempor culpa voluptate.',
    content:
      'Adipisicing aliquip adipisicing ipsum reprehenderit excepteur anim laboris ex laboris labore non incididunt nulla. Anim et minim veniam duis laboris exercitation aliquip. Enim sit fugiat deserunt deserunt anim Lorem in enim fugiat duis Lorem.',
    when: subDays(new Date(), 34),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'sent',
    attachments: [],
  },
  {
    id: '5aaa797bc2c9cfc3272ec0df',
    from: {
      name: 'Carmella Noble',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ea anim eu ut consequat adipisicing tempor cillum deserunt velit incididunt tempor sunt incididunt.',
    content:
      'Lorem labore do deserunt magna. Deserunt aute ea consectetur nostrud aliqua minim sint labore laboris magna magna culpa. Ea ea consectetur excepteur occaecat ea consequat ea sint.',
    when: subDays(new Date(), 76),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797bf62773bccbe26c28',
    from: {
      name: 'Mitchell Gilmore',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Cillum fugiat sit duis et aute.',
    content:
      'Id sint nulla nostrud id consequat occaecat aute ullamco Lorem velit ut deserunt. Ad cupidatat sunt velit fugiat anim laboris irure proident ipsum reprehenderit aliquip qui. In minim commodo nisi laborum aliqua duis.',
    when: subMinutes(new Date(), 21),
    read: true,
    starred: false,
    labels: [],
    group: 'sent',
    attachments: [],
  },
  {
    id: '5aaa797b2e3d4d3838668543',
    from: {
      name: 'Underwood Gregory',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Exercitation officia excepteur sit labore.',
    content:
      'Velit commodo laborum aliqua cillum dolor aliquip voluptate fugiat deserunt tempor. Reprehenderit magna nulla deserunt sunt aliquip consequat velit. Labore incididunt eiusmod ex consectetur ad dolor.',
    when: subWeeks(new Date(), 92),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'sent',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b216d4dae2587b111',
    from: {
      name: 'Kathy Hudson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Exercitation duis aliqua nulla aliqua consequat nisi qui Lorem in duis.',
    content:
      'Dolor sunt deserunt culpa ut dolor amet enim irure incididunt quis laborum. Anim duis veniam velit dolor incididunt proident occaecat adipisicing dolore enim duis irure. Enim sint ad nostrud est.',
    when: subMinutes(new Date(), 13),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'primary',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797bdee66ceacbc84395',
    from: {
      name: 'Francine Carney',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Exercitation eu do nulla occaecat veniam magna veniam ut ad.',
    content:
      'Est deserunt est minim duis anim pariatur velit veniam consectetur duis ipsum tempor dolore. Excepteur tempor tempor esse ut aliquip nulla nulla nulla. Pariatur officia velit dolore officia qui quis non.',
    when: subDays(new Date(), 21),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'spam',
    attachments: ['assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797ba53602f8abb16015',
    from: {
      name: 'Hood Peterson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Pariatur fugiat eiusmod fugiat quis consectetur laboris ipsum cillum non aliqua laboris.',
    content:
      'Duis amet Lorem mollit adipisicing exercitation elit laboris sint exercitation ad occaecat esse quis nostrud. Cillum esse aliquip voluptate ullamco dolore est duis anim ipsum duis ex dolor. Labore aliqua pariatur proident ad mollit duis duis non nulla dolore cupidatat quis cupidatat.',
    when: subDays(new Date(), 36),
    read: false,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'spam',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b7cb106a8cb336dd3',
    from: {
      name: 'Henderson Cantu',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Consequat laboris quis exercitation sunt adipisicing cupidatat labore aliqua.',
    content:
      'Excepteur elit incididunt excepteur officia ex anim ut irure Lorem laborum cupidatat nisi dolor. Ut incididunt enim ut quis. Reprehenderit excepteur quis laborum cillum.',
    when: subHours(new Date(), 65),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797bde9ab55ba5acae3b',
    from: {
      name: 'Erika Vasquez',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Lorem ullamco dolore quis pariatur ullamco esse.',
    content:
      'Veniam dolore Lorem aliqua cupidatat. Ut cupidatat officia occaecat exercitation enim Lorem aliquip. Nulla quis exercitation dolor excepteur eu in id incididunt irure fugiat ea sit eu.',
    when: subMinutes(new Date(), 99),
    read: false,
    starred: true,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'spam',
    attachments: [],
  },
  {
    id: '5aaa797bbb553fecfd85fd40',
    from: {
      name: 'Bradley Pollard',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Mollit eu velit nostrud adipisicing incididunt qui anim nisi pariatur eiusmod irure incididunt.',
    content:
      'Sit quis est do culpa laboris. Excepteur consequat occaecat pariatur magna veniam. Fugiat ipsum velit consectetur exercitation eiusmod duis consectetur minim culpa do.',
    when: subWeeks(new Date(), 82),
    read: true,
    starred: false,
    labels: [],
    group: 'trash',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b5e86204599424bde',
    from: {
      name: 'Strong Cooper',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Quis anim minim velit ea.',
    content:
      'Aute aute sint reprehenderit et tempor anim consequat velit sit anim. Aute deserunt labore cupidatat ullamco. Consectetur nostrud consectetur fugiat tempor occaecat consectetur nulla voluptate.',
    when: subDays(new Date(), 4),
    read: true,
    starred: false,
    labels: [],
    group: 'social',
    attachments: [],
  },
  {
    id: '5aaa797b82e12dc2e0463b74',
    from: {
      name: 'Howe Maldonado',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Irure exercitation quis nulla irure ea minim nostrud anim id.',
    content:
      'Anim et aute voluptate fugiat laborum non culpa. Voluptate cupidatat commodo mollit et non nisi cillum duis sint mollit. Lorem officia ea ad consectetur excepteur laboris officia labore pariatur fugiat ad magna labore labore.',
    when: subWeeks(new Date(), 66),
    read: true,
    starred: false,
    labels: [],
    group: 'sent',
    attachments: [],
  },
  {
    id: '5aaa797b190799b146731084',
    from: {
      name: 'Lena Smith',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ad eiusmod ex velit dolore eu.',
    content:
      'Occaecat ipsum nulla reprehenderit tempor nulla culpa quis ex ad. Amet amet non aute non fugiat Lorem elit qui esse duis proident sit. Ex incididunt aliqua irure ea consectetur velit.',
    when: subDays(new Date(), 39),
    read: false,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'spam',
    attachments: ['assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b6045321b043b9462',
    from: {
      name: 'Elisabeth Mcmillan',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sit anim sunt aute do enim occaecat et eiusmod.',
    content:
      'Minim non non quis esse Lorem aute. Laboris nisi ea do occaecat exercitation qui eiusmod ut magna dolor ea do dolore. Dolore pariatur esse non excepteur ad voluptate ullamco magna laborum quis.',
    when: subWeeks(new Date(), 25),
    read: false,
    starred: false,
    labels: [],
    group: 'social',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b22aedcb21db59b25',
    from: {
      name: 'Mueller Dotson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Proident velit consequat proident elit ex nostrud eu cupidatat cupidatat anim ex dolor.',
    content:
      'Id minim ut ut labore officia. Id enim do eu duis nulla exercitation. Consectetur minim excepteur ipsum quis deserunt pariatur exercitation aliquip in.',
    when: subMinutes(new Date(), 69),
    read: true,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }, { name: 'Business', color: '#3F51B5' }],
    group: 'drafts',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797b4bdd8647076d0ee7',
    from: {
      name: 'Joseph Saunders',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Consequat duis eiusmod nulla anim aliqua ipsum.',
    content:
      'Sint dolor id do ullamco cupidatat mollit aliquip ullamco velit. Occaecat eu esse ut culpa. Laborum ea proident ut non excepteur.',
    when: subWeeks(new Date(), 42),
    read: false,
    starred: false,
    labels: [{ name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b7722a587d02ab501',
    from: {
      name: 'Hilda Mcguire',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Cillum laborum amet dolor in magna cupidatat et consectetur sit sunt laborum ullamco.',
    content:
      'Ad quis commodo laboris dolor magna et incididunt excepteur incididunt ipsum consectetur. Dolor ullamco minim anim deserunt et minim culpa commodo qui occaecat. Aliqua incididunt in aliquip aliquip occaecat pariatur enim.',
    when: subMinutes(new Date(), 56),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'spam',
    attachments: ['assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797b6a715195941d5fca',
    from: {
      name: 'Rosella Barry',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Anim ullamco ex esse non amet commodo elit dolore proident commodo sint laborum.',
    content:
      'Officia voluptate eu ipsum tempor consequat sint proident nulla officia. Irure duis in esse laborum tempor irure aliqua velit voluptate eu amet ipsum exercitation. Dolor in ex et anim.',
    when: subWeeks(new Date(), 14),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'trash',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797ba6f559e5520d469b',
    from: {
      name: 'Moore Hicks',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Consectetur sint nulla laboris exercitation minim eu dolore nisi deserunt dolore minim est qui ad.',
    content:
      'Id enim ea deserunt nostrud eiusmod. Duis veniam enim occaecat duis sint est. Voluptate id enim exercitation culpa commodo cillum ut nisi.',
    when: subWeeks(new Date(), 83),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'social',
    attachments: [],
  },
  {
    id: '5aaa797b3dbe1cc198446c67',
    from: {
      name: 'Sherry Watkins',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ipsum esse proident sunt nisi.',
    content:
      'Nisi minim consequat deserunt ut exercitation dolore est tempor et. Elit est pariatur id dolor non elit eu veniam quis quis ut est cupidatat. Ut consectetur magna anim ex duis do incididunt voluptate exercitation consequat.',
    when: subHours(new Date(), 97),
    read: true,
    starred: false,
    labels: [],
    group: 'drafts',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797be72ef474ae3c1c2e',
    from: {
      name: 'Deleon Hood',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Nostrud dolore culpa esse ut consequat Lorem sit fugiat nulla elit pariatur duis nulla occaecat.',
    content:
      'Fugiat qui laborum Lorem deserunt enim ipsum non ea deserunt ut enim cillum proident eiusmod. Eu eu dolore eu nostrud laborum nulla. Ut sint nostrud excepteur adipisicing nulla sit.',
    when: subWeeks(new Date(), 92),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Project X', color: '#03A9F4' }],
    group: 'trash',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797bc4e9863760eec156',
    from: {
      name: 'Brooke Ballard',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Pariatur proident minim amet deserunt consectetur voluptate esse sunt ea anim sit.',
    content:
      'Eiusmod ullamco adipisicing et dolore et labore anim consectetur sint do ipsum. Occaecat dolor do amet id magna ullamco nulla ipsum tempor. Magna laborum duis id laborum adipisicing sit officia aute elit.',
    when: subHours(new Date(), 47),
    read: false,
    starred: false,
    labels: [],
    group: 'drafts',
    attachments: [],
  },
  {
    id: '5aaa797bddcddb4f5be9406f',
    from: {
      name: 'Kayla Yang',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ullamco culpa cupidatat ex ipsum magna cupidatat tempor pariatur consectetur Lorem amet ad est.',
    content:
      'Proident sunt est nisi id do veniam. Enim fugiat in aliquip adipisicing elit. Do adipisicing et ut do non eiusmod sint velit tempor veniam exercitation qui cupidatat.',
    when: subDays(new Date(), 9),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'trash',
    attachments: [],
  },
  {
    id: '5aaa797bdd258edec01d1209',
    from: {
      name: 'Margret Harrison',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Esse irure aliquip officia excepteur commodo adipisicing duis elit eiusmod mollit in.',
    content:
      'Eiusmod labore aliquip laboris sint fugiat anim veniam ex. Mollit ipsum commodo in officia velit Lorem elit. Excepteur culpa Lorem aliquip ea.',
    when: subWeeks(new Date(), 89),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Priority', color: '#f44336' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797b5ac560fa1c716af0',
    from: {
      name: 'Henrietta Ruiz',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Irure consectetur labore laboris reprehenderit ex.',
    content:
      'Est aute incididunt dolore ex est adipisicing sint sit sint non laboris. Sit in ut nostrud est deserunt. Eiusmod pariatur veniam cillum sit quis occaecat irure exercitation officia.',
    when: subMinutes(new Date(), 52),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Fun', color: '#9C27B0' }],
    group: 'promotions',
    attachments: ['assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b33a34a237301a3be',
    from: {
      name: 'Augusta Durham',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Culpa nostrud officia occaecat cillum est sint veniam laborum voluptate velit do eu.',
    content:
      'Anim dolor est commodo quis laborum aute velit mollit duis nostrud deserunt et consequat. Eu nostrud est enim adipisicing laboris proident cillum ex. Laborum est consequat veniam laborum sint aute.',
    when: subDays(new Date(), 23),
    read: true,
    starred: false,
    labels: [],
    group: 'promotions',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b3b0f9219343435d7',
    from: {
      name: 'Mona Lane',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject:
      'Dolor esse ea voluptate nulla cupidatat nostrud consectetur laboris nostrud tempor mollit tempor officia excepteur.',
    content:
      'Ut consequat amet exercitation officia elit laboris tempor excepteur. Reprehenderit quis sunt sit elit est mollit in exercitation est excepteur pariatur consectetur elit minim. Consequat aute deserunt officia nostrud irure esse aliqua exercitation ea non.',
    when: subDays(new Date(), 34),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'trash',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b4e446972ae0883c6',
    from: {
      name: 'Mann Silva',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sint sint enim adipisicing est.',
    content:
      'Cupidatat dolore nulla ex proident magna cupidatat aliquip amet quis ut minim consectetur reprehenderit. Occaecat proident exercitation sit officia deserunt et. Adipisicing laborum mollit quis enim nostrud duis magna ea nostrud aliquip ipsum irure.',
    when: subMinutes(new Date(), 3),
    read: true,
    starred: false,
    labels: [],
    group: 'drafts',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797bb8945e71fccd04ad',
    from: {
      name: 'Mills Sutton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Occaecat eiusmod magna aute ipsum tempor voluptate enim sunt.',
    content:
      'Occaecat mollit veniam aute magna dolor excepteur culpa. Elit commodo ipsum incididunt non officia sit reprehenderit non in sit. Mollit irure cupidatat esse ex ex.',
    when: subWeeks(new Date(), 28),
    read: false,
    starred: false,
    labels: [],
    group: 'promotions',
    attachments: [],
  },
  {
    id: '5aaa797bd679c024d769ba85',
    from: {
      name: 'Helena Thornton',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ullamco magna sunt ad consectetur duis nostrud do ex cupidatat dolore culpa labore.',
    content:
      'Deserunt est fugiat elit eiusmod adipisicing officia. Ad exercitation occaecat consectetur labore reprehenderit commodo. Dolore irure ad do commodo anim.',
    when: subHours(new Date(), 78),
    read: true,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'social',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797b2c6a1d9da11159b2',
    from: {
      name: 'Ashley Salas',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Et ex commodo enim aliqua non nisi esse sunt ipsum in incididunt do.',
    content:
      'Commodo sint irure fugiat laboris eu deserunt anim occaecat aute commodo pariatur. Amet voluptate ex mollit incididunt duis consequat cupidatat cupidatat laborum officia nisi culpa sit. Aliqua non commodo consectetur adipisicing.',
    when: subMinutes(new Date(), 34),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Priority', color: '#f44336' }],
    group: 'social',
    attachments: [],
  },
  {
    id: '5aaa797b9631e2dd8502088d',
    from: {
      name: 'Alana Pope',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Officia mollit irure id sint voluptate et enim esse sint minim in fugiat.',
    content:
      'Ipsum incididunt quis nisi aliqua eiusmod quis tempor. Consectetur reprehenderit dolor excepteur irure mollit consectetur cupidatat. Laboris reprehenderit Lorem irure anim cillum et.',
    when: subMinutes(new Date(), 12),
    read: true,
    starred: true,
    labels: [{ name: 'Business', color: '#3F51B5' }, { name: 'Priority', color: '#f44336' }],
    group: 'trash',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797bcba2d81d66e65b57',
    from: {
      name: 'Dollie Bridges',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Ipsum minim elit duis officia aute anim magna mollit duis quis.',
    content:
      'Ex deserunt ut officia do. Lorem ullamco aute consectetur minim culpa. Ea incididunt dolore nulla excepteur nulla qui exercitation sit laborum.',
    when: subDays(new Date(), 95),
    read: false,
    starred: false,
    labels: [{ name: 'Business', color: '#3F51B5' }],
    group: 'primary',
    attachments: ['assets/img/attachments/2.jpg', 'assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797bae3fd8e713e90f4f',
    from: {
      name: 'Dillon Bright',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Consectetur ipsum dolor ullamco ut exercitation aliqua labore do ea ea dolore irure.',
    content:
      'Sunt nisi consequat reprehenderit ullamco ut consequat laboris laborum laboris magna irure culpa. Nisi nisi velit ut pariatur eiusmod velit consequat elit mollit laborum exercitation sunt. Excepteur magna et est enim deserunt nostrud consequat nisi quis ad Lorem officia eu cupidatat.',
    when: subMinutes(new Date(), 41),
    read: false,
    starred: true,
    labels: [{ name: 'Fun', color: '#9C27B0' }, { name: 'Priority', color: '#f44336' }],
    group: 'primary',
    attachments: ['assets/img/attachments/5.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b444d88ea82d91a29',
    from: {
      name: 'Emilia Robles',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Elit est qui laborum exercitation labore pariatur dolore commodo enim laboris enim ea.',
    content:
      'Laboris non est veniam incididunt. Culpa excepteur est aliquip amet duis occaecat amet aute aliqua. Amet ad cillum fugiat adipisicing consequat elit aliqua.',
    when: subWeeks(new Date(), 5),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'social',
    attachments: ['assets/img/attachments/3.jpg', 'assets/img/attachments/3.jpg'],
  },
  {
    id: '5aaa797b5c321eb72721a6e0',
    from: {
      name: 'Ashley Mcdonald',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Do mollit consequat adipisicing sunt laborum proident labore.',
    content:
      'Laborum incididunt quis ullamco est ut. Elit proident dolor id voluptate sit. Ad Lorem dolor et amet deserunt eiusmod sunt ut in.',
    when: subDays(new Date(), 74),
    read: false,
    starred: true,
    labels: [],
    group: 'promotions',
    attachments: ['assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797baab617ae8261db15',
    from: {
      name: 'Sims Donovan',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Laboris exercitation ea do culpa aute non id nostrud dolor laborum duis eiusmod.',
    content:
      'Fugiat non eu sunt do et velit ipsum enim excepteur aute adipisicing pariatur pariatur. Cupidatat irure veniam enim eiusmod. Fugiat laborum culpa labore in culpa exercitation reprehenderit laborum cupidatat reprehenderit ad laborum.',
    when: subMinutes(new Date(), 36),
    read: true,
    starred: false,
    labels: [{ name: 'Fun', color: '#9C27B0' }],
    group: 'primary',
    attachments: [],
  },
  {
    id: '5aaa797b003df0c30819f2d9',
    from: {
      name: 'Lolita Pearson',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Occaecat consectetur voluptate exercitation ullamco fugiat exercitation id sit in eu voluptate.',
    content:
      'Ut dolore mollit nulla nulla sint. Enim proident quis cillum cupidatat reprehenderit minim sunt voluptate. Fugiat ex dolore ullamco anim in aliqua est labore irure eiusmod sunt sint.',
    when: subDays(new Date(), 68),
    read: true,
    starred: true,
    labels: [],
    group: 'social',
    attachments: [],
  },
  {
    id: '5aaa797b208c2ea735ab7793',
    from: {
      name: 'Patel Herman',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Sunt quis excepteur magna voluptate cupidatat nostrud ad do ut reprehenderit est.',
    content:
      'Anim quis sint labore in ad amet magna sit et. Adipisicing amet proident occaecat et adipisicing consectetur ullamco est tempor. Voluptate irure tempor pariatur magna nostrud officia mollit amet sint est.',
    when: subHours(new Date(), 50),
    read: true,
    starred: true,
    labels: [{ name: 'Project X', color: '#03A9F4' }],
    group: 'primary',
    attachments: ['assets/img/attachments/5.jpg'],
  },
  {
    id: '5aaa797b03b5b5476d8d1ea5',
    from: {
      name: 'Montoya Franks',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Nulla aute excepteur labore nostrud dolor.',
    content:
      'Ex sint incididunt excepteur irure nisi in aute. Lorem do id ut et cillum laborum eu occaecat cillum nisi laboris. Enim consectetur anim mollit minim nulla minim mollit laborum labore enim adipisicing enim eiusmod aliqua.',
    when: subMinutes(new Date(), 70),
    read: false,
    starred: true,
    labels: [],
    group: 'spam',
    attachments: ['assets/img/attachments/4.jpg', 'assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797b59fafe52cc3e672b',
    from: {
      name: 'Leona Cruz',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Voluptate dolore minim eiusmod Lorem aliquip consequat consequat id non minim nisi aliqua commodo esse.',
    content:
      'Aliquip exercitation qui id elit esse voluptate eu laborum ullamco laboris nulla mollit laboris. Duis veniam excepteur sit nostrud sint nulla. Do tempor ea fugiat eu dolor est tempor dolore id ad laborum officia.',
    when: subMinutes(new Date(), 41),
    read: false,
    starred: false,
    labels: [],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/4.jpg'],
  },
  {
    id: '5aaa797b7d66917b33161398',
    from: {
      name: 'Lakeisha Hawkins',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Elit aute nostrud culpa nisi esse aliquip.',
    content:
      'Laboris ut dolore exercitation ipsum est cillum duis non commodo reprehenderit aute nisi. Ut laborum dolore ex nulla officia ullamco quis ex ipsum. Do exercitation cillum nulla laborum cupidatat officia fugiat exercitation occaecat cupidatat proident esse incididunt consequat.',
    when: subWeeks(new Date(), 25),
    read: true,
    starred: true,
    labels: [],
    group: 'promotions',
    attachments: [],
  },
  {
    id: '5aaa797b3f628c5735462b01',
    from: {
      name: 'Trevino Castaneda',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Anim pariatur amet qui tempor aliquip dolore ut nostrud mollit deserunt esse.',
    content:
      'Consequat aliqua aliquip quis Lorem magna ea occaecat amet consectetur sunt ut incididunt nostrud. Ipsum id nostrud sint officia et in. Lorem proident incididunt pariatur pariatur aliqua dolor velit qui.',
    when: subHours(new Date(), 73),
    read: true,
    starred: true,
    labels: [],
    group: 'primary',
    attachments: ['assets/img/attachments/1.jpg'],
  },
  {
    id: '5aaa797badf3a933c5b770cf',
    from: {
      name: 'Gabrielle Goodwin',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Est voluptate quis sint nulla cupidatat voluptate irure.',
    content:
      'Pariatur ipsum irure officia anim non irure aliqua cillum aute excepteur ullamco. Voluptate dolor id nostrud dolore reprehenderit fugiat ipsum mollit culpa ex. Minim commodo nulla sunt elit id do eiusmod.',
    when: subWeeks(new Date(), 26),
    read: true,
    starred: false,
    labels: [],
    group: 'primary',
    attachments: [],
  },
  {
    id: '5aaa797befb33e435c8becfc',
    from: {
      name: 'Reese Guthrie',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject:
      'Cupidatat nostrud dolore tempor sunt nisi consequat duis quis minim fugiat officia sunt eiusmod consequat.',
    content:
      'Anim esse excepteur mollit irure laboris mollit non ipsum dolor elit. Cupidatat adipisicing ad laborum ea est laborum id do quis. Elit minim exercitation commodo non consectetur.',
    when: subMinutes(new Date(), 55),
    read: false,
    starred: false,
    labels: [{ name: 'Project X', color: '#03A9F4' }, { name: 'Priority', color: '#f44336' }],
    group: 'primary',
    attachments: ['assets/img/attachments/2.jpg'],
  },
  {
    id: '5aaa797bb363ee213dde3ad0',
    from: {
      name: 'Albert Irwin',
      mail: 'demo@demomail.com',
    },
    to: {
      name: 'David Smith',
      mail: 'davidsmith@demomail.com',
    },
    subject: 'Laboris do mollit deserunt et laborum et enim.',
    content:
      'Aute enim et incididunt irure consequat fugiat laborum. Aute magna qui do voluptate cillum. Nostrud deserunt cupidatat reprehenderit non duis tempor laboris occaecat nulla aliqua deserunt.',
    when: subHours(new Date(), 52),
    read: true,
    starred: false,
    labels: [],
    group: 'social',
    attachments: ['assets/img/attachments/1.jpg', 'assets/img/attachments/5.jpg', 'assets/img/attachments/4.jpg'],
  },
] as Mail[];
