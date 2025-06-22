// 🌙 Dark Mode Toggle
const darkToggle = document.getElementById("darkToggle");
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️";
  } else {
    darkToggle.textContent = "🌙";
  }
});

// 🌐 Language Change (Demo Translation)
const languageSelector = document.getElementById("languageSelector");
languageSelector.addEventListener("change", () => {
  const lang = languageSelector.value;
  alert("Language changed to: " + lang + "\n(Feature under development)");
});

// ⬇ Download Button Click
const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", () => {
  const videoURL = document.getElementById("videoURL").value;
  const format = document.getElementById("format").value;

  if (videoURL.trim() === "") {
    alert("Please paste a video link first!");
    return;
  }

  alert(`Downloading: ${videoURL}\nFormat: ${format}\n\n(Real download functionality coming soon!)`);
});

// 💬 Support Chat Button
const supportBtn = document.getElementById("supportBtn");
supportBtn.addEventListener("click", () => {
  alert("Live Chat Support Coming Soon!\nStay tuned!");
});
