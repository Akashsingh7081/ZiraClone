import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import {ClerkProvider} from "@clerk/nextjs";
import {shadesOfPurple} from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jira",
  description: "Project Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme:shadesOfPurple}}>
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto text-center text-gray-200 mx-4">
              <p>Made with ❤️ by Akash</p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
