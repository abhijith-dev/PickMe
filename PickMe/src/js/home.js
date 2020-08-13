window.onload=()=>{
    sessionStorage.setItem('status',true)
   sessionStorage.getItem('status')?fetchAllData():window.location.href='/index.html'
}
function fetchAllData(){
    console.log("hello world")
}