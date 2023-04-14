console.log("Take Home Task Promise");
//Buatlah promise untuk menjumlahkan, mengurangi, mengalikan, membagi, dan mempangkatkan 2 bilangan, boleh dengan mengubah fungsi callback pada nomor 1 untuk dijadikan promise.

function jumlah(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a+b);
    },0);
}
function jumlahPromise (a,b){
    const penjumalahan= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a+b);
        }
    })
    return penjumalahan;
}
let hasilPenjumlahan=0
jumlahPromise (30,20)
.then (function(hasil){ 
    console.log("Hasil Penjumlahan 30+20 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

function kurang(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a-b);
    },0);
}
function kurangPromise (a,b){
    const pengurangan= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a-b);
        }
    })
    return pengurangan;
}
let hasilPengurangan=0
kurangPromise(40,20)
.then (function(hasil){ 
    console.log("Hasil Pengurangan 40-20 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

function kali(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a*b);
    },0);
}
function kaliPromise (a,b){
    const perkalian= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a*b);
        }
    })
    return perkalian;
}
let hasilPerkalian=0
kaliPromise (30,40)
.then (function(hasil){ 
    console.log("Hasil Penjumlahan 30*40 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

function bagi(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a/b);
    },0);
}
function bagiPromise (a,b){
    const pembagian= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a/b);
        }
    })
    return pembagian;
}
let hasilPembagian=0
bagiPromise (1000,20)
.then (function(hasil){ 
    console.log("Hasil Pembagian 1000/20 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

function pangkat(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a**b);
    },0);
}
function pangkatPromise (a,b){
    const perpangkatan= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a**b);
        }
    })
    return perpangkatan;
}
let hasilPerpangkatan=0
pangkatPromise (4,50)
.then (function(hasil){ 
    console.log("Hasil Perpangkatan 4**50 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

function modulus(a,b,hasil){
    setTimeout(()=>{
        hasil (null,a%b);
    },0);
}
function modulusPromise (a,b){
    const modulus= new Promise ((resolve,reject)=>{
        if(typeof a=="string"||typeof b=="string"){
            reject ("ada angka tapi string")
        }
        else{
            resolve (a%b);
        }
    })
    return modulus;
}
let hasilModulus=0
modulusPromise (30,7)
.then (function(hasil){ 
    console.log("Hasil Modulus 30 % 7 = " + hasil);
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

