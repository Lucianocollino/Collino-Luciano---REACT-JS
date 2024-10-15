const products = [
    { "id": 1, "nombre": "Bullpadel Vertex 04", "precio": 600000, "imagenUrl": "img/vertex04.jpg", "categoryId": "paddle" },
    { "id": 2, "nombre": "Siux Electra st3 pro", "precio": 550000, "imagenUrl": "img/siux-electra-pro-st3 (1).png", "categoryId": "paddle" },
    { "id": 3, "nombre": "Adidas Metalbone 3.3", "precio": 700000, "imagenUrl": "img/Metalbone_3.3_ADRK1AA0U0016F_FRONT.jpg", "categoryId": "paddle" },
    { "id": 4, "nombre": "Wilson Bela v2", "precio": 650000, "imagenUrl": "img/wbela.jpg", "categoryId": "paddle" },
    { "id": 5, "nombre": "Siux Diablo Revolution 3", "precio": 500000, "imagenUrl": "img/siux-diablo.png", "categoryId": "paddle" },
    { "id": 6, "nombre": "Bullpadel hack 03 2024", "precio": 550000, "imagenUrl": "img/hack03.png", "categoryId": "paddle" },
    { "id": 7, "nombre": "Siux Fenix 4 pro", "precio": 530000, "imagenUrl": "img/siuxfenixpro.jpg", "categoryId": "paddle" },
    { "id": 8, "nombre": "Siux trilogy pro 4", "precio": 600000, "imagenUrl": "img/trilogy-siux.jpg", "categoryId": "paddle" },
    { "id": 9, "nombre": "Varlion bourne MY", "precio": 390000, "imagenUrl": "img/bourne-summum.jpg", "categoryId": "paddle" }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId)); // Corrección aquí
        }, 500);
    });
};

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.categoryId === categoryId); // Filtrado por categoría
            resolve(filteredProducts);
        }, 500);
    });
};
