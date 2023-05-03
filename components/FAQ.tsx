import { Disclosure, Transition } from "@headlessui/react"
import { XMarkIcon } from '@heroicons/react/20/solid'




const faqs = [
    {
        id: 1,
        question: 'How were the MiDiPunkz created?',
        answer: `They were painted by SongsOfEden's piano`
    },
    {
        id: 2,
        question: 'What is an NFT?',
        answer: `A non-fungible token (NFT) is a unique digital asset that is stored on a blockchain, which is a decentralized and distributed digital ledger. Each NFT is one-of-a-kind and cannot be exchanged for another asset on a one-to-one basis because it is unique and has its own distinct properties. NFTs can represent a wide range of digital assets, such as digital art, music, videos, tweets, or virtual real estate, among others.`
    },
    {
        id: 3,
        question: `How do NFTs work?`,
        answer: `NFTs work by creating a unique digital asset on a blockchain that cannot be replicated or duplicated. The blockchain technology behind NFTs ensures that each asset is unique and authentic by verifying ownership and provenance. When someone purchases an NFT, they are essentially buying a digital certificate of ownership for that specific asset. The ownership and transaction history of the NFT are recorded on the blockchain, making it easy to verify the authenticity and ownership of the asset. NFTs are typically bought and sold using cryptocurrencies, and the transaction details are recorded on the blockchain.`
    },
    {
        id: 4,
        question: "What makes NFTs valuable?",
        answer: "The value of NFTs is based on several factors, such as scarcity, uniqueness, and demand. Since each NFT is unique, its value can be determined by how much someone is willing to pay for it. The rarity of an NFT can also contribute to its value, as well as the reputation of the artist or creator who made it."
    },
    {
        id: 5,
        question: "How do I purchase a MiDiPunkz NFT?",
        answer: "You can purchase a MiDiPunkz NFT on OpenSea or mint a MidiPunkz DJ on the mint site. To buy an NFT, you will need to have a digital wallet that supports the Ethereum cryptocurrency used by the marketplace"
    },
    {
        id: 6,
        question: 'What can I do with an NFT after I buy it?',
        answer: 'After purchasing an NFT, you can choose to keep it in your digital wallet as a collectible or sell it on a marketplace. You can also display it in a virtual world or use it in a game or other digital platform.',
    },
    {
        id: 7,
        question: 'What is the difference between an NFT and cryptocurrency?',
        answer: 'Cryptocurrency, such as Bitcoin or Ethereum, is a fungible digital asset that can be exchanged for another asset of equal value. NFTs, on the other hand, are unique and cannot be exchanged for another asset on a one-to-one basis.'
    }
    // {
    //     id: 1,
    //     question: 'How much is shipping?',
    //     answer: `Orders over $49 ship free! All other orders ship for a flat rate of $4.95.`
    // },
    // {
    //     id: 1,
    //     question: 'How do I contact support?',
    //     answer: `We offer support over email, and the best way to contact us is through the in-app help menu.`
    // }
]

function Minus() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
    </svg>
}

function Plus() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>

}

export default function FAQ() {
    return (
        <>
            {faqs.map((faq) => (
                <Disclosure key={faq.id}>
                    {({ open }) => (
                        <>
                            <div>
                                <Disclosure.Button className="flex w-full justify-between border-black border-t-2 px-4 py-3 mb-2 text-left font-medium text-green-500">
                                    <span>{faq.question}</span>
                                    {open ? <Minus /> : <Plus />}
                                </Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition duration-1000 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-100 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel static className="text-gray-100 flex w-full justify-between rounded-lg px-4 mb-2 text-left text-sm font-medium">
                                        {faq.answer}
                                    </Disclosure.Panel>
                                </Transition>
                            </div>
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    )
}