import { HistoryTopUpProps } from '../../../interfaces/OverviewSections';
import ListItem from './ListItem';

export default function ListTransactions({ data }: HistoryTopUpProps) {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <ListItem
                key={item._id}
                title={item.historyVoucherTopup.gameName}
                thumb={item.historyVoucherTopup.thumbnail}
                category={item.historyVoucherTopup.category}
                item={item.historyVoucherTopup.coinQuantity}
                status={item.status}
                price={item.historyVoucherTopup.price}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
