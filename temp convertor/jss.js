const a=document.getElementById("txtbox")
const b=document.getElementById("F")
const c=document.getElementById("C")
const d=document.getElementById("result")
let x;
let f
function convert(){
    if(b.checked){

        f=Number(a.value)

        x=(f/5*9)+32        

        d.textContent=x


        

    }

    else if(c.checked){
        f=Number(a.value)

        x=(f-32)/9*5        

        d.textContent=x

    }


    else{
        d.textContent="select something"


    }





}