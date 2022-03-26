const btnquery=document.querySelector(".tap");

btnquery.addEventListener("click",function(event)
{
    event.preventDefault();
    var randomno1=Math.random();
    randomno1=Math.floor(randomno1*6) +1;
    var randomimg="dice"+randomno1+".png";
    // if in any folder we can also add it by concatenation
    var imag1=document.querySelectorAll("img")[0];
    imag1.setAttribute("src",randomimg);


    var randomno2=Math.floor(Math.random()*6)+1;
    var randomimg2="dice"+randomno2+".png";
    var imag2=document.querySelectorAll("img")[1];
    imag2.setAttribute("src",randomimg2);


    if(randomno1>randomno2)
    {
        document.querySelector("h1").innerHTML="Player 1 WINS!🎉🚩";
    }

    else if(randomno2>randomno1)
    {
        document.querySelector("h1").innerHTML="Player 2 WINS!🎉🚩";
    }
    else{
        document.querySelector("h1").innerHTML="DRAW!!"; 
    }
})