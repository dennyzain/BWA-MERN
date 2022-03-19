import jwtDecode from 'jwt-decode';
import { GetServerSideProps } from 'next';
import SettingsContent from '../../components/organisms/SettingsContent';
import Sidebar from '../../components/organisms/Sidebar';
import { ProfileProps } from '../../interfaces/SidebarSections';
import { playerCookie } from '../../interfaces/SignInSections';
import { IMG } from '../../services/dataPlayer';

export default function EditProfile({ profile }:ProfileProps) {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="settings" dataProfile={profile} />
      <SettingsContent />
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
