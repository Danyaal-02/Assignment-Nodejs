const fs=require('fs')
fs.unlink('5. Delete File Using FS Module/nodejs_architecture.txt',(err)=>{
    if(err){
        console.log("ERROR")
    }else{
        console.log("File deleted successfully")
    }
})