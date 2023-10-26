import ReduxProvider from "@/providers/ReduxProvider";
import "./globals.css";
import type { Metadata } from "next";
import MoreCard from "@/components/MoreCard";
import UploadVideo from "@/components/UploadVideo";
import Thirdweb from "@/providers/ThirdwebProvider";
import Providers from "@/providers";

export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "Demo App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MoreCard />
          <UploadVideo />
          {children}
        </Providers>
      </body>
    </html>
  );
}
