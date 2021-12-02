function getParams(){
    var idx = document.URL.indexOf('?')
    var params = new Array()
    if (idx != -1) {
        var pairs = document.URL.substring(idx+1, document.URL.length).split('&')
        for (var i=0; i<pairs.length; i++){
            nameVal = pairs[i].split('=')
            params[nameVal[0]] = nameVal[1]
        }
    }
    return params
}
params = getParams()
name = unescape(params["name"])
sec_name = unescape(params["sec_name"])
age = unescape(params["age"])
sex = unescape(params["sex"])
document.getElementById("name").innerHTML = name
document.getElementById("sec_name").innerHTML = sec_name
document.getElementById("age").innerHTML = age
document.getElementById("sex").innerHTML = sex
