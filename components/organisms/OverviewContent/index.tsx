import { useCallback, useEffect, useState } from 'react';
import ListTransactions from './ListTransaction';
import CategoriesItem from './CategoriesItem';
import { getMemberOverview } from '../../../services/dataMember';

export default function OverviewContent() {
  const [count, setCount] = useState([
    {
      name: '',
      value: 0,
    },
  ]);
  const [data, setData] = useState([
    {
      accountUser: '',
      category: { _id: '', name: '' },
      createdAt: '',
      historyPayment: {
        name: '', type: '', bankName: '', accountNumber: '',
      },
      historyVoucherTopup: {
        category: '',
        coinName: '',
        coinQuantity: '',
        gameName: '',
        price: 0,
        thumbnail: '',
      },
      name: '',
      player: '',
      status: '',
      tax: 0,
      value: 0,
      _id: '',
    },
  ]);

  const dataDashboard = useCallback(async () => {
    const response = await getMemberOverview();
    const res = response.data;
    setData(res.data);
    setCount(res.count);
  }, [getMemberOverview]);

  useEffect(() => {
    dataDashboard();
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
          <div className="main-content">
            <div className="row">
              {count.map((item) => (
                <CategoriesItem key={item.name} icon="desktop-overview" totalCost={item.value}>
                  Game
                  <br />
                  {item.name}
                </CategoriesItem>
              ))}
            </div>
          </div>
        </div>
        <ListTransactions data={data} />
      </div>
    </main>
  );
}
