import type { CommitteeMember } from "@/data/committee";

import EmergeLogoIcon from "@/assets/common/emerge-2027-logo.svg?react";

type CommitteeMemberCardProps = Pick<
  CommitteeMember,
  "name" | "role" | "email"
>;

function CommitteeMemberCard({ name, role, email }: CommitteeMemberCardProps) {
  return (
    <div className="z-100 flex w-full flex-col gap-4 bg-slate-300 p-8 transition-[padding] select-none xl:gap-8">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-medium text-black lowercase transition-[font-size] xl:text-2xl">
            {name}
          </span>
          <a
            href={`mailto:${email}`}
            className="h-6 text-emerge-blue underline-offset-2 select-text hover:underline"
          >
            {email}
          </a>
          <span className="text-slate-500">{role}</span>
        </div>
        <EmergeLogoIcon className="mt-2.5 size-4 fill-emerge-blue xl:mt-1.5 xl:size-5" />
      </div>
    </div>
  );
}

export { CommitteeMemberCard };
