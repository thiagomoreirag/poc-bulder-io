import React, { useEffect, useState } from "react";
import List from "./List";
import Provider from "@/context/Context";

function Catalog() {
    const [products, setProducts] = useState<any>([]);

    const ps = [
        { id: 1, name: 'iPhone 11', amount: 1 },
        { id: 2, name: 'iPhone 12', amount: 2 },
        { id: 3, name: 'iPhone 13', amount: 3 }
    ]

    useEffect(() => {
        setTimeout(() => {
            setProducts(ps);
        }, 1000)
    }, [])

    return (
        <Provider>
            <List products={products} />
        </Provider>
    )
}

export default Catalog