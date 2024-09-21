import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../Context';

function SignUpForm({ setShowSignUpForm, formMode }) {
  const { account, setAccount } = useContext(ShoppingCartContext);
  const [name, setName] = useState(account?.name || '');
  const [email, setEmail] = useState(account?.email || '');
  const [pass, setPass] = useState(account?.password || '');

  const createAccount = () => {
    const newAccount = {
      name: name,
      email: email,
      password: pass,
    };
    setAccount(newAccount);
    setShowSignUpForm(false);
  };

  return (
    <form
      className='flex flex-col  w-80 bg-white'
      onSubmit={e => {
        e.preventDefault();
        createAccount();
      }}>
      <label htmlFor='name'>Your name:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='name'
        type='text'
        placeholder='Peter'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <label htmlFor='email'>Your e-mail:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='email'
        type='email'
        placeholder='h1@helloworld.com'
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <label htmlFor='pass'>Your password:</label>
      <input
        className='mt-1 mb-6 p-3 border border-black rounded-lg text-sm'
        id='pass'
        type='password'
        placeholder='1234'
        value={pass}
        onChange={e => setPass(e.target.value)}
        required
      />
      <button className='py-3 rounded-lg font-semibold bg-black text-white disabled:bg-gray-400'>
        {formMode}
      </button>
    </form>
  );
}

export default SignUpForm;
