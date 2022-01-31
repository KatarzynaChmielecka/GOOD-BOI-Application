const DOGS = [
  {
    id: 'e8085155-6b82-41f4-a5e5-b4745c332ce2',
    dogName: 'Woof',
    kennelName: 'Narnia Baltica',
    pkr: 'VIII-27165',
    sex: 'female',
    registrationNumber: '5491/XLII/11',
    breed: 'Golden Retriever',
    dateOfBirth: new Date(2011, 4, 22),
    colour: 'gold',
    chipOrTattoo: 616093900044541,
    idOfOwner: 'ec7baebd-97c7-4ea3-8047-1305dc4bb243',
    nameOfOwner: 'Jan',
    surnameOfOwner: 'Kowalski',
    performances: [
      {
        id: 'f8fa3785-6c6e-445b-996a-7735c64582c4',
        contestName: 'XII Zawody im. Pana Starosty',
        contestId: 'a0347677-c3c9-4edc-9d46-fed4a958fdc2',
        obedienceClassName: 'Klasa 0',
        exercises: [
          { codeName: '0.1', result: 10 },
          { codeName: '0.2', result: 6 },
          { codeName: '0.3', result: 5.5 },
          { codeName: '0.4', result: 7 },
          { codeName: '0.5', result: 5 },
          { codeName: '0.6', result: 9 },
          { codeName: '0.7', result: 8 },
          { codeName: '0.8', result: 0 },
        ],
      },
      {
        id: 'f8fa3785-6c6e-445b-996a-7735c64582c4',
        name: 'Piętnasty zjazd dobrych chłopaków',
        obedienceClassName: 'Klasa 0',
        exercises: [
          { codeName: '1.1', result: 1 },
          { codeName: '1.2', result: 1.5 },
          { codeName: '1.3', result: 2 },
          { codeName: '1.4', result: 2.5 },
          { codeName: '1.5', result: 3 },
          { codeName: '1.6', result: 3.5 },
          { codeName: '1.7', result: 4 },
          { codeName: '1.8', result: 4.5 },
          { codeName: '1.9', result: 5 },
        ],
      },
    ],

    exercisesCompleted: 15,
    exercisesAmount: 15,
  },
  {
    id: 'bc19ce58-907a-4079-8bf6-1ba20bdfff4a',
    dogName: 'Naughty Boi',
    kennelName: 'Doubleuse',
    pkr: 'VIII-40407',
    registrationNumber: '7747/XLII/19',
    breed: 'Golden Retriever',
    dateOfBirth: new Date(2019, 7, 19),
    colour: 'gold',
    chipOrTatoo: 752093200095647,
    nameOfOwner: 'Janusz',
    surnameOfOwner: 'Nowak',
    exercisesCompleted: 3,
    exercisesAmount: 6,
  },
  {
    id: '4cc2de7d-f055-4af7-b0a1-80542630c6a1',
    dogName: 'Pjes',
    exercisesCompleted: 0,
    exercisesAmount: 1,
  },
  {
    id: 'e363e58f-e177-459a-8faa-fd5992da9173',
    dogName: 'Ollie',
    exercisesCompleted: 0,
    exercisesAmount: 5,
  },
];

export default DOGS;
