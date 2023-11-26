// //Step 1 : import Redux
// const redux = require('redux');

// //Step 2 : Initialiser le state (par défaut).
// const initialState = {
//     compteur: 0
// };

// //Step 3 : Créer le reducer (ce qui nous permettre de modifier le state selon une action).
// const reducer =(state = initialState, action) => {
    
//     //Actions
//     if (action.type == 'INC_COUNTER') {
//        return {
//          compteur: state.compteur + 1
//     };
// }
//     else if(action.type == 'ADD_COUNTER'){
//         return {
//             compteur: state.compteur + action.value
//         };
//     }

//     return state;
// }


// //Step 4 : Créer le store (ce qui nous permettra de diffuser lnpotre state).
// // const createStore = redux.createStore;
// // const store = createStore(reducer);



// const configureStore = require("@reduxjs/toolkit").configureStore;
// const store = configureStore({reducer});

// console.log(store.getState());

// //Step 5 : Créer l'abonnement au store (Pour récupérer les dernières modifications).
// store.subscribe(() => {
//     console.log(store.getState());
// });
// //Step 6 : Envoyer des actions (dispatch).
// store.dispatch({type: 'INC_COUNTER'});
// store.dispatch({type: 'INC_COUNTER'});
// store.dispatch({type: 'INC_COUNTER'});
// store.dispatch({type: 'ADD_COUNTER', value: 5});
// store.dispatch({type: 'ACTION_QUI_EXISTE_PAS'});
