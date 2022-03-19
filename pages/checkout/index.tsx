import jwtDecode from 'jwt-decode';
import Image from 'next/image';
import { GetServerSideProps } from 'next';
import { IMG } from '../../services/dataPlayer';
import CheckoutConfirmation from '../../components/organisms/CheckoutConfirmation';
import CheckoutDetail from '../../components/organisms/CheckoutDetail';
import CheckoutItem from '../../components/organisms/CheckoutItem';
import { playerCookie } from '../../interfaces/SignInSections';

export default function Checkout() {
  return (
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
      <div className="container-fluid">
        <div className="logo text-md-center text-start pb-50">
          <a className="" href="#">
            <Image src="/icon/checkouticon-1.svg" width={60} height={60} alt="checkout-icon" />
          </a>
        </div>
        <div className="title-text pt-md-50 pt-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
          <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
        </div>
        <CheckoutItem />
        <hr />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}

export const getServerSideProps:GetServerSideProps = async ({ req }) => {
  const { tkn } = req.cookies;
  if (!tkn) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const tknBase = Buffer.from(tkn, 'base64').toString('ascii');
  const JWTDecode:playerCookie = jwtDecode(tknBase);
  const { player } = JWTDecode;
  player.avatar = `${IMG}/${JWTDecode.player.avatar}`;
  return {
    props: {
      user: player,
    },
  };
};
