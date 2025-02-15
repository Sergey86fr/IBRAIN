import { useEffect, useState } from "react"
import styles from "./content.module.css"
import Slider from "../slider/slider.tsx";

export interface IProduct {
    
        "id": number,
        "image": string,
        "title": string,
        "description": string,
        "price": number,
        "weight": number,
        "categories": string
      
}

const data = 
   [
    {
      "id": 1,
      "image": "https://static1.bigstockphoto.com/6/0/4/large1500/406882796.jpg",
      "title": "Ягненок",
      "description": "Фаршированный гречневой кашей курагой апельсином и зеленым яблоком",
      "price": 620,
      "weight": 2100,
      "categories": "fish"
    },
    {
      "id": 2,
      "image": "https://img.delicious.com.au/xdcSvWCB/del/2015/11/roast-duck-with-walnut-and-freekeh-stuffing-23182-2.jpg",
      "title": "Индейка",
      "description": "Фаршированный гречневой кашей курагой апельсином и зеленым яблоком",
      "price": 450,
      "weight": 500,
      "categories": "soup"
    },
    {
      "id": 3,
      "image": "https://img.delicious.com.au/DNRh78_N/w759-h506-cfill/del/2015/10/duck-breast-with-soba-noodles-and-mango-14750-1.jpg",
      "title": "Гусь",
      "description": "Фаршированный зелеными  яблоками",
      "price": 7900,
      "weight": 3000,
      "categories": "meat"
    },
    {
      "id": 4,
      "image": "https://img.delicious.com.au/MmLGEEID/del/2015/10/duck-legs-braised-in-pinot-noir-12014-1.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 1000,
      "categories": "drinks"
    },
    {
      "id": 5,
      "image": "https://img.delicious.com.au/aHx-7eC6/w759-h506-cfill/del/2019/02/speedy-spiced-pumpkin-soup-102067-2.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 1000,
      "categories": "meat"
    },
    {
      "id": 6,
      "image": "https://img.delicious.com.au/MmLGEEID/del/2015/10/duck-legs-braised-in-pinot-noir-12014-1.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 1000,
      "categories": "cold"
    },
    {
      "id": 7,
      "image": "https://img.delicious.com.au/MmLGEEID/del/2015/10/duck-legs-braised-in-pinot-noir-12014-1.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 2100,
      "categories": "hot"
    },
    {
      "id": 8,
      "image": "https://img.delicious.com.au/pJ3ngMAO/w759-h506-cfill/del/2015/10/new-meat-and-three-veg-17151-2.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 2100,
      "categories": "grill"
    },
    {
      "id": 9,
      "image": "https://img.delicious.com.au/05m1DrnF/w759-h506-cfill/del/2018/06/chilean-meat-pie-81974-2.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 2100,
      "categories": "special"
    },
    {
      "id": 10,
      "image": "https://img.delicious.com.au/h5wTP8ov/del/2022/02/grilled-zucchini-with-spiced-chickpea-salsa-163336-2.jpg",
      "title": "Утка",
      "description": "Фаршированная рисом, курагой и айвой",
      "price": 3230,
      "weight": 2100,
      "categories": "meat"
    },
  ]


function Content() {
    // async function getProducts():Promise<IProduct[]> {
    //     const res = await fetch("http://localhost:3000/products")
    //      const data: IProduct[] = await res.json()
    //      return data;
    // }

    const [products, setProducts] = useState<IProduct[]>([]);
    

    function getAllProducts(data:IProduct[]):void {
      setProducts(data)
    }

useEffect(() => {
  getAllProducts(data)
},[])


    // useEffect(() => {
    //   async function fetchProducts() {
    //     try {
    //       const data = await getProducts();
    //       setProducts(data);
    //       console.log(data);
          
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    //   fetchProducts();
    // }, []);

   
    return (
        <div>
          <ul className={styles.productList}>
            <li className={styles.productItem}>Холодные закуски</li>
            <li className={styles.productItem}>Горячие закуски</li>
            <li className={styles.productItem}>Мясные блюда</li>
            <li className={styles.productItem}>Супы</li>
            <li className={styles.productItem}>Рыбные блюда</li>
            <li className={styles.productItem}>Гриль меню</li>
            <li className={styles.productItem}>Фирменные блюда</li>
            <li className={styles.productItem}>Напитки</li> 
          </ul>
         
         <Slider products={products}/>
         <Slider products={products}/>
         <Slider products={products}/>

         
        </div>
    )
}

export default Content