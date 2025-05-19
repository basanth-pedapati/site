import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className="flex flex-col items-center">
        <h1>Hero Section</h1>
      </section>
    </main>
  );
}
