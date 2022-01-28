// const pathData = [
//   { path: '/login', text: 'Logowanie' },
//   { path: '/role', text: 'Wybierz rolę', label: 'cccccccc' },
//   { path: '/register', text: 'Rejestracja' },
//   { path: '/forgot', text: 'Resetuj hasło' },
//   {
//     path: '/role/contest',
//     text: 'Lista konkursów',
//     label: 'Wybierz konkurs',
//   },
//   {
//     path: '/contactForm',
//     text: 'Formularz kontaktowy',
//     label: 'Wybierz konkurs',
//   },
//   {
//     path: 'role/contest/1/classes',
//     text: 'Lista klas',
//     label: 'XII zawody im. Pana Starosty',
//   },
//   {
//     path: 'role/contest/1/class/1',
//     text: 'Lista uczestników',
//     label: 'Klasa 1',
//   },
//   {
//     path: 'role/contest/1/class/1/Woof',
//     text: 'Punktacja',
//     label: 'Ocena zawodnika Woof',
//   },
//   {
//     path: 'role/contest/1/class/1/Woof/dogSummary',
//     text: 'Tabela wyników',
//     label: 'Ocena zawodnika Woof',
//   },
//   { path: '/forgot', text: 'Resetuj hasło' },
//   {
//     path: '/contests/closed',
//     text: 'Lista konkursów',
//     label: 'Wybierz konkurs',
//   },
//   {
//     path: '/role/contest/1/class/1/classSummary',
//     text: 'Wyniki w klasie',
//     label: 'Wyniki w klasie 1',
//   },
//   { path: '/userDogs', text: 'Twoje psy' },
//   { path: '/userContests', text: 'Konkursy' },
//   { path: '/dogSubmit', text: 'Zgłoś psa' },
//   { path: '/dogData', text: 'Dane psa' },
//   { path: '/participantData', text: 'Dane zawodnika' },
//   { path: '/classChoice', text: 'Wybór klasy', label: 'Dostępne klasy' },
//   {
//     path: '/confirmation',
//     text: 'Potwierdzenie zgłoszenia',
//     label: 'Status zgłoszenia',
//   },
//   { path: '/addDogForm', text: 'Formularz', label: 'Dodaj psa' },
// ];

// export default pathData;
const pathData = [
  { path: '/login', text: 'Logowanie' },
  { path: '/forgot', text: 'Resetuj hasło' },
  { path: '/register', text: 'Rejestracja' },
  {
    path: '/unRegistered',
    text: 'Jesteś niezarejestrowany',
    label: 'Zarejestruj się',
  },
  { path: '/role', text: 'Wybierz rolę', label: 'bierta rolę' },
  {
    path: 'profile',
    text: 'Twój profil',
  },
  {
    path: '/contests',
    text: 'Lista konkursów',
    label: 'Wybierz konkurs',
  },
  // {
  //   path: '/contests/:id/classes',
  //   text: 'Lista klas',
  //   label: 'Tu będzie nazwa konkursu',
  // },
  // {
  //   path: '/contests/:contestId/classes',
  //   text: 'Lista klas',
  //   label: 'Tu będzie nazwa konkursu',
  // },
  // {
  //   path: '/contests/:contestId/classes/:classId',
  //   text: 'pieski',
  //   label: 'wybierz pieska',
  // },
  {
    path: '/contactForm',
    text: 'Formularz kontaktowy',
  },
  {
    path: 'notFound',
    text: 'yyy',
    label: 'wybierz pieska',
  },
];
export default pathData;
