function tashizan(){
  let l =document.querySelector('input[name="left"]');
  let r =document.querySelector('input[name="right"]'); 
  let a=document.querySelector('span#answer');  
  a.textContent=Number(l.value)+Number(r.value); 
}
b = document.querySelector('button#calc'); 
 b.addEventListener('click', tashizan);
 