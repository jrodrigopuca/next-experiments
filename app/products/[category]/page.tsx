// app/products/[category]/page.js

import fetchProducts from "@/lib/fetch-products";


// Componente de página (Server Component por defecto)
export default async function ProductPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const products = await fetchProducts(category);

  if (!products.length) {
    return <div>No se encontraron productos para la categoría {category}</div>;
  }

  return (
    <div>
      <h1>Productos en {category}</h1>
      <ul>
        {products.map((product: { id: number; name: string; price: number }) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Configurar ISR (Incremental Static Regeneration)
//export const revalidate = 600; // Revalida cada 10 minutos (600 segundos)