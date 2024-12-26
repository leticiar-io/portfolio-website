import { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide, scale } from './anim'

// Tipagem para as propriedades passadas para o componente
interface LinkProps {
  data: {
    title: string
    href: string
    index: number
  }
  isActive: boolean
  setSelectedIndicator: (href: string) => void
}

const Index: FC<LinkProps> = ({ data, isActive, setSelectedIndicator }) => {
  const { title, href, index } = data

  return (
    <motion.div 
      className="relative flex items-center " 
      onMouseEnter={() => { setSelectedIndicator(href) }} 
      custom={index} 
      variants={slide} 
      initial="initial" 
      animate="enter" 
      exit="exit"
    >
      <motion.div 
        variants={scale} 
        animate={isActive ? "open" : "closed"} 
        className="absolute left-[-30px] w-[10px] h-[10px] bg-white rounded-full"
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  )
}

export default Index