const products = [
    {id: 1,name: "P1",price: 34},
    {id: 2,name: "P2",price: 50},
    {id: 3,name: "P3",price: 40}
];
const cart = {};
const addToCart = (id) => {

    if(cart[id]){
        cart[id] += 1;
    }
    else
    {
        cart[id] = 1;
    }
    items.innerHTML=0;
    showCart();
// divCart.innerHTML = obj["apple"];
};

const increment = (id) => {
    if(cart[id]){
        cart[id] += 1;
    }
    else{
        cart[id]=1;
    }
    items.innerHTML=100;
    showCart();
}

const decrement = (id) => {
    if(cart[id] > 1){
        cart[id] -= 1  ;
    }
    else{
        delete cart[id];
    }
    items.innerHTML=50;
    showCart();
}

const displayCart = () => {
    cartBox.style.display = "block"
    //hide productBox
    productBox.style.display = "none"
}

const hideCart = () => {
    cartBox.style.display = "none"
    //display productBox
    productBox.style.display = "block"
}

const deleteFun = (id) => {
    delete cart[id];
    showCart();
}

const showTotal = () => {
     total = products.reduce((sum, value) => {
        return sum + value.price * (cart[value.id] ?? 0);
    }, 0)
    order.innerHTML= total;
}

const showCart = () => {
    let count = Object.keys(cart).length;
    items.innerHTML = count;
    showTotal();
    let str = ""
    products.map((value)=>{
        if(cart[value.id]){
        str += `<div id="cartProduct">${value.id} - ${value.name} - ${value.price} - <button onclick='decrement(${value.id})'>-</button>${cart[value.id]}<button onclick='increment(${value.id})'>+</button> - ${value.price*cart[value.id]}<button onclick='deleteFun(${value.id})'>delete</button></div>`;
        }
    })
    divCart.innerHTML = str;
};

const showProducts = () => {
    let str = "";
    products.map((value) => {
    str += `<div id="product">  ${value.id} - ${value.name} - ${value.price}-<button onclick='addToCart(${value.id})'>Add</button></div>`
});
   divProducts.innerHTML = str; 
};



