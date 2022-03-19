/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';
import '../styles/homepage.css';
import '../styles/utilities.css';
import '../styles/detail.css';
import '../styles/sign-in.css';
import '../styles/checkout.css';
import '../styles/complete-checkout.css';
import '../styles/sign-up.css';
import '../styles/sign-up-photo.css';
import '../styles/sign-up-photo-success.css';
import '../styles/sign-up-success.css';
import '../styles/overview.css';
import '../styles/sidebar.css';
import '../styles/transactions.css';
import '../styles/transactions-detail.css';
import '../styles/edit-profile.css';
import '../styles/navbar-log-in.css';
import Meta from '../components/atoms/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
