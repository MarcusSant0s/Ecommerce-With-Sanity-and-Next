import React from "react";
import InsertProducts from "@/components/Form/InsertForm";
import { client } from "@/lib/client"; // Certifique-se de importar o cliente

// Consultas para categorias, subcategorias, tipo de banho e produtos
const categoryQuery = `*[_type == "category"]{
    _id,
    "title": category
}`;
const categoryData = await client.fetch(categoryQuery);

const subCategoryQuery = `*[_type == "subCategories"]{
    _id,
    "title": subCategories
}`;
const subCategoryData = await client.fetch(subCategoryQuery);

const bathTypeQuery = `*[_type == "bathType"]{
    _id,
    "title": name
}`;
const bathTypeData = await client.fetch(bathTypeQuery);

const productQuery = `*[_type == "product" && Quantity > 0] | order(_createdAt desc) {
    image,
    name,
    slug,
    discont,
    price,
    _id,
    Quantity,
    "category": category -> category
}[0..50]`;
const productData = await client.fetch(productQuery);

export default function Page() {
    return (
        <InsertProducts
            categories={categoryData}
            subCategories={subCategoryData}
            bathTypes={bathTypeData}
            products={productData}
        />
    );
}
