import React from 'react';

export const Input = ({type, setValue, name}) => {
  return (
    <input type={type} name={name} id={name} onChange={(({target}) => {setValue(target.value)})} />
  )
}