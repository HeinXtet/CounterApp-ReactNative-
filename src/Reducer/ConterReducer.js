export default counterReducer = (state = {
    count : 0,
    action : "normal"
}, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state = {
                count : state.count + 1,
                action : "increment"
            }
        case "DECREMENT":
            if (!state.count <=0){
                return state = {
                    count : state.count - 1,
                    action : "decrement"
                }
            }else{
                return state;
            }
            case "CLEAR" : 
            return state = {
                count : 0,
                action : "clear"
            }
            case "SET" : 
            return state = {
                action : "set",
                count : action.count,
            }
        default:
            return state
    }
}