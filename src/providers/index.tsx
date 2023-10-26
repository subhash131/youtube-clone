import ReduxProvider from "@/providers/ReduxProvider";
import Thirdweb from "@/providers/ThirdwebProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Thirdweb>{children}</Thirdweb>
        </ReduxProvider>
      </body>
    </html>
  );
}
