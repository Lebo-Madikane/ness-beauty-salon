import '../styles/globals.scss';
import { Rasa, Viga } from 'next/font/google';

// Configure Rasa (primary font)
const rasa = Rasa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

// Configure Viga (secondary font)
const viga = Viga({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: "Ness Beauty Salon - Hair Salon",
  description: "Experience comfort and styling at Ness Beauty Salon in Cape Town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${rasa} ${viga}`}>
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
