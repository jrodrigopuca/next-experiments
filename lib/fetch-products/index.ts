// Función para obtener datos estáticos de productos
async function fetchProducts(category: string) {
	// Simulación de una llamada a una API o base de datos
	const productsByCategory = {
		electronics: [
			{ id: 1, name: "Laptop", price: 1200 },
			{ id: 2, name: "Smartphone", price: 800 },
		],
		clothing: [
			{ id: 3, name: "T-Shirt", price: 20 },
			{ id: 4, name: "Jeans", price: 50 },
		],
	};

	return productsByCategory[category as keyof typeof productsByCategory] || [];
}

export default fetchProducts;
