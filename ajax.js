

console.log("ajax tutorial in one video")


 let fetchbtn = document.getElementById("fetchbtn");
 fetchbtn.addEventListener("click", buttonClickHandler)

 function buttonClickHandler() {
    console.log("you have clicked the fetchbtn");
    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'harry.txt');

    // What to do on progress (optional)
    xhr.onprogress = function() {
        console.log("On progress"); 
    }
    // What to do when  response is ready
    xhr.onload = function () {
        console.log(this.responseText)
    }


    // send the request
    xhr.send();
 }