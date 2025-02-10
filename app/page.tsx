"use client";

import Head from "next/head";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
     <>
      <Head> {/* ✅ Correct usage in a client component */}
        <title>Chadi's Portfolio</title>
        <meta name="description" content="Welcome to my portfolio! Explore my projects and experience." />
        <meta property="og:title" content="Chadi's Portfolio" />
        <meta property="og:description" content="Discover my projects and skills as a FullStack Software Engineer." />
        <meta property="og:image" content="https://your-image-url.com/preview.png" />
        <meta property="og:url" content="https://sheedii.github.io/portfolio/" />
        <meta property="og:type" content="website" />
      </Head>
    <main className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
    </>
  );
};

export default Home;
