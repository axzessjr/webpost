const http = require("http");
const port = 3000;
const cookie = require("cookie");
//const { default: apiRouter } = require("./api/apiRouter.js");
const viewRouter = require("./view/viewRouter.js");

/* -- START: Create Main Server -- */
const server = http.createServer((request, response) => { 
    // Parse the cookies on the request
    const cookies = cookie.parse(request.headers.cookie || '');
    // Get the visitor name set in the cookie
    const username = cookies.username;

    // API SERVER ROUTER
    //apiRouter(request, response);
    // View SERVER ROUTER
    viewRouter.route(request, response);

    response.end();

}).listen(port,(error)=>{
    if(error){
        console.log("Something went wrong", error);
    } else {
        console.log("Server listening on port", port)
    }
})
/* -- END: Create Main Server -- */