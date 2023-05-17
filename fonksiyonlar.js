function form_kontrol() {
  var form1 = document.forms["form"]["Ad"].value;
  var form2 = document.forms["form"]["Soyad"].value;
  var form3 = "";
  form3 = document.forms["form"]["Mail"].value;
  var form4 = document.forms["form"]["Şifre"].value;
  var form5 = document.forms["form"]["Mesaj"].value;

  var cevap = true;

  if (form1 == "") {
    alert("Lütfen Adınızı Girin.");
    cevap = false;
  } else if (form2 == "") {
    alert("Lütfen Soyadınızı Girin.");
    cevap = false;
  } else if (form3.indexOf("@") == -1) {
    alert("Lütfen Doğru Söz Diziminde E-Mail Girin");
    cevap = false;
  } else if (form4 == "") {
    alert("Lütfen Şifrenizi Girin");
    cevap = false;
  } else if (form5 == "") {
    alert("Lütfen Mesajınızı Girin");
    cevap = false;
  }

  return cevap;
}

function login_kontrol() {
  var form1 = "";
  form1 = document.forms["login_kontrol"]["Mail"].value;
  var form2 = document.forms["login_kontrol"]["Şifre"].value;

  var cevap = true;

  if (form1.indexOf("@") == -1) {
    alert("Lütfen Doğru Kullanıcı Adını Girin");
    cevap = false;
  } else if (form2 == "") {
    alert("Lütfen Şifrenizi Girin");
    cevap = false;
  }

  return cevap;
}
