'use client';

import { useAccount } from 'wagmi'
import { useSimpleStorageRead } from '@app/generated'

export default function Main() {
    const { isConnected } = useAccount()
    const { data: simpleStorageValue } = useSimpleStorageRead({
        functionName: 'storedData'
    })

    return (
        <main className="flex flex-col mt-16 items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to Next.js</h1>

            {isConnected && (
                <div>
                    <p className="mt-4 text-xl">You are connected to the blockchain!</p>
                    <p>The simple storage value is {`${simpleStorageValue}`}</p>
                </div>
            )}
        </main>
    )
}