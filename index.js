import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Web3Provider from './store/Web3Provider';
import CollectionProvider from './store/CollectionProvider';
import MarketplaceProvider from './store/MarketplaceProvider';
import App from './App';
import Nav from './Nav';
import WelcomeArea from "../src/components/Content/WelcomeArea"
import OurService from "../src/components/Content/OurService"
import ConnectWallet from "../src/components/Content/ConnectWallet"
import FooterPages from "../src/components/Content/FooterPages"
import logo from '../src/img/logo2.png'

ReactDOM.render(
  <Web3Provider>
    <CollectionProvider>
      <MarketplaceProvider>

      <Nav />

      <div className="container mt-2">
        <div className="row">
          <main role="main" className="col-lg-12 justify-content-center text-center">
            <div className="content mr-auto ml-auto">
              <img src={logo} alt="logo" width="300" height="100" className="mb-2"/>
            </div>
          </main>
        </div>
      </div>

      <WelcomeArea
        ClassSec="hero-section ai5 relative"
        welcomeContClass="welcome-content demo1 text-left"
        specialHeadClass="special-head gradient-text"
        text="Full NFT Marketplace with Smart Contract"
        ClassTitle="bold"
        title="Discover, Buy and Sell NFT Assets The Easy Way"
        ClassDummyText="w-text"
        dummyText="Lorem ipsum dolor sit amet, adipisicing elit. Quod corrupti laborum, quasi? Dolor sapiente amet optio harum dolores, voluptate, tempora dolorem fugiat fuga autem ."
        addRow={true}
      />

      <OurService
          ClassSec="our_services_area section-padding-100"
          titleTop="How Platform Works"
          titleDown="Start With Easy Steps"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus aliquam consequuntur dolor sit amet, consectetur adipisicing elit. Nemo quo laboriosam, dolorum ducimus!"
      />

      <App />

      <ConnectWallet />
      <FooterPages
        mt0={true}
        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus voluptatibus neque illo id repellat quisquam? Autem expedita earum quae laborum ipsum ad.'
      />

      </MarketplaceProvider>
    </CollectionProvider>
  </Web3Provider>, 
  document.getElementById('root')
);
