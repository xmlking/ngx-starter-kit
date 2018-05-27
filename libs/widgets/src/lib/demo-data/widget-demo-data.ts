import * as moment from 'moment';

const today = moment().minutes(0);
const now = moment();

export const salesChartDemoValues = [
  193, 82, 195, 62, 112, 73, 193, 199, 111, 177, 34, 143, 53, 90, 161, 31, 190, 129, 185, 133, 188, 107, 123, 125, 184, 152, 78, 172, 86, 152, 185, 139, 147, 65, 111, 86, 89, 117, 101, 128, 126, 178, 198, 110, 140, 121, 151, 142, 178, 11, 88, 182, 104, 26, 38, 72, 196, 132, 22, 81, 22, 159, 40, 124, 123, 133, 135, 167, 83, 111, 179, 83, 121, 136, 113
];

export const salesChartDemoLabels = () => {
  return salesChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const visitsChartDemoValues = [
  55, 128, 155, 26, 37, 136, 91, 12, 7, 184, 88, 107, 128, 153, 59, 24, 135, 26, 85, 123, 161, 53, 116, 134
];


export const visitsChartDemoLabels = () => {
  return visitsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const clicksChartDemoValues = [
  186, 34, 172, 161, 27, 163, 87, 119, 123, 15, 180, 7, 72, 107, 181, 33, 45, 143, 91, 200
];

export const clicksChartDemoLabels = () => {
  return clicksChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const conversionsChartDemoValues = [
  160, 45, 77, 162, 55, 87, 102, 159, 87, 34, 98, 88, 176, 140, 102, 187, 72, 87, 46, 99
];

export const conversionsChartDemoLabels = () => {
  return conversionsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const salesSummaryDemoData = { revenue: [6, 4, 8, 3, 10, 8, 4], expenses: [6, 4, 8, 3, 10, 8, 4] };
export const salesSummaryDemoLabels = () => {
  return salesSummaryDemoData.revenue.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};


export let top5CategoriesDemoData = [
  {
    'label': 'Scanners',
    'value': 24
  },
  {
    'label': 'Smartphones',
    'value': 33
  },
  {
    'label': 'Printers',
    'value': 16
  },
  {
    'label': 'TVs',
    'value': 8
  },
  {
    'label': 'DVDs',
    'value': 19
  }
];

export const audienceOverviewUsersDemoDataLastWeek = [81, 71, 98, 54, 99, 120, 132];
export const audienceOverviewUsersDemoData = [108, 78, 63, 119, 85, 140, 101];
export const audienceOverviewUsersDemoLabels = () => {
  return audienceOverviewUsersDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const audienceOverviewSessionsDemoDataLastWeek = [81, 46, 99, 102, 66, 140, 173];
export const audienceOverviewSessionsDemoData = [125, 43, 87, 150, 120, 100, 164];
export const audienceOverviewSessionsDemoLabels = () => {
  return audienceOverviewSessionsDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const audienceOverviewBounceRateDemoDataLastWeek = [8.8, 14.5, 12.3, 16.7, 7.2, 6.1, 8.4];
export const audienceOverviewBounceRateDemoData = [5.5, 12.3, 8.4, 7.3, 9.8, 6.6, 9.2];
export const audienceOverviewBounceRateDemoLabels = () => {
  return audienceOverviewBounceRateDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const audienceOverviewSessionDurationDemoLastWeek = [80, 98, 87, 102, 120, 108, 145];
export const audienceOverviewSessionDurationDemoData = [125, 43, 87, 150, 120, 100, 164];
export const audienceOverviewSessionDurationDemoLabels = () => {
  return audienceOverviewSessionDurationDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};

export const recentSalesTableDemoData = [
  {
    name: 'Apple iPhone 8',
    price: '$899.99',
    timestamp: now.clone().subtract(2, 'minutes').fromNow()
  },
  {
    name: 'USB-C Cable',
    price: '$8.99',
    timestamp: now.clone().subtract(6, 'minutes').fromNow()
  },
  {
    name: 'Apple MacBook Pro',
    price: '$1299.99',
    timestamp: now.clone().subtract(14, 'minutes').fromNow()
  },
  {
    name: 'Samsung Galaxy S9',
    price: '$799.99',
    timestamp: now.clone().subtract(17, 'minutes').fromNow()
  },
  {
    name: 'Lightning to USB-C Adapter',
    price: '$16.99',
    timestamp: now.clone().subtract(25, 'minutes').fromNow()
  },
  {
    name: 'Samsung Galaxy S8 256GB',
    price: '$599.99',
    timestamp: now.clone().subtract(42, 'minutes').fromNow()
  },
  {
    name: 'Apple iPhone X',
    price: '$1099.99',
    timestamp: now.clone().subtract(87, 'minutes').fromNow()
  },
  {
    name: 'Apple iPhone 7 128GB',
    price: '$699.99',
    timestamp: now.clone().subtract(97, 'minutes').fromNow()
  },
  {
    name: 'Apple Mac Pro',
    price: '$999.99',
    timestamp: now.clone().subtract(104, 'minutes').fromNow()
  },
  {
    name: 'Samsung DEX',
    price: '$54.99',
    timestamp: now.clone().subtract(150, 'minutes').fromNow()
  }
];

export const recentSalesChartDemoValues = [
  13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22,
  26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17
];
export const recentSalesChartDemoLabels = () => {
  return recentSalesChartDemoValues.map((value, index) => now.clone().subtract(index * 10, 'minutes').fromNow()).reverse();
};

export const advancedPieChartDemoValues = [1012, 1656, 1132, 1025, 655, 453];
export const advancedPieChartDemoLabels = ['Germany', 'France', 'USA', 'India', 'Italy', 'China'];

/*
export const widget1Data = [
  {
    key: 'Users',
    area: true,
    color: '#7986CC',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 135
      },s
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 412
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 242
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 546
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 167
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 240
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget2Data = [
  {
    key: 'Visits',
    area: true,
    color: '#FFD54F',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 122
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 732
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 555
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 332
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 585
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 287
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget3Data = [
  {
    key: 'Total Clicks',
    area: true,
    color: '#4DD0E2',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 360
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 186
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 434
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 558
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 372
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 496
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget4Data = [
  {
    key: 'Conversions',
    area: true,
    color: '#81C683',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 89
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 145
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 173
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 262
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 142
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 174
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const recentCustomersDemoValues = [
  13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22, 26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17
];

export let recentSalesDemoDataGenerator = () => {
  const temp = [
    {
      key: 'Sales',
      area: true,
      values: []
    }
  ];

  recentCustomersDemoValues.forEach((value, index) => {
    temp[0].values.unshift({
      'date': today - 1000 * 60 * 60 * index,
      'value': value
    });
  });

  return temp;
};

export let serverLoadDemoData = [
  {
    key: 'Web Server',
    area: true,
    color: '#E6E6E6',
    values: [
      {
        'xAxis': 8,
        'value': 0
      },
      {
        'xAxis': 7,
        'value': 89
      },
      {
        'xAxis': 6,
        'value': 145
      },
      {
        'xAxis': 5,
        'value': 173
      },
      {
        'xAxis': 4,
        'value': 262
      },
      {
        'xAxis': 3,
        'value': 142
      },
      {
        'xAxis': 2,
        'value': 174
      },
      {
        'xAxis': 1,
        'value': 0
      },
    ]
  }
];



export const trafficSourcesDemoData = [
  [
    {
      key: 'Direct',
      area: true,
      color: '#3F51B5',
      sum: 1348,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 145
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 173
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 262
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 142
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 174
        },
        {
          'date': today,
          'value': 0
        },
      ]
    }
  ],
  [
    {
      key: 'Referral',
      area: true,
      color: '#2196F3',
      sum: 1252,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 12
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 80
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 157
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 195
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 142
        },
        {
          'date': today,
          'value': 94
        },
      ]
    }
  ],
  [
    {
      key: 'Social',
      area: true,
      color: '#FF9800',
      sum: 954,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 90
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 76
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 185
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 234
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 142
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 198
        },
        {
          'date': today,
          'value': 188
        },
      ]
    }
  ],
  [
    {
      key: 'Search',
      area: true,
      color: '#4CAF50',
      sum: 720,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 54
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 99
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 132
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 85
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 54
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 104
        },
        {
          'date': today,
          'value': 80
        },
      ]
    }
  ],
  [
    {
      key: 'Internal',
      area: true,
      color: '#f44336',
      sum: 42,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 12
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 6
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 10
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 16
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 14
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 18
        },
        {
          'date': today,
          'value': 10
        },
      ]
    }
  ],
];
*/
