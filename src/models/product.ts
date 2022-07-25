import { model } from './model';
import { Presentation } from './presentation';

export interface Product extends model {
  id: number;
  name: string;
  tax: number;
  barCode: string;
  presentations: Presentation[];
}
