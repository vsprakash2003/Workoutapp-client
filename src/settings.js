const contextPath = process.env.REACT_APP_API_URL
const jsonServerPath = process.env.REACT_APP_JSON_SERVER_API_URL

export const settings = {
    homeURL: contextPath + '/workoutapp/home',
    workoutList: jsonServerPath + 'Workouts',
    rowsPerPage: 5
}
 
function getConfigProperty(property, section) {
    return settings[property]
}

export {getConfigProperty} 