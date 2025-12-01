function menu() {
  logConsole("");
  logConsole("List Fitur :");
  logConsole("• .login ( Jika belum )");
  logConsole("• .mydata = Menampilkan data anda ( Sebagian tersembunyi )");
  logConsole("• .mydatafull = Menampilkan data anda ( Semua data akan ditampilkan )");
  logConsole("• .cekkoneksi = Cek informasi kecepatan jaringan kamu");
  logConsole("• .cekbattery = Cek informasi batterai kamu");
  logConsole("• .cd = Cek informasi divice kamu");
  logConsole("• .clear = Kosongkan console");
  logConsole("• .reboot = Muat ulang AI ( Tidak akan menghilangkan datamu )");
 }
function waktu() {
  return new Date().toLocaleTimeString();
 }
function tanggalhari() {
  return new Date().toLocaleDateString();
 }
function booting() {
  let user = localStorage.getItem("username");
  let datenew = new Date();
  let jam = datenew.getHours();
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
  document.getElementById("console").innerText = ``;
  logConsole("DEVELOPER : @HAD.01K" + "              " + "EZURA-AI v1")
  logConsole("Date : " + tanggalhari());
  logConsole("Engine : " + navigator.platform + "        " + "Selamat " + namawaktu + " " + user);
  logConsole("------------------------------------------------------------");
  logConsole("");
 }
function storage() {
  let st = navigator.storage;
      
  navigator.storage.estimate().then(st => {
    logConsole("Storage: " + (st.usage / (1024 * 1024)).toFixed(2) + " MB dari " + (st.quota / (1024 * 1024)).toFixed(2) + " MB");
 });
 }
function infohp2() {
  logConsole("Date : " + tanggalhari());
  logConsole("User Agent : " + navigator.userAgent);
  logConsole("Platform : " + navigator.platform);
  logConsole("Screen : " + screen.width + " " + "x" + " " + screen.height);
  logConsole("Bahasa : " + navigator.language);
  logConsole("Online : " + navigator.onLine);
  logConsole("Ram : " + navigator.diviceMemory + " GB");
  logConsole("Core : " + navigator.hardwareConcurrency);
 }
function jaringan() {
  let koneksi = navigator.connection;
  
  logConsole("Information Connection :");
  logConsole("Online : " + navigator.onLine);
  logConsole("Connection Type : " + koneksi.effectiveType);
  logConsole("Speed (Mb) : " + koneksi.downink);
  logConsole("Speed (Ms) : " + koneksi.rtt);
  logConsole("Hemat data : " + koneksi.saveData);
 }
function battery() {
  navigator.getBattery().then(battery => {
    logConsole("Level Baterai : " + (battery.level * 100) + "%");
    logConsole("Sedang di-charge: " + (battery.charging ? "Ya" : "Tidak"));
 });
 }
function battery2() {
  navigator.getBattery().then(battery => {
    document.getElementById("bt").innerText = `Baterai: ${battery.level * 100}%`;
 });
 }
  setInterval(() => {
    document.getElementById("waktu").innerText = `Time : ` + waktu();
 }, 0);
  setInterval(() => {
    document.getElementById("tanggal").innerText = `Date : ` + tanggalhari();
 }, 0);
  setInterval(() => {
      document.getElementById("bt").innerText = battery2();
 }, 1);
async function cdl() {
  let st = navigator.storage;
       
  document.getElementById("console").innerText = ``;
  logConsole("Menganalisis...");
  await delay(3000);
  document.getElementById("console").innerText = ``;
  logConsole("");
  logConsole("Informasi Divice :");
  infohp2();
  logConsole("-------------------------------------------------------");
  jaringan();
  logConsole("-------------------------------------------------------");
  logConsole("Informasi Battery :");
  battery();
 }
      
function clear() {
  document.getElementById("console").innerText = ``;
  infohp();
 }
 
  document.getElementById("clear").innerText = setup();

async function setup() {
  logConsole("Sedang setup...");
  await delay(2500);
  document.getElementById("console").innerText = ``;
  booting();
 }
function back() {
  document.getElementById("login").style.display = "none";
  document.getElementById("kolom").style.display = "flex";
 }
function addatauser() {
  document.getElementById("kolom").style.display = "none";
  document.getElementById("login").style.display = "grid";
 }
 async function nsend() {
  const input = document.getElementById("chat").value;
  const output = document.getElementById("console");
  const response = await fetch("index.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await response.json();
  output.textContent = data.choices[0].message.content;
}