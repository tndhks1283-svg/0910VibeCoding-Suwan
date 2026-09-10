"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "@/data/profile.json";

type Season = "spring" | "autumn";

const SKY: Record<Season, string> = {
  spring: "linear-gradient(180deg,#bfe6f5 0%,#d8f0e2 55%,#dff0c6 100%)",
  autumn: "linear-gradient(180deg,#f7dfba 0%,#f6e2c6 50%,#e8ddb0 100%)",
};

const GROUND_LEFT = [3, 11, 19, 27, 35, 42, 50, 58, 66, 73, 81, 89, 96, 14, 62];
const GROUND_ORNAMENTS = GROUND_LEFT.map((left, i) => ({
  left,
  bottom: 6 + ((i * 17) % 46),
  scale: 0.75 + ((i * 13) % 5) * 0.12,
  rotate: ((i * 47) % 70) - 35,
  duration: 3.6 + (i % 5) * 0.5,
  delay: (i % 7) * 0.3,
}));

const SPRING_PETALS = ["#f6a8c0", "#f7c7d8", "#fff1f5", "#efa0d0"];
const AUTUMN_LEAVES = ["#d97b32", "#c9562a", "#e0a13c", "#a8452a"];

const TOGGLE_ACTIVE =
  "border-[#a9793f] bg-[#e9c58d] text-[#6a4519] shadow-[0_3px_0_#96682f]";
const TOGGLE_INACTIVE =
  "border-[#d8c7a6] bg-[#fffaf0] text-[#a5937a] shadow-[0_3px_0_#ded0b6]";

const CARD_THEME = {
  sky: {
    border: "border-[#9ccbe0]",
    shadow: "shadow-[0_6px_0_#7db2ca] hover:shadow-[0_10px_0_#7db2ca]",
    badge: "border-[#9ccbe0] bg-[#e0f1f8]",
    title: "text-[#3f6a80]",
  },
  lime: {
    border: "border-[#a9cd7e]",
    shadow: "shadow-[0_6px_0_#8bb463] hover:shadow-[0_10px_0_#8bb463]",
    badge: "border-[#a9cd7e] bg-[#eaf6da]",
    title: "text-[#54702f]",
  },
} as const;

function SeasonToggle({ season, onChange }: { season: Season; onChange: (s: Season) => void }) {
  return (
    <div className="mb-[22px] flex justify-end gap-2">
      <button
        onClick={() => onChange("spring")}
        className={`rounded-full border-[3px] px-[15px] py-[7px] font-jua text-sm ${
          season === "spring" ? TOGGLE_ACTIVE : TOGGLE_INACTIVE
        }`}
      >
        🌸 봄
      </button>
      <button
        onClick={() => onChange("autumn")}
        className={`rounded-full border-[3px] px-[15px] py-[7px] font-jua text-sm ${
          season === "autumn" ? TOGGLE_ACTIVE : TOGGLE_INACTIVE
        }`}
      >
        🍁 가을
      </button>
    </div>
  );
}

function SectionSign({ label }: { label: string }) {
  return (
    <div className="relative mb-[26px] flex justify-center">
      <div className="absolute left-1/2 top-[38px] h-[34px] w-3 -translate-x-[30px] rounded-sm bg-[#b98f52]" />
      <div className="absolute left-1/2 top-[38px] h-[34px] w-3 translate-x-[18px] rounded-sm bg-[#b98f52]" />
      <div className="relative rounded-[14px] border-4 border-[#a9793f] bg-gradient-to-b from-[#e9c58d] to-[#d8ab6c] px-[26px] py-[9px] font-jua text-[23px] text-[#6a4519] shadow-[0_5px_0_#96682f,inset_0_2px_0_rgba(255,255,255,0.45)] [text-shadow:0_1px_0_rgba(255,255,255,0.4)]">
        {label}
      </div>
    </div>
  );
}

function ItemCard({
  icon,
  name,
  note,
  theme,
}: {
  icon: string;
  name: string;
  note?: string;
  theme: keyof typeof CARD_THEME;
}) {
  const t = CARD_THEME[theme];
  return (
    <div
      className={`flex flex-col gap-2 rounded-[20px] border-4 bg-[#fffaf0] px-[18px] py-5 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 ${t.border} ${t.shadow}`}
    >
      <div className={`flex h-[52px] w-[52px] items-center justify-center rounded-2xl border-[3px] text-[26px] ${t.badge}`}>
        {icon}
      </div>
      <div className={`font-jua text-[19px] ${t.title}`}>{name}</div>
      {note && <div className="text-sm leading-[1.6] text-[#94805f]">{note}</div>}
    </div>
  );
}

export default function Home() {
  const [season, setSeason] = useState<Season>("spring");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ac-season");
      if (saved === "spring" || saved === "autumn") setSeason(saved);
    } catch {
      // localStorage unavailable — keep default season
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("ac-season", season);
    } catch {
      // localStorage unavailable — ignore
    }
  }, [season]);

  return (
    <div className="relative min-h-screen overflow-hidden pb-24 font-gowun text-[#6b5236]">
      <div className="pointer-events-none absolute inset-0" style={{ background: SKY[season] }} />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,.55) 1.5px, transparent 1.6px)",
          backgroundSize: "14px 14px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(160,205,120,0) 0%, rgba(150,200,110,.55) 60%, rgba(134,188,96,.85) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px]">
        {GROUND_ORNAMENTS.map((o, i) => (
          <div
            key={i}
            className="absolute motion-safe:animate-ac-bob"
            style={{
              left: `${o.left}%`,
              bottom: `${o.bottom}px`,
              transform: `scale(${o.scale}) rotate(${o.rotate}deg)`,
              animationDuration: `${o.duration}s`,
              animationDelay: `${o.delay}s`,
            }}
          >
            {season === "spring" ? (
              <i
                className="block h-[7px] w-[7px] rounded-full"
                style={{
                  background: "#f7cf5a",
                  boxShadow: `0 -8px 0 ${SPRING_PETALS[i % 4]}, 0 8px 0 ${SPRING_PETALS[i % 4]}, -8px 0 0 ${SPRING_PETALS[i % 4]}, 8px 0 0 ${SPRING_PETALS[i % 4]}`,
                }}
              />
            ) : (
              <i
                className="block h-[11px] w-[20px]"
                style={{
                  background: AUTUMN_LEAVES[i % 4],
                  borderRadius: "0 100% 0 100%",
                  boxShadow: "inset 0 -2px 0 rgba(0,0,0,.12)",
                }}
              />
            )}
          </div>
        ))}
      </div>

      <div className="relative mx-auto max-w-[660px] px-5 pt-7">
        <SeasonToggle season={season} onChange={setSeason} />

        <div className="relative rounded-[26px] border-4 border-[#e3c894] bg-[#fff6e2] px-7 py-8 shadow-[0_9px_0_#c9a468,0_9px_0_4px_#b98f52,0_22px_34px_rgba(96,74,44,0.22)] motion-safe:animate-ac-sway [transform-origin:50%_100%]">
          <div className="pointer-events-none absolute inset-[10px] rounded-[18px] border-2 border-dashed border-[#c9a468]/45" />

          <div className="flex flex-wrap items-center gap-[22px]">
            <div className="h-[132px] w-[132px] shrink-0 overflow-hidden rounded-full border-[5px] border-[#f6e3bb] bg-[#ffeec9] shadow-[0_0_0_4px_#d9b880,0_8px_0_#c39c62]">
              <Image
                src="/profile.jpg"
                alt={`${profile.name} 프로필 사진`}
                width={132}
                height={132}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="min-w-[240px] flex-1">
              <div className="relative mb-3.5 inline-block rounded-[18px] border-[3px] border-[#e3c894] bg-white px-4 py-2.5 text-[15px] text-[#7d6444] shadow-[0_4px_0_#dfc69a]">
                {profile.greeting}
                <span className="absolute -bottom-[13px] left-[26px] h-3.5 w-3.5 rotate-45 border-b-[3px] border-r-[3px] border-[#e3c894] bg-white" />
              </div>
              <h1 className="mb-1 font-jua text-[44px] leading-[1.05] tracking-[-0.5px] text-[#5a4326]">
                {profile.name}
              </h1>
              <p className="mb-3.5 text-[15px] text-[#9c8461]">{profile.tagline}</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-[#a9cd7e] bg-[#e8f4d6] px-3.5 py-1.5 font-jua text-sm text-[#54702f]">
                  🏫 {profile.school} · {profile.admissionYear}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-[#e6b96f] bg-[#fdeacd] px-3.5 py-1.5 font-jua text-sm text-[#8a6321]">
                  ✨ 이중전공 · {profile.doubleMajor}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[38px] mb-[26px] flex justify-center gap-[7px]">
          {["#8ec46a", "#b6dc96", "#e6b96f", "#b6dc96", "#8ec46a"].map((c, i) => (
            <i key={i} className="block h-[9px] w-[9px]" style={{ background: c }} />
          ))}
        </div>

        <section className="mb-[46px]">
          <SectionSign label="🎯 관심사" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {profile.interests.map((item) => (
              <ItemCard key={item.title} icon={item.emoji} name={item.title} note={item.description} theme="sky" />
            ))}
          </div>
        </section>

        <section className="mb-[46px]">
          <SectionSign label="🌿 취미" />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4">
            {profile.hobbies.map((item) => (
              <ItemCard
                key={item.title}
                icon={item.emoji}
                name={item.title}
                note={"note" in item ? item.note : undefined}
                theme="lime"
              />
            ))}
          </div>
        </section>

        <section>
          <SectionSign label="🎙️ 이력" />
          <div className="flex flex-col gap-4">
            {profile.experience.map((item) => (
              <div
                key={item.organization}
                className="rounded-[20px] border-4 border-[#e6b96f] bg-[#fffaf0] px-5 py-[22px] shadow-[0_6px_0_#cc9c4c]"
              >
                <span className="mb-2.5 inline-block rounded-full border-[3px] border-[#e6b96f] bg-[#fdeacd] px-[13px] py-1 font-jua text-[13px] text-[#8a6321]">
                  {item.period}
                </span>
                <div className="mb-2.5 font-jua text-[21px] text-[#8a6321]">{item.organization}</div>
                <div className="flex flex-col gap-[7px]">
                  {item.roles.map((r) => (
                    <div key={r} className="flex items-start gap-2.5 text-[14.5px] leading-[1.6] text-[#8b7654]">
                      <i className="mt-2 block h-2 w-2 shrink-0" style={{ background: "#e6b96f" }} />
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-[54px] text-center font-galmuri text-xs tracking-[0.5px] text-[#7f9a5f]">
          - 오늘도 좋은 하루 보내세요 -
        </div>
      </div>
    </div>
  );
}
