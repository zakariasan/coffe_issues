import { inter } from "@/app/ui/fonts";
import { NavBar } from "./NavBar";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Theme>
          <NavBar />
          <main className="p-5">
            <Container>
              {children}
            </Container>
          </main>
        </Theme>
      </body>
    </html>
  );
}
