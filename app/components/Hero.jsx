import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#171510]">
      {/* Background Image */}
      <Image
        src="/images/fashion-hero.png"
        alt="Men's premium fashion collection"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-end px-6 sm:px-10 lg:px-20">
        <div className="max-w-[500px] text-white">
          {/* Eyebrow */}
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.25em] text-[#d0b58a] sm:text-sm">
            New Collection
          </p>

          {/* Heading */}
          <h1 className="font-serif text-[48px] font-normal uppercase leading-[0.95] tracking-[0.02em] sm:text-[64px] lg:text-[72px]">
            Timeless
            <br />
            By Nature
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-[320px] text-sm leading-7 text-white/80 sm:text-base">
            Premium essentials crafted for
            <br className="hidden sm:block" />
            the modern wardrobe.
          </p>

          {/* CTA */}
          <Link
            href="/shop"
            className="group mt-7 inline-flex min-w-[190px] items-center justify-between bg-[#d5b27b] px-8 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#1d1811] transition-all duration-300 hover:bg-[#e5c794]"
          >
            <span>Shop Now</span>

            <span className="ml-8 text-lg transition-transform duration-300 group-hover:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
