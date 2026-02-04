import '../styles/globals.scss';

export const metadata = {
  title: "Ness Beauty Salon - Hair Salon",
  description: "Experience comfort and styling at Ness Beauty Salon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
