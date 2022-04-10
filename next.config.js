/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins')

const withTM = require('next-transpile-modules')([
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
])

const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN

const plugins = [
    [
        withTM,
        {
            reactStrictMode: true,
            images: {
                loader: 'imgix',
                path: NEXT_PUBLIC_DOMAIN,
                domains: ['www.arweave.net', NEXT_PUBLIC_DOMAIN],
                formats: ['image/avif', 'image/webp'],
            },
        },
    ],
]

module.exports = withPlugins(plugins)
