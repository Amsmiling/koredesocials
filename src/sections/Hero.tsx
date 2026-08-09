import { motion } from 'framer-motion'
import FadingVideo from '../components/FadingVideo'
import BlurText from '../components/BlurText'
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from '../components/icons'

const fadeBlur = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
}

const NAV_LINKS = ['Work', 'Studio', 'Services', 'Journal', 'Contact']
const CLIENT_LOGOS = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno']

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
          <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
            <span className="font-heading italic text-2xl">K</span>
          </div>

          <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="px-3 py-2 text-sm font-medium text-white/90 font-body"
              >
                {link}
              </a>
            ))}
            <button className="flex items-center gap-1.5 bg-white text-black rounded-full pl-4 pr-3 py-2 text-sm font-medium font-body">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          <div className="h-12 w-12" />
        </nav>

        {/* Main content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          <motion.div
            {...fadeBlur}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
            className="liquid-glass rounded-full pl-1.5 pr-4 py-1.5 flex items-center gap-2"
          >
            <span className="bg-white text-black text-xs font-semibold font-body rounded-full px-2.5 py-1">
              New
            </span>
            <span className="text-sm text-white/90 font-body">
              Booking Q3 2026 engagements — limited capacity
            </span>
          </motion.div>

          <motion.div {...fadeBlur} transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }} className="mt-6 max-w-3xl">
            <BlurText
              text="Social Content Crafted to Outlast the Algorithm"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
            />
          </motion.div>

          <motion.p
            {...fadeBlur}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            Korede Socials is a small studio of strategists and creators shaping brand-defining social
            presences for ambitious companies. Sharp storytelling, cinematic content, and campaigns
            you can be proud of.
          </motion.p>

          <motion.div
            {...fadeBlur}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.1 }}
            className="mt-6 flex gap-6 items-center"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium font-body">
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium font-body text-white/90">
              <Play className="h-4 w-4" />
              Watch Showreel
            </button>
          </motion.div>

          <motion.div
            {...fadeBlur}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            className="mt-8 flex gap-4"
          >
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon className="h-5 w-5 text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                72 Hrs
              </div>
              <div className="text-xs text-white/70 font-body mt-2">
                Average Time to First Content Drop
              </div>
            </div>
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon className="h-5 w-5 text-white/80" />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                180+
              </div>
              <div className="text-xs text-white/70 font-body mt-2">
                Brands Grown Across Four Continents
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom trust bar */}
        <motion.div
          {...fadeBlur}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
          className="flex flex-col items-center gap-4 pb-8"
        >
          <div className="liquid-glass rounded-full px-4 py-2 text-xs md:text-sm text-white/80 font-body">
            Trusted by founders, creators, and brand teams worldwide
          </div>
          <div className="flex gap-12 md:gap-16">
            {CLIENT_LOGOS.map((name) => (
              <span
                key={name}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/80"
              >
                {name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
