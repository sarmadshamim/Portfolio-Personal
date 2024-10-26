"use client"
import { SectionHeader } from "../components/SectionHeader";
import { Card } from "../components/Card";
import { CardHeader } from "../components/CardHeader";
import bookImage from "../assets/images/book-cover.png";
import Image from "next/image";
import JavascripIcon from "../assets/icons/square-js.svg";
import HTMLIcon from "../assets/icons/html5.svg";
import CssIcon from "../assets/icons/css3.svg";
import ReactIcon from "../assets/icons/react.svg";
import ChromIcon from "../assets/icons/chrome.svg";
import GithubIcon from "../assets/icons/github.svg";
import mapImage from "../assets/images/map.png";
import smileMemoji from "../assets/images/memoji-smile.png";
import { ToolboxItem } from "../components/ToolboxItem";
import { motion } from "framer-motion";
import { useRef } from "react";
const toolboxItem = [
  {
    title:'JavaScript',
    iconType:JavascripIcon,
  },
  {
    title:'HTML5',
    iconType:HTMLIcon,
  },
  {
    title:'CSS3',
    iconType:CssIcon,
  },
  {
    title:'React',
    iconType:ReactIcon,
  },
  {
    title:'GitHub',
    iconType:GithubIcon,
  },
  {
    title:'Linux',
    iconType:ChromIcon,
  },
  {
    title:'Chrome',
    iconType:ChromIcon,
  },
]
const hobbies = [
  {
    title:'Gaming',
    emoji:'🎮',
    left:"5%",
    top:"5%"
  },
  {
    title:'Exploring',
    emoji:'⛰️',
    left:"50%",
    top:"5%"
  },
  {
    title:'Reading',
    emoji:'📖',
    left:"10%",
    top:"35%"
  },
  {
    title:'Tracking',
    emoji:'🧐',
    left:"35%",
    top:"40%"
  },
  {
    title:'Badminton',
    emoji:'💪',
    left:"70%",
    top:"40%"
  },
  {
    title:'Cricket',
    emoji:'🏏🏆',
    left:"5%",
    top:"65%"
  },
  {
    title:'Fitness',
    emoji:'🏋🏻‍♀️',
    left:"45%",
    top:"70%"
  },

]
export const AboutSection = () => {
  const constraintRef = useRef((null));
  return (
  <div className="py-20 lg:py-28">
    <div className="container">
  <SectionHeader eyebrow="About me" title="A Glimpse Into My World" description="Lear more aabout who I am, What I do, and what inspires me"/>
  <div className="mt-20 flex flex-col gap-8">
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
    <Card className="h-[320px] md:col-span-2 lg:col-span-1">
      <CardHeader title='My Reads' description='Explore the books shaping my perspectiv.' />
      <div className="w-40 mx-auto mt-2 md:mt-0">
      <Image src={bookImage} alt="Book cover" />
      </div>
    </Card>
    <Card className="h-[320px] md:col-span-3 lg:col-span-2">
    <CardHeader title='My Toolbox' description='Explore the technology and tools I use to craft exceptional digital experiences.' className="" />
      <ToolboxItem toolboxItem = {toolboxItem} className="" itemsWrapperClassName="animate-move-left [animation-duration:20s]"/>
      <ToolboxItem
       toolboxItem = {toolboxItem}
       className="mt-6"
       itemsWrapperClassName="animate-move-right [animation-duration:15s] "/*it is to handle later*/ />
    </Card>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
    <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
    <CardHeader title='Beyond the Code' description='Explore my interest and hobbies beyond the digital realm.' className="px-6 py-6" />
      <div className="relative flex-1" ref = {constraintRef}>
        {hobbies.map(hobby => (
          <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
          style={{
            left:hobby.left,
            top:hobby.top,
          }}
          drag
          dragConstraints={constraintRef}
          >
            <span className="font-medium text-gray-950">{hobby.title}</span>
            <span>{hobby.emoji}</span>
          </motion.div>
        ))}
      </div>
    </Card>
    <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
        <Image className="h-full w-full object-cover object-left-top" src={mapImage} alt="map" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
        <Image className="siz-20" src={smileMemoji} alt="smiling memoji" />
        </div>
        </Card>
    </div>
  </div>
  </div>
  </div>
  )
};
