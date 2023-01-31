const fs = require("fs");

const render = (page) => {
    if(page==""){
        page = "index";
    }
    const headerView = fs.readFileSync("view/pages/component/header.html").toString();
    const footerView = fs.readFileSync("view/pages/component/footer.html").toString();
    const contentView = fs.readFileSync(`view/pages/${page}.html`).toString();

    return headerView + contentView + footerView;
}

module.exports={render}