let products = [
  {
    id: 2536,
    name: "Sony Professional 32GB XQD",
    price: 500,
    category: "Storage",
    description: "The new XQD cards achieve Max read",
    image: "./images/sony.jpg",
  },
  {
    id: 2537,
    name: "Lenovo Legion 15.6 Gaming",
    price: 4228,
    category: "Laptops",
    description:
      "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
    image: "./images/lenovo.jpg",
  },
  {
    id: 2538,
    name: "ASUS ROG GL552VW-DH71",
    price: 5300,
    category: "Laptops",
    description:
      "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
    image: "./images/asus.jpg",
  },
  {
    id: 2549,
    name: "AMD Ryzen 5 Surface Edition ",
    price: 4300,
    category: "Laptops",
    description:
      "Microsoft מסך מגע Surface Laptop 4 13.5 אינץ' - AMD Ryzen 5 Surface Edition - זיכרון 8GB - כונן SSD 256GB עם Windows 11 (הדגם האחרון) - פלטינה",
    image: "img/leptopone.jpg",
  },
  {
    id: 2638,
    name: "Microsoft Surface Laptop Go ",
    price: 2300,
    category: "Laptops",
    description:
      "Microsoft Surface Laptop Go מסך מגע 12.4 אינץ' Intel i5 8GB 128GB SSD כחול קרח ",
    image: "./img/leptopthree.jpg",
  },
  {
    id: 3538,
    name: " Intel Core i5 8GB Memory ",
    price: 6300,
    category: "Laptops",
    description:
      "מחשב נייד Surface Go 2-12.4 מסך מגע - Intel Core i5 8GB Memory - 128 SSD - פלטינה",
    image: "./img/leptopfour.jpg",
  },
  {
    id:3638,
    name: "Microsoft Surface Laptop",
    price: 5300,
    category: "Laptops",
    description:
      "Microsoft Surface Laptop 3 13.5 אינץ' מסך מגע Intel Core i5-8GB זיכרון - כונן SSD 256GB (הדגם האחרון) שחור מט ",
    image: "./img/leptopfive.jpg",
  },
  {
    id: 2938,
    name: "Microsoft i-5",
    price: 5300,
    category: "Laptops",
    description:
      "Microsoft משטח מחשב נייד 2 (Intel Core i5, 8GB RAM, 256GB) - פלטינה ",
    image: "./img/leptopsix.jpg",
  },
  {
    id: 2868,
    name: "Intel i5-1135G7",
    price: 5300,
    category: "Laptops",
    description:
      "Microsoft Surface Laptop Go 2 12.5 אינץ', מסך מגע, Intel i5-1135G7, Intel UHD Graphics, 8GB RAM, 512GB PCIe SSD, פלטינה, עם עט סטיילוס MTC",
    image: "./img/leptopseven.jpg",
  },
];

function showCards() {
  for (let i = 0; i < products.length; i++) {
    document.getElementById("products").innerHTML += `
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
  <img src=${products[i].image} class="card-img-top" alt=${products[i].name}>
  <div class="card-body">
    <h5 class="card-title">${products[i].name}</h5>
    <p class="card-text">${products[i].category}</p>
    
    <a data-bs-toggle="modal" data-bs-target="#infoModal"  class="btn btn-primary "onclick="setModal(${i}) ">see more</a>
  </div>
</div>
        </div>
        `;
  }
}

showCards();

// לכתוב פונקציה שמזינה את פרטי המוצר למודאל על סמך אינדקס
function setModal(index) {
  document.getElementById("title").innerText = products[index].name;
  document.getElementById("mbody").innerHTML = `
  <p><b>Serial Number:</b> ${products[index].id}</p><p><b>Category:</b> ${products[index].category}</p><p><b>Description:</b> ${products[index].description}</p>
  <h4 class="text-end">Price: ${products[index].price} </h4>`;
}