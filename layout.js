export const metadata = {
  title: 'Thaís Avila Loja',
  description: 'Cílios e Cosméticos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
