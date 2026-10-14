document.getElementById("cashout-btn")
    .addEventListener("click",function(){
        const  cashoutnumber = getValueFromInput("cashout-number")
        console.log(cashoutnumber)
        if(cashoutnumber.length !=11){
            alert("Invalid Number")
            return
        }
        const cashoutamount = getValueFromInput("cashout-amount");
        console.log(cashoutamount);

        const currentBalance = getBalance()

        const newBalance = currentBalance - Number(cashoutamount);
        if(newBalance <0){
            alert("Invalid Amount")
            return
        }
        


        const inputpin = getValueFromInput("cashout-pin")
        if(inputpin==="1234"){

            alert("cashout successfull")
            setbalance(newBalance)
            //history container ka dora nia aspo
            const history = document.getElementById('history-container')

            //creat new div
            const newhistor =document.createElement("div")

            //new div a inner html add korbo
            newhistor.innerHTML =`<div class="transation-card  p-5 bg-base-100">   cashout success  
                 ${cashoutamount} 
                 taka,successto ${cashoutnumber},
                 at ${new Date()}
            </div>
             `;
             history.append(newhistor);

        }
        else{
            alert("Invalid Pin");
            return
        }

    });














// document.getElementById("cashout-btn")
//     .addEventListener("click",function(){

//         //get the agent number & validate
//         const cashoutnumberinput= document.getElementById("cashout-number");
//         const cashoutnumber =cashoutnumberinput.value;
//         if(cashoutnumber.length!=11){
//             alert('Invalid Number')
//         }
//         console.log(cashoutnumber);


//         //get the amount
//         const cahoutamountinput = document.getElementById('cashout-amount');
//         const cashoutamount= cahoutamountinput.value;
//         console.log(cashoutamount);


//         //get the current balance
//         const  currentbalance = document.getElementById('balance');
//         const currentBalance = currentbalance.innerText
//         console.log(currentBalance);


//         //calculate new Balance
//         const newBalance = Number(currentBalance) - Number(cashoutamount);
//         if(newBalance <0){
//             alert("Invalid Amount")
//             return
//         }
        


//         //get the pin and verify
//             const inputpin =document.getElementById('cashout-pin');
//             const pin =inputpin.value;
//             if(pin === "1234"){
//                 //true:: show and alart> set balance
//                 alert('CASHOUT SUCCESSFULL');
//                 currentbalance.innerText =newBalance

//             }
//             else{
//                 //true :: an error alert> return
//                 alert("Invalid Password")
//                 return

                
//             }




//     });