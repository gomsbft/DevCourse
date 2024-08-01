const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const pwch = document.querySelector("#pwCh");

id.onchange = checkId;
pw.onchange = checkPw;
pwch.onchange = comPw;

function checkId() {
  let ids = document.querySelector("#id").value
  let pws = document.querySelector("#pw").value
  if(ids.length < 4 || ids.length > 15) {
    document.getElementById("textCh").innerHTML = "4~15자리의 영문과 숫자를 사용하세요"
  }
  if(pw.value.length < 8) {
    document.getElementById("textCh").innerHTML = "비밀번호는 8자리 이상이여야 합니다."
    pw.value = "";
    pw.focus();
  }
}

function checkPw() {
  if(pw.value.length < 8) {
    alert("비밀번호는 8자리 이상이여야 합니다.");
    pw.value = "";
    pw.focus();
  }
}

function comPw() {
  if(pw.value != pwch.value) {
    alert("암호가 다릅니다, 다시 입력해주세요");
    pw.focus();
    comPw.value = "";
  }
}