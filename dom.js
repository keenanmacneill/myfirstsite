//console.dir(document);

//let valUrl = document.URL;
//let ele = document.querySelector('.navbar');
//let myDOM = {
//URL: 'My URL',
//children: [
//{
//html: {
//'body': 'Content'
//}
//}
//]
//}

//console.log(valUrl);
//console.dir(ele.textContent);

//let ele1 = document.getElementById('Education');
//console.log(ele1.textContent);

//ele1.textContent = 'Changed ele1.textContent';
//console.log(ele1.textContent);

//let eles2 = document.querySelectorAll('td');
//eles2.forEach(function (eles2) {
//console.log(eles2.textContent)
//})

//let eles3 = document.querySelectorAll('.header');
//let html = '<div style="color:red"> changing <br> tagName </div>';
//console.dir(eles3[0].tagName);

//eles3.forEach(function (el) {
//if (el.tagName != 'HEADER') {
//el.innerHTML = html;
//}
//}
//)

//eles3.forEach((el) => {
//if (el.tagName != 'HEADER') {
//el.innerHTML = html;
//}
//}
//)

//document.write(html);

//let header = document.querySelector('.header');
//header.style.color = 'red'
//console.log(header.style.color);

//const ele1 = document.querySelector('#Experience');
//ele1.style.cssText = 'background: blue; color: white;';
//const col = ele1.querySelector('table colgroup col');
//col.style.background = 'black';
//console.log(col);

//const ele2 = document.querySelectorAll('section h2');
//ele2.forEach((el) => {
//console.log(el);
//el.style.textTransform = 'uppercase';
//})

//const first = document.querySelector('input[name ="first"]');
//const last = document.querySelector('input[name ="last"]');
//const chk = document.querySelector('input[type="checkbox"]');
//first.setAttribute('placeholder', 'first name');
//last.setAttribute('placeholder', 'last name');
//first.value = 'Keenan';
//last.value = 'MacNeill';
//chk.checked = true;

//const btn = document.querySelector('button');
//let counter = 0;

//btn.addEventListener('click', btnClicked);

//function btnClicked() {
//counter++;
//console.log('clicked ' + counter);
//btn.textContent = 'Clicked (' + counter + ')';
//btn.classList.toggle('box');
//}

//btn.addEventListener('click', temp, { once: true });
//function temp() {
    //console.log('clickedOnceTrue');
//}

//btn.addEventListener('click', adder);
//function adder(e) {
    //const el = e.target;
    //el.removeEventListener('click', adder);
    //el.style.color = '#ddd';
    //console.log('clickedRemoveEventListener');
//}

//const holder = document.querySelectorAll('.holder input');
//holder.forEach(holder => {
//holder.addEventListener('mouseover', (e)=>{
    //holder.style.background = 'red';
    //holder.classList.toggle('box');
//});
//holder.addEventListener('mouseout', (e)=>{
    //holder.style.background = 'white';
    //holder.classList.toggle('box');
//});
//holder.addEventListener('click', (e)=>{
    //holder.style.background='blue';
//});
//holder.addEventListener('focus', ()=>{
    //holder.style.background = 'green';
//})
//holder.addEventListener('blur', (e) =>{
    //holder.style.background = 'white';
//})
//});
