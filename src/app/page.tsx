import Image from "next/image";
import { CalculatorContainer } from "./components/calculator-container";

export default function Home() {
  return (
    <div className="font-mono grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-light-grayish-cyan">
      <h1 className="text-very-dark-cyan text-2xl font-medium text-center mb-8 tracking-widest very-dark-cyan">
        SPLI<br />TTER
      </h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <CalculatorContainer />
      </main>
      <footer className="row-start-3 flex flex-col items-center very-dark-cyan">
        <p>Follow me:</p>
        <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.frontendmentor.io/profile/AnwarMestycer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/favicon-32x32.png"
            alt="File icon"
            width={16}
            height={16}
          />
         Frontend Mentor
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/anwarmestycer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/linkedin.png"
            alt="Window icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/mestycerx10/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/images/instagram.png"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
        </div>
      </footer>
    </div>
  );
}
