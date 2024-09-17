let max = prompt("enter a num to generate random value")

let rendom = Math.floor(Math.random()*max +1)

let gus = prompt("enter value to gussess")

if(gus==rendom){
    console.log("you gusses the right value")

}
else{
    console.log("wrong value")
}