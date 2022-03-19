import { useEffect } from 'react';
import AOS from 'aos';
import { GetStaticProps } from 'next';
import Navbar from '../components/organisms/Navbar';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGames from '../components/organisms/FeaturedGames';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import { getFeaturedGames } from '../services/dataPlayer';
import { getItemGame } from '../interfaces/GetGameSections';

export default function HomePage({ data }:{data:getItemGame[]}) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGames getItems={data} />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
export const getStaticProps:GetStaticProps = async () => {
  const res = await getFeaturedGames();
  return {
    props: {
      data: res,
    },
  };
};
