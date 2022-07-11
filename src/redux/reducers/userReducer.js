const initialState={
    allCountrys:[],
    user:null,
    snackbar:{
        view:false,
        message:'',
        success:false
    }
 
}

const userReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'SIGN_UP':
               return{
                ...state,
                snackbar:action.payload 
               }
         case 'MESSAGE':
                return{
                    ...state,
                    snackbar:action.payload
                }   
         case 'SIGN_IN':
                return {
                    ...state,
                    snackbar:{view:action.payload.view,message:action.payload.message,success:action.payload.success},
                    user: action.payload.response 
                }
                
          case 'ALL_COUNTRY':
               return{
                ...state,
                allCountrys:action.payload
               }

    
        default:
            return state;
            
    }
}

export default userReducer;