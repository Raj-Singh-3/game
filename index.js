let uval = 0;
let cval = 0;

const images = document.querySelectorAll(".img");
const ubtn = document.querySelector("#user");
const cbtn = document.querySelector("#comp");
const line = document.querySelector("#msg");

const compGen=()=>{
    let option = ["rock","paper","scissors"];
    let b = Math.floor(Math.random()*3);
    return option[b];
}

const playGame=(k)=>{
    let b = compGen();
    if(b === k)
    {
        line.innerText = `Its a Draw, you choose ${k} and Comp choose ${b}`;
        line.style.backgroundColor="purple";
        console.log("It is draw , your: "+k+" comp: "+b);
    }
    else
    {
        let flag = true;
        if(k === "rock")
        {
            flag = (b ==="scissors"?true:false);
        }
        else if(k === "paper")
        {
            flag = (b === "rock"?true:false);
        }
        else
        {
            flag = (b === "paper"?true:false);
        }
        if(flag == true)
        {
            uval++;
            ubtn.innerText = uval;
            line.innerText = `Congratulations!, you choose ${k} and Comp choose ${b}`;
            line.style.backgroundColor="green";
            console.log("you win, your: "+k+" comp: "+b);
        }
        else
        {
            cval++;
            cbtn.innerText = cval;
            line.innerText = `OOps!, you choose ${k} and Comp choose ${b}`;
            line.style.backgroundColor="red"
            console.log("you lost, your: "+k+" comp: "+b);      
        }
    }
    
}

images.forEach((img)=>{
    img.addEventListener("click",()=>{
        const k = img.getAttribute("id");
        playGame(k);
    })
});
