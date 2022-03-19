import { useEffect, useState } from 'react';
import { HistoryTopUp } from '../../../interfaces/OverviewSections';
import { IMG } from '../../../services/dataPlayer';
import TextItem from './TextItem';

interface TransactionsProps{
  data:{
    data:HistoryTopUp
  }
}
export default function TransactionsDetailContent({ data }:TransactionsProps) {
  const [accountData, setAccountData] = useState({
    verifyID: '',
    orderID: '#DZNX01',
  });
  useEffect(() => {
    const local = localStorage.getItem('account-item');
    const localData = JSON.parse(local!);
    setAccountData((prev) => ({ ...prev, verifyID: localData.verifyID }));
  }, []);

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Details
          {' '}
          {accountData.orderID}
        </h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <div className="d-flex flex-row  align-items-center justify-content-between mb-30">
                <div className="game-checkout d-flex flex-row align-items-center">
                  <div className="pe-4">
                    <div className="cropped">
                      <img
                        src={`${IMG}/${data.data.historyVoucherTopup.thumbnail}`}
                        width="200"
                        height="130"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold text-xl color-palette-1 mb-10">
                      {data.data.historyVoucherTopup.gameName}
                    </p>
                    <p className="color-palette-2 m-0">
                      Category:
                      {' '}
                      {data.data.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="fw-medium text-center label pending m-0 rounded-pill">{data.data.status}</p>
                </div>
              </div>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <TextItem title="Your Game ID" value={accountData.verifyID} />
                <TextItem title="Order ID" value={accountData.orderID} />
                <TextItem title="Item" value={`${data.data.historyVoucherTopup.coinQuantity}${' '}${data.data.historyVoucherTopup.coinName}`} />
                <TextItem title="Price" value={data.data.value} />
                <TextItem title="Tax (10%)" value={data.data.tax} />
                <TextItem title="Total" value={data.data.value + data.data.tax} />
              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <TextItem title="Your Account Name" value={data.data.name} />
                <TextItem title="Type" value={data.data.historyPayment.type} />
                <TextItem title="Bank Name" value={data.data.historyPayment.bankName} />
                <TextItem
                  title="Bank Account Name"
                  value={data.data.historyPayment.name}
                />
                <TextItem
                  title="Bank Number"
                  value={data.data.historyPayment.accountNumber}
                />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="#"
                  role="button"
                >
                  WhatsApp ke Admin
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
