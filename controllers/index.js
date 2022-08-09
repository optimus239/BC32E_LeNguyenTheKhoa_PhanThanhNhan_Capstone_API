const querySelect = (id) => document.querySelector(id);

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
    <div class="col-sm-12 col-md-6 col-xl-4 itemList">
     <div class="card-item">
      <div class="card-top">
       <img class="img-fluid" src="${product.image}" />
        <span class="name">${product.name}</span>
        <span class="shortDes">${product.shortDescription}</span>
      </div>
      <div class="card-bottom">
        <a href="./detail.html?productid=${product.id}" class="card-btn">
            <button class="card-buy">
              <span class="buynow">Buy now</span>
            </button>
        </a>
        <div class="price-btn">
          <span class="price">${product.price}$</span>
        </div>
      </div>
     </div>
    </div>
       `);
  }, "");
  querySelect("#product").innerHTML = content;
};
