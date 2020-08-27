class Meal{
    name;
    foods;
    date;
    constructor(name){
        this.name=name;
        this.foods=[];
        this.dateModified=new Date().toISOString();
        }
    
    addFood(food){
        this.foods.push(food);
    }

    calculatePrice(){
        let s=0;
        for(let i=0;i<this.foods.length;i++){s+=this.foods[i].price}
        return s;
    }

    show(){
        console.log(`Meal's name: ${this.name}`);
        let s='';
        for(let i=0;i<this.foods.length;i++){
            s+=`${this.foods[i].name}, `
        }
        console.log(`Foods: ${s}`);
        console.log(`Date modified: ${this.dateModified}`);
    }
}

class VegetableMeal extends Meal{

    constructor(name){
        super(name);
        this.foods=[];
        this.dateModified=new Date().toISOString();
    }

    calculatePrice(){
        let s=0;
        for(let i=0;i<this.foods.length;i++){s+=this.foods[i].price}
        return s*85/100;
    }
}

class NonVegetableMeal extends Meal{

    constructor(name){
        super(name);
        this.foods=[];
        this.dateModified=new Date().toISOString();
    }

    calculatePrice(){
        let s=0;
        for(let i=0;i<this.foods.length;i++){s+=this.foods[i].price}
        return s*95/100;
    }
}

class Food{
    name;
    luxuriousName;
    price;
    
    constructor(name,luxuriousName,price){
        this.name=name;
        this.luxuriousName=luxuriousName;
        this.price=price;
    }
}

class  VegetableFood extends Food{

    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price);
    }
}

class NonVegetableFood extends Food{
    
    constructor(name,luxuriousName,price){
        super(name,luxuriousName,price);
    }
}

let food1 = new VegetableFood('Rau muống luộc', 'Siêu xơ thực vật thủy nhiệt', 20000);
let food2 = new VegetableFood('Salad Nga', "Rau củ quả sốt thượng hạng chuẩn nước Nga", 40000);
let food3 = new NonVegetableFood('Thịt chó mắm tôm', 'Giả cày với xốt tôm thượng hạng ', 100000);
let food4 = new NonVegetableFood('Cá rán', 'Thủy sinh vật mắc cạn', 80000);
let food5 = new NonVegetableFood('Gà nướng', 'Gà 9 cựa ở Hỏa Diệm Sơn', 150000);

let menu = [food1,food2,food3,food4,food5];

let vegetableMenu = new VegetableMeal('Ăn chay');
let nonVegetableMenu = new NonVegetableMeal('Ăn thịt');

console.log(vegetableMenu.name);

vegetableMenu.addFood(food1);
vegetableMenu.addFood(food2);

console.log(vegetableMenu.show());
console.log("Discount 15%: ", vegetableMenu.calculatePrice());

console.log(nonVegetableMenu.name);
nonVegetableMenu.addFood(food3);
nonVegetableMenu.addFood(food4);
nonVegetableMenu.addFood(food5);

console.log(nonVegetableMenu.show());
console.log("Discount 5%: ", nonVegetableMenu.calculatePrice());
  
