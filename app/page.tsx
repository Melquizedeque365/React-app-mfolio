
import { Header } from "@/components/header/header"
import { Hero } from "@/components/hero-a/hero-a"
import { About } from "@/components/about/about"
import { Tecnologias } from "@/components/technologes/technologies"
import { Projects } from "@/components/projects/projects"
import { Contact } from "@/components/contacts/contacts"
import { Footer } from "@/components/footer/footer"

export default function Home() {
  return (
    <div className="bg-linear-to-r from-blue-50 to-sky-50 bg-linear-to-r dark:from-blue-950 dark:to-sky-950">
      <Header></Header>
      <main>
        <Hero></Hero>
        <section>
          <About></About>
        </section>
        <section>
          <Tecnologias></Tecnologias>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section>
          <Contact></Contact>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}
