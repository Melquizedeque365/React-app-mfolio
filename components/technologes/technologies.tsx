'use client'

import { Element } from 'react-scroll'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiTypescript,  SiShadcnui, SiVite, SiNextdotjs, SiNodedotjs, SiMysql, SiFirebase} from "react-icons/si";

export const Tecnologias = () => (
  <Element name="technologies">
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-3">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h2 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Tecnologias.
          </h2>
        </div>
        <div className="flex flex-col items-center rounded-lg border-1 border-sky-200 dark:border-sky-900 p-4 justify-center itms-center my-5 gap-3 text-muted-foreground font-size-19 text-4xl lg:text-5xl bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
            <div className="flex gap-2">
              <SiHtml5></SiHtml5>
              <SiCss3></SiCss3>
              <SiJavascript></SiJavascript>
              <SiBootstrap></SiBootstrap>
              <SiTailwindcss></SiTailwindcss>
              <SiShadcnui></SiShadcnui>
              <SiReact></SiReact>
            </div>
            <div className="flex gap-2">
              <SiTypescript></SiTypescript>
              <SiVite></SiVite>
              <SiNextdotjs></SiNextdotjs>
              <SiNodedotjs></SiNodedotjs>
              <SiFirebase></SiFirebase>
              <SiMysql></SiMysql>
            </div>
        </div>
      </div>
      
    </div>
  </div>
    </Element>
);