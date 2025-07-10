export interface Notification {
  id: number;
  type: 'recruitment' | 'examDate' | 'answerKey' | 'result';
  title: string;
  message: string;
  time: string;
  eligibility?: {
    ageLimit: string;
    qualification: string;
    gender: string;
    nationality: string;
  };
  vacancyBreakup?: {
    branch: string;
    seats: number;
  }[];
  selectionProcess?: string[];
  applyLink?: string;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: "recruitment",
    title: "Indian Army Technical Entry Recruitment 2025",
    message:
      "The Indian Army invites applications for technical entry. Candidates must have passed 10+2 with Physics, Chemistry, and Mathematics. The last date to apply is 31st August 2025. Visit the official website for eligibility criteria, selection process, and application link.",
    time: "2h ago",
    eligibility: {
      ageLimit: "16.5 to 19.5 years (as of 01 Jan 2026)",
      qualification: "10+2 with PCM (Physics, Chemistry, Mathematics)",
      gender: "Male only",
      nationality: "Indian",
    },
    vacancyBreakup: [
      { branch: "Technical", seats: 90 },
      { branch: "Non-Technical", seats: 30 },
    ],
    selectionProcess: [
      "Shortlisting based on marks",
      "SSB Interview",
      "Medical Examination",
    ],
    applyLink: "https://joinindianarmy.nic.in",
  },
  {
  id: 11,
  type: "recruitment",
  title: "Indian Army Soldier General Duty (GD) Recruitment 2025",
  message: "Indian Army invites applications for Soldier General Duty (GD) positions. Candidates should be 10th pass and meet the physical standards. Last date to apply is 30th September 2025.",
  time: "4h ago",
  eligibility: {
    ageLimit: "17.5 to 21 years (as of 01 Oct 2025)",
    qualification: "10th pass with 45% marks",
    gender: "Male only",
    nationality: "Indian",
  },
  vacancyBreakup: [
    { branch: "Soldier GD", seats: 2500 },
    { branch: "Soldier Technical", seats: 800 },
    { branch: "Soldier Clerk", seats: 300 }
  ],
  selectionProcess: [
    "Physical Fitness Test",
    "Medical Examination",
    "Written Examination",
    "Document Verification"
  ],
  applyLink: "https://joinindianarmy.nic.in/gd-recruitment",
},
];

export default notifications;
