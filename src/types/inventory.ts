export interface IPhone {
  id: string;
  model: string;
  color: string;
  storage: string;
  quantity: number;
  price: number;
  purchaseDate: string;
  supplier: string;
  costPrice: number;
}

export interface Sale {
  id: string;
  date: string;
  model: string;
  quantity: number;
  price: number;
  total: number;
  customer: string;
}

export interface Purchase {
  id: string;
  date: string;
  model: string;
  quantity: number;
  cost: number;
  total: number;
  supplier: string;
  status: 'pending' | 'delivered' | 'cancelled';
}