import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingActionButtons from '@/components/layout/floating-action-buttons';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Noble Health Services',
  description: 'A World-Class University Hospital in the Heart of Peshawar. Invest in Healthcare Pakistan.',
  keywords: 'Invest in Healthcare Pakistan, Peshawar University Hospital, Healthcare ROI Pakistan, Noble Health Services',
  openGraph: {
    title: 'Noble Health Services',
    description: 'A World-Class University Hospital in the Heart of Peshawar.',
    url: 'https://noblehealthservices.com',
    siteName: 'Noble Health Services',
    images: [
      {
        url: 'https://placehold.co/1200x630.png?text=Noble+Health+Services',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noble Health Services',
    description: 'A World-Class University Hospital in the Heart of Peshawar.',
    images: ['https://placehold.co/1200x630.png?text=Noble+Health+Services'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Noble Health Services",
              "url": "https://noblehealthservices.com",
              "logo": "https://placehold.co/200x60.png?text=Noble+Health+Services+Logo",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-XXX-XXXXXXX",
                "contactType": "Investor Relations"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-grow" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>{children}</main>
          <Footer />
          <FloatingActionButtons />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
