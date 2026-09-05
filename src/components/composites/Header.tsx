import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/cn";

function Header({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-25 items-center justify-between gap-4 pr-8",
        className,
      )}
    >
      <Link to="/">
        <img src="/images/common/emerge-2027-logo.png" className="h-12" />
      </Link>
      <nav className="hidden h-full items-center gap-4 md:flex">
        <Link to="/" hash="theme">
          THEME
        </Link>
        <Link to="/" hash="schedule">
          SCHEDULE
        </Link>
        <Link to="/" hash="venue">
          VENUE
        </Link>
        <Link to="/call-for-submissions">CALL FOR SUBMISSIONS</Link>
      </nav>
    </div>
  );
}

export { Header };
