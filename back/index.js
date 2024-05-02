const app = require("./src/server.js")
const PORT = 3000
const dbConfig= require("./src/config/dbCon.js")

const startServer = async () =>{
    try {
        await dbConfig();
        app.listen(PORT,()=>{
            console.log(`server listening on http://localhost:${PORT}`)});
        }
    catch (error) {console.log(error.message)}} 


startServer()