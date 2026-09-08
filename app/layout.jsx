import ThemeRegistry from '../components/ThemeRegistry';
import './globals.css';

export const metadata = {
  title: 'Ayush Sinha | Full Stack Engineer',
  description:
    'Full Stack Engineer with 3+ years building production systems. Currently at Yotta Data Services, working across Vue, Node.js, and the Apache CloudStack engine behind Apiculus.',
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
