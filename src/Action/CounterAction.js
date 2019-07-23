export function Increment() {
    return {
        type : "INCREMENT"
    }
}
export function Decrement(){
    return {
        type : "DECREMENT"
    }
}

export function ActionHandler(action) {
    return {
        type : action
    }
}

export function ActionPayloadHandler(payload) {
    return {
        type : "SET",
        count : payload.count,
    }
}