const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const pwch = document.querySelector("#pwCh");

function idch() {
  let id = document.getElementById('id').value;
  let pw = document.getElementById('pw').value;

  if(pw.length < 1) {
    document.getElementsByClassName('textCh').innerHTML = '비밀번호를 입력해 주세요';
  }else if(pw.length < 8) {
    document.getElementsByClassName('textCh').innerHTML = '비밀번호는 8자 이상 입력해주세요';
  }

}