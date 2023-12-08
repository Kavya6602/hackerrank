// let catA = 4;
// let catB = 3;
// let mouse = 2;

function catMouse(catA,catB,mouse){
    var val1 = catA - mouse;
    var val2 = catB - mouse;
    if(val1 === val2){
        return mouse;
    }
    else if(val1 > val2 ){
        return catA;
    }else{
        return catB;
    }
}

console.log(catMouse(5,6,4)) ;