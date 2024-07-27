import { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
    selectedProduct: item,
  } = useContext(ShoppingCartContext);

  return (
    <aside
      className={` ${
        isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <span>
          <HiX
            className='h-6 w-6 text-black cursor-pointer'
            onClick={closeProductDetail}
          />
        </span>
      </div>
      <figure className='px-6 w-2/3 max-h-52 self-center'>
        <img
          className='w-full h-full rounded-lg'
          src={item.image}
          alt={item.title}
        />
      </figure>
      <p className='flex flex-col p-6 font-medium'>
        <span className='text-2xl mb-2'>${item.price}</span>
        <span className='text-base'>{item.title}</span>
        <span className='font-light text-sm'>{item.description}</span>
      </p>
    </aside>
  );
}

export default ProductDetail;
