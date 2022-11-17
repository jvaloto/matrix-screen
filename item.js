class Item{
    constructor(contentParent, config){
        this._contentParent = contentParent;
        this._config = config;

        this._isDelete = false;
        this._text = this.getLetter();
        this._textSize = this.constructor.getRandom(this._config.MAX_LETTERS_LENGTH);
        this._marginTop = this.constructor.getRandom(this._config.MAX_HEIGHT);
        this._marginLeft = this.constructor.getRandom(this._config.MAX_WIDTH);
        this._fontSize = this.constructor.getRandom(this._config.MAX_FONT_SIZE) + 10;
        this._opacity = 1;
        this._speed = ( Math.random() * 600 ) + 100;

        this._content = document.createElement('span');
        this._content.classList = 'text';
        this._content.style.marginLeft = this.marginLeft;
        this._content.style.marginTop = this.marginTop;
        this._content.style.fontSize = this.fontSize;

        setTimeout(() => {
            this.start();
        }, this.constructor.getRandom(1500));
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
    
    get isDelete(){
        return this._isDelete;
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

    start(){
        this.doIt();

        if(this.opacity > 0){
            setTimeout(() => {
                this.start();
            }, this._speed);
        }else{
            this.delete();
        }
    }

    doIt(){
        this.draw();
        this.addLetter();
        this.changeLetter();
        this.lessOpacity();
    }

    draw(){
        this._content.style.opacity = this._opacity;
        this._content.style.fontSize = this._fontSize;
        this._content.innerHTML = this._text;

        this._contentParent.appendChild(this._content);
    }

    delete(){
        this._isDelete = true;
        this._content.remove();
    }

    static getRandom(max){
        return parseInt(Math.random() * max);
    }
}