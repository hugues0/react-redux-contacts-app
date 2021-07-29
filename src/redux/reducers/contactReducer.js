const initialState = [
  {
    id: 0,
    name: "Ntwari Hugues",
    number: 7814072279,
    email: "ntwari@gmail.com",
  },
  {
    id: 1,
    name: "Niyo jeezy",
    number: 7888888888,
    email: "jeezy@gmail.com",
  },
];

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      state = [...state, action.payload];
      return state;
    case "UPDATE_CONTACT":
      const updateState = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updateState;
      return state;
    default:
      return state;
  }
};

export default contactReducer;
