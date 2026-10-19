/* ================= 1. ICONS ================= */
const ICONS = {
  star: '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  cart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 2-1.58l1.65-7.42H5.12"/></svg>',
  plus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  minus: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',
  trash: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6h16z"/></svg>',
  x: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>',
  sliders: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>',
  packageSearch: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l1.5-.87"/><path d="m3.29 7 8.71 5 8.71-5M12 22V12"/><circle cx="18.5" cy="15.5" r="2.5"/><path d="M20.27 17.27 22 19"/></svg>',
  bag: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></svg>',
  chevronRight: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  arrowRight: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
  zap: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
  truck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  shieldCheck: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  gamepad: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="3"/></svg>',
  gradCap: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  briefcase: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  palette: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2a10 10 0 1 0 0 20c1 0 2-1 2-2 0-.5-.2-1-.5-1.4-.3-.4-.5-.9-.5-1.4 0-1 1-2 2-2h2c3 0 5-2 5-5 0-5-4.5-8-10-8z"/></svg>',
  wrench: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 1 1-5.4 5.4L2 19l3 3 7.3-7.3a4 4 0 1 1 5.4-5.4l-3 3z"/></svg>',
  users: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  mail: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  phone: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  checkCircle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  eye: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',
  eyeOff: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19M14.12 14.12a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/></svg>',
  alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>',
  laptopFallback: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="12" rx="1"/><path d="M2 20h20"/></svg>',
};

function categoryIcon(key) {
  const map = { gaming: ICONS.gamepad, student: ICONS.gradCap, business: ICONS.briefcase, creator: ICONS.palette };
  return map[key] || ICONS.gamepad;
}

/* ================= 2. DATA ================= */
const CATEGORIES = [
  { value: 'gaming', label: 'Gaming' },
  { value: 'student', label: 'Student' },
  { value: 'business', label: 'Business' },
  { value: 'creator', label: 'Creator' },
  { value: 'budget', label: 'Budget' },
  { value: 'premium', label: 'Premium' },
  { value: 'lightweight', label: 'Lightweight' },
  { value: 'performance', label: 'Performance' },
];

const laptops = [
  {
    id: 'lp-001', slug: 'asus-rog-strix-g16', name: 'ROG Strix G16', brand: 'ASUS', category: 'gaming',
    price: 1699, compareAtPrice: 1899,
    shortDescription: 'A powerhouse gaming rig with a blazing-fast 240Hz display and serious frame rates.',
    description: "The ASUS ROG Strix G16 is built for players who don't compromise. A 24-core Intel Core i9 processor pairs with an RTX 4070 to push high frame rates at QHD+ resolution, while the 240Hz panel keeps fast-paced competitive titles buttery smooth. A redesigned thermal system with liquid metal on the CPU keeps clocks high even during marathon sessions, and per-key RGB lighting lets you make it your own.",
    specs: { cpu: 'Intel Core i9-14900HX (24-core, up to 5.8GHz)', gpu: 'NVIDIA GeForce RTX 4070 8GB GDDR6', ram: '16GB DDR5 (expandable to 32GB)', storage: '1TB PCIe 4.0 NVMe SSD', displaySize: '16 inches', resolution: '2560 x 1600 (QHD+)', refreshRate: '240Hz', os: 'Windows 11 Home', weight: '2.5 kg', battery: 'Up to 7 hours' },
    status: 'In Stock', rating: 4.7, reviewCount: 312, popularity: 96,
  },
  {
    id: 'lp-002', slug: 'acer-aspire-5', name: 'Aspire 5', brand: 'Acer', category: 'budget',
    price: 479, compareAtPrice: 549,
    shortDescription: 'Reliable everyday performance at a price that respects your budget.',
    description: "The Acer Aspire 5 proves you don't need to overspend to get a dependable laptop. A 6-core Ryzen 5 processor handles browsing, streaming, office work, and light multitasking with ease, backed by a fast NVMe SSD for quick boot and load times. It's the sensible pick for a backup machine, a first laptop, or anyone who wants solid day-to-day performance without the premium price tag.",
    specs: { cpu: 'AMD Ryzen 5 7530U (6-core, up to 4.5GHz)', gpu: 'AMD Radeon Graphics (integrated)', ram: '8GB DDR4', storage: '512GB PCIe NVMe SSD', displaySize: '15.6 inches', resolution: '1920 x 1080 (Full HD)', refreshRate: '60Hz', os: 'Windows 11 Home', weight: '1.7 kg', battery: 'Up to 9 hours' },
    status: 'In Stock', rating: 4.4, reviewCount: 528, popularity: 88,
  },
  {
    id: 'lp-003', slug: 'asus-vivobook-16', name: 'Vivobook 16', brand: 'ASUS', category: 'student',
    price: 649,
    shortDescription: 'A spacious 16-inch screen and all-day battery, made for lecture halls and libraries.',
    description: "Built with students in mind, the Vivobook 16 gives you a roomy 16-inch FHD+ display for research and note-taking side by side, a comfortable backlit keyboard for long study sessions, and enough battery life to make it through a full day of classes. 16GB of memory keeps dozens of browser tabs and office apps running smoothly at once.",
    specs: { cpu: 'Intel Core i5-1334U (10-core, up to 4.6GHz)', gpu: 'Intel Iris Xe Graphics (integrated)', ram: '16GB LPDDR5', storage: '512GB PCIe NVMe SSD', displaySize: '16 inches', resolution: '1920 x 1200 (FHD+)', refreshRate: '60Hz', os: 'Windows 11 Home', weight: '1.88 kg', battery: 'Up to 10 hours' },
    status: 'In Stock', rating: 4.5, reviewCount: 241, popularity: 79,
  },
  {
    id: 'lp-004', slug: 'lenovo-thinkpad-x1-carbon-gen12', name: 'ThinkPad X1 Carbon Gen 12', brand: 'Lenovo', category: 'business',
    price: 1899,
    shortDescription: 'The gold standard for business laptops — legendary keyboard, serious security.',
    description: "The ThinkPad X1 Carbon Gen 12 is engineered for professionals who live out of their laptop bag. A carbon-fiber-reinforced chassis passes military-grade durability testing while staying remarkably light, the keyboard remains best-in-class for long typing sessions, and enterprise security features like a match-on-chip fingerprint reader and a physical camera shutter keep sensitive work protected. Intel's Core Ultra platform balances strong performance with excellent battery efficiency.",
    specs: { cpu: 'Intel Core Ultra 7 155H (16-core)', gpu: 'Intel Arc Graphics (integrated)', ram: '16GB LPDDR5x (soldered)', storage: '512GB PCIe Gen4 NVMe SSD', displaySize: '14 inches', resolution: '1920 x 1200 (WUXGA)', refreshRate: '60Hz', os: 'Windows 11 Pro', weight: '1.12 kg', battery: 'Up to 15 hours' },
    status: 'In Stock', rating: 4.8, reviewCount: 456, popularity: 91,
  },
  {
    id: 'lp-005', slug: 'apple-macbook-pro-14-m3-pro', name: 'MacBook Pro 14" (M3 Pro)', brand: 'Apple', category: 'creator',
    price: 1999,
    shortDescription: 'A creative powerhouse with a stunning XDR display for photo, video, and design work.',
    description: "The 14-inch MacBook Pro with M3 Pro is built for creators who need to move fast without waiting on renders. The 11-core CPU and 14-core GPU chew through 4K video timelines and complex design files, while the Liquid Retina XDR display with ProMotion delivers accurate, vivid color that's ready for professional photo and video work straight out of the box. Unified memory means no bottlenecks moving data between apps.",
    specs: { cpu: 'Apple M3 Pro (11-core CPU)', gpu: 'Apple M3 Pro (14-core GPU, integrated)', ram: '18GB unified memory', storage: '512GB SSD', displaySize: '14.2 inches', resolution: '3024 x 1964 (Liquid Retina XDR)', refreshRate: 'Up to 120Hz (ProMotion)', os: 'macOS Sonoma', weight: '1.61 kg', battery: 'Up to 18 hours' },
    status: 'In Stock', rating: 4.9, reviewCount: 621, popularity: 97,
  },
  {
    id: 'lp-006', slug: 'dell-xps-13', name: 'XPS 13', brand: 'Dell', category: 'premium',
    price: 1299,
    shortDescription: 'A near-borderless InfinityEdge display in an ultra-compact, premium chassis.',
    description: "The Dell XPS 13 packs a large display into a remarkably small footprint thanks to its InfinityEdge bezels, wrapped in a machined-aluminum chassis with a soft-touch carbon fiber palm rest. It's the laptop for people who want a premium everyday machine that looks as sharp in a meeting as it performs, with Intel's latest Core Ultra chip delivering smooth multitasking and strong battery life.",
    specs: { cpu: 'Intel Core Ultra 7 155H (16-core)', gpu: 'Intel Arc Graphics (integrated)', ram: '16GB LPDDR5x', storage: '512GB PCIe NVMe SSD', displaySize: '13.4 inches', resolution: '1920 x 1200 (FHD+ InfinityEdge)', refreshRate: '60Hz', os: 'Windows 11 Home', weight: '1.23 kg', battery: 'Up to 12 hours' },
    status: 'In Stock', rating: 4.6, reviewCount: 389, popularity: 85,
  },
  {
    id: 'lp-007', slug: 'lg-gram-16', name: 'Gram 16', brand: 'LG', category: 'lightweight',
    price: 1449,
    shortDescription: 'A full 16-inch workstation that weighs next to nothing in your bag.',
    description: "The LG Gram 16 solves the tradeoff between screen size and portability — a large, roomy 16-inch WQXGA display in a magnesium-alloy chassis that weighs just 1.19kg, lighter than many 13-inch laptops. Military-grade durability testing means it can handle life on the move, and the Core Ultra 7 processor with 16GB of RAM keeps everyday multitasking effortless.",
    specs: { cpu: 'Intel Core Ultra 7 155H (16-core)', gpu: 'Intel Arc Graphics (integrated)', ram: '16GB LPDDR5x', storage: '1TB PCIe NVMe SSD', displaySize: '16 inches', resolution: '2560 x 1600 (WQXGA)', refreshRate: '60Hz', os: 'Windows 11 Home', weight: '1.19 kg', battery: 'Up to 19.5 hours' },
    status: 'Limited Stock', rating: 4.5, reviewCount: 173, popularity: 74,
  },
  {
    id: 'lp-008', slug: 'msi-raider-ge78-hx', name: 'Raider GE78 HX', brand: 'MSI', category: 'performance',
    price: 2899, compareAtPrice: 3199,
    shortDescription: 'Desktop-class power in a laptop chassis, for gamers and creators who refuse to compromise.',
    description: "The MSI Raider GE78 HX is for people who need maximum performance and won't settle for less. A 24-core Intel Core i9 and RTX 4080 combine with 32GB of RAM to handle the heaviest game titles, 3D rendering, and video editing workloads without breaking a sweat. A massive vapor-chamber cooling system and a 240Hz QHD+ display round out a machine built to perform like a desktop wherever you take it.",
    specs: { cpu: 'Intel Core i9-14900HX (24-core, up to 5.8GHz)', gpu: 'NVIDIA GeForce RTX 4080 12GB GDDR6', ram: '32GB DDR5', storage: '2TB PCIe 4.0 NVMe SSD', displaySize: '17 inches', resolution: '2560 x 1600 (QHD+)', refreshRate: '240Hz', os: 'Windows 11 Home', weight: '3.1 kg', battery: 'Up to 6 hours' },
    status: 'In Stock', rating: 4.8, reviewCount: 204, popularity: 93,
  },
];

const ACCESSORY_CATEGORIES = [
  { value: 'audio', label: 'Audio' },
  { value: 'mouse', label: 'Mouse' },
  { value: 'keyboard', label: 'Keyboard' },
  { value: 'cooling', label: 'Cooling' },
  { value: 'storage', label: 'Storage' },
  { value: 'bags', label: 'Laptop Bags' },
  { value: 'chargers', label: 'Chargers' },
  { value: 'other', label: 'Other Accessories' },
];

const accessories = [
  { id: 'ac-001', slug: 'logitech-mx-master-3s', name: 'MX Master 3S', brand: 'Logitech', category: 'mouse', price: 99.99, shortDescription: 'An ergonomic wireless mouse with ultra-quiet clicks and 8K DPI tracking.', status: 'In Stock', rating: 4.8, popularity: 90 },
  { id: 'ac-002', slug: 'razer-deathadder-v3', name: 'DeathAdder V3', brand: 'Razer', category: 'mouse', price: 69.99, shortDescription: 'A featherlight gaming mouse with a 30,000 DPI optical sensor for competitive play.', status: 'In Stock', rating: 4.7, popularity: 88 },
  { id: 'ac-003', slug: 'anker-nano-ii-65w-charger', name: 'Nano II 65W GaN Charger', brand: 'Anker', category: 'chargers', price: 39.99, shortDescription: 'A compact GaN fast charger that powers laptops, phones, and tablets from one port.', status: 'In Stock', rating: 4.6, popularity: 82 },
  { id: 'ac-004', slug: 'steelseries-arctis-nova-5', name: 'Arctis Nova 5', brand: 'SteelSeries', category: 'audio', price: 99.99, shortDescription: 'A lightweight gaming headset with high-fidelity audio and a noise-cancelling mic.', status: 'In Stock', rating: 4.6, popularity: 85 },
  { id: 'ac-005', slug: 'anker-soundcore-motion-300', name: 'Soundcore Motion 300', brand: 'Anker', category: 'audio', price: 79.99, shortDescription: 'A portable Bluetooth speaker with room-filling, spatial sound.', status: 'In Stock', rating: 4.5, popularity: 76 },
  { id: 'ac-006', slug: 'logitech-mx-keys', name: 'MX Keys', brand: 'Logitech', category: 'keyboard', price: 99.99, shortDescription: 'A wireless keyboard with sculpted keys and smart backlighting for any workspace.', status: 'In Stock', rating: 4.7, popularity: 87 },
  { id: 'ac-007', slug: 'razer-blackwidow-v4', name: 'BlackWidow V4', brand: 'Razer', category: 'keyboard', price: 169.99, shortDescription: 'A full-size mechanical keyboard with hot-swappable switches and per-key RGB.', status: 'In Stock', rating: 4.6, popularity: 80 },
  { id: 'ac-008', slug: 'coolermaster-notepal-x3', name: 'NotePal X3', brand: 'Cooler Master', category: 'cooling', price: 34.99, shortDescription: 'A 200mm cooling fan pad that keeps gaming laptops running cool under load.', status: 'In Stock', rating: 4.3, popularity: 68 },
  { id: 'ac-009', slug: 'samsung-t7-shield-1tb', name: 'T7 Shield 1TB', brand: 'Samsung', category: 'storage', price: 109.99, shortDescription: 'A rugged, IP65-rated portable SSD with up to 1,050MB/s transfer speeds.', status: 'In Stock', rating: 4.8, popularity: 89 },
  { id: 'ac-010', slug: 'anker-7-in-1-usb-c-hub', name: '7-in-1 USB-C Hub', brand: 'Anker', category: 'other', price: 49.99, shortDescription: 'Add HDMI, USB-A, SD card, and fast charging to any modern laptop.', status: 'In Stock', rating: 4.5, popularity: 75 },
  { id: 'ac-011', slug: 'logitech-brio-505', name: 'Brio 505', brand: 'Logitech', category: 'other', price: 99.99, shortDescription: 'A 1080p webcam with auto-light correction, built for video calls that matter.', status: 'In Stock', rating: 4.5, popularity: 74 },
  { id: 'ac-012', slug: 'targus-cypress-15-6-bag', name: 'Cypress 15.6" Laptop Bag', brand: 'Targus', category: 'bags', price: 44.99, shortDescription: 'A padded, water-resistant laptop bag with dedicated storage for cables and accessories.', status: 'In Stock', rating: 4.4, popularity: 70 },
  { id: 'ac-013', slug: 'rain-design-mstand', name: 'mStand Laptop Stand', brand: 'Rain Design', category: 'other', price: 59.99, shortDescription: 'An aluminum laptop stand that raises your screen to eye level for better posture.', status: 'In Stock', rating: 4.7, popularity: 72 },
  { id: 'ac-014', slug: 'razer-goliathus-extended-chroma', name: 'Goliathus Extended Chroma', brand: 'Razer', category: 'other', price: 34.99, shortDescription: 'An extended RGB mouse pad with a smooth cloth surface for precise tracking.', status: 'Limited Stock', rating: 4.4, popularity: 60 },
];

/* ================= IMAGES (paths live in index.html, NOT here) =================
   Every picture is an <img data-image="..."> inside <template id="image-registry">
   in index.html. To change a picture, edit/replace the file there — no JS edits. */
const IMAGE_REGISTRY = {};
document.querySelectorAll('#image-registry').forEach((tpl) => {
  tpl.content.querySelectorAll('img[data-image]').forEach((img) => {
    IMAGE_REGISTRY[img.dataset.image] = { src: img.getAttribute('src'), alt: img.getAttribute('alt') || '', cls: img.className };
  });
});
function imageSrc(key) { return (IMAGE_REGISTRY[key] || IMAGE_REGISTRY.placeholder || { src: '' }).src; }
function imageAlt(key) { return (IMAGE_REGISTRY[key] || { alt: '' }).alt; }
function imageClass(key) { return (IMAGE_REGISTRY[key] || { cls: '' }).cls; }
laptops.forEach((p) => { p.image = imageSrc(p.slug); });
accessories.forEach((p) => { p.image = imageSrc(p.slug); });

/* ---- Data-access functions. Views call ONLY these, never the arrays
   directly — Semester 2 swaps the bodies for fetch() calls. ---- */
function getAllLaptops() { return laptops; }
function getLaptopBySlug(slug) { return laptops.find((l) => l.slug === slug); }
function getRelatedLaptops(laptop, count = 4) {
  return laptops
    .filter((l) => l.id !== laptop.id && l.category === laptop.category)
    .concat(laptops.filter((l) => l.id !== laptop.id && l.category !== laptop.category))
    .slice(0, count);
}
function getAllAccessories() { return accessories; }
function findProductById(id) {
  return laptops.find((l) => l.id === id) || accessories.find((a) => a.id === id);
}

/* ================= 3. UTILS ================= */
function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function statusBadgeClass(status) {
  if (status === 'In Stock') return 'badge-success';
  if (status === 'Limited Stock') return 'badge-warning';
  if (status === 'Pre-order') return 'badge-cyan';
  if (status === 'Out of Stock') return 'badge-danger';
  return 'badge-neutral';
}

function filterByCategory(items, category) {
  if (!category || category === 'all') return items;
  return items.filter((item) => item.category === category);
}

function searchItems(items, query) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(q) ||
      item.brand.toLowerCase().includes(q) ||
      (item.shortDescription && item.shortDescription.toLowerCase().includes(q))
  );
}

function sortItems(items, sortBy) {
  const sorted = items.slice();
  switch (sortBy) {
    case 'price-asc': return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc': return sorted.sort((a, b) => b.price - a.price);
    case 'name': return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'popularity': return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    default: return sorted;
  }
}

const SORT_OPTIONS = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name (A\u2013Z)' },
];

/** Parses "#/laptops?category=gaming" into { path: '/laptops', params: {category:'gaming'} } */
function parseHash() {
  const raw = window.location.hash.slice(1) || '/';
  const [path, queryStr] = raw.split('?');
  const params = {};
  if (queryStr) {
    new URLSearchParams(queryStr).forEach((value, key) => { params[key] = value; });
  }
  return { path: path || '/', params };
}

/** onerror handler for every <img> — swaps in a branded placeholder if a local file is ever missing. */
function imgFallback(el) {
  el.onerror = null;
  el.src = imageSrc('placeholder');
}

/* ================= 4. CART ================= */
const CART_STORAGE_KEY = 'dtech1-cart';

const Cart = {
  items: [],
  isOpen: false,

  load() {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      this.items = raw ? JSON.parse(raw) : [];
    } catch {
      this.items = [];
    }
  },

  save() {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    } catch {
      /* localStorage unavailable — cart still works for this session */
    }
  },

  addItem(product, quantity, type) {
    const existing = this.items.find((i) => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        slug: product.slug,
        name: product.name,
        brand: product.brand,
        price: product.price,
        image: product.image,
        type: type,
        quantity: quantity,
      });
    }
    this.save();
    renderCartDrawer();
    updateCartCount();
    showToast(`Added ${product.name} to cart`);
  },

  removeItem(id) {
    this.items = this.items.filter((i) => i.id !== id);
    this.save();
    renderCartDrawer();
    updateCartCount();
  },

  setQuantity(id, quantity) {
    if (quantity < 1) { this.removeItem(id); return; }
    const item = this.items.find((i) => i.id === id);
    if (item) item.quantity = quantity;
    this.save();
    renderCartDrawer();
    updateCartCount();
  },

  increment(id) {
    const item = this.items.find((i) => i.id === id);
    if (item) this.setQuantity(id, item.quantity + 1);
  },

  decrement(id) {
    const item = this.items.find((i) => i.id === id);
    if (item) this.setQuantity(id, item.quantity - 1);
  },

  itemCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  },

  subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  },

  open() { this.isOpen = true; renderCartDrawer(); },
  close() { this.isOpen = false; renderCartDrawer(); },
};

function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  const count = Cart.itemCount();
  countEl.textContent = count > 99 ? '99+' : String(count);
  countEl.hidden = count === 0;
}

function cartItemRowHTML(item) {
  return `
    <div class="cart-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" onerror="imgFallback(this)" />
      <div class="cart-item-info">
        <div class="cart-item-top">
          <div>
            <p class="cart-item-brand">${escapeHtml(item.brand)}</p>
            <p class="cart-item-name">${escapeHtml(item.name)}</p>
          </div>
          <button class="cart-item-remove" data-action="cart-remove" data-id="${item.id}" aria-label="Remove ${escapeHtml(item.name)}">${ICONS.trash}</button>
        </div>
        <div class="cart-item-bottom">
          <div class="qty-control">
            <button data-action="cart-dec" data-id="${item.id}" aria-label="Decrease quantity">${ICONS.minus}</button>
            <span>${item.quantity}</span>
            <button data-action="cart-inc" data-id="${item.id}" aria-label="Increase quantity">${ICONS.plus}</button>
          </div>
          <span class="cart-item-price">${formatPrice(item.price * item.quantity)}</span>
        </div>
      </div>
    </div>`;
}

function renderCartDrawer() {
  const root = document.getElementById('cart-root');
  if (!Cart.isOpen) { root.innerHTML = ''; return; }

  const itemsHtml = Cart.items.length === 0
    ? `<div class="cart-empty">
         ${ICONS.bag}
         <p>Your cart is empty.</p>
         <a href="#/laptops" class="btn btn-outline btn-sm" data-action="close-cart">Browse Laptops</a>
       </div>`
    : `<div>${Cart.items.map(cartItemRowHTML).join('')}</div>`;

  const footerHtml = Cart.items.length === 0 ? '' : `
    <div class="cart-footer">
      <div class="cart-summary-row"><span>Subtotal</span><span class="value">${formatPrice(Cart.subtotal())}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span class="value">Calculated at checkout</span></div>
      <div class="cart-total-row"><span>Total</span><span>${formatPrice(Cart.subtotal())}</span></div>
      <button class="btn btn-primary btn-full" data-action="open-checkout">Checkout</button>
    </div>`;

  root.innerHTML = `
    <div class="cart-drawer-wrap">
      <div class="overlay animate-fade-in" data-action="close-cart"></div>
      <div class="cart-drawer animate-fade-in">
        <div class="cart-header">
          <div class="cart-header-title">
            ${ICONS.bag}
            <h2>Your Cart</h2>
            <span class="count">${Cart.items.length}</span>
          </div>
          <button class="modal-close" data-action="close-cart" aria-label="Close cart">${ICONS.x}</button>
        </div>
        <div class="cart-body">${itemsHtml}</div>
        ${footerHtml}
      </div>
    </div>`;
}

function openCheckoutModal() {
  const root = document.getElementById('modal-root');
  root.innerHTML = `
    <div class="modal-wrap">
      <div class="overlay animate-fade-in" data-action="close-modal"></div>
      <div class="modal-box card animate-scale-in">
        <div class="modal-head">
          <h3>Checkout</h3>
          <button class="modal-close" data-action="close-modal" aria-label="Close">${ICONS.x}</button>
        </div>
        <div class="modal-body">
          <p>Checkout functionality will be available in the next version. This first release focuses on browsing, filtering, and building your cart &mdash; full order processing and payment arrive with the Semester 2 backend.</p>
          <button class="btn btn-primary btn-full" style="margin-top:1.25rem;" data-action="close-modal">Got it</button>
        </div>
      </div>
    </div>`;
}

function closeModal() {
  document.getElementById('modal-root').innerHTML = '';
}

let toastTimer = null;
function showToast(message) {
  const root = document.getElementById('toast-root');
  clearTimeout(toastTimer);
  root.innerHTML = `<div class="toast" id="active-toast">${ICONS.checkCircle}<span>${escapeHtml(message)}</span></div>`;
  toastTimer = setTimeout(() => {
    const el = document.getElementById('active-toast');
    if (!el) return;
    el.classList.add('hide');
    setTimeout(() => { root.innerHTML = ''; }, 200);
  }, 2000);
}


/* ================= 4b. FORM VALIDATION (shared) ================= */
/*
  Every form on the site uses these helpers, so name rules are defined ONCE (validateName)
  and reused by the registration form and the contact/feedback form.
  Inputs opt in with data-validate="name|email|username|login-id|new-password|login-password|confirm-password|required".
*/
const NAME_MAX_LENGTH = 80;
// Letters (any language, incl. accented) + combining marks; words joined by a single space, hyphen or apostrophe.
const NAME_PATTERN = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;
const EMAIL_PATTERN = /^[^\s@.]+(?:\.[^\s@.]+)*@[^\s@.]+(?:\.[^\s@.]+)*\.[^\s@.]{2,}$/;
const USERNAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]{2,19}$/;

/**
 * Reusable name validator.
 * Returns { valid, value, message } where value is the cleaned (trimmed, single-spaced) name.
 */
function validateName(raw) {
  const value = String(raw == null ? '' : raw).normalize('NFC').replace(/\s+/g, ' ').trim();
  if (!value) return { valid: false, value, message: 'Please enter your name.' };
  if (/\p{N}/u.test(value)) return { valid: false, value, message: 'Names cannot contain numbers. Please use letters only.' };
  if (value.length < 2) return { valid: false, value, message: 'Names must be at least 2 letters long.' };
  if (value.length > NAME_MAX_LENGTH) return { valid: false, value, message: `Names must be ${NAME_MAX_LENGTH} characters or fewer.` };
  if (!NAME_PATTERN.test(value)) {
    return { valid: false, value, message: "Names can only contain letters, spaces, hyphens (-) and apostrophes ('), and must start and end with a letter." };
  }
  return { valid: true, value, message: '' };
}

function validateEmail(raw) {
  const value = String(raw || '').trim();
  if (!value) return 'Please enter your email address.';
  if (!EMAIL_PATTERN.test(value)) return 'Please enter a valid email address, like you@email.com.';
  return '';
}

function validateUsername(raw) {
  const value = String(raw || '').trim();
  if (!value) return 'Please choose a username.';
  if (!USERNAME_PATTERN.test(value)) return 'Usernames are 3\u201320 characters, start with a letter, and use only letters, numbers and underscores.';
  return '';
}

function validateNewPassword(value) {
  if (!value) return 'Please create a password.';
  if (value.length < 8) return 'Your password must be at least 8 characters long.';
  if (!/[A-Za-z]/.test(value) || !/\d/.test(value)) return 'Your password needs at least one letter and one number.';
  return '';
}

/** Returns an error message for one input, or '' when it is valid. */
function getFieldError(input) {
  const rule = input.dataset.validate;
  if (!rule) return '';
  const value = input.value;
  switch (rule) {
    case 'name': return validateName(value).message;
    case 'email': return validateEmail(value);
    case 'username': return validateUsername(value);
    case 'login-id': {
      const v = value.trim();
      if (!v) return 'Please enter your email address or username.';
      return v.includes('@') ? validateEmail(v) : (USERNAME_PATTERN.test(v) ? '' : 'Enter a valid email address or username.');
    }
    case 'new-password': return validateNewPassword(value);
    case 'login-password': return value ? '' : 'Please enter your password.';
    case 'confirm-password': {
      if (!value) return 'Please confirm your password.';
      const pw = input.form && input.form.elements['password'];
      return pw && pw.value === value ? '' : 'Passwords do not match.';
    }
    case 'required':
      return value.trim() ? '' : `Please enter your ${input.dataset.label || 'answer'}.`;
    default: return '';
  }
}

function setFieldError(input, message) {
  const errorEl = document.getElementById(`${input.id}-error`);
  input.classList.toggle('is-invalid', Boolean(message));
  if (message) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
  if (errorEl) { errorEl.textContent = message; errorEl.hidden = !message; }
}

/** Validates one field, shows/clears its error, and tidies the value (trim) when it is valid. */
function validateField(input) {
  const message = getFieldError(input);
  setFieldError(input, message);
  if (!message) {
    if (input.dataset.validate === 'name') input.value = validateName(input.value).value;
    else if (['email', 'username', 'required'].includes(input.dataset.validate)) input.value = input.value.trim();
  }
  return !message;
}

/** Validates every field in a form; focuses the first invalid one. Returns true when all are valid. */
function validateForm(form) {
  let firstInvalid = null;
  form.querySelectorAll('[data-validate]').forEach((input) => {
    if (!validateField(input) && !firstInvalid) firstInvalid = input;
  });
  if (firstInvalid) firstInvalid.focus();
  return !firstInvalid;
}

function clearFormErrors(form) {
  form.querySelectorAll('[data-validate]').forEach((input) => { setFieldError(input, ''); delete input.dataset.touched; });
}

/** Markup helpers so every field has a label, an error slot and correct ARIA wiring. */
function fieldErrorHTML(id) {
  return `<p class="field-error" id="${id}-error" role="alert" hidden></p>`;
}

function authFieldHTML({ id, name, label, type = 'text', placeholder = '', validate, autocomplete = 'off', hint = '' }) {
  const describedBy = `${hint ? `${id}-hint ` : ''}${id}-error`;
  const input = `<input id="${id}" name="${name}" type="${type}" class="input" placeholder="${escapeHtml(placeholder)}" autocomplete="${autocomplete}" data-validate="${validate}" aria-describedby="${describedBy}" required />`;
  const control = type === 'password'
    ? `<div class="password-wrap">${input}<button type="button" class="password-toggle" data-action="toggle-password" data-target="${id}" aria-label="Show password" aria-pressed="false">${ICONS.eye}</button></div>`
    : input;
  return `
    <div class="field">
      <label for="${id}">${label}</label>
      ${control}
      ${hint ? `<p class="field-hint" id="${id}-hint">${hint}</p>` : ''}
      ${fieldErrorHTML(id)}
    </div>`;
}

/* ================= 4c. ACCOUNTS (front-end only, in memory) ================= */
/*
  FRONT-END ONLY. There is no server and no database. Accounts created here live in this
  JavaScript array and vanish when the page is refreshed. Nothing is written to localStorage,
  sessionStorage or cookies, and nothing is sent anywhere. Real accounts need a backend.
*/
const accounts = [];
let currentUser = null;
let authFlash = '';
const AUTH_PATHS = ['/login', '/register', '/forgot-password'];

function findAccount(identifier) {
  const id = identifier.trim().toLowerCase();
  return accounts.find((a) => a.email.toLowerCase() === id || a.username.toLowerCase() === id);
}

function showFormMessage(form, kind, html) {
  const box = form.parentElement.querySelector('.form-message');
  if (!box) return;
  box.className = `form-message form-message-${kind}`;
  box.innerHTML = `${kind === 'success' ? ICONS.checkCircle : ICONS.alert}<span>${html}</span>`;
  box.hidden = false;
}

function hideFormMessage(form) {
  const box = form.parentElement.querySelector('.form-message');
  if (box) box.hidden = true;
}

function authShellHTML({ title, subtitle, formHTML, footerHTML, wide = false }) {
  return `
    <div class="section page-py">
      <div class="auth-wrap${wide ? ' auth-wrap-wide' : ''}">
        <div class="card auth-card">
          <div class="auth-head">
            <span class="badge badge-accent">D-Tech1 &middot; Daryl-Technology 1</span>
            <h1>${title}</h1>
            <p>${subtitle}</p>
          </div>
          <div class="form-message" role="status" hidden></div>
          ${formHTML}
          <p class="auth-switch">${footerHTML}</p>
        </div>
      </div>
    </div>`;
}

function renderLogin() {
  document.getElementById('app').innerHTML = authShellHTML({
    title: 'Log in',
    subtitle: 'Welcome back. Log in to continue to D-Tech1.',
    formHTML: `
      <form id="login-form" class="auth-form" novalidate>
        ${authFieldHTML({ id: 'login-id', name: 'identifier', label: 'Email address or username', validate: 'login-id', placeholder: 'you@email.com or username', autocomplete: 'username' })}
        ${authFieldHTML({ id: 'login-password', name: 'password', label: 'Password', type: 'password', validate: 'login-password', placeholder: 'Your password', autocomplete: 'current-password' })}
        <div class="auth-row"><a href="#/forgot-password" class="text-link">Forgot your password?</a></div>
        <button type="submit" class="btn btn-primary btn-full">Log in</button>
      </form>`,
    footerHTML: `New to D-Tech1? <a href="#/register" class="text-link">Create an account</a>`,
  });
  if (authFlash) {
    const form = document.getElementById('login-form');
    showFormMessage(form, 'success', authFlash);
    authFlash = '';
  }
}

function renderRegister() {
  document.getElementById('app').innerHTML = authShellHTML({
    title: 'Create your account',
    subtitle: 'Join D-Tech1 in a few quick steps.',
    wide: true,
    formHTML: `
      <form id="register-form" class="auth-form" novalidate>
        ${authFieldHTML({ id: 'reg-name', name: 'fullName', label: 'Full name', validate: 'name', placeholder: 'Jane Doe', autocomplete: 'name' })}
        ${authFieldHTML({ id: 'reg-username', name: 'username', label: 'Username', validate: 'username', placeholder: 'jane_doe', autocomplete: 'username', hint: '3\u201320 characters: letters, numbers and underscores. Must start with a letter.' })}
        ${authFieldHTML({ id: 'reg-email', name: 'email', label: 'Email address', type: 'email', validate: 'email', placeholder: 'you@email.com', autocomplete: 'email' })}
        ${authFieldHTML({ id: 'reg-password', name: 'password', label: 'Password', type: 'password', validate: 'new-password', placeholder: 'Create a password', autocomplete: 'new-password', hint: 'At least 8 characters, with a letter and a number.' })}
        ${authFieldHTML({ id: 'reg-confirm', name: 'confirmPassword', label: 'Confirm password', type: 'password', validate: 'confirm-password', placeholder: 'Re-enter your password', autocomplete: 'new-password' })}
        <button type="submit" class="btn btn-primary btn-full">Create account</button>
      </form>`,
    footerHTML: `Already have an account? <a href="#/login" class="text-link">Log in</a>`,
  });
}

function renderForgotPassword() {
  document.getElementById('app').innerHTML = authShellHTML({
    title: 'Reset your password',
    subtitle: 'Enter the email address linked to your account.',
    formHTML: `
      <form id="forgot-form" class="auth-form" novalidate>
        ${authFieldHTML({ id: 'forgot-email', name: 'email', label: 'Email address', type: 'email', validate: 'email', placeholder: 'you@email.com', autocomplete: 'email' })}
        <button type="submit" class="btn btn-primary btn-full">Send reset link</button>
      </form>`,
    footerHTML: `Remembered it? <a href="#/login" class="text-link">Back to log in</a>`,
  });
}

function handleLoginSubmit(form) {
  if (!validateForm(form)) { hideFormMessage(form); return; }
  const account = findAccount(form.elements['identifier'].value);
  if (!account || account.password !== form.elements['password'].value) {
    const hint = accounts.length ? '' : ' No account has been created yet &mdash; <a href="#/register" class="text-link">register first</a>.';
    showFormMessage(form, 'error', `Incorrect email/username or password.${hint}`);
    return;
  }
  currentUser = { fullName: account.fullName, username: account.username };
  form.reset();
  clearFormErrors(form);
  window.location.hash = '#/';
}

function handleRegisterSubmit(form) {
  if (!validateForm(form)) { hideFormMessage(form); return; }
  const fullName = validateName(form.elements['fullName'].value).value;
  const username = form.elements['username'].value.trim();
  const email = form.elements['email'].value.trim();

  const usernameTaken = accounts.some((a) => a.username.toLowerCase() === username.toLowerCase());
  const emailTaken = accounts.some((a) => a.email.toLowerCase() === email.toLowerCase());
  if (usernameTaken || emailTaken) {
    if (usernameTaken) setFieldError(form.elements['username'], 'That username is already taken.');
    if (emailTaken) setFieldError(form.elements['email'], 'That email is already registered.');
    (usernameTaken ? form.elements['username'] : form.elements['email']).focus();
    return;
  }

  // In-memory only. Never persisted, never sent anywhere.
  accounts.push({ fullName, username, email, password: form.elements['password'].value });
  authFlash = `Account created for ${escapeHtml(fullName)}. Please log in to continue.`;
  window.location.hash = '#/login';
}

function handleForgotSubmit(form) {
  if (!validateForm(form)) { hideFormMessage(form); return; }
  showFormMessage(form, 'success', 'Password reset isn&rsquo;t available yet. Resetting a password needs a server to verify your email, which this site doesn&rsquo;t have. Please contact support or create a new account.');
  form.reset();
  clearFormErrors(form);
}

/* ================= 5. VIEWS ================= */

/* ---- Shared card renderers ---- */
function productCardHTML(p) {
  const categoryLabel = (CATEGORIES.find((c) => c.value === p.category) || {}).label || p.category;
  const saleBadge = p.compareAtPrice ? `<span class="badge badge-danger">Sale</span>` : '';
  const cpuShort = p.specs.cpu.split('(')[0].trim();
  const ramShort = p.specs.ram.split('(')[0].trim();
  return `
    <div class="card product-card animate-fade-in-up">
      <a href="#/laptops/${p.slug}" class="product-media">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.brand)} ${escapeHtml(p.name)}" loading="lazy" onerror="imgFallback(this)" />
        <div class="badges-top-left">
          <span class="badge badge-accent">${escapeHtml(categoryLabel)}</span>
          ${saleBadge}
        </div>
        <div class="badges-top-right">
          <span class="badge ${statusBadgeClass(p.status)}">${escapeHtml(p.status)}</span>
        </div>
      </a>
      <div class="product-body">
        <p class="product-brand">${escapeHtml(p.brand)}</p>
        <a href="#/laptops/${p.slug}"><h3 class="product-name">${escapeHtml(p.name)}</h3></a>
        <p class="product-desc">${escapeHtml(p.shortDescription)}</p>
        <div class="product-meta">
          <span>${escapeHtml(cpuShort)}</span><span class="dot">&bull;</span>
          <span>${escapeHtml(ramShort)}</span><span class="dot">&bull;</span>
          <span>${escapeHtml(p.specs.displaySize)}</span>
        </div>
        ${p.rating ? `<div class="product-rating">${ICONS.star}<strong>${p.rating}</strong><span>(${p.reviewCount})</span></div>` : ''}
        <div class="product-price-row">
          <div>
            ${p.compareAtPrice ? `<span class="price-compare">${formatPrice(p.compareAtPrice)}</span>` : ''}
            <span class="price-current">${formatPrice(p.price)}</span>
          </div>
        </div>
        <div class="product-actions">
          <a href="#/laptops/${p.slug}" class="btn btn-secondary">View Details</a>
          <button class="btn btn-primary" data-action="add-to-cart" data-id="${p.id}" data-type="laptop" title="Add to cart" aria-label="Add to cart">${ICONS.cart}</button>
        </div>
      </div>
    </div>`;
}

function accessoryCardHTML(p) {
  const categoryLabel = (ACCESSORY_CATEGORIES.find((c) => c.value === p.category) || {}).label || p.category;
  return `
    <div class="card product-card animate-fade-in-up">
      <div class="product-media">
        <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.brand)} ${escapeHtml(p.name)}" loading="lazy" onerror="imgFallback(this)" />
        <div class="badges-top-left"><span class="badge badge-cyan">${escapeHtml(categoryLabel)}</span></div>
        <div class="badges-top-right"><span class="badge ${statusBadgeClass(p.status)}">${escapeHtml(p.status)}</span></div>
      </div>
      <div class="product-body">
        <p class="product-brand">${escapeHtml(p.brand)}</p>
        <h3 class="product-name">${escapeHtml(p.name)}</h3>
        <p class="product-desc">${escapeHtml(p.shortDescription)}</p>
        <div class="product-price-row" style="margin-top:auto;">
          <span class="price-current">${formatPrice(p.price)}</span>
          <button class="btn btn-primary btn-sm" data-action="add-to-cart" data-id="${p.id}" data-type="accessory">${ICONS.cart} Add</button>
        </div>
      </div>
    </div>`;
}

function emptyStateHTML(message) {
  return `<div class="empty-state">${ICONS.packageSearch}<p>${escapeHtml(message)}</p></div>`;
}

/* ---- Filter bar (shared by Laptops & Accessories views) ---- */
function filterBarHTML(view, categories, state) {
  const pills = [`<button class="pill ${state.category === 'all' ? 'active' : ''}" data-action="filter-category" data-view="${view}" data-category="all">All</button>`]
    .concat(categories.map((c) => `<button class="pill ${state.category === c.value ? 'active' : ''}" data-action="filter-category" data-view="${view}" data-category="${c.value}">${escapeHtml(c.label)}</button>`))
    .join('');

  const sortOpts = SORT_OPTIONS.map((o) => `<option value="${o.value}" ${state.sort === o.value ? 'selected' : ''}>Sort: ${escapeHtml(o.label)}</option>`).join('');

  return `
    <div class="filter-bar">
      <div class="filter-top">
        <div class="search-wrap">
          ${ICONS.search}
          <input type="text" class="input" placeholder="Search products..." data-action="filter-search" data-view="${view}" value="${escapeHtml(state.search)}" />
        </div>
        <div class="sort-wrap">
          ${ICONS.sliders}
          <select class="select" data-action="filter-sort" data-view="${view}">${sortOpts}</select>
        </div>
      </div>
      <div class="filter-pills">${pills}</div>
      <p class="result-count" id="${view}-result-count"></p>
    </div>
    <div class="product-grid" id="${view}-grid"></div>`;
}

/* ---- Home ---- */
const CATEGORY_TILES = [
  { key: 'gaming', title: 'Gaming', desc: 'High refresh rates, discrete GPUs, built for frame rate.' },
  { key: 'student', title: 'Student', desc: 'Lightweight, affordable, all-day battery for class.' },
  { key: 'business', title: 'Business', desc: 'Durable, secure, and built for productivity on the go.' },
  { key: 'creator', title: 'Creator', desc: 'Color-accurate displays and the power to render fast.' },
];

function renderHome() {
  const featured = getAllLaptops().slice().sort((a, b) => b.popularity - a.popularity).slice(0, 4);

  document.getElementById('app').innerHTML = `
    <section class="hero">
      <div class="section hero-inner">
        <div class="animate-fade-in-up">
          <span class="badge badge-neutral" style="color:var(--accent-400);">${ICONS.zap} New arrivals just dropped</span>
          <h1 class="hero-title">Power Your <span class="grad">World.</span></h1>
          <p class="hero-sub">Discover laptops built for gaming, studying, creating, and everything in between &mdash; plus the accessories that make them even better.</p>
          <div class="hero-cta">
            <a href="#/laptops" class="btn btn-primary">Shop Laptops ${ICONS.arrowRight}</a>
            <a href="#/accessories" class="btn btn-secondary">Browse Accessories</a>
          </div>
          <div class="hero-stats">
            <div>${ICONS.truck}<span>Free shipping over $500</span></div>
            <div>${ICONS.shieldCheck}<span>2-year warranty</span></div>
            <div>${ICONS.zap}<span>Fast, reliable support</span></div>
          </div>
        </div>
        <div class="hero-art animate-fade-in">
          <div class="glow"></div>
          <img src="${escapeHtml(imageSrc('hero-laptop'))}" alt="${escapeHtml(imageAlt('hero-laptop'))}" class="${imageClass('hero-laptop')}" onerror="imgFallback(this)" />
        </div>
      </div>
    </section>

    <section class="section page-py">
      <div class="section-heading">
        <div><h2>Shop by Category</h2><p>Find the right laptop for exactly what you do.</p></div>
      </div>
      <div class="category-grid">
        ${CATEGORY_TILES.map((t) => `
          <a href="#/laptops?category=${t.key}" class="card category-tile">
            <div class="icon">${categoryIcon(t.key)}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
          </a>`).join('')}
      </div>
    </section>

    <section class="section page-py">
      <div class="section-heading">
        <div><h2>Popular Right Now</h2><p>Customer favorites across every category.</p></div>
        <a href="#/laptops" class="view-all">View all ${ICONS.arrowRight}</a>
      </div>
      <div class="product-grid">${featured.map(productCardHTML).join('')}</div>
    </section>

    <section class="section page-py">
      <div class="card about-preview-card">
        <div>
          <span class="badge badge-cyan">About D-Tech1</span>
          <h2>Technology retail, done the way it should be.</h2>
          <p>We test every laptop we sell, curate a lineup that actually makes sense, and back it with support from people who know the hardware. No filler, no guesswork &mdash; just the right machine for what you're trying to do.</p>
          <a href="#/about" class="btn btn-outline" style="margin-top:1.5rem;">Learn more about us ${ICONS.arrowRight}</a>
        </div>
        <img src="${escapeHtml(imageSrc('about-workspace'))}" alt="${escapeHtml(imageAlt('about-workspace'))}" class="${imageClass('about-workspace')}" onerror="imgFallback(this)" />
      </div>
    </section>`;
}

/* ---- Laptop Shop ---- */
const laptopViewState = { category: 'all', sort: 'popularity', search: '' };

function renderLaptopsView(params) {
  laptopViewState.category = params.category || 'all';
  laptopViewState.sort = 'popularity';
  laptopViewState.search = '';

  document.getElementById('app').innerHTML = `
    <div class="section page-py">
      <div class="page-header">
        <h1>Laptops</h1>
        <p>From budget-friendly everyday machines to no-compromise performance rigs &mdash; find the laptop built for what you do.</p>
      </div>
      ${filterBarHTML('laptop', CATEGORIES, laptopViewState)}
    </div>`;

  updateLaptopGrid();
}

function updateLaptopGrid() {
  let list = filterByCategory(getAllLaptops(), laptopViewState.category);
  list = searchItems(list, laptopViewState.search);
  list = sortItems(list, laptopViewState.sort);

  document.getElementById('laptop-grid').innerHTML =
    list.length ? list.map(productCardHTML).join('') : emptyStateHTML('No laptops match your filters. Try clearing the search or category.');
  document.getElementById('laptop-result-count').textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'} found`;
}

/* ---- Accessories Shop ---- */
const accessoryViewState = { category: 'all', sort: 'popularity', search: '' };

function renderAccessoriesView() {
  accessoryViewState.category = 'all';
  accessoryViewState.sort = 'popularity';
  accessoryViewState.search = '';

  document.getElementById('app').innerHTML = `
    <div class="section page-py">
      <div class="page-header">
        <h1>Accessories</h1>
        <p>Everything that makes your laptop better &mdash; mice, keyboards, audio, storage, and more.</p>
      </div>
      ${filterBarHTML('accessory', ACCESSORY_CATEGORIES, accessoryViewState)}
    </div>`;

  updateAccessoryGrid();
}

function updateAccessoryGrid() {
  let list = filterByCategory(getAllAccessories(), accessoryViewState.category);
  list = searchItems(list, accessoryViewState.search);
  list = sortItems(list, accessoryViewState.sort);

  document.getElementById('accessory-grid').innerHTML =
    list.length ? list.map(accessoryCardHTML).join('') : emptyStateHTML('No accessories match your filters. Try clearing the search or category.');
  document.getElementById('accessory-result-count').textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'} found`;
}

/* ---- Product Details ---- */
const SPEC_LABELS = {
  cpu: 'Processor (CPU)', gpu: 'Graphics (GPU)', ram: 'Memory (RAM)', storage: 'Storage',
  displaySize: 'Display Size', resolution: 'Resolution', refreshRate: 'Refresh Rate',
  os: 'Operating System', weight: 'Weight', battery: 'Battery Life',
};
let detailQuantity = 1;

function renderProductDetails(slug) {
  const laptop = getLaptopBySlug(slug);
  const app = document.getElementById('app');

  if (!laptop) {
    app.innerHTML = `
      <div class="section page-py text-center" style="padding:6rem 0;">
        <h1>Product not found</h1>
        <p style="margin-top:0.5rem;color:var(--slate-400);">This laptop may have been removed or the link is incorrect.</p>
        <a href="#/laptops" class="btn btn-primary" style="margin-top:1.5rem;">Back to Laptops</a>
      </div>`;
    return;
  }

  detailQuantity = 1;
  const categoryLabel = (CATEGORIES.find((c) => c.value === laptop.category) || {}).label || laptop.category;
  const related = getRelatedLaptops(laptop, 4);
  const inStock = laptop.status !== 'Out of Stock';

  const specsHtml = Object.entries(laptop.specs).map(([key, value]) => `
    <div class="specs-row">
      <dt>${SPEC_LABELS[key] || key}</dt>
      <dd>${escapeHtml(value)}</dd>
    </div>`).join('');

  app.innerHTML = `
    <div class="section page-py">
      <nav class="breadcrumb">
        <a href="#/">Home</a> ${ICONS.chevronRight}
        <a href="#/laptops">Laptops</a> ${ICONS.chevronRight}
        <span class="current">${escapeHtml(laptop.name)}</span>
      </nav>

      <div class="pdp-grid">
        <div>
          <div class="pdp-image"><img src="${escapeHtml(laptop.image)}" alt="${escapeHtml(laptop.brand)} ${escapeHtml(laptop.name)}" onerror="imgFallback(this)" /></div>
        </div>

        <div>
          <div class="pdp-badges">
            <span class="badge badge-accent">${escapeHtml(categoryLabel)}</span>
            <span class="badge ${statusBadgeClass(laptop.status)}">${escapeHtml(laptop.status)}</span>
          </div>
          <p class="pdp-brand">${escapeHtml(laptop.brand)}</p>
          <h1 class="pdp-title">${escapeHtml(laptop.name)}</h1>
          ${laptop.rating ? `<div class="pdp-rating"><span class="stars">${ICONS.star}<strong style="color:#fff;">${laptop.rating}</strong></span><span>(${laptop.reviewCount} reviews)</span></div>` : ''}
          <div class="pdp-price">
            ${laptop.compareAtPrice ? `<span class="compare">${formatPrice(laptop.compareAtPrice)}</span>` : ''}
            <span class="current">${formatPrice(laptop.price)}</span>
          </div>
          <p class="pdp-desc">${escapeHtml(laptop.description)}</p>

          <div class="pdp-actions">
            <div class="qty-control">
              <button data-action="detail-qty-dec" aria-label="Decrease quantity">${ICONS.minus}</button>
              <span id="detail-qty">1</span>
              <button data-action="detail-qty-inc" aria-label="Increase quantity">${ICONS.plus}</button>
            </div>
            <button class="btn btn-primary" style="flex:1;min-width:220px;" data-action="detail-add-to-cart" data-id="${laptop.id}" ${inStock ? '' : 'disabled'}>
              ${ICONS.cart} ${inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>

          <div class="specs-table">
            <div class="specs-table-head"><h2>Full Specifications</h2></div>
            <dl style="margin:0;">${specsHtml}</dl>
          </div>
        </div>
      </div>

      ${related.length ? `
      <section class="related-section">
        <h2>You Might Also Like</h2>
        <div class="product-grid">${related.map(productCardHTML).join('')}</div>
      </section>` : ''}
    </div>`;
}

/* ---- About ---- */
const ABOUT_VALUES = [
  { icon: ICONS.wrench, title: 'Hands-on testing', desc: "Every laptop on our shelves has been benchmarked and used by our own team before it's listed." },
  { icon: ICONS.users, title: 'Real advice', desc: 'Our support team is made up of people who actually know hardware &mdash; not a script.' },
  { icon: ICONS.shieldCheck, title: 'Backed by warranty', desc: 'Every machine ships with a 2-year warranty and a straightforward return policy.' },
  { icon: ICONS.truck, title: 'Fast, tracked shipping', desc: 'Orders are packed carefully and shipped within one business day.' },
];

function renderAbout() {
  document.getElementById('app').innerHTML = `
    <div class="section about-hero">
      <div>
        <span class="badge badge-accent">About D-Tech1</span>
        <h1>We built the laptop store we always wanted to shop at.</h1>
        <p>D-Tech1 (Daryl-Technology 1) started with a simple frustration: buying a laptop online usually means wading through marketing fluff, confusing spec sheets, and reviews that don't match reality. We set out to fix that &mdash; a curated lineup, honest descriptions, and specs that actually tell you what you're getting.</p>
        <p>Today, we carry laptops across every category that matters &mdash; gaming rigs that hold up under real load, business machines built to survive a travel schedule, creative workstations that render without excuses, and budget picks that don't feel like a compromise. Alongside them, we stock the accessories people actually reach for: mice, keyboards, docks, bags, and more.</p>
        <p>We're small, we're picky about what we sell, and we'd rather list fewer laptops we trust than pad our catalog with everything on the market.</p>
      </div>
      <img src="${escapeHtml(imageSrc('about-workspace'))}" alt="${escapeHtml(imageAlt('about-workspace'))}" class="${imageClass('about-workspace')}" onerror="imgFallback(this)" />
    </div>

    <div class="section" style="padding-bottom:5rem;">
      <h2 style="font-size:1.5rem;font-weight:700;margin-bottom:2rem;">What We Stand For</h2>
      <div class="values-grid">
        ${ABOUT_VALUES.map((v) => `
          <div class="card value-card">
            <div class="icon">${v.icon}</div>
            <h3>${v.title}</h3>
            <p>${v.desc}</p>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ---- Contact ---- */
function renderContact() {
  document.getElementById('app').innerHTML = `
    <div class="section page-py">
      <div class="page-header" style="max-width:36rem;">
        <h1>Get in Touch</h1>
        <p>Questions about a laptop, an order, or a warranty claim? Send us a message and we'll get back to you as soon as we can.</p>
      </div>

      <div class="contact-grid">
        <div>
          <div class="card contact-form-card">
            <div class="form-success" id="contact-success" hidden>${ICONS.checkCircle} Thanks &mdash; your message passed validation. (Nothing is actually delivered yet, because this site has no server.)</div>
            <form id="contact-form" class="form-grid" novalidate>
              <div>
                <label for="c-name">Name</label>
                <input id="c-name" name="name" type="text" required placeholder="Jane Doe" class="input" autocomplete="name" data-validate="name" aria-describedby="c-name-error" />
                ${fieldErrorHTML('c-name')}
              </div>
              <div>
                <label for="c-email">Email</label>
                <input id="c-email" name="email" type="email" required placeholder="you@email.com" class="input" autocomplete="email" data-validate="email" aria-describedby="c-email-error" />
                ${fieldErrorHTML('c-email')}
              </div>
              <div class="full">
                <label for="c-subject">Subject</label>
                <input id="c-subject" name="subject" type="text" required placeholder="Question about the ROG Strix G16" class="input" data-validate="required" data-label="subject" aria-describedby="c-subject-error" />
                ${fieldErrorHTML('c-subject')}
              </div>
              <div class="full">
                <label for="c-message">Message</label>
                <textarea id="c-message" name="message" required rows="5" placeholder="Tell us what's on your mind..." class="input" data-validate="required" data-label="message" aria-describedby="c-message-error"></textarea>
                ${fieldErrorHTML('c-message')}
              </div>
              <div class="full">
                <button type="submit" class="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>

        <div>
          <div class="card contact-info-card">${ICONS.mail}<div><strong>Email</strong><span>support@dtech1.example</span></div></div>
          <div class="card contact-info-card">${ICONS.phone}<div><strong>Phone</strong><span>(555) 010-0142</span></div></div>
          <div class="card contact-info-card">${ICONS.mapPin}<div><strong>Showroom</strong><span>128 Circuit Ave, Suite 4, Tech District</span></div></div>
        </div>
      </div>
    </div>`;
}

/* ---- 404 ---- */
function renderNotFound() {
  document.getElementById('app').innerHTML = `
    <div class="section not-found">
      <p class="code">404</p>
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="#/" class="btn btn-primary" style="margin-top:1.5rem;">Back to Home</a>
    </div>`;
}

/* ================= 6. ROUTER ================= */
function currentSection(path) {
  if (path === '/') return '/';
  if (path.startsWith('/laptops')) return '/laptops';
  if (path.startsWith('/accessories')) return '/accessories';
  if (path.startsWith('/about')) return '/about';
  if (path.startsWith('/contact')) return '/contact';
  if (path === '/login' || path === '/forgot-password') return '/login';
  if (path === '/register') return '/register';
  return '';
}

function updateActiveNavLinks(path) {
  const section = currentSection(path);
  document.querySelectorAll('[data-route]').forEach((link) => {
    link.classList.toggle('active', link.getAttribute('data-route') === section);
  });
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  menu.classList.remove('open');
  openIcon.hidden = false;
  closeIcon.hidden = true;
}

function updateAuthUI() {
  document.body.classList.toggle('auth-mode', !currentUser);
  const label = document.getElementById('nav-user');
  if (label) label.textContent = currentUser ? currentUser.fullName.split(' ')[0] : '';
}

function renderRoute() {
  let { path, params } = parseHash();

  // Login-first: visitors who are not logged in only ever see the auth pages.
  if (!currentUser && !AUTH_PATHS.includes(path)) { window.location.hash = '#/login'; return; }
  if (currentUser && AUTH_PATHS.includes(path)) { window.location.hash = '#/'; return; }
  updateAuthUI();

  if (path === '/') {
    renderHome();
  } else if (path === '/laptops') {
    renderLaptopsView(params);
  } else if (path.indexOf('/laptops/') === 0) {
    renderProductDetails(decodeURIComponent(path.slice('/laptops/'.length)));
  } else if (path === '/accessories') {
    renderAccessoriesView();
  } else if (path === '/about') {
    renderAbout();
  } else if (path === '/contact') {
    renderContact();
  } else if (path === '/login') {
    renderLogin();
  } else if (path === '/register') {
    renderRegister();
  } else if (path === '/forgot-password') {
    renderForgotPassword();
  } else {
    renderNotFound();
  }

  updateActiveNavLinks(path);
  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

/* ================= 7. EVENT DELEGATION ================= */
document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;

  switch (action) {
    case 'open-cart':
      Cart.open();
      break;

    case 'close-cart':
      Cart.close();
      break;

    case 'open-checkout':
      openCheckoutModal();
      break;

    case 'close-modal':
      closeModal();
      break;

    case 'toggle-mobile-menu': {
      const menu = document.getElementById('mobile-menu');
      const openIcon = document.getElementById('menu-icon-open');
      const closeIcon = document.getElementById('menu-icon-close');
      const isOpen = menu.classList.toggle('open');
      openIcon.hidden = isOpen;
      closeIcon.hidden = !isOpen;
      break;
    }

    case 'logout':
      currentUser = null;
      Cart.close();
      updateAuthUI();
      window.location.hash = '#/login';
      break;

    case 'toggle-password': {
      const field = document.getElementById(btn.dataset.target);
      if (!field) break;
      const show = field.type === 'password';
      field.type = show ? 'text' : 'password';
      btn.setAttribute('aria-pressed', String(show));
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
      btn.innerHTML = show ? ICONS.eyeOff : ICONS.eye;
      break;
    }

    case 'add-to-cart': {
      const product = findProductById(btn.dataset.id);
      if (product) Cart.addItem(product, 1, btn.dataset.type);
      break;
    }

    case 'cart-remove':
      Cart.removeItem(btn.dataset.id);
      break;

    case 'cart-inc':
      Cart.increment(btn.dataset.id);
      break;

    case 'cart-dec':
      Cart.decrement(btn.dataset.id);
      break;

    case 'filter-category': {
      const view = btn.dataset.view;
      const state = view === 'laptop' ? laptopViewState : accessoryViewState;
      state.category = btn.dataset.category;
      btn.parentElement.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      if (view === 'laptop') updateLaptopGrid(); else updateAccessoryGrid();
      break;
    }

    case 'detail-qty-inc': {
      detailQuantity += 1;
      document.getElementById('detail-qty').textContent = detailQuantity;
      break;
    }

    case 'detail-qty-dec': {
      detailQuantity = Math.max(1, detailQuantity - 1);
      document.getElementById('detail-qty').textContent = detailQuantity;
      break;
    }

    case 'detail-add-to-cart': {
      const product = findProductById(btn.dataset.id);
      if (product) Cart.addItem(product, detailQuantity, 'laptop');
      break;
    }

    default:
      break;
  }
});

document.addEventListener('input', function (e) {
  const t = e.target;
  if (t && t.dataset && t.dataset.validate) {
    const isName = t.dataset.validate === 'name';
    // Re-check live once the field was visited or is invalid, so errors clear as soon as the input is fixed.
    // Names are checked straight away so a typed digit is flagged immediately.
    if (t.dataset.touched || t.classList.contains('is-invalid') || (isName && t.value.trim())) {
      const message = getFieldError(t);
      setFieldError(t, message);
    }
    if (t.dataset.validate === 'new-password' && t.form) {
      const confirm = t.form.elements['confirmPassword'];
      if (confirm && confirm.value) setFieldError(confirm, getFieldError(confirm));
    }
    if (t.form) {
      hideFormMessage(t.form);
      if (t.form.id === 'contact-form') { const ok = document.getElementById('contact-success'); if (ok) ok.hidden = true; }
    }
  }
  if (e.target.dataset && e.target.dataset.action === 'filter-search') {
    const view = e.target.dataset.view;
    const state = view === 'laptop' ? laptopViewState : accessoryViewState;
    state.search = e.target.value;
    if (view === 'laptop') updateLaptopGrid(); else updateAccessoryGrid();
  }
});

document.addEventListener('focusout', function (e) {
  const t = e.target;
  if (t && t.dataset && t.dataset.validate) {
    t.dataset.touched = 'true';
    validateField(t);
  }
});

document.addEventListener('change', function (e) {
  if (e.target.dataset && e.target.dataset.action === 'filter-sort') {
    const view = e.target.dataset.view;
    const state = view === 'laptop' ? laptopViewState : accessoryViewState;
    state.sort = e.target.value;
    if (view === 'laptop') updateLaptopGrid(); else updateAccessoryGrid();
  }
});

document.addEventListener('submit', function (e) {
  const form = e.target;
  if (!form || !form.id) return;

  switch (form.id) {
    case 'contact-form': {
      e.preventDefault();
      const successEl = document.getElementById('contact-success');
      if (!validateForm(form)) { if (successEl) successEl.hidden = true; return; }
      // No backend yet: this simulates a successful submission (nothing is sent anywhere).
      if (successEl) successEl.hidden = false;
      form.reset();
      clearFormErrors(form);
      break;
    }
    case 'login-form': e.preventDefault(); handleLoginSubmit(form); break;
    case 'register-form': e.preventDefault(); handleRegisterSubmit(form); break;
    case 'forgot-form': e.preventDefault(); handleForgotSubmit(form); break;
    default: break;
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (document.getElementById('modal-root').innerHTML.trim()) closeModal();
    else if (Cart.isOpen) Cart.close();
  }
});

/* ================= 8. INIT ================= */
window.addEventListener('scroll', function () {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 8);
});

window.addEventListener('hashchange', renderRoute);

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('year').textContent = new Date().getFullYear();
  Cart.load();
  updateCartCount();
  if (!window.location.hash || !currentUser) window.location.hash = '#/login';
  renderRoute();
});
