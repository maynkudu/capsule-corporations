
import Navbar from "@/components/common/navbar/navbar";
import Footer from "@/components/footer";
import HeroPage from "@/components/hero";
import NewPage from "@/components/newer";
import ServicePage from "@/components/services";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroPage />
      <ServicePage />
      <NewPage />
      <Footer />
    </div>
  );
}
