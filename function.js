//function :
var natureimg=function(){
console.log('24 years old');

}
natureimg();

function ageme(age1,age2){
  var age =(age1+age2)/2;
  console.log(age);
}
ageme(24,25);
ageme(20,30);

var naturebeauty=function(){

var dymood = prompt('hi choose day mood that you want!');

while(dymood !== 'morning' && dymood !=='night')
{dymood = prompt('please choose morning or night');}

var yourchoice;

if(dymood === 'morning'){yourchoice='<img src="https://goodmorningland.com/wp-content/uploads/2020/05/Good-Morning-natural-garden-flower-images.jpg">'}

else if (dymood === 'night')
{yourchoice='<img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/462694-night-landscape-winter-stars-nature-748x748.jpg">'}
document.write(yourchoice);
var imgnumber=prompt('how many imgs do you want to see');

for(var i=0 ; i<= imgnumber; i++){
  document.write(yourchoice);
}
}
naturebeauty();