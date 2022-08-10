const http = require('http');

const server = http.createServer((req,res)=>{ // re
    console.log('istek gönderildi');
    res.write('merhaba');
    res.end();
    
});

const port = 3000;


server.listen(port,()=>{
    console.log('sunucu port 3000de başlatıldı');
})



