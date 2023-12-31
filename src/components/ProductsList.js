// a list of products to be displayed on the website
// each product has id, name, type and price
// it is also stored if the customer wants to buy the products or not
// and the amount of each product he/she wants to buy

// even if buy is false, amount is not always zero
// we have to first look at buy to determine the amount
const productsList = [
    {id: 0, name: "Intel Core i5-13400", type: "CPU", price: 221, buy: false, amount: 1,
        imgLink: "https://upload.wikimedia.org/wikipedia/en/4/4b/Intel_Core_i5_%2811th_generation%2C_logo%29.svg"},
    {id: 1, name: "AMD Ryzen 7 7800X3D", type: "CPU", price: 469, buy: false, amount: 1,
        imgLink: "https://en.wikichip.org/w/images/4/4e/amd_ryzen_7_logo.png"},
    {id: 2, name: "Apple M1", type: "CPU", price: 564, buy: false, amount: 1,
        imgLink: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Apple_M1_Square_without_Gradient.png"},
    {id: 3, name: "G.Skill Trident Z5 Neo RGB DDR5-6000 (2 x 16GB)", type: "RAM", price: 130, buy: false, amount: 1,
        imgLink: "https://cdn.mos.cms.futurecdn.net/exZDq4Tjhe2Vo5iBGTF9AT-970-80.jpg"},
    {id: 4, name: "Samsung DDR5-4800 (2 x 16GB)", type: "RAM", price: 44, buy: false, amount: 1,
        imgLink: "https://cdn.mos.cms.futurecdn.net/gqPTThSjXFoYdXi2P6Jn7R.jpg"},
    {id: 5, name: "TeamGroup T-Force Xtreem ARGB DDR4-3600 (2 x 8GB)", type: "RAM", price: 119, buy: false, amount: 1,
        imgLink: "https://cdn.mos.cms.futurecdn.net/bqaDXBL4MaXbh8yejJGWji.jpg"},
    {id: 6, name: "Seagate BarraCuda ST2000LMZ15, 2TB", type: "Hard drive", price: 55, buy: false, amount: 1,
        imgLink: "https://i.ebayimg.com/images/g/NPAAAOSwMyxke0SR/s-l1600.jpg"},
    {id: 7, name: "Western Digital 3TB WD WD30EZAZ Blue", type: "Hard drive", price: 63, buy: false, amount: 1,
        imgLink: "https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/527048/0_527048.jpg"},
    {id: 8, name: "Kingston A400 SATA SSD, 120GB", type: "Hard drive", price: 30, buy: false, amount: 1,
        imgLink: "https://media.kingston.com/kingston/product/ktc-product-ssd-a400-sa400s37-120gb-1-lg.jpg"},
    {id: 9, name: "GeForce RTX 4090", type: "GPU", price: 2020, buy: false, amount: 1,
        imgLink: "https://cdn.mos.cms.futurecdn.net/CZQFnhbbAoGtKKewwZeTqT-970-80.jpg.webp"},
    {id: 10, name: "Nvidia H100", type: "GPU", price: 45000, buy: false, amount: 1,
        imgLink: "https://www.nvidia.com/content/dam/en-zz/Solutions/gtcs22/data-center/h100/hopper-h100-grace-hopper-2c50-d.jpg"},
    {id: 11, name: "Radeon RX 7900 XTX", type: "GPU", price: 920, buy: false, amount: 1,
        imgLink: "https://cdn.mos.cms.futurecdn.net/vs2g2SXYpjCA9CAP3RTnBi-970-80.jpg.webp"},
];

export default productsList; // expose productsList to usage in other files