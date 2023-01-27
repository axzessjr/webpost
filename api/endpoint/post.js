//Post API
console.log("Post API connected!");

const getPost = async (db, callback) => {
    const sql = `SELECT * FROM post`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        const data = result;
        console.log(data);
        callback(null, data);
    });
}

module.exports={getPost}