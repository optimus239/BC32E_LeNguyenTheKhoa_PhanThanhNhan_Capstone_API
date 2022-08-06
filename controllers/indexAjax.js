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

const getbyID = (idProductClick) => {
  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + idProductClick,
    method: "GET",
    ResponsiveType: "JSON",
  });
  promise.then((result) => {
    const product = result.data.content;
    const html = `<img src="${product.image}">`;
    const arrSize = product.size;
    querySelect(".detail-right").innerHTML = html;
    querySelect(".detail-name").innerHTML = product.name;
    querySelect(".detail-content").innerHTML = product.description;
    const sContent = arrSize.reduce((value, val, id) => {
      return (value += `   
        <div class="bg-size bg-item-${id}">
          <span class="item-size">${val}</span>    
        </div>
      `);
    }, "");
    querySelect(".detail-size").innerHTML = sContent;
    querySelect(".detail-price").innerHTML = `${product.price}$`;
  });
  promise.then((err) => {
    console.log(err);
  });
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
        <div class="card-btn" onclick="getbyID('${product.id}')">
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
  querySelect("#product").innerHTML = content;
};
