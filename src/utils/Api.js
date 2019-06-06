import fetch from 'isomorphic-fetch'
const SUCCESS_RESPONSE_MIN_LIMIT = 200
const SUCCESS_RESPONSE_MAX_LIMIT = 300

/**
 * Common Fetch API for POST request
 * @param (string) apiURL - API
 * @param (object) postData - Json body for post request
 * @param (function) callBack - Callback function for returning the successful response
 * @return (promise) fetch - Promise return from the fetch post request
 */

 export function requestPost(apiURL, postData, callBack) {
     let headerObject = {
         "content-Type": "application/json",
         "Accept": "application/json"
     }

     const paramsObject = {
         method: "POST",
         body: JSON.stringify(postData),
         headers: new Headers(headerObject)
     }

     return fetch(apiURL, paramsObject)
     .then(response => response.json())
     .then(json => callBack(json, postData))
     .catch(function(error) {
         console.error("There is a problem with the request: ", error.message)
     })
 }

 /**
 * Common Fetch API for GET request
 * @param (string) apiURL - API
 * @param (object) params - Json body for get request
 * @param (function) callBack - Callback function for returning the successful response
 * @return (promise) fetch - Promise return from the fetch get request
 */

export function requestGet(apiURL, params, callBack) {
    let apiURLWithParams = ""

    if (params)
        apiURLWithParams = `${apiURL}?${params}`
    else
        apiURLWithParams = apiURL

    const paramsObject = {
        method: "GET",
        cache: "default"
    }

    return fetch(apiURLWithParams, paramsObject)
    .then(response => response.json())
    .then(json => callBack(json))
    .catch(function(error) {
        console.error("There is a problem with the request: ", error.message)
    })
}

/**
 * Common Fetch API for callAPI
 * @param (string) url - API url
 * @param (string) options - query options for the callAPI request
 * @return (promise) fetch - Promise return from the fetch callAPI request
 */

export function callAPI(url, options) {
    options = options === null ? {} : options
    options.credentials = options === null ? "same-origin" : options.credentials
    return fetch(url, options).then(function(response) {
        if (response.status >= SUCCESS_RESPONSE_MIN_LIMIT && response.status < SUCCESS_RESPONSE_MAX_LIMIT) {
            return Promise.resolve(response)
        }
        let error = new Error(response.statusText || response.status)
        error.response = response
        return Promise.reject(error)
    })
}

/**
 * Common Fetch API for makeGetCall
 * @param (string) URL - API URL
 * @param (string) state - query state for the get request
 * @return (promise) fetch - Promise return from the fetch get request
 */
export function makeGetCall(url, state) {
    let headerObject = {
        "content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    }

    let options = {
        method: "GET",
        headers: new Headers(headerObject),
        credentials: "same-origin"
    }

    return fetch(url, options)
    .then(function(response) {
        return Promise.resolve(response)
    }).catch(error => Promise.reject(error))
}

/**
 * Common Fetch API for makePostCall
 * @param (string) URL - API URL
 * @param (object) postData - JSON body for post request
 * @param (string) state - state for returning successful response
 * @return (promise) fetch - Promise return from the fetch post request
 */
export function makePostCall(url, postData, state) {
    let headerObject = {
        "content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    }

    let options = {
        method: "POST",
        headers: new Headers(headerObject),
        credentials: "same-origin",
        body: JSON.stringify(postData),
    }

    return fetch(url, options)
    .then(function(response) {
        return Promise.resolve(response)
    }).catch(error => Promise.reject(error))
}

/**
 * Common Fetch API for makeDeleteCall
 * @param (string) URL - API URL
 * @param (object) method - JSON body for the request
 * @param (string) state - state for returning successful response
 * @return (promise) fetch - Promise return from the fetch post request
 */
export function makeDeleteCall(url, method, state) {
    let headerObject = {
        "content-Type": "application/json",
        "Accept": "application/json"
    }

    let options = {
        method: "DELETE",
        headers: new Headers(headerObject),
        credentials: "same-origin",
    }

    return fetch(url, options)
    .then(function(response) {
        return Promise.resolve(response)
    }).catch(error => Promise.reject(error))
}