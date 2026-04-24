const base_url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector(" form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");
for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from"&&currCode==="USD"){
           newOption.selected="selected";
        }
        else if(select.name==="to"&&currCode==="NPR"){
           newOption.selected="selected";
        }
        
        select.append(newOption);
    }
    select.addEventListener("change",(e)=>{
        updateFlag(e.target);
    });
}

const updateFlag=( element)=>{
    let currCode=element.value;
    console.log(currCode);
    let countryCode=countryList[currCode];
    let newScr=`https://flagsapi.com/${countryCode}/flat/64.png`;
     let img=element.parentElement.querySelector("img");
    img.src=newScr;
};

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    updaeExchangeRate();
});

const updaeExchangeRate=async()=>{
    let amount=document.querySelector(".amount input");
    let amtValue=amount.value;
    if(amtValue===""||amtValue<1){
        amtValue=1;
        amount.value="1";
    }
   const URL=`${base_url}/${fromCurr.value.toLowerCase()}.json`;
   console.log(URL);
    let response=await fetch(URL);
    let data=await response.json();
    console.log(response);
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let finalAmount=rate*amtValue;
    msg.innerText=`${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

window.addEventListener("load",()=>{
updaeExchangeRate();
});
