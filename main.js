const allBtn = document.getElementById("all-category");
const packageBtn = document.getElementById("Packaging-category");
const mockupBtn = document.getElementById("mockup-category");
const typographyBtn = document.getElementById("typography-category");
const photograhyBtn = document.getElementById("Photography-category");





//all category
allBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "transparent";
  allBtn.style.color = "yellow";

  packageBtn.style.backgroundColor = "transparent";
  packageBtn.style.color = "gray";

  mockupBtn.style.backgroundColor = "transparent";
  mockupBtn.style.color = "gray";

  typographyBtn.style.backgroundColor = "transparent";
  typographyBtn.style.color = "gray";

  photograhyBtn.style.backgroundColor = "trasnparent";
  photograhyBtn.style.color = "gray";

  const packagePortfolio = document.getElementsByClassName("package");

  for (const package of packagePortfolio) {
    package.style.display = "block";
  }

  const mockupportfolio = document.getElementsByClassName("mockup");

  for (const mockup of mockupportfolio) {
    mockup.style.display = "block";
  }

  const typographyportfolio = document.getElementsByClassName("typography");

  for (const typograhy of typographyportfolio) {
    typograhy.style.display = "block";
  }
  const photographyportfolio = document.getElementsByClassName("photography");

  for (const photography of photographyportfolio) {
    photography.style.display = "block";
  }
});

// package category
packageBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "transparent";
  allBtn.style.color = "gray";

  packageBtn.style.backgroundColor = "transparent";
  packageBtn.style.color = "yellow";

  mockupBtn.style.backgroundColor = "transparent";
  mockupBtn.style.color = "gray";

  typographyBtn.style.backgroundColor = "transparent";
  typographyBtn.style.color = "gray";

  photograhyBtn.style.backgroundColor = "transparent";
  photograhyBtn.style.color = "gray";

  const packagePortfolio = document.getElementsByClassName("package");

  for (const package of packagePortfolio) {
    package.style.display = "none";
  }

  setTimeout(() => {
    for (const package of packagePortfolio) {
      package.style.display = "block";
    }
  }, 300);

  const mockupportfolio = document.getElementsByClassName("mockup");
  for (const mockup of mockupportfolio) {
    mockup.style.display = "none";
  }

  const typographyportfolio = document.getElementsByClassName("typography");
  for (const typograhy of typographyportfolio) {
    typograhy.style.display = "none";
  }

  const photographyportfolio = document.getElementsByClassName("photography");
  for (const photography of photographyportfolio) {
    photography.style.display = "none";
  }
});

// mockup category
mockupBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "transparent";
  allBtn.style.color = "gray";

  packageBtn.style.backgroundColor = "transparent";
  packageBtn.style.color = "gray";

  mockupBtn.style.backgroundColor = "transparent";
  mockupBtn.style.color = "yellow";

  typographyBtn.style.backgroundColor = "transparent";
  typographyBtn.style.color = "gray";

  photograhyBtn.style.backgroundColor = "transparent";
  photograhyBtn.style.color = "gray";

  const packagePortfolio = document.getElementsByClassName("package");
  for (const package of packagePortfolio) {
    package.style.display = "none";
  }

  const mockupportfolio = document.getElementsByClassName("mockup");

  for (const mockup of mockupportfolio) {
    mockup.style.display = "none";
  }
  setTimeout(() => {
    for (const mockup of mockupportfolio) {
      mockup.style.display = "block";
    }
  }, 300);

  const typographyportfolio = document.getElementsByClassName("typography");
  for (const typograhy of typographyportfolio) {
    typograhy.style.display = "none";
  }

  const photographyportfolio = document.getElementsByClassName("photography");
  for (const photography of photographyportfolio) {
    photography.style.display = "none";
  }
});

// typography category
typographyBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "transparent";
  allBtn.style.color = "gray";

  packageBtn.style.backgroundColor = "transparent";
  packageBtn.style.color = "gray";

  mockupBtn.style.backgroundColor = "transparent";
  mockupBtn.style.color = "gray";

  typographyBtn.style.backgroundColor = "transparent";
  typographyBtn.style.color = "yellow";

  photograhyBtn.style.backgroundColor = "transparent";
  photograhyBtn.style.color = "gray";

  const packagePortfolio = document.getElementsByClassName("package");
  for (const package of packagePortfolio) {
    package.style.display = "none";
  }
  const mockupportfolio = document.getElementsByClassName("mockup");

  for (const mockup of mockupportfolio) {
    mockup.style.display = "none";
  }

  const typographyportfolio = document.getElementsByClassName("typography");

  for (const typography of typographyportfolio) {
    typography.style.display = "none";
  }
  setTimeout(() => {
    for (const typography of typographyportfolio) {
      typography.style.display = "block";
    }
  }, 300);

  const photographyportfolio = document.getElementsByClassName("photography");
  for (const photography of photographyportfolio) {
    photography.style.display = "none";
  }
});

// photography category
photograhyBtn.addEventListener("click", () => {
  allBtn.style.backgroundColor = "transparent";
  allBtn.style.color = "gray";

  packageBtn.style.backgroundColor = "transparent";
  packageBtn.style.color = "gray";

  mockupBtn.style.backgroundColor = "transparent";
  mockupBtn.style.color = "gray";

  typographyBtn.style.backgroundColor = "transparent";
  typographyBtn.style.color = "gray";

  photograhyBtn.style.backgroundColor = "transparent";
  photograhyBtn.style.color = "yellow";

  const packagePortfolio = document.getElementsByClassName("package");
  for (const package of packagePortfolio) {
    package.style.display = "none";
  }
  const mockupportfolio = document.getElementsByClassName("mockup");

  for (const mockup of mockupportfolio) {
    mockup.style.display = "none";
  }

  const typographyportfolio = document.getElementsByClassName("typography");
  for (const typograhy of typographyportfolio) {
    typograhy.style.display = "none";
  }

  const photographyportfolio = document.getElementsByClassName("photography");

  for (const photography of photographyportfolio) {
    photography.style.display = "none";
  }
  setTimeout(() => {
    for (const photography of photographyportfolio) {
      photography.style.display = "block";
    }
  }, 300);
});
