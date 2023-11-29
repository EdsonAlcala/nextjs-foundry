import { useSimpleStorageRead, useSimpleStorageWrite } from '@app/generated'

export default function ConnectedView() {
    const { isLoading, writeAsync: setDataAsync, error, data } = useSimpleStorageWrite()
    const { data: simpleStorageValue } = useSimpleStorageRead({
        functionName: 'storedData'
    })

    return (
        // <div className="mt-8">
        //     <h2 className="text-2xl font-bold">Set Data</h2>
        //     <p className="text-lg">
        //         {isLoading ? 'Loading...' : error ? error.message : data?.hash}
        //     </p>
        //     <button
        //         className="mt-4 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
        //         onClick={() => setDataAsync({ args: { input: { x: 1000 } } })}>
        //         Set Data in Simple Storage Contract
        //     </button>
        // </div>
        <div>
            <p className="mt-4 text-xl">You are connected to the blockchain!</p>
            <p>The simple storage value is {`${simpleStorageValue}`}</p>
        </div>
    )
}