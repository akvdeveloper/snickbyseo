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
        <meta name="google-site-verification" content="2sCwDPkJ_1OWhHA0d_SvehUA_dSyflXrfqs6divY3FU" />
        <meta name="msvalidate.01" content="658452A9348BF4978E00FC8F9D8C1BFE" />
        <meta name="yandex-verification" content="43966b377d50dabb" />
        <link rel="canonical" href="https://snickbyseo.vercel.app" />
  
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
