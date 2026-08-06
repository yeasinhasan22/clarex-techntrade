import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div id="magic-cursor">
        <div id="ball" />
      </div>
      <Header />
      <main>{children}</main>
      <Footer />
      <SiteScripts />
    </>
  );
}
