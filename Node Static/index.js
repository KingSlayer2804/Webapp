const fs=require('fs');
const path=require('path')
const http=require('http')
const PORT=3000
const stat_path=path.join(__dirname,'./public/index.html')
const file=fs.readFileSync(stat_path,'utf-8')
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.setHeader('Content-Type','text/html')
        res.end(file)
    }
    
})

server.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    else 
    {
        console.log("Listening to Port "+PORT);
    }
})