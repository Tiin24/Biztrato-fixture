const matches = [{tab_name:'A', match:[{
      id: 1,
      group: 'A',
      match: 1,
      home: { name: 'Qatar', goals: null },
      away: { name: 'Ecuador', goals: null },
      date: '20 November 2022 19:00',
      stadium: 'albayt'
    },
    {
      id: 2,
      group: 'A',
      match: 1,
      home: { name: 'Senegal', goals: null },
      away: { name: 'Netherlands', goals: null },
      date: '21 November 2022 19:00',
      stadium: 'althumama'
    },
    {
      id: 3,
      group: 'A',
      match: 2,
      home: { name: 'Netherlands', goals: null },
      away: { name: 'Ecuador', goals: null },
      date: '25 November 2022 19:00',
      stadium: 'khalifa'
    },
    {
      id: 4,
      group: 'A',
      match: 2,
      home: { name: 'Qatar', goals: null },
      away: { name: 'Senegal', goals: null },
      date: '25 November 2022 16:00',
      stadium: 'althumama'
    },
    {
      id: 5,
      group: 'A',
      match: 3,
      home: { name: 'Netherlands', goals: null },
      away: { name: 'Qatar', goals: null },
      date: '29 November 2022 18:00',
      stadium: 'albayt'
    },
    {
      id: 6,
      group: 'A',
      match: 3,
      home: { name: 'Ecuador', goals: null },
      away: { name: 'Senegal', goals: null },
      date: '29 November 2022 18:00',
      stadium: 'khalifa'
    }]},
    {tab_name:'B', match:[{
      id: 7,
      group: 'B',
      match: 1,
      home: { name: 'England', goals: null },
      away: { name: 'Iran', goals: null },
      date: '21 November 2022 16:00',
      stadium: 'khalifa'
    },
    {
      id: 8,
      group: 'B',
      match: 1,
      home: { name: 'United States', goals: null },
      away: { name: 'Wales', goals: null },
      date: '21 November 2022 22:00',
      stadium: 'ahmad'
    },
    {
      id: 9,
      group: 'B',
      match: 2,
      home: { name: 'Wales', goals: null },
      away: { name: 'Iran', goals: null },
      date: '25 November 2022 13:00',
      stadium: 'ahmad'
    },
    {
      id: 10,
      group: 'B',
      match: 2,
      home: { name: 'England', goals: null },
      away: { name: 'United States', goals: null },
      date: '25 November 2022 22:00',
      stadium: 'albayt'
    },
    {
      id: 11,
      group: 'B',
      match: 3,
      home: { name: 'Wales', goals: null },
      away: { name: 'England', goals: null },
      date: '29 November 2022 22:00',
      stadium: 'ahmad'
    },
    {
      id: 12,
      group: 'B',
      match: 3,
      home: { name: 'Iran', goals: null },
      away: { name: 'United States', goals: null },
      date: '29 November 2022 22:00',
      stadium: 'althumama'
    }]},
    {tab_name:'C', match:[{
      id: 13,
      group: 'C',
      match: 1,
      home: { name: 'Argentina', goals: null },
      away: { name: 'Saudi Arabia', goals: null },
      date: '22 November 2022 13:00',
      stadium: 'lusail'
    },
    {
      id: 14,
      group: 'C',
      match: 1,
      home: { name: 'Mexico', goals: null },
      away: { name: 'Poland', goals: null },
      date: '22 November 2022 19:00',
      stadium: 's974'
    },
    {
      id: 15,
      group: 'C',
      match: 2,
      home: { name: 'Poland', goals: null },
      away: { name: 'Saudi Arabia', goals: null },
      date: '26 November 2022 16:00',
      stadium: 'education'
    },
    {
      id: 16,
      group: 'C',
      match: 2,
      home: { name: 'Argentina', goals: null },
      away: { name: 'Mexico', goals: null },
      date: '26 November 2022 22:00',
      stadium: 'lusail'
    },
    {
      id: 17,
      group: 'C',
      match: 3,
      home: { name: 'Poland', goals: null },
      away: { name: 'Argentina', goals: null },
      date: '30 November 2022 22:00',
      stadium: 's974'
    },
    {
      id: 18,
      group: 'C',
      match: 3,
      home: { name: 'Saudi Arabia', goals: null },
      away: { name: 'Mexico', goals: null },
      date: '30 November 2022 22:00',
      stadium: 'lusail'
    }]},
    {tab_name:'D', match:[{
      id: 19,
      group: 'D',
      match: 1,
      home: { name: 'France', goals: null },
      away: { name: 'Australia', goals: null },
      date: '22 November 2022 22:00',
      stadium: 'aljanoub'
    },
    {
      id: 20,
      group: 'D',
      match: 1,
      home: { name: 'Denmark', goals: null },
      away: { name: 'Tunisia', goals: null },
      date: '22 November 2022 16:00',
      stadium: 'education'
    },
    {
      id: 21,
      group: 'D',
      match: 2,
      home: { name: 'Tunisia', goals: null },
      away: { name: 'Australia', goals: null },
      date: '26 November 2022 13:00',
      stadium: 'aljanoub'
    },
    {
      id: 22,
      group: 'D',
      match: 2,
      home: { name: 'France', goals: null },
      away: { name: 'Denmark', goals: null },
      date: '26 November 2022 19:00',
      stadium: 's974'
    },
    {
      id: 23,
      group: 'D',
      match: 3,
      home: { name: 'Tunisia', goals: null },
      away: { name: 'France', goals: null },
      date: '30 November 2022 18:00',
      stadium: 'education'
    },
    {
      id: 24,
      group: 'D',
      match: 3,
      home: { name: 'Australia', goals: null },
      away: { name: 'Denmark', goals: null },
      date: '30 November 2022 18:00',
      stadium: 'aljanoub'
    }]},
    {tab_name:'E', match:[{
      id: 25,
      group: 'E',
      match: 1,
      home: { name: 'Spain', goals: null },
      away: { name: 'Costa Rica', goals: null },
      date: '23 November 2022 19:00',
      stadium: 'althumama'
    },
    {
      id: 26,
      group: 'E',
      match: 1,
      home: { name: 'Germany', goals: null },
      away: { name: 'Japan', goals: null },
      date: '23 November 2022 16:00',
      stadium: 'khalifa'
    },
    {
      id: 27,
      group: 'E',
      match: 2,
      home: { name: 'Japan', goals: null },
      away: { name: 'Costa Rica', goals: null },
      date: '27 November 2022 13:00',
      stadium: 'ahmad'
    },
    {
      id: 28,
      group: 'E',
      match: 2,
      home: { name: 'Spain', goals: null },
      away: { name: 'Germany', goals: null },
      date: '27 November 2022 22:00',
      stadium: 'albayt'
    },
    {
      id: 29,
      group: 'E',
      match: 3,
      home: { name: 'Japan', goals: null },
      away: { name: 'Spain', goals: null },
      date: '1 December 2022 22:00',
      stadium: 'khalifa'
    },
    {
      id: 30,
      group: 'E',
      match: 3,
      home: { name: 'Costa Rica', goals: null },
      away: { name: 'Germany', goals: null },
      date: '1 December 2022 22:00',
      stadium: 'albayt'
    }]},
    {tab_name:'F', match:[{
      id: 31,
      group: 'F',
      match: 1,
      home: { name: 'Belgium', goals: null },
      away: { name: 'Canada', goals: null },
      date: '23 November 2022 22:00',
      stadium: 'ahmad'
    },
    {
      id: 32,
      group: 'F',
      match: 1,
      home: { name: 'Morocco', goals: null },
      away: { name: 'Croatia', goals: null },
      date: '23 November 2022 13:00',
      stadium: 'albayt'
    },
    {
      id: 33,
      group: 'F',
      match: 2,
      home: { name: 'Croatia', goals: null },
      away: { name: 'Canada', goals: null },
      date: '27 November 2022 19:00',
      stadium: 'khalifa'
    },
    {
      id: 34,
      group: 'F',
      match: 2,
      home: { name: 'Belgium', goals: null },
      away: { name: 'Morocco', goals: null },
      date: '27 November 2022 16:00',
      stadium: 'althumama'
    },
    {
      id: 35,
      group: 'F',
      match: 3,
      home: { name: 'Croatia', goals: null },
      away: { name: 'Belgium', goals: null },
      date: '1 December 2022 18:00',
      stadium: 'ahmad'
    },
    {
      id: 36,
      group: 'F',
      match: 3,
      home: { name: 'Canada', goals: null },
      away: { name: 'Morocco', goals: null },
      date: '1 December 2022 18:00',
      stadium: 'althumama'
    }]},
    {tab_name:'G', match:[{
      id: 37,
      group: 'G',
      match: 1,
      home: { name: 'Brazil', goals: null },
      away: { name: 'Serbia', goals: null },
      date: '24 November 2022 22:00',
      stadium: 'lusail'
    },
    {
      id: 38,
      group: 'G',
      match: 1,
      home: { name: 'Switzerland', goals: null },
      away: { name: 'Cameroon', goals: null },
      date: '24 November 2022 13:00',
      stadium: 'aljanoub'
    },
    {
      id: 39,
      group: 'G',
      match: 2,
      home: { name: 'Cameroon', goals: null },
      away: { name: 'Serbia', goals: null },
      date: '28 November 2022 13:00',
      stadium: 'aljanoub'
    },
    {
      id: 40,
      group: 'G',
      match: 2,
      home: { name: 'Brazil', goals: null },
      away: { name: 'Switzerland', goals: null },
      date: '28 November 2022 19:00',
      stadium: 's974'
    },
    {
      id: 41,
      group: 'G',
      match: 3,
      home: { name: 'Cameroon', goals: null },
      away: { name: 'Brazil', goals: null },
      date: '2 December 2022 22:00',
      stadium: 'lusail'
    },
    {
      id: 42,
      group: 'G',
      match: 3,
      home: { name: 'Serbia', goals: null },
      away: { name: 'Switzerland', goals: null },
      date: '2 December 2022 22:00',
      stadium: 's974'
    }]},
    {tab_name:'H', match:[{
      id: 43,
      group: 'H',
      match: 1,
      home: { name: 'Portugal', goals: null },
      away: { name: 'Ghana', goals: null },
      date: '24 November 2022 19:00',
      stadium: 's974'
    },
    {
      id: 44,
      group: 'H',
      match: 1,
      home: { name: 'Uruguay', goals: null },
      away: { name: 'South Korea', goals: null },
      date: '24 November 2022 16:00',
      stadium: 'education'
    },
    {
      id: 45,
      group: 'H',
      match: 2,
      home: { name: 'South Korea', goals: null },
      away: { name: 'Ghana', goals: null },
      date: '28 November 2022 16:00',
      stadium: 'education'
    },
    {
      id: 46,
      group: 'H',
      match: 2,
      home: { name: 'Portugal', goals: null },
      away: { name: 'Uruguay', goals: null },
      date: '28 November 2022 22:00',
      stadium: 'lusail'
    },
    {
      id: 47,
      group: 'H',
      match: 3,
      home: { name: 'South Korea', goals: null },
      away: { name: 'Portugal', goals: null },
      date: '2 December 2022 18:00',
      stadium: 'education'
    },
    {
      id: 48,
      group: 'H',
      match: 3,
      home: { name: 'Ghana', goals: null },
      away: { name: 'Uruguay', goals: null },
      date: '2 December 2022 18:00',
      stadium: 'aljanoub'
    }]}
  ]
  export default matches;