document.getElementById("butt").onclick=function(){
    const max=7
    const min=1

    let x = Math.floor(Math.random()*(max-min)+min)

    document.getElementById("ass").textContent=x

}