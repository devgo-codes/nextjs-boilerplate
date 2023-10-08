/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoreContext } from "@/providers/store-provider";
import { useContext } from "react";

export default function useStore(): any {
    return useContext(StoreContext);
}