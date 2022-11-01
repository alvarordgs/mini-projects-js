export default class LetterCounter {
  constructor(text) {
    this.text = text;
  }

  get _text() {
    return this.text;
  }

  get lettercount() {
    if (this._text != "") {
      return `O texto tem ${this._text.length} letras.`;
    } else {
      return "Nenhum texto foi digitado, digite um texto para ser contado.";
    }
  }
}
