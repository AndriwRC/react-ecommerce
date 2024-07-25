import { useContext } from 'react';
import { HiPlus } from 'react-icons/hi';
import { ShoppingCartContext } from '../../Context';

function Card({ item }) {
  const { count, setCount, openProductDetail } =
    useContext(ShoppingCartContext);

  return (
    <div
      className='w-56 h-60 rounded-lg bg-white cursor-pointer'
      onClick={openProductDetail}>
      <figure className='relative w-full h-4/5'>
        <div
          className='absolute top-0 right-0 grid place-items-center w-6 h-6 m-2 rounded-full bg-white'
          onClick={e => {
            e.stopPropagation();
            setCount(count + 1);
          }}>
          <span>
            <HiPlus className='h-4 w-4 text-black' />
          </span>
        </div>

        <img
          className='w-full h-full object-cover rounded-lg'
          src={`${item.image}`}
          alt='headphones'
        />
        <span className='absolute bottom-0 left-0 m-2 px-3 rounded-lg bg-white/60 text-xs'>
          {item.category}
        </span>
      </figure>
      <p className='flex justify-between items-center mt-2'>
        <span className='text-sm truncate'>{item.title}</span>
        <span className='text-lg font-semibold'>${item.price}</span>
      </p>
    </div>
  );
}

export default Card;
