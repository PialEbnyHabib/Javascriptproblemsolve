                        // Feet to mile



function feetToMile (feet) {
   var Mile; 
    if(feet <= 0 )
    {
        console.log("you entered wrong number");
    }
    
    else{

        Mile = (feet /5280); 
    }
    return Mile;
}

var M; 
M= feetToMile(50);
console.log("Miles = " +M); 





                       // Woodcalculator



function woodCalculator (Chair , table , bed){
      
    var Woodforchair; 
    var Woodfortable;
    var Woodforbed;

    var totalWood;

    if (Chair < 0){
        console.log("Eror number in chair ");
    }
    else{
        Woodforchair = Chair *1 ; 
    }

    if (table < 0){
        console.log("Eror number in table ");
    }
    else{
        Woodfortable = table *3 ; 
    }

    if (bed < 0){ 
        console.log("Eror number in bed "); 
    }
    else{
        Woodforbed = bed *5 ;  
    }

   totalWood = Woodforchair + Woodfortable + Woodforbed ;
    
   return totalWood ; 

}

var w; 
w=woodCalculator(1,5,2);
console.log( "Wood needed for you  = "   +w  ); 






                 // Brinckcalculator



function brickCalculator(floor) {
    var totalbrick= 0 ;

    if(floor<=10){
       var tenfloor = floor * 15 * 1000;  

       totalbrick = tenfloor ;
    }

    else if ( floor>10 && floor<=20 ){

        var firstten = 10 * ( 15 * 1000) ; 

        for(var i=11;i<=floor; i++)
        {
            var secondten = (i-10) * (12 * 1000) ; 

            
        }
        var twentyfloor = firstten + secondten ; 
        

        totalbrick = twentyfloor ; 
    }

    else {

        var twentyfloorbrick = (10 * (15 *1000)) + (10 *(12 *1000)); 

        for(var i=21;i<=floor;i++){

            var abovetwenty = (i-20) * (10 * 1000); 
        }

        var twentyplus = twentyfloorbrick + abovetwenty ; 

        totalbrick = twentyplus ; 
    }
   

    return totalbrick ; 
    
}
 

var b; 
b= brickCalculator(23);
console.log("total brick needed for your building  = " +b); 






              
                 // Tinyfriends  




function tinyFriend (name) {

    var tiny = name[0]; 
     
    for(var i =0 ; i < name.length ; i++) 
    {
        var newone = name[i]; 


        if (newone.length < tiny.length){

            tiny = newone ; 
        }
    }

    return tiny ; 
}



var n = [" shihab" ,"sayem" ,"raju"];    

var t= tinyFriend(n);

console.log( "tiny friendname   : " +t);
