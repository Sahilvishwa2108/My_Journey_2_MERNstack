const express=require("express");
const app=express();

let port=3000;
app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
});
app.get("/",(req,res)=>{
    res.send("root page");
})
// app.get("/apple",(req,res)=>{
//     res.send("apple page");
// })
// app.get("/orange",(req,res)=>{
//     res.send("orange page");
// })
// app.get("*",(req,res)=>{
//     res.send("page not exist");
// })
app.get("/:username/:id", (req, res) => {
    let { username,id }=req.params;
    let code = `hello ${username} your password is ${id}`;
    res.send(code);
  });
  
  

