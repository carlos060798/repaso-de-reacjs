import { Types } from "../types/types";


function AuthReducer(state={},action) {
    switch (action.type) {
        case Types.login:
            return {
                ...state,
                logged:true,
                user: action.payload
            }
        case Types.logout: 
           return {
                ...state,
                logged:false
           }
        
        default:
            return state
        }
}

export default AuthReducer;