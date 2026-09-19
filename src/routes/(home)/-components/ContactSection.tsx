import { committee } from "@/data/committee";

import { ContactCard } from "./ContactCard";

function ContactSection() {
  const contacts = committee.filter((member) => member.contact);

  return (
    <div
      id="contact"
      className="mx-auto mt-40 flex w-full scroll-mt-25 flex-col items-center gap-8 bg-slate-200 p-4 lg:p-12"
    >
      <div className="mx-auto flex w-full max-w-[1920px] flex-col gap-3">
        <div className="w-full">
          <h2 className="text-lg font-medium text-emerge-blue select-none">
            CONTACT
          </h2>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4 border-t border-emerge-blue pt-4 md:flex-row xl:pt-12">
          {contacts.map((member) => (
            <ContactCard key={member.email} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ContactSection };
