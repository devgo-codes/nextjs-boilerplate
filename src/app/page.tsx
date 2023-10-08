"use client";

import useStore from "@/hooks/store";

export default function Page() {
    const {example} = useStore();

    return <h1>{example}</h1>;
}