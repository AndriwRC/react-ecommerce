import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);

  const getItems = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {items?.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
