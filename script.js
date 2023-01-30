function calculateCentury(year){
const century=100;
const x=year%100;
year= year-x;
const isCentury=year/century;
return isCentury+1;
}
const century=calculateCentury(1728);
console.log(century);

function population(argentina,world){
    const percentageOfPopulation=argentina/world*100;
    return  `${percentageOfPopulation}% is argentina polulation `

    }
    
    const percentage=population(4000000,8000000000);
    console.log(percentage);
    const percentageH=population(4000000,8000000000);
    console.log(percentageH);
    const percentageN=population(4000000,8000000000);
    console.log(percentageN);
     
    function population1(argentina,world){
        const percentageOfPopulation=argentina/world*100;
        return  `${percentageOfPopulation}% is argentina polulation `
    
        }
        
        const percentage1=population1(4000000,8000000000);
        console.log(percentage);
        const percentageH1=population1(4000000,8000000000);
        console.log(percentageH);
        const percentageN1=population1(4000000,8000000000);
        console.log(percentageN);
         

    

function isEven(x){
if(x % 2===0){
return true;
}else{
   return false;
}
}
console.log(isEven(10));
console.log(isEven(9));
