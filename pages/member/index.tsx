import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import { playerCookie } from '../../interfaces/SignInSections';
import { IMG } from '../../services/dataPlayer';
import OverviewContent from '../../components/organisms/OverviewContent';
import Sidebar from '../../components/organisms/Sidebar';
import { ProfileProps } from '../../interfaces/SidebarSections';

export default function index({ profile }: ProfileProps) {
  return (
    <section className="overview overflow-auto">
      <Sidebar active="overview" dataProfile={profile} />
      <OverviewContent />
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
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
  const JWTDecode: playerCookie = jwtDecode(tknBase);
  const { player } = JWTDecode;
  player.avatar = `${IMG}/${JWTDecode.player.avatar}`;
  return {
    props: {
      profile: player,

    },
  };
};
