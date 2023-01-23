import { IProduct } from './IProduct';
export interface ICategory {
    name: string,
    idRelatedProducts: number[]
}

export const categories: ICategory[] = [
    {
        name: 'Programação de Computadores',
        idRelatedProducts: [1,2,5,6]
    },
    {
        name: 'Design de software',
        idRelatedProducts: [3,4,7,9]
    },
    {
        name: 'Computação, internet e mídia digital',
        idRelatedProducts: [8]
    }
];