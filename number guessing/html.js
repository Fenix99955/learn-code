let t=true
while (t){
    
    
    let x = window.prompt("guess a number between 1 and 100")
    let y=Math.floor(Math.random()*(11-1)+1)
    if(x==y){
        window.alert("thats right ")
        t=false

    }

    else if(x>=y){
        window.alert(`the number was ${y} think lower`)

    }


    else if(x<=y){
        window.alert(`the number was ${y} think higher`)



}

}
