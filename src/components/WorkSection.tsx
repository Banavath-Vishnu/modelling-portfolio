import { motion } from "framer-motion";
import { Gallery } from "./Gallery";

const stats = [
  ["Age", "21"],
  ["Height", "178 cm"],
  ["Weight", "80 kg"],
  ["Location", "Hyderabad, IN"],
];

export function WorkSection() {
  return (
    <section id="work" className="pt-32 md:pt-40 pb-24 md:pb-32">
      {/* HERO */}
      <div className="px-6 md:px-12 lg:px-16 mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-6"
        >
          §01 — Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display tracking-editorial font-bold leading-[0.82] text-[22vw] md:text-[18vw] lg:text-[15vw]"
        >
          VISHNU
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 2.7, ease: [0.85, 0, 0.15, 1] }}
          className="h-px bg-foreground mt-8 origin-left"
        />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-10 md:mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.9 }}
            className="md:col-span-5"
          >
            <div className="text-xs md:text-sm tracking-wide-xl uppercase font-medium">
              Commercial Model
              <span className="opacity-40 mx-2">•</span>
              Lifestyle
              <span className="opacity-40 mx-2">•</span>
              Menswear
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-6">
              {stats.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] tracking-wide-xl uppercase text-muted-foreground mb-1">
                    {k}
                  </dt>
                  <dd className="font-display text-2xl md:text-3xl">{v}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.05 }}
            className="md:col-span-6 md:col-start-7"
          >
            <p className="font-display text-2xl md:text-3xl lg:text-4xl leading-[1.25] tracking-editorial">
              "Aspiring commercial and lifestyle model with a passion for fashion,
              storytelling, and visual creativity. Available for campaigns, brand
              collaborations, editorials, and commercial shoots."
            </p>
          </motion.div>
        </div>
      </div>

      {/* GALLERY */}
      <div>
        <div className="flex items-end justify-between px-6 md:px-12 lg:px-16 mb-10">
          <div className="text-[10px] tracking-wide-xl uppercase text-muted-foreground">
            Selected Work
          </div>
          <div className="text-[10px] tracking-wide-xl uppercase text-muted-foreground">
            check out my vlogs on <a href="https://instagram.com/the_ugly__creature" target="_blank" rel="noopener noreferrer">instagram</a>
          </div>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
