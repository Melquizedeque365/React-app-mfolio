'use client'
import { Badge } from "@/components/ui/badge";
import Image from "next/image"
import { Element } from 'react-scroll'

export const About = () => (
  <Element name="about">
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto px-3">
      <div className="flex flex-col items-center gap-10">
        <div>
          <h2 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
              Sobre.
          </h2>
        </div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 lg:items-center">
        <div className="p-10 rounded-lg flex-1">
          <img src="/photo.jpg" alt="" className="rounded-md w-full max-h-105" />
        </div>
        
        <div className="flex gap-4 pl-0 lg:pl-10 flex-col flex-1">
          <div className="flex gap-2 flex-col p-2">
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground">
              Sou Licenciado, no curso de Ensino de Electrônica e Telecomunicações pela Universade Agostinho Neto.
            </p>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground">
              Desenvolvedor web, fiz o curso de Programação Web no CFITEL em 2023, e até o momento tenho trabalhado no desenvolvimento de Aplicações Web Front-end e Back-end.
            </p>
            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground">
              Designer Gráfico, em 2022 participei no treinamento de Design Gráfico e Multimédia, gosto, e tem sido gratificante até agora dar vida a projectos gráficas.
            </p>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  </div>
    </Element>
);