import {BaseComponent} from "./BaseComponent.js";
import "./Memes.js";

class List extends BaseComponent{

    constructor(){
        super();
        this.state={
            memes:[
                {
                    "name":"bé Sa",
                    "image":"https://i.pinimg.com/236x/75/31/5d/75315db511a058432745fc37d82a7c44.jpg",
                    "description": "bé Sa mếu",
                    "date-modified": "2020/09/10",
                },
                {"name":"chinese panda","image":"https://i.pinimg.com/236x/8b/cf/15/8bcf15e8af97cbd56ab29f15e01933aa.jpg","description":"gấu trúc không ổn","date-modified":"2020/09/10"},
                {"name":"giận tím người","image":"https://photo-1-baomoi.zadn.vn/w1000_r1/2020_01_02_119_33523068/611a83416101885fd110.jpg","description":"thiếu nữ mặc áo dài giận tím người","date-modified":"2020/09/10"},
                {"name":"suprise nigga","image":"https://file.tinnhac.com/resize/600x-/2019/12/17/20191217175332-7ed1.jpg","description":"anh da đen bất ngờ","date-modified":"2020/09/10"}
            ]
        }
    }

    render(){
        let html='';
        for(let meme of this.state.memes){
            html+=`<meme-container name="${meme.name}" image="${meme.image}" description="${meme.description}" date-modified="${meme["date-modified"]}"></meme-container>`
        }
        this._shadowRoot.innerHTML=`        
        <form id="form-add-meme"> 
            <input name="name" placeholder="Meme's name">
            <input name="image" placeholder="Image's source">
            <textarea name="description" placeholder="Description"> </textarea>
            <input type="datetime-local" name="dateModified" placeholder="Date modified"> 
            <button> Add Meme </button>
        </form>
        <div class="list">
            ${html}
        </div>
        `;

        this.$formAddMeme = this._shadowRoot.getElementById("form-add-meme");
        this.$formAddMeme.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                "name": this.$formAddMeme.name.value,
                "image": this.$formAddMeme.image.value,
                "description": this.$formAddMeme.description.value,
                "date-modified": this.$formAddMeme.dateModified.value,
            };
            this.state.memes.push(newMeme);
            this.render();
        }
    }

}
   

window.customElements.define("meme-list",List);
