import Image from "next/image";

const HomePage = () => {
  return (
    <div>
      <div className="relative aspect-3/1 mb-12"> 
        <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
    </div>
  );
}

export default HomePage;
