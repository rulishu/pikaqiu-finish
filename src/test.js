const string = `
.skin * {box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before,.skin *::after {box-sizing: border-box;}

.skin{
  background: #FFE600;
  min-height: 50vh;
  position: relative;
}


.nose{
  position: relative;
  z-index: 10;
}
.nose .san {
  border: 10px solid red;
  border-color: black transparent transparent;
  /* 左右2边的去不掉就变成半透明的 transparent */
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 135px;
  margin-left: -10px;
}
@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(5deg);
  }
  66%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }
}
.nose .san:hover{
  transform-origin:center bottom;
  animation: wave 300ms infinite linear;
}
.nose .yuan {
  position: absolute;
  width: 20px;
  height: 6px;
  top: -14px;
  left: -10px;
  border-radius: 50%;
  background: black;
}


.eye{
  border: 2px solid #000000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2E2E2E;
  border-radius: 50%;
}
.eye::before{
  content: '';
  display: block;
  border: 3px solid #000000;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  position: relative;
  left: 10px;
  top: -1px;
}
.eye.left{
  transform: translateX(-130px);
}
.eye.right{
  transform: translateX(130px);
}


.mouth{
  /* border: 1px solid red; */
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 160px;
  margin-left: -100px;
}
.mouth .up{
 position: relative;
 top: 0;
 z-index: 1;
}

.mouth .up .lip{
  border: 3px solid black;
  width: 100px;
  height: 30px;
  border-top-color:transparent;
  border-right-color: transparent;
  position: relative;
  left: 50%;
  background:#FFE600 ;
}
.mouth .up .lip.left{
  border-radius: 0 0 0 50px;
  transform: rotate(-20deg);
  margin-left: -100px;
}
.mouth .up .lip.right{
  border-radius: 0 0 50px 0;
  transform: rotate(20deg);
  margin-top: -30px;
}

.mouth .up .lip::before{
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #FFE600;
}
.mouth .up .lip.left::before{
  right:-6px;
}
.mouth .up .lip.right::before{
  left:-6px;
}

.mouth .down{
  width: 100%;
  height: 180px;
  position: absolute;
  top: 6px;
  overflow: hidden;
}
.mouth .down .yuan1{
  border: 3px solid black;
  width: 150px;
  height: 800px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9B000A;
  overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
  /* border: 1px solid blue; */
  width: 140px;
  height: 140px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -70px;
  border-radius: 70px/70px;
  background: #FF485F;
}


.face{
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
  border-radius: 50%;
  background: #FF0000;
}
.face > img{
  position: absolute;
  top: 50%;
  left:50%;
}
.face.left{
 transform:translateX(-180px);
}
.face.left > img{
 transform: rotateY(180deg);
 transform-origin: 0 0;
}
.face.right{
 transform:translateX(180px);
}

`



const player ={
  id : undefined,
  time : 100,
  ui : {demo : document.querySelector('#demo'),
       demo2 : document.querySelector('#demo2'),
  },
    events :{
      '#btnPause' : 'pause',
      '#btnPlay': 'play',
      '#btnSlow' : 'slow',
      '#btnNormal' : 'normal',
      '#btnFast' : 'fast'
       },
  n : 1,
    init: ()=>{
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.play()
        player.bindEvents()
       },
    bindEvents: ()=>{
      for(let key in player.events){
        if(player.events.hasOwnProperty(key)){
          const value = player.events[key] //pause,play,slow,normal,fast
          document.querySelector(key).onclick = player[value]
        }
      }
       },
    run: ()=>{
        player.n+=1
        if(player.n>string.length){
            window.clearInterval(player.id)
            return
        }
        // console.log(n+':'+string.substring(0,n))
        player.ui.demo.innerText = string.substr(0,player.n)
        player.ui.demo2.innerHTML = string.substr(0,player.n)
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
       },
    play:()=>{
      //  console.log('play')
       player.id = setInterval(player.run,player.time)
       },
    pause:()=>{
      //  console.log('pause')
       window.clearInterval(player.id)
       },
    slow:()=>{
      //  console.log('slow')
       player.pause()
       player.time = 300
       player.play()
       },
    normal:()=>{
      //  console.log('normal')
       player.pause()
       player.time = 100
       player.play()
       },
    fast:()=>{
      //  console.log('fast')
       player.pause()
       player.time = 0
       player.play()
       }
    }
    player.init()




//setInterval第一个参数返回一个函数注意不要加括号，加括号表示函数的返回值
//const string =``
//export default string

//import string from './css.js' 