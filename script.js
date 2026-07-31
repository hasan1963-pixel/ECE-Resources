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
      <div class="resource-item" style="--accent:${color}">
        <h3>${file.title}</h3>
        <div class="resource-actions">
          ${
            file.ppt
              ? `<a class="btn primary" style="--accent:${color}" href="${file.ppt}" download>&#8681; Download PPT</a>`
              : ""
          }
          ${
            file.notes
              ? `<a class="btn" href="${file.notes}" download>&#8681; Download Notes</a>`
              : ""
          }
        </div>
      </div>
    `
    )
    .join("");
}
