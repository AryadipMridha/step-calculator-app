document.querySelector(".calculate").addEventListener("click", function(){
    document.getElementById("km").style.display = "none";
    document.getElementById("calories").style.display = "none";

    //show loading icon
    document.querySelector(".loader").style.display = "block";
    setTimeout(steps_converter,2000);


});

function steps_converter(){
    const steps=document.getElementById('steps').value;
    let toKm=(steps*0.0008045).toFixed(2);
    let toCal=(toKm*55).toFixed(2);
    if(steps !=0){
        const km=document.getElementById("km");
        const calories=document.getElementById("calories");

        km.innerHTML="Kilometers walked = "+toKm+" km.";
        calories.innerHTML="Calories Burned = "+toCal+" calories.";


        document.getElementById("km").style.display="block";
        document.getElementById("calories").style.display="block";
        document.querySelector(".loader").style.display="none";
    }
    else{
        error()
        function error(){
            document.getElementById("km").style.display="block";
            document.getElementById("calories").style.display="block";
            document.querySelector(".loader").style.display="none";
            document.getElementById("km").innerHTML="<span style='color:black;background-color:pink;border-radius:10px'padding:3px;';>Error: Enter the steps first !"
            
            setTimeout(()=>{
                document.getElementById("km").innerHTML="";
                document.getElementById("calories").innerHTML="";

            },5000);
        }
    }
  
}

document.querySelector(".clear").addEventListener("click", Clear)

function Clear() {
    document.getElementById('steps').value="";
    document.getElementById('km').innerHTML="";
    document.getElementById('calories').innerHTML="";
}