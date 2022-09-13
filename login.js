//IDENTIFY PRIME NUMBER
let num=13; 
let count=0;
for(i=1;i<=num;i++){
  if(num%i==0){
      count++;
   }
    }
   if(count==2){
       console.log("Yes")
   }else{
    console.log("No");
}

// CHECK PALIDROME OR NOT
let str="kiran";

let new_str="";

   for(let i=str-1;i>=0;i--){
       new_str=new_str+str[i];
   }
   if(str==new_str){
       console.log("Yes");
   }else{
       console.log("No");
   }

