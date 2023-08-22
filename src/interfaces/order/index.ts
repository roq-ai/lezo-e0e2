import { ComplaintInterface } from 'interfaces/complaint';
import { DeliveryInterface } from 'interfaces/delivery';
import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OrderInterface {
  id?: string;
  customer_name: string;
  order_status: string;
  total_price: number;
  delivery_location: string;
  user_id: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;
  complaint?: ComplaintInterface[];
  delivery?: DeliveryInterface[];
  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {
    complaint?: number;
    delivery?: number;
  };
}

export interface OrderGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_name?: string;
  order_status?: string;
  delivery_location?: string;
  user_id?: string;
  organization_id?: string;
}
