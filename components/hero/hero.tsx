import { MoveRight, PhoneCall} from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const Hero1 = () => (
  <div className="w-full pt-8  ">
    <div className="container mx-auto">
      <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
        
        <div className="flex gap-4 flex-col">
          <Avatar>
          <AvatarImage src="about-s.jpg" />
          <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
            Olá. Eu sou Melquizedeque
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Programador Web | Desinger Gráfico.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          
          <Button size="lg" className="gap-4 bg-linear-to-r from-blue-500 to-sky-500 ">
            Saiba Mais <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  </div>
);