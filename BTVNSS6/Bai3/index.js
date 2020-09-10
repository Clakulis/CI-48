let n=prompt("Nhap n");
let a=[];
let c=0;
let b1=[];
let b2=[];
for(let i=0;i<n;i++)a[i]=Number(prompt(`Nhap so thu ${i+1}`));
let k=prompt("Nhap k");
for(let i=0;i<n;i++){
    for(let j=i;j<=n;j++){
        if((a[i]+a[j])%k==0){b1.push(a[i]);b2.push(a[j]);c++}
    }
}
for(let i=0;i<c;i++){
    console.log(`(${b1[i]} , ${b2[i]})`);
}

