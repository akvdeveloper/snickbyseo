import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Leading Digital Marketing Company in India | SnickBySEO",
  description: "SnickBySEO is a top-rated digital marketing company in India, specializing in SEO, social media marketing, content strategy, and paid ads. Boost your online presence with our expert services for higher traffic, conversions, and ROI."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="pb-1">
         <Header />
        </header>
        <main className="mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
