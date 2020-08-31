import {Park} from"./park.js";
import {Destination} from"./destination.js";
import {Museum} from "./museum.js";
import {Restaurant}from "./restaurant.js";

class DestinationsList{
    destinations;
    dateModified;

    constructor(){
        this.destinations=[];
        this.dateModified=new Date().toISOString();
    }

    addDestination(destination){
        if(destination instanceof Destination) this.destinations.push(destination);
    }

    findDestination(name){
        for(let i=0;i<this.destinations.length;i++){
            if(name=this.destinations[i].name) console.log(`${this.destinations[i]}`);
        }
    }
    get totalPrice(){
        let totalPrice=0;
        for(let i=0;i<this.destinations.length;i++)totalPrice+=this.destinations[i].ticketPrice;
        return totalPrice;
    }
}

let cvcg=new Park("Công viên Cầu Giaays",10000);
cvcg.setNewImage("https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2017/09/Cong-vien-Cau-Giay-1-e1505889806491.jpg");
cvcg.setNewImage("https://travel360.vn/uploads/cam-nang/hanoi/hoat-dong/cong-vien-cau-giay.jpg")
cvcg.getInfo();

let baoTangHaNoi =new Museum("Bảo tàng Hà Nội",200000);
baoTangHaNoi.setNewImage("https://lh3.googleusercontent.com/proxy/cuT81J-0bgFr8Ew8SnqLrZup252KF3pwdjcoupUHw0YOx9jxxojYtsZ8CMIeQpk3kvUkL1dUl6dyoLQeZ39uP7qx_EpE9X0Wec7y_CfzzFIKbEsiMEr7eyx9tvsfL8ONDta532n41rOE3Og9L41ccalkaYns3mUOYqy3");

let KFC=new Restaurant("KFC",300000);
KFC.setNewImage("https://media-cdn.tripadvisor.com/media/photo-s/1b/99/44/8e/kfc-faxafeni.jpg")


let list=new DestinationsList();
list.addDestination(cvcg);
list.addDestination(baoTangHaNoi);
list.addDestination(KFC);

list.findDestination(KFC);

console.log(list.totalPrice);

