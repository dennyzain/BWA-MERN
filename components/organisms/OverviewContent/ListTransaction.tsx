import ListItem from './ListItem';

export default function ListTransactions() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">Game</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <ListItem
              title="Mobile Legends:The New Battle 2021"
              thumb="overview-1"
              category="Desktop"
              item={250}
              status="Pending"
              price={250000}
            />
            <ListItem
              title="Call of Duty:Modern"
              thumb="overview-2"
              category="Desktop"
              item={550}
              status="Success"
              price={460000}
            />
            <ListItem
              title="Clash of Clans"
              thumb="overview-3"
              category="Mobile"
              item={120}
              status="Failed"
              price={100000}
            />

            <ListItem
              title="The Royal Game"
              thumb="overview-4"
              category="Mobile"
              item={320}
              status="Failed"
              price={232000}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
