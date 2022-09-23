function rounding (number,precisio) {
    
   if (precisio > 15){
    precisio = 15;
   }
   console.log(parseFloat(number.toFixed(precisio)));

}rounding(3.1415926535897932384626433832795,2);