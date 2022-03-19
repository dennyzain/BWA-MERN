/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetStaticProps } from 'next';
import Footer from '../../components/organisms/Footer';
import Navbar from '../../components/organisms/Navbar';
import TopUpForm from '../../components/organisms/TopUpForm';
import TopUpItem from '../../components/organisms/TopUpItem';
import { getItemGame } from '../../interfaces/GetGameSections';
import {
  TopUpFormProps,
} from '../../interfaces/TopUpSections';
import { getDetailVoucher, getFeaturedGames } from '../../services/dataPlayer';

export default function Detail({ dataItem, nominals, payments }:TopUpFormProps) {
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">Top Up</h2>
            <p className="text-lg color-palette-1 mb-0">Perkuat akun dan jadilah pemenang</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem type="mobile" data={dataItem!} />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem type="desktop" data={dataItem!} />
              <hr />
              <TopUpForm dataItem={dataItem} nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
export async function getStaticPaths() {
  const res = await getFeaturedGames();
  const paths = res.map((item:getItemGame) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
export const getStaticProps:GetStaticProps = async (context) => {
  const { id } = context.params!;
  const res = await getDetailVoucher(id);
  return {
    props: {
      dataItem: res.detail, nominals: res.detail.nominals, payments: res.payment,
    },
  };
};
