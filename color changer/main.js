"use strict"
function RandomColorGenerator(){
    const HexLetters="0123456789abcdef";
    let color="#";
    for(let i=0;i<6;i++){
        const index=Math.round(Math.random()*15);
        color+=HexLetters[index];
    }
    return color;
}
//klik olanda 
document.body.onclick= function(){
 
    document.body.style.backgroundColor=RandomColorGenerator(); 
}
//intervalla ozu edir
setInterval(function(){
     document.body.style.backgroundColor=RandomColorGenerator();
},1000)