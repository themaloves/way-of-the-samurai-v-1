let initialState = {
  friends: [
    {
      id: 1,
      firstname: 'Katya',
      lastName: 'Ivanova',
      pathImg: 'https://3dtoday.ru/upload/blog/avatar/13a/13a3232f7f2ee7b1793de48245b2c9f3.jpeg'
    },
    {
      id: 2,
      firstname: 'Viktor',
      lastName: 'Roko',
      pathImg: 'https://i.pinimg.com/originals/44/dc/38/44dc38897234ad7164d4bfea74e5bb7b.jpg'
    },
    {
      id: 3,
      firstname: 'Anton',
      lastName: 'Livan',
      pathImg: 'https://images11.popmeh.ru/upload/img_cache/571/571d2c1f21aa3bef07dff8382a2c8982_ce_1080x1080x96x0_cropped_800x800.jpeg'
    },
    {
      id: 4,
      firstname: 'Lera',
      lastName: 'Kuzik',
      pathImg: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364'
    },
    {
      id: 5,
      firstname: 'Vladislav',
      lastName: 'Ruckih',
      pathImg: 'https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/alfa-romeo-giulia67-1_0.jpg?itok=cM6fGydG'
    }
  ]
}

const navigationReducer = (state = initialState, action) => {

  return state;
}

export default navigationReducer;