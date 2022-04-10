import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <meta name="title" content="Dracula Game" />
                    <meta
                        name="description"
                        content="Take part in the fight between thirsty blood drinkers and frightened humans to earn $BLOOD."
                    />
                    <meta name="keywords" content="Dracula game, NFT" />
                    <meta property="og:type" content="NFT website" />
                    <meta
                        name="og:title"
                        property="og:title"
                        content="Dracula Game"
                    />
                    <meta
                        name="og:description"
                        property="og:description"
                        content="Take part in the fight between thirsty blood drinkers and frightened humans to earn $BLOOD."
                    />
                    <meta
                        httpEquiv="Cache-control"
                        content="max-age=31536000"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=EB+Garamond&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="text-white">
                    <Main />
                    <noscript>
                        Sorry, your browser does not support JavaScript!
                    </noscript>
                    <NextScript />
                </body>
            </Html>
        )
    }
}
