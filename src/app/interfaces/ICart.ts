import { IProduct } from './IProduct';

export interface ICart {
    cartProductList: IProduct[];
    quantityProduct: {product: IProduct, quantity: number};
    cupom: string;
    total: number;
    subTotal: number    
}