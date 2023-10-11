import { createContext, ReactElement, useState } from 'react';

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

const initState: ProductType[] = [
  { sku: 'item0001', name: 'iPad 7', price: 199.99 },

  { sku: 'item0002', name: 'MacBook Air 2018', price: 599.99 },

  { sku: 'item0003', name: 'Apple-style smart watch', price: 139.99 },

  { sku: 'item0004', name: 'iPhone 5', price: 39.99 },
];

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };
const ProductsContext = createContext<UseProductsContextType>(initContextState);
type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContext;
