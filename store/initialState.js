const initialState = {
  shoppingList: [
    {
      id: -2,
      name: 'sniadanie',
      createdAt: Date.now(),
      products: [
        'bagieta czosnkowa',
        'jajka'
      ],
      note: 'biedronka'
    },
    {
      id: -1,
      name: 'obiad',
      createdAt: Date.now(),
      products: [
        'mleko',
        'jajka'
      ],
      note: 'zabka'
    }
  ],
  archived: [
    {
      id: -1,
      name: 'picie',
      createdAt: Date.now(),
      products: [
        'woda'
      ],
      note: 'zabka'
    }
  ]
}

export default initialState