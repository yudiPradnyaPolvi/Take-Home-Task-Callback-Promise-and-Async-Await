console.log("Async await menggunakan promise pada nomor 2");
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
        if(typeof a=="string"||typeof b=="string"){
            hasil ("ada angka tapi string")
        }
        else{
            hasil(null,a/b);
        }
    },0);
}

function kali (a,b,hasil){
    setTimeout (()=>{
        if(typeof a=="string"||typeof b=="string"){
            hasil ("ada angka tapi string")
        }
        else{
            hasil(null,a*b);
        }
    },0);
}
function pangkat (a,b,hasil2){
    setTimeout (()=>{
        if(typeof a=="string"||typeof b=="string"){
            hasil2 ("ada angka tapi string")
        }
        else{
            hasil2(null,a**b);
        }
    },0);
}
function kurang (a,b,hasil3){
    setTimeout (()=>{
        if(typeof a=="string"||typeof b=="string"){
            hasil3 ("ada angka tapi string")
        }
        else{
            hasil3(null,a-b);
        }
        
    },0);
}
function tambah (a,b,hasil4){
    setTimeout (()=>{
        if(typeof a=="string"||typeof b=="string"){
            hasil4("ada angka tapi string")
        }
        else{
            hasil4(null,a+b);
        }
    },0);
}

function kali2 (c,d,hasil5){
    setTimeout (()=>{
        if(typeof c=="string"||typeof d=="string"){
            hasil5 ("ada angka tapi string")
        }
        else{
            hasil5(null,c*d);
        }
    },0);
}
function kali3 (m,n,hasil6){
    setTimeout (()=>{
        if(typeof m=="string"||typeof n=="string"){
            hasil6 ("ada angka tapi string")
        }
        else{
            hasil6(null,m*n);
        };
    },0);
}
function bagi2 (o,p,hasil7){
    setTimeout (()=>{
        if(typeof o=="string"||typeof p=="string"){
            hasil7 ("ada angka tapi string")
        }
        else{
            hasil7(null,o/p);
        };
    },0);
}


function tambahPromise (a,b){
    const penjumalahan= new Promise ((resolve,reject)=>{
        tambah(a,b,function(err,hasil){
            if (err){
                reject (err)
            }
            else {
                resolve(hasil)
            }
        })
    })
    return penjumalahan;
}
function kurangPromise (a,b){
    const pengurangan= new Promise ((resolve,reject)=>{
        kurang(a,b,function(err,hasil){
            if (err){
                reject (err)
            }
            else {
                resolve(hasil)
            }
        })
    })
    return pengurangan;
}
function kaliPromise (a,b){
    const perkalian= new Promise ((resolve,reject)=>{
        kali(a,b,function(err,hasil){
            if (err){
                reject (err)
            }
            else {
                resolve(hasil)
            }
        })
    })
    return perkalian;
}
function bagiPromise (a,b){
    const pembagian= new Promise ((resolve,reject)=>{
        bagi(a,b,function(err,hasil){
            if (err){
                reject (err)
            }
            else {
                resolve(hasil)
            }
        })
    })
    return pembagian;
}
function pangkatPromise (a,b){
    const perpangkatan= new Promise ((resolve,reject)=>{
        pangkat(a,b,function(err,hasil){
            if (err){
                reject (err)
            }
            else {
                resolve(hasil)
            }
        })
    })
    return perpangkatan;
}

//nomor a
async function execAsyncAwaita(){
    try {
        let hasil =await bagiPromise (375,125);
            hasil =await kaliPromise (hasil,3);
            hasil =await pangkatPromise (hasil,2);
            hasil =await kurangPromise (hasil,750);
            hasil =await tambahPromise (hasil,96);
            hasil =await kaliPromise (hasil,10);
            hasil =await kaliPromise (hasil,84);
            hasil =await bagiPromise (hasil,12);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maina (){
    const hasil = await execAsyncAwaita();
    console.log("Hasil Pehitungan nomor a = " + hasil);
}
maina()

// nomor b
async function execAsyncAwaitb(){
    try {
        let hasil =await kurangPromise (500,625);
            hasil =await bagiPromise (hasil,5);
            hasil =await tambahPromise (hasil,84);
            hasil =await bagiPromise (hasil,12);
            hasil =await kaliPromise (hasil,96);
            hasil =await bagiPromise (hasil,12);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainb (){
    const hasil = await execAsyncAwaitb();
    console.log("Hasil Pehitungan nomor b = " + hasil);
}

mainb()

// nomor c
async function execAsyncAwaitc(){
    try {
        let hasil =await bagiPromise (750,2);
            hasil =await tambahPromise (hasil,125);
            hasil =await bagiPromise (hasil,5);
            hasil =await kaliPromise (hasil,96);
            hasil =await bagiPromise (hasil,12);
            hasil =await tambahPromise (hasil,375);
            hasil =await kaliPromise (hasil,84);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainc (){
    const hasil = await execAsyncAwaitc();
    console.log("Hasil Pehitungan nomor c = " + hasil);
}

mainc()

// nomor d
async function execAsyncAwaitd(){
    try {
        let hasil =await kurangPromise (1000,750);
            hasil =await bagiPromise (hasil,125);
            hasil =await kurangPromise (hasil,12);
            hasil =await tambahPromise (hasil,96);
            hasil =await kaliPromise (hasil,10);
            hasil =await kaliPromise (hasil,500);
            hasil =await bagiPromise (hasil,250);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maind (){
    const hasil = await execAsyncAwaitd();
    console.log("Hasil Pehitungan nomor d = " + hasil);
}

maind()

// nomor e
async function execAsyncAwaite(){
    try {
        let hasil =await pangkatPromise (36,2);
            hasil =await bagiPromise (hasil,72);
            hasil =await tambahPromise (hasil,125);
            hasil =await kaliPromise (hasil,10);
            hasil =await kurangPromise (hasil,24);
            hasil =await kaliPromise (hasil,3);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maine (){
    const hasil = await execAsyncAwaite();
    console.log("Hasil Pehitungan nomor e = " + hasil);
}

maine()

// nomor f
async function execAsyncAwaitf(){
    try {
        let hasil =await bagiPromise (500,100);
            hasil =await kaliPromise (hasil,20);
            hasil =await tambahPromise (hasil,84);
            hasil =await kaliPromise (hasil,2);
            hasil =await kurangPromise (hasil,125);
            hasil =await bagiPromise (hasil,5);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainf (){
    const hasil = await execAsyncAwaitf();
    console.log("Hasil Pehitungan nomor f = " + hasil);
}

mainf()

// nomor g
async function execAsyncAwaitg(){
    try {
        let hasil =await kaliPromise (375,2);
            hasil =await kurangPromise (hasil,750);
            hasil =await bagiPromise (hasil,25);
            hasil =await tambahPromise (hasil,1000);
            hasil =await bagiPromise (hasil,500);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maing (){
    const hasil = await execAsyncAwaitg();
    console.log("Hasil Pehitungan nomor g = " + hasil);
}

maing()

// nomor h
async function execAsyncAwaith(){
    try {
        let hasil =await kaliPromise (12,12);
            hasil =await kaliPromise (hasil,2);
            hasil =await kurangPromise (hasil,84);
            hasil =await tambahPromise (hasil,96);
            hasil =await pangkatPromise (hasil,2);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainh (){
    const hasil = await execAsyncAwaith();
    console.log("Hasil Pehitungan nomor h = " + hasil);
}

mainh()


// nomor i
async function execAsyncAwaiti(){
    try {
        let hasil =await bagiPromise (750,25);
            hasil =await kaliPromise (hasil,375);
            hasil =await bagiPromise (hasil,125);
            hasil =await kaliPromise (hasil,72);
            hasil =await bagiPromise (hasil,12);
            hasil =await tambahPromise (hasil,84);
            hasil =await kaliPromise (hasil,12);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maini (){
    const hasil = await execAsyncAwaiti();
    console.log("Hasil Pehitungan nomor i = " + hasil);
}

maini()

// nomor j
async function execAsyncAwaitj(){
    try {
        let hasil =await bagiPromise (96,12);
            hasil =await pangkatPromise (hasil,2);
            hasil =await tambahPromise (hasil,625);
            hasil =await bagiPromise (hasil,5);
            hasil =await kurangPromise (hasil,375);
            hasil =await kaliPromise (hasil,84);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainj (){
    const hasil = await execAsyncAwaitj();
    console.log("Hasil Pehitungan nomor j = " + hasil);
}

mainj()

// nomor k
async function execAsyncAwaitk(){
    try {
        let hasil =await bagiPromise (250,25);
            hasil =await kaliPromise (hasil,10);
            hasil =await tambahPromise (hasil,36);
            hasil =await pangkatPromise (hasil,2);
            hasil =await bagiPromise (hasil,72);
            hasil =await kurangPromise (hasil,125);
            hasil =await kaliPromise (hasil,10);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maink (){
    const hasil = await execAsyncAwaitk();
    console.log("Hasil Pehitungan nomor k = " + hasil);
}

maink()

// nomor L
async function execAsyncAwaitl(){
    try {
        let hasil =await bagiPromise (375,125);
            hasil =await kaliPromise (hasil,100);
            hasil =await tambahPromise (hasil,500);
            hasil =await bagiPromise (hasil,250);
            hasil =await kaliPromise (hasil,50);
            hasil =await kurangPromise (hasil,96);
            hasil =await kaliPromise (hasil,10);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainl (){
    const hasil = await execAsyncAwaitl();
    console.log("Hasil Pehitungan nomor L = " + hasil);
}

mainl()


// nomor m
async function execAsyncAwaitm(){
    try {
        let hasil =await bagiPromise (750,25);
            hasil =await kurangPromise (hasil,375);
            hasil =await bagiPromise (hasil,125);
            hasil =await tambahPromise (hasil,96);
            hasil =await pangkatPromise (hasil,2);
            hasil =await bagiPromise (hasil,12);
            hasil =await pangkatPromise (hasil,2);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainm (){
    const hasil = await execAsyncAwaitm();
    console.log("Hasil Pehitungan nomor m = " + hasil);
}

mainm()

// nomor n
async function execAsyncAwaitn(){
    try {
        let hasil =await bagiPromise (1000,500);
            hasil =await kaliPromise (hasil,375);
            hasil =await bagiPromise (hasil,125);
            hasil =await kaliPromise (hasil,72);
            hasil =await bagiPromise (hasil,12);
            hasil =await kurangPromise (hasil,84);
            hasil =await kaliPromise (hasil,12);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function mainn (){
    const hasil = await execAsyncAwaitn();
    console.log("Hasil Pehitungan nomor n = " + hasil);
}

mainn()

// nomor o
async function execAsyncAwaito(){
    try {
        let hasil =await bagiPromise (96,12);
            hasil =await pangkatPromise (hasil,2);
            hasil =await kurangPromise (hasil,500);
            hasil =await bagiPromise (hasil,250);
            hasil =await kaliPromise (hasil,375);
            hasil =await bagiPromise (hasil,125);
            hasil =await tambahPromise (hasil,84);
            hasil =await kaliPromise (hasil,2);
            return hasil
    } catch (error) {
        console.log (error)   
    }
    finally {
        console.log("done")
    }
} 
async function maino (){
    const hasil = await execAsyncAwaito();
    console.log("Hasil Pehitungan nomor o = " + hasil);
}

maino()



