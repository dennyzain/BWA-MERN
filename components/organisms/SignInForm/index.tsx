import {
  ChangeEventHandler, useEffect, useState,
} from 'react';
import { functionProps } from '../../../interfaces/SignInSections';

export default function SignInForm({ callbackFromParent }:functionProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail:ChangeEventHandler<HTMLInputElement> = (e) => setEmail(e.target.value);
  const handlePassword:ChangeEventHandler<HTMLInputElement> = (e) => setPassword(e.target.value);
  const data = {
    email, password,
  };

  useEffect(() => {
    callbackFromParent(data);
  }, [email, password]);

  return (
    <>
      <div className="pt-50">
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
        <label
          htmlFor="password"
          className="form-label text-lg fw-medium color-palette-1 mb-10"
        >
          Password
        </label>
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
    </>
  );
}
