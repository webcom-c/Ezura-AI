function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
 }
function logConsole(msg) {
  const consoleBox = document.getElementById("console");
  consoleBox.textContent += msg + "\n";
  consoleBox.scrollTop = consoleBox.scrollHeight; // auto scroll ke bawah
 }
function kirim() {
  let chat = document.getElementById("chat").value;
  let datenew = new Date();
  let namaHari = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  let jam = datenew.getHours();
  let hari = namaHari[datenew.getDay()];
  let tanggal = datenew.getDate();
  let bulan = datenew.getMonth();
  let tahun = datenew.getYear();
  let namawaktu = "";
  if(jam >= 4 && jam < 11) {
    namawaktu = "pagi";
 } else
  if(jam >= 11 && jam < 15) {
    namawaktu = "siang";
 } else
  if(jam >= 15 && jam < 18) {
    namawaktu = "sore";
 } else
  if(jam >= 18 && jam < 24) {
    namawaktu = "malam";
 } else;
  if(["P", "p", "halo", "Halo", "Hallo", "HALLO", "hallo", "hi", "HI", "Hi", "Hai", "hai"].includes(chat)) {
        logConsole("");
        logConsole("Hai ada yg bisa saya bantu?");
 }
  if(chat == "") {
    alert("Mohon masukan pesan !!")
 }
  if([".tambahuser",".Adduser",".adduser",". adduser",".au",". au",".login","login","Login"].includes(chat)) {
        addatauser();
 }
  if([".deleteuser2",".du2",". du2"].includes(chat)) {
    deleteuser2();
 }
  if([".listuser",".Listuser",".lsuser",".listuser",".Listuser",".lsuserr",".informasiuser",".Informasiuser",".infouser",".Infouserr",".lu",". lu",".Lu",". Lu"].includes(chat)) {
    listUsers();
 }
  if([".menu",". menu",". Menu"].includes(chat)) {
    menu();
 }
  if([".checkjaringan",".cekjaringan",".cekkoneksi"].includes(chat)) {
        jaringan();
 }
  if([".cekdivice",".cd",".neofetch",".Cd"].includes(chat)) {
        cdl();
 }
  if([".cekbaterai",".cekbattery",".cekbatre",".cekbatrai"].includes(chat)) {
        logConsole("");
        battery();
 }
  if([".clear",". clear"].includes(chat)) {
    booting();
 }
  if([".reboot",".Reboot"].includes(chat)) {
    setup();
 }
  if([".datauser",".datadiri",".mydata",".Mydata",".mydata"].includes(chat)) {
    sdu();
 }
  if([".datauserfull",".datadiri",".myfulldata",".Myfulldata",".myfulldata",".Mydatafull",".mydatafull"].includes(chat)) {
    sdul();
 }
}