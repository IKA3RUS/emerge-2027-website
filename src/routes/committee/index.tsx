import { createFileRoute } from "@tanstack/react-router";

import { CMTAcknowledgement } from "@/components/layout/CMTAcknowledgement";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

import { committee } from "@/data/committee";
import type { CommitteeMember } from "@/data/committee";

import { CommitteeMemberCard } from "./-components/CommitteeMemberCard";

export const Route = createFileRoute("/committee/")({
  component: RouteComponent,
});

function groupByRole(members: CommitteeMember[]) {
  const groups = new Map<string, CommitteeMember[]>();
  for (const member of members) {
    const group = groups.get(member.role) ?? [];
    group.push(member);
    groups.set(member.role, group);
  }
  return [...groups.entries()];
}

function RouteComponent() {
  const groups = groupByRole(committee);

  return (
    <div className="flex min-h-screen w-full flex-col p-2 sm:pt-0">
      <Header />

      <main className="flex w-full flex-1 flex-col gap-2 py-28 sm:pt-0">
        {groups.map(([role, members]) => (
          <div key={role} className="mx-auto w-full bg-slate-200">
            <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-3 p-4 lg:p-12">
              <h2 className="text-lg font-medium text-emerge-blue uppercase select-none">
                {members.length > 1 ? `${role}s` : role}
              </h2>
              <div className="grid w-full grid-cols-1 justify-items-center gap-4 border-t border-emerge-blue pt-4 sm:grid-cols-2 xl:grid-cols-3 xl:pt-12">
                {members.map((member) => (
                  <CommitteeMemberCard
                    key={member.name}
                    name={member.name}
                    role={member.role}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>

      <Footer />
      <CMTAcknowledgement />
    </div>
  );
}
