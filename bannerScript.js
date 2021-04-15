/*data (clientName, looseValue, loanLimit, interest, savings)*/
addData('John', '$1280', '$50,000', '%3.1', '$3000');


var clientName;
firstAnim = document.getElementById('firstAnm');
secondAnim = document.getElementById('secondAnm');
var timeline = gsap.timeline({repeat: -1, repeatDelay: 2.5});
var timeline1 = gsap.timeline({repeat: -1, repeatDelay: 2.5});
var animTwoCount = 0;


/*trigering the first animation*/
animate(1);


function animate(id){
    if(id==1){
        timeline1.pause();
        timeline.play();
        firstAnim.style.display = "flex";
        secondAnim.style.display = "none";
        firstAnimation();
    }
    else if(id==2){
        timeline.pause();
        timeline1.play();
        secondAnim.style.display = "flex";
        firstAnim.style.display = "none";
        secondAnimation();
    }
}
/*first animation*/
function firstAnimation(){
    gsap.set('.image', {x: 300, opacity: 0});
    var text1 = document.getElementById('text1');
    var splitText1 = acAnimated.Plugins.SplitText(text1, {words: 1, chars: 1, spacing: 9});
    var text2 = document.getElementById('text2');
    var splitText2 = acAnimated.Plugins.SplitText(text2, {words: 1, chars: 1, spacing: 9});
    var text3 = document.getElementById('firstButtonText');
    var splitText3 = acAnimated.Plugins.SplitText(text3, {words: 1, chars: 1, spacing: 9});
    gsap.set('#text1 div div', {x: -100, y: -50, opacity: 0});
    gsap.set('#text2 div div, #text2 div div div', {x: -100, y: -50, opacity: 0});
    gsap.set('#firstButton', {x: 150, opacity: 0});
    gsap.set('#firstButton div div', {rotationZ: randomInt(-180, 180), opacity: 0, x: randomInt(-200, 200), y: randomInt(-200, 200)});
    if(document.querySelectorAll) {document.querySelectorAll('#firstButton div div').forEach(function(el){
        gsap.set(el, {rotationZ: randomInt(-180, 180), opacity: 0, x: randomInt(-200, 200), y: randomInt(-200, 200)});        
    })}
    timeline.to('.image', {ease: 'expo', duration: 0.5, opacity: 1, x: 0})
        .to('#text1 div div', {ease: 'power3', delay: 0.1, stagger: 0.03, duration: 0.2, x: 0, y: 0, opacity: 1})
        .to('#text2 div div, #text2 div div div', {ease: 'elastic', delay: 0.5, stagger: 0.03, duration: 0.2, x: 0, y: 0, opacity: 1})
        .to('#firstButton', {ease: 'bounce', duration: 0.3, x: 0, opacity: 1})
        .to('#firstButton div div', {stagger: 0.03, rotation: 0, duration: 0.2, x: 0, y: 0, opacity: 1})
}
/*second animation*/
function secondAnimation(){
    gsap.set('.image', {x: 300, opacity: 0});
    var text5 = document.getElementById('text5');
    var splitText5 = acAnimated.Plugins.SplitText(text5, {words: 1, chars: 1, spacing: 9});
    gsap.set('#text3', {x: 200, y: 0, opacity: 0});
    gsap.set('#text4', {x: 200, y: 0, opacity: 0});
    gsap.set('#text5 div div, #text5 div div div', {rotationZ: randomInt(-180, 180), opacity: 0, x: randomInt(-200, 200), y: randomInt(-200, 200)});
    if(document.querySelectorAll) {document.querySelectorAll('#text5 div div, #text5 div div div').forEach(function(el){
        gsap.set(el, {rotationZ: randomInt(-180, 180), opacity: 0, x: randomInt(-100, 100), y: randomInt(-100, 100)});        
    })}
    gsap.set('#secondButton', {x: 0, y: -50, opacity: 0});
    timeline1.to('.image', {ease: 'expo', duration: 0.5, opacity: 1, x: 0})
        .to('#text3', {duration: 0.5, ease: 'bounce', x: 0, y: 0, opacity: 1})
        .to('#text4', {duration: 0.5, ease: 'bounce', x: 0, y: 0, opacity: 1})
        .to('#text5 div div, #text5 div div div', {stagger: 0.03, duration: 0.2, rotationZ: 0, opacity: 1, x: 0, y: 0})
        .to('#secondButton', {ease: 'elastic', duration: 0.5, x: 0, y: 0, opacity: 1});
}

/*function for setting client name, price*/
function addData(name, loose, loanLimit, interest, savings){
    clientName = name;
    document.getElementById('clientName').innerText = name;
    document.getElementById('loose').innerText = loose;
    document.getElementById('loanLimit').innerText = loanLimit;
    document.getElementById('interest').innerText = interest;
    document.getElementById('savings').innerText = savings;
}
/*after clicking button*/
function changeStage(){
    animate(2);
}
/*random number function*/
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}