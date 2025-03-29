export const tabs = [
  { title: "NTA Level 7 Year 1", name: "NTA Level 7 Year 1" },
  { title: "NTA Level 7 Year 2", name: "NTA Level 7 Year 2" },
  { title: "NTA Level 8 Year 1", name: "NTA Level 8 Year 1" },
];

// Function to determine grade based on marks (assuming max marks is 60)
const getRandomGrade = (marks: number) => {
  const percentage = (marks / 60) * 100; // Assuming max score is 60

  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  if (percentage >= 50) return "D";
  return "E"; // Below 50%
};

// Add grades to data
export const data = [
  {
    id: 1,
    course: "Introduction to Social Psychology",
    code: "CYU08106",
    credits: 6,
    assignments: ["T1 - 5.0", "A1 - 6.0", "A2 - 7.0", "A3 - 7.0"],
    marks: 25.0,
    grade: getRandomGrade(25.0),
  },
  {
    id: 2,
    course: "Vulnerability Analysis",
    code: "CYU08102",
    credits: 10,
    assignments: ["T1 - 13.0", "A1 - 16.0"],
    marks: 29.0,
    grade: getRandomGrade(29.0),
  },
  {
    id: 3,
    course: "Wireless Networking",
    code: "CYU08105",
    credits: 8,
    assignments: ["A1 - 33.0"],
    marks: 33.0,
    grade: getRandomGrade(33.0),
  },
  {
    id: 4,
    course: "IT Project Management",
    code: "CYU08101",
    credits: 12,
    assignments: ["T1 - 8.8", "A1 - 14.0"],
    marks: 22.8,
    grade: getRandomGrade(22.8),
  },
  {
    id: 5,
    course: "Network Management and Administration",
    code: "CYU08103",
    credits: 10,
    assignments: ["A1 - 11.0", "A2 - 15.0", "T1 - 0.0"],
    marks: 26.0,
    grade: getRandomGrade(26.0),
  },
  {
    id: 6,
    course: "Data Structure and Algorithms",
    code: "CYU08104",
    credits: 12,
    assignments: ["A1 - 14.0", "A2 - 10.0", "T1 - 7.0"],
    marks: 31.0,
    grade: getRandomGrade(31.0),
  },
];

export const data2 = [
  {
    id: 7,
    course: "Kubernetes and Docker Essentials",
    code: "CYU08107",
    credits: 8,
    assignments: ["T1 - 10.0", "A1 - 15.0", "A2 - 12.0"],
    marks: 37.0,
    grade: getRandomGrade(37.0),
  },
  {
    id: 8,
    course: "Advanced Kubernetes and Cloud Native Applications",
    code: "CYU08108",
    credits: 10,
    assignments: ["T1 - 12.0", "A1 - 18.0", "A2 - 14.0"],
    marks: 44.0,
    grade: getRandomGrade(44.0),
  },
  {
    id: 9,
    course: "Machine Learning Fundamentals",
    code: "CYU08109",
    credits: 12,
    assignments: ["T1 - 14.0", "A1 - 20.0", "A2 - 18.0"],
    marks: 52.0,
    grade: getRandomGrade(52.0),
  },
  {
    id: 10,
    course: "Deep Learning and Neural Networks",
    code: "CYU08110",
    credits: 12,
    assignments: ["T1 - 16.0", "A1 - 22.0", "A2 - 20.0"],
    marks: 58.0,
    grade: getRandomGrade(58.0),
  },
];

export const results = [...data,...data2]