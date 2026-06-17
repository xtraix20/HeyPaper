import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import CategoryGrid from "@/components/CategoryGrid";
import AboutBrand from "@/components/AboutBrand";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-crema">
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <CategoryGrid />
        <AboutBrand />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
