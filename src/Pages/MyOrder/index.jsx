import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiChevronLeft } from 'react-icons/hi';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);
  const orderId = parseInt(useParams().id);
  const index = isNaN(orderId) ? -1 : orderId;
  return (
    <>
      <div className='flex items-center justify-center relative w-72 sm:w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <HiChevronLeft className='h-6 w-6 text-black cursor-pointer' />
        </Link>
        <h1 className='font-medium text-xl '>My Order</h1>
      </div>
      <div className='flex flex-col w-72 sm:w-80'>
        {order.at(index)?.products.map(product => (
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
