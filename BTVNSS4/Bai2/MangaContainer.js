import {BaseComponent} from './BaseComponent.js';

class MangaContainer extends BaseComponent{

    constructor(){
        super();
        this.props={
            image:'',
            name:'', 
            views:null,
            likes:null,          
        }
    }

    static get observedAttributes(){
        return ['image','name','views','likes'];
    }

    render(){
        this._shadowRoot.innerHTML=`
        <div class="manga">
            <img src="${this.props.image}" alt="komi" style="height:300px;width:200px;">
            <div id="name">${this.props.name}</div>
            <div id="views">Views: ${this.props.views}</div>
            <div id="likes">Likes: ${this.props.likes}</div>
        </div>    `;
    }
}

window.customElements.define('manga-container',MangaContainer);