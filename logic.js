const dishes = ['ramen', 'sushi', 'takoyaki', 'tempura', 'onigiri', 'yakitori', 'katsu curry', 'miso soup', '']

let i = 0;

const elem = document.getElementById('rotatingDish')

setInterval(() => {
    elem.style.opacity = '0';
    setTimeout(() => {
        i = (i+1) % dishes.length;
        elem.textContent = dishes[i];
        elem.style.opacity = '1'
    },300);
},2000)