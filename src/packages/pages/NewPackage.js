import React from 'react';

import './NewPackage.css'

const NewPackage = () => {

  const addPackageHandler = event => {
    event.preventDefault();

    const newPackage = {
      id: Math.random().toString(),
      text: 'New Package Added'
    };

    console.log(newPackage)

  };

  return <form className='new-package' onSubmit={addPackageHandler}>
    <input type='text' />
    <button type='submit'>Add Package</button> 
  </form>
};

export default NewPackage;