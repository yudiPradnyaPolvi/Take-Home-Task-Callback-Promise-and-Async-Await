console.log("Callback pada nomor 1");

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

// nomor a

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

//callback hell
bagi(375,125,function(err,result){
    kali1 (result,3,function (err,result1){
        pangkat (result1,2,function (err,result2){
            kurang (result2,750,function (err,result3){
                tambah (result3,96,function (err,result4){
                    kali2 (result4,10,function (err,result5){
                        kali3 (result5,84,function (err,result6){
                            bagi2 (result6,12,function (err,result7){
                                console.log ("Hasil Pehitungan nomor a = " + result7)
                            })
                        })
                    })
                })
            })
        })
    })
})

//nomor b

//callback hell
kurang(500,625,function(err,result){
    bagi (result,5,function (err,result1){
        tambah (result1,84,function (err,result2){
            bagi2 (result2,12,function (err,result3){
                kali1(result3,96,function (err,result4){
                    bagi2 (result4,12,function (err,result5){
                        
                        console.log ("Hasil Pehitungan nomor b = " + result5)
                            
                        
                    })
                })
            })
        })
    })
})

//nomor c
bagi(750,2,function(err,result){
    tambah (result,125,function (err,result1){
        bagi (result1,5,function (err,result2){
            kali1 (result2,96,function (err,result3){
                bagi (result3,12,function (err,result4){
                    tambah (result4,375,function (err,result5){
                        kali2 (result5,84,function (err,result6){
                            
                            console.log ("Hasil Pehitungan nomor c = " + result6)
                            
                        })
                    })
                })
            })
        })
    })
})

//nomor d
kurang(1000,750,function(err,result){
    bagi (result,125,function (err,result1){
        kurang (result1,12,function (err,result2){
            tambah (result2,96,function (err,result3){
                kali1 (result3,10,function (err,result4){
                    kali2 (result4,500,function (err,result5){
                        bagi (result5,250,function (err,result6){
                            
                            console.log ("Hasil Pehitungan nomor d = " + result6)
                            
                        })
                    })
                })
            })
        })
    })
})



//nomor e
pangkat (36,2,function(err,result){
    bagi (result,72,function (err,result1){
        tambah (result1,125,function (err,result2){
            kali1 (result2,10,function (err,result3){
                kurang(result3,24,function (err,result4){
                    kali2 (result4,3,function (err,result5){
                        console.log ("Hasil Pehitungan nomor e = " + result5)
                    })
                })
            })
        })
    })
})

//nomor f
bagi (500,100,function(err,result){
    kali1 (result,20,function (err,result1){
        tambah (result1,84,function (err,result2){
            kali2 (result2,2,function (err,result3){
                kurang(result3,125,function (err,result4){
                    bagi (result4,5,function (err,result5){
                        console.log ("Hasil Pehitungan nomor f = " + result5)
                    })
                })
            })
        })
    })
})

//nomor g
kali1 (375,2,function(err,result){
    kurang (result,750,function (err,result1){
        bagi (result1,25,function (err,result2){
            tambah (result2,1000,function (err,result3){
                bagi (result3,500,function (err,result4){
                        console.log ("Hasil Pehitungan nomor g = " + result4)
                })
            })
        })
    })
})

//nomor h
kali1 (12,12,function(err,result){
    kali2 (result,2,function (err,result1){
        kurang (result1,84,function (err,result2){
            tambah (result2,96,function (err,result3){
                pangkat (result3,2,function (err,result4){
                        console.log ("Hasil Pehitungan nomor h = " + result4)
                })
            })
        })
    })
})

//nomor i
bagi(750,25,function(err,result){
    kali1 (result,375,function (err,result1){
        bagi (result1,125,function (err,result2){
            kali2(result2,72,function (err,result3){
                bagi (result3,12,function (err,result4){
                    tambah (result4,84,function (err,result5){
                        kali3 (result5,12,function (err,result6){
                                console.log ("Hasil Pehitungan nomor i = " + result6)
                        })
                    })
                })
            })
        })
    })
})

//nomor j
bagi(96,12,function(err,result){
    pangkat (result,2,function (err,result1){
        tambah (result1,625,function (err,result2){
            bagi (result2,5,function (err,result3){
                kurang (result3,375,function (err,result4){
                    kali2 (result4,84,function (err,result5){
                                console.log ("Hasil Pehitungan nomor j = " + result5)
                    })
                })
            })
        })
    })
})

//nomor k
bagi(250,25,function(err,result){
    kali1 (result,10,function (err,result1){
        tambah (result1,36,function (err,result2){
            pangkat (result2,2,function (err,result3){
                bagi2 (result3,72,function (err,result4){
                    kurang (result4,125,function (err,result5){
                        kali2 (result5,10,function (err,result6){
                                console.log ("Hasil Pehitungan nomor k = " + result6)
                        })
                    })
                })
            })
        })
    })
})

//nomor L
bagi(375,125,function(err,result){
    kali1 (result,100,function (err,result1){
        tambah (result1,500,function (err,result2){
            bagi2 (result2,250,function (err,result3){
                kali2 (result3,50,function (err,result4){
                    kurang (result4,96,function (err,result5){
                        kali3 (result5,10,function (err,result6){
                            
                                console.log ("Hasil Pehitungan nomor L = " + result6)
                        })
                    })
                })
            })
        })
    })
})

//nomor M
bagi(750,25,function(err,result){
    kurang (result,375,function (err,result1){
        bagi (result1,125,function (err,result2){
            tambah (result2,96,function (err,result3){
                pangkat (result3,2,function (err,result4){
                    bagi (result4,12,function (err,result5){
                        pangkat (result5,2,function (err,result6){
                                console.log ("Hasil Pehitungan nomor m = " + result6)
                        })
                    })
                })
            })
        })
    })
})

//nomor n
bagi(1000,500,function(err,result){
    kali1 (result,375,function (err,result1){
        bagi (result1,125,function (err,result2){
            kali2 (result2,72,function (err,result3){
                bagi2 (result3,12,function (err,result4){
                    kurang (result4,84,function (err,result5){
                        kali3 (result5,12,function (err,result6){
                                console.log ("Hasil Pehitungan nomor n = " + result6)
                        })
                    })
                })
            })
        })
    })
})

//nomor o
bagi(96,12,function(err,result){
    pangkat (result,2,function (err,result1){
        kurang (result1,500,function (err,result2){
            bagi (result2,250,function (err,result3){
                kali1 (result3,375,function (err,result4){
                    bagi2(result4,125,function (err,result5){
                        tambah (result5,84,function (err,result6){
                            kali2 (result6,2,function (err,result7){
                                console.log ("Hasil Pehitungan nomor o = " + result7)
                            })
                        })
                    })
                })
            })
        })
    })
})




