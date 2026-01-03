import "../styles/globals.css";
import { UserProvider } from "@/context/UserContext";

export const metadata = {
  title: "E-Store",
  description: "This is e-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
