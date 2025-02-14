import { inter } from "@/app/ui/fonts";
import { NavBar } from "./NavBar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NavBar />
        <main> {children}</main>
      </body>
    </html>
  );
}
