interface EducationDataType {
  title: string;
  date: string;
  details: string[];
}

export const EducationData: EducationDataType[] = [
  {
    title: "B.Tech, CSE",
    date: "2021-2025",
    details: [
      "Currently pursuing my B.Tech in CSE from Netaji Subhash Engineering College, 8.55 CGPA till now.",
      "Highly active in the domains of Web and AR development.",
    ],
  },

  {
    title: "12th Board, PCMB",
    date: "2017-2019",
    details: ["Finished 12th board exam from Chaltakhali R.G.B.C. Instaitution(H.S.) with 84% marks in PCMB."],
  },

  {
    title: "10th Board",
    date: "2017",
    details: ["Finished 10th board exam from Chaltakhali R.G.B.C. Instaitution(H.S.) with 94.55% marks."],
  },
];
