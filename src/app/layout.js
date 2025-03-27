import Header from "@/components/header";
import "./globals.css";
import Footer from "@/components/footer";

export const metadata = {
  title: "Best Digital Marketing Company in India | SnickBySEO",
  description: "Top digital marketing services in India, including SEO, social media, content strategy, and paid ads. Maximize traffic, conversions, and ROI today!"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="google-site-verification" content="SzBGgszI5p-Xj-YkDbJJtNbb4lc0oTWjSJNzqagmeYo" />
        <meta name="google-site-verification" content="Q0_R_JgQMbNCaxPZCVH8OIr3uYKRupDiK_B6cvS4zbM" />
  
      </head>
      <body>
        <div className="layout-container">
          <header className="pb-1">
            <Header />
          </header>
          <main className="mt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
