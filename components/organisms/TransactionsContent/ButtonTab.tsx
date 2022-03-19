import cx from 'classnames';

interface BtnProps{
  title:string;
  active:boolean;
  click:()=>void;
}

export default function ButtonTab({ title, active, click }:BtnProps) {
  const classActive = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <a onClick={click} data-filter="*" href="#" className={classActive}>
      {title}
    </a>
  );
}
