import './App.css'
import Navbar from './components/Navbar'
import Section1 from './sections/section1';
import Section2 from './sections/Section2';
import Animation from './components/Animation'
import Section3 from './sections/Section3';


function App() {

  return (
    <main className="bg-[#111a22] w-full">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Animation entry="slideIn" delay={0} exit="slideOut">
          <Section1 />
        </Animation>
        <Section2 />
        <Section3
          title='Design your Dream Car'
          btn='Start Designing'
          msg='Customize your AutoDrive vehicle with a range of options, from exterior colors to interior finishes. Create a car that
reflects your unique style and preferences. Experience your design in real-world environments with our AR feature on
your mobile device.'
        />
        <Section3
          title='Shop our Inventory'
          btn='View Inventory'
          msg='Browse our current inventory of AutoDrive vehicles, available for immediate purchase. Find the perfect car that meets
your needs and lifestyle. Explore our interactive storyline, blending cinematic video clips with CGI, and experience a
dynamic color palette and soundscape that reacts to your interactions.'
        />

      </div>
    </main>
  );
}

export default App
