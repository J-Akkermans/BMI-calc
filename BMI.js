function getValue(){

    //input values
    var weight =  document.getElementById("Test1").value;
    var length = document.getElementById("Test2").value;

    //Formula
    var bmi = weight / (length * length);

    //Make it only show decimals
    bmi = Math.floor(result * 100) / 100;
    document.getElementById("Result").innerHTML = "This is your bmi" + " " + bmi.toFixed(2);

    //Show underweight, normal, and overweight.
    if(bmi < 18){
        document.getElementById("summary").innerHTML = "You are underweight.";


    }
    else if(bmi > 25){
        document.getElementById("summary").innerHTML = "You are overweight.";
    }
    else{
        document.getElementById("summary").innerHTML = "You are healthy.";  
    }
   console.log(bmi) 
}