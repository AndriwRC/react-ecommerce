import { useContext } from 'react';
import { HiX } from 'react-icons/hi';
import { ShoppingCartContext } from '../../Context';
import './styles.css';

function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail } =
    useContext(ShoppingCartContext);

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
    </aside>
  );
}

export default ProductDetail;
