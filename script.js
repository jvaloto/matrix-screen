const divContent = document.querySelector('body');
const CONFIG = {
    LETTERS: '01ABCDEFGHIJKLMNOPQRSTUVXWYZぁぃぅくぐっょゖんイアゟブベヺマヌネゼタキヷヵクよユヨゞグ',
    MAX_LETTERS_LENGTH: 15,
    QUANTITY_ITEMS: ( 50 * ( ( document.body.clientWidth * 100 ) / 2560 ) ) / 100,
    LOW_OPACITY: 0.03,
    MAX_WIDTH: document.body.clientWidth - 100,
    MAX_HEIGHT: document.body.clientWidth / 5,
    MAX_FONT_SIZE: 24,
    SPEED: 100,
    PERC_SHOW_ITEMS: 85,
};

var listItems;

function start(){
    listItems = new Array();

    create(Item.getRandom(CONFIG.QUANTITY_ITEMS));

    removeItems();
}

function create(quantity){
    for(let i = 0; i < quantity; i ++){
        listItems.push(new Item(divContent, CONFIG));
    }
}

function removeItems(){
    listItems = listItems.filter(e => !e.isDelete);

    create(Item.getRandom(Item.getRandom(1)));

    if(listItems.length <= ( ( CONFIG.QUANTITY_ITEMS * CONFIG.PERC_SHOW_ITEMS ) / 100 )){
        create(Item.getRandom(CONFIG.QUANTITY_ITEMS));
    }

    setTimeout(function(){
        removeItems();
    }, 300);
}

// ---

window.onresize = () =>{
    location.reload();
};

// ---

start();