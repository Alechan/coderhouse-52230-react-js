export const ROUTES = {
    HOME: '/',
    CITY_ITEMS_TEMPLATE: '/city/:id',
    CITY_ITEMS_DYNAMIC: (id) => `/city/${id}`,
    ITEM_DETAIL_TEMPLATE: '/item/:id',
    ITEM_DETAIL_DYNAMIC: (id) => `/item/${id}`,
    CART: '/cart',
    ORDER_DETAIL_TEMPLATE: '/order/:id',
    ORDER_DETAIL_DYNAMIC: (id) => `/order/${id}`,
}