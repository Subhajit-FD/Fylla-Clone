import Container from "../components/Container";
import Logo from "../components/Logo";
import Link from "../components/Link";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="border-t">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-[2fr_auto_1fr_1fr_1fr]">
          <div className="space-y-6 border-b pb-6 md:border-0 md:pb-0">
            <div className="flex items-center gap-4">
              <Logo />
            </div>
            <div className="space-y-1 text-sm text-foreground/80">
              <p>Main Street. 1</p>
              <p>22222 Berlin</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--foreground)] text-sm uppercase text-foreground">
                in
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--foreground)] text-sm uppercase text-foreground">
                pi
              </span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--foreground)] text-sm uppercase text-foreground">
                tw
              </span>
            </div>
          </div>

          <div className="hidden md:block w-px " />

          <div className="space-y-4 border-b pb-6 md:border-0 md:pb-0 md:border-l-2 md:pl-8">
            <p className="text-lg font-accent">Pages</p>
            <ul className="space-y-3 text-sm uppercase text-foreground/80">
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Studio</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
            <Button className="uppercase text-sm px-6">more templates</Button>
          </div>

          <div className="space-y-4 border-b pb-6 md:border-0 md:pb-0">
            <p className="text-lg font-accent">CMS</p>
            <ul className="space-y-3 text-sm uppercase text-foreground/80">
              <li>
                <Link>Work</Link>
              </li>
              <li>
                <Link>Work Single</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Blog Single</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-lg font-accent">Utility Pages</p>
            <ul className="space-y-3 text-sm uppercase text-foreground/80">
              <li>
                <Link>404 Error Page</Link>
              </li>
              <li>
                <Link>Licensing</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-6">
          <div className="flex flex-col gap-3 text-sm uppercase text-foreground/80 md:flex-row md:items-center md:justify-between text-center md:text-start">
            <p className="font-accent text-foreground/90">© made by Subhajit Choudhury</p>
            <div className="flex flex-wrap items-center gap-6 justify-center">
              <Link>Privacy</Link>
              <Link>Imprint</Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;