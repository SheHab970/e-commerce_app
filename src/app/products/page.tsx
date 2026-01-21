import ProductList from "@/components/ProductList";

const ProductsPage = async({searchParams}: {searchParams: Promise<{category: string}>}) => {

  const category = (await searchParams).category;
    return (
        <>
            <div>
                productsPage
                <ProductList category={category} />
            </div>
        </>
    )
}

export default ProductsPage;