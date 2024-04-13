    const span = document.querySelector(".span")

const lorem = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti expedita nam reiciendis voluptate dolorem, ad esse "; 

const vita = "Vitae nisl donec egestas mi, dolor cras nec sodales quis at , lacinia non egestas lecture praesent quam at  magnis posuere libere"

span.addEventListener("click" , ()=>{

 
    const para = document.querySelector(".para")
     if(para.textContent  === vita){
        para.textContent = lorem
     } else{
        para.innerHTML = vita
     }
})
