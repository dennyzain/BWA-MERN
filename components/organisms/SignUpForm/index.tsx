import { useRouter } from 'next/router';
import { ChangeEventHandler, useState } from 'react';

export default function SignUpForm() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleName:ChangeEventHandler<HTMLInputElement> = (e) => setName(e.target.value);
  const handleEmail:ChangeEventHandler<HTMLInputElement> = (e) => setEmail(e.target.value);
  const handlePassword:ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);
  const handleSubmit = () => {
    const userForm = {
      name, email, password,
    };
    localStorage.setItem('user-form', JSON.stringify(userForm));
    router.push('/sign-up-photo');
  };
  return (
    <>
      <div className="pt-50">
        <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">Full Name</label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="name"
          name="name"
          aria-describedby="name"
          placeholder="Enter your name"
          onChange={handleName}
        />
      </div>
      <div className="pt-30">
        <label htmlFor="email" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Email
          Address
        </label>
        <input
          type="email"
          className="form-control rounded-pill text-lg"
          id="email"
          name="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          onChange={handleEmail}

        />
      </div>
      <div className="pt-30">
        <label htmlFor="password" className="form-label text-lg fw-medium color-palette-1 mb-10">Password</label>
        <input
          type="password"
          className="form-control rounded-pill text-lg"
          id="password"
          name="password"
          aria-describedby="password"
          placeholder="Your password"
          onChange={handlePassword}

        />
      </div>
      <div className="button-group d-flex flex-column mx-auto pt-50">
        <button
          type="button"
          className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
          onClick={handleSubmit}
        >
          Continue
        </button>
        <a
          className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill"
          href="/sign-in"
          role="button"
        >
          Sign
          In
        </a>
      </div>
    </>
  );
}
