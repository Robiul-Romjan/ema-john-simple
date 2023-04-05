import { getShoppingCart } from "../utilities/fakedb";

const cartLoaderProducts = async () => {
    const res = await fetch("products.json");
    const data = await res.json();

    const storedCart = getShoppingCart();

    const savedCart = [];

    for (let id in storedCart) {
        const addedProducts = data.find(pd => pd.id === id);
        if (addedProducts) {
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
        };
    };

    return savedCart;
};

export default cartLoaderProducts;