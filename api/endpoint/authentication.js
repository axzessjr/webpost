//Authentication API

const requestLogin = async (username, password, db, callback) => {
    const sql = `SELECT * FROM user WHERE username = "${username}" AND password = "${password}"`;
    db.query(sql, (error, result) => {
        if (error) throw error;
        const data = result;
        let count = data.length;
        if(count==1){console.log("valid");
            callback(null,"valid");
        } else
        if(count==0){console.log("invalid");
            callback(null,"invalid");
        }
    });
}
const requestLogout = (username) => {
    return "logout";
}
module.exports={requestLogin, requestLogout}