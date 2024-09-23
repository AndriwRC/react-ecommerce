import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const { filteredItemsByTitle, searchByTitle, setSearchByTitle } =
    useContext(ShoppingCartContext);

  const compoundCategories = {
    'mens-clothing': `men's clothing`,
    'womens-clothing': `women's clothing`,
  };

  const { category } = useParams();
  const items = category
    ? filteredItemsByTitle.filter(
        item => item.category == (compoundCategories[category] || category)
      )
    : filteredItemsByTitle;

  return (
    <>
      <h1 className='font-medium text-xl'>Exclusive Products</h1>
      <input
        className='rounded-lg border border-black w-3/4 max-w-80 p-4 my-4 focus:outline-none'
        type='text'
        placeholder='Search a product'
        value={searchByTitle}
        onChange={e => setSearchByTitle(e.target.value)}
      />
      <div className='grid grid-cols-auto-fit-56 justify-center gap-4 w-full max-w-screen-lg'>
        {items.length === 0 ? (
          <p className='col-span-4 text-center font-light'>
            We {`don't`} have anything like that {':('}
          </p>
        ) : (
          items.map(item => <Card key={item.id} item={item} />)
        )}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
