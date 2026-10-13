export type ServiceTierId =
  | 'new-construction'
  | 'level5-skim'
  | 'acoustic-soundproofing'
  | 'patch-restoration';

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceGalleryImage {
  url: string;
  caption: string;
}

export interface ServiceDetail {
  heroImage: string;
  tagline: string;
  technicalSpecs: ServiceSpec[];
  substrateRequirements: string[];
  finishGradeStandards: string[];
  processSteps: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  gallery: ServiceGalleryImage[];
}

export interface ServiceTier {
  id: ServiceTierId;
  name: string;
  shortName: string;
  description: string;
  baseLow: number;
  baseHigh: number;
  markup: number;
  dispatchMinimum?: number;
  priceUnit: string;
  icon: string;
  slug: string;
  detail: ServiceDetail;
}

export type FinishGrade = 'level1' | 'level3' | 'level4' | 'level5';

export interface FinishGradeOption {
  id: FinishGrade;
  name: string;
  description: string;
  multiplier: number;
}

export interface Neighborhood {
  name: string;
  zipCodes: string[];
}

export interface NeighborhoodRegion {
  region: string;
  description: string;
  neighborhoods: Neighborhood[];
}

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'new-construction',
    name: 'New Construction Boarding & Hanging',
    shortName: 'Boarding & Hanging',
    description: 'Precision-measured gypsum board installation with screw-fastened metal or wood framing. Ideal for new builds, gut renovations, and additions.',
    baseLow: 3.5,
    baseHigh: 4.86,
    markup: 0.08,
    priceUnit: 'sq ft',
    icon: 'building',
    slug: 'new-construction-boarding-hanging',
    detail: {
      heroImage: 'https://images.pexels.com/photos/35496414/pexels-photo-35496414.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
      tagline: 'Precision gypsum board installation engineered for structural integrity and finish readiness.',
      technicalSpecs: [
        { label: 'Board Thickness', value: '1/2" walls, 5/8" ceilings (Type X fire-rated available)' },
        { label: 'Fastening Method', value: 'Screw-fastened to 25-ga metal or wood framing' },
        { label: 'Fastener Pattern', value: '12" o.c. walls, 12" o.c. ceilings (ASTM C840)' },
        { label: 'Board Type', value: 'Standard, MR (moisture-resistant), Type X, abuse-resistant' },
        { label: 'Maximum Sheet Size', value: '4\' x 12\' (handled with lift equipment)' },
        { label: 'Framing Tolerance', value: '±1/8" over 10 ft (laser-verified)' },
      ],
      substrateRequirements: [
        'Wood or metal framing spaced 16" or 24" o.c.',
        'All framing members flat, plumb, and aligned within 1/8" tolerance',
        'Electrical, plumbing, and HVAC rough-ins complete and inspected',
        'Vapor barriers installed in exterior wall assemblies',
        'Floor and ceiling plates secured and level',
      ],
      finishGradeStandards: [
        'Level 2 — Tape set in compound (garage/utility only)',
        'Level 3 — Two coats (textured walls and ceilings)',
        'Level 4 — Three coats + skim (standard residential)',
        'Level 5 — Full skim coat (available upgrade)',
      ],
      processSteps: [
        { step: 1, title: 'Site Assessment & Layout', description: 'Laser-measure all walls and ceilings, map board layout to minimize waste and butt joints.' },
        { step: 2, title: 'Board Installation', description: 'Score-and-snap or router-cut boards to spec. Fasten with screws at correct pattern and depth.' },
        { step: 3, title: 'Quality Verification', description: 'Check every joint for gaps, every fastener for proper dimple depth. Correct any popped screws.' },
        { step: 4, title: 'Pre-Finish Handoff', description: 'Surface is now ready for taping and mudding. Hand off to finishing crew with layout documentation.' },
      ],
      faqs: [
        { question: 'How long does boarding take for a typical room?', answer: 'A standard 12x14 room (walls + ceiling) takes 3-4 hours for a two-person crew. Full homes scale linearly based on square footage.' },
        { question: 'Do you handle metal stud framing too?', answer: 'Yes. We install 25-gauge and 20-gauge metal stud framing for commercial build-outs, including fire-rated and sound-rated assemblies.' },
        { question: 'Can you match existing board thickness on additions?', answer: 'Absolutely. We assess the existing wall assembly and match board type, thickness, and fastening method for seamless transitions.' },
      ],
      gallery: [
        { url: 'https://images.pexels.com/photos/35496414/pexels-photo-35496414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Metal stud framing with wooden ceiling structure' },
        { url: 'https://images.pexels.com/photos/4981812/pexels-photo-4981812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Professional drywall board installation' },
        { url: 'https://images.pexels.com/photos/5493677/pexels-photo-5493677.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Screw-fastened boarding with precision drill' },
        { url: 'https://images.pexels.com/photos/33405084/pexels-photo-33405084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Residential home under construction — boarded walls' },
        { url: 'https://images.pexels.com/photos/5493675/pexels-photo-5493675.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Laser-leveled wall accuracy verification' },
        { url: 'https://images.pexels.com/photos/8488031/pexels-photo-8488031.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Interior reconstruction with new framing' },
      ],
    },
  },
  {
    id: 'level5-skim',
    name: 'Level 5 Plaster-Grade Skim Coating',
    shortName: 'Level 5 Skim Coat',
    description: 'Museum-quality skim coat application producing mirror-smooth surfaces. The highest GASC finish grade — eliminates shadowing under raking light.',
    baseLow: 4.8,
    baseHigh: 7.02,
    markup: 0.08,
    priceUnit: 'sq ft',
    icon: 'sparkles',
    slug: 'level-5-plaster-grade-skim-coating',
    detail: {
      heroImage: 'https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
      tagline: 'The highest GASC finish grade — mirror-smooth surfaces with zero imperfections under raking light.',
      technicalSpecs: [
        { label: 'GASC Finish Grade', value: 'Level 5 (highest — full skim coat over Level 4 base)' },
        { label: 'Coat Count', value: '4+ coats (tape, 2 bed coats, skim coat)' },
        { label: 'Skim Material', value: 'All-purpose joint compound thinned to paint consistency' },
        { label: 'Surface Tolerance', value: '±1/16" over 10 ft (raking-light verified)' },
        { label: 'Drying Time', value: '24 hours between coats (humidity-dependent)' },
        { label: 'Final Inspection', value: 'Raking light at 45 degrees, 100% surface coverage' },
      ],
      substrateRequirements: [
        'Level 4 finish complete and fully dry',
        'All fasteners properly set and covered',
        'No visible joints or screw dimples at Level 4 stage',
        'Surface clean and dust-free before skim application',
        'Ambient temperature between 55°F and 80°F',
      ],
      finishGradeStandards: [
        'Level 4 prerequisite — three coats with all joints bedded',
        'Level 5 skim — full surface skim coat applied by trowel or spray',
        'No sanding marks visible under grazing light',
        'Surface accepts flat, matte, or eggshell paint without flashing',
      ],
      processSteps: [
        { step: 1, title: 'Level 4 Verification', description: 'Inspect base finish under raking light. Repair any imperfections before proceeding to skim.' },
        { step: 2, title: 'Surface Preparation', description: 'Clean surface of all dust and debris. Prime with high-build primer if substrate is porous.' },
        { step: 3, title: 'Skim Coat Application', description: 'Apply thinned joint compound across entire surface in thin, even passes. 2-3 skim passes typical.' },
        { step: 4, title: 'Raking-Light Inspection', description: 'Inspect every square foot under a 45-degree raking light. Spot-repair any visible imperfections.' },
        { step: 5, title: 'Final Sand & Prime', description: 'Light sand with 220-grit, remove dust, apply primer coat. Surface is now paint-ready.' },
      ],
      faqs: [
        { question: 'Why choose Level 5 over Level 4?', answer: 'Level 5 eliminates all surface imperfections visible under raking or grazing light. It is the standard for gallery spaces, high-end interiors with flat/matte paint, and areas with critical lighting.' },
        { question: 'Will Level 5 fix a bad drywall installation?', answer: 'Level 5 can mask minor surface inconsistencies, but it cannot correct structural problems. Major framing or boarding issues must be addressed first.' },
        { question: 'How much longer does Level 5 take vs Level 4?', answer: 'Level 5 adds approximately 30-40% to the finishing timeline due to the additional skim passes and drying time between coats.' },
      ],
      gallery: [
        { url: 'https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Applying plaster skim coat for smooth finish' },
        { url: 'https://images.pexels.com/photos/38561969/pexels-photo-38561969.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Trowel against smooth wall — plaster application' },
        { url: 'https://images.pexels.com/photos/6474192/pexels-photo-6474192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Metal trowel finishing on white interior wall' },
        { url: 'https://images.pexels.com/photos/5583128/pexels-photo-5583128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Spatula work on blank wall — skim coat prep' },
        { url: 'https://images.pexels.com/photos/3616762/pexels-photo-3616762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Unfinished wall texture showing plaster layers' },
        { url: 'https://images.pexels.com/photos/33991011/pexels-photo-33991011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Close-up of plaster-grade surface detail' },
      ],
    },
  },
  {
    id: 'acoustic-soundproofing',
    name: 'Acoustic Soundproofing & Fire-Rated Systems',
    shortName: 'Soundproofing & Fire Walls',
    description: 'Resilient channel isolation, sound-damped drywall, and UL-rated fire assemblies. STC 50+ and fire-rated assemblies for code compliance.',
    baseLow: 6.0,
    baseHigh: 8.64,
    markup: 0.08,
    priceUnit: 'sq ft',
    icon: 'waves',
    slug: 'acoustic-soundproofing-fire-rated-systems',
    detail: {
      heroImage: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
      tagline: 'Engineered acoustic isolation and fire-rated assemblies certified to UL and ASTM standards.',
      technicalSpecs: [
        { label: 'STC Rating', value: '50-54 (residential), 55-60 (commercial/home theater)' },
        { label: 'Fire Rating', value: '1-hour (UL U419), 2-hour (UL U415) assemblies available' },
        { label: 'Isolation Method', value: 'Resilient channels or isolation clips + hat track' },
        { label: 'Sound-Damped Board', value: 'QuietRock 530 or equivalent constrained-layer damping' },
        { label: 'Cavity Insulation', value: 'Mineral wool (Roxul Safe-n-Sound) or fiberglass batt' },
        { label: 'Perimeter Sealant', value: 'Acoustical sealant at all perimeter and penetration joints' },
      ],
      substrateRequirements: [
        'Structural framing capable of supporting isolation hardware',
        'Electrical boxes must be staggered between adjacent wall cavities',
        'All penetrations (outlets, switches) require putty pads or sealed boxes',
        'Cavity must be clean and dry before insulation installation',
        'Floor and ceiling track must be level for proper resilient channel placement',
      ],
      finishGradeStandards: [
        'Level 3 minimum (heavy-texture walls acceptable)',
        'Level 4 recommended (standard residential)',
        'Level 5 available for home theaters and critical listening rooms',
        'All joints and perimeter must be sealed with acoustical sealant before finishing',
      ],
      processSteps: [
        { step: 1, title: 'Assembly Design', description: 'Select STC and fire-rating target. Specify board type, isolation method, insulation, and sealant plan.' },
        { step: 2, title: 'Isolation Install', description: 'Install resilient channels or isolation clips + hat track. Verify spacing and fastener pattern per manufacturer spec.' },
        { step: 3, title: 'Boarding & Insulation', description: 'Install cavity insulation, then board with staggered joints. Apply acoustical sealant at all perimeters and penetrations.' },
        { step: 4, title: 'Sealing & Finishing', description: 'Seal all gaps, tape and mud joints, apply putty pads at boxes. Finish to specified GASC grade.' },
        { step: 5, title: 'Acoustic Verification', description: 'Optional: STC field test with sound-level meter to verify assembly performance meets spec.' },
      ],
      faqs: [
        { question: 'What STC rating do I need between rooms?', answer: 'For bedrooms adjacent to living areas, STC 50 is standard. For home theaters, recording studios, or shared walls in multi-family buildings, we recommend STC 55+.' },
        { question: 'Can you add soundproofing to existing walls?', answer: 'Yes. We can install a second layer of sound-damped drywall over existing walls with resilient channels, achieving STC 50+ without demolition.' },
        { question: 'Are your fire-rated assemblies code-compliant?', answer: 'Yes. We install UL-listed fire-rated assemblies (U419 for 1-hour, U415 for 2-hour) that meet NYC Building Code and DOB requirements.' },
      ],
      gallery: [
        { url: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Mineral wool insulation installation between studs' },
        { url: 'https://images.pexels.com/photos/5511085/pexels-photo-5511085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Insulation sheets on residential building exterior' },
        { url: 'https://images.pexels.com/photos/6587323/pexels-photo-6587323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Acoustic soundproof foam panel close-up' },
        { url: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Recording studio — sound-isolated wall assembly' },
        { url: 'https://images.pexels.com/photos/8486934/pexels-photo-8486934.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Engineers inspecting fire-rated wall assembly' },
        { url: 'https://images.pexels.com/photos/11931931/pexels-photo-11931931.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Architectural wall with geometric fire-rated panels' },
      ],
    },
  },
  {
    id: 'patch-restoration',
    name: 'Patch, Crack Restoration & Water Damage',
    shortName: 'Patch & Restoration',
    description: 'Matched-texture patching, structural crack repair, and water-damaged section replacement. Seamless blends — invisible under any lighting.',
    baseLow: 0,
    baseHigh: 0,
    markup: 0.08,
    dispatchMinimum: 324,
    priceUnit: 'dispatch + sq ft',
    icon: 'wrench',
    slug: 'patch-crack-restoration-water-damage',
    detail: {
      heroImage: 'https://images.pexels.com/photos/36050822/pexels-photo-36050822.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
      tagline: 'Surgical repair and seamless texture blending — invisible under any lighting condition.',
      technicalSpecs: [
        { label: 'Dispatch Minimum', value: '$324 (includes assessment, setup, and first hour)' },
        { label: 'Patch Method', value: 'Butt-joint with backer rod, or blow-in patch for small holes' },
        { label: 'Crack Repair', value: 'V-groove + mesh tape + compound (structural cracks get backing plate)' },
        { label: 'Texture Matching', value: 'Smooth, knockdown, orange peel, popcorn, hand-troweled — all matched on-site' },
        { label: 'Water Damage Protocol', value: 'Cut to unaffected area, verify substrate dry, replace board, match texture' },
        { label: 'Dust Containment', value: 'HEPA-filtered sanders + zip-wall isolation' },
      ],
      substrateRequirements: [
        'Affected area must be dry (verified with moisture meter)',
        'No active leaks — source must be repaired before drywall work begins',
        'Surrounding wall area must be structurally sound',
        'Mold remediation complete if contamination was present (we can coordinate)',
        'Electrical safe and accessible in work area',
      ],
      finishGradeStandards: [
        'Matched to existing wall finish (Level 3, 4, or 5 as appropriate)',
        'Texture matched to surrounding area — orange peel, knockdown, smooth, or popcorn',
        'Blended edges feathered 12+ inches beyond repair area',
        'No visible patch line under raking light',
      ],
      processSteps: [
        { step: 1, title: 'Assessment & Moisture Check', description: 'Inspect damage extent, verify moisture levels, confirm no active leaks. Photograph and document.' },
        { step: 2, title: 'Cut-Out & Preparation', description: 'Cut affected area to clean, square edges. Remove damaged board, inspect substrate and framing.' },
        { step: 3, title: 'Replacement & Tape', description: 'Install replacement board, tape joints with mesh or paper tape, apply bed coats.' },
        { step: 4, title: 'Texture Match', description: 'Sample existing texture, match application method, blend edges into surrounding wall.' },
        { step: 5, title: 'Prime & Final Blend', description: 'Prime repair area, apply finish paint if requested. Verify invisible under raking light.' },
      ],
      faqs: [
        { question: 'How small of a patch can you do?', answer: 'We handle everything from a single nail hole to an entire ceiling. The $324 dispatch minimum covers assessment, setup, and the first hour of work.' },
        { question: 'Can you match my existing wall texture?', answer: 'Yes. We carry knockdown, orange peel, popcorn, smooth, and hand-troweled texture matching capabilities. We sample your existing wall on-site.' },
        { question: 'Do I need to fix the water leak first?', answer: 'Yes. The source of water must be repaired before we replace drywall. We can coordinate with plumbers and use moisture meters to verify the area is dry before boarding.' },
      ],
      gallery: [
        { url: 'https://images.pexels.com/photos/36050822/pexels-photo-36050822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Peeling paint revealing damaged wall substrate' },
        { url: 'https://images.pexels.com/photos/6473982/pexels-photo-6473982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Precision wall renovation with metal ruler' },
        { url: 'https://images.pexels.com/photos/36495702/pexels-photo-36495702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Applying plaster to restored wall section' },
        { url: 'https://images.pexels.com/photos/9617552/pexels-photo-9617552.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Exposed plaster showing water damage texture' },
        { url: 'https://images.pexels.com/photos/10647626/pexels-photo-10647626.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Worn wall with peeling plaster and visible cracks' },
        { url: 'https://images.pexels.com/photos/36035072/pexels-photo-36035072.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', caption: 'Renovation room with tools and repair materials' },
      ],
    },
  },
];

export const FINISH_GRADES: FinishGradeOption[] = [
  {
    id: 'level1',
    name: 'Level 1 — Economy',
    description: 'Basic tape and bed. Suitable for garages and unfinished utility areas.',
    multiplier: 0.85,
  },
  {
    id: 'level3',
    name: 'Level 3 — Standard',
    description: 'Two coat application. Appropriate for heavy-texture walls and ceilings.',
    multiplier: 0.95,
  },
  {
    id: 'level4',
    name: 'Level 4 — Premium',
    description: 'Three coat + skim. Standard for most residential interiors with flat or eggshell paint.',
    multiplier: 1.0,
  },
  {
    id: 'level5',
    name: 'Level 5 — Museum Grade',
    description: 'Full skim coat over Level 4. Mirror-smooth — eliminates all imperfections under raking light.',
    multiplier: 1.18,
  },
];

export const NEIGHBORHOOD_REGIONS: NeighborhoodRegion[] = [
  {
    region: 'North Shore',
    description: 'Historic homes, landmark districts, and waterfront properties requiring specialized plaster-matching and restoration expertise.',
    neighborhoods: [
      { name: 'St. George', zipCodes: ['10301'] },
      { name: 'Tompkinsville', zipCodes: ['10301'] },
      { name: 'Stapleton', zipCodes: ['10304'] },
      { name: 'West New Brighton', zipCodes: ['10302'] },
      { name: 'Grymes Hill', zipCodes: ['10301', '10304'] },
    ],
  },
  {
    region: 'Mid-Island',
    description: 'Estate homes and new construction requiring Level 5 finishes, soundproofing for home theaters, and large-scale boarding.',
    neighborhoods: [
      { name: 'Todt Hill', zipCodes: ['10304', '10306'] },
      { name: 'Emerson Hill', zipCodes: ['10306'] },
      { name: 'Lighthouse Hill', zipCodes: ['10314'] },
      { name: 'New Dorp', zipCodes: ['10306'] },
      { name: 'Dongan Hills', zipCodes: ['10305'] },
    ],
  },
  {
    region: 'South Shore',
    description: 'Expanding residential developments and commercial build-outs demanding efficient hanging, fire-rated assemblies, and water damage restoration.',
    neighborhoods: [
      { name: 'Great Kills', zipCodes: ['10308'] },
      { name: 'Annadale', zipCodes: ['10312'] },
      { name: 'Huguenot', zipCodes: ['10312'] },
      { name: "Prince's Bay", zipCodes: ['10309'] },
      { name: 'Tottenville', zipCodes: ['10307'] },
    ],
  },
];

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'level5' | 'framing' | 'soundproofing' | 'restoration';
  categoryLabel: string;
  description: string;
  image: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Mirror-Smooth Level 5 Living Room',
    category: 'level5',
    categoryLabel: 'Level 5 Skim Coat',
    description: 'Full Level 5 plaster-grade finish in a Todt Hill estate. Raking-light tested — zero visible imperfections.',
    image: 'https://images.pexels.com/photos/6473966/pexels-photo-6473966.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p2',
    title: 'Commercial Metal Stud Framing',
    category: 'framing',
    categoryLabel: 'Metal Framing',
    description: '25-gauge metal stud framing for a 4,000 sq ft commercial space in St. George. Fire-rated assembly.',
    image: 'https://images.pexels.com/photos/35496414/pexels-photo-35496414.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p3',
    title: 'Acoustic Soundproof Core Layers',
    category: 'soundproofing',
    categoryLabel: 'Soundproofing',
    description: 'Resilient channel + sound-damped drywall assembly achieving STC 54 in a New Dorp home theater.',
    image: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p4',
    title: 'Water Damage Restoration',
    category: 'restoration',
    categoryLabel: 'Restoration',
    description: 'Surgical removal and seamless blend of water-damaged ceiling sections in a Great Kills residence.',
    image: 'https://images.pexels.com/photos/36050822/pexels-photo-36050822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p5',
    title: 'Plaster-Grade Surface Detail',
    category: 'level5',
    categoryLabel: 'Level 5 Skim Coat',
    description: 'Hand-troweled skim coat achieving a mirror-flat surface. No visible imperfections under raking light.',
    image: 'https://images.pexels.com/photos/33991011/pexels-photo-33991011.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p6',
    title: 'Precision Drywall Installation',
    category: 'framing',
    categoryLabel: 'Boarding & Hanging',
    description: 'Screw-fastened boarding with laser-leveled alignment in a Tottenville new construction build.',
    image: 'https://images.pexels.com/photos/33405084/pexels-photo-33405084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p7',
    title: 'Acoustic Insulation Installation',
    category: 'soundproofing',
    categoryLabel: 'Soundproofing',
    description: 'Mineral wool sound isolation between resilient channels in a Lighthouse Hill home theater build.',
    image: 'https://images.pexels.com/photos/5511085/pexels-photo-5511085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    id: 'p8',
    title: 'Crack Repair & Wall Restoration',
    category: 'restoration',
    categoryLabel: 'Restoration',
    description: 'Structural crack repair and re-plastering in a historic Stapleton loft. Texture-matched to original plaster.',
    image: 'https://images.pexels.com/photos/6473982/pexels-photo-6473982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'level5', label: 'Level 5 Finishes' },
  { id: 'framing', label: 'Boarding & Framing' },
  { id: 'soundproofing', label: 'Soundproofing' },
  { id: 'restoration', label: 'Restoration' },
] as const;

export interface LuxuryBanner {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  position: 'top' | 'middle' | 'lower';
}

export const LUXURY_BANNERS: LuxuryBanner[] = [
  {
    id: 'banner-top',
    image: 'https://images.pexels.com/photos/8082209/pexels-photo-8082209.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Flawless Surfaces. Architectural Precision.',
    subtitle: 'Every wall we touch becomes a statement of craftsmanship.',
    position: 'top',
  },
  {
    id: 'banner-middle',
    image: 'https://images.pexels.com/photos/8146144/pexels-photo-8146144.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Where Engineering Meets Aesthetics.',
    subtitle: 'Fire-rated, sound-isolated, and finished to museum-grade standards.',
    position: 'middle',
  },
  {
    id: 'banner-lower',
    image: 'https://images.pexels.com/photos/8143678/pexels-photo-8143678.jpeg?auto=compress&cs=tinysrgb&h=1080&w=1920',
    title: 'Staten Island\u2019s Finest Drywall Craftsmanship.',
    subtitle: 'From Todt Hill estates to St. George commercial build-outs — we deliver.',
    position: 'lower',
  },
];

export interface PriceBreakdown {
  baseCost: number;
  finishAdjustment: number;
  subtotal: number;
  markup: number;
  total: number;
  pricePerSqFt: number;
  effectiveRate: number;
  dispatchFee: number;
}

export function calculateEstimate(
  tier: ServiceTier,
  sqft: number,
  finishGrade: FinishGradeOption,
): PriceBreakdown {
  if (tier.dispatchMinimum) {
    const sqftRate = (tier.baseLow > 0 ? tier.baseLow : 4.5) + (tier.baseHigh > 0 ? tier.baseHigh : 7.0);
    const avgRate = sqftRate / 2;
    const baseCost = avgRate * sqft * finishGrade.multiplier;
    const markup = baseCost * tier.markup;
    const dispatchFee = tier.dispatchMinimum;
    const total = baseCost + markup + dispatchFee;
    return {
      baseCost,
      finishAdjustment: baseCost - avgRate * sqft,
      subtotal: baseCost,
      markup,
      total,
      pricePerSqFt: total / sqft,
      effectiveRate: avgRate * finishGrade.multiplier,
      dispatchFee,
    };
  }

  const avgBase = (tier.baseLow + tier.baseHigh) / 2;
  const baseCost = avgBase * sqft;
  const finishAdjustment = baseCost * (finishGrade.multiplier - 1);
  const subtotal = baseCost + finishAdjustment;
  const markup = subtotal * tier.markup;
  const total = subtotal + markup;
  const pricePerSqFt = total / sqft;

  return {
    baseCost,
    finishAdjustment,
    subtotal,
    markup,
    total,
    pricePerSqFt,
    effectiveRate: avgBase * finishGrade.multiplier,
    dispatchFee: 0,
  };
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCurrencyDetailed(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}
