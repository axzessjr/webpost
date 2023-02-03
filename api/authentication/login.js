//This is login API Endpoint
import getConnection from "../../utilities/db";

const requestSubmit = (req, res) => {
    let db = getConnection();
    const chunks = [];
    req.on("data", (chunk) => {
        chunks.push(chunk);
    });
    req.on("end", () => {
        //all parts/chunks have arrived
        const bufferData = Buffer.concat(chunks);
        const stringData = bufferData.toString();
        const data = JSON.parse(stringData);
        console.log("data: ", data);        
    });

    res.end("success");
}

module.exports={requestSubmit}