# Silence Web Project – Website vozidel Silence

Webový projekt představující elektronická vozidla značky **Silence** – inovativní řešení pro čistou městskou mobilitu.

## 📋 Obsah projektu

Webové stránky obsahují:

- **[index.html](index.html)** – Domovská stránka s přehledem produktů
- **[o-nas.html](o-nas.html)** – Historia, mise a hodnoty společnosti
- **[produkty.html](produkty.html)** – Katalog dostupných vozidel
- **[kontakty.html](kontakty.html)** – Kontaktní informace a formulář
- **[s02-cargo.html](s02-cargo.html)** – Detail produktu S02 Cargo (pracovní skútr)
- **[s02-personal.html](s02-personal.html)** – Detail produktu S02 Personal (osobní skútr)
- **[s04-cargo.html](s04-cargo.html)** – Detail produktu S04 (nanocar cargo verze)
- **[s04-personal.html](s04-personal.html)** – Detail produktu S04 (nanocar osobní verze)

## 🛠️ Technologie

- **HTML5** – Sémantická struktura
- **CSS3** – Responsive design, moderní layouty (Grid, Flexbox)
- **JavaScript** – Interaktivní prvky (lightbox, menu, animace)
- **Google Fonts** – Typografie (Bebas Neue, DM Sans)

## 📁 Struktura projektu

```
web-project-prachy/
├── index.html              # Domovská stránka
├── o-nas.html              # O nás
├── produkty.html           # Katalog produktů
├── kontakty.html           # Kontakty
├── s02-cargo.html          # S02 Cargo detail
├── s02-personal.html       # S02 Personal detail
├── s04-cargo.html          # S04 Cargo detail
├── s04-personal.html       # S04 Personal detail
├── README.md               # Tento soubor
├── css/
│   ├── style.css           # Obecné styly a layout
│   ├── index.css           # Styly domovské stránky
│   └── o-nas.css           # Styly stránky O nás
├── js/
│   ├── script.js           # Hlavní interaktivní prvky
│   ├── product.js          # Produktové detaily
│   ├── index.js            # JS pro domovskou stránku
│   └── o-nas.js            # JS pro stránku O nás
├── obrazky/                # Fotografie vozidel a loga
└── fotky/                  # Detailní fotky produktů
```

## 🚀 Spuštění projektu

1. Zvol si složku projektu
2. Otevři `index.html` v prohlížeči (nebo spusť lokální server)

**Doporučeno:** Použij lightweight server (např. Python):
```bash
python -m http.server 8000
# nebo
python3 -m http.server 8000
```

Pak otevři `http://localhost:8000` v prohlížeči.

## ✨ Klíčové funkce

- ✅ Fully responsive design (desktop, tablet, mobil)
- ✅ Lightbox galerie na produktových stránkách
- ✅ Hamburger menu pro mobil
- ✅ Fade-in animace při scrollování
- ✅ Přehledná navigace mezi produkty
- ✅ Profesionální design s jednotným stylem
- ✅ Battery Swap technologie – inovativní řešení

## 📝 Poznámky k vývoji

- CSS je rozdělen do modulů (`index.css`, `o-nas.css`, `style.css`)
- JavaScript je načítán s `defer` atributem pro optimalizaci
- Všechny external CSS a JS jsou asynchronně loadovány
- Používáme CSS variables (custom properties) pro konzistentní barvy a spacing
- Lightbox je integrován přímo v JS scriptu pro plynulou interakci

## 👥 Autor

Projekt vytvořen pro představení schopností a získání kontaktů.

---

**Poslední aktualizace:** Duben 2026
