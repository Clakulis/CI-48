import {BaseComponent} from "../BaseComponent.js";

class RegisterScreen extends BaseComponent{
    constructor(){
        super();
    }

    render(){
        this._shadowRoot.innerHTML=/*html*/`
        <section class="register-screen">
            <form class="form-register">
                <input-wrapper class="name" label="Name" type="text" error=""></input-wrapper>
                <input-wrapper class="email" label="Email" type="email" error=""></input-wrapper>
                <input-wrapper class="password" label="Password" type="password" error=""></input-wrapper>
                <input-wrapper class="confirm-password" label="Confirm password" type="password" error=""></input-wrapper>
                <button class="btn-register">Register</button>
            </form>
        </section>
        `;

        this.$formRegister = this._shadowRoot.querySelector('.form-register');
        this.$formRegister.onsubmit=(event)=>{
            event.preventDefault();
            //lấy dự liệu từ các input-wrapper
            console.log(this._shadowRoot.querySelector('.name').value);
            //kiểm tra dữ liệu nhập vào, nếu có lỗi thì show ra
            if(this._shadowRoot.querySelector('.name').value==''){this._shadowRoot.querySelector('.name').setAttribute('error', 'Vui lòng nhập tên')}
            else if(this._shadowRoot.querySelector('.email').value==''){this._shadowRoot.querySelector('.email').setAttribute('error', 'Vui lòng nhập email')}
            else if(this._shadowRoot.querySelector('.password').value==''){this._shadowRoot.querySelector('.password').setAttribute("error","Vui lòng nhập mật khẩu")}
            else if(this._shadowRoot.querySelector('.password').value!=this._shadowRoot.querySelector('.confirm-password').value){this._shadowRoot.querySelector(".confirm-password").setAttribute("error","Mật khẩu không khớp")}
            else {firebase.firestore().collection('users').add({
                "name":this._shadowRoot.querySelector('.name').value,
                "email":this._shadowRoot.querySelector('.email').value,
                "password":this._shadowRoot.querySelector('.password').value
            })};
            //lưu dữ liệu vào firestore
        }
    }
}

window.customElements.define('register-screen', RegisterScreen);