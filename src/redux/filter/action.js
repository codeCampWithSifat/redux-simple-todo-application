import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (color, changedType) => {
    return {
        type: COLORCHANGED,
        payload :{
            color,
            changedType
        }
    }
};

export const statusChanged = (status) => {
    return {
        type : STATUSCHANGED,
        payload : status
    }
}