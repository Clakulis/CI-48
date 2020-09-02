import {Professor} from './Professor.js';
import {Student} from './Student.js'

class Classroom{
    classID;
    subject;
    professors;
    students;

    constructor(classID,subject){
        this.classID=classID;
        this.subject=subject;
        this.professors=[];
        this.students=[];
    }

    addProfessor(professor){
        if(professor instanceof Professor){this.professors.push(professor)};
    }

    addStudent(student){
        if(student instanceof Student){this.students.push(student)};
    }

    search(name){
        for(let i=0;i<this.students.length;i++){if(name==this.students[i].name)console.log(this.students[i]);}
    }

    biggerThanSix(){
        for(let i=0;i<this.students.length;i++){if(this.students[i].score>6)console.log(this.students[i]);}
    }

}

let chinh=new Professor("Chinh","Male","Master");
let cijs=new Classroom(48,"IT");
let quan=new Student("Quân","Male","14","2020",5);
let hocsinhgioi =new Student("HSG","Female","1","2020",10);

cijs.addProfessor(chinh);
cijs.addStudent(quan);
cijs.addStudent(hocsinhgioi);
cijs.search("Quân");
cijs.biggerThanSix();