const numbers=[2,4,8,11]
let i=Math.floor(Math.random()*numbers.length)

let pick=numbers[i]

let h1=document.querySelector("h1")

if(pick==2){
    h1.style.color="blue"
    h1.style.backgroundColor="yellow"
}


if(pick==4){
    h1.style.color="red"
    h1.style.backgroundColor="blue"
}

if(pick==8){
    h1.style.color="orange"
    h1.style.backgroundColor="green"
}

if(pick==11){
    h1.style.color="purple"
    h1.style.backgroundColor="black"
}


