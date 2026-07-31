/*
  ============================================================
  DATA FILE — this is the ONLY file you edit to add content.
  ============================================================

  1) To add a NEW SUBJECT:
     - Create a folder inside /resources/  (e.g. resources/chemistry)
     - Add a new object to the `subjects` array below.
     - Pick a `color` for it from the palette list below (or any hex
       you like) — it's used for that subject's card accent and
       resistor-band graphic.

  2) To add a NEW PPT/NOTES to an existing subject:
     - Drop the file inside that subject's folder
       (e.g. resources/maths/unit3.pptx)
     - Add one line to that subject's `files` array below.

  That's it — index.html and subject.html render everything
  automatically from this file. No other HTML needs to change.

  Suggested palette (feel free to reuse or add your own):
    green:  #0F6D4C   coral:  #FF7A5C   violet: #9D6BFF
    gold:   #C98A00   cyan:   #0E8A9B   pink:   #D1447A
*/

const subjects = [
  {
    id: "maths",                 // must match the folder name in /resources/
    title: "Mathematics",
    description: "Algebra, calculus and geometry slides & notes.",
    color: "#0F6D4C",
    files: [
      {
        title: "Unit 1 - Introduction to Algebra",
        ppt: "resources/maths/unit1.pptx",
        notes: "resources/maths/unit1-notes.pdf"
      },
      {
        title: "Unit 2 - Calculus Basics",
        ppt: "resources/maths/unit2.pptx",
        notes: "resources/maths/unit2-notes.pdf"
      }
    ]
  },
  {
    id: "physics",
    title: "Physics",
    description: "Mechanics, thermodynamics and optics.",
    color: "#FF7A5C",
    files: [
      {
        title: "Unit 1 - Laws of Motion",
        ppt: "resources/physics/unit1.pptx",
        notes: "resources/physics/unit1-notes.pdf"
      }
    ]
  },
  {
    id: "digital-electronics",
    title: "Digital Electronics",
    description: "Logic gates, flip-flops and combinational circuits.",
    color: "#9D6BFF",
    files: [
      {
        title: "Unit 1 - Logic Gates",
        ppt: "resources/digital-electronics/unit1.pptx",
        notes: "resources/digital-electronics/unit1-notes.pdf"
      }
    ]
  }

  // Add more subjects here, following the same pattern.
];
