document.querySelectorAll('form').forEach(ele=>{
    ele.addEventListener('submit',async (e)=>{
        e.preventDefault();
        if((ele.id).localeCompare('form-data1')==0){
            let Formdata=[]
            Formdata.push(
                ele.email.value,
                ele.username.value,
                ele.phno.value
            );
            sessionStorage.setItem('form',Formdata)
            window.location.href='/register2.html';
        }
        if((ele.id).localeCompare('form-data2')==0){
            if((this.password.value).localeCompare(this.password2.value)==0){
            if(sessionStorage.getItem('form')===null){
                alert("Please fill the name,email and phnone number first")
                window.location.href='/register.html'
            }
            let Formdata=[...sessionStorage.getItem('form').split(',')]
            Formdata.push(
                this.loc.value,
                this.password.value    
            );
            //ajax request
            let all_data={
                email:Formdata[0],
                name:Formdata[1],
                phno:Formdata[2],
                location:Formdata[3],
                pasoword:Formdata[4]
            }
            alert(all_data)
            sessionStorage.clear();
            }
            else{
                alert("wrong...")
            }
        }
    })
})