var bulb = document.querySelector('#bulb');
var button = document.querySelector('.btn');
var btn = true;


button.addEventListener("click", function(){
    if (btn){
        bulb.style.backgroundColor = "yellow";
        console.log(`Light is On`)
        btn = false;
    }else{
        bulb.style.backgroundColor = "white";
        console.log(`Light is oFF`)
        btn = true;
    }
});