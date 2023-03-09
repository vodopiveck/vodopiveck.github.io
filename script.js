var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(97, 92);
    ctx.bezierCurveTo(112-20, 159-20, 72-20, 117-20, 9-20, 54-20);
    ctx.bezierCurveTo(1-20, 47-20, 141-20, 258-20, 117-20, 112-20);
    ctx.strokeStyle = "rgba(217,164,0,252) ";
    ctx.stroke();
    ctx.fillStyle = "rgba(217,164,0,252)";
    ctx.fill();

    let shoes=document.querySelectorAll('.shoes');
    let element1 = document.getElementById("textChange1");
    let element2 = document.getElementById("textChange2");
    let texts1 = ["Nike Revolution 6", "Nike Lebron Witness VII", "Nike Adapt Bb 2.0"];
    let texts2=["Comfort is the key to your running routine. Made from at least 20% recycled content by weight, this version features touchpoints at the heel and tongue for easy on and off. It has a softer ride than its predecessor with a foam that helps create a natural piston effect for even better flexibility. It has a simple, yet classic look with bold branding—making it ideal for running or casual wear.","The longer LeBron’s legendary career continues, the more his game needs a design that doesn’t weigh him down, yet can still control all that sublime power. So, we’ve created our lightest LeBron model but with the kind of bankable support that can help you stay in front of your opponent with the game on the line. Full-length Max Air cushioning helps you take off and land confidently, while lightweight mesh blends with containment cables to help keep you locked in for 4 quarters or more.","Riding the momentum of last year's auto-lacing basketball shoe success, the Nike Adapt BB 2.0 offers the same consistent, custom fit, now with more of the game-changing technology revealed. Ultra-responsive cushioning is curved to follow the natural movement of your foot, providing continuous energy return on the court."]
    let index=0;
    let currentIndex= 1;

    function next(){
        shoes[index].classList.remove('active');
        index=(index+1)%shoes.length;
        shoes[index].classList.add('active')
        
        if(currentIndex==0){
            element1.innerHTML = texts1[currentIndex];
            element2.innerHTML = texts2[currentIndex];
            document.getElementById("myCanvas").style.visibility = "hidden";
            document.getElementById("svg").style.visibility = "visible";
            currentIndex++;
        }else if(currentIndex==1){
            element1.innerHTML = texts1[currentIndex];
            element2.innerHTML = texts2[currentIndex];
            document.getElementById("svg").style.visibility = "hidden";
            document.getElementById("myCanvas").style.visibility = "visible"
            currentIndex++;
        }else{
            element1.innerHTML = texts1[currentIndex];
            element2.innerHTML = texts2[currentIndex];
            document.getElementById("myCanvas").style.visibility = "hidden";
            document.getElementById("svg").style.visibility = "hidden";
            currentIndex=0;
        }
    }
    function prev(){
        shoes[index].classList.remove('active');
        index=(index-1+shoes.length)%shoes.length;
        shoes[index].classList.add('active')
        
        if(currentIndex==1){
            currentIndex--;
            element1.innerHTML = texts1[currentIndex+2];
            element2.innerHTML = texts2[currentIndex+2];
            document.getElementById("myCanvas").style.visibility = "hidden";
            document.getElementById("svg").style.visibility = "hidden";
        }else if(currentIndex==2){
            currentIndex--;
            element1.innerHTML = texts1[currentIndex-1];
            element2.innerHTML = texts2[currentIndex-1];
            document.getElementById("myCanvas").style.visibility = "hidden";
            document.getElementById("svg").style.visibility = "visible"
        } else{
            currentIndex=2;
            element1.innerHTML = texts1[currentIndex-1];
            element2.innerHTML = texts2[currentIndex-1];
            document.getElementById("myCanvas").style.visibility = "visible";
            document.getElementById("svg").style.visibility = "hidden";
        }
        
    }
