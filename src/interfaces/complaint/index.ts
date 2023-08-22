import { UserInterface } from 'interfaces/user';
import { OrderInterface } from 'interfaces/order';
import { GetQueryInterface } from 'interfaces';

export interface ComplaintInterface {
  id?: string;
  complaint_status: string;
  description: string;
  user_id: string;
  order_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  order?: OrderInterface;
  _count?: {};
}

export interface ComplaintGetQueryInterface extends GetQueryInterface {
  id?: string;
  complaint_status?: string;
  description?: string;
  user_id?: string;
  order_id?: string;
}
