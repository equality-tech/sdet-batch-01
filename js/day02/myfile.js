 function myfunction(){
        alert('login button clicked');
    }

     function emailvalidation(){
        var email=document.getElementById('email').value;
        if(email==""){
            alert('email is required');
        }
        else{
            alert('email is valid');
        }
    }