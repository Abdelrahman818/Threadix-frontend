import "../styles/globals.css";

export const metadata = {
  title: "E-Store",
  description: "This is e-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
