import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';

interface SidebarItemProps{
  title:string;
  icon:string;
  href:string;
  active?:boolean;
}

export default function SidebarItem({
  title, icon, href, active,
}:Partial<SidebarItemProps>) {
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
        <Link href={`${href}`}>
          <a className="text-lg text-decoration-none">{title}</a>
        </Link>
      </p>
    </div>
  );
}
