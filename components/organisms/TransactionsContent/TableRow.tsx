import cx from 'classnames';
import Link from 'next/link';

interface TableRowProps{
    title:string;
    img:string;
    category:string;
    item:number;
    price:number;
    status:'Pending'|'Failed'| 'Success';
}

export default function TableRow({
  title, img, category, item, price, status,
}:TableRowProps) {
  const classStatus = cx({
    'float-start icon-status': true,
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed',
  });
  return (
    <tr data-category="pending" className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${img}.png`}
          width="80"
          height="60"
          alt=""
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {item}
          {' '}
          Gold
        </p>
      </td>
      <td>
        <p className="fw-medium color-palette-1 m-0">
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
      <td>
        <Link href="/member/transactions/detail">
          <a
            className="btn btn-status rounded-pill text-sm"
          >
            Details
          </a>
        </Link>
      </td>
    </tr>
  );
}
