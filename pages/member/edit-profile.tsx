import SettingsContent from '../../components/organisms/SettingsContent';
import Sidebar from '../../components/organisms/Sidebar';

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar active="settings" />
      <SettingsContent />
    </section>
  );
}
