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

function LargeScreenNav() {
  return (
    <nav className="hidden h-full items-center gap-6 xl:flex">
      <Link to="/" className="uppercase">
        Home
      </Link>
      <Link to="/submissions" className="uppercase">
        Submissions
      </Link>
      <Link to="/workshops" className="uppercase">
        Workshops
      </Link>
      <Link to="/dates" className="uppercase">
        Key Dates
      </Link>
      <Link to="/venue" className="uppercase">
        Venue
      </Link>
      <Link to="/committee" className="uppercase">
        Committee
      </Link>

      <Button
        size="small"
        disabled
        className="disabled:bg-slate-200 disabled:text-slate-400"
      >
        Register
        <div className="bg-slate-300 px-1 text-slate-400">Opens 16 Dec</div>
        <ArrowOutwardIcon className="size-4 fill-slate-400" />
      </Button>
    </nav>
  );
}

function SmallScreenNav() {
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
              <SheetClose
                render={
                  <Link
                    to="/"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Home
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    to="/call-for-papers"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Submissions
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    to="/workshops"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Workshops
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    to="/dates"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Key Dates
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    to="/venue"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Venue
                  </Link>
                }
              />
              <SheetClose
                render={
                  <Link
                    to="/committee"
                    className="border-t border-slate-200 pt-6 uppercase"
                  >
                    Committee
                  </Link>
                }
              />
            </div>

            <SheetClose
              render={
                <Button
                  disabled
                  className="disabled:bg-slate-200 disabled:text-slate-400"
                >
                  Register
                  <div className="bg-slate-300 px-1 text-slate-400">
                    Opens 16 Dec
                  </div>
                  <ArrowOutwardIcon className="size-4 fill-slate-400" />
                </Button>
              }
            />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function Header({ className }: { className?: string }) {
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
      <LargeScreenNav />
      <SmallScreenNav />
    </div>
  );
}

export { Header };
