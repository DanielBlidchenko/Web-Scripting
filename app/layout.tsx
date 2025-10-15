import "./globals.css";
import Nav from "./components/Nav";
import { AmplifyProvider } from "./amplify-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AmplifyProvider>
          <Nav />
          <div className="max-w-3xl mx-auto px-4">{children}</div>
        </AmplifyProvider>
      </body>
    </html>
  );
}
