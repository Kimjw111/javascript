document.addEventListener('DOMContentLoaded',()=>{
    const About=document.querySelector('#About')
const Products=document.querySelector('#Products')
const Technology=document.querySelector('#Technology')
const Downloads=document.querySelector('#Downloads')
const Etc=document.querySelector('#Etc')
const header=document.querySelector('.header')
const h1=document.querySelector('h1')
const p=document.querySelector('p')
About.addEventListener('click',()=>{
    header.style.backgroundColor='red'
h1.innerHTML='About'
p.innerHTML='Custom Software Development Company'
About.style.backgroundColor='red'
Products.style.backgroundColor='gray'
Technology.style.backgroundColor='gray'
Downloads.style.backgroundColor='gray'
Etc.style.backgroundColor='gray'
})
Products.addEventListener('click',()=>{
    header.style.backgroundColor='green'
    h1.innerHTML='Products'
    p.innerHTML='Building tailored software to address critical needs of global enterprises.'
Products.style.backgroundColor='green'
About.style.backgroundColor='gray'
Technology.style.backgroundColor='gray'
Downloads.style.backgroundColor='gray'
Etc.style.backgroundColor='gray'
})
Technology.addEventListener('click',()=>{
    header.style.backgroundColor='blue'
    h1.innerHTML='Technology'
    p.innerHTML='Machine Learning, Artificial Intelligent, Cloud Platform.'
    Products.style.backgroundColor='gray'
About.style.backgroundColor='gray'
Technology.style.backgroundColor='blue'
Downloads.style.backgroundColor='gray'
Etc.style.backgroundColor='gray'
})
Downloads.addEventListener('click',()=>{
    header.style.backgroundColor='orange'
    h1.innerHTML='Downloads'
    p.innerHTML='You can download a free 10 days trial.'
    Products.style.backgroundColor='gray'
About.style.backgroundColor='gray'
Technology.style.backgroundColor='gray'
Downloads.style.backgroundColor='orange'
Etc.style.backgroundColor='gray'
})
Etc.addEventListener('click',()=>{
    header.style.backgroundColor='pink'
    h1.innerHTML='Etc'
    p.innerHTML='Everything is fine.'
    Products.style.backgroundColor='gray'
About.style.backgroundColor='gray'
Technology.style.backgroundColor='gray'
Downloads.style.backgroundColor='gray'
Etc.style.backgroundColor='pink'
})
})
