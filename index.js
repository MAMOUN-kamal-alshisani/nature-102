
/*console.log('my name is mamoun');
=======
console.log('my name is mamoun');
>>>>>>> 972f0cf67e0a68a5787889fe0de14a849b875b02
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




// var naturebeauty=function(){

// var dymood = prompt('hi choose day mood that you want!');

// while(dymood !== 'morning' && dymood !=='night')
// {dymood = prompt('please choose morning or night');}

// var yourchoice;

// if(dymood === 'morning'){yourchoice='<img src="https://goodmorningland.com/wp-content/uploads/2020/05/Good-Morning-natural-garden-flower-images.jpg">'}

// else if (dymood === 'night')
// {yourchoice='<img src="https://hdwallpaperim.com/wp-content/uploads/2017/08/25/462694-night-landscape-winter-stars-nature-748x748.jpg">'}
// document.write(yourchoice);
// var imgnumber=prompt('how many imgs do you want to see');

// for(var i=0 ; i< imgnumber; i++){
//   document.write(yourchoice);
// }
// }
// naturebeauty();



/*var mylove = prompt('choose pic of love');
alert('please choose pic1 or pic2');

while (mylove != 'pic1' && mylove != 'pic2') { mylove = prompt('hi choose pic1 or pic2');}

var yourlove;
if (mylove === 'pic1') { yourlove = '<img src="https://tgeb2017.files.wordpress.com/2020/12/love.jpg">' }
else if (mylove === 'pic2') { yourlove = '<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flamingo-love-heart-friends-kiss-royalty-free-image-964441848-1560451061.jpg">' }
document.write(yourlove);

var imgnumber = prompt('how many pic you want to see');
for(var i=0; i<= imgnumber; i++)
{document.write(yourlove);}*/
/*
var mycar = prompt('choose car1 or car2');

while (mycar !='car1' && mycar !='car2')
{mycar=prompt('please choose car1 or car2');}

var yourcar;
if(mycar ==='car1'){yourcar='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpiYS6cAwKchpaDCHzCLi4DVR1wkwBdMzeDQ&usqp=CAU">'}
else if(mycar ==='car2'){yourcar='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHYn_EFkRIyFVL_xlvy6FZtj4s1OdnxvzSQ&usqp=CAU">'}
document.write(yourcar);
var imgnumber=prompt('how many imgs you want to see');
for(var i=0 ; i<= imgnumber;i++)
{document.write=(yourcar);}*/


(function nature(){
  let light = ['https://cdn.wallpapersafari.com/70/76/xU0Aa9.jpg','https://tse4.mm.bing.net/th?id=OIP.lb0N7vwp3uXbmpJefrL4ogHaEK&pid=Api&P=0','https://getwallpapers.com/wallpaper/full/8/1/a/1051978-download-sunny-day-wallpaper-2560x1600-smartphone.jpg','https://tse2.mm.bing.net/th?id=OIP.8qneRBur6fxybwsuYZ-7agHaEK&pid=Api&P=0','https://wallup.net/wp-content/uploads/2019/10/364884-landscape-nature-morning-dawn-sun-road-trees-field-fog.jpg']
let night = ['https://wallpapercave.com/wp/wp3351566.jpg','https://wallpapercave.com/wp/wp6444736.jpg','https://wallpapercave.com/wp/wp2561679.jpg','http://wallpapercave.com/wp/Tw6sIbA.jpg','https://i.pinimg.com/originals/3a/51/83/3a51830036947c3f6f7da81565a7a8c7.jpg']
let daytime =  prompt('Hello, what time of the day you want?')
let dayChoice = ''
// let daytime_repeat = prompt('please choose `dayTime` or `nightTime`?').toLocaleLowerCase()

while(daytime != 'light' && daytime != 'night'){
  daytime = prompt('choose light or night?')
}
let ImgCount = prompt('how many images of nature do you want? ')

if(daytime == 'light'){
  dayChoice = light
  if(ImgCount > light.length){
    alert(`apologise only found ${light.length} images!`)
    ImgCount = light.length
  }
}
if(daytime == 'night'){
  dayChoice = night
  if(ImgCount > night.length){
    alert(`apologise only found ${night.length} images!`)
    ImgCount = night.length
  }
}
for(let i = 0 ; i< ImgCount ; i++){
  let imgContainer = document.querySelector('.imgs_div')
  let img = document.createElement('img')
img.setAttribute('src',dayChoice[i])
img.setAttribute('class','img')
imgContainer.appendChild(img)
}

}())