import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title:
    'Helen Pinheiro - Psicóloga | Terapia Online e Presencial em Dourados-MS',
  description:
    'Psicóloga Helen Pinheiro (CRP 14/09876-5) oferece terapia para ansiedade, depressão e desenvolvimento pessoal. Atendimento online e presencial em Dourados-MS.',
  keywords: [
    'psicóloga',
    'terapia',
    'ansiedade',
    'depressão',
    'psicologia',
    'Dourados',
    'Mato Grosso do Sul',
    'terapia online',
    'atendimento psicológico',
    'Helen Pinheiro',
    'saúde mental',
  ],

  authors: [{ name: 'Helen Pinheiro' }],
  creator: 'Helen Pinheiro',
  publisher: 'Helen Pinheiro - Psicóloga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Helen Pinheiro - Psicóloga',
    description:
      'Transforme sua vida com acompanhamento psicológico profissional. Atendimento online e presencial em Dourados-MS.',
    url: 'helenpinheiropsicologa.com',
    siteName: 'Helen Pinheiro - Psicóloga',
    locale: 'pt_BR',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'UMHnAVL5I6gLojLKQzPyflOQwNnuPQV0lXl0VkjRSYc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
