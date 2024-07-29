// Global variable declaration
var btn = document.getElementById('random-btn');
var inp= document.getElementById('random-show');
var mBtn= document.getElementById('match-btn');
var mIn = document.getElementById('match-in');

// disable random generate and match input field input field
document.getElementById('random-show').disabled= 'true';
mIn.disabled='true';
// create function for random number generate
function random(){
    var r = Math.round((Math.random()*10000)+1000);
  return r;
}
// action pin generate button for show random number in input field
btn.addEventListener('click',function(event){
   var ra = random();
    inp.value = ra;
    
})

// action match button for matching with random number 
mBtn.addEventListener('click',function(event){
    var m= mIn.value;
    var ra = inp.value;
    if (m==ra && m>0 && ra>0){
        document.getElementById('error').style.display='none';
    document.getElementById('correct').style.display='block';
    inp.value="";
    mIn.value="";
    }
    else {
        document.getElementById('correct').style.display='none';  
    document.getElementById('error').style.display='block';
    }
    
})

//action correct notify (x) button for display none
var time = setInterval()
var cBtn = document.getElementById('c-btn');
cBtn.addEventListener('click',function(event){
    document.getElementById('correct').style.display='none';  
})
//action error notify (x) button for display none
var eBtn = document.getElementById('e-btn');
eBtn.addEventListener('click',function(event){
    document.getElementById('error').style.display='none'; 
})
// back button
function back(){
   var str = mIn.value ;
   str = str.substr(0,str.length-1);
   mIn.value= str;
}

//get value from matching number button to matching input field
function getvalue(num){
mIn.value=mIn.value+num;
}
// create null value for C button
function nul(){
    mIn.value="";
}

