"use client";

import { CalendarIcon, Check, MoveRight, Phone, Mail } from "lucide-react";
import { BiLogoGmail} from "react-icons/bi"
import { useState } from "react";
import { Element } from 'react-scroll'

export const Contact = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Element name="contact">
    <div className="w-full py-20 lg:py-40">
      <div className="container max-w-6xl mx-auto px-3">
        <div className="flex flex-col items-center gap-10">
            <div>
              <h3 className="text-4xl md:text-5xl tracking-tighter max-w-xl font-regular text-center">
                Contacto.
              </h3>
            </div>
            <div>
              <div className="grid lg:grid-cols-2 gap-10 my-5">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col lg:items-start items-center gap-2">
                      <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                        Entre em Contacto
                      </h4>
                      <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                        Para saber mais e solicitar os meus serviços.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:justify-end justify-center flex items-center">
                <div className="flex flex-col gap-4 rounded-lg border border-sky-200 dark:border-sky-900 p-4 lg:p-8 bg-linear-to-r from-sky-50 to-blue-50 bg-linear-to-r dark:from-sky-950 dark:to-blue-950">
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-600 dark:text-gray-300">
                        <Phone className="w-8 h-7">
                        </Phone>
                      </span>
                      <p>
                        932665520
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-gray-600 dark:text-gray-300">
                        <BiLogoGmail className="w-8 h-7">
                        </BiLogoGmail>
                      </span>
                      <p>
                        melquisedequemanuel356@gmail.com
                      </p>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
    </Element>
  );
};