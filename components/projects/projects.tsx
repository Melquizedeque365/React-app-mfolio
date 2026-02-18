'use client'
import { MoveRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Element } from 'react-scroll'
import Link from "next/link";


export const Projects = () => (
  <Element name="projects">
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-3">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-center">
          <div className="">
            <h2 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Projectos.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
          <div className="flex flex-col gap-2 rounded-lg border border-sky-200 dark:border-sky-900 p-4 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
            <div className="rounded-lg mb-2 ">
              <img src="/project-I.png" alt="project-I" className="w-full rounded-lg h-60" />
            </div>
            <h3 className="text-xl tracking-tight">Exemplomstech.</h3>
            <p className="text-muted-foreground text-base pb-10">
              É um projecto de portfólio desenvolvido com React, shadcn/ui, Next.js.
            </p>
            <Button size="lg" className="gap-4 bg-linear-to-r from-sky-500 to-blue-500">
              <Link href="https://exemplomstech-project.vercel.app/" className="flex justify-center gap-4 items-center">
                Saiba Mais <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-sky-200 dark:border-sky-900 p-4 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
            <div className="rounded-lg mb-2">
              <img src="/project-II.png" alt="project-II" className="w-full rounded-lg h-60" />
            </div>
            <h3 className="text-xl tracking-tight">Msimple.</h3>
            <p className="text-muted-foreground text-base pb-10">
              É um projecto desenvolvido com Wordpress, que faz uma descrição da empresa modelo Msimple.
            </p>
              <Button size="lg" className="w-full gap-4 bg-linear-to-r from-sky-500 to-blue-500">
                <Link href="https://projectapp08.wordpress.com/" className="flex justify-center gap-4 items-center">
                  Saiba Mais <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
          </div>
          <div className="flex flex-col gap-2 rounded-lg border border-sky-200 dark:border-sky-900 p-4 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
            <div className="rounded-lg mb-2">
              <img src="/applaravel-production.png" alt="logo-s" className="w-full rounded-lg h-60 w-full" />
            </div>
            <h3 className="text-xl tracking-tight">Applaravel.</h3>
            <p className="text-muted-foreground text-base pb-10">
              É um projecto de estudo do funcionamento do JWT no Laravel 12 com SqLite.
            </p>
              <Button size="lg" className="w-full gap-4 bg-linear-to-r from-sky-500 to-blue-500">
                <Link href="https://applaravel-production-f452.up.railway.app/api/create" className="flex justify-center gap-4 items-center">
                  Saiba Mais <MoveRight className="w-4 h-4" />
                </Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Element>
);