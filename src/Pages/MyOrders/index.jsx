import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import OrdersCard from '../../Components/OrdersCard';

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <>
      <h1 className='font-medium text-xl mb-6'>My Orders</h1>
      <div className='w-full max-w-96'>
        {order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              date={order.date}
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MyOrders;
