export interface HistoryVoucherTopup {
  category: string;
  coinName: string;
  coinQuantity: string;
  gameName: string;
  price: number;
  thumbnail: string;
}
export interface HistoryPaymentTopUp {
  name: string;
  type: string;
  bankName: string;
  accountNumber:string;
}
export interface HistoryTopUp {
  accountUser: string;
  category: { _id: string; name: string };
  createdAt: string;
  historyPayment: HistoryPaymentTopUp;
  historyVoucherTopup: HistoryVoucherTopup;
  name: string;
  player: string;
  status: string;
  tax: number;
  value: number;
  _id: string;
}

export interface HistoryTopUpProps {
  data: HistoryTopUp[];
}
