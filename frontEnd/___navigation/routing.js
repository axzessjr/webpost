const fs = require("fs");

const routing = (page,userState=false,db=false) => {
    const pageList = [
        "","home","login","register","writing"
    ]
    let header = getPage("header");
    let footer = getPage("footer");
    let view = "<h1>Page: Not Found!</h1>"
    let pageFound = false;

    if(pageList.includes(page)){
        pageFound = true;
    }
    if(pageFound==true){
        if(page!=""){
            view = getPage(page);
        } else {
            view = getPage("home");
        }
    }

    const headerTemplate = header.split("{{isLogged}}");
    const viewTemplate = view.split("{{isLogged}}");

    if(userState["status"]==true){
        header = headerTemplate[1];
        let username = userState["userInfo"]["username"];
        header = header.replace("{{username}}",username);
        
        if(viewTemplate.length==2){
            view = viewTemplate[1];
        } else {
            view = viewTemplate[0];
        }
    } else {
        header = headerTemplate[0];
        view = viewTemplate[0];
    }

    

    
    let htmlBody = fs.readFileSync("view/index.html").toString();
    htmlBody = htmlBody.replace("<header></header>",header);
    htmlBody = htmlBody.replace("<footer></footer>",footer);
    htmlBody = htmlBody.replace("<view></view>",view);

    return htmlBody;
}
const getPage = (pagename) => {
    if(pagename!="header" && pagename!="footer"){
        return fs.readFileSync(`view/${pagename}.html`).toString().trim();
    } else {
        return fs.readFileSync(`view/component/${pagename}.html`).toString().trim();
    }
}
module.exports={routing}