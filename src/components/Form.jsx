import React, { useState } from 'react';

const Form = () => {
  const [ firstName, setFirstName ] = useState('');
  const [ email, setEmail ] = useState('');

  const handleChange = (event) => {
    console.log(event.target.value);
    setFirstName(event.target.value);
  }

  const handleChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }

  return ( 
    <div>

      <input type='text'
      placeholder='first name'
      name='firstName'
      value={firstName}
      onChange={handleChange} />
      
      <input type='text'
      placeholder='email'
      name='email'
      value={email}
      onChange={handleChangeEmail } />
  
    </div>
   );
}
 
export default Form;
