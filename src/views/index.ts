import dynamic from 'next/dynamic'
export const Navbar = dynamic(() => import('./navbar'))
export const Background = dynamic(() => import('./background'))
export const LandingCards = dynamic(() => import('./landingcards'))
export const StakingCards = dynamic(() => import('./stakingcards'))
export const LotteryCards = dynamic(() => import('./lotterycards'))
export const VaultCards = dynamic(() => import('./vaultcards'))
export const Introduction = dynamic(() => import('./introduction'))
export const ComingSoon = dynamic(() => import('./coming-soon'))
export const WhitepaperContent = dynamic(
    () => import('./whitepaper/whitepaper')
)
export const SummaryContent = dynamic(() => import('./whitepaper/summary'))
export const MintingPrice = dynamic(() => import('./whitepaper/minting'))
export const Human = dynamic(() => import('./whitepaper/human'))
export const Vampire = dynamic(() => import('./whitepaper/vampire'))
export const GambleSystem = dynamic(() => import('./whitepaper/gamblesystem'))
export const LotteryContent = dynamic(() => import('./whitepaper/lottery'))
export const Supply = dynamic(() => import('./whitepaper/supply'))
export const Team = dynamic(() => import('./whitepaper/team'))
// export { default as Navbar } from './navbar'
