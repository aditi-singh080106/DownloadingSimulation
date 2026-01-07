let count = 0 ;
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector("#percentText");

let interval = setInterval(function(){
    if(count<100){
        count++;
        progress.style.width=`${count}%`;
        percent.textContent=`${count}%`
    }
    else{
        document.querySelector("h2").textContent=`Downloaded!`;
        clearInterval(interval);
    }

} , 50);