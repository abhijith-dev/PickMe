window.onload=()=>{
    let token=localStorage.getItem('token');
    if(token===null){
       window.location.href='/login.html' 
    }
    else{
    let data=JSON.parse(decodeURI(token));
    fetch('http://127.0.0.1:3000/token_auth',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(status=>{
       if(status=='200'){
           sessionStorage.setItem('status',true);
           window.location.href='/home.html'
       }
       else{
        window.location.href='/login.html' 
       }
    });
    }
}
function show_msg(){
    setInterval(() => {
        let msgs=["Refresh Your Page and Try Again....","Please Check Your Internet Connection...","It Take Few Seconds Please Wait ","Please Wait...","Please Check Your Internet Connection...","Refresh Your Page and Try Again....","Refresh Your Page and Try Again...."]
        document.querySelector('#try').innerHTML=msgs[Math.floor(Math.random()*msgs.length)]
    },10000);
}
setTimeout(show_msg,1000);