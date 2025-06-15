const initial={

    count:0,
};

const reducer= (state=initial,action)=>{
if (action.type==="increment") {
    return {count:state.count+1}
} else if (action.type==="decrement") {
     return {count:state.count-1}
} else if (action.type==="reset") {
     return {count:0}
}else{
    return state
}
};

export default reducer;