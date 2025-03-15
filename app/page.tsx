"use client";

import { Banner } from "@/src/components/Banner";
import { Footer } from "@/src/components/Footer";
import { Header } from "@/src/components/Header";
import { MoviesGrid } from "@/src/components/MoviesGrid";
import { ApiProvider } from "@/src/context/ApiContext";

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen text-white bg-gradient-to-b from-dark via-black to-dark overflow-x-clip">
      <Header />

      <main className="flex-1 pb-32">
        <Banner />
        <div className="transform -translate-y-[20vh] px-4 md:px-6 lg:px-8 xl:px-16">
          <ApiProvider>
            <MoviesGrid />
          </ApiProvider>
        </div>
      </main>
      <Footer />
    </div>
  );
}
