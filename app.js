//Kattintás alapú eseményt hozunk létre a gombon

document.getElementById("btn").addEventListener("click", function () {

    
    //Generálunk 3 egész számot 0-255 között
    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    
    document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";

})