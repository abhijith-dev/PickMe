document.querySelector('#myform').addEventListener('submit',(e)=>{
    e.preventDefault();
    let data={
        email:this.email.value,
        password:this.password.value
    }
    console.log(data)
});
