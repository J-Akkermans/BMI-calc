function getValue(){

    //input values
    var weight =  document.getElementById("Test1").value;
    var length = document.getElementById("Test2").value;

    //Formula
    var bmi = weight / (length * length);
    //Make it only show decimals
    var result = bmi*10000;
    result = Math.floor(result * 100) / 100;
    document.getElementById("Result").innerHTML = "This is your bmi" + " " + result.toFixed(2);

    //Show underweight, normal, and overweight.
    if(result < 18){
        document.getElementById("summary").innerHTML = "You are underweight.";


    }
    else if(result > 25){
        document.getElementById("summary").innerHTML = "You are overweight.";
    }
    else{
        document.getElementById("summary").innerHTML = "You are healthy.";  
    }
   console.log(bmi) 
}