import Web3Provider from '@app/web3/provider';

import Main from '@app/components/Main';
import NavBar from '@app/components/NavBar';

export default function Home() {
  return (
    <Web3Provider>

      <NavBar />

      <Main />

    </Web3Provider>
  )
}
