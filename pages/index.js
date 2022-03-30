import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app JAF!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
import InfoComponent from '../../../components/InfoComponent'
import Card from '../../../components/Card'
// import Authors from './data.json'
import {Authors} from '../../../data/data-containers/data-ConnectWallet'

const CardSection = () => {

  return (
    <>
	    <section className="section-padding-0-70 clearfix" >
	        <div className="container">
	            
				<InfoComponent
				  	titleSm='Explore Authors'
				  	titleLg='Our Authors'
				  	text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
				/>
	                

	            <div className="row">
	            	{Authors && Authors.map((item , i) => (
	            		<Card
	            			key={i}
	            			imgBig={item.imgBig}
	            			imgSm={item.imgSm}
	            			name={item.name}
	            		/>
	            	))}
	            </div>
	        </div>
	    </section>
    </>
  );
}

export default CardSection;
      <Footer />
    </div>
  )
}
