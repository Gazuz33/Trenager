function getParams(){
    let idx = document.URL.indexOf('?')
    let params = new Array()
    if (idx != -1) {
        let pairs = document.URL.substring(idx+1, document.URL.length).split('&')
        for (let i=0; i<pairs.length; i++){
            nameVal = pairs[i].split('=')
            params[nameVal[0]] = nameVal[1]
        }
    }
    return params
}
params = getParams()
date = unescape(params["date"])
type = unescape(params["type"])

document.getElementById("date").innerHTML = date
document.getElementById("type").innerHTML = type
