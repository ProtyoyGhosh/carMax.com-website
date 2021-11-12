import { createContext } from "react";
import useCart from "../hooks/useCart";
import useFirebase from "../hooks/useFirebase";
import useItems from "../hooks/useItems";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase()
    const { items } = useItems();
    const { addToCart, selectedItem, remove } = useCart();

    const data = { allContexts, items, addToCart, selectedItem, remove }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;