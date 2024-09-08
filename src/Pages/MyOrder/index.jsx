import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      MyOrder
      <div className='flex flex-col w-80'>
        {order.at(-1)?.products.map(product => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
