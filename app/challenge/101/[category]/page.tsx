// app/products/[category]/page.js

// Función para obtener datos estáticos de productos
async function fetchProducts(category: string) {
  // Simulación de una llamada a una API o base de datos
  const productsByCategory = {
    electronics: [
      { id: 1, name: 'Laptop', price: 1200 },
      { id: 2, name: 'Smartphone', price: 800 },
    ],
    clothing: [
      { id: 3, name: 'T-Shirt', price: 20 },
      { id: 4, name: 'Jeans', price: 50 },
    ],
  };

  return productsByCategory[category as keyof typeof productsByCategory] || [];
}

// Generar parámetros estáticos para rutas dinámicas
export async function generateStaticParams() {
  // Lista de categorías que queremos generar estáticamente
  const categories = ['electronics', 'clothing'];

  return categories.map((category) => ({
    category, // Esto corresponde al parámetro [category] en la ruta
  }));
}

// Componente de página (Server Component por defecto)
export default async function ProductPage({ params }: { params: { category: string } }) {
  const { category } = params;
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
export const revalidate = 600; // Revalida cada 10 minutos (600 segundos)