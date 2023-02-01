const url = require("url");

const route = (req, res) => {
    const urlPath = url.parse(req.url).pathname;
    // API Navigation 
    if(urlPath!="/favicon.ico"){
        if(urlPath=="/api/authentication"){
            res.end("This is Api Request");
        } else
        if(urlPath=="/api/authentication/requestLogin"){
            res.end("This is Login Request");
        } else
        if(urlPath=="/api/authentication/requestLogout"){
            res.end("This is Logout Request");
        } else {
            return;
        }
    } 
}

module.exports={route}