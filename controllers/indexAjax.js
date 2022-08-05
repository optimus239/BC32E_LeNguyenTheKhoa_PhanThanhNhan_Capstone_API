const getListProductApi = () => {
  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
    ResponsiveType: "JSON",
  });
  promise.then((result) => {
    // console.log(result.data.content);
    renderProduct(result.data.content);
  });
  promise.catch((err) => {
    console.log(err);
  });
};

window.onload = () => {
  getListProductApi();
};

const renderProduct = (arrProduct) => {
  const content = arrProduct.reduce((value, product) => {
    return (value += `
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
       `);
  }, "");
  document.querySelector("#product").innerHTML = content;
  document.querySelector("span.price").innerHTML = price;
};
