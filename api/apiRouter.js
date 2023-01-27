import authentication from './endpoint/authentication'

const apiRouter = (req, res) => {
    const urlPath = url.parse(req.url).pathname;

    // api/authen
    switch(urlPath) {
        case "/api/authen":
            authentication(req, res);
        break;
        case "/api/post":
            // authentication(req, res);
        break;
        case "/api/def":
            // authentication(req, res);
        break;
    }
}

export default apiRouter;