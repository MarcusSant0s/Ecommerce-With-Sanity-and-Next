
import { FilterProducts, ProductsList } from '@/components';
import { client } from '@/lib/client';

export default async function Page({ params }) {

  
  
        const categoryQuery = `*[_type == "category"]{
          _id,
          "title": category
        }`;
        const categoryData = await client.fetch(categoryQuery);
        console.log("Categoria:", categoryData);
      

        // Consulta para subcategorias
        const subCategoryQuery = `*[_type == "subCategories"]{
          _id,
          "title": subCategories
        }`;
        const subCategoryData = await client.fetch(subCategoryQuery);
        console.log("Subcategoria:", subCategoryData); 

        // Consulta para tipos de banho
        const bathTypeQuery = `*[_type == "bathType"]{
          _id,
          "title": name
        }`;
        const bathTypeData = await client.fetch(bathTypeQuery);
        console.log("Tipo de Banho:", bathTypeData); 

        // Consulta para produtos
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
        console.log("Produtos:", productData); 

    
 

  return (
    <div className="md:mx">
      <div className="flex">
        <div className="w-full md:ps-4 rounded-md flex items-center justify-center bg-gray-100">
          <div className="flex flex-col w-full px-auto">
            {/* Passando os dados como props para o ProductList */}
            <ProductsList 
              FirstProducts={productData} 
              categories={categoryData}
              subCategories={subCategoryData}
              bathTypes={bathTypeData}
            />
          </div>
        </div>
      </div>
    </div>
  );
}