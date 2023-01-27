import authentication from './endpoint/authentication'



const viewRouter = (req, res) => {
    const urlPath = url.parse(req.url).pathname;

    // api/authen
    switch(urlPath) {
        case "/":
            // run controller index
            indexController(req, res);
        break;
        case "/api/post":

        break;
        case "/api/def":

        break;
    }
}

export default viewRouter;