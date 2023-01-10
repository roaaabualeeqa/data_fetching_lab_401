'use client';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeWrapper from './contexts/theme'
import { AuthWrapper } from './contexts/Auth';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeWrapper>
                    <AuthWrapper>
                        <Header />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </AuthWrapper>
                </ThemeWrapper>
            </body>
        </html>
    );
}