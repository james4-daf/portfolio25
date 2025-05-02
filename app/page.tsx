import Image from 'next/image';

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="max-w-3xl mx-auto space-y-8 text-lg leading-relaxed">
        <section>
          <h1 className="text-4xl font-bold">Hi, I'm Daf</h1>
          <p className="text-2xl text-gray-600">Front-End Developer</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-6">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-2">
            <h3 className="text-xl">⚛️ React</h3>
            <h3 className="text-xl">📦 TypeScript</h3>
            <h3 className="text-xl">🌐 Next.js</h3>
            <h3 className="text-xl">🎨 TailwindCSS</h3>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mt-6">Projects</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <a
                href="https://github.com/james4-daf/stockMarketApi-next-firebase"
                target="_blank"
                className="text-blue-600 underline"
              >
                📈 Stock Market API (Next.js + Firebase)
              </a>{' '}
              — Real-time financial data viewer using Firebase Auth & Firestore
            </li>
            <li>
              <a
                href="https://github.com/james4-daf/coding-notes-firebase-app"
                target="_blank"
                className="text-blue-600 underline"
              >
                📝 Coding Notes App (React + Firebase)
              </a>{' '}
              — Markdown-based notes with persistent storage
            </li>
            <li>
              <a
                href="https://github.com/james4-daf/Todo-MacPWA"
                target="_blank"
                className="text-blue-600 underline"
              >
                ✅ Mac-style Todo PWA
              </a>{' '}
              — Cross-platform progressive web app with local storage
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-6">
            Professional Experience
          </h2>
          <p>
            Software Engineer at Elsevier (4.5 years)
            <br />— Built tools and UIs for ScienceDirect’s Books and Journals
            team.
            <a
              href="https://www.sciencedirect.com/book/9780323043281/elseviers-integrated-pathology"
              target="_blank"
              className="underline text-blue-600 pl-2"
            >
              View example
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mt-6">Education</h2>
          <ul className="list-disc ml-6">
            <li>BSc in Computer Science, University of Reading (2020)</li>
            <li>
              WebDevOpen Core Bootcamp —{' '}
              <a
                href="https://www.theopenbootcamp.com/"
                target="_blank"
                className="underline text-blue-600"
              >
                View certificate
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
