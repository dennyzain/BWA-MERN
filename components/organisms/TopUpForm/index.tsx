/* eslint-disable max-len */
import { useRouter } from 'next/router';
import { ChangeEventHandler, useState } from 'react';
import { toast } from 'react-toastify';
import {
  NominalItem,
  BankItem,
  PaymentItem,
  TopUpFormProps,
} from '../../../interfaces/TopUpSections';
import NominalTopUp from './NominalTopUpItem';
import PaymentMethodItem from './PaymentTopUpItem';

export default function TopUpForm({ dataItem, nominals, payments }: TopUpFormProps) {
  const router = useRouter();
  const [verifyID, setVerifyID] = useState('');
  const [bankAccountName, setBankAccountName] = useState('');
  const [dataNominal, setDataNominal] = useState({});
  const [dataPayment, setDataPayment] = useState({});

  const handleVerifyID: ChangeEventHandler<HTMLInputElement> = (e) => setVerifyID(e.target.value);
  const handleBankName: ChangeEventHandler<HTMLInputElement> = (e) => setBankAccountName(e.target.value);

  const onChangeNominalItem = (item: NominalItem) => {
    setDataNominal(item);
  };

  const onChangePaymentItem = (pay: PaymentItem, bank: BankItem) => {
    const paymentItem = {
      pay,
      bank,
    };
    setDataPayment(paymentItem);
  };

  const handleSubmit = () => {
    if (verifyID === '' || bankAccountName === '' || dataNominal === {} || dataPayment === {}) {
      toast.error('wajib mengisi semua data !', { theme: 'colored' });
      return;
    }
    localStorage.setItem('account-item', JSON.stringify({ verifyID, bankAccountName }));
    localStorage.setItem('data-item', JSON.stringify({ dataItem, dataPayment, dataNominal }));
    router.push('/checkout');
  };

  return (
    <form action="#" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label htmlFor="ID" className="form-label text-lg fw-medium color-palette-1 mb-10">
            Verify ID
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={handleVerifyID}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Nominal Top Up</p>
        <div className="row justify-content-between">
          {nominals.map((item: NominalItem) => (
            <NominalTopUp
              id={item._id}
              key={item._id}
              coinName={item.coinName}
              coinQuantity={item.coinQuantity}
              price={item.price}
              onChange={() => onChangeNominalItem(item)}
            />
          ))}
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-1 mb-md-10 mb-0">Payment Method</p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((pay: PaymentItem) => pay.banks.map((bank: BankItem) => (
              <PaymentMethodItem
                key={pay._id}
                id={pay._id}
                bankName={bank.bankName}
                type={pay.type}
                onChange={() => onChangePaymentItem(pay, bank)}
              />
            )))}
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label htmlFor="bankAccount" className="form-label text-lg fw-medium color-palette-1 mb-10">
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={handleBankName}
        />
      </div>
      <div className="d-sm-block d-flex flex-column w-100">
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-submit rounded-pill fw-medium text-white border-0 text-lg"
        >
          Continue
        </button>
      </div>
    </form>
  );
}
