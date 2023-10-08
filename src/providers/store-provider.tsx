"use client";

import useCreateStore from "@/hooks/create-store";
import { createContext } from "react";

export const StoreContext = createContext({});

export default function StoreProvider({
    children
}: {
children: React.ReactNode
}) {
    const [example, toSetExample] = useCreateStore("texto exemplo");

    return <StoreContext.Provider value={{example, toSetExample}}>
        {children}
    </StoreContext.Provider>;
}