import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Lightbox } from "./Lightbox";

import img1 from "@/assets/vishnu-01.png";
import img2 from "@/assets/vishnu-02.png";
import img3 from "@/assets/vishnu-03.png";
import img4 from "@/assets/vishnu-04.png";
import img5 from "@/assets/vishnu-05.png";
import img6 from "@/assets/vishnu-06.png";
import img7 from "@/assets/vishnu-07.png";
import img8 from "@/assets/vishnu-08.png";
import img9 from "@/assets/vishnu-09.png";

type Item = {
  src: string;
  alt: string;
  /** col-span / row-span on desktop (12-col grid) */
  col: string;
  row: string;
  /** aspect ratio applied so each tile reads differently */
  aspect: string;
  /** parallax intensity (negative = drifts up faster) */
  parallax: number;
};

// Organised editorial rhythm on a 6-col grid.
// Row 1: tall portrait  +  square        (3 / 3)
// Row 2: wide landscape                    (6)
// Row 3: square         +  tall portrait  (3 / 3)
// Row 4: portrait 2/3   +  landscape 4/3  (2 / 4)
// Row 5: cinematic panorama                (6)
const items: Item[] = [
  { src: img1, alt: "Vishnu — Editorial portrait in black turtleneck", col: "md:col-span-3", row: "", aspect: "aspect-[3/4]", parallax: -30 },
  { src: img4, alt: "Vishnu — Close-up beauty portrait", col: "md:col-span-3", row: "", aspect: "aspect-square", parallax: 30 },

  { src: img5, alt: "Vishnu — Lifestyle on city steps", col: "md:col-span-6", row: "", aspect: "aspect-[16/9]", parallax: -40 },

  { src: img2, alt: "Vishnu — Linen shirt side profile", col: "md:col-span-3", row: "", aspect: "aspect-square", parallax: 25 },
  { src: img3, alt: "Vishnu — Tailored overcoat campaign", col: "md:col-span-3", row: "", aspect: "aspect-[3/4]", parallax: -25 },

  { src: img7, alt: "Vishnu — Knit sweater commercial", col: "md:col-span-2", row: "", aspect: "aspect-[2/3]", parallax: 35 },
  { src: img6, alt: "Vishnu — Moody suit editorial", col: "md:col-span-4", row: "", aspect: "aspect-[4/3]", parallax: -35 },

  { src: img8, alt: "Vishnu — Leather jacket back view", col: "md:col-span-2", row: "", aspect: "aspect-[2/3]", parallax: 30 },
  { src: img9, alt: "Vishnu — Double-breasted blazer studio", col: "md:col-span-4", row: "", aspect: "aspect-[4/3]", parallax: -30 },
];


function Tile({ item, index, onOpen }: { item: Item; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [item.parallax, -item.parallax]);

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 80, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.1, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative col-span-1 ${item.col} ${item.row} overflow-hidden bg-muted cursor-zoom-in`}
    >
      <div className={`relative w-full h-full ${item.aspect} overflow-hidden`}>
        <motion.img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          style={{ y }}
          className="absolute inset-0 w-full h-[115%] -top-[7%] object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors duration-700" />

        {/* Index */}
        <div className="absolute top-3 left-4 text-background mix-blend-difference text-[10px] tracking-wide-xl uppercase opacity-80">
          № {String(index + 1).padStart(2, "0")}
        </div>

        {/* Hover caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 flex items-end justify-between text-background mix-blend-difference">
          <div className="overflow-hidden">
            <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] text-[10px] tracking-wide-xl uppercase">
              View frame
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)] font-display text-xl md:text-2xl tracking-editorial">
              ↗
            </div>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="px-4 md:px-8 grid grid-cols-2 md:grid-cols-6 auto-rows-auto gap-3 md:gap-5">

        {items.map((item, i) => (
          <Tile key={i} item={item} index={i} onOpen={() => setOpen(i)} />
        ))}
      </div>

      <Lightbox
        images={items.map(({ src, alt }) => ({ src, alt }))}
        index={open}
        onClose={() => setOpen(null)}
        onNav={setOpen}
      />
    </>
  );
}
