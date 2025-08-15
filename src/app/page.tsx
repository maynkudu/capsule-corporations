
import Navbar from "@/components/common/navbar";
import Footer from "@/components/footer";
import HeroPage from "@/components/hero";
import ServicePage from "@/components/services";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroPage />
      <ServicePage />
      <Footer />
    </div>
  );
}
