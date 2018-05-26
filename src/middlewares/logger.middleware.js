export default store=>next=>action=>{
    console.groupCollapsed('Dispatching ', action.type);
    console.log('Data before dispatching ', store.getState());
    next(action);
    console.log('Data after ', store.getState());
    console.groupEnd();
};