'use client'
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight,Facebook, Instagram, Linkedin } from "lucide-react";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMysql, SiNodedotjs, SiBootstrap} from "react-icons/si";
import {  } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Element } from 'react-scroll'
import Link from "next/link";
import { Link as ScrollLink } from 'react-scroll'


export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Olá.", "Hello."],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <Element name="home">
    <div className="w-full pt-30 lg:pt-10" >
      <div className="container mx-auto px-2">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          
          <div className="flex gap-4 flex-col">
            
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>
            <p className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
                Eu sou Melquizedeque
            </p>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                Programador Web | Desinger Gráfico.
            </p>
            <div className="flex justify-center gap-2 text-muted-foreground font-size-19 text-3xl">
              <Link href="https://www.facebook.com/melquisedequemanuel.antoniovava">
                <span><Facebook></Facebook></span>
              </Link>
              <Link href="https://www.instagram.com/melquizedeque.ma">
                <span><Instagram></Instagram></span>
              </Link>
              <Link href="https://ao.linkedin.com/in/melquizedeque-ant%C3%B3nio-394537268">
                <span><Linkedin></Linkedin></span>
              </Link>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 bg-linear-to-r from-sky-500 to-blue-500">
              <ScrollLink 
                to="about"
                smooth={true}
                duration={500}
                className="flex items-center gap-3"
              >
                Saiba Mais <MoveRight className="w-4 h-4" />
              </ScrollLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
};
