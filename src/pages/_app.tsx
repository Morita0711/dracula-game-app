import React, { useEffect } from 'react'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { Router } from 'next/router'

import AOS from 'aos'

import AppLayout from 'layouts/app-layout'
import GameAdapterProvider from 'provider/GameAdapterProvider'
import ModalProvider from 'provider/ModalProvider'
import ClientWalletProvider from 'provider/ClientWalletProvider'

import 'react-toastify/dist/ReactToastify.css'
import 'aos/dist/aos.css'
import 'assets/styles/globals.css'
import 'assets/fonts/style.css'

NProgress.configure({ showSpinner: false })

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <ClientWalletProvider>
            <GameAdapterProvider>
                <ModalProvider>
                    <AppLayout>
                        <Component {...pageProps} />
                    </AppLayout>
                </ModalProvider>
            </GameAdapterProvider>
        </ClientWalletProvider>
    )
}

export default MyApp
