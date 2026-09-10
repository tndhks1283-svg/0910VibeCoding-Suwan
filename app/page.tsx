import Image from "next/image";
import profile from "@/data/profile.json";

type Sticker = {
  emoji: string;
  top: string;
  left: string;
  className: string;
  delay: string;
};

const stickerRows: Sticker[][] = [
  [
    { emoji: "☁️", top: "10%", left: "6%", className: "text-lg opacity-40 -rotate-6 animate-float-slow", delay: "0s" },
    { emoji: "🍃", top: "55%", left: "22%", className: "text-xl opacity-30 rotate-12 animate-float-medium", delay: "0.6s" },
    { emoji: "🌸", top: "20%", left: "78%", className: "text-lg opacity-[0.35] rotate-6 animate-float-fast", delay: "1.1s" },
  ],
  [
    { emoji: "🦋", top: "15%", left: "12%", className: "text-base opacity-30 rotate-6 animate-float-fast", delay: "0.3s" },
    { emoji: "🌼", top: "60%", left: "40%", className: "text-lg opacity-[0.35] -rotate-6 animate-float-slow", delay: "0.9s" },
    { emoji: "🍂", top: "25%", left: "65%", className: "text-lg opacity-30 rotate-12 animate-float-medium", delay: "0.2s" },
    { emoji: "🐝", top: "70%", left: "85%", className: "text-base opacity-30 -rotate-12 animate-float-fast", delay: "1.4s" },
  ],
  [
    { emoji: "🌿", top: "50%", left: "8%", className: "text-lg opacity-[0.35] rotate-6 animate-float-medium", delay: "0.5s" },
    { emoji: "🍄", top: "12%", left: "45%", className: "text-lg opacity-30 -rotate-6 animate-float-slow", delay: "1.2s" },
    { emoji: "🌷", top: "65%", left: "75%", className: "text-base opacity-[0.35] rotate-12 animate-float-fast", delay: "0.1s" },
  ],
  [
    { emoji: "🐌", top: "20%", left: "18%", className: "text-base opacity-30 -rotate-6 animate-float-medium", delay: "0.8s" },
    { emoji: "🌻", top: "60%", left: "50%", className: "text-lg opacity-[0.35] rotate-6 animate-float-slow", delay: "0.4s" },
    { emoji: "🍃", top: "15%", left: "82%", className: "text-lg opacity-30 -rotate-12 animate-float-fast", delay: "1.3s" },
    { emoji: "☁️", top: "68%", left: "8%", className: "text-base opacity-30 rotate-6 animate-float-medium", delay: "0.7s" },
  ],
];

function StickerRow({ stickers }: { stickers: Sticker[] }) {
  return (
    <div aria-hidden className="pointer-events-none relative h-12 select-none sm:h-16">
      {stickers.map((item, i) => (
        <span
          key={i}
          style={{ top: item.top, left: item.left, animationDelay: item.delay }}
          className={`absolute ${item.className}`}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col gap-8 px-6 py-16 sm:py-20">
      <StickerRow stickers={stickerRows[0]} />

      {/* profile card */}
      <section className="relative flex flex-col items-center gap-4 rounded-[2rem] border-4 border-amber-200 bg-[#FFF8E7] px-6 py-8 text-center shadow-[0_6px_0_0_rgba(217,180,120,0.6)]">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-lime-200 via-sky-200 to-amber-200 shadow-md">
          <Image
            src="/profile.jpg"
            alt={`${profile.name} 프로필 사진`}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
          <span className="absolute -right-1 -bottom-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lime-200 text-sm shadow-sm">
            🌼
          </span>
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-stone-700">{profile.name}</h1>
          <p className="text-sm italic text-stone-500">만나서 반가워요! 🌱</p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="rounded-full border-2 border-dashed border-sky-300 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              {profile.school} {profile.admissionYear}
            </span>
            <span className="rounded-full border-2 border-dashed border-lime-300 bg-lime-50 px-3 py-1 text-xs font-semibold text-lime-700">
              이중전공 · {profile.doubleMajor}
            </span>
          </div>
        </div>
      </section>

      <StickerRow stickers={stickerRows[1]} />

      {/* interests */}
      <section>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-sky-300 bg-white/70 px-4 py-1.5 text-sm font-bold text-sky-700 shadow-sm">
          🎯 관심사
        </span>
        <ul className="mt-4 space-y-3">
          {profile.interests.map((item) => (
            <li
              key={item.title}
              className="relative flex items-start gap-4 rounded-[1.5rem] border-[3px] border-sky-200 bg-white/90 p-4 shadow-[0_4px_0_0_rgba(186,230,253,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-lg">
                {item.emoji}
              </span>
              <div>
                <p className="font-bold text-stone-700">{item.title}</p>
                <p className="mt-1 text-sm text-stone-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StickerRow stickers={stickerRows[2]} />

      {/* hobbies */}
      <section>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-lime-300 bg-white/70 px-4 py-1.5 text-sm font-bold text-lime-700 shadow-sm">
          🌿 취미
        </span>
        <ul className="mt-4 space-y-3">
          {profile.hobbies.map((item) => (
            <li
              key={item.title}
              className="relative flex items-start gap-4 rounded-[1.5rem] border-[3px] border-lime-200 bg-white/90 p-4 shadow-[0_4px_0_0_rgba(217,249,157,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lime-100 text-lg">
                {item.emoji}
              </span>
              <div>
                <p className="font-bold text-stone-700">{item.title}</p>
                {"note" in item && item.note && (
                  <p className="mt-1 text-sm text-stone-500">{item.note}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StickerRow stickers={stickerRows[3]} />

      {/* experience */}
      <section>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-dashed border-amber-300 bg-white/70 px-4 py-1.5 text-sm font-bold text-amber-700 shadow-sm">
          🎙️ 이력
        </span>
        <ul className="mt-4 space-y-3">
          {profile.experience.map((item) => (
            <li
              key={item.organization}
              className="relative rounded-[1.5rem] border-[3px] border-amber-200 bg-white/90 p-5 shadow-[0_4px_0_0_rgba(253,230,138,0.8)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-amber-700">
                {item.period}
              </span>
              <p className="mt-2 font-bold text-stone-700">{item.organization}</p>
              <p className="mt-1 text-sm text-stone-500">{item.roles.join(" / ")}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
