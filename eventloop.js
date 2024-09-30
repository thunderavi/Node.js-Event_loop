const fs =require('fs');
const crypto=require('crypto');

const start= Date.now();

process.env.UV_THREADPOOL_SIZE=7;


setTimeout(() => console.log("TImer 1 finished"),0);

setImmediate(() => console.log("Immdesiate 1 finished"))

fs.readFile('text-file.txt',() =>{
  console.log('I/O finished');
  console.log('-----------------');

  setTimeout(() => console.log(Date.now()-start,"TImer 2 finished"),0);
  setTimeout(() => console.log(Date.now()-start,"TImer 3 finished"),3000);
  setTimeout(() => console.log(Date.now()-start,"TImer 2 finished"),);

  process.nextTick(()=>{
    console.log("Process.nextTick");
  })
  crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
    console.log(Date.now()-start,"Password encrypted");
  });
  crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
    console.log(Date.now()-start,"Password encrypted");
  });
  crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
    console.log(Date.now()-start,"Password encrypted");
  });
  crypto.pbkdf2('password','salt',10000,1024,'sha512',()=>{
    console.log(Date.now()-start,"Password encrypted");
  });
});

console.log("Hello from top level code");

