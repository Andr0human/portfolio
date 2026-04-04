import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'Ayush Sinha | Full Stack Engineer',
  description:
    'Full Stack Engineer with 2+ years building production systems. Currently at Opslyft working on cloud infrastructure, ClickHouse analytics, and AWS-based backend systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
