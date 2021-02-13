m=0;
var y=0;
function one(){
 y= setInterval(game,100);
m=0;
function game(){
    if(m==1200)
    {
        clearInterval(y);
        m=0;
    }
    else{
    m+=2;
  var a= document.getElementById("img");
    a.style.marginLeft=m+'px';}
    }
}
function two(){
    y= setInterval(game,100);
    m=0;
    function game(){
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else{
        m+=4;
      var a= document.getElementById("img");
        a.style.marginLeft=m+'px';}
    }
    
}
function three(){
    y= setInterval(game,100);
    m=0;
    function game(){
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else{
        m+=6;
      var a= document.getElementById("img");
        a.style.marginLeft=m+'px';}
    }
}
function four(){
    y= setInterval(game,100);
    m=0;
    function game(){
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else{
        m+=8;
      var a= document.getElementById("img");
        a.style.marginLeft=m+'px';}
    }
}
function five(){
    y= setInterval(game,100);
    m=0;
    function game(){
        if(m==1200)
        {
            clearInterval(y);
            m=0;
        }
        else{
        m+=10;
      var a= document.getElementById("img");
        a.style.marginLeft=m+'px';}
    }  
}
function six(){
    y= setInterval(game,100);
    m=0;
    function game(){
        if(m==1150)
        {
            clearInterval(y);
            m=0;
        }
        else{
        m+=10;
      var a= document.getElementById("img");
        a.style.marginLeft=m+'px';}
    }  
}
function stop(){
   clearInterval(y);
}
function todayDate(){
    var d = new Date();
    var y = d.getFullYear();
    var m=d.getMonth()+1; 
    var day=d.getDate();
    return document.getElementById("date").innerHTML ="  "+day+":"+m+":"+y ;
  }