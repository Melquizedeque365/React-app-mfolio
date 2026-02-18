'use client'

import { Element } from 'react-scroll'
import { SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiReact, SiTypescript,  SiShadcnui, SiVite, SiNextdotjs, SiNodedotjs, SiMysql, SiFirebase, SiLaravel} from "react-icons/si";

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
        <div className="flex flex-col items-center rounded-lg border border-sky-200 dark:border-sky-900 lg:p-4 p-2 justify-center itms-center my-5 gap-3 text-muted-foreground font-size-19 text-4xl lg:text-5xl bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
            <div className="grid lg:grid-cols-5 grid-cols-3 gap-2">
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiHtml5></SiHtml5>
                <p className="text-xl lg:text-3xl">
                  Html
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiCss3></SiCss3>
                <p className="text-xl lg:text-3xl">
                  Css
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiJavascript></SiJavascript>
                <p className="text-xl lg:text-3xl">
                  Javascript
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiBootstrap></SiBootstrap>
                <p className="text-xl lg:text-3xl">
                  Bootstrap
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiTailwindcss></SiTailwindcss>
                <p className="text-xl lg:text-3xl">
                  Tailwind
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiShadcnui></SiShadcnui>
                <p className="text-xl lg:text-3xl">
                  Shadcn
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiReact></SiReact>
                <p className="text-xl lg:text-3xl">
                  React
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiNextdotjs></SiNextdotjs>
                <p className="text-xl lg:text-3xl">
                  Next.js
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiNodedotjs></SiNodedotjs>
                <p className="text-xl lg:text-3xl">
                  Node.js
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiFirebase></SiFirebase>
                <p className="text-xl lg:text-3xl">
                  Firebase
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiTypescript></SiTypescript>
                <p className="text-xl lg:text-3xl">
                  Typescript
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiVite></SiVite>
                <p className="text-xl lg:text-3xl">
                  Vite
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiMysql></SiMysql>
                <p className="text-xl lg:text-3xl">
                  Mysql
                </p>
              </div>
              <div className="flex flex-col gap-2 items-center p-2 border border-sky-200 dark:border-sky-900 rounded-sm">
                <SiLaravel></SiLaravel>
                <p className="text-xl lg:text-3xl">
                  Laravel
                </p>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  </div>
    </Element>
);