const indexController = async (req, res) => {
    // logic
    // ex. fetch posts

    const context = await generateContext(req, res);

    // replace post to html
    const html = renderer('index', {
        context,
        posts
    });

    // response html
    res.end(html);
}

export default indexController;