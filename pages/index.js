import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import HomeContainer from '../containers/Home';
import Footer from '../layouts/Footer';

import '../assets/css/home.css'
import './home.css'

const Home = () => {

  return (
    <>
      <HomeContainer />

    </>
  );
}

export default Home;

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Need to figure out the darn packages in this!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
