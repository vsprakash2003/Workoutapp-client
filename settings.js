const contextPath = process.env.REACT_APP_API_URL

export const settings = {
    homeURL: contextPath + '/workoutapp/home'
}

function getConfigProperty(property, section) {
    return settings[property]
}

export {getConfigProperty}