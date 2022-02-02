interface InputProps{
    label:string;
    type:string;
}

export default function Input({
  label, type, ...nativeProps
}:InputProps) {
  return (
    <div className="pt-30">
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        {...nativeProps}
      />
    </div>
  );
}
