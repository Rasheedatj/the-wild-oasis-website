import Footer from './_components/Footer';
import Header from './_components/Header';
import '@/app/_styles/global.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

console.log(josefin);

export const metadata = {
  title: {
    template: '%s | The wild Oasis ',
    default: 'Welcome | the wild oasis',
  },
  description:
    'Luxurious hotel in the heart of Doha, Qatar. Surrounded by mountains and dark forest.',
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className}  antialiased bg-primary-950 text-primary-50 p-4 min-h-screen flex flex-col`}
      >
        <Header />

        <div className='flex-1 px-8 py-12 grid '>
          <main className='max-w-7xl mx-auto mt-24 w-full'>{children}</main>
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
