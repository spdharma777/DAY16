const timeH=document.querySelector('h1');
let timesecond=10;
timeH.innerHTML= `${timesecond}`;

const countdown=setInterval(()=>{
    timesecond--;
    timeH.innerHTML=`${timesecond}`;
    if(timesecond<=0 || timesecond<1){
        clearInterval(countdown);
    }
    if(timesecond===0){
        timeH.innerHTML='HAPPY INDEPENDENCE DAY'
    }
},1000);
