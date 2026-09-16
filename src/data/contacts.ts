interface Contact {
  name: string;
  phone: string;
  email: string;
}

const contacts: Contact[] = [
  {
    name: "Anadi Bhagat",
    phone: "+91 7766999069",
    email: "anadi_bhagat@iitb.ac.in",
  },
  {
    name: "Shivam Vats",
    phone: "+91 9992224763",
    email: "shivamvats@iitb.ac.in",
  },
];

export { contacts };
export type { Contact };
