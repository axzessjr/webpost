const http = require("http");
const url = require("url");
const port = 3000;
const navigator = require("./view/navigation/routing.js");
const authentication = require("./api/endpoint/authentication.js");
const post = require("./api/post.js");
const cookie = require("cookie");
const { default: apiRouter } = require("./api/apiRouter.js");

/* -- START: Create Main Server -- */
const server = http.createServer((request, response) => {

    // API SERVER ROUTER
    apiRouter(request, response);

    // Connect to MySQL database
    // Get URL from address
    const url_path = url.parse(request.url).pathname;
    // Parse the cookies on the request
    const cookies = cookie.parse(request.headers.cookie || '');
    // Get the visitor name set in the cookie
    const username = cookies.username;

    // Authentication API Request
    if(url_path=="/api/authentication.js"){
        const bodyChunks = [];
        request.on("data", (chunk) => {
            bodyChunks.push(chunk);
        });
        request.on("end", () => {
            const requestBody = Buffer.concat(bodyChunks); 
            const stringData = requestBody.toString().trim();
            const data = JSON.parse(stringData);
            let action = data["action"];
            let username = data["username"];
            let password = data["password"];

            if(action=="requestLogin"){
                authentication.requestLogin(username, password, db, (err,data)=>{
                    if(err){
                        response.end("internal error: " + err.message);
                    } else
                    if(data=="valid"){
                        response.setHeader('Set-Cookie', cookie.serialize('username', username, {
                            httpOnly: true,
                            path:"/",
                            maxAge: 60 * 5 // 5 min
                        }))
                        response.end("success");
                    } else
                    if(data=="invalid"){
                        response.end("failed");
                    }
                });
            } else
            if(action=="requestLogout"){
                response.setHeader('Set-Cookie', cookie.serialize('username', '', {maxAge: 0}));
                response.end("logout");
            } 
        });
        return;
    } else
    if(url_path=="/logout"){
        response.setHeader('Set-Cookie', cookie.serialize('username', '', {maxAge: 0}));
        let html = navigator.routing("home");
        response.write(html, 'utf8');
    }  

    // Post API Request
    if(url_path=="/api/post.js"){
        const bodyChunks = [];
        request.on("data", (chunk) => {
            bodyChunks.push(chunk);
        });
        request.on("end", () => {
            const requestBody = Buffer.concat(bodyChunks); 
            const stringData = requestBody.toString().trim();
            const data = JSON.parse(stringData);

            let action = data["action"];
        
            if(action=="getPost"){

            } else 
            if(action=="submitPost"){

            } 
        });
        return;
    } 

    // Writing HTML & string data
    const page = url_path.split("/")[1];

    if(page!="favicon.ico" && page!="css" && page!="logout"){
        //console.log(username);
        let userState = false;
        if(typeof(username)!="undefined" && username!=""){
            userState = {
                "userInfo": {"username": username},
                "status": true
            }
        }
        let html = navigator.routing(page,userState,db);
        response.write(html, 'utf8');
    }
    response.end();
    
}).listen(port,(error)=>{
    if(error){
        console.log("Something went wrong", error);
    } else {
        console.log("Server listening on port", port)
    }
})
/* -- END: Create Main Server -- */