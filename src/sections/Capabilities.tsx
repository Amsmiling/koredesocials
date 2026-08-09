import FadingVideo from '../components/FadingVideo'
import { ImageIcon, MovieIcon, LightbulbIcon } from '../components/icons'

interface Capability {
  icon: (props: { className?: string }) => JSX.Element
  title: string
  tags: string[]
  body: string
}

const CAPABILITIES: Capability[] = [
  {
    icon: ImageIcon,
    title: 'Content',
    tags: ['Reels & Shorts', 'Photography', 'Copywriting', 'Motion Graphics'],
    body: 'We shoot, edit, and write scroll-stopping content that feels unmistakably yours — visual systems, caption voice, and campaign concepts that scale without losing soul.',
  },
  {
    icon: MovieIcon,
    title: 'Strategy',
    tags: ['Content Calendars', 'Community', 'Platform Strategy', 'Scheduling'],
    body: 'Full-funnel social management built on real platform know-how. Consistent, on-brand, and instrumented — with a calendar your team will enjoy owning long after launch.',
  },
  {
    icon: LightbulbIcon,
    title: 'Growth',
    tags: ['Paid Social', 'Analytics', 'Influencer', 'Retention'],
    body: 'Posting is the starting line. We partner with your team on paid amplification, reporting, and iteration loops that turn a great feed into a compounding audience.',
  },
]

export default function Capabilities() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
        <div className="mb-auto">
          <div className="text-sm font-body text-white/80 mb-6">// Capabilities</div>
          <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px]">
            Social craft,
            <br />
            end to end
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CAPABILITIES.map(({ icon: Icon, title, tags, body }) => (
            <div key={title} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1" />

              <div>
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
