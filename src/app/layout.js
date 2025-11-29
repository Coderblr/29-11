import './globals.css';

export const metadata = {
  title: 'SBI Test Data Generation',
  description: 'Generate secure banking test data instantly.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
