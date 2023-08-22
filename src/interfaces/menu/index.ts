import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  item_name: string;
  price: number;
  availability: boolean;
  description?: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_name?: string;
  description?: string;
  organization_id?: string;
}
