import {Destination} from"./destination.js";
class Restaurant extends Destination{
    buffetPrice;

    constructor(name,ticketPrice){
        super(name);
        this.images=[];
        this.dateModified=new Date().toISOString();
        this.ticketPrice=ticketPrice;
    }
}

export {Restaurant};