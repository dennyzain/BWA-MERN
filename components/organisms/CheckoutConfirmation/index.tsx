import { useRouter } from 'next/router';
import {
  ChangeEventHandler, useEffect, useState,
} from 'react';
import { toast } from 'react-toastify';
import { setCheckout } from '../../../services/dataPlayer';

export default function CheckoutConfirmation() {
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState({
    voucher: '',
    nominal: '',
    payment: '',
    bank: '',
    name: '',
    accountUser: '',
  });
  const [checkBox, setCheckBox] = useState(false);
  const handleCheckBox:ChangeEventHandler<HTMLInputElement> = () => {
    setCheckBox(!checkBox);
  };
  const validateSubmit = async () => {
    if (checkBox === false) {
      toast.error('Pastikan anda melakukan pembayaran');
      return;
    }
    const { error, message } = await setCheckout(checkoutData);
    if (error) {
      toast.error(message, { theme: 'colored' });
    } else {
      toast.success(message, { theme: 'colored' });
      router.push('/checkout/complete');
    }
  };

  useEffect(() => {
    const localData = localStorage.getItem('data-item')!;
    const localAccount = localStorage.getItem('account-item')!;
    const data = JSON.parse(localData);
    const account = JSON.parse(localAccount);
    const dataCheckout = {
      voucher: data.dataItem._id,
      nominal: data.dataNominal._id,
      payment: data.dataPayment.pay._id,
      bank: data.dataPayment.bank._id,
      name: account.bankAccountName,
      accountUser: account.verifyID,
    };
    setCheckoutData(dataCheckout);
  }, []);

  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input type="checkbox" onChange={handleCheckBox} />
        <span className="checkmark" />
      </label>
      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={validateSubmit}
        >
          Confirm
          Payment
        </button>
      </div>
    </>
  );
}
