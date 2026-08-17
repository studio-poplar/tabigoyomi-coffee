import "./globals.css";

export const metadata = {
  title: "旅暦珈琲 TABIGOYOMI COFFEE | 横浜・焙煎所",
  description:
    "横浜のスペシャルティコーヒー焙煎所。毎月ひとつの産地だけを届ける「旅する暦」、旅暦珈琲のWebサイト。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
