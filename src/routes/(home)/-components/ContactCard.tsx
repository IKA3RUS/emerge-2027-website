import type { CommitteeMember } from "@/data/committee";

import CallIcon from "@material-symbols/svg-700/sharp/call-fill.svg?react";
import MailIcon from "@material-symbols/svg-700/sharp/mail-fill.svg?react";

import EmergeLogoIcon from "@/assets/common/emerge-2027-logo.svg?react";

type ContactCardProps = Pick<
  CommitteeMember,
  "name" | "role" | "phone" | "email"
>;

function ContactCard({ name, role, phone, email }: ContactCardProps) {
  return (
    <div className="z-100 flex w-full flex-col gap-4 bg-emerge-blue p-8 shadow-sm ring-1 shadow-slate-900/50 ring-blue-800/50 ring-offset-[-1] transition-[width,padding] select-none sm:w-80 xl:w-140 xl:gap-8 xl:p-20">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xl font-medium text-white lowercase transition-[font-size] xl:text-2xl">
            {name}
          </span>
          <span className="text-white/50">{role}</span>
        </div>
        <EmergeLogoIcon className="-mt-5 size-4 fill-white xl:size-5" />
      </div>
      {(phone || email) && (
        <div className="flex flex-col items-start gap-0">
          {phone && (
            <a href={`tel:${phone}`} className="flex items-center gap-2">
              <CallIcon className="size-4 fill-white" />
              <span className="text-amber-400">{phone}</span>
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} className="flex items-center gap-2">
              <MailIcon className="size-4 fill-white" />
              <span className="text-amber-400">{email}</span>
            </a>
          )}
        </div>
      )}

      <div className="flex items-center gap-4">
        <img
          src="/images/common/iit-bombay-logo-dark.png"
          alt="IIT Bombay"
          className="h-9"
          draggable={false}
        />
        <img
          src="/images/common/idc-logo-dark.png"
          alt="IDC School of Design"
          className="h-4"
          draggable={false}
        />
      </div>
    </div>
  );
}

export { ContactCard };
