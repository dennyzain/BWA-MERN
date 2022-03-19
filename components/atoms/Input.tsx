import { ChangeEvent } from 'react';

interface InputProps {
  label: string;
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  text?: string;
  phone?: string;
  disabled?:boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?:(e:ChangeEvent<HTMLInputElement>)=>void
}

export default function Input({
  label, type, disabled, value, id, onChange, ...nativeProps
}: Partial<InputProps>) {
  return (
    <div className="pt-30">
      <label htmlFor={id} className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      {!disabled ? (<input type={type} className="form-control rounded-pill text-lg" value={value} onChange={onChange} {...nativeProps} />) : (<input type={type} className="form-control rounded-pill text-lg" {...nativeProps} value={value} onChange={onChange} disabled />)}
    </div>
  );
}
