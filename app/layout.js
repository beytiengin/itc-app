import "./globals.css";
import { cormorant, jost } from "./fonts";
import { ThemeProvider } from "./lib/theme";

export const metadata = {
  title: "Actor's Gym — ITC Method",
  description: "Inside The Character.",
};

const temaScript = `
(function() {
  try {
    var saved = localStorage.getItem('itc-theme');
    if (saved === 'krem' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
      return;
    }
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.setAttribute('data-theme', prefersLight ? 'krem' : 'dark');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
