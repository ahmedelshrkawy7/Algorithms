

function fibonaciRecursion (n){
  
console.log("🚀 ~ fibonaciRecursion ~ n:", n)

    if(n <=2){ 
         return 1
        }
 

   
 
   

    return  fibonaciRecursion(n-1)+fibonaciRecursion(n-2)


}

console.log(fibonaciRecursion(7))