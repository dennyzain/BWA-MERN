import { HistoryTopUp } from '../OverviewSections';

export interface dataProfile{
    avatar: string;
    email: string;
    id: string
    phoneNumber: string;
    username: string;
}

export interface SidebarProps{
    active?:'overview'|'settings'|'transactions'|'logout'
     dataProfile:dataProfile
  }

export interface ProfileProps{
    profile:dataProfile
    data?:{data:HistoryTopUp
} }
