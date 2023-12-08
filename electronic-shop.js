let budget = 60;
let keyboards = [40,50,60];
let drives = [5,8,12];
let max = 0 ;
let count = 0 ;
for(let i = 0; i<keyboards.length; i++){
    for(let j = 0 ; j< drives.length ; j++){
         max = keyboards[i] + drives[j];

    
    // console.log(max)
    if(max < budget){
        console.log(` enough money to buy a keyboard and a drive.`) ;
        count++ ;
    }else{
        console.log(-1)
    
    }
}
if(max< budget){
    break ;
}
}