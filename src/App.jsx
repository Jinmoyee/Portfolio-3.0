import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technology from "./components/Technology";
export default function App() {
  return (
    <div className="absolute top-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950">
      <Navbar/>
      <Hero/>
      <About/>
      <Technology/>
    </div>
  )
}