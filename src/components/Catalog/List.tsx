import React, { useContext } from "react";
import { Context } from "@/context/Context";

function List({ products }) {
    const context = useContext(Context);

    console.log(context);

    return (
        <ul>
            {products.map(p => (
                <li key={p.id}>{p.name} - Amount: {p.amount}</li>
            ))}
        </ul>
    )
}

export default List