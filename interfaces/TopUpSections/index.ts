export interface NominalTopUpItem {
  id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
  // eslint-disable-next-line no-unused-vars
  onChange(e:string):void
}

export interface PaymentTopUpItem{
  id:string
  type:string;
  bankName:string;
  // eslint-disable-next-line no-unused-vars
  onChange(e:string):void;
}

export interface NominalItem {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface BankItem{
    _id: string;
    name: string;
    bankName: string;
}

export interface PaymentItem {
  status: string;
  _id: string;
  type: string;
  banks:BankItem[]

}

export interface UserItem{
  _id: string;
  phoneNumber: number;
  name: string;
}

export interface DataItem{
  _id: string;
  name: string;
  category: {
      _id: string;
      name:string;
      __v: number;
  },
  isFeatured: boolean;
  status: string;
  thumbnail: string;
  user: UserItem[];
  nominals:NominalItem[];
  payment:PaymentItem[]

}
export interface TopUpFormProps {
  dataItem?:DataItem;
  nominals:NominalItem[]
  payments: PaymentItem[];
}
export interface TopUpItemProps {
  data: DataItem
  type: 'desktop' | 'mobile';
}
