import { HiOutlineClipboardList } from 'react-icons/hi';

function OrdersCard({ date, totalPrice, totalProducts }) {
  return (
    <div className='flex justify-between items-center mb-3 w-96 p-4 border rounded-lg border-black'>
      <p className='flex flex-col font-light'>
        <span>Date: {date}</span>
        <span>Total Products: {totalProducts}</span>
        <span>
          Price: <span className='font-medium text-lg'>${totalPrice}</span>
        </span>
      </p>
      <HiOutlineClipboardList className='h-6 w-6 text-black cursor-pointer' />
    </div>
  );
}

export default OrdersCard;
