import Cookies from 'js-cookie';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

import SignInForm from '../components/organisms/SignInForm';
import { signInForm } from '../interfaces/SignInSections';
import { actionSignIn } from '../services/dataMember';

export default function SignIn() {
  const router = useRouter();
  const [data, setDataForm] = useState({
    email: '',
    password: '',
  });
  const callbackState = (dataForm:signInForm) => {
    setDataForm(dataForm);
  };
  const handleSubmit = async () => {
    const { email, password } = data;
    if (!email || !password) {
      toast.error('email dan password wajib diisi!', { theme: 'colored' });
    } else {
      const resp = await actionSignIn(data);
      if (resp.error) {
        toast.error(resp.message, { theme: 'colored' });
      } else {
        toast.success(resp.message, { theme: 'colored' });
        localStorage.removeItem('user-form');
        const { token } = resp.data.data;
        const strToBase64 = btoa(token);
        Cookies.set('tkn', strToBase64, { expires: 1 });
        router.push('/');
      }
    }
  };
  return (
    <section className="sign-in mx-auto">
      <div className="row">
        <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
          <form action="">
            <div className="container mx-auto">
              <div className="pb-50">
                <Link href="/">
                  <a className="navbar-brand">
                    <Image src="/icon/icon.svg" width={60} height={60} alt="logo" />
                  </a>
                </Link>
              </div>
              <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign In</h2>
              <p className="text-lg color-palette-1 m-0">Masuk untuk melakukan proses top up</p>
              <SignInForm callbackFromParent={callbackState} />
              <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn btn-sign-in fw-medium text-lg text-white rounded-pill mb-16"
                >
                  Continue to Sign In
                </button>
                <Link href="/sign-up">
                  <a
                    className="btn btn-sign-up fw-medium text-lg color-palette-1 rounded-pill"
                    role="button"
                  >
                    Sign
                    Up
                  </a>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xxl-7 col-lg-6 bg-blue text-center pt-lg-145 pb-lg-145 d-lg-block d-none">
          <img src="/img/Header-9.png" width="502" height="391.21" className="img-fluid pb-50" alt="" />
          <h2 className="text-4xl fw-bold text-white mb-30">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="text-white m-0">
            Kami menyediakan jutaan cara untuk
            <br />
            {' '}
            membantu players menjadi
            <br />
            pemenang
            sejati
          </p>
        </div>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { tkn } = req.cookies;
  if (tkn) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: null,
    },
  };
};
