const url = require("url");
const htmlRenderer = require("../utilities/htmlRenderer.js");

const route = (req, res) => {
    const urlPath = url.parse(req.url).pathname;
    const pageName = urlPath.split("/")[1];
    // Page Navigation 
    if(pageName!="favicon.ico"){
        html = htmlRenderer.render(pageName);
    }
    
    if(urlPath=="/"){
        res.end(html);
    } else
    if(urlPath=="/login"){
        res.end(html);
    } else
    if(urlPath=="/writing"){
        res.end(html);
    } else {
        res.end("404: Page Not Found.");
    }
}

module.exports={route}