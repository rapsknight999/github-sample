const array=[2,5,8,11]

let i=Math.floor(Math.random()*array.length)
const h1=document.querySelector("h1")

const diff=array[i]

if(diff==2){
    h1.style.color="red"
    h1.style.backgroundColor="yellow"
}

 else if(diff==5){
    h1.style.color="blue"
    h1.style.backgroundColor="red"
}

 else if(diff==8){
    h1.style.color="green"
    h1.style.backgroundColor="purple"
}


else{
    h1.style.color="purple"
    h1.style.backgroundColor="yellow"
}