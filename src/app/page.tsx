import Header from "@/components/header";
import Hero from "@/components/hero";
import Cars from "@/components/cars";
import About from "@/components/about";
import Why from "@/components/why";
import Testimonial from "@/components/testimonials";
import Cta from "@/components/cta";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";

export default function Home() {
  return (
    <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTop />
    </main>
  );
}
