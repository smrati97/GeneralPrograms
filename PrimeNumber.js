function Prime(num){
    let count=0;

 for(var i=2; i<num;i++){
    for(var j=2; j<i;j++){
        if(i%j===0) {
            
            break;
        }
     
    }
if(count < 15){
    if(i===j){
         console.log(i);
         count++;
         
     }
}}}
Prime(200);