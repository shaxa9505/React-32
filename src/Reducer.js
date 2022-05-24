const Reducer = (state, {type, payload}) => {

    const limitRgb = num => num < 0 ? 0 : num > 255 ? 255 : num;
    const step = 50;

    switch(type){
        case "incr_r" :
            return {
                ...state,
                r: limitRgb(state.r + step)
            }
        case "incr_g" :
            return {
                ...state,
                g: limitRgb(state.r + step)
            }
        case "incr_b" :
            return {
                ...state,
                b: limitRgb(state.r + step)
            }
        case "decr_r" :
            return {
                ...state,
                r: limitRgb(state.r - step)
            }
        case "decr_g" :
            return {
                ...state,
                g: limitRgb(state.r - step)
            }
        case "decr_b" :
            return {
                ...state,
                b: limitRgb(state.r - step)
            }
    }
}

export default Reducer