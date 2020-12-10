export const changeDisplay = value => {
    return {
        type: "CHANGE_DISPLAY",
        payload: {
            value
        }
    }
}

export const getResult = (value) => ({
    type: "GET_RESULT",
    payload: {
        value
    }
})

