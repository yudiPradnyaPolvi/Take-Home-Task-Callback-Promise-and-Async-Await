console.log("Take Home Task Callback");
//Buatlah fungsi callback untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan.
function jumlah (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a+b);
    },0);
}
let hasilPenjumlahan =0 
//callback hell
jumlah(20,20,function(err,result){
    console.log ("Hasil Penjumlahan 20+20 = " + result)
})


function kurang (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a-b);
    },0);
}
let hasilPengurangan =0 
//callback hell
kurang(20,10,function(err,result){
    console.log ("Hasil Pengurangan 20-10 = "+result)
})

function kali (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a*b);
    },0);
}

//callback hell
kali(30,20,function(err,result){
    console.log ("Hasil Perkalian 30*20 = "+result)
})

function bagi (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a/b);
    },0);
}
let hasilPembagian =0 
//callback hell
bagi(20,5,function(err,result){
    console.log ("Hasil Pembagian 20/5 = "+result)
})

function pangkat (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a**b);
    },0);
}
let hasilPangkat =0 
//callback hell
pangkat(2,20,function(err,result){
    console.log ("Hasil Perpangkatan 2**20 = "+result)
})

function modulus (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a % b);
    },0);
}
let hasilModulus =0 
//callback hell
modulus(221,20,function(err,result){
    console.log ("Hasil Modulus 221%20 = "+result)
})