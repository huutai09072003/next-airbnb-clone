import { Nunito } from "next/font/google";
import Navbar from "./components/navbar/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import { getCurrentUser } from "./actions/getCurrentUser";
import RentModal from "./components/modals/RentModal";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser= await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider/>
          <LoginModal/> 
          <RentModal/>
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pt-28 pb-20">
          {children}
        </div>
        </body>
    </html>
  );
}
