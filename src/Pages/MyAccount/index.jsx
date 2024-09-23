import { useContext, useState } from 'react';
import SignUpForm from '../../Components/SignUpForm';
import { ShoppingCartContext } from '../../Context';

function MyAccount() {
  const { account } = useContext(ShoppingCartContext);

  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <>
      <h1 className='mb-8 font-medium text-xl'>My account</h1>
      {!showEditForm && (
        <div className='w-72 sm:w-80 '>
          <p className='text-sm'>
            Name: <span className='text-lg font-medium'>{account.name}</span>
          </p>
          <p className='text-sm truncate'>
            Email: <span className='text-lg font-medium '>{account.email}</span>
          </p>
          <button
            className='mt-4 w-full border border-black rounded-lg py-3'
            onClick={() => setShowEditForm(true)}>
            Edit
          </button>
        </div>
      )}
      {showEditForm && (
        <SignUpForm setShowSignUpForm={setShowEditForm} formMode='Edit' />
      )}
    </>
  );
}

export default MyAccount;
