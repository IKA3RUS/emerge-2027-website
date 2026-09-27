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
    email: "savinash@iitb.ac.in",
    contact: false,
  },
  {
    name: "Supradip Das",
    role: "General Chair",
    email: "supradip.das@iitg.ac.in",
    contact: false,
  },
  {
    name: "Venkatesh Rajamanickam",
    role: "General Chair",
    email: "venkatra@iitb.ac.in",
    contact: false,
  },
  {
    name: "Purba Joshi",
    role: "Review Committee Chair",
    email: "purba_joshi@iitb.ac.in",
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
    email: "st@iitd.ac.in",
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
  {
    name: "Abhishek Rein",
    role: "Student Volunteer",
    email: "ika3rus@iitb.ac.in",
    contact: false,
  },
  {
    name: "Dhanusha S",
    role: "Student Volunteer",
    email: "25m2222@iitb.ac.in",
    contact: false,
  },
  {
    name: "Dorothy Goswami",
    role: "Student Volunteer",
    email: "dorothy@iitg.ac.in",
    contact: false,
  },
  {
    name: "Weskerland Lyngkhoi",
    role: "Student Volunteer",
    email: "w.lyngkhoi@iitg.ac.in",
    contact: false,
  },
  {
    name: "Ashita Taneja",
    role: "Student Volunteer",
    email: "m25lds007@iitj.ac.in",
    contact: false,
  },
];

export { committee };
export type { CommitteeMember };
