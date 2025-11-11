import { useState } from "react";
import Image from "next/image";
import { SpinnerIcon } from "@phosphor-icons/react";
const WaitingPlayerTwo = () => {

    const [loading, setLoading] = useState(false);

    const copyToClipboard = () => {

        setLoading(true);
        try {
            const url = window.location.href;
            navigator.clipboard.writeText(url)
        }
        catch (err) {
            console.error('Failed to copy: ', err);
        } finally {
            setTimeout(() => { setLoading(false); }, 1000);
        } 
    };

    return ( <div className="my-6 space-y-8 text-center bg-white p-6 rounded-lg border border-gray-100">
                        <div className="space-y-2">
                            <div className="text-2xl font-bold">You created this game</div>
                            <div>Now, share this link with a friend to start playing!</div>
                        </div>
                        <Image src="/loading.svg" loading='eager' alt="Loading" width={40} height={40} className="mx-auto my-14" />
                        <button onClick={copyToClipboard} className="btn btn-outline text-center w-40 justify-center gap-2">
                            { loading ? (<> <SpinnerIcon className="animate-spin" /> <span>Copying ...</span></>) : 'Copy Link'}
                        </button>
                    </div> );
}
 
export default WaitingPlayerTwo; 