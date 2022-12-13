const productManager = require("./productManager");


const product = {
    id: 1,
    title: "Televisor Samsung OLED",
    description: "4K, Oled, 65 pulgadas",
    price: "1200",
    thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/cl/qn65s95bagxzs/gallery/cl-oled-s95b-qn65s95bagxzs-533476969?$1300_1038_PNG$",
    code: "794159",
    stock: 15
};

const product2 = {
    id: 2,
    title: "Televisor Samsung Neo QLED",
    description: "4K, QLED, 55 pulgadas",
    price: "1000",
    thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/ar/qn55qn85bagczb/gallery/ar-qled-qn85b-qn55qn85bagczb-532916516?$1300_1038_PNG$",
    code: "823958",
    stock: 10
};

const productManager = new productManager([], "products.json");

const runAwait = async () => {
    await productManager.addProduct(product);
    await productManager.addProduct(product2);

    const products = await productManager.getProducts();
    console.log("getProducts", products);
    const useFilter = await productManager.getProductById(1);
    console.log("filterProduct", useFilter);

    await productManager.updateProductById(1, {
        id: 1,
        title: "Televisor Samsung OLED",
        description: "4K, Oled, 65 pulgadas",
        price: "1200",
        thumbnail: "https://images.samsung.com/is/image/samsung/p6pim/cl/qn65s95bagxzs/gallery/cl-oled-s95b-qn65s95bagxzs-533476969?$1300_1038_PNG$",
        code: "794159",
        stock: 15
    });
    productManager.getProducts().then((products)=>{
        console.log(products);
    });
};

runAwait();