import { model } from './model';

export interface Presentation extends model {
  id: number;
  name: string;
  price: number;
  amount: number;
}
