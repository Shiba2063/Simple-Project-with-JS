let boxes=document.querySelectorAll("#box");
let resetButton=document.querySelector("#reset");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msgContainer");
let newgameButton=document.querySelector("#newGame");
msgContainer.classList.add("hide");

let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
        turnO=false;}
            else{
                box.innerText="X";
                turnO=true;
            }
            box.disabled=true;
            checkWiner();
        
    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`${winner} is the winner!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWiner=()=>{
    for(let pattern of winPatterns){
       let pos1val=boxes[pattern[0]].innerText;
       let pos2val=boxes[pattern[1]].innerText;
       let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
            
        }
        }
    }
    const resetGame=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
        msgContainer.classList.add("hide");
    }
    const newgame=()=>{
         for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
        msgContainer.classList.add("hide");
    }
    resetButton.addEventListener("click",resetGame);
    newgameButton.addEventListener("click",newgame);
}

