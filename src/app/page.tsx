import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { DownloadButton } from '@/components/DownloadButton';
import { globalConfig } from '@/constants';
import { TypewriterEffectSmooth } from '@/components/typewriter-effect';

export default function Home() {
  const words = [
    {
      text: 'you'
    },
    {
      text: 'need'
    },
    {
      text: 'for'
    },
    {
      text: 'with'
    },
    {
      text: 'STARKNET.',
      className: 'text-[#0C0C4F] '
    }
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative h-screen w-screen bg-white">
      <Header />

      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <section className={'pt-24'}>
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-3xl flex-col items-center">
            <div className="mb-8 flex">
              <a href={globalConfig.chromeStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                    New version ⚡️
                    <span className="inline-flex items-center pl-2 text-black dark:text-white">
                      try now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="pl-0.5 text-black dark:text-white"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </span>
              </a>
            </div>
            <h2 className="text-center font-medium text-gray-900 dark:text-gray-50 text-3xl sm:text-6xl">
              <div>All the information, </div>
              <div className="animate-text-gradient inline-flex gap-2 items-center bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                <TypewriterEffectSmooth words={words} />
                <img src="/starknet-logo.png" className={'size-11'} alt="" />
              </div>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Starknet gas price tracker, provide all the info about the current gas price on <br />
              <span className="cursor-wait opacity-70"> Starknet & Ethereum </span> you need.
            </p>
            <div className="mt-10 flex gap-4">
              <DownloadButton />
              <a
                href={globalConfig.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  Go to GitHub{' '}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="pl-0.5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
