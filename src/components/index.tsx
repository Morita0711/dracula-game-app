import dynamic from 'next/dynamic'

export const Container = dynamic(() => import('./container'))
export const Image = dynamic(() => import('./image'))
export const LogoText = dynamic(() => import('./logo-text'))
export const Card = dynamic(() => import('./card'))
export const VaultCard = dynamic(() => import('./card/vaultcard'))
export const NFTCard = dynamic(() => import('./card/nftcard'))
export const OutlineBtn = dynamic(() => import('./button/outlinebtn'))
export const NormalBtn = dynamic(() => import('./button/normalbtn'))
export const Modal = dynamic(() => import('./modal'))
export const Label = dynamic(() => import('./label'))
export const CheckBox = dynamic(() => import('./checkbox'))
export const Timer = dynamic(() => import('./timer'))
export const Progress = dynamic(() => import('./progress'))
// export { default as Container } from './container'
