/*console.log('my name is mamoun');
console.log('i live in zarqa');

console.log(111111);
var myname ='mamoun';
console.log(myname);
//this a second time i am doing this
console.log(3==='3');
console.log('hello' +' '+'mamoun');
//alert
alert('hello how are you');
var yourage=prompt('enter your age');
//if statement
if(yourage>=5){
  alert('you can see my website');
}else{alert('sorry you are under age');}
document.write('hello iam new here');
var time= prompt('please enter the time');
if(time> 18){document.write(nice);}
else if(time> 12){document.write('good');}

else if(time>= 5){document.write('better');}*/


var dymood = prompt('hi choose day mood that you want!');

while(dymood !== 'morning'  && dymood !=='night')
{alert('you can choose: morning or night');}

var yourchoice;

if(dymood === 'morning'){yourchoice='<img src="https://goodmorningland.com/wp-content/uploads/2020/05/Good-Morning-natural-garden-flower-images.jpg">'}

else if (dymood === 'night')
{yourchoice='<img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/462694-night-landscape-winter-stars-nature-748x748.jpg">'}
document.write(yourchoice);
var imgnumber=prompt('how many imgs do you want to see');

for(var i=0 ; i<= imgnumber; i++){
  document.write(yourchoice);
}
