import Footer from "./component/footer";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
