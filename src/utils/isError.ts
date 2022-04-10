import { toast } from 'react-toastify'

export const isError = (err: any) => {
    const errors = [
        {
            code: '0x177a',
            message:
                'You can not gamble 3 times for the same NFT within 12 hours.',
        },
        {
            code: '0x177b',
            message: 'You have not enough reward amount so you cannot harvest.',
        },
        {
            code: '0x177c',
            message:
                'You have not enough claimable amount so you cannot claim.',
        },
        {
            code: '0x177d',
            message: 'You cannot stake your NFT due reward faucet is off.',
        },
        {
            code: '0x1782',
            message: 'Lottery have already started so you cannot stake.',
        },
        {
            code: '0x1783',
            message: 'Lottery ended.',
        },
        {
            code: '0xbc4',
            message:
                'Your NFT is not verified yet. We will inform you on discord when the NFT from this generation will be verified.',
        },
        {
            code: 'credit.',
            message:
                'You have not enough $SOL in your wallet to stake your NFT.',
        },
    ]

    const error = errors.find((item) => err.message.endsWith(item.code))

    if (error !== undefined) {
        toast.error(error?.message)
    } else {
        toast.error('You rejected the transaction')
    }
}
