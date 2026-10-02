//hash number 
function checkHarshad(n) {

        let sum = 0;
        let copy= n;
        
        while(copy>0){
            sum += copy%10;
            copy = Math.floor(copy/10);
        }

        if(n %sum ==0){
            return "Harshad Number"
        }

        return "Not Harshad Number"
    }



  //abendent number 

   function checkAbundant(n) {

       let sum = 0;
       for (let i = 1;i<=n/2;i++){
            if(n%i ==0){
                sum += i;
            }
       }

       if(sum>n){
        return "Yes"
       }

       return "No"

    }


  //neon number 
  // helper.js


    function checkNeon(n) {

      let sq = n**2;
      let sum = sq.toString().split("").reduce((acc,val ,index)=>{
        return acc + Number(val);
      },0);

      if(sum == n){
        return "Yes"
      }

      return "No"

    }

//Armstrong number

function  checkArmstrong(n) {

        let pow = n.toString().length;
        let copy = n;
        let sum = 0;

        while (copy > 0) {
            let digit = copy % 10;
            sum += digit ** pow;
            copy = Math.floor(copy / 10);
        }

        return sum === n ? "Armstrong" : "Not Armstrong";
    }




