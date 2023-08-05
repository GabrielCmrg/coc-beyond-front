import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

function Input({ name, ...rest }: Omit<Props, 'ref' | 'defaultValue'>) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <input
      ref={inputRef}
      type="text"
      name={name}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

export default Input;
