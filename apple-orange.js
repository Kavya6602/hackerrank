let starting_point = 7;
let end_point = 11;
let loc_apple_tree = 5;
let loc_orange_tree = 15;
let total_apple_fall= 3;
let total_orange_fall = 2;
let distance_of_apple = [-2,2,1];
let distance_of_orange = [5,-6];


let apple_count = 0
for(let i = 0; i < distance_of_apple.length; i++){
    let d1 = distance_of_apple[i];
    // console.log(d1);
    let d1_measured = loc_apple_tree - d1;
    // console.log("distance-measured- " + d1_measured);
    if(d1_measured >= starting_point){
        // console.log("Apple is falling from " + d1_measured);
     apple_count++;
    }
}

console.log(apple_count);

let orange_count = 0
for(let i = 0; i < distance_of_orange.length; i++){
    let d2 = distance_of_orange[i];
    // console.log(d1);
    let d2_measured = loc_orange_tree - d2;
    // console.log("distance-measured- " + d1_measured);
    if(d2_measured <= end_point){
        // console.log("Apple is falling from " + d1_measured);
     orange_count++;
    }
}

console.log(orange_count);