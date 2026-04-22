import "./globals.css";

export const metadata = {
  title: "Actor's Gym — ITC Method",
  description: "Inside The Character.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        {children}
      </body>
    </html>
  );
}