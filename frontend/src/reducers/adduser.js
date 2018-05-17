
export default function addUserReducer(state=null,action){
    switch(action.type){
        case 'ADD_USER':
        return(action.payload);
        default:
         return state;
    }
}