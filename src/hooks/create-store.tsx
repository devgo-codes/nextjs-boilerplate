/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from "react";

export default function useCreateStore(defaultValue: any) {
    const [example, setExample] = useState(defaultValue);

    const toSetExample = useCallback((newValue: any) => {
        setExample(newValue);
    }, []);

    return [example, toSetExample];
}