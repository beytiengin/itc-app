import "./globals.css";
import { cormorant, jost } from "./fonts";
import { ThemeProvider } from "./lib/theme";
import { LangProvider } from "./lib/lang";
import TemaToggleFloat from "../components/TemaToggleFloat";

export const metadata = {
  metadataBase: new URL('https://itc-app-six.vercel.app'),
  title: {
    default: "Actor's Gym — ITC Yöntemi · Karakterin zihnine gir",
    template: '%s · ITC Yöntemi',
  },
  description:
    "ITC, oyuncuların karakterin zihinsel-bedensel haritasına psikolojik güvenlikle giriş yaptığı dijital antrenman platformudur. Beyti Engin × Filiz Kaya Ataklı, 2005.",
  applicationName: "Actor's Gym",
  authors: [{ name: 'Beyti Engin' }, { name: 'Filiz Kaya Ataklı' }],
  keywords: ['oyunculuk', 'ITC', 'karakter çalışması', 'aktör eğitimi', 'sahne pedagojisi'],
  openGraph: {
    title: "Actor's Gym — ITC Yöntemi",
    description:
      'Karakterin zihnine gir. Sahici ol. Inside The Character metoduyla dijital oyunculuk antrenmanı.',
    url: 'https://itc-app-six.vercel.app',
    siteName: "Actor's Gym",
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Actor's Gym — ITC Yöntemi",
    description: 'Karakterin zihnine gir. Sahici ol.',
  },
  robots: { index: true, follow: true },
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

const dilScript = `
(function() {
  try {
    var saved = localStorage.getItem('itc-lang');
    if (saved === 'tr' || saved === 'en') {
      document.documentElement.setAttribute('lang', saved);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${cormorant.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaScript }} />
        <script dangerouslySetInnerHTML={{ __html: dilScript }} />
      </head>
      <body>
        <LangProvider>
          <ThemeProvider>
            {children}
            <TemaToggleFloat />
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  );
}
