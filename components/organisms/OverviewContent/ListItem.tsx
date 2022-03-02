import cx from 'classnames';
import Image from 'next/image';

interface ListItemProps{
    thumb:'overview-1'|'overview-2'|'overview-3'|'overview-4'
    title:string;
    category:string;
    item:number;
    price:number;
    status: 'Pending'|'Success'|'Failed';
}

export default function ListItem({
  thumb, title, category, item, price, status,
}:ListItemProps) {
  const classStatus = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',

  });
  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image
            src={`/img/${thumb}.png`}
            width="80"
            height="60"
            alt=""
          />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          {item}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">
          Rp
          {' '}
          {price}
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
