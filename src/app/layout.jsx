import { Archivo_Narrow } from 'next/font/google';
import './globals.css';
import { Footer, Header } from '@/layouts';

const archivoNarrow = Archivo_Narrow({
    weight: ['400', '500', '600', '700'],
    subsets: ['vietnamese'],
});

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body className={archivoNarrow.className}>
                <Header />
                <main
                    style={{
                        marginTop: 'var(--header-height)',
                        paddingBottom: 'var(--padding-bottom-content)',
                    }}
                >
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
