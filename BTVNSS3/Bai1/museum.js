import {Destination} from"./destination.js";
class Museum extends Destination{
    ticketPrice;

    constructor(name,ticketPrice){
        super(name);
        this.images=[];
        this.dateModified=new Date().toISOString();
        this.ticketPrice=ticketPrice;
    }
}

export {Museum};