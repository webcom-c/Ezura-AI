// LIST USER
function listUsers() {
  let lsus = localStorage.getItem("username");
  
  logConsole("");
  logConsole("List User :");
  logConsole("• " + lsus);
}
// TAMPILKAN DATA USER
function sdu() {
  let sdu1 = localStorage.getItem("username");
  let sdu2 = localStorage.getItem("emailuser");
  let sdu3 = localStorage.getItem("pwuser");
  
  logConsole("");
  logConsole("Data User :");
  logConsole("");
  logConsole("Email : ...@gmail.com");
  logConsole("Username : " + sdu1);
  logConsole("Password : ter-enkripsi");
}
function sdul() {
  let sdu1 = localStorage.getItem("username");
  let sdu2 = localStorage.getItem("emailuser");
  let sdu3 = localStorage.getItem("pwuser");
  
  logConsole("");
  logConsole("Data User :");
  logConsole("");
  logConsole("Email : " + sdu2);
  logConsole("Username : " + sdu1);
  logConsole("Password : " + sdu3);
}