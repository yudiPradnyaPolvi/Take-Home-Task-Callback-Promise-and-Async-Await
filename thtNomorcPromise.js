console.log ("Promise pada nomor 2");

/*
Selesaikan permasalahan matematika di bawah ini:
a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12
b. 500 - 625 / 5 + 84 / 12 * 96 / 12
c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84
d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250
e. 36 ** 2 / 72 + 125 * 10 - 24 * 3
f. 500 / 100 * 20 + 84 * 2 - 125 / 5
g. 375 * 2 - 750 / 25 + 1000 / 500
h. 12 * 12 * 2 - 84 + 96 ** 2
i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12
j. 96 / 12 ** 2 + 625 / 5 - 375 * 84
k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10
l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10
m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2
n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12
o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2
*/


function bagi (a,b,hasil){
    setTimeout (()=>{
        hasil (null,a/b);
    },0);
}

function kali1 (c,d,hasil1){
    setTimeout (()=>{
        hasil1 (null,c*d);
    },0);
}
function pangkat (e,f,hasil2){
    setTimeout (()=>{
        hasil2 (null,e**f);
    },0);
}
function kurang (g,h,hasil3){
    setTimeout (()=>{
        hasil3 (null,g-h);
    },0);
}
function tambah (i,j,hasil4){
    setTimeout (()=>{
        hasil4 (null,i+j);
    },0);
}

function kali2 (k,l,hasil5){
    setTimeout (()=>{
        hasil5 (null,k*l);
    },0);
}
function kali3 (m,n,hasil6){
    setTimeout (()=>{
        hasil6 (null,m*n);
    },0);
}
function bagi2 (o,p,hasil7){
    setTimeout (()=>{
        hasil7 (null,o/p);
    },0);
}
function tambahPromise (a,b){
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

//Nomor a
bagiPromise (375,125)
.then (function(d){
return kaliPromise(d,3)
})
.then (function(d){
    return pangkatPromise(d,2)
})
.then (function (d){
    return kurangPromise(d,750)
})
.then (function(d){
    return tambahPromise (d,96)
})
.then (function(d){
    return kaliPromise (d,10)
})
.then (function(d){
    return kaliPromise (d,84)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor a = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor b
kurangPromise (500,625)
.then (function(d){
return bagiPromise(d,5)
})
.then (function(d){
    return tambahPromise(d,84)
})
.then (function (d){
    return bagiPromise(d,12)
})
.then (function(d){
    return kaliPromise (d,96)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor b = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor c
bagiPromise (750,2)
.then (function(d){
return tambahPromise(d,125)
})
.then (function(d){
    return bagiPromise(d,5)
})
.then (function(d){
    return kaliPromise (d,96)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then (function(d){
    return tambahPromise (d,375)
})
.then (function(d){
    return kaliPromise (d,84)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor c = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor d
kurangPromise (1000,750)
.then (function(d){
return bagiPromise(d,125)
})
.then (function(d){
    return kurangPromise(d,12)
})
.then (function(d){
    return tambahPromise (d,96)
})
.then (function(d){
    return kaliPromise (d,10)
})
.then (function(d){
    return kaliPromise (d,500)
})
.then (function(d){
    return bagiPromise (d,250)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor d = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor e
pangkatPromise (36,2)
.then (function(d){
return bagiPromise(d,72)
})
.then (function(d){
    return tambahPromise(d,125)
})
.then (function (d){
    return kaliPromise(d,10)
})
.then (function(d){
    return kurangPromise (d,24)
})
.then (function(d){
    return kaliPromise (d,3)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor e = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor f
bagiPromise (500,100)
.then (function(d){
return kaliPromise(d,20)
})
.then (function(d){
    return tambahPromise(d,84)
})
.then (function (d){
    return kaliPromise(d,2)
})
.then (function(d){
    return kurangPromise (d,125)
})
.then (function(d){
    return bagiPromise (d,5)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor f = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor g
kaliPromise (375,2)
.then (function(d){
return kurangPromise(d,750)
})
.then (function(d){
    return bagiPromise(d,25)
})
.then (function (d){
    return tambahPromise(d,1000)
})
.then (function(d){
    return bagiPromise (d,500)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor g = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

// nomor h
kaliPromise (12,2)
.then (function(d){
return kaliPromise(d,2)
})
.then (function(d){
    return kurangPromise(d,84)
})
.then (function (d){
    return tambahPromise(d,96)
})
.then (function(d){
    return pangkatPromise (d,2)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor h = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

// nomor i
bagiPromise (750,25)
.then (function(d){
return kaliPromise(d,375)
})
.then (function(d){
    return bagiPromise(d,125)
})
.then (function (d){
    return kaliPromise(d,72)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then (function(d){
    return tambahPromise (d,84)
})
.then (function(d){
    return kaliPromise (d,12)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor i = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor j
bagiPromise (96,12)
.then (function(d){
return pangkatPromise(d,2)
})
.then (function(d){
    return tambahPromise(d,625)
})
.then (function (d){
    return bagiPromise(d,5)
})
.then (function(d){
    return kurangPromise (d,375)
})
.then (function(d){
    return kaliPromise (d,84)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor j = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor k 
bagiPromise (250,25)
.then (function(d){
return kaliPromise(d,10)
})
.then (function(d){
    return tambahPromise(d,36)
})
.then (function (d){
    return pangkatPromise(d,2)
})
.then (function(d){
    return bagiPromise (d,72)
})
.then (function(d){
    return kurangPromise (d,125)
})
.then (function(d){
    return kaliPromise (d,10)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor k = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor L
bagiPromise (375,125)
.then (function(d){
return kaliPromise(d,100)
})
.then (function(d){
    return tambahPromise(d,500)
})
.then (function (d){
    return bagiPromise(d,250)
})
.then (function(d){
    return kaliPromise (d,50)
})
.then (function(d){
    return kurangPromise (d,96)
})
.then (function(d){
    return kaliPromise (d,10)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor L = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor M
bagiPromise (750,25)
.then (function(d){
return kurangPromise(d,375)
})
.then (function(d){
    return bagiPromise(d,125)
})
.then (function (d){
    return tambahPromise(d,96)
})
.then (function(d){
    return pangkatPromise (d,2)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then (function(d){
    return pangkatPromise (d,2)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor m = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor n
bagiPromise (1000,500)
.then (function(d){
return kaliPromise(d,375)
})
.then (function(d){
    return bagiPromise(d,125)
})
.then (function (d){
    return kaliPromise(d,72)
})
.then (function(d){
    return bagiPromise (d,12)
})
.then (function(d){
    return kurangPromise (d,84)
})
.then (function(d){
    return kaliPromise (d,12)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor n = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})

//nomor o
bagiPromise (96,12)
.then (function(d){
return pangkatPromise(d,2)
})
.then (function(d){
    return kurangPromise(d,500)
})
.then (function (d){
    return bagiPromise(d,250)
})
.then (function(d){
    return kaliPromise (d,375)
})
.then (function(d){
    return bagiPromise (d,125)
})
.then (function(d){
    return tambahPromise (d,84)
})
.then (function(d){
    return kaliPromise (d,2)
})
.then(function(d){
    console.log("Hasil Pehitungan nomor o = " + d)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log ("done")
})