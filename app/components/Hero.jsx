'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const statContent = {
  stats: [
    {
      number: '24h/24',
      label: 'intervention',
    },
    {
      number: '7j/7',
      label: 'toutes l années',
    },
  ],
}

const heroContent = {
  intro: {
    title: 'Depannage',
    subTitle: 'Express Plomberie',
    description:
      'Une urgence plomberie ? Pas de panique ! Expresse Dépannage est à votre service 24h/24 et 7j/7 pour des interventions rapides et professionnelles partout en Girone.',
    btn: {
      href: '/team',
      label: '🧡 De la team !',
    },
  },
}

const Hero = ({ className }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imgScroll1 = useTransform(scrollYProgress, [0, 1], ['30%', '-20%'])

  return (
    <section className={`${className}`} ref={ref}>
      {/* Image - main - bg-cover  */}
      <div
        className="md-h-[120vh] -mt-[44px] bg-fixed bg-cover flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/bg_home.jpg')`,
        }}
      >
        <div className="px-4 w-full flex justify-center pt-28 md:pt-32 text-center">
          <div className="space-y-8 max-w-4xl">
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {statContent.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: true }}
                  className="text-white"
                >
                  <strong className="text-5xl xl:text-[64px] font-bold leading-tight">
                    {stat.number}
                  </strong>
                  <br />
                  <span className="text-xl font-semibold">{stat.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Titre */}
            {heroContent.intro.title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-white font-bold text-6xl md:text-6xl lg:text-7xl mb-2"
              >
                {heroContent.intro.title}
              </motion.h1>
            )}

            {/* Sous-titre */}
            {heroContent.intro.subTitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-red-500 font-bold text-4xl lg:text-6xl mb-4"
              >
                {heroContent.intro.subTitle}
              </motion.h2>
            )}

            {/* Description */}
            {heroContent.intro.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
                className="text-white text-xl xl:text-2xl mb-8 leading-relaxed max-w-xl mx-auto"
              >
                {heroContent.intro.description}
              </motion.p>
            )}

            {/* Bouton */}
            {heroContent.intro.btn.label && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: true }}
              >
                <Link
                  href={heroContent.intro.btn.href}
                  alt="Team Page redirection"
                  className="transistion-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase py-3 px-5
                    rounded text-[#1D1D1D] bg-gradient-to-r from-red-500 to-red-800 hover:text-white"
                >
                  {heroContent.intro.btn.label}
                </Link>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
