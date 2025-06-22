// 🌙 Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    document.body.style.backgroundColor = "#111";
    darkToggle.innerText = "☀️";
  } else {
    document.body.style.backgroundColor = "#000";
    darkToggle.innerText = "🌙";
  }
});

// 🌐 Language Switcher
const languageSelector = document.getElementById('languageSelector');
languageSelector.addEventListener('change', function () {
  const lang = this.value;

  const translations = {
    en: {
      title: "DownloadViaJack",
      tagline: "Fast, Free & Secure — Powered by Monster Jack 🚩",
      how: "How to Download?",
      app: "Get Our App",
      installBtn: "📥 Install Now"
    },
    ur: {
      title: "ڈاؤن لوڈ وایا جیک",
      tagline: "تیز، مفت اور محفوظ — مونسٹر جیک کے ذریعے 🚩",
      how: "ڈاؤن لوڈ کرنے کا طریقہ؟",
      app: "ہماری ایپ حاصل کریں",
      installBtn: "📥 ابھی انسٹال کریں"
    },
    hi: {
      title: "डाउनलोड वाया जैक",
      tagline: "तेज़, मुफ़्त और सुरक्षित — Monster Jack द्वारा 🚩",
      how: "डाउनलोड कैसे करें?",
      app: "हमारा ऐप प्राप्त करें",
      installBtn: "📥 अभी इंस्टॉल करें"
    },
    ar: {
      title: "داونلود عبر جاك",
      tagline: "سريع وآمن ومجاني — بواسطة مونستر جاك 🚩",
      how: "كيفية التنزيل؟",
      app: "احصل على تطبيقنا",
      installBtn: "📥 قم بالتثبيت الآن"
    },
    ko: {
      title: "다운로드비아잭",
      tagline: "빠르고, 무료이며, 안전합니다 — 몬스터잭 🚩",
      how: "다운로드 방법?",
      app: "앱 다운로드",
      installBtn: "📥 지금 설치"
    },
    zh: {
      title: "下载由杰克",
      tagline: "快速，免费和安全 — 由怪兽杰克提供 🚩",
      how: "如何下载？",
      app: "获取我们的应用",
      installBtn: "📥 立即安装"
    },
    ja: {
      title: "ダウンロードビアジャック",
      tagline: "高速、安全、無料 — モンスタージャック提供 🚩",
      how: "ダウンロード方法？",
      app: "アプリを入手",
      installBtn: "📥 今すぐインストール"
    }
  };

  const content = translations[lang];
  if (content) {
    document.querySelector('.title').innerText = content.title;
    document.querySelector('.tagline').innerText = content.tagline;
    document.querySelector('.how-to-use .glow-title').innerText = content.how;
    document.querySelector('.install-app .glow-title').innerText = content.app;
    document.querySelector('.install-btn').innerText = content.installBtn;
  }
});

// 📋 Clipboard Paste Support
window.addEventListener("load", () => {
  navigator.clipboard.readText().then(text => {
    if (text && text.includes("http")) {
      document.getElementById("videoURL").value = text;
    }
  });
});

// ⬇ Download Button Demo Logic
document.getElementById("downloadBtn").addEventListener("click", () => {
  const link = document.getElementById("videoURL").value;
  const format = document.getElementById("format").value;

  if (!link) {
    alert("⚠️ Please paste a video URL first!");
    return;
  }

  // Demo mode message
  alert(`✅ Preparing download for: ${format}\n\n📹 URL: ${link}\n\n🚀 Real downloading feature coming soon...`);
});

// 💬 Support Button (Demo popup)
document.getElementById("supportBtn").addEventListener("click", () => {
  alert("📩 Chat support coming soon!\nFor help: monsterjack901@gmail.com");
});
