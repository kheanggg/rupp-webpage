import "./globals.css";

export const metadata = {
  title: "Royal University of Phnom Penh",
  icons: {
    icon: './Rupp_Logo.png'
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
