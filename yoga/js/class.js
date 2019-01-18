class Options {
    constructor(height, width, bg, fontSize, textAlign,text){
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    this.text = text;
    }
    cssText() {
       let div = document.createElement('div');
       div.textContent = this.text;
       document.body.appendChild(div);
       div.style.cssText = `height: ${this.height};
                            width: ${this.width};
                            background: ${this.bg};
                            font-size: ${this.fontSize};
                            text-align: ${this.textAlign};`
    };
};

let newDiv = new Options('200px','200px','yellow','30px','center','Hello, I am new div');
newDiv.cssText();