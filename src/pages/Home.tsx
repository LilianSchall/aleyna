"use client";

import KineticTypography from "../components/KineticTypography";
import AnimatedUnderline from "../components/AnimatedUnderline";
import ScrollReveal from "../components/ScrollReveal";
import InteractiveGalleryGrid from "../components/InteractiveGalleryGrid";
import DynamicLighting from "../components/DynamicLighting";
import { InstagramIcon, Mail, ExternalLink } from "lucide-react";
import MainPicture from "../artworks/00_70x40_basel_2024.png";
import { featuredArtworks } from "./artworks";
import author from "../artworks/author.jpg";
import { featuredSketches } from "./sketches";

export default function Home() {
  const pastExpositions = [
    {
      id: 1,
      title: "Solo show - Cour des chaines - Mulhouse, France",
      date: "February 2022",
      link: "https://www.lalsace.fr/culture-loisirs/2022/02/22/un-talent-naissant-a-la-cour-des-chaines",
    },
    {
      id: 2,
      title: "First Solo Show - Hôtel de ville, Thann France (Press article)",
      date: "May 2021",
      link: "https://www.lalsace.fr/culture-loisirs/2021/05/27/thann-les-etranges-chats-siamois-d-aleyna",
    },
    {
      id: 3,
      title: "First Solo Show - Hôtel de ville, Thann France",
      date: "2021",
      link: "https://www.youtube.com/watch?v=jolq8UcO5mo",
    },
  ];

  const currentExpositions = [
    {
      id: 5,
      title: "Art Basel Miami Art Fair - Miami, USA",
      date: "December 2024",
      link: "https://www.artbasel.com/miami-beach?lang=fr",
    },
    {
      id: 4,
      title: "Art Basel Paris Art Fair - Paris, France",
      date: "October 2024",
      link: "https://www.artbasel.com/paris?lang=fr",
    },
    {
      id: 3,
      title: "Volta Art Fair New York - USA",
      date: "September 2024",
      link: "https://www.voltaartfairs.com",
    },
    {
      id: 2,
      title: "Hampton’s Fine Art Fair - Hampton’s - NY State, USA",
      date: "July 2024",
      link: "https://hamptonsfineartfair.com",
    },
    {
      id: 1,
      title: "Often at Gotham Art Gallery New York (group shows)",
      date: "July 2024",
      link: "",
    },
  ];

  return (
    <div className="relative">
      <DynamicLighting />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 md:space-y-8 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={200}>
                <KineticTypography
                  text="Aleyna Aygün"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tight leading-tight"
                />
                <div className="max-w-xl py-4">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
                    Exploring Art through life stories and vivid imagery. Each
                    piece tells a story of emotion and experience.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Featured artwork preview */}
            <div className="lg:col-span-5 order-1 lg:order-2 mb-6 lg:mb-0">
              <ScrollReveal direction="right" delay={300}>
                <div className="relative aspect-[3/4] sm:aspect-[3/2] md:aspect-[4/3] lg:aspect-[3/4] bg-neutral-900 rounded-sm overflow-hidden">
                  <img
                    src={MainPicture}
                    alt="Featured artwork"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                    <p className="text-xs text-neutral-500 mb-1">
                      Featured Work
                    </p>
                    <h3 className="text-sm md:text-base lg:text-xl font-light">
                      Art Basel Paris 2024
                    </h3>
                    <p className="text-xs text-neutral-400">
                      2024 • Oil on canvas
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <AnimatedUnderline>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                  Gallery
                </h2>
              </AnimatedUnderline>
              <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                A curated selection of recent paintings that showcase the
                evolution of artistic vision
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <InteractiveGalleryGrid artworks={featuredArtworks} />
          </ScrollReveal>
        </div>
      </section>

      {/* Sketech Section */}
      <section id="sketch" className="py-16 md:py-24 lg:py-32 relative z-10">
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <AnimatedUnderline>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                  Sketch
                </h2>
              </AnimatedUnderline>
              <p className="text-neutral-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                A look into the preliminary sketches that lay the foundations of
                my creations.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <InteractiveGalleryGrid artworks={featuredSketches} />
          </ScrollReveal>
        </div>
      </section>

      {/* Biography Section */}
      <section
        id="biography"
        className="py-16 md:py-24 lg:py-32 border-t border-neutral-800 relative z-10"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <AnimatedUnderline>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                  Biography
                </h2>
              </AnimatedUnderline>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ScrollReveal direction="left" delay={400}>
              <div className="relative aspect-[3/4] bg-neutral-900">
                <img
                  src={author}
                  alt="Artist portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600}>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Aleyna Aygün was born in 2003 in Thann, in the Alsace region
                  of Eastern France, to Turkish parents who had migrated to
                  France at a young age. She grew up in a multicultural
                  environment shaped by both Western and Middle Eastern
                  influences, and became multilingual from an early age.
                </p>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  She discovered drawing in early childhood through books at the
                  local library. Later, artists such as Jean-Michel Basquiat,
                  Monet, and Rothko would leave a lasting mark on her creative
                  approach. In 2019, she began drawing Siamese cats on red
                  backgrounds—a recurring motif that now appears throughout her
                  work.
                </p>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  In 2021, while still in high school, she held her first solo
                  show at the Thann City Hall. The following year, she continued
                  to combine her law studies with her artistic career, holding a
                  second solo exhibition at La Cour des Chaînes in Mulhouse.
                  Around that time, she also published two books on Apple Books:
                  Le paradoxe du développement personnel and Écrits sur le
                  Bonheur.
                </p>

                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  After a pause during her undergraduate law degree, she shifted
                  her focus to the United States. A spontaneous trip to New York
                  with her twin sister and a friend led her to GothamArt
                  Gallery, which welcomed her despite her youth and emerging
                  status.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  In 2024, she met a Hong Kong-based gallerist who advised her
                  on her portfolio and helped her gain access to the JCAC. That
                  same year, she joined the Hampton’s Fine Art Fair with five
                  works on paper—all of which sold out on the first day ($1,480
                  each), marking a key milestone in her rising career. She was
                  also featured at VOLTA New York, which likewise sold out, and
                  continued to exhibit regularly in New York while studying.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  She took part in Art Basel Paris with a canvas, then
                  contributed five works on paper and one painting to Art Basel
                  Miami. She also joined the Young Artists Program of the
                  Beyeler Foundation in Basel, and in summer 2025, attended the
                  École du Louvre summer courses in Paris.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Her work explores themes of love, social and economic issues,
                  as well as emotions, human and non-human relationships, and
                  the impact of color on perception. Initially painting without
                  sketches using acrylic, watercolor, and oil, she gradually
                  adopted a sketchbook and oil pastels to capture thoughts and
                  emotions before transferring them to canvas when deeper
                  exploration is needed.
                </p>
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  Looking ahead, she plans to develop increasingly ambitious
                  works, both in scale and form, with a particular interest in
                  exploring sculpture.
                </p>

                <div className="pt-4 border-t border-neutral-800">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-normal mb-4 tracking-wide">
                    Current Exhibitions
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {currentExpositions.map((v) => (
                      <li>
                        <a
                          href={v.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:bg-neutral-900/50 transition-colors duration-300 rounded-sm group"
                        >
                          <div className="text-sm md:text-base mb-1">
                            {v.title}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-400 text-sm">
                              {v.date}
                            </span>
                            <span className="text-neutral-500 text-xs group-hover:text-white transition-colors duration-300">
                              More...
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t border-neutral-800">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-normal mb-4 tracking-wide">
                    Past Exhibitions
                  </h3>
                  <ul className="space-y-2 md:space-y-3">
                    {pastExpositions.map((v) => (
                      <li>
                        <a
                          href={v.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:bg-neutral-900/50 transition-colors duration-300 rounded-sm group"
                        >
                          <div className="text-sm md:text-base mb-1">
                            {v.title}
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-neutral-400 text-sm">
                              {v.date}
                            </span>
                            <span className="text-neutral-500 text-xs group-hover:text-white transition-colors duration-300">
                              More...
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 md:py-24 lg:py-32 border-t border-neutral-800 relative z-10"
      >
        <div className="container mx-auto px-4">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <AnimatedUnderline>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                  Contact
                </h2>
              </AnimatedUnderline>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="max-w-2xl mx-auto">
              <p className="text-sm md:text-base lg:text-lg mb-8 md:mb-12 leading-relaxed">
                For inquiries about commissions or exhibitions, please reach out
                directly using the information below.
              </p>

              <div className="space-y-6 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 mt-1 text-neutral-400 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-normal mb-1">
                      Email
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base">
                      aleyna.aleyna@icloud.com
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.instagram.com/aleynasoffstage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-6 md:space-y-10 hover:bg-neutral-900/50 transition-colors duration-300 rounded-sm group"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <InstagramIcon className="w-5 h-5 md:w-6 md:h-6 mt-1 text-neutral-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-1">
                        Instagram
                      </h3>
                      <p className="text-neutral-400 text-sm md:text-base">
                        @aleynaoffstage
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="https://linktr.ee/aleynaaygun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-6 md:space-y-10 hover:bg-neutral-900/50 transition-colors duration-300 rounded-sm group"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6 mt-1 text-neutral-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-normal mb-1">
                        LinkTree
                      </h3>
                      <p className="text-neutral-400 text-sm md:text-base">
                        @aleynaaygun
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
