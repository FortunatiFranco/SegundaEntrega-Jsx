const productos = [
    {
        id: "01",
        name: "Chomba Lacoste Xrm01",
        img: "https://i.postimg.cc/5yRFzWdj/chomba-lacoste-Xrm01.jpg",
        price: 125000,
        stock: 25,
        description: "Ultima temporada 2k25",
        category: "nuevo"
    },
    {
        id: "02",
        name: "Chomba Lacoste Xrm02",
        img: "https://i.postimg.cc/BnxXSK6j/chomba-lacoste-Xrm02.jpg",
        price: 145000,
        stock: 50,
        description: "Ultima temporada 2k25",
        category: "nuevo"
    },
    {
        id: "03",
        name: "Buzo Lacoste Zr01",
        img: "https://i.postimg.cc/pdCr8MKx/buzo-lacoste.jpg",
        price: 110000,
        stock: 16,
        description: "Temporada Invierno 2k24",
        category: "oferta"
    },
    {
        id: "04",
        name: "Campera Lacoste Mmr01",
        img: "https://i.postimg.cc/0QNQ0XCS/campera-lacoste.jpg",
        price: 130000,
        stock: 12,
        description: "Temporada Invierno 2k24",
        category: "oferta"
    },
    {
        id: "05",
        name: "Remera Supreme Iconic",
        img: "https://i.postimg.cc/90RQv4KF/remera-supreme.jpg",
        price: 90000,
        stock: 60,
        description: "Coleccion New Factory",
        category: "nuevo"
    },
    {
        id: "06",
        name: "Buzo Supreme Trpp",
        img: "https://i.postimg.cc/BQFvpK2m/buzo-supreme.jpg",
        price: 215000,
        stock: 20,
        description: "Ultima temporada 2k25",
        category: "nuevo"
    },
    {
        id: "07",
        name: "Remera Lacoste nw26",
        img: "https://i.postimg.cc/v82Z3LqF/remera-lacoste26.webp",
        price: 150000,
        stock: 45,
        description: "temporada 2k26",
        category: "PreLanzamiento"
    },
    {
        id: "08",
        name: "Gorra New Era x DUKI",
        img: "https://i.postimg.cc/3Npd5sqq/New-Era-x-Duki.jpg",
        price: 95000,
        stock: 120,
        description: "temporada 2k26",
        category: "PreLanzamiento"
    },
    {
        id: "09",
        name: "Nike x Lebrom 2k26",
        img: "https://i.postimg.cc/CxYffN9G/Nike-x-Lebrom.jpg",
        price: 215000,
        stock: 12,
        description: "temporada 2k26",
        category: "PreLanzamiento"
    },

]

let error = false;

export const getProducts = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(error){
                reject('hubo un error en la carga de productos')
            }else{
                resolve(productos)
            }
        }, 2000);
    })
}

export const getItem = (id)=>{
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            let prod = productos.find((prod)=> prod.id === id)
            resolve(prod)
        }, 2000);
    })
}