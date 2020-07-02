var firstBtn = document.getElementById("first-btn");
var login = document.getElementById("log-in");
var secondBtn= document.getElementById("secondBtn");
var signUp = document.getElementById("sign-up");
var thirdBtn = document.getElementById("menu");
var Menu = document.getElementById("dropdown-menu");
var fourthBtn = document.getElementById("lines-counter");
var counter = document.getElementById("counter-text");
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var selectmonth= document.getElementById("selectmonth")
var selectyear= document.getElementById("selectyear")
var selectday= document.getElementById("selectday")
var max =0;
firstBtn.addEventListener("click",function(){
    setTheElement("block","none","none")
})
secondBtn.addEventListener("click",function(){
    setTheElement("none","block","none")
})
thirdBtn.addEventListener("click", function(){ 
    setTheElement("none","none","block")
})
var num = 0;
fourthBtn.addEventListener('click', function(){
    counter.style.display = "inline-block";
    counter.innerHTML = num
    if(num < 60){
        num++
    }else {
        num = 0
    }
})

function setTheElement(first,second,third){
    login.style.display=first
    signUp.style.display=second
    Menu.style.display=third
}

for(var y=1940; y<=2040; y++){
    var newOption = document.createElement('option')
    newOption.innerHTML = y
    selectYear.appendChild(newOption)
}
for(var d=1; d<=31; d++){
    var newOption = document.createElement('option')
    newOption.innerHTML = d
    selectday.appendChild(newOption)
}
for(var m=1; m<=months.length-1; m++){
    var newOption = document.createElement('option')
    newOption.innerHTML = months[m]
    selectmonth.appendChild(newOption)

}