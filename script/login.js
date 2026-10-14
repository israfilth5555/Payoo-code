document.getElementById("login-btn")
    .addEventListener("click",function(){
        //get the mobile number
         const numberinput= document.getElementById('input-number');
         const contactnumber = numberinput.value;
         console.log(contactnumber);
        //get the pin
        const inputpin =document.getElementById('input-pin');
        const pin =inputpin.value;
        console.log(pin);
        //match pin and mobile number
        if(contactnumber =="01743620223"&&pin=="1234"){
            // chcek true    :: >> alart>home page
          
            // window.location.replace("/home.html")
            window.location.assign("/home.html")

               
        }
        else{
            // flase :: >> return
            alert('login failed');
            return;
            
        }


    });

