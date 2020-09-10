import {BaseComponent} from "./BaseComponent.js";

class Meme extends BaseComponent {
    constructor() {
        super();
        this.props = {
            "name": "",
            "image": "",
            "description": "",
            "date-modifed": null,
        };
    };

    static get observedAttributes() {
        return ["name", "image", "description", "date-modified"];
    }


    render() {
        this._shadowRoot.innerHTML = `
        <div class="meme">
                <div id="name">${this.props.name}</div>
                <img src="${this.props.image}" alt="Ảnh">
                <div id="description">${this.props.description}</div>
                <div id="date-modified">${this.props["date-modified"]}</div>
        </div>
       `;
    }

}
window.customElements.define("meme-container", Meme);