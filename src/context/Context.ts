import { createContext } from "react";
export interface IProduct{
    categories: number[],
    description: string,
    ean: number,
    id: number,
    image: string,
    images: Object[],
    name: string,
    net_price: number,
    price: string,
    tags: string[],
    taxes: number,
    upc: number,
    qty?: number,
}
export interface IDiscount {
    isActive: boolean,
    percentOff: number,
    totalPrice: number,
}
interface IShopContext {
    products: IProduct[],
    favouriteProducts: IProduct[],
    setFavouriteProducts: any,
    cart: IProduct[],
    setCart: any,
    discount: IDiscount,
    setDiscount: Function
}
export const ShopContext = createContext<IShopContext>({
    products: [],
    favouriteProducts: [],
    setFavouriteProducts: ()=>{},
    cart: [],
    setCart: ()=>{},
    discount: {
        isActive: false,
        percentOff: 0,
        totalPrice: 0
    },
    setDiscount: ()=>{}
})