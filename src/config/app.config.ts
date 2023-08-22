interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Delivery Driver'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Delivery Driver', 'Customer Service Representative'],
  tenantName: 'Organization',
  applicationName: 'LEZO',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
