/*
  Shared rendering logic.
  Reads from the `subjects` array defined in data.js.
  You should not need to edit this file when adding content —
  only when you want to change HOW things are displayed.
*/

// Small inline "resistor" graphic used as each subject's icon.
// The first color band always matches the subject's accent color.
function resistorGraphic(color) {
  return `
    <div class="resistor">
      <div class="lead"></div>
      <div class="body">
        <div class="band" style="background:${color}"></div>
        <div class="band" style="background:#a9825f"></div>
        <div class="band" style="background:#0b1f3d"></div>
      </div>
      <div class="lead"></div>
    </div>
  `;
}

// File-type document icon used on every PPT/notes row.
function documentIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 3h10l6 6v12H4z"></path>
      <path d="M14 3v6h6"></path>
    </svg>
  `;
}

// Small download-arrow icon used inside the action buttons.
function downloadIcon() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3v12"></path>
      <path d="M7 10l5 5 5-5"></path>
      <path d="M5 21h14"></path>
    </svg>
  `;
}

// encodeURI keeps spaces/special characters in filenames from breaking
// links once the site is deployed (e.g. GitHub Pages).
function safePath(path) {
  return path ? encodeURI(path) : "";
}

// Builds the subject cards on index.html
function renderSubjectGrid() {
  const grid = document.getElementById("subject-grid");
  if (!grid) return;

  if (!subjects.length) {
    grid.innerHTML = `<p class="empty-state">No subjects added yet.</p>`;
    return;
  }

  grid.innerHTML = subjects
    .map((subject) => {
      const color = subject.color || "#0f6d4c";
      const count = subject.files ? subject.files.length : 0;
      return `
        <a class="card" style="--accent:${color}" href="subject.html?subject=${encodeURIComponent(subject.id)}">
          ${resistorGraphic(color)}
          <h3>${subject.title}</h3>
          <p class="desc">${subject.description || ""}</p>
          <span class="tag">${count} file${count === 1 ? "" : "s"}</span>
        </a>
      `;
    })
    .join("");
}

// Builds the resource list on subject.html based on the ?subject= URL param
function renderSubjectPage() {
  const params = new URLSearchParams(window.location.search);
  const subjectId = params.get("subject");
  const subject = subjects.find((s) => s.id === subjectId);

  const bannerEl = document.getElementById("subject-banner");
  const titleEl = document.getElementById("subject-title");
  const descEl = document.getElementById("subject-description");
  const listEl = document.getElementById("resource-list");
  const pageTitleEl = document.getElementById("page-title");

  if (!subject) {
    titleEl.textContent = "Subject not found";
    descEl.textContent = "Please go back and pick a subject from the list.";
    listEl.innerHTML = "";
    return;
  }

  const color = subject.color || "#0f6d4c";
  bannerEl.style.setProperty("--accent", color);
  pageTitleEl.textContent = `${subject.title} | ECE Resources`;
  titleEl.textContent = subject.title;
  descEl.textContent = subject.description || "";

  if (!subject.files || !subject.files.length) {
    listEl.innerHTML = `<p class="empty-state">No files added yet for this subject.</p>`;
    return;
  }

  listEl.innerHTML = subject.files
    .map(
      (file) => `
      <div class="resource-item">
        <div class="resource-icon" style="--accent:${color}">
          ${documentIcon()}
        </div>
        <div class="resource-info">
          <h3>${file.title}</h3>
          <div class="meta">${file.notes ? "PPTX + PDF notes" : "PPTX"}</div>
        </div>
        <div class="resource-actions">
          ${
            file.ppt
              ? `<a class="btn primary" style="--accent:${color}" href="${safePath(file.ppt)}" download>
                  ${downloadIcon()} PPT
                </a>`
              : ""
          }
          ${
            file.notes
              ? `<a class="btn" href="${safePath(file.notes)}" download>
                  ${downloadIcon()} Notes
                </a>`
              : ""
          }
        </div>
      </div>
    `
    )
    .join("");
}
