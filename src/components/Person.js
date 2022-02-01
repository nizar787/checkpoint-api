import React from 'react';

const Person = ({user}) => {
  return (
    <div className='card'>
      <img
        src='https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'
        alt='image'
      />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <ul>
        <li>{user.address.street}</li>
        <li>{user.address.suite}</li>
     
        <li>{user.address.zipcode}</li>
      </ul>
    </div>
  )
};

export default Person;
