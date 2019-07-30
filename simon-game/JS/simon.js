$(document).ready(function(){
  var audio1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var audio2= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
  var audio3= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
  var audio4= new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
  var sounds=[[audio1,'green'],[audio2,'red'],[audio3,'blue'],[audio4,'yellow']];
  var mode="norm"
  var gameLength=5;
  var gameCombo=[];
  var playerMoves=[];
  var startToggle=false;
  var turns=1;
  var buttonLock=true;


  function buttonPush(num,player){
    $('.'+sounds[num][1]).show()
    sounds[num][0].play()        
    timeOut('$("."+sounds['+num.toString()+'][1]).hide()',400);
  } 
 
  function timeOut(operation,duration){
    setTimeout(function(){
      eval(operation)
    },duration)
  }    

  function computerTurn(){
    buttonLock=true;      
    turns++;       
    playerMoves=[];
    var i=0;        
      var compturn= setInterval(function(){                 
          if (i<turns){                
              buttonPush(gameCombo[i],"comp")
              i++
              timeOut('$(".green,.yellow,.red,.blue").hide()',500)
          }else{
              clearInterval(compturn)
              buttonLock=false;}
              
      },1000)
  }

function wrongPress(nextFunction,message){
  
  var flashcount=0  
    var screenFlash=setInterval(function(){        
      if (flashcount==3){
          clearInterval(screenFlash)
          if (message=="LOSE"){
            $("#screen").html("--")
          }else{
            $("#screen").html("0"+(turns)) 
          }
      }else{
        $("#screen").html(message)
        timeOut('$("#screen").html("")',200)
        flashcount++
      }
    },300)              
  }
  
  function playerTurn(num){
    buttonPush(num)      
    playerMoves.push(num)
    if (num!=gameCombo[playerMoves.length-1]){ 
      turns--
      if(mode=="norm"){
        wrongPress('computerTurn()','--')
        buttonLock=false  
        timeOut('computerTurn()',600)
      }else{
        wrongPress('reset("LOSE")','LOSE')
        
        
      }
    }else{
      if (playerMoves.length==turns){
        buttonLock=true
        if (turns==gameCombo.length){
          wrongPress("","WIN")        
        }else{
          timeOut('computerTurn()',600);  
          timeOut('$("#screen").html("0"+(turns+1))',500)
       }
      }
    }
  }   
  
  function startGame(){  
      startToggle=true;     
      for(var i=0;i<gameLength;i++){
          gameCombo.push(Math.floor(Math.random()*sounds.length))
      }
      $("#screen").html('01')
      buttonPush(gameCombo[0],"comp")
      buttonLock=false
  }
  function reset(type){
          startToggle=false;
          gameCombo=[];
          playerMoves=[];
          turns=1;
          if(type=="start"){
            buttonLock=true;
            $("#screen").html("--")
            timeOut("startGame()",1000)
          }
          if(type=="LOSE"){
            buttonLock=true;
            $("#screen").html("--")              
          }
  }
  
  $('.main').mousedown(function (e) {
      
      var elWidth= $(".main").width()
      var elperc=elWidth/600
      var posX = $(this).offset().left -e.pageX +310*elperc,
          posY = $(this).offset().top -e.pageY +260*elperc;      
      var radius= (Math.sqrt(Math.abs(Math.pow(posX,2)+Math.pow(posY,2))))
      //alert (posX + "  " + posY)
      if (buttonLock==false){
          if (radius>95*elperc&&radius<220*elperc){
              if(posX>10&&posY>10){              
                playerTurn(0)           
              }else if(posX<-10&&posY>10){              
                playerTurn(1)             
              }else if(posX<-10&&posY<-10){              
                playerTurn(2)              
              }else if(posX>10&&posY<-10){              
                playerTurn(3)              
              }
          }         
      }
      if(posX<10.5*elperc && posY<-25*elperc && posX>-12.5*elperc &&posY>-45*elperc ){
        if($("#screen").html()!="") {reset("start")}                    
     }
     if(posX<23.5*elperc && posY<-57*elperc && posX>-27.5*elperc &&posY>-72*elperc){
       if ($("#screen").html()==""){
        $(".IO").css({left: 13*elperc })
        timeOut('$(".green,.yellow,.red,.blue").show()',200)
        timeOut('$(".green,.yellow,.red,.blue").hide()',1500)
        $("#screen").html("--")
       }else{
         reset("off")
         $("#screen").html("")
         $(".IO").css({left: 0 })
       }
     }
    if(posX<76.5*elperc && posY<8*elperc && posX>27.5*elperc &&posY>-7*elperc){
      if($(".GAMETYPE").css('left')=='0px'){
        $(".GAMETYPE").css({left:18*elperc})
        mode="strict"
      }else{
        $(".GAMETYPE").css({left:0})
        mode="norm"
      }
    }
    if(startToggle==false&&posX<.5*elperc && posY<7*elperc && posX>-85.5*elperc &&posY>-7*elperc){
      if(gameLength==5){
        $(".GAMELENGTH").css({left:13*elperc})
        gameLength=10
      }else if(gameLength==10){
        $(".GAMELENGTH").css({left:32*elperc})
        gameLength=20
      }else{
        $(".GAMELENGTH").css({left:0})
        gameLength=5;
      }
    }
  })
})