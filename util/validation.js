/**
 * Hàm nhận vào 2 tham số trả về true hoặc false
 * @param {*} value Giá trị đầu vào
 * @param {*} selector Nơi in ra lỗi
 * @param {*} name là text hiển thị ra tên trường lỗi
 * @returns
 */
function ktraRong(value, selector, name) {
  // trim : loại bỏ khoảng trống đầu và cuối của chuỗi (dấu cách cách cách)
  if (value.trim() != "") {
    return true;
  }
  document.querySelector(selector).innerHTML = name + " không được bỏ trống";
  return false;
}
function ktraTatCaKyTu(value, selector, name) {
  var regexLetter = /^[a-z ,.'-]+$/i;

  if (regexLetter.test(value)) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML = name + " tất cả phải là chữ";
  document.querySelector(selector).style.display = "block";
  return false;
}

function ktraTatCaSo(value, selector, name) {
  var numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML = name + " tất cả phải là số";
  document.querySelector(selector).style.display = "block";
  return false;
}
function ktraEmail(value, selector, name) {
  var mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mailformat.test(value)) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML = name + " không đúng định dạng";
  document.querySelector(selector).style.display = "block";
  return false;
}
function ktraPassword(value, selector, name) {
  var passformat =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
  if (passformat.test(value)) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML =
    name + " phải chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt";
  document.querySelector(selector).style.display = "block";
  return false;
}
function ktraDodai(value, selector, name, minLength, maxLength) {
  var length = value.length;
  if (length > maxLength || length < minLength) {
    document.querySelector(selector).innerHTML =
      name + " từ " + minLength + " đến " + maxLength + " ký tự";
    document.querySelector(selector).style.display = "block";
    return false;
  }
  document.querySelector(selector).innerHTML = "";
  return true;
}
function ktraConfirmPass(passWord, pwConfirm, selector) {
  if (passWord === pwConfirm) {
    document.querySelector(selector).innerHTML = "";
    return true;
  }
  document.querySelector(selector).innerHTML = "Không trùng mật khẩu";
  document.querySelector(selector).style.display = "block";
  return false;
}
