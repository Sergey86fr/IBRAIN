import { useEffect, useRef, useState } from "react";
import styles from "./slider.module.css"
import ProductCard from "../product-сard/product-сard";
import { IProduct } from "../content/content";

function Slider({products}:IProduct[]) {
    const [currentIndex, setCurrentIndex] = useState(0);
        const sliderRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const interval = setInterval(() => {
              nextSlide();
            }, 2000);
            return () => clearInterval(interval);
          // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [currentIndex]);
          
          
          const nextSlide = () => {
            setCurrentIndex((prevIndex) =>
              prevIndex === products.length - 3 ? 0 : prevIndex + 1
            );
          };
          
          const prevSlide = () => {
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? products.length - 1 : prevIndex - 1
            );
          };
          


    return (
        <div  style={{ position: 'relative', width: '100%', margin: '0 auto', overflow: 'hidden' }}>
        <h2 className={styles.titleSlider}>ХОЛОДНЫЕ ЗАКУСКИ</h2>
        <div ref={sliderRef}  style={{
      display: 'flex',
      transition: 'transform 1s ease-in-out',
      transform: `translateX(-${currentIndex * 25}%)`,
    }}>
       {
       products.map((product) => (
       
          <ProductCard product={product} key={product.id}/>
        


        
      ))
      }

    </div>

    <button
    onClick={prevSlide}
    style={{
      position: 'absolute',
      top: '50%',
      left: '10px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
    }}
  >
    &#8592;
  </button>

  <button
    onClick={nextSlide}
    style={{
      position: 'absolute',
      top: '50%',
      right: '10px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0,0,0,0.5)',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
    }}
  >
    &#8594;
  </button>

      </div>
    )
}

export default Slider;