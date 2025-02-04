function func(name,callback){
    console.log("Hi"+name);
    callback()
}

function greet()
{
    console.log("Good Morning");

}

func("Ye",greet)

function Time(){
    setTimeout(()=>{
        console.log("From TimeOut");
        
},2000)
console.log("Step 1");
}
Time()




const promise=new Promise((resolve,reject)=>{
    const api=false;
    setTimeout(()=>{
        if(api)resolve('Data fetched')
        else reject('error while fetching')    
    },2000)
})
promise
         .then((msg)=>{console.log("Success "+msg);})
         .catch((error)=>{console.log("Error "+error);})
