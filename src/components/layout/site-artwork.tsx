import Image from "next/image";
import bg1 from "@/images/bg1.png";
import bg2 from "@/images/bg2.png";
import bg3 from "@/images/bg3.png";
import bg4 from "@/images/bg4.png";
import bg5 from "@/images/bg5.png";
import bg6 from "@/images/bg6.png";
import bg7 from "@/images/bg7.png";

const cinematicLayers = [
  {
    src: bg3,
    className:
      "site-art-cinematic absolute left-[-18rem] top-[44rem] hidden w-[42rem] xl:block 2xl:left-[-12rem]",
    sizes: "(max-width: 1535px) 0px, 672px",
  },
  {
    src: bg4,
    className:
      "site-art-cinematic absolute right-[-18rem] top-[112rem] hidden w-[50rem] xl:block 2xl:right-[-10rem]",
    sizes: "(max-width: 1535px) 0px, 800px",
  },
  {
    src: bg2,
    className:
      "site-art-cinematic absolute bottom-[-16rem] left-1/2 hidden w-[78rem] -translate-x-1/2 lg:block xl:w-[88rem]",
    sizes: "(max-width: 1023px) 0px, (max-width: 1279px) 1248px, 1408px",
  },
];

const characterLayers = [
  {
    src: bg5,
    className:
      "site-art-cutout absolute right-[-4.5rem] top-[28rem] hidden w-[15rem] lg:block xl:right-[-2rem] xl:w-[17rem]",
    sizes: "(max-width: 1023px) 0px, (max-width: 1279px) 240px, 272px",
  },
  {
    src: bg6,
    className:
      "site-art-cutout absolute left-[-5rem] top-[86rem] hidden w-[13rem] lg:block xl:left-[-2rem] xl:w-[15rem]",
    sizes: "(max-width: 1023px) 0px, (max-width: 1279px) 208px, 240px",
  },
  {
    src: bg7,
    className:
      "site-art-cutout absolute right-[-4rem] top-[168rem] hidden w-[12rem] lg:block xl:right-[-1rem] xl:w-[14rem]",
    sizes: "(max-width: 1023px) 0px, (max-width: 1279px) 192px, 224px",
  },
];

export function SiteArtwork() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-7rem] top-20 h-72 w-72 rounded-full bg-glow/10 blur-3xl" />
      <div className="absolute right-[-6rem] top-[34rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-24 left-[8%] h-72 w-72 rounded-full bg-warm/10 blur-3xl" />

      {cinematicLayers.map((layer) => (
        <Image
          key={layer.src.src}
          src={layer.src}
          alt=""
          sizes={layer.sizes}
          className={layer.className}
        />
      ))}

      {characterLayers.map((layer) => (
        <Image
          key={layer.src.src}
          src={layer.src}
          alt=""
          sizes={layer.sizes}
          className={layer.className}
        />
      ))}
    </div>
  );
}
