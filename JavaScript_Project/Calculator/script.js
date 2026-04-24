let msg = document.querySelector("input");
button=document.querySelectorAll("button");
let curr="";
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let bVal=btn.innerText;
        if(bVal==="AC"){
            curr="";
            msg.value=curr;
        }
       else if(bVal==="DEL"){
            curr=curr.slice(0,-1);
            msg.value=curr;
        }
        else if(bVal==="0"
            ||bVal==="1"
            ||bVal==="2"
            ||bVal==="3"
            ||bVal==="4"
            ||bVal==="5"
            ||bVal==="6"
            ||bVal==="7"
            ||bVal==="8"
            ||bVal==="9"
            ||bVal==="."){
            curr += bVal;
            msg.value=curr;
        }
        else if(bVal==="%"){
            curr += "/100";

            msg.value=curr;
            console.log(curr);
          
            }
         
        else if(bVal==="/") {
             
            curr+="/";
            msg.value=curr;
            console.log(curr);
        }   
          else if (bVal === "X") {
            curr += "*";
            msg.value = curr;
        }
        else if(bVal==="+"){
            curr+="+";
            msg.value=curr;
        }
        else if(bVal==="-"){
            curr+="-";
            msg.value=curr;
        }
        else if (bVal === "=") {
            try {
                curr = eval(curr);
                msg.value = curr;
            } catch {
                msg.value = "Error";
                curr = "";
            }
        }

        }
        
    );
   

});

