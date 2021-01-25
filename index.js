//NO4 
let nilaiAwal;
for (nilaiAwal=0; nilaiAwal <=100; nilaiAwal++){
    document.write("Nilai ke: " + nilaiAwal);
    document.write("<br>");
}

//NO5
let nilaiAwal;
for(nilaiAwal=1; nilaiAwal <=100; nilaiAwal++) {

    if((nilaiAwal % 3) == 0){
        document.write("Fizz: " + nilaiAwal);
    } else if ((nilaiAwal % 5) == 0) {
        document.write("Buzz: " + nilaiAwal);
    } else {
        document.write("Print Nilai: " + nilaiAwal);
    }
}




