let head = document.getElementById('main-header');
let btn = document.getElementById('btn');
let body = document.querySelector('body');
btn.addEventListener("click", clicky);

//arrays: [];
//objects: {}
//number: 3
//"String"
//boolean: true or false

let click1 = true;

function clicky(){
    if(click1 == true){
        body.style.background="#272727";
        head.style.color="white";
        btn.innerHTML="light mode";
        click1 = false;
    }else{
        body.style.background="white";
        head.style.color="#272727";
        btn.innerHTML="dark mode";
        click1 = true;
    }    
}


let myArray = ["cow", "dog", "pig"];

//data structure: for loop
    for(let i = 0; i < myArray.length; i++){
        console.log(myArray[i]);
    }

    //while loop
   let num = 0;
   while(num < 10){
       console.log("hello num: " + num);
       num++;
   }

   for(item of myArray){
       console.log("this is a: " + item);
   }