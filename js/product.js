// Data převzata z https://www.silence.eco/global/productos/s04-nanocar (přeloženo do češtiny)
const product = {
  brand: 'Silence',
  model: 'S04 Nanocar',
  year: 2020,
  price: 'Od 7.400 €',
  description: 'Elektrický nanocar navržený pro městský provoz s nejlepší kombinací komfortu a praktičnosti. Vyjímatelné baterie, velké zavazadlo a revoluční Battery Swap systém.',
  trunk: 'až 247 l',
  specs: {
    luggage: '247 litrů',
    accel: '< 7 sekund (0-50 km/h)',
    maxSpeed_l7e: '85 km/h',
    maxSpeed_l6e: '45 km/h',
    range_l7e: '149 km (WMTC)',
    range_l6e: '175 km (2 baterie)',
    power_l7e: '14 kW (22 kW peak)',
    power_l6e: '6 kW (10.6 kW peak)',
    emissions: 'Nulové emise',
    weight: 'Kompaktní rozměry pro parkování',
    battery: 'Vyjímatelné baterie (trolley typ)',
    charging: 'Battery Swap za 30 sekund nebo přímé nabíjení'
  },
  versions: [
    {
      name: 'L6e (ekvivalent 50cc)',
      topSpeed: '45 km/h',
      range: '75 km (1 baterie) / 175 km (2 baterie)',
      power: '6 kW (10.6 kW špičkově)'
    },
    {
      name: 'L7e (ekvivalent 125cc)',
      topSpeed: 'až 85 km/h',
      range: '149 km (WMTC s 2 bateriemi)',
      power: '14 kW (22 kW špičkově)'
    }
  ],
  features: [
    'Elektrický nanocar s revolučním Battery Swap systémem',
    'Vyjímatelné baterie (trolley typ) — nabíjejte kdekoliv nebo vyměňte za 30 sekund',
    'Největší zavazadlo na trhu: až 247 litrů úložného prostoru',
    'Klimatizace pro letní i zimní režim — celoroční komfort',
    'Multifunkční volant — ovládejte hudbu a funkce bez rukou',
    'Jedinečné přední LED osvětlení pro bezpečnost',
    'Tři režimy jízdy: Eco, City, Sport pro různé styly řízení',
    'MySilence aplikace — lokace, diagnostika, stav baterie a Battery Swap',
    'Až 2 baterie pro maximální dojezd (149 km WMTC)',
    'Zrychlení < 7 sekund (0-50 km/h) u verze L7e',
    'Bez emisí — ekologické řešení pro město',
    'Optimální rozměry pro snadné parkování'
  ],
  performance: {
    acceleration: '< 7 s (0-50 km/h u L7e)'
  },
  license: 'L6e lze řídit od 15 let s průkazem AM; L7e vyžaduje odpovídající kategorii. Vhodné pro meziměstské trasy.'
};

function renderProduct(p) {
  const title = document.getElementById('product-title');
  const year = document.querySelector('#product-year span');
  const price = document.querySelector('#product-price span');
  const features = document.getElementById('product-features');
  const img = document.getElementById('product-img');

  if (title) title.textContent = `${p.brand} ${p.model}`;
  if (year) year.textContent = p.year;
  if (price) price.textContent = p.price;
  if (img && p.images && p.images.length) img.src = p.images[0];

  // Vytvoříme specifikace a verze
  if (features) {
    features.innerHTML = '';
    
    // stručný popis
    const descLi = document.createElement('li');
    descLi.textContent = p.description;
    descLi.style.fontWeight = 'bold';
    descLi.style.color = '#00a86b';
    features.appendChild(descLi);

    // technické specifikace
    if (p.specs) {
      const specsHeader = document.createElement('li');
      specsHeader.textContent = '⚙️ Technické specifikace:';
      specsHeader.style.fontWeight = 'bold';
      specsHeader.style.marginTop = '12px';
      features.appendChild(specsHeader);

      const specsList = document.createElement('ul');
      specsList.style.marginLeft = '20px';
      specsList.style.marginTop = '8px';
      
      Object.entries(p.specs).forEach(([key, value]) => {
        const specLi = document.createElement('li');
        specLi.textContent = value;
        specsList.appendChild(specLi);
      });
      features.appendChild(specsList);
    }

    // výkon
    const perfLi = document.createElement('li');
    perfLi.textContent = `⚡ Zrychlení: ${p.performance.acceleration}`;
    perfLi.style.marginTop = '12px';
    features.appendChild(perfLi);

    // verze
    const versionHeader = document.createElement('li');
    versionHeader.textContent = '🚗 Dostupné verze:';
    versionHeader.style.fontWeight = 'bold';
    versionHeader.style.marginTop = '12px';
    features.appendChild(versionHeader);

    p.versions.forEach(v => {
      const li = document.createElement('li');
      li.textContent = `${v.name} — Max. rychlost: ${v.topSpeed}; Dojezd: ${v.range}; Výkon: ${v.power}`;
      li.style.marginLeft = '20px';
      features.appendChild(li);
    });

    // Práce/výbava sekce
    const equipmentHeader = document.createElement('li');
    equipmentHeader.textContent = '✨ Výbava & Vlastnosti:';
    equipmentHeader.style.fontWeight = 'bold';
    equipmentHeader.style.marginTop = '12px';
    features.appendChild(equipmentHeader);

    // další výbava
    p.features.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      li.style.marginLeft = '20px';
      features.appendChild(li);
    });

    const licLi = document.createElement('li');
    licLi.textContent = `📋 ${p.license}`;
    licLi.style.marginTop = '12px';
    licLi.style.fontWeight = '600';
    features.appendChild(licLi);
  }

  // Pokud existuje sekce s id 'podrobnosti', doplníme technické body
  const podrobnosti = document.getElementById('podrobnosti');
  if (podrobnosti) {
    podrobnosti.innerHTML = `
      <h3>Technické údaje</h3>
      <ul>
        <li>Objem zavazadlového prostoru: ${p.trunk}</li>
        <li>Zrychlení: ${p.performance.acceleration}</li>
        <li>Режиmu jízdy: Eco / City / Sport</li>
      </ul>
    `;
  }

  const contactBtn = document.getElementById('contact-btn');
  if (contactBtn) contactBtn.addEventListener('click', () => {
    window.location.href = 'kontakt.html';
  });
}

// If images not provided, set default
product.images = product.images || ['obrazky/s04_white.webp', 'obrazky/silence-s04.jpg'];

document.addEventListener('DOMContentLoaded', () => renderProduct(product));
