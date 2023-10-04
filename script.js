var nameEl = document.getElementById("name");
var phoneEl = document.getElementById("phone");
var passEl = document.getElementById("pass");
var confPassEl = document.getElementById("confPass");
var wrongInputEl = document.getElementById("wrongInput");

function hanldeSubmit(e) {
  e.preventDefault();
  const regPhone = /^[\+][0-9]{1}?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const regName = /^[\a-z || а-я || \A-Z || А-Я]{3,30}$/;
  const regDig = /\d/;
  const regLetter = /[A-Z || А-Я]/;
  if (
    !(
      regName.test(nameEl.value) &&
      regPhone.test(phoneEl.value) &&
      passEl.value === confPassEl.value &&
      regDig.test(passEl.value) &&
      regLetter.test(passEl.value)
    )
  ) {
    wrongInputEl.style.display = "inline";
  }
}
