import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero2";
import About from "@/components/About"
import AppSteps from "@/components/AppSteps";
import Footer from "@/components/Footer";
import Stripe from "@/components/Stripe";

export default function Home() {
  return (
      <div>
        <NavBar/>
        <div className="my-auto flex flex-col mx-36">
          <Hero/>
          <About/>
          <AppSteps/>
        </div>
        <Stripe/>
        <div className="mx-36">
          <Footer/>

        </div>
      </div>

  );
}


// <Hero />
// <main className="flex-1 flex flex-col gap-6 px-4">
//     <h2 className="font-medium text-xl mb-4">Next steps</h2>
//     {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
// </main>