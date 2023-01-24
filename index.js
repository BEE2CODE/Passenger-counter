// let myAge = 30
// let brother= 14
// let count = myAge + brother
// console.log(count)

// let myAge =30
// let humanDogRatio = 20

// let  myDogAge = myAge + humanDogRatio

// console.log(myDogAge)

// let bonusPoint = 50;
// console.log(bonusPoint)

// bonusPoint = bonusPoint+ 50
// console.log(bonusPoint)

// bonusPoint= bonusPoint -  75
// console.log(bonusPoint)

// bonusPoint= bonusPoint + 45
// console.log(bonusPoint)

// let count = 0;
// count= + 1

// function increment(){
//     document.getElementById("increment-btn").innerHTML=""
// }

// function testFunction(){
//     console.log(42)
// }
//  testFunction()

// let lap1 = 20;
// let lap2 = 10;
// let lap3 = 10;



// function lapper(){
//     let total = lap1 +lap2 + lap3;
//     console.log(total);
// }

// lapper()

// let lapsCompleted = 0;

// function myfunction(){
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }
// myfunction();
// myfunction();
// myfunction();


let count = 0;


function increment(){
   count += 1;
   let countEl = document.getElementById("count-el")
   console.log(countEl)
   countEl.innerText=count;

   
}


function save(){
    let countEl = document.getElementById("count-el")
    let saveEl = document.getElementById("save-el");
    let countStr = count + " - " ;
    console.log(saveEl);
    saveEl.textContent+= countStr;
    countEl.innerText = 0;
    count = 0;

}



// let inbox ;
// let username = "sir";
// let messageToUser;
// inbox = "You have three notifications"
// messageToUser = inbox + ", " +username + "."
// console.log(messageToUser)

// let name = "Oluwabunmi";
// let greeting = "Hi, my name is ";
// let myGreetings = greeting + name;
// console.log(myGreetings);

// let name = "Oluwabunmi";
// let greeting = "Welcome back ";
// let welcomeEl = document.getElementById("welcome-el")



//  let welcomeEl = document.getElementById("welcome-el")
//  let name = "Oluwabunmi Onifade"
//  let greeting = "Welcome back "

//  welcomeEl.innerText = greeting + name;



