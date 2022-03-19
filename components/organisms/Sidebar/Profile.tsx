import { ProfileProps } from '../../../interfaces/SidebarSections';

export default function Profile({ profile }: ProfileProps) {
  return (
    <div className="user text-center pb-50 pe-30">
      <img src={profile.avatar} width="90" height="90" className="img-fluid mb-20" alt="" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{profile.username}</h2>
      <p className="color-palette-2 m-0">{profile.email}</p>
    </div>
  );
}
