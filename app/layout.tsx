import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';

const display = Cormorant_Garamond({ variable: '--font-display', subsets: ['latin'], weight: ['500','600','700'], style: ['normal','italic'] });
const sans = Manrope({ variable: '--font-sans', subsets: ['latin'], weight: ['400','500','600','700','800'] });

export const metadata: Metadata = {
  title: 'Jeans no Atacado em Goiânia | Goiânia Multimarcas',
  description: 'Curadoria multimarcas e jeans de marca própria no atacado para lojistas de todo o Brasil. Conheça a Goiânia Multimarcas e veja as novidades no Instagram.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>;
}

