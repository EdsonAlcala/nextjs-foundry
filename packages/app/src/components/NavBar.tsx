import { ConnectButton } from '@rainbow-me/rainbowkit';

import Logo from '@app/components/Logo';

export default function NavBar() {
    return (
        <nav className="flex justify-between items-center px-16 py-4">
            <Logo />
            <ConnectButton />
        </nav>
    )
}