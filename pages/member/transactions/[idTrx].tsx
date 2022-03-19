import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import Sidebar from '../../../components/organisms/Sidebar';
import TransactionsDetailContent from '../../../components/organisms/TransactionsDetailContent';
import { ProfileProps } from '../../../interfaces/SidebarSections';
import { playerCookie } from '../../../interfaces/SignInSections';
import { getTransactionDetail } from '../../../services/dataMember';
import { IMG } from '../../../services/dataPlayer';

export default function TransactionsDetail({ profile, data }:ProfileProps) {
  return (
    <section className="transactions-detail overflow-auto">
      <Sidebar active="transactions" dataProfile={profile} />
      <TransactionsDetailContent data={data!} />
    </section>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  const { tkn } = req.cookies;
  const { idTrx } = params!;
  if (!tkn) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }
  const tknBase = Buffer.from(tkn, 'base64').toString('ascii');
  const JWTDecode: playerCookie = jwtDecode(tknBase);
  const res = await getTransactionDetail(idTrx!, tknBase);
  const { player } = JWTDecode;
  player.avatar = `${IMG}/${JWTDecode.player.avatar}`;
  return {
    props: {
      profile: player,
      data: res.data,
    },
  };
};
