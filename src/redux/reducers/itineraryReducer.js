const initialState={
    itineraries:[],
    oneItinerary:{},
    filterItinerary:[]
    
}

const itineraryReducer = (state=initialState,action)=>{
       
    switch (action.type) {
        case 'GET_ITINERARIES_BY_CITY':
               return{
                ...state,
                itineraries:action.payload
               }
          
        case 'ONE_ITINERARY':
                return{
                 ...state,
                 oneItinerary:action.payload,
                 
                }
     
            case 'FILTER_ITINERARY':
                let filter= state.itineraries.filter(element=>element.country._id==action.payload)
                return{
                    ...state,
                    filterItinerary:filter
                }
              

                default:
                    return state;
        }
    }
export default itineraryReducer;