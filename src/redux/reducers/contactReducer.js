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


 const contactReducer = (state=initialState,action) =>{
     switch (action.type) {
         case "ADD_CONTACT":{
             state = [...state,action.payload]
             return state
         }
         default: return state
             
     }
 }

 export default contactReducer