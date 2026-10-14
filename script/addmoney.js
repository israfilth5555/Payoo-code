// console.log('add money')
document.getElementById('abbmoney-btn')
    .addEventListener('click',function(){
        //bank ammount
        const bankaccount= getValueFromInput("add-money-bank")
        if(bankaccount=='Select A Bank'){
            alert("please select a bank")
            return
        }
        //get bank account numbert
        const accno = getValueFromInput("add-money-number")
        if(accno.length != 11){
            alert("Invalid account number")
            return
        }

        //get ammount
        const ammount =getValueFromInput("add-money-amount");
        const currentbalance =getBalance();
        const newbalance = currentbalance+Number(ammount); 
        console.log(newbalance);



        const pin =getValueFromInput('add-money-pin');
        if(pin==="1234"){
            alert( `Addmoney success from 
                 ${bankaccount}
                 at ${new Date()}`)
            setbalance(newbalance);
            //history container ka dora nia aspo
            const history = document.getElementById('history-container')

            //creat new div
            const newhistor =document.createElement("div")

            //new div a inner html add korbo
            newhistor.innerHTML =`<div class="transation-card  p-5 bg-base-100">   Addmoney success from 
                 ${bankaccount},acc-no ${accno},
                 at ${new Date()}
            </div>
             `;
             history.append(newhistor);

        }
        else{
            alert("invalid pin")
            return
        }
    });

