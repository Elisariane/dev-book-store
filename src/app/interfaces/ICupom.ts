export interface ICupom {
    code: string;
    value: number; 
    isPercent: boolean;
}

export const cupomListValid: ICupom[] = [
    {
      code: 'CUPOM10OFF',
      value: 10,
      isPercent: false
    },
    {
      code: 'CUPOM20OFF',
      value: 20,
      isPercent: false
    },
    {
      code: 'CUPOM25OFF',
      value: 25,
      isPercent: false
    },
    {
      code: 'ELDORADO15',
      value: 15,
      isPercent: true
    },
    {
      code: 'ELDORADO30',
      value: 30,
      isPercent: true
    },
  ];
  