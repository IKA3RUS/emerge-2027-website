interface CommitteeMember {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  contact: boolean;
}

const committee: CommitteeMember[] = [
  {
    name: "Avinash Shende",
    role: "General Chair",
    contact: false,
  },
  {
    name: "Supradip Das",
    role: "General Chair",
    contact: false,
  },
  {
    name: "Venkatesh Rajamanickam",
    role: "General Chair",
    contact: false,
  },
  {
    name: "Purba Joshi",
    role: "Review Committee Chair",
    contact: false,
  },
  {
    name: "Gaurav Vaidya",
    role: "Review Committee Chair",
    contact: false,
  },
  {
    name: "Shoubhik Dutta Roy",
    role: "Review Committee Chair",
    contact: false,
  },
  {
    name: "Saurabh Tiwari",
    role: "Proceedings Chair",
    contact: false,
  },
  {
    name: "Shivam Vats",
    role: "Technical Chair",
    phone: "+91 9992224763",
    email: "shivamvats@iitb.ac.in",
    contact: true,
  },
  {
    name: "Anadi Bhagat",
    role: "Technical Chair",
    phone: "+91 7766999069",
    email: "anadi_bhagat@iitb.ac.in",
    contact: true,
  },
];

export { committee };
export type { CommitteeMember };
