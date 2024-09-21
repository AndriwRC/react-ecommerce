import { useState } from 'react';
import SignUpForm from '../../Components/SignUpForm';
import LogInForm from '../../Components/LogInForm';

function SignIn() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <>
      <h1 className='font-medium text-xl mb-6'>Welcome</h1>
      {!showSignUpForm && <LogInForm setShowSignUpForm={setShowSignUpForm} />}
      {showSignUpForm && <SignUpForm setShowSignUpForm={setShowSignUpForm} />}
    </>
  );
}

export default SignIn;
