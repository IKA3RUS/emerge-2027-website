import { Link } from "@tanstack/react-router";

import { Button } from "@/components/primitives/Button";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/composites/Sheet";

import { cn } from "@/lib/cn";

import ArrowOutwardIcon from "@material-symbols/svg-700/sharp/arrow_outward-fill.svg?react";
import DensityMediumIcon from "@material-symbols/svg-700/sharp/density_medium-fill.svg?react";

type NavLinkKey =
  | "home"
  | "submissions"
  | "workshops"
  | "dates"
  | "venue"
  | "committee"
  | "register";

const NAV_LINK_ROUTES: Record<Exclude<NavLinkKey, "register">, string> = {
  home: "/",
  submissions: "/submissions",
  workshops: "/workshops",
  dates: "/dates",
  venue: "/venue",
  committee: "/committee",
};

const NAV_LINK_LABELS: Record<NavLinkKey, string> = {
  home: "Home",
  submissions: "Submissions",
  workshops: "Workshops",
  dates: "Key Dates",
  venue: "Venue",
  committee: "Committee",
  register: "Register",
};

const DEFAULT_NAV_LINKS: NavLinkKey[] = [
  "home",
  "submissions",
  "workshops",
  "dates",
  "venue",
  "committee",
  "register",
];

function LargeScreenNav({
  links = DEFAULT_NAV_LINKS,
}: {
  links?: NavLinkKey[];
}) {
  return (
    <nav className="hidden h-full items-center gap-6 xl:flex">
      {links.map((link) =>
        link === "register" ? (
          <Button
            key={link}
            size="small"
            disabled
            className="disabled:bg-slate-200 disabled:text-slate-400"
          >
            {NAV_LINK_LABELS.register}
            <div className="bg-slate-300 px-1 text-slate-400">
              Opens 16 Dec
            </div>
            <ArrowOutwardIcon className="size-4 fill-slate-400" />
          </Button>
        ) : (
          <Link key={link} to={NAV_LINK_ROUTES[link]} className="uppercase">
            {NAV_LINK_LABELS[link]}
          </Link>
        ),
      )}
    </nav>
  );
}

function SmallScreenNav({
  links = DEFAULT_NAV_LINKS,
}: {
  links?: NavLinkKey[];
}) {
  const showRegister = links.includes("register");
  const linkItems = links.filter(
    (link): link is Exclude<NavLinkKey, "register"> => link !== "register",
  );

  return (
    <div className="flex xl:hidden">
      <Sheet>
        <SheetTrigger className="rotate-0 bg-black p-1 transition-[rotate] duration-300 hover:cursor-pointer data-popup-open:rotate-180">
          <DensityMediumIcon className="size-6 fill-white mix-blend-difference" />
        </SheetTrigger>
        <SheetContent side="top" className="gap-9 border-8 border-black p-9">
          <SheetHeader>
            <SheetTitle>
              <SheetClose
                render={
                  <Link to="/">
                    <img
                      src="/images/common/emerge-2027-logo.png"
                      className="h-12"
                    />
                  </Link>
                }
              />
            </SheetTitle>
          </SheetHeader>
          <nav className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-6">
              {linkItems.map((link) => (
                <SheetClose
                  key={link}
                  render={
                    <Link
                      to={NAV_LINK_ROUTES[link]}
                      className="border-t border-slate-200 pt-6 uppercase"
                    >
                      {NAV_LINK_LABELS[link]}
                    </Link>
                  }
                />
              ))}
            </div>

            {showRegister && (
              <SheetClose
                render={
                  <Button
                    disabled
                    className="disabled:bg-slate-200 disabled:text-slate-400"
                  >
                    {NAV_LINK_LABELS.register}
                    <div className="bg-slate-300 px-1 text-slate-400">
                      Opens 16 Dec
                    </div>
                    <ArrowOutwardIcon className="size-4 fill-slate-400" />
                  </Button>
                }
              />
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Header({
  className,
  largeScreenNavLinks,
  smallScreenNavLinks,
}: {
  className?: string;
  largeScreenNavLinks?: NavLinkKey[];
  smallScreenNavLinks?: NavLinkKey[];
}) {
  return (
    <div
      className={cn(
        "absolute z-10 mx-auto flex h-25 min-h-25 w-full max-w-[1920px] items-center justify-end gap-4 px-13 transition-[padding] sm:static sm:justify-between sm:px-4 md:px-13",
        className,
      )}
    >
      <Link to="/" className="hidden sm:block">
        <img src="/images/common/emerge-2027-logo.png" className="h-12" />
      </Link>
      <LargeScreenNav links={largeScreenNavLinks} />
      <SmallScreenNav links={smallScreenNavLinks} />
    </div>
  );
}

export { Header };
