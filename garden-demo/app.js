const evelyn = { name: 'John Evelyn · Acetaria (1699)', url: 'https://www.gutenberg.org/files/15517/15517-h/15517-h.htm', context: 'An English book about salads. Read entry 5, “Beet,” for boiled roots, winter salads, and decorative red slices. This online text follows the 1937 reprint.' };
const beets = { name: 'Colonial Williamsburg · That Beets All! (2017)', url: 'https://www.colonialwilliamsburg.org/discover/resource-hub/trend-tradition-magazine/trend-tradition-autumn-2017/that-beets-all/', context: 'Barbara Rust Brown explores beets in colonial kitchen gardens, cellar storage, and cooking, alongside recipes from later periods.' };
const culpeper = { name: 'Nicholas Culpeper · The Complete Herbal (1850 edition)', url: 'https://www.gutenberg.org/files/49513/49513-h/49513-h.htm', context: 'Read the “Horehound” entry for the plant’s appearance, dried-herb preparations, honey, and apothecary syrup. This later edition carries forward Culpeper’s seventeenth-century herbal writing.' };
const culpeperHistory = { name: 'Kew · Nicholas Culpeper and his herbal (2015)', url: 'https://www.kew.org/read-and-watch/nicholas-culpeper-and-his-herbal', context: 'Emily Petch tells the story of the outspoken English herbalist and his effort to make medical knowledge available to ordinary readers.' };
const kew = { name: 'Kew · White horehound', url: 'https://powo.science.kew.org/taxon/urn%3Alsid%3Aipni.org%3Anames%3A449990-1/general-information', context: 'Plants of the World Online gives the accepted botanical name, Marrubium vulgare, and its geographic distribution.' };
const adrosko = { name: 'Smithsonian · Natural Dyes in the United States (1968)', url: 'https://repository.si.edu/bitstream/handle/10088/30461/bulletinunit2811968unit.pdf?isAllowed=y&sequence=1', context: 'Rita J. Adrosko’s historical study: pages 35–36 discuss goldenrod, colonial use, alum-treated wool, and dried flowers. Pages 86–87 explain dye processing in a later practical section. Opens a book-length PDF.' };
const adroskoScan = { name: 'Read the Smithsonian book · scanned copy', url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Bulletin_-_United_States_National_Museum_%28IA_bulletinunit2811968unit%29.pdf', context: 'A Wikimedia Commons scan of the same 1968 Smithsonian publication, if the repository link is unavailable. Printed pages 35–36 are PDF pages 51–52.' };
const goldenrodNature = { name: 'Missouri Department of Conservation · Goldenrods', url: 'https://mdc.mo.gov/discover-nature/field-guide/goldenrods', context: 'A field guide to the goldenrod family, its flowers, and the insects that visit them. The “Ecosystem Connections” section is especially useful for watching wildlife.' };
const plants = [
  {
    slug: 'beet', name: 'Beet', latin: 'Beta vulgaris', category: 'Food',
    line: 'A root in the garden. A meal in winter.',
    teaser: 'Winter food, colorful salads, and a surprisingly decorative root.',
    quick: ['Food for the household, including winter meals.', 'Cellar-stored roots, boiled or mashed; also served in salads.', 'Red beet slices could decorate a salad.'],
    story: 'A beet harvest could feed a household long after the growing season ended. Beets were grown in colonial American kitchen gardens, though they were less common than carrots, turnips, radishes, and parsnips. Roots kept in a cellar offered food for the winter table.',
    detail: 'Beets also had a place in the salad bowl. In Acetaria, his English book of 1699, John Evelyn described boiled red roots served cold, sliced thin, with oil, vinegar, and salt. He called this a winter salad. His account reminds us that a historical salad could contain cooked roots as well as fresh greens.',
    fact: 'Useful could also be beautiful: Evelyn described French and Italian cooks cutting red beet slices into decorative shapes to dress a salad.',
    storySources: [beets, evelyn], sources: [evelyn, beets],
    prepTitle: 'From garden to winter table',
    prepIntro: 'Keeping the harvest was part of the work of feeding a household. Cooking then turned a stored root into a simple dish—or a colorful salad.',
    steps: [
      ['Keep the harvest', 'Roots were stored in a cellar for winter use. The harvest did not have to be eaten all at once.'],
      ['Cook until tender', 'Boiling was a straightforward preparation; cooked beets could also be mashed.'],
      ['Make a winter salad', 'Evelyn described thin slices of boiled red beet, served cold with oil, vinegar, and salt, on their own or with other salad ingredients.']
    ],
    prepSources: [beets, evelyn],
    question: 'Look at the leaves above the soil and imagine the root below. A kitchen garden supplied more than the next meal: it helped fill the store cupboard. What would you put away for winter?',
    lookSources: [], caution: ''
  },
  {
    slug: 'horehound', name: 'Horehound', latin: 'Marrubium vulgare', category: 'Historical medicine',
    line: 'When a garden was also a medicine cupboard.',
    teaser: 'Bitter leaves, sweetened remedies, and medical knowledge in English.',
    quick: ['Historical remedies for coughs and chest complaints.', 'Dried herb simmered in liquid, or fresh juice mixed with honey.', 'Apothecaries also sold horehound syrup.'],
    story: 'Horehound belonged to the world of household herbs and apothecaries—the people who prepared and sold medicines. In his seventeenth-century herbal, English writer Nicholas Culpeper described it for coughs and chest complaints. He recorded preparations made from the dried plant and from fresh juice mixed with honey, and noted that apothecaries sold a horehound syrup.',
    detail: 'A garden offered plant material; a book offered instructions and explanations. Culpeper wanted ordinary readers to understand medical knowledge that had often been printed in Latin. His English-language works helped make that knowledge more accessible. The plant’s story is therefore also a story about who could read, learn, and take part in household care.',
    fact: 'Horehound’s leaves are intensely bitter. Honey accompanied the fresh juice in Culpeper’s account—a meeting of the medicine garden and the sweetener cupboard.',
    storySources: [culpeper, culpeperHistory], sources: [culpeper, culpeperHistory, kew],
    prepTitle: 'From herb to historical remedy',
    prepIntro: 'Culpeper described several ways of preparing horehound. These are accounts of historical practice, rather than instructions for use today.',
    steps: [
      ['Use fresh or dried plant material', 'His entry distinguishes dried herb from juice obtained from the green plant.'],
      ['Draw out the plant’s contents', 'A decoction meant simmering plant material in a liquid. Culpeper named this preparation for the dried herb and seeds; fresh juice was a separate preparation, taken with honey.'],
      ['Buy a prepared syrup', 'Horehound syrup was also available from apothecaries. Growing an herb and purchasing a prepared medicine were both part of the world he described.']
    ],
    prepSources: [culpeper],
    question: 'Without touching the plant, look for pale, crinkled leaves arranged in pairs. Culpeper described a square stem and small white flowers around the stem joints. Which of these features can you see today?',
    lookSources: [culpeper],
    caution: 'Historical remedies reflect the beliefs of their time. This story is not medical advice; please do not taste the plant or use it to make a remedy.'
  },
  {
    slug: 'goldenrod', name: 'Goldenrod', latin: 'Solidago spp.', category: 'Dye',
    line: 'The garden could help color your clothes.',
    teaser: 'Yellow flowers, wool, and the work of making color.',
    quick: ['Yellow dye for wool and other textiles.', 'Flowers heated in water; wool prepared with alum, then dyed.', 'Flowers could be dried and saved for later dyeing.'],
    story: 'Goldenrod offered home dyers a source of yellow. Smithsonian researcher Rita Adrosko traced its use in colonial America and noted its appearance in the writings of the eighteenth-century naturalist Peter Kalm. Her study describes goldenrod used on wool prepared with alum, a mineral salt that helped the dye attach to the fiber.',
    detail: 'Flowers were gathered as they began to bloom and could be dried for later use. The season’s color could become part of a household’s supplies, ready for a future dyeing day. “Goldenrod” names a group of related plants, rather than one species; many belong to the genus Solidago.',
    fact: 'Making color took more than gathering flowers. Preparing the wool, heating the dye bath, and rinsing and drying the fiber all added work between the garden and the finished textile.',
    storySources: [adrosko], sources: [adrosko, adroskoScan, goldenrodNature],
    prepTitle: 'From flowers to yellow wool',
    prepIntro: 'Adrosko’s study records the historical materials and explains the basic dye-bath process. Here is the work behind the color.',
    steps: [
      ['Gather and keep the flowers', 'Blossoms were gathered near the beginning of flowering. They could be used fresh or dried and stored.'],
      ['Prepare the wool', 'Alum served as a mordant: a substance used to help a dye attach to textile fibers. This preparation came before the yellow dye bath.'],
      ['Make the dye bath', 'Heating flowers in water extracted their color. The plant material was strained out, leaving the colored liquid.'],
      ['Color, rinse, and dry', 'Prepared wool was wetted and heated in the dye bath, then rinsed and dried. The result depended on the materials and treatment; yellow did not always mean the same shade.']
    ],
    prepSources: [adrosko],
    question: 'If the flowers are open, watch for visiting bees, butterflies, and other insects. Goldenrods provide nectar late in the growing season. A plant that supplied color to people also supplies food to wildlife.',
    lookSources: [goldenrodNature], caution: ''
  }
];
function sprig(kind = 'goldenrod') {
  if (kind === 'beet') return `<svg viewBox="0 0 250 370" aria-hidden="true"><g fill="none" stroke="#526449" stroke-width="1.3"><path d="M125 211Q94 161 77 58M126 210Q154 152 177 41M124 203Q128 141 125 20"/><path d="M79 106Q32 72 56 35Q97 43 79 106ZM164 105Q139 60 180 27Q207 70 164 105ZM124 94Q91 53 122 13Q153 49 124 94ZM102 163Q62 141 64 105Q109 115 102 163ZM144 163Q181 139 186 104Q143 110 144 163Z"/></g><path d="M90 217Q122 201 153 219Q177 244 161 273Q145 296 126 317Q119 306 102 288Q76 273 79 247Q79 229 90 217Z" fill="#dbc0b9" stroke="#8b492e" stroke-width="1.5"/><g fill="none" stroke="#8b492e" stroke-width="1"><path d="M127 315q-8 24 -17 29M99 239q22 -9 44 0M96 256q29 -10 48 0M108 275q15 -5 26 0"/></g></svg>`;
  if (kind === 'goldenrod') {
    let flowers = '';
    for (let row = 0; row < 9; row++) for (let j = 0; j <= row; j++) flowers += `<circle cx="${122 + (j - row / 2) * 9}" cy="${45 + row * 13 + Math.sin(j) * 4}" r="3.3"/>`;
    return `<svg viewBox="0 0 250 370" aria-hidden="true"><g fill="none" stroke="#526449" stroke-width="1.3"><path d="M111 350Q134 213 122 42M124 155L88 146M126 157L165 147M125 127L98 120M125 127L151 122M123 97L107 91M123 97L140 91"/><path d="M121 299q-40 -22 -44 -52q32 3 44 52ZM126 265q40 -17 47 -46q-32 1 -47 46ZM127 232q-35 -18 -40 -43q29 0 40 43ZM127 201q29 -10 34 -33q-24 0 -34 33Z"/></g><g fill="#b69b48" stroke="#8d793b" stroke-width=".4">${flowers}</g></svg>`;
  }
  let leaves = '';
  const wide = kind === 'horehound' ? 22 : 13;
  for (let i = 0; i < 8; i++) {
    const y = 305 - i * 31;
    const x = 120 + Math.sin(i * .7) * 9;
    leaves += `<path d="M${x} ${y}q-20 -4 -32 -24M${x} ${y - 7}q18 -7 30 -29"/><ellipse cx="${x - 31}" cy="${y - 23}" rx="${wide}" ry="${kind === 'rosemary' ? 24 : 19}" transform="rotate(-48 ${x - 31} ${y - 23})"/><ellipse cx="${x + 30}" cy="${y - 34}" rx="${wide}" ry="${kind === 'rosemary' ? 25 : 19}" transform="rotate(42 ${x + 30} ${y - 34})"/>`;
  }
  return `<svg viewBox="0 0 250 370" aria-hidden="true"><g fill="none" stroke="#526449" stroke-width="1.2"><path d="M111 349Q142 210 118 38M120 243Q63 180 63 105M126 198Q187 143 177 76"/>${leaves}<path d="M63 145q-26 -9 -28 -28q23 -3 28 28Zm0 -18q26 -10 25 -31q-24 0 -25 31ZM179 118q24 -13 23 -31q-24 0 -23 31Zm-2 -11q-24 -8 -24 -28q20 0 24 28Z"/></g><g fill="#eee6d2" stroke="#8b492e" stroke-width=".9"><circle cx="118" cy="31" r="5"/><circle cx="108" cy="38" r="4"/><circle cx="128" cy="38" r="4"/><circle cx="62" cy="98" r="4"/><circle cx="176" cy="70" r="4"/></g></svg>`;
}
const art = kind => `<div class="hero-art">${sprig(kind)}<div class="art-note"><span>Botanical study</span><span>Decorative illustration</span></div></div>`;
function card(p) {
  return `<a class="card" href="#plant/${p.slug}"><div class="card-art">${sprig(p.slug)}</div><div class="card-content"><div class="eyebrow">${p.category} · example</div><h3>${p.name}</h3><span class="latin">${p.latin}</span><p>${p.teaser}</p></div><div class="card-bottom"><span>Discover its story</span><span aria-hidden="true">↗</span></div></a>`;
}
function garden() {
  return `<section class="hero"><div><div class="eyebrow">Hibbs House & Thompson-Neely House</div><h1>Every plant<br>had a <em>job.</em></h1><p class="intro">Beyond each little black rock is a story. Meet the plants that helped households cook, make, and care for one another.</p><a class="button" href="#plant/beet">Explore a plant story <span aria-hidden="true">↗</span></a></div>${art('goldenrod')}</section><section class="guide" aria-labelledby="guide-title"><div class="guide-top"><div><div class="eyebrow">A closer look</div><h2 id="guide-title">Stories from the garden</h2></div><label class="search"><span aria-hidden="true">⌕</span><input id="search" type="search" aria-label="Find a plant by common or botanical name" placeholder="Find a plant…" autocomplete="off"></label></div><p id="count" class="count" role="status">3 example plants</p><div class="cards" id="cards">${plants.map(card).join('')}</div><p class="note">Sample stories for park review. Plant selection and placement will be confirmed by the garden team.</p></section><section class="strip"><h2>A small marker.<br>A much bigger story.</h2><div><p>Scan beside a plant to arrive at its story. Prefer to keep your phone tucked away? The familiar rock still tells you its name.</p><a href="#approach">See the proposed garden experience →</a></div></section>`;
}
function plantPage(p) {
  const sourceLine = sources => sources.length ? `<p class="source-line">Read more: ${sources.map(s => `<a href="${s.url}">${s.name}</a>`).join(' · ')}</p>` : '';
  const steps = p.steps.map(([title, text]) => `<li><div><strong>${title}</strong>${text}</div></li>`).join('');
  const labels = ['Used for', 'Prepared by', 'Worth knowing'];
  const facts = p.quick.map((text, i) => `<div><dt>${labels[i]}</dt><dd>${text}</dd></div>`).join('');
  const index = plants.indexOf(p);
  const next = plants[(index + 1) % plants.length];
  return `<div class="plant-sheet"><a class="back" href="#garden">← All plants</a>
  <header class="plant-heading"><div><div class="eyebrow">${p.category} · example plant</div><h1>${p.name}</h1><div class="latin">${p.latin}</div></div><div class="plant-portrait" aria-hidden="true">${sprig(p.slug)}</div></header>
  <section class="quick-summary" aria-labelledby="quick-title"><h2 id="quick-title">At a glance</h2><dl>${facts}</dl></section>
  ${p.category === 'Historical medicine' ? '<p class="quick-context">Historical use · not medical advice.</p>' : ''}
  <div class="plant-more"><details class="plant-disclosure"><summary>More about this plant</summary><article class="story disclosure-content"><section id="household"><h2>In the household</h2><p>${p.story}</p><p>${p.detail}</p>${p.fact ? `<div class="fact">${p.fact}</div>` : ''}${sourceLine(p.storySources)}</section>
  <section id="preparation"><h2>${p.prepTitle}</h2><p>${p.prepIntro}</p><ol class="steps">${steps}</ol>${sourceLine(p.prepSources)}</section>
  <section id="look"><h2>Look a little closer</h2><p>${p.question}</p>${sourceLine(p.lookSources)}<p>Enjoy the plants where they grow; please leave picking to the garden team.</p></section>${p.caution ? `<div class="gentle">${p.caution}</div>` : ''}</article></details>
  <details class="plant-disclosure"><summary>Sources & further reading</summary><section id="sources" class="disclosure-content"><h2 class="sr-only">Sources & context</h2><ul class="source-list">${p.sources.map(s => `<li><a href="${s.url}">${s.name} ↗</a><small>${s.context}</small></li>`).join('')}</ul></section></details></div>
  <nav class="plant-browse" aria-label="Browse example plants"><a href="#garden">All plants</a><a href="#plant/${next.slug}">Next example: ${next.name} →</a></nav></div>`;
}
function approach() {
  return `<section class="experience-heading"><div class="eyebrow">A proposal for park review</div><h1>Keep the garden quiet.<br>Let the stories open up.</h1><p>Small, removable markers invite a deeper look without taking over the landscape.</p></section><section class="signage"><div class="sign-scene"><span class="scene-caption">Placement study · materials and dimensions to be tested</span><div class="rock">Beet</div><div class="label"><div class="qr-placeholder">QR added after the web address is approved</div>THIS PLANT’S STORY</div></div><div><div class="eyebrow">Recommended pilot</div><h2>The rock stays.<br>A little tag joins it.</h2><p>Pair the existing rock with a removable, low matte tag. Put a conventional black QR code on a warm-white square, with “This plant’s story” below it.</p><p>Keep the surrounding tag dark. Give the code clear space and an angle visitors can reach from the path. Start with an approximately 35–40 mm code area, then test actual phones, sunlight, dirt, and viewing distance before selecting a final size.</p><p class="note">No scannable code is printed in this mockup. Final codes need a durable, approved public address.</p></div></section><section class="options"><div><div class="eyebrow">An even quieter alternative</div><h3>One sign. Numbered rocks.</h3><p>Put one QR code at each garden entrance. Visitors open the guide, then choose a number or search for a plant name. Fewer modern markers, with an extra step to find a story.</p></div><div><div class="eyebrow">An optional addition later</div><h3>A tap as well as a scan.</h3><p>An NFC tag can open the same address when tapped with a compatible phone. It adds hardware and maintenance, so a QR pilot should establish the visitor experience first.</p></div></section><section class="pilot"><div class="eyebrow">A manageable first step</div><h2>Five plants. One small trial.</h2><ol><li>Choose five plants with the garden team. Verify their species, location, and historical sources.</li><li>Review a short story for each, including household use, preparation, and one observation for visitors.</li><li>Agree on website ownership and permanent addresses. Use ordinary direct links rather than a paid QR subscription.</li><li>Try removable tags and an entrance sign. Observe visitors using both, including visitors who cannot bend down.</li><li>Check cell reception at both gardens, scanning in sun and shade, text readability, weathering, and the garden’s appearance.</li></ol><p class="note">The proposed tags are modern interpretation tools. Materials, placement, and installation need park approval before a field trial.</p></section>`;
}
let currentView = '';
function render() {
  const parts = location.hash.slice(1).split('/');
  const route = parts[0] || 'garden';
  const p = route === 'plant' ? plants.find(x => x.slug === parts[1]) : null;
  const key = p ? `plant/${p.slug}` : route === 'approach' ? 'approach' : route === 'plant' ? 'missing' : 'garden';
  const main = document.querySelector('main');
  if (currentView !== key) {
    document.body.classList.toggle('view-plant', Boolean(p));
    main.innerHTML = p ? plantPage(p) : key === 'approach' ? approach() : key === 'missing' ? '<section class="experience-heading"><h1>That plant isn’t in this sample.</h1><p><a href="#garden">Return to the example plants →</a></p></section>' : garden();
    document.title = `${p ? p.name : key === 'approach' ? 'The garden experience' : 'Garden Stories'} · Washington Crossing concept`;
    document.querySelectorAll('.site-header nav a').forEach(a => { if ((key === 'approach' ? '#approach' : '#garden') === a.getAttribute('href')) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (currentView) { main.focus({ preventScroll: true }); window.scrollTo(0, 0); }
    currentView = key;
    const search = document.querySelector('#search');
    if (search) search.addEventListener('input', () => {
      const query = search.value.toLowerCase().trim();
      const matches = plants.filter(p => `${p.name} ${p.latin}`.toLowerCase().includes(query));
      document.querySelector('#cards').innerHTML = matches.length ? matches.map(card).join('') : '<p class="empty">No example plants match. Try beet, horehound, or goldenrod.</p>';
      document.querySelector('#count').textContent = `${matches.length} example plant${matches.length === 1 ? '' : 's'}`;
    });
  }
  const section = p && parts[2] ? document.getElementById(parts[2]) : null;
  if (section) { const disclosure = section.closest('details'); if (disclosure) disclosure.open = true; section.scrollIntoView(); section.setAttribute('tabindex', '-1'); section.focus({ preventScroll: true }); }
}
window.addEventListener('hashchange', render);
render();

let printDisclosureState = [];
window.addEventListener('beforeprint', () => {
  printDisclosureState = Array.from(document.querySelectorAll('.plant-disclosure'), node => ({ node, open: node.open }));
  printDisclosureState.forEach(({ node }) => { node.open = true; });
});
window.addEventListener('afterprint', () => {
  printDisclosureState.forEach(({ node, open }) => { node.open = open; });
  printDisclosureState = [];
});
