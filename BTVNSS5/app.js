let fname=document.getElementById("first-name");
let lname=document.getElementById("last-name");
let mail=document.getElementById("email");
let phone=document.getElementById("phone-number");
let button=document.getElementById("btn");
button.addEventListener("click", register)

function register(){
    firebase.firestore().collection('users').add({
        firstName: fname.value ,
        lastName:lname.value ,
        email:mail.value ,
        phoneNumber:phone.value,
    })
}

async function readData(){
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
        console.log(doc.data());
    }
}

async function updatePhoneNumber(){
    let result = await firebase.firestore().collection('users').get();
    for(let doc of result.docs){
        let num=doc.data().phoneNumber;
        num="84"+num.substr(1);
        await firebase.firestore().collection('users').doc(doc.id).update({
            phoneNumber: num,
        })
    }
}

async function deleteLname(){
    let names=[];
    let result = await firebase.firestore().collection('users').get();
    for(let doc1=0;doc1<result.docs.length;doc1++){
        for(let doc2=doc1+1;doc2<=result.docs.length;doc2++){
            if(result.docs[doc1].lastName==result.docs[doc2].lastName){
                    names.push(result.docs[doc1]);
            }
        }
    }

    for(let i=0;i<names.length;i++){
        for(let doc of result.docs){
            if(doc.data().lastName==names[i]) await firebase.firestore().collection('users').id(doc.id).delete();
        }
    }
}

