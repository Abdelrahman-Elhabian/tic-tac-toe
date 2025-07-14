import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <page />
      </body>
    </html>
  );
}
