import "./globals.css";


export const metadata = {
  title: "TE AMOOOO"}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}