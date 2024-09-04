import { createContext, useReducer, useEffect } from 'react';

export type ProductCardType = {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
};

type ProdReducerAction =
  | { type: 'setData'; allData: ProductCardType[] }
  | { type: 'add'; newProduct: ProductCardType };

type ChildrenType = { children: React.ReactElement };

export type ProductsContextTypes = {
    products: ProductCardType[];
    addNewProduct: (newProduct: ProductCardType) => void;
    removeProduct: (id: string) => void;
    editProduct: (id: string, editedProduct: ProductCardType) => void;
    getSpecificProduct: (id: string) => ProductCardType | undefined;
};

const reducer = (state: ProductCardType[], action: ProdReducerAction): ProductCardType[] => {
    switch (action.type) {
        case 'setData':
            return action.allData;
        case 'add':
            return [...state, action.newProduct];
        default:
            return state;
    }
};

const ProductsContext = createContext<ProductsContextTypes | undefined>(undefined);

const ProductsProvider = ({ children }: ChildrenType) => {
    const [products, dispatch] = useReducer(reducer, []);

    // Add new product
    const addNewProduct = (newProduct: ProductCardType) => {
        fetch(`http://localhost:8080/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        });
        dispatch({
            type: 'add',
            newProduct: newProduct,
        });
    };

    // Remove product
    const removeProduct = (id: string) => {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'DELETE',
        });
        dispatch({
            type: 'setData',
            allData: products.filter((product) => product.id !== id),
        });
    };

    // Edit product
    const editProduct = (id: string, editedProduct: ProductCardType) => {
        fetch(`http://localhost:8080/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedProduct),
        });

        dispatch({
            type: 'setData',
            allData: products.map((product) =>
                product.id !== id ? product : { ...editedProduct, id }
            ),
        });
    };

    // Get specific product
    const getSpecificProduct = (id: string): ProductCardType | undefined => {
        return products.find((product) => product.id === id);
    };

    // Fetch products on initial render
    useEffect(() => {
        fetch(`http://localhost:8080/products`)
            .then((res) => res.json())
            .then((data: ProductCardType[]) =>
                dispatch({
                    type: 'setData',
                    allData: data,
                })
            );
    }, []);

    return (
        <ProductsContext.Provider
            value={{
                products,
                addNewProduct,
                removeProduct,
                editProduct,
                getSpecificProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export { ProductsProvider };
export default ProductsContext;
