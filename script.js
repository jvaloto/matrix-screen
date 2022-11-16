const letters = 'ABCDEFGHIJKLMNOPQRSTUVXWYZあbcでfgひjklもpっrsつゔxwyz01';
const QUANTITY_ITEMS = 25;
const SPEED = 140;
const MAX_WIDTH = document.body.clientWidth - 100;
const MAX_HEIGHT = document.body.clientWidth / 5;
const divContent = document.querySelector('body');
var listItems = new Array();

function create(items){
    for(let i = 0; i < items; i ++){
        let newItem = {
            text: getLetter(),
            textSize: getRandom(15),
            marginTop: getRandom(MAX_HEIGHT),
            marginLeft: getRandom(MAX_WIDTH),
            opacity: 1
        };

        listItems.push(newItem);
    }
}

function getLetter(){
    return letters[getRandom(letters.length)];
}

function start(){
    listItems = new Array();

    create(QUANTITY_ITEMS);

    draw();
}

function getRandom(max){
    return parseInt(Math.random() * max);
}

function draw(){
    divContent.innerHTML = '';

    let index = 0;

    listItems.forEach(item =>{
        let newItem = document.createElement('span');
        newItem.classList = 'text';
        newItem.style.marginLeft = item.marginLeft;
        newItem.style.marginTop = item.marginTop;
        newItem.style.opacity = item.opacity;
        newItem.innerHTML = item.text;

        divContent.appendChild(newItem);
        
        item.text += getLetter();
        
        if(item.text.length >= item.textSize){
            item.opacity -= 0.04;
        }

        if(item.opacity <= 0){
            listItems.splice(index, 1);
        }

        index ++;
    });

    if(listItems.length <= (5 * QUANTITY_ITEMS) && getRandom(100) > 50){
        create(getRandom(QUANTITY_ITEMS));
    }

    setTimeout(function(){
        draw();
    }, SPEED);
}

start();

window.onresize = () =>{
    location.reload();
};