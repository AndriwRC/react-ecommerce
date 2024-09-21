import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';

function LogInForm({ setShowSignUpForm }) {
  const { setSignOut, account } = useContext(ShoppingCartContext);
  return (
    <form
      className='flex flex-col justify-between gap-4 w-80'
      onSubmit={e => e.preventDefault()}>
      <div className='flex flex-wrap justify-between gap-4 p-4'>
        <label className='w-1/3 text-end' htmlFor='email'>
          email:
        </label>
        <input
          className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
          id='email'
          type='email'
          value={account?.email}
          disabled
        />
        <label className='w-1/3 text-end' htmlFor='pass'>
          password:
        </label>
        <input
          className='w-3/5 border-b-2 border-b-gray-500 outline-none focus-within:border-black'
          id='pass'
          type='text'
          value={account?.password}
          disabled
        />
      </div>
      <Link to='/'>
        <button
          className='w-full py-3 rounded-lg font-semibold bg-black text-white disabled:bg-gray-400'
          disabled={!account}
          onClick={() => setSignOut(false)}>
          Login
        </button>
      </Link>
      <span className='text-sm underline hover:cursor-pointer self-center'>
        Forgot your password?
      </span>

      <button
        className='py-3 rounded-lg font-semibold border border-black  text-black disabled:text-gray-400 disabled:border-gray-400'
        disabled={account}
        onClick={() => setShowSignUpForm(true)}>
        Sign Up
      </button>
    </form>
  );
}

export default LogInForm;
