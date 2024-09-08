import { HiX } from 'react-icons/hi';

function OrderCard({ id, title, image, price, handleDelete }) {
  return (
    <div className='flex justify-between items-center mb-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={image}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{price}</p>
        {handleDelete && (
          <HiX
            onClick={() => handleDelete(id)}
            className='h-6 w-6 text-black cursor-pointer'
          />
        )}
      </div>
    </div>
  );
}

export default OrderCard;
