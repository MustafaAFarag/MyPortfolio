"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import FloatingNavbar from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="">
          <FloatingNavbar />
          <Hero />
          <RecentProjects />
          <Grid />
          {/* <Clients /> */}
          {/* <Experience /> */}
          {/* <Approach /> */}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
