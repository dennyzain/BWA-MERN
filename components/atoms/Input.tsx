interface InputProps {
  label: string;
  type: string;
  id?: string;
  name?: string;
  placeholder?: string;
  email?: string;
  text?: string;
  phone?: string;
}

export default function Input({ label, type, ...nativeProps }: Partial<InputProps>) {
  return (
    <div className="pt-30">
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input type={type} className="form-control rounded-pill text-lg" {...nativeProps} />
    </div>
  );
}
