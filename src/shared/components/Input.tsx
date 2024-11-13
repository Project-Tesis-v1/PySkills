import React from 'react';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, value, onChange, placeholder }) => (
  <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
);

export default Input;
