class Item{
    constructor(content, config){
        this._content = content;
        this._config = config;

        this._text = this.getLetter();
        this._textSize = this.constructor.getRandom(this._config.MAX_LETTERS_LENGTH);
        this._marginTop = this.constructor.getRandom(this._config.MAX_HEIGHT);
        this._marginLeft = this.constructor.getRandom(this._config.MAX_WIDTH);
        this._fontSize = this.constructor.getRandom(this._config.MAX_FONT_SIZE);
        this._opacity = 1;
    }

    get text(){
        return this._text;
    }

    get textSize(){
        return this._textSize;
    }

    get marginTop(){
        return this._marginTop;
    }

    get marginLeft(){
        return this._marginLeft;
    }

    get opacity(){
        return this._opacity;
    }

    lessOpacity(){
        if(this._text.length >= this._textSize){
            this._opacity -= this._config.LOW_OPACITY;
        }
    }

    addLetter(){
        this._text += this.getLetter();
    }

    getLetter(){
        return this._config.LETTERS[this.constructor.getRandom(this._config.LETTERS.length)];
    }

    changeLetter(){
        if(this.constructor.getRandom(100) > 50){
            let replaceIndex = this.constructor.getRandom(this._text.length);
            this._text = this._text.substring(0, replaceIndex) + this.getLetter() + this._text.substring(replaceIndex + 1);
        }
    }

    doIt(){
        this.draw();
        this.addLetter();
        this.changeLetter();
        this.lessOpacity();
    }

    draw(){
        let newItem = document.createElement('span');
        newItem.classList = 'text';
        newItem.style.marginLeft = this._marginLeft;
        newItem.style.marginTop = this._marginTop;
        newItem.style.opacity = this._opacity;
        newItem.style.fontSize = this._fontSize;
        newItem.innerHTML = this._text;

        this._content.appendChild(newItem);
    }

    static getRandom(max){
        return parseInt(Math.random() * max);
    }
}