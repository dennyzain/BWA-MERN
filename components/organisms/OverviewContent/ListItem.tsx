import cx from 'classnames';
import Image from 'next/image';
import NumberFormat from 'react-number-format';
import { IMG } from '../../../services/dataPlayer';

interface ListItemProps {
  thumb: string;
  title: string;
  category: string;
  item: string;
  price: number;
  status: string;
}

export default function ListItem({
  thumb, title, category, item, price, status,
}: ListItemProps) {
  const classStatus = cx({
    'float-start icon-status': true,
    pending: status === 'pending',
    success: status === 'success',
    failed: status === 'failed',
  });
  return (
    <tr className="align-middle text-center">
      <th scope="row">
        <div className="float-start me-3 mb-lg-0 mb-3">
          <Image src={`${IMG}/${thumb}`} width="80" height="80" alt="" />
        </div>
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
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
          <NumberFormat prefix="Rp. " thousandSeparator="," value={price} decimalSeparator="." displayType="text" />
        </p>
      </td>
      <td>
        <div>
          <span className={classStatus} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">{status}</p>
        </div>
      </td>
    </tr>
  );
}
