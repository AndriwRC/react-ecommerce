import { HiX } from 'react-icons/hi';
import './styles.css';

function ProductDetail() {
  return (
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
      <div className='flex justify-between p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <span>
          <HiX className='h-6 w-6 text-black' />
        </span>
      </div>
    </aside>
  );
}

export default ProductDetail;
