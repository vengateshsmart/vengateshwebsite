
// navbar code
let burger = document.querySelector(".burger");
let links = document.querySelector(".navbar");

burger.addEventListener('click', () => {
    links.classList.toggle("nav-show");
})

let hometxt = document.querySelector(".text-center");

burger.addEventListener('click', () => {
    hometxt.classList.toggle("hometxt-hide");
})

//regform code
let regform = document.querySelector(".regform");
let form_data= document.forms.admission;
let checkBox = document.querySelector('.cmode');

let handleSubmit =(event)=>{
    event.preventDefault();
    let formData = new FormData(form_data);
   
  let sub=document.querySelector('.s-msg');
  sub.classList.add("anime");
  sub.innerText=`form has been successfully submitted`;
  setTimeout(() => {
    sub.classList.remove('anime');
}, 3000);
setTimeout(() => {
   sub.innerHTML='';

}, 4000);

console.log(sub);
  
}
checkBox.addEventListener('change',(e)=>{
    let val=e.target.value;
    let msgSpan = document.querySelector(".ctype-msg");
    if (val==='regular') {
        msgSpan.classList.add("anime");
        msgSpan.innerText=`you select a perfect one!`;
    }
    setTimeout(() => {
        msgSpan.classList.remove('anime');
    }, 3000);
    setTimeout(() => {
        msgSpan.innerHTML='';

    }, 4000);
})
document.querySelector(".fname").addEventListener('input',()=>{
    let val=form_data.elements.name.value;
       let spanEl= document.querySelector(".dynamic");
       spanEl.classList.add('anime');
       spanEl.innerText=`hello ${val} !`;
})

regform.addEventListener('submit',handleSubmit);


