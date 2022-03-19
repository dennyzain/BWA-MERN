import { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { getMemberOverview, getMemberTransactions, getMemberTransactionStatus } from '../../../services/dataMember';
import ButtonTab from './ButtonTab';
import TableRow from './TableRow';

export default function TransactionsContent() {
  const [activeTab, setActiveTab] = useState('');
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([
    {
      _id: '',
      status: '',
      historyVoucherTopup: {
        category: '',
        coinName: '',
        coinQuantity: '',
        gameName: '',
        price: 0,
        thumbnail: '',
      },
    },
  ]);

  const dataDashboard = useCallback(async () => {
    const response = await getMemberTransactions();
    const res = response.data;

    setTotal(res.total);
    setData(res.data);
  }, [getMemberOverview]);

  const dataStatus = useCallback(async (status) => {
    const response = await getMemberTransactionStatus(status);
    const res = response.data;
    if (res.data.length === 0) {
      setData([]);
      setTotal(0);
    }
    setData(res.data);
    setTotal(res.total);
  }, [getMemberTransactionStatus]);

  useEffect(() => {
    dataDashboard();
  }, []);

  const handleTab = (status:string) => {
    setActiveTab(status);
    dataStatus(status);
  };

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          <h3 className="text-5xl fw-medium color-palette-1"><NumberFormat value={total} thousandSeparator="." prefix="Rp. " decimalSeparator="," displayType="text" /></h3>
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab click={() => handleTab('all')} title="All Trx" active={activeTab === 'all'} />
              <ButtonTab click={() => handleTab('pending')} title="Pending" active={activeTab === 'pending'} />
              <ButtonTab click={() => handleTab('success')} title="Success" active={activeTab === 'success'} />
              <ButtonTab click={() => handleTab('failed')} title="Failed" active={activeTab === 'failed'} />

            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">Game</th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {data.map((item) => <TableRow key={item._id} id={item._id} title={item.historyVoucherTopup.gameName} img={item.historyVoucherTopup.thumbnail} category={item.historyVoucherTopup.category} item={`${item.historyVoucherTopup.coinQuantity}${' '}${item.historyVoucherTopup.coinName}`} price={item.historyVoucherTopup.price} status={item.status} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
