import ProductList from "@/components/ProductList";
import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="relative aspect-3/1 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12"> 
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>

      <ProductList />
      
    </div>
  );
}

export default HomePage;
