import ArrowUpRight from"../assets/icons/arrow-up-right.svg";
const footerLink = [
  {
    title:"Linkdin",
    href:"https://www.linkedin.com/in/sarmad-shamim-bb84a9294/",
  },
  {
    title:"Github",
    href:"https://github.com/sarmadshamim",
  },
  {
    title:"Email",
    href:"sarmadshamim005@gmail.com",
  },
  {
    title:"Instagram",
    href:"https://www.google.co.in/",
  },
]


export const Footer = () => {

  return <footer className="relative -z-10 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">&copy; 2024. All rights reserved.</div>
        </div>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLink.map((link) =>(
            <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRight className="size-4"/>
            </a>
          ))}
        </nav>
        <div>
      </div>
    </div>
  </footer>
};
