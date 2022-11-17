const divContent = document.querySelector('body');
const CONFIG = {
    LETTERS: '01ABCDEFGHIJKLMNOPQRSTUVXWYZぁぃぅくぐっょゖんイアゟブベヺマヌネゼタキヷヵクよユヨゞグ',
    MAX_LETTERS_LENGTH: 15,
    QUANTITY_ITEMS: 12,
    LOW_OPACITY: 0.03,
    MAX_WIDTH: document.body.clientWidth - 100,
    MAX_HEIGHT: document.body.clientWidth / 5,
    MAX_FONT_SIZE: 24,
    SPEED: 130,
};

var listItems;

function start(){
    listItems = new Array();

    create(Item.getRandom(CONFIG.QUANTITY_ITEMS));

    draw();
}

function create(quantity){
    for(let i = 0; i < quantity; i ++){
        listItems.push(new Item(divContent, CONFIG));
    }
}

function draw(){
    divContent.innerHTML = '';

    let indexToRemove = 0;

    listItems.forEach(item =>{
        item.doIt();

        if(item.opacity < 0){
            listItems.splice(indexToRemove, 1);
            indexToRemove --;
        }

        indexToRemove ++;
    });

    if(listItems.length <= (5 * CONFIG.QUANTITY_ITEMS) && Item.getRandom(100) > 50){
        create(Item.getRandom(CONFIG.QUANTITY_ITEMS));
    }

    setTimeout(function(){
        draw();
    }, CONFIG.SPEED);
}

// ---

window.onresize = () =>{
    location.reload();
};

// ---

start();