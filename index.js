var a = document.querySelector('.a');
var s =document.querySelector('.s');
var d=document.querySelector('.d');
var f=document.querySelector('.f');

var j=document.querySelector('.j');
var k=document.querySelector('.k');
var l=document.querySelector('.l');



document.addEventListener("DOMContentLoaded", function () {
  

   a.addEventListener("click",()=>{

   soundplay(a.textContent);
    });

    s.addEventListener("click",()=>{
        soundplay(s.textContent);
         });

    d.addEventListener("click",()=>{
     soundplay(d.textContent);
        });
    f.addEventListener("click",()=>{
        soundplay(f.textContent);
            });
    j.addEventListener("click",()=>{
                soundplay(j.textContent);
                 });
             
    k.addEventListener("click",()=>{
                     soundplay(k.textContent);
                      });
             
    l.addEventListener("click",()=>{
                  soundplay(l.textContent);
                     });

    document.addEventListener("keypress",(event)=>{

       soundplay(event.key);
    }) ;
  


  });

function playsound(name)
{
    var audio = new Audio(`sounds/${name}.mp3`);
    audio.play();

}

function soundplay(key)
{
    switch(key)
    {
        case 'a':playsound("crash");break;
        case 's':playsound("kick-bass");break;
        case 'd':playsound("snare");break;
        case 'f':playsound("tom-1");break;
        case 'j':playsound("tom-2");break;
        case 'k':playsound("tom-3");break;
        case 'l':playsound("tom-4");break;
        default:console.log(key);
        }
}
