
// customizing the Math.min() function


const min = (a,b)=>{
    if(a>b){
     return a
  }
    else if(b>a){
      return b
    }
    else{
      return 'none'
  }

}
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10
