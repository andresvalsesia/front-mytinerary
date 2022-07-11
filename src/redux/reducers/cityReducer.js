const initialState={
    cities:[],
    oneCitie:{},
    filterCity:[]
}



const cityReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'GET_CITIES':
               return{
                ...state,
                cities:action.payload
               }
          
        case 'GET_ONE_CITIE':
                return{
                 ...state,
                 oneCitie:action.payload
                }

         case 'FILTER_CITIE':
            let filter= state.cities.filter(country=>country.city.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return{
                ...state,
                filterCity:filter
            }
    
        default:
            return state;
            
    }
}

export default cityReducer;