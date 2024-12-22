import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
        <Html lang="en">
            <Head>
            {/* Preload critical assets */}
            <link
                rel="preload"
                href="/fonts/inter.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            <link
                rel="preload"
                href="/fonts/poppins.woff2"
                as="font"
                type="font/woff2"
                crossOrigin="anonymous"
            />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
        </Html>
        )
    }
}

export default MyDocument