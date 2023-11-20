import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { Providers } from './providers';
import { Navbar } from './components/Nav';
import './globals.css';
import Footer2 from './components/Footer2';

const inter = Figtree({ weight: ['400'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Technical Club',
	description: "It's Technical!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="light">
			<body className={inter.className}>
				<Providers>
					<Navbar />
					{children}
					<Footer2 />
				</Providers>
			</body>
		</html>
	);
}
