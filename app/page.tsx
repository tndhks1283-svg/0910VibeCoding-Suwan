import Image from "next/image";
import profile from "@/data/profile.json";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-2xl flex-col gap-14 px-6 py-16 sm:py-20">
      <section className="flex flex-col items-center gap-5 text-center">
        <div className="h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-pink-200 via-purple-200 to-sky-200 shadow-lg shadow-purple-200/50 ring-4 ring-white">
          <Image
            src="/profile.jpg"
            alt={`${profile.name} 프로필 사진`}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-neutral-800">
            {profile.name}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm ring-1 ring-neutral-200">
              {profile.school} {profile.admissionYear}
            </span>
            <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-neutral-600 shadow-sm ring-1 ring-neutral-200">
              이중전공 · {profile.doubleMajor}
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-neutral-700">
          🎯 관심사
        </h2>
        <ul className="space-y-3">
          {profile.interests.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-lg">
                {item.emoji}
              </span>
              <div>
                <p className="font-medium text-neutral-800">{item.title}</p>
                <p className="mt-1 text-sm text-neutral-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-neutral-700">
          🌿 취미
        </h2>
        <ul className="space-y-3">
          {profile.hobbies.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-2xl border border-rose-100 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-100 text-lg">
                {item.emoji}
              </span>
              <div>
                <p className="font-medium text-neutral-800">{item.title}</p>
                {"note" in item && item.note && (
                  <p className="mt-1 text-sm text-neutral-500">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-bold text-neutral-700">
          🎙️ 이력
        </h2>
        <ul className="space-y-3">
          {profile.experience.map((item) => (
            <li
              key={item.organization}
              className="rounded-2xl border border-amber-100 bg-white/60 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                {item.period}
              </span>
              <p className="mt-2 font-medium text-neutral-800">{item.organization}</p>
              <p className="mt-1 text-sm text-neutral-500">{item.roles.join(" / ")}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
