var btnMore = document.querySelector("#btnMore");

const querySelector = (id) => document.querySelector(id);

btnMore.onclick = function () {
  var spanMore = document.querySelector("#more");

  if (spanMore.style.display == "block") {
    spanMore.style.display = "none";
    btnMore.innerHTML = "Learn more";
  } else {
    spanMore.style.display = "block";
    btnMore.innerHTML = "Learn less";
  }
};

querySelector("#btnSubmit").onclick = function () {
  //   alert("abc");
  var res = new Register();

  res.email = querySelector("#email").value;
  res.password = querySelector("#passWord").value;
  var confirmPwd = querySelector("#pwConfirm").value;
  res.name = querySelector("#name").value;
  res.phone = querySelector("#phone").value;
  var checkBox = document.querySelectorAll(".radioGender");
  //   console.log(checkBox);
  for (var i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      res.gender = checkBox[i].value;
    }
    // console.log("checkbox", checkBox[i].checked);
  }

  //   Validation
  var valid = true;

  // Validation Họ tên
  valid &=
    ktraTatCaKyTu(res.name, "#errName", "Họ tên") &
    ktraRong(res.name, "#errName", "Họ tên");

  //  Validation Email
  valid &=
    ktraEmail(res.email, "#errEmail", "Email") &
    ktraRong(res.email, "#errEmail", "Email");

  // Validation Mật khẩu
  valid &=
    ktraPassword(res.password, "#errPassword", "Mật khẩu") &
    ktraRong(res.password, "#errPassword", "Mật Khẩu");

  // Validation Diện thoại
  valid &=
    ktraTatCaSo(res.phone, "#errPhone", "Số điện thoại") &
    ktraRong(res.phone, "#errPhone", "Số điện thoại");

  // Validation confirm password
  valid &= ktraConfirmPass(res.password, confirmPwd, "#errPwConfirm");

  if (!valid) {
    return;
  }

  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: res,
  });

  //   Xử lý thành công
  promise.then(function (result) {
    querySelector("#alert").style.display = "block";
    querySelector("#notification").innerHTML = result.data.message;
  });

  // Xử lý thất bại
  promise.catch(function (err) {
    console.log(err);
  });
};
