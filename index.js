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
    showCart();
}

const decrement = (id) => {
    if(cart[id] > 1){
        cart[id] -= 1  ;
    }
    else{
        delete cart[id];
    }
    showCart();
}

const deleteFun = (id) => {
    delete cart[id];
    showCart();
}

const showCart = () => {
    let str = ""
    products.map((value)=>{
        if(cart[value.id]){
        str += `<div>${value.id}-${value.name}-${value.price}-<button onclick='decrement(${value.id})'>-</button>${cart[value.id]}<button onclick='increment(${value.id})'>+</button>-${value.price*cart[value.id]}<button onclick='deleteFun(${value.id})'>delete</button></div>`;
        }
    })
    divCart.innerHTML = str;
};

const showProducts = () => {
    let str = "";
    products.map((value) => {
    str += `<div><li>  ${value.id} - ${value.name} - ${value.price}-<button onclick='addToCart(${value.id})'>Add to Cart</button></li></div>`
});
   divProducts.innerHTML = str; 
};

