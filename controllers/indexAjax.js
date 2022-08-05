function getListProductApi() {
  var promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponsiveType: "JSON",
  });
  promise.then(function (result) {
    // console.log(result.data.content);
    renderProduct(result.data.content);
  });
  promise.catch(function (err) {
    console.log(err);
  });
}

window.onload = () => {
  getListProductApi();
};

function renderProduct(arrProduct) {
  var html = "";
  for (var i = 0; i < arrProduct.length; i++) {
    var product = arrProduct[i];
    console.log(product.price);
    html += `
    <div class="col-4">
     <div class="card-item">
      <div class="card-top">
       <img class="img-fluid" src="${product.image}" />
        <span class="name">${product.name}</span>
        <span class="shortDes">${product.shortDescription}</span>
      </div>
      <div class="card-bottom">
        <div class="card-btn">
            <button class="card-buy"></button>
            <span class="buynow">Buy now</span>
        </div>
        <div class="price-btn"></div>
        <span class="price">${product.price}$</span>
      </div>
     </div>
    </div>
       `;
    var date = product.price;

    console.log("span", date);
  }
  document.querySelector("#product").innerHTML = html;
  document.querySelector("span.price").innerHTML = price;
}
