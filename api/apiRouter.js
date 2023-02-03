const url = require("url");
const loginApi = require("./authentication/login.js");

const route = (req, res) => {
    const urlPath = url.parse(req.url).pathname;
    // API Navigation 
  
    if(urlPath=="/api/authentication"){
        res.end("This is Api Request");
    } else
    if(urlPath=="/api/authentication/requestLogin"){
        loginApi.requestSubmit(req, res);
    } else
    if(urlPath=="/api/authentication/requestLogout"){
        res.end("This is Logout Request");
    } else {
        return;
    }
}
module.exports={route}