import cx from 'classnames';

interface BtnProps{
  title:string;
  active:boolean
}

export default function ButtonTab({ title, active }:BtnProps) {
  const classActive = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a data-filter="*" href="#" className={classActive}>
      {title}
    </a>
  );
}
