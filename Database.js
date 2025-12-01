// SIMPAN DATA USER
function save() {
  let emailuser = document.getElementById("username1").value;
  let datauser = document.getElementById("username2").value;
  let pwuser = document.getElementById("username3").value;
  
  if(emailuser.endsWith("@gmail.com")) {
  localStorage.setItem("emailuser", emailuser);
  localStorage.setItem("username", datauser);
  localStorage.setItem("pwuser", pwuser);
  logConsole("• Berhasil menyimpan data user");
  setup();
 } else { 
  logConsole("• Gagal menyimpan data user, pastikan semua data terisi dan gmail wajib berakhiran '@gmail.com'");
 }
 }