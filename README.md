# ECE Resources — Integral University

A colorful, modular HTML/CSS/JS site for sharing downloadable PPTs and notes,
organized by subject. Built to be hosted for free on GitHub Pages.

Maintained by **Syed Hasan Saeed**, Professor & Head, Department of
Electronics and Communication Engineering, Integral University, Kursi Road,
Lucknow (U.P.)

## Folder structure

```
/
├── index.html        Home page — navy hero + auto-generated subject grid
├── subject.html       One template page used for every subject
├── style.css          Shared styling (colors, layout, resistor-band cards)
├── data.js            <-- THE ONLY FILE YOU NORMALLY EDIT
├── script.js           Rendering logic (rarely needs changes)
└── resources/
    ├── maths/
    │   ├── unit1.pptx
    │   └── unit1-notes.pdf
    ├── physics/
    │   └── ...
    └── digital-electronics/
        └── ...
```

## How to add a new PPT/notes to an existing subject

1. Drop the file into that subject's folder, e.g. `resources/maths/unit3.pptx`
2. Open `data.js` and add an entry to that subject's `files` array:

```js
{
  title: "Unit 3 - Trigonometry",
  ppt: "resources/maths/unit3.pptx",
  notes: "resources/maths/unit3-notes.pdf"
}
```

3. Commit and push. Done — no HTML editing needed.

## How to add a brand-new subject

1. Create a folder in `resources/`, e.g. `resources/chemistry/`
2. Add the files inside it.
3. Open `data.js` and add a new object to the `subjects` array, picking a
   `color` for it (see palette below, or use any hex you like):

```js
{
  id: "chemistry",           // must match the folder name
  title: "Chemistry",
  description: "Organic and inorganic chemistry.",
  color: "#0e8a9b",
  files: [
    {
      title: "Unit 1 - Periodic Table",
      ppt: "resources/chemistry/unit1.pptx",
      notes: "resources/chemistry/unit1-notes.pdf"
    }
  ]
}
```

4. Commit and push. The home page card, its resistor-band icon, and its
   dedicated page (`subject.html?subject=chemistry`) are all created
   automatically from the shared template.

## Color system

The site uses a navy-and-jewel-tone palette (edit in `style.css` under `:root`):

| Variable | Hex | Used for |
|---|---|---|
| `--navy` | `#0b1f3d` | Header, hero background, footer |
| `--navy-2` | `#122a52` | Hero gradient end |
| `--gold` | `#f2b705` | Hero headline highlight word |
| `--cyan` | `#3ed7c4` | Circuit-trace accents, eyebrow label |
| `--green` | `#0f6d4c` | Default subject accent |

Each subject also has its own `color` in `data.js` — that color drives its
card's top stripe, resistor icon band, banner background, and download button
on its subject page. Suggested extra colors to pick from: coral `#ff7a5c`,
violet `#9d6bff`, gold `#c98a00`, cyan `#0e8a9b`, pink `#d1447a`.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages** in your repository.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Pick the `main` branch and `/ (root)` folder, then Save.
5. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Notes

- The `download` attribute on links prompts a file download instead of opening
  the file in-browser (works for same-origin files, which GitHub Pages serves as).
- File names in `resources/` don't need to match anything special — just make
  sure the `ppt`/`notes` paths in `data.js` match the real file paths exactly
  (case-sensitive on GitHub Pages).
