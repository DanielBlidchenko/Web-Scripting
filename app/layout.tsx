import "./globals.css";
import { AmplifyProvider } from "./amplify-provider";
import '@aws-amplify/ui-react/styles.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AmplifyProvider>{children}</AmplifyProvider>
      </body>
    </html>
  );
}
