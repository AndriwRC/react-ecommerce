import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import AsideMenu from '../AsideMenu';

function ProductDetail() {
  const {
    isProductDetailOpen,
    closeProductDetail,
    selectedProduct: item,
  } = useContext(ShoppingCartContext);

  return (
    <AsideMenu
      isOpen={isProductDetailOpen}
      closeMenu={closeProductDetail}
      title={'Detail'}>
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
    </AsideMenu>
  );
}

export default ProductDetail;
