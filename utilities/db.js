const mysql = require("mysql");
let db = null;

const getConnection = () => {
    if (!db) {
        db = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "root",
            database: "webpost"
        });
    }
    return db;
}
export default getConnection;