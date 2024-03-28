require('dotenv').config()
let sql=require("mysql2")

console.log(process.env.DBHOST)

let con=sql.createConnection({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASSWORD,
    database:process.env.DBNAME,
    

})

con.connect((err)=>{
    if (err) {
        console.log(err)
    }else{
    console.log("Database Connected")}
})

module.exports=con