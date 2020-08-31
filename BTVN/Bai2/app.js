class MyProfile extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot=this.attachShadow({mode:"open"});
        this._shadowRoot.innerHTML=`
        <img src="https://www.tapchithethao.com/wp-content/uploads/2018/12/na-ni-1-1200x675.jpg" alt="con chó nà ní">
        <div id="name">Nà ní</div>
        <div id="age">16</div>
        <div id="address">HN</div>`;
    }

    static get observedAttributes(){
        return['name','image','age','address'];
    }
}

window.customElements.define('my-profile',MyProfile);