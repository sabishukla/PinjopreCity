import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Weather from './api/Weather';
import Accordion from '@/components/QnA';


export default function Home() {
  return (
    <main className="flex flex-col justify-center snap-mandatory snap-y">
      <div>
         
         {/* header */}
         <section className='snap'>
            <Header />
         </section>

         {/* Hero */}
         <section className=' snap-start'>
            <Hero />
         </section>

         <section className='snap-center'>
            <About/>
         </section>

         {/* footer */}
         <section className='snap-start'> 
            <Footer />
         </section>

         <section>
            <Accordion />
         </section>

      </div>
    </main>
  )
}
