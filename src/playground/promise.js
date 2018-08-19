const promise = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        //resolve('This is my data');
        reject('error','Oops Something went wrong!');
    },1500)
});

promise.then((data)=>{
    console.log(data);
}).catch((e)=>{console.log(e)});