import Profile from './Profile';
import SidebarItem from './SidebarItem';
import Footer from './Footer';
import { SidebarProps } from '../../../interfaces/SidebarSections';

export default function Sidebar({ active, dataProfile }: SidebarProps) {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile profile={dataProfile} />
        <div className="menus">
          <SidebarItem
            icon="overview-sidebar"
            title="Overview"
            href="/member"
            active={active === 'overview'}
          />
          <SidebarItem
            icon="transactions-sidebar"
            title="Transactions"
            href="/member/transactions"
            active={active === 'transactions'}
          />
          <SidebarItem icon="message-sidebar" title="Messages" href="/member" />
          <SidebarItem icon="card-sidebar" title="Card" href="/member" />
          <SidebarItem icon="reward-sidebar" title="Rewards" href="/member" />
          <SidebarItem
            icon="setting-sidebar"
            title="Settings"
            href="/member/edit-profile"
            active={active === 'settings'}
          />
          <SidebarItem active={active === 'logout'} logout icon="logout-sidebar" title="Log Out" href="/sign-up" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
