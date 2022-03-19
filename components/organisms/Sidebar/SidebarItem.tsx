import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

interface SidebarItemProps{
  title:string;
  icon:string;
  href:string;
  active?:boolean;
  logout?:boolean;
}

export default function SidebarItem({
  title, icon, href, active, logout,
}:Partial<SidebarItemProps>) {
  const router = useRouter();
  const logOut = () => {
    Cookies.remove('tkn');
    router.push('/sign-in');
  };
  const classTitle = cx({
    item: true,
    'mb-30': true,
    active,
  });
  return (
    <div className={classTitle}>
      <div className="icon me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={icon} />
      </div>
      <p className="item-title m-0">
        {
          logout ? (
            <a onClick={logOut} role="button" href="" className="text-lg text-decoration-none">{title}</a>
          ) : (
            <Link href={`${href}`}>
              <a className="text-lg text-decoration-none">{title}</a>
            </Link>
          )
        }
      </p>
    </div>
  );
}
