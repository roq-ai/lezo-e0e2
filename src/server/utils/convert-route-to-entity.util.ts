const mapping: Record<string, string> = {
  complaints: 'complaint',
  deliveries: 'delivery',
  menus: 'menu',
  orders: 'order',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
