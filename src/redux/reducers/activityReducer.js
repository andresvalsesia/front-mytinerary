const initialState={
    activitis:[],
    oneActivity:{}
   
}

const activityReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'GET_ACTIVITY':
               return{
                ...state,
                activitis:action.payload
               }
          
        case 'GET_ONE_ACTIVITY':
                return{
                 ...state,
                 oneActivity:action.payload
                }
     

                default:
                    return state;
        }
    }
export default activityReducer;