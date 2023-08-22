import { UserInterface } from 'interfaces/user';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface DeliveryInterface {
  id?: string;
  delivery_status: string;
  current_location: string;
  destination: string;
  user_id: string;
  order_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  order?: OrderInterface;
  _count?: {};
}

export interface DeliveryGetQueryInterface extends GetQueryInterface {
  id?: string;
  delivery_status?: string;
  current_location?: string;
  destination?: string;
  user_id?: string;
  order_id?: string;
}
