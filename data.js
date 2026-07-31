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
       (`notes` is optional — omit it if there's no notes file yet.)

  That's it — index.html and subject.html render everything
  automatically from this file. No other HTML needs to change.

  Suggested palette (feel free to reuse or add your own):
    green:  #0F6D4C   coral:  #FF7A5C   violet: #9D6BFF
    gold:   #C98A00   cyan:   #0E8A9B   pink:   #D1447A
*/

const subjects = [
  {
    id: "automatic-control-system",       // must match the folder name in /resources/
    title: "Automatic Control System",
    description: "Transfer functions, block diagrams, signal flow graphs and system models.",
    color: "#C98A00",
    files: [
      {
        title: "Analogous System",
        ppt: "resources/Automatic-Control-System/ANALOGOUS SYSTEM.pptx"
      },
      {
        title: "Block Diagram Representation",
        ppt: "resources/Automatic-Control-System/BLOCK DIAGRAM REPRESENTATION.pptx"
      },
      {
        title: "Concept of Pole - Zero",
        ppt: "resources/Automatic-Control-System/Concept of Pole - Zero.pptx"
      },
      {
        title: "Introduction to Control Systems",
        ppt: "resources/Automatic-Control-System/INTRODUCTION TO CONTROL SYSTEMS_21.08.20(New).pptx"
      },
      {
        title: "Liquid Level System",
        ppt: "resources/Automatic-Control-System/Liquid Level System.pptx"
      },
      {
        title: "Liquid Level System (Mech. Engg. EC217)",
        ppt: "resources/Automatic-Control-System/Liquid Level System_Mech. Engg. EC217.pptx"
      },
      {
        title: "Pneumatic System",
        ppt: "resources/Automatic-Control-System/Pneumatic System.pptx"
      },
      {
        title: "Review of Laplace Transform",
        ppt: "resources/Automatic-Control-System/Review of Laplace Transform.pptx"
      },
      {
        title: "Signal Flow Graph (SFG)",
        ppt: "resources/Automatic-Control-System/SFG.pptx"
      },
      {
        title: "Thermal System",
        ppt: "resources/Automatic-Control-System/Thermal System.pptx"
      },
      {
        title: "Thermal System (Mech. Engg. EC217)",
        ppt: "resources/Automatic-Control-System/Thermal System_Mech. Engg. EC217.pptx"
      },
      {
        title: "Thermometer",
        ppt: "resources/Automatic-Control-System/Thermometer.pptx"
      },
      {
        title: "Transfer Function",
        ppt: "resources/Automatic-Control-System/Transfer function.pptx"
      }
    ]
  },
  {
    id: "network-analysis-and-synthesis",
    title: "Network Analysis and Synthesis",
    description: "Circuit laws, Laplace transform applications and network theorems.",
    color: "#0E8A9B",
    files: [
      {
        title: "Basic Definitions and Laws",
        ppt: "resources/Network_Analysis_and_Synthesis/Basic Definitions and Laws.pptx"
      },
      {
        title: "Initial Value and Final Value Theorem",
        ppt: "resources/Network_Analysis_and_Synthesis/Initial Value and Final Value Theorem.pptx"
      },
      {
        title: "Review of Laplace Transform",
        ppt: "resources/Network_Analysis_and_Synthesis/Review of Laplace Transform.pptx"
      },
      {
        title: "Solution of Differential Equation using Laplace Transform",
        ppt: "resources/Network_Analysis_and_Synthesis/Solution of differential equation using Laplace Transform.pptx"
      },
      {
        title: "Terms and Definitions Used in Circuits",
        ppt: "resources/Network_Analysis_and_Synthesis/Terms and Definitions used in circuits.pptx"
      },
      {
        title: "Transform Networks",
        ppt: "resources/Network_Analysis_and_Synthesis/Transform Networks.pptx"
      },
      {
        title: "Typical Test Signals",
        ppt: "resources/Network_Analysis_and_Synthesis/Typical Test Signals.pptx"
      }
    ]
  },
   {
    id: "Digital Electronics_Part1",       // must match the folder name in /resources/
    title: "Digital Electronics",
    description: "Binary numbers, conversion",
    color: "#C98A00",
    files: [
      {
        title: "Binary Arithmetic_4",
        ppt: "resources/Digital Electronics_Part1/Binary Arithmetic_4.pdf"
      },
      {
        title: "Boolean Algebra and Number System_1.pdf",
        ppt: "resources/Digital Electronics_Part1/Boolean Algebra and Number System_1.pdf"
      },
      {
        title: "CODE_7",
        ppt: "resources/Digital Electronics_Part1/CODE_7.pdf"
      },
      {
        title: "Compliments_Signed binary numbers_5",
        ppt: "resources/Digital Electronics_Part1/Compliments_Signed binary numbers_5.pdf"
      },
      {
        title: "Conversion of Number_2",
        ppt: "resources/Digital Electronics_Part1/Conversion of Number_2.pdf"
      },
      {
        title: "Conversion of Numbers_3",
        ppt: "resources/Digital Electronics_Part1/Conversion of Numbers_3.pdf"
      },
      {
        title: "Error detecting and correcting code_Hamming Code_8",
        ppt: "resources/Digital Electronics_Part1/Error detecting and correcting code_Hamming Code_8.pdf"
      },
      {
        title: "Error detecting and correcting code_Hamming Code_",
        ppt: "resources/Digital Electronics_Part1/Error detecting and correcting code_Hamming Code_MODIFIED_2021_8.pdf"
      },
      {
        title: "Floating Point Numbers_6",
        ppt: "resources/Digital Electronics_Part1/Floating Point Numbers_6.pdf"
      },
      {
        title: "LOGIC GATES",
        ppt: "resources/Digital Electronics_Part1/LOGIC GATES_BME.pdf"
      }
    ]
  }

  // Add more subjects here, following the same pattern.
];
