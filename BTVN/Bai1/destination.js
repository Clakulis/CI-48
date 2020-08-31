class Destination{
    name;
    images;
    dateModified;

    constructor(name){
        this.name=name;
        this.images=[];
        this.dateModified=new Date().toISOString();
    }

    setNewImage(url){
        this.images.push(url);
    }

    getInfo(){
        let html="";
        html+=`<h3>Địa điểm: ${this.name}<h3>`;
        for(let i=0;i<this.images.length;i++){
        html+=`<img src="${this.images[i]}"><br>`;
        }
        html+=`<small>Date modified: ${this.dateModified}</small>`;
        document.querySelector('#app').innerHTML=html;
    }
}

export {Destination};
