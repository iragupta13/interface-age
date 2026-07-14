const sources = [
  {
    id: "cala-home",
    type: "Official",
    title: "Cala Health homepage",
    url: "https://calahealth.com/",
    note:
      "Used for Cala kIQ, TAPS therapy, FDA-cleared wearable claims, tremor metrics, and Medicare coverage statements.",
  },
  {
    id: "synchron-research",
    type: "Official",
    title: "Synchron research page",
    url: "https://synchron.com/research",
    note:
      "Used for Synchron's publication list, including the JAMA Neurology safety paper and endovascular BCI research references.",
  },
  {
    id: "science-prima",
    type: "Official",
    title: "Science PRIMA technology page",
    url: "https://science.xyz/technologies/prima/",
    note:
      "Used for PRIMA milestones, including the October 20, 2025 NEJM publication and commercialization framing.",
  },
  {
    id: "nudge-reported",
    type: "Reported",
    title: "Fred Ehrsam page summarizing Bloomberg and funding reports on Nudge",
    url: "https://en.wikipedia.org/wiki/Fred_Ehrsam",
    note:
      "Used cautiously for Nudge because public primary company detail is sparse. It summarizes reporting that Nudge is a non-invasive ultrasound neurotech startup with a reported 2025 Series A.",
  },
  {
    id: "precision-home",
    type: "Official",
    title: "Precision Neuroscience homepage",
    url: "https://www.precisionneuro.io/",
    note:
      "Used for Layer 7 positioning, 510(k) clearance, implanted study patient counts, and hospital partner counts.",
  },
  {
    id: "neuralink-home",
    type: "Official",
    title: "Neuralink homepage",
    url: "https://neuralink.com/",
    note:
      "Used as Neuralink's primary company anchor. Public technical detail remains comparatively limited on the site itself.",
  },
  {
    id: "neuralink-roundup",
    type: "Reported",
    title: "Neuralink roundup page citing Reuters and other reporting",
    url: "https://en.wikipedia.org/wiki/Neuralink",
    note:
      "Used cautiously for publicly reported participant counts and timeline references where Neuralink's own public detail is thinner than its visibility.",
  },
  {
    id: "synchron-home",
    type: "Official",
    title: "Synchron homepage",
    url: "https://synchron.com/",
    note:
      "Used for the Stentrode description, U.S./Australia trial framing, and Synchron's minimally invasive positioning.",
  },
  {
    id: "paradromics-home",
    type: "Official",
    title: "Paradromics homepage",
    url: "https://paradromics.com/",
    note:
      "Used for Connexus positioning, FDA-cleared study framing, and first-in-human status statements.",
  },
  {
    id: "science-home",
    type: "Official",
    title: "Science Corporation homepage",
    url: "https://science.xyz/",
    note:
      "Used for Science's company positioning and March 5, 2026 financing announcement.",
  },
  {
    id: "inbrain-home",
    type: "Official",
    title: "INBRAIN Neuroelectronics homepage",
    url: "https://inbrain-neuroelectronics.com/",
    note:
      "Used for FDA Breakthrough Device Designation, first human implant announcement, and graphene therapy platform framing.",
  },
  {
    id: "motif-home",
    type: "Official",
    title: "Motif Neurotech homepage",
    url: "https://motifneuro.tech/",
    note:
      "Used for DOT positioning, outpatient procedure language, depression focus, and clinical-trial readiness framing.",
  },
  {
    id: "cognixion-home",
    type: "Official",
    title: "Cognixion homepage",
    url: "https://www.cognixion.com/",
    note:
      "Used for Axon-R positioning, non-invasive BCI study framing, and partnership announcements across 2025-2026.",
  },
  {
    id: "forest-home",
    type: "Official",
    title: "Forest Neurotech homepage",
    url: "https://forestneurotech.org/",
    note:
      "Used for Forest 1, ultrasound imaging and neuromodulation framing, and the Focused Research Organization description.",
  },
  {
    id: "blackrock-home",
    type: "Official",
    title: "Blackrock Neurotech homepage",
    url: "https://blackrockneurotech.com/",
    note:
      "Used for long-run infrastructure statistics like human-study years, implant research days, and institutional usage.",
  },
  {
    id: "neuspera-home",
    type: "Official",
    title: "Neuspera homepage",
    url: "https://neuspera.com/",
    note:
      "Used for the integrated sacral neuromodulation system description and the June 2025 FDA approval statement.",
  },
  {
    id: "neurable-home",
    type: "Official",
    title: "Neurable homepage",
    url: "https://www.neurable.com/",
    note:
      "Used for Neurable's consumer-oriented BCI positioning, research kit, headphones, and decade-long commercialization story.",
  },
  {
    id: "salvia-home",
    type: "Official",
    title: "Salvia BioElectronics homepage",
    url: "https://www.salviabioelectronics.com/",
    note:
      "Used for MySalvia therapy positioning, resistant migraine focus, clinical-stage status, Series B financing, and team scale.",
  },
  {
    id: "neuropace-home",
    type: "Official",
    title: "NeuroPace homepage",
    url: "https://www.neuropace.com/",
    note:
      "Used for RNS System positioning, FDA-approved responsive epilepsy therapy framing, and treatment/EEG data claims.",
  },
  {
    id: "nejm-prima",
    type: "Published research",
    title: "NEJM: PRIMA implant restores functional central vision",
    url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2413255",
    note:
      "Used as the anchor publication for Science's strongest public clinical milestone.",
  },
  {
    id: "nature-endo",
    type: "Published research",
    title: "Nature Biotechnology: minimally invasive endovascular stent-electrode array",
    url: "https://www.nature.com/articles/nbt.3428",
    note:
      "Foundational reference for the endovascular BCI path.",
  },
  {
    id: "jama-stentrode",
    type: "Published research",
    title: "JAMA Neurology: fully implanted endovascular BCI safety study",
    url: "https://jamanetwork.com/journals/jamaneurology/fullarticle/2799737",
    note:
      "Key published safety milestone for Synchron's clinical path.",
  },
  {
    id: "forever-access",
    type: "Published research",
    title: "Towards Forever Access for Implanted Brain-Computer Interfaces",
    url: "https://arxiv.org/abs/2409.17496",
    note:
      "Used conceptually for the patient-dependency, maintenance, and long-term access problem in implanted BCI systems.",
  },
  {
    id: "bci-regulation",
    type: "Published research",
    title: "Regulating Next-Generation Implantable Brain-Computer Interfaces",
    url: "https://arxiv.org/abs/2506.12540",
    note:
      "Used for the autonomy, privacy, identity, and governance lens around implantable BCIs.",
  },
  {
    id: "speech-text-natneuro",
    type: "Published research",
    title: "Nature Neuroscience: machine translation of cortical activity to text",
    url: "https://doi.org/10.1038/s41593-020-0608-8",
    note:
      "Used for the modern encoder-decoder text pipeline in speech and communication BCIs.",
  },
  {
    id: "speech-anarthria-nejm",
    type: "Published research",
    title: "NEJM: neuroprosthesis for decoding speech in a paralyzed person with anarthria",
    url: "https://doi.org/10.1056/NEJMoa2027540",
    note:
      "Used as an early human milestone for direct speech decoding in severe paralysis.",
  },
  {
    id: "handwriting-nature",
    type: "Published research",
    title: "Nature: high-performance brain-to-text communication via handwriting",
    url: "https://doi.org/10.1038/s41586-021-03506-2",
    note:
      "Used for the attempted-handwriting route to faster text communication from cortical signals.",
  },
  {
    id: "speech-imagined-commbiol",
    type: "Published research",
    title: "Communications Biology: real-time synthesis of imagined speech from minimally invasive recordings",
    url: "https://doi.org/10.1038/s42003-021-02578-0",
    note:
      "Used to show that minimally invasive recordings can support real-time speech-related decoding and synthesis.",
  },
  {
    id: "speech-neuroprosthesis",
    type: "Published research",
    title: "Nature: a high-performance speech neuroprosthesis",
    url: "https://doi.org/10.1038/s41586-023-06377-x",
    note:
      "Used for the 2023 intracortical speech neuroprosthesis milestone including higher-rate text output.",
  },
  {
    id: "speech-avatar",
    type: "Published research",
    title: "Nature: a high-performance neuroprosthesis for speech decoding and avatar control",
    url: "https://doi.org/10.1038/s41586-023-06443-4",
    note:
      "Used for the 2023 speech-text-avatar milestone based on high-density surface recordings.",
  },
  {
    id: "speech-bilingual",
    type: "Published research",
    title: "Nature Biomedical Engineering: bilingual speech neuroprosthesis",
    url: "https://doi.org/10.1038/s41551-024-01207-5",
    note:
      "Used to show emerging generalization of speech neuroprostheses across languages.",
  },
  {
    id: "speech-fast-nejm",
    type: "Published research",
    title: "NEJM: an accurate and rapidly calibrating speech neuroprosthesis",
    url: "https://doi.org/10.1056/NEJMoa2314132",
    note:
      "Used for faster calibration, larger-vocabulary performance, and longer-duration human usage results.",
  },
  {
    id: "rns-nine-year",
    type: "Published research",
    title: "Neurology: nine-year efficacy and safety of brain-responsive neurostimulation for focal epilepsy",
    url: "https://doi.org/10.1212/WNL.0000000000010154",
    note:
      "Used as the strongest long-run evidence anchor for commercially real closed-loop neurostimulation.",
  },
  {
    id: "dbs-biomarkers",
    type: "Published research",
    title: "Nature Reviews Neurology: biomarkers for closed-loop deep brain stimulation",
    url: "https://doi.org/10.1038/s41582-019-0166-4",
    note:
      "Used for the biomarker-driven logic behind adaptive and closed-loop stimulation systems.",
  },
  {
    id: "endo-review",
    type: "Published research",
    title: "Neurosurgical Focus: systematic review of endovascular stent-electrode arrays",
    url: "https://doi.org/10.3171/2020.4.FOCUS20186",
    note:
      "Used to ground the endovascular interface path beyond one headline company.",
  },
  {
    id: "closed-loop-onchip",
    type: "Published research",
    title: "IEEE TBCAS: closed-loop neural prostheses with on-chip intelligence",
    url: "https://doi.org/10.1109/TBCAS.2021.3112756",
    note:
      "Used for the systems view that low-latency machine learning and embedded intelligence are central to practical closed-loop devices.",
  },
  {
    id: "bci-trends-review",
    type: "Published research",
    title: "Brain Informatics: brain-computer interface trends, challenges, and threats",
    url: "https://doi.org/10.1186/s40708-023-00199-3",
    note:
      "Used as a broad review of the field's technical bottlenecks, adoption limits, and threat surface.",
  },
  {
    id: "ultrasound-acoustoelectric",
    type: "Published research",
    title: "Nature Communications: in vivo acoustoelectric neuromodulation and ultrasound stimulation",
    url: "https://doi.org/10.1038/s41467-026-73826-2",
    note:
      "Used to show that ultrasound neuromodulation remains an active but still earlier-stage research frontier.",
  },
];

const sourceNumber = new Map(sources.map((source, index) => [source.id, index + 1]));

function cite(ids) {
  const list = Array.isArray(ids) ? ids : [ids];
  return list
    .map((id) => `<sup class="cite-inline"><a href="#src-${id}">[${sourceNumber.get(id)}]</a></sup>`)
    .join("");
}

const signalCards = [
  {
    title: "Useful outputs already exist",
    body:
      `Cursor control, text entry, tremor relief, and early sensory restoration are not speculative anymore.${cite(["cala-home", "synchron-research", "science-prima"])}`,
  },
  {
    title: "Human evidence is compounding",
    body:
      `Precision, Synchron, Science, and others now have stronger human-facing evidence than the field had just a few years ago.${cite(["precision-home", "synchron-home", "science-home"])}`,
  },
  {
    title: "Durability remains the exam",
    body:
      `Long-term access, recalibration, device maintenance, and upgrade paths are still central unresolved issues in implanted systems.${cite(["forever-access"])}`,
  },
  {
    title: "Governance matters early",
    body:
      `The ethical problems are not future-only. They are already baked into questions of privacy, lock-in, and long-term dependency.${cite(["bci-regulation", "forever-access"])}`,
  },
];

const primerItems = [
  {
    title: "Read",
    body:
      "A read system senses neural activity and tries to infer intention, state, symptom, or latent cognitive signal. This can mean decoding a movement goal, detecting tremor-relevant patterns, or inferring focus or fatigue.",
  },
  {
    title: "Write",
    body:
      "A write system stimulates tissue or peripheral pathways to change what the body or brain is doing. Deep brain stimulation, retinal prosthetics, tremor wearables, and sacral neuromodulation all live in this camp.",
  },
  {
    title: "Close the loop",
    body:
      "The most powerful systems sense and intervene together. They monitor what the nervous system is doing, decide what should happen next, and adjust over time rather than firing in a fixed one-way pattern.",
  },
  {
    title: "Ship the full stack",
    body:
      "A chip or headset alone is not the product. The real product is biology, interface design, algorithms, patient or user training, clinician workflow, safety monitoring, and ongoing support.",
  },
];

const concepts = [
  {
    title: "Invasiveness is a trade, not a morality play",
    body:
      `<p>The closer an interface gets to neurons, the richer the signal or control can become. But each step closer increases contact with tissue, increases procedural burden, and often increases long-term biological risk.</p>
       <p>That is why the field has split into multiple serious camps rather than converging on one universal winner: non-invasive wearables, ultrasound systems, surface arrays, endovascular implants, and penetrating intracortical systems are each making a different trade.${cite(["nature-endo", "forest-home"])}</p>`,
  },
  {
    title: "Bandwidth matters, but only relative to the job",
    body:
      `<p>People often talk about BCI bandwidth as if it were a single scoreboard. It is more useful to ask how much information a task really needs.</p>
       <p>Speech restoration and fine motor control may demand very rich, stable signals. Tremor relief or fatigue sensing can create real value with much lower information throughput. Many impressive companies are not racing toward the same target at all.${cite(["paradromics-home", "cala-home", "neurable-home"])}</p>`,
  },
  {
    title: "Decoding is inference under drift",
    body:
      `<p>Neural signals are noisy, user-specific, state-dependent, and not perfectly stationary across days or months. The decoder is trying to infer useful meaning from changing biological evidence.</p>
       <p>This is why calibration, model updates, day-to-day adaptation, and interface design matter so much. A good demo once is easy compared with a usable system over time.${cite(["forever-access"])}</p>`,
  },
  {
    title: "Stimulation is control, not magic",
    body:
      `<p>To write to the nervous system is to bias, modulate, or steer circuits, not to issue precise software-like commands into a blank system.</p>
       <p>That matters because therapies often need patient-specific tuning, careful target selection, and closed-loop adaptation. Neuromodulation is powerful precisely because the nervous system is dynamic, not because it is simple.${cite(["cala-home", "neuspera-home", "inbrain-home"])}</p>`,
  },
  {
    title: "Surgery is part of the product",
    body:
      `<p>For implanted systems, the implantation workflow is one of the product's main surfaces. Duration, reversibility, who can perform it, where it fits in hospital operations, and how follow-up is handled all shape adoption.</p>
       <p>A company can have strong technical claims and still lose if its clinical workflow is too hard to scale.${cite(["precision-home", "synchron-home", "neuralink-home"])}</p>`,
  },
  {
    title: "Clinical evidence beats spectacle",
    body:
      `<p>The field produces unusually dramatic demos, so it is easy to mistake narrative heat for maturity. Better questions are: how many humans, for how long, in what study design, with what failure modes, and with what functional gain?</p>
       <p>Those questions matter more than livestreams, channel counts, or CEO rhetoric.${cite(["jama-stentrode", "nejm-prima", "neuralink-roundup"])}</p>`,
  },
];

const comparisonRows = [
  {
    approach: "Wearables / EEG-adjacent",
    touch: "Scalp-level electrical or related signals",
    strength: "Distribution and low procedural burden",
    weakness: "Noisier and lower-resolution signal",
    names: "Neurable, Cognixion",
  },
  {
    approach: "Ultrasound",
    touch: "Energy passed through skull to deeper structures",
    strength: "Potential deeper access without tissue penetration",
    weakness: "Earlier and less proven as a product path",
    names: "Forest, Nudge",
  },
  {
    approach: "Surface cortical",
    touch: "Brain surface / near-surface cortex",
    strength: "Compromise between fidelity and invasiveness",
    weakness: "Still requires surgery and durability proof",
    names: "Precision, INBRAIN",
  },
  {
    approach: "Endovascular",
    touch: "Vascular-adjacent neural recording path",
    strength: "Avoids open brain surgery",
    weakness: "Anatomical placement constraints",
    names: "Synchron",
  },
  {
    approach: "Penetrating intracortical",
    touch: "Direct or near-direct neuronal recording",
    strength: "Highest assistive bandwidth potential",
    weakness: "Biocompatibility and workflow intensity",
    names: "Neuralink, Paradromics",
  },
  {
    approach: "Therapeutic stimulation",
    touch: "Peripheral or central therapeutic targets",
    strength: "Clear symptom-based endpoints",
    weakness: "Chronic personalization and care pathways",
    names: "Cala, NeuroPace, Neuspera, Salvia, Motif",
  },
];

const marketLegend = [
  { key: "frontier", label: "Frontier BCI", color: "#d7aa61" },
  { key: "therapeutic", label: "Therapeutic neurotech", color: "#6aa6a8" },
  { key: "sensory", label: "Sensory restoration", color: "#a0b58d" },
  { key: "infrastructure", label: "Infrastructure", color: "#b58ea6" },
  { key: "consumer", label: "Consumer / assistive", color: "#7b8fd0" },
];

const companies = [
  {
    id: "neuralink",
    name: "Neuralink",
    category: "frontier",
    badge: "High visibility",
    filterTags: ["all", "frontier", "intracortical"],
    x: 88,
    y: 44,
    blurb:
      `The most visible intracortical BCI company, combining thin implanted threads with a robotic implantation story and unusually aggressive long-term ambition.${cite(["neuralink-home", "neuralink-roundup"])}`,
    summary:
      `Neuralink matters because it is testing whether a very high-ambition, high-bandwidth assistive interface can become a repeatable platform rather than just a headline magnet.${cite(["neuralink-home", "neuralink-roundup"])}`,
    traction:
      "Early human trial with publicly reported participant growth, but comparatively thin public technical detail.",
    dossier: {
      thesis:
        "Neuralink is building a robotically implanted intracortical system aimed first at communication and device control for people with severe paralysis.",
      whyItMatters:
        "It is the most visible proof test of whether high-bandwidth BCI, surgical automation, and public narrative can all survive real human deployment.",
      currentState:
        `Neuralink's public posture is still ahead of its public evidence depth. Reported participant counts rose through 2025, but much of the public detail still comes from reporting and demos rather than a dense public paper trail.${cite(["neuralink-roundup"])}`,
      milestones: [
        `FDA approval for first human study announced in 2023.${cite(["neuralink-home"])}`,
        `First public human participant milestone in 2024, followed by broader public attention.${cite(["neuralink-roundup"])}`,
        `Reported 12 implanted participants by September 9, 2025 via public reporting cited in roundups.${cite(["neuralink-roundup"])}`,
      ],
      watchFor:
        "Longer-term stability, richer public technical detail, broader clinical evidence, and whether the implantation workflow can become repeatable enough to scale.",
    },
  },
  {
    id: "precision",
    name: "Precision Neuroscience",
    category: "frontier",
    badge: "Clinical traction",
    filterTags: ["all", "frontier", "surface", "clinical"],
    x: 63,
    y: 80,
    blurb:
      `A minimally invasive surface-interface company making one of the clearest bets in the field: signal quality matters, but workflow realism matters too.${cite(["precision-home"])}`,
    summary:
      `Precision is one of the strongest examples of a company optimizing for a practical middle ground between invasive fidelity and clinical deployability.${cite(["precision-home"])}`,
    traction:
      "Publicly reports Layer 7 510(k) clearance, 85+ implanted study patients, and 15+ hospital partners.",
    dossier: {
      thesis:
        "Precision is building a brain-surface system designed to be more clinically practical than deep penetrating approaches while still capturing rich cortical signals.",
      whyItMatters:
        "If neurotech scales through a less invasive but still high-value path, Precision is one of the companies most likely to define it.",
      currentState:
        `Precision's Layer 7 positioning is unusually concrete by startup standards: a named device, public hospital counts, and regulatory language tied to a specific interface.${cite(["precision-home"])}`,
      milestones: [
        `Public Layer 7 positioning and clinical partnerships broadened across 2024-2026.${cite(["precision-home"])}`,
        `Publicly reports FDA 510(k) clearance for Layer 7.${cite(["precision-home"])}`,
        `Publicly reports more than 85 implanted study patients and more than 15 hospital partners.${cite(["precision-home"])}`,
      ],
      watchFor:
        "Whether surface systems can preserve enough signal value over time to own meaningful use cases and whether temporary-use workflows evolve into broader platform value.",
    },
  },
  {
    id: "synchron",
    name: "Synchron",
    category: "frontier",
    badge: "Endovascular leader",
    filterTags: ["all", "frontier", "endovascular", "clinical"],
    x: 70,
    y: 76,
    blurb:
      `An endovascular BCI company betting that vascular access and interventional workflow can matter as much as raw neural bandwidth.${cite(["synchron-home", "jama-stentrode"])}`,
    summary:
      `Synchron is one of the field's cleanest alternate theses: useful assistive BCIs may scale more easily if they avoid open brain surgery.${cite(["synchron-home", "nature-endo"])}`,
    traction:
      "U.S. and Australia trial activity with published safety evidence and a differentiated implantation path.",
    dossier: {
      thesis:
        "Synchron is building the Stentrode, an endovascular interface delivered through the vasculature instead of open craniotomy.",
      whyItMatters:
        "It reframes the BCI problem around procedural scalability and patient burden, not only around maximum channel performance.",
      currentState:
        `Synchron has one of the clearest published evidence bases among commercial BCI startups, especially for a minimally invasive implantation philosophy.${cite(["synchron-research", "jama-stentrode"])}`,
      milestones: [
        `Foundational endovascular interface work published in Nature Biotechnology.${cite(["nature-endo"])}`,
        `Published JAMA Neurology safety study in 2023 involving four patients.${cite(["jama-stentrode"])}`,
        `Publicly describes active trials in the U.S. and Australia.${cite(["synchron-home"])}`,
      ],
      watchFor:
        "Whether the lower-burden access path can deliver enough durable assistive performance to win against more invasive systems.",
    },
  },
  {
    id: "paradromics",
    name: "Paradromics",
    category: "frontier",
    badge: "Speech-first contender",
    filterTags: ["all", "frontier", "intracortical", "clinical"],
    x: 85,
    y: 52,
    blurb:
      `A high-data-rate intracortical company centered on restoring rapid communication, especially speech-related output.${cite(["paradromics-home"])}`,
    summary:
      `Paradromics matters because speech restoration may become one of the highest-value wedges in all of neurotech.${cite(["paradromics-home"])}`,
    traction:
      "Publicly states FDA-cleared human study status and first-in-human activity in 2026.",
    dossier: {
      thesis:
        "Paradromics is building Connexus, a fully implantable high-data-rate intracortical BCI with a communication-first orientation.",
      whyItMatters:
        "If high-bandwidth speech restoration becomes real, Paradromics could help define what the upper end of assistive BCI capability looks like.",
      currentState:
        `Paradromics has framed itself around the most demanding but most valuable assistive wedge: communication at much richer rates than basic cursor control.${cite(["paradromics-home"])}`,
      milestones: [
        `Connexus publicly positioned as a fully implantable BCI system.${cite(["paradromics-home"])}`,
        `Publicly states FDA approval for human clinical studies.${cite(["paradromics-home"])}`,
        `Publicly states first-in-human study activity in 2026.${cite(["paradromics-home"])}`,
      ],
      watchFor:
        "Real-world communication rate, long-term signal durability, and whether invasive bandwidth advantages translate into practical daily use.",
    },
  },
  {
    id: "science",
    name: "Science Corporation",
    category: "sensory",
    badge: "Sensory prosthetics leader",
    filterTags: ["all", "sensory", "clinical"],
    x: 72,
    y: 79,
    blurb:
      `A broad neural engineering company whose PRIMA retinal implant program is one of the clearest sensory-restoration stories in the field.${cite(["science-home", "nejm-prima"])}`,
    summary:
      `Science is a reminder that neurotech is not only about controlling cursors. Restoring sensory function may become one of the field's most important categories.${cite(["science-prima", "nejm-prima"])}`,
    traction:
      "Large 2026 financing round and strong public clinical milestone around PRIMA.",
    dossier: {
      thesis:
        "Science Corporation is building a broader neural ecosystem, but its clearest flagship is PRIMA for visual restoration.",
      whyItMatters:
        "Sensory prosthetics make the human benefit of neurotech unusually concrete and potentially life-changing.",
      currentState:
        `Science couples substantial financing with one of the strongest public clinical publications in the commercial field today.${cite(["science-home", "science-prima", "nejm-prima"])}`,
      milestones: [
        `PRIMA technology milestones culminated in a 2025 NEJM publication.${cite(["science-prima", "nejm-prima"])}`,
        `Science announced a $230M Series C on March 5, 2026.${cite(["science-home"])}`,
        `PRIMA remains one of the strongest examples of neurotech restoring real sensory capability rather than only digital control.${cite(["science-prima"])}`,
      ],
      watchFor:
        "Commercial rollout, rehabilitation fit, perceptual quality, and whether sensory prosthetics can scale into routine care.",
    },
  },
  {
    id: "inbrain",
    name: "INBRAIN Neuroelectronics",
    category: "therapeutic",
    badge: "Graphene therapy platform",
    filterTags: ["all", "therapeutic", "surface", "clinical"],
    x: 66,
    y: 62,
    blurb:
      `A graphene-based neural therapy company blending BCI language with closed-loop therapeutic intent around disorders such as Parkinson's disease.${cite(["inbrain-home"])}`,
    summary:
      `INBRAIN matters because it sits at the intersection of advanced materials, bidirectional interfaces, and therapeutics rather than pure “telepathy” narratives.${cite(["inbrain-home"])}`,
    traction:
      "Public FDA Breakthrough Device Designation and first human implant announcement.",
    dossier: {
      thesis:
        "INBRAIN is building a high-resolution, graphene-based bidirectional neural interface platform for therapy rather than only device control.",
      whyItMatters:
        "It pushes the field toward disease-specific closed-loop therapy using advanced materials and denser interfaces.",
      currentState:
        `The company publicly emphasizes skin-like graphene interfaces, high-contact-count systems, AI-powered personalization, and a Parkinson's therapeutic focus.${cite(["inbrain-home"])}`,
      milestones: [
        `Publicly states FDA Breakthrough Device Designation for Parkinson's disease.${cite(["inbrain-home"])}`,
        `Publicly announced first human implant of a graphene-based brain interface.${cite(["inbrain-home"])}`,
        `Frames itself as decoding and modulating neural networks in closed loop.${cite(["inbrain-home"])}`,
      ],
      watchFor:
        "Whether graphene and higher resolution translate into superior patient outcomes and whether the therapeutic workflow becomes compelling enough for real adoption.",
    },
  },
  {
    id: "motif",
    name: "Motif Neurotech",
    category: "therapeutic",
    badge: "Psychiatric neurotech",
    filterTags: ["all", "therapeutic", "clinical"],
    x: 61,
    y: 38,
    blurb:
      `A mental-health neurotech company focused on treatment-resistant depression and the possibility of monitoring and regulating mental states nearer their source.${cite(["motif-home"])}`,
    summary:
      `Motif is important because psychiatric neurotechnology could become one of the field's largest opportunities if it proves both effective and ethically navigable.${cite(["motif-home"])}`,
    traction:
      "Registry and clinical-readiness phase, with public 2026 first-in-human framing through media and company materials.",
    dossier: {
      thesis:
        "Motif is building DOT, a therapeutic brain interface aimed first at treatment-resistant depression.",
      whyItMatters:
        "Mental-health neurotechnology has enormous upside, but it also intensifies the field's hardest questions around mechanism, consent, and identity.",
      currentState:
        `Motif publicly frames DOT as cosmetically invisible, outpatient-delivered, and intended to help rebalance relevant brain networks for depression.${cite(["motif-home"])}`,
      milestones: [
        `Public patient registry and depression-first positioning.${cite(["motif-home"])}`,
        `Company materials frame DOT around home-centered use after outpatient delivery.${cite(["motif-home"])}`,
        `2026 media attention around first-in-human testing direction.${cite(["motif-home"])}`,
      ],
      watchFor:
        "Whether psychiatric endpoints can be measured convincingly, whether patient benefit is robust, and how the field handles the ethics of neural intervention in mood and mental state.",
    },
  },
  {
    id: "nudge",
    name: "Nudge",
    category: "consumer",
    badge: "Reported/private",
    filterTags: ["all", "consumer", "therapeutic", "noninvasive"],
    x: 33,
    y: 28,
    blurb:
      `A reported private ultrasound neurotech startup associated with Fred Ehrsam and former Neuralink personnel, described publicly as aiming for non-invasive whole-brain interfaces and longer-term applications in mood, cognition, and sleep.${cite(["nudge-reported"])}`,
    summary:
      `Nudge belongs on the map because it shows how capital is moving toward non-invasive and potentially neuromodulatory neural interfaces, even before the evidence base is public and mature.${cite(["nudge-reported"])}`,
    traction:
      "Reported 2025 Series A and research-device activity, but public primary source detail remains sparse.",
    dossier: {
      thesis:
        "Nudge appears to be pursuing a lower-burden ultrasound-based interface path, potentially spanning both read and modulation ambitions.",
      whyItMatters:
        "It is an example of a big-ambition neurotech entrant trying to avoid brain-tissue implants while still aiming at broad neural-interface outcomes.",
      currentState:
        `Based on reported public summaries, Nudge is a private company with limited primary disclosure. That means the ambition is visible, but the evidence layer is not yet comparable to more public clinical players.${cite(["nudge-reported"])}`,
      milestones: [
        `Reportedly incorporated in 2024 and associated with former Neuralink personnel.${cite(["nudge-reported"])}`,
        `Reportedly unveiled a research device called Nudge Zero in 2025.${cite(["nudge-reported"])}`,
        `Reportedly raised a $100M Series A in July 2025.${cite(["nudge-reported"])}`,
      ],
      watchFor:
        "Primary public materials, concrete modality detail, evidence of human use, and whether Nudge becomes more therapeutic, assistive, or consumer-facing over time.",
    },
  },
  {
    id: "cognixion",
    name: "Cognixion",
    category: "consumer",
    badge: "Assistive non-invasive stack",
    filterTags: ["all", "consumer", "noninvasive", "clinical"],
    x: 24,
    y: 63,
    blurb:
      `A non-invasive assistive neurotech company combining brain input, eye tracking, head pose, and assisted-reality software for communication and control.${cite(["cognixion-home"])}`,
    summary:
      `Cognixion is a good reminder that neurotech products can be won through multimodal usability, not only through purist signal metrics.${cite(["cognixion-home"])}`,
    traction:
      "Multiple 2025-2026 announcements, research partnerships, and a strong assistive framing.",
    dossier: {
      thesis:
        "Cognixion is building a practical non-invasive assistive platform rather than betting everything on raw BCI purity.",
      whyItMatters:
        "Many real users need an interface that works with eyes, head pose, AI assistance, and brain input together, not a purity contest about what counts as 'true' BCI.",
      currentState:
        `The Axon-R platform and related announcements show a company oriented toward product systems and research integration rather than only laboratory demos.${cite(["cognixion-home"])}`,
      milestones: [
        `Public Axon-R positioning for assistive, clinical, and future-tech applications.${cite(["cognixion-home"])}`,
        `Public partnership announcements including Blackrock and Pupil Labs in 2025.${cite(["cognixion-home"])}`,
        `Public 2025-2026 study and product recognition updates.${cite(["cognixion-home"])}`,
      ],
      watchFor:
        "Whether non-invasive assistive systems can outperform existing alternatives in enough real use cases to become daily defaults.",
    },
  },
  {
    id: "forest",
    name: "Forest Neurotech",
    category: "consumer",
    badge: "Ultrasound research platform",
    filterTags: ["all", "noninvasive", "consumer"],
    x: 29,
    y: 34,
    blurb:
      `A focused research organization building ultrasound-based neural interfaces that could access deeper structures without penetrating tissue directly.${cite(["forest-home"])}`,
    summary:
      `Forest matters because it represents one of the most conceptually important alternate interface paths in the field: different physics, not just better electrodes.${cite(["forest-home"])}`,
    traction:
      "Research platform stage with public Forest 1 device framing.",
    dossier: {
      thesis:
        "Forest is trying to expand access to ultrasonic neural interfaces through a research-grade platform.",
      whyItMatters:
        "Ultrasound could matter because it changes what kinds of brain regions are addressable while lowering some dimensions of invasiveness.",
      currentState:
        `Forest 1 is described publicly as a miniaturized ultrasound scanner for functional imaging and neuromodulation from surface to deep brain structures.${cite(["forest-home"])}`,
      milestones: [
        `Forest launched publicly as a Focused Research Organization in 2023-2024 context.${cite(["forest-home"])}`,
        `Publicly introduced Forest 1 as a small research-grade scanner.${cite(["forest-home"])}`,
        `Publicly frames its work as precise, less invasive tools for studying brain function.${cite(["forest-home"])}`,
      ],
      watchFor:
        "Whether this research layer transitions into clear therapeutic or assistive product pathways and whether the ultrasound path proves controllable enough at scale.",
    },
  },
  {
    id: "blackrock",
    name: "Blackrock Neurotech",
    category: "infrastructure",
    badge: "Infrastructure layer",
    filterTags: ["all", "infrastructure", "clinical"],
    x: 74,
    y: 69,
    blurb:
      `A foundational neurotech infrastructure company with deep research roots and unusually long human-study history.${cite(["blackrock-home"])}`,
    summary:
      `Blackrock matters because fields become real through instruments, software, datasets, clinicians, and institutional familiarity, not only through flashy startups.${cite(["blackrock-home"])}`,
    traction:
      "Publicly reports 19+ years of human studies, 30K+ implant research days, and 1,000+ research institutions.",
    dossier: {
      thesis:
        "Blackrock is the infrastructure layer that helps make the rest of the field possible.",
      whyItMatters:
        "If you want to understand how neurotech becomes normal, study the platforms that quietly standardize tools, workflows, and institutional confidence.",
      currentState:
        `Blackrock's public numbers reflect long-run accumulation: years of study time, research days, and broad institutional penetration.${cite(["blackrock-home"])}`,
      milestones: [
        `Publicly reports 19-plus years of human studies.${cite(["blackrock-home"])}`,
        `Publicly reports more than 30,000 implant research days.${cite(["blackrock-home"])}`,
        `Publicly reports use across more than 1,000 research institutions.${cite(["blackrock-home"])}`,
      ],
      watchFor:
        "How infrastructure providers evolve as more startups become clinically active and whether they become even more central as interoperability questions deepen.",
    },
  },
  {
    id: "cala",
    name: "Cala Health",
    category: "therapeutic",
    badge: "Commercial neuromodulation",
    filterTags: ["all", "therapeutic", "clinical"],
    x: 18,
    y: 92,
    blurb:
      `A neurotech company showing that symptom relief, reimbursement, and everyday usability can matter more than sci-fi rhetoric.${cite(["cala-home"])}`,
    summary:
      `Cala deserves more attention than it gets because it is one of the clearest examples of neurotech with real present-day commercial and reimbursement traction.${cite(["cala-home"])}`,
    traction:
      "FDA-cleared product, Medicare coverage, and therapy designed for routine use.",
    dossier: {
      thesis:
        "Cala is building a clinically grounded wearable neuromodulation business around action hand tremor.",
      whyItMatters:
        "It shows what neurotech looks like when it becomes an actual covered therapy product rather than just a frontier concept.",
      currentState:
        `Cala states that kIQ is the only FDA-cleared wearable device delivering effective therapy for action hand tremor in essential tremor and Parkinson's disease, and that qualifying patients may receive Medicare coverage.${cite(["cala-home"])}`,
      milestones: [
        `Public TAPS therapy framing and home-use studies.${cite(["cala-home"])}`,
        `Publicly states FDA-cleared wearable status for action hand tremor.${cite(["cala-home"])}`,
        `Publicly states Medicare coverage for qualifying beneficiaries.${cite(["cala-home"])}`,
      ],
      watchFor:
        "How far reimbursed, symptom-specific neuromodulation can scale and whether similar care pathways open for adjacent neurotech indications.",
    },
  },
  {
    id: "neuropace",
    name: "NeuroPace",
    category: "therapeutic",
    badge: "Closed-loop epilepsy therapy",
    filterTags: ["all", "therapeutic", "clinical"],
    x: 56,
    y: 96,
    blurb:
      `A responsive neurostimulation company proving that neurotech can already sense abnormal brain activity, intervene in real time, and feed clinically useful data back into care.${cite(["neuropace-home"])}`,
    summary:
      `NeuroPace belongs near the center of this field because it shows that closed-loop neurotechnology is not a future-only concept. In one important disease area, it is already a real treatment category.${cite(["neuropace-home"])}`,
    traction:
      "Commercial FDA-approved therapy with a mature clinical and provider ecosystem around drug-resistant focal epilepsy.",
    dossier: {
      thesis:
        "NeuroPace is building neurotechnology as a true closed-loop therapy product: sense, detect, stimulate, and learn from long-term neural data.",
      whyItMatters:
        "It grounds the field. If you want to know what neurotech looks like when it survives beyond demos, look at companies that plug directly into standard-of-care decisions and ongoing clinical management.",
      currentState:
        `NeuroPace states that the RNS System is the only FDA-approved epilepsy device that responds to abnormal brain activity while also providing EEG data that can help improve patient care.${cite(["neuropace-home"])}`,
      milestones: [
        `Publicly states that the RNS System delivers personalized treatment by responding to each patient's seizure activity.${cite(["neuropace-home"])}`,
        `Publicly frames the system as a treatment for adults with drug-resistant focal epilepsy.${cite(["neuropace-home"])}`,
        `Publicly emphasizes physician-facing data and actionable insights, not just stimulation hardware.${cite(["neuropace-home"])}`,
      ],
      watchFor:
        "How much responsive stimulation plus longitudinal data becomes the template for other disease areas, and whether neurotech companies increasingly compete on care software as much as on implants.",
    },
  },
  {
    id: "neuspera",
    name: "Neuspera",
    category: "therapeutic",
    badge: "Implant therapy commercialization",
    filterTags: ["all", "therapeutic", "clinical"],
    x: 41,
    y: 87,
    blurb:
      `An implantable therapy company using an integrated sacral neuromodulation architecture for urinary urge incontinence and overactive bladder.${cite(["neuspera-home"])}`,
    summary:
      `Neuspera matters because it represents the less glamorous but highly real branch of neurotech that wins through targeted therapeutic workflows.${cite(["neuspera-home"])}`,
    traction:
      "Publicly states FDA approval in June 2025 for its integrated sacral neuromodulation system.",
    dossier: {
      thesis:
        "Neuspera is bringing implantable neurotechnology into a well-defined therapeutic vertical with concrete patient demand.",
      whyItMatters:
        "It demonstrates how much of neurotech progress occurs in disease-specific markets the BCI discourse often ignores.",
      currentState:
        `Neuspera describes a smart neurostimulator implanted near the sacral nerve with an external wearable battery model and states FDA approval in June 2025.${cite(["neuspera-home"])}`,
      milestones: [
        `Public integrated sacral neuromodulation system positioning.${cite(["neuspera-home"])}`,
        `Public emphasis on eliminating implanted batteries and related complications.${cite(["neuspera-home"])}`,
        `Publicly states June 2025 FDA approval.${cite(["neuspera-home"])}`,
      ],
      watchFor:
        "Whether the integrated architecture meaningfully improves patient adoption and clinician willingness versus more established therapeutic options.",
    },
  },
  {
    id: "salvia",
    name: "Salvia BioElectronics",
    category: "therapeutic",
    badge: "Migraine neuromodulation",
    filterTags: ["all", "therapeutic", "clinical"],
    x: 35,
    y: 78,
    blurb:
      `A clinical-stage neuromodulation company focused on resistant migraine, using ultra-thin implants and an everyday-use therapy model rather than a hospital-only neurotech story.${cite(["salvia-home"])}`,
    summary:
      `Salvia matters because migraine is a massive unmet-need market, and its product framing makes neurotech look like disciplined medtech instead of frontier spectacle.${cite(["salvia-home"])}`,
    traction:
      "Clinical-stage development, active U.S. and Europe footprint, and a publicly announced $60M Series B financing round.",
    dossier: {
      thesis:
        "Salvia is building a targeted bioelectronic therapy for resistant migraine and cluster headache with a practical consumer-health rhythm: discreet implant, on-demand control, daily-life usability.",
      whyItMatters:
        "The field needs more companies solving enormous neurological problems with realistic care pathways. Migraine is exactly that kind of market.",
      currentState:
        `Salvia says MySalvia Therapy is being evaluated in clinical studies, uses ultra-thin implants to target key nerves involved in migraine, and is designed for activation through a wearable controller.${cite(["salvia-home"])}`,
      milestones: [
        `Publicly states its therapy is aimed first at resistant migraine and is also being explored for cluster headache.${cite(["salvia-home"])}`,
        `Publicly says it operates across the United States and Europe with more than 70 team members from 19 countries.${cite(["salvia-home"])}`,
        `Publicly announced a $60M Series B financing round to bring its therapy to market.${cite(["salvia-home"])}`,
      ],
      watchFor:
        "Clinical efficacy durability, implant burden versus competing therapies, and whether migraine patients and clinicians see enough value to adopt an interventional neuromodulation pathway.",
    },
  },
  {
    id: "neurable",
    name: "Neurable",
    category: "consumer",
    badge: "Consumer-adjacent BCI",
    filterTags: ["all", "consumer", "noninvasive"],
    x: 14,
    y: 54,
    blurb:
      `A consumer-oriented BCI company trying to embed brain sensing into everyday wearables, with a focus on attention, fatigue, and usable form factor.${cite(["neurable-home"])}`,
    summary:
      `Neurable helps define the outer edge of what neurotech could look like if it escapes the clinic and lands in ordinary devices.${cite(["neurable-home"])}`,
    traction:
      "Public research kit, consumer product direction, and a decade-long commercialization narrative.",
    dossier: {
      thesis:
        "Neurable is pushing neurotech toward everyday devices rather than keeping it inside clinics and labs only.",
      whyItMatters:
        "If brain-signal products become common, companies like Neurable are showing the consumer design constraints early.",
      currentState:
        `Neurable publicly frames its products around focus tracking, fatigue prevention, and BCI integrated into everyday wearables, including headphones.${cite(["neurable-home"])}`,
      milestones: [
        `Public research kit and consumer waitlist positioning.${cite(["neurable-home"])}`,
        `Decade-long path from University of Michigan spinout origins to everyday-device integration story.${cite(["neurable-home"])}`,
        `Public emphasis on broader wellness, productivity, and healthcare possibilities for brain data.${cite(["neurable-home"])}`,
      ],
      watchFor:
        "Signal quality, durable user value, and especially governance if consumer brain data becomes a normal product layer.",
    },
  },
];

const landscapeRows = [
  {
    key: "assistive",
    label: "Assistive / communication",
    note: "Cursor control, text entry, speech, communication, and software control.",
  },
  {
    key: "therapeutic",
    label: "Therapeutic / disease control",
    note: "Symptom relief, circuit modulation, or disease-specific intervention.",
  },
  {
    key: "sensory",
    label: "Sensory restoration",
    note: "Products aimed at restoring vision or other sensory capability.",
  },
  {
    key: "infrastructure",
    label: "Infrastructure / research",
    note: "Companies and platforms that make the rest of the field easier to build.",
  },
];

const landscapeColumns = [
  {
    key: "noninvasive",
    label: "Non-invasive",
    note: "Headsets, wearables, ultrasound, and multimodal systems outside the body.",
  },
  {
    key: "peripheral",
    label: "Peripheral / wearable therapy",
    note: "Therapy systems outside the skull or at the body's edge, often symptom-first.",
  },
  {
    key: "surface",
    label: "Surface / minimally invasive",
    note: "On cortex or just under the skull, designed to balance access with workflow realism.",
  },
  {
    key: "targeted-implant",
    label: "Targeted implant",
    note: "Localized implants or vascular paths aimed at reducing burden versus open-brain access.",
  },
  {
    key: "deep-implant",
    label: "Intracortical / sensory implant",
    note: "More direct access to neural tissue or sensory pathways, with the highest procedural burden.",
  },
];

const pathwayBurden = {
  noninvasive: "Lowest burden",
  peripheral: "Low burden",
  surface: "Medium burden",
  "targeted-implant": "Higher burden",
  "deep-implant": "Highest burden",
};

const companyDetails = {
  neuralink: {
    product: {
      kind: "threads",
      device: "Threaded cortical implant + surgical robot",
      touchpoint: "Motor cortex through penetrating threads",
      procedure: "Robotically implanted cranial surgery",
      mode: "Read-first assistive BCI",
      firstJob: "Computer and communication control for paralysis",
    },
    landscape: { row: "assistive", col: "deep-implant" },
    dossier: {
      howItWorks:
        "Neuralink inserts many thin electrode threads into cortex, then routes those signals into decoding software intended to infer movement intent or communication intent. The company's distinctive bet is that implantation automation is part of the product, not just an operating-room detail.",
      deployment:
        "This path requires neurosurgical workflow, a repeatable implantation robot, long-term support, and a way to keep calibration, upgrades, and clinical operations manageable over years rather than weeks.",
      competitiveFrame:
        "Neuralink competes at the high-bandwidth end against Paradromics and, more indirectly, against lower-burden systems like Synchron or Precision that may trade some signal richness for better deployability.",
      bottlenecks:
        "The biggest open questions are long-term tissue response, public evidence depth, and whether surgical complexity can be reduced enough to support scale.",
      proofNeeded:
        "What would change the field's confidence most is a longer public record of stable daily use, richer technical publication, and evidence that the surgical workflow can be made routine instead of heroic.",
    },
  },
  precision: {
    product: {
      kind: "surface-film",
      device: "Layer 7 cortical surface array",
      touchpoint: "Brain surface / near-surface cortex",
      procedure: "Minimally invasive cranial placement",
      mode: "Read-first assistive BCI",
      firstJob: "Motor-intent and communication interfaces",
    },
    landscape: { row: "assistive", col: "surface" },
    dossier: {
      howItWorks:
        "Precision places a thin film-like array on the cortical surface to capture richer signals than scalp systems while avoiding deeper penetrating threads. The product logic is that many clinical customers may prefer a slightly lower-bandwidth but easier-to-deploy interface.",
      deployment:
        "Its appeal depends on procedure time, reversibility, hospital workflow fit, and whether temporary or lower-burden placements still create enough useful data to justify adoption.",
      competitiveFrame:
        "Precision sits between Neurable/Cognixion on the low-burden side and Neuralink/Paradromics on the high-bandwidth side, making it one of the field's clearest middle-path companies.",
      bottlenecks:
        "The main risk is whether surface signals stay strong enough for meaningful products once you leave the cleanest trial conditions and demand long-term reliability.",
      proofNeeded:
        "The next big proof points are richer public performance detail, deeper real-world deployment evidence, and proof that hospitals see the procedure as operationally attractive.",
    },
  },
  synchron: {
    product: {
      kind: "stentrode",
      device: "Stentrode endovascular interface",
      touchpoint: "Blood vessel adjacent to motor cortex",
      procedure: "Endovascular catheter-based implantation",
      mode: "Read-first assistive BCI",
      firstJob: "Hands-free digital control and communication",
    },
    landscape: { row: "assistive", col: "targeted-implant" },
    dossier: {
      howItWorks:
        "Synchron expands a stent-like electrode array inside a blood vessel near cortical tissue, then decodes activity without requiring open-brain surgery. The whole thesis is that vascular workflow may be a better route to usable BCI than maximum raw channel intensity.",
      deployment:
        "This path leans on interventional expertise, vascular anatomy, imaging, and chronic support. It tries to make implantation feel closer to an established medical procedure than a bespoke neurosurgical event.",
      competitiveFrame:
        "Synchron is the cleanest procedural alternative to Neuralink and Paradromics, and one of the strongest tests of whether lower burden can beat maximum bandwidth.",
      bottlenecks:
        "Placement constraints, signal richness versus deeper implants, and long-term stability remain the core questions.",
      proofNeeded:
        "The decisive evidence would be durable daily assistive use at strong enough performance to make the lower-burden path clearly worth the trade.",
    },
  },
  paradromics: {
    product: {
      kind: "speech-port",
      device: "Connexus high-data-rate implant",
      touchpoint: "Penetrating cortical recording",
      procedure: "Implanted neurosurgical system",
      mode: "Read-first assistive BCI",
      firstJob: "High-rate communication and speech restoration",
    },
    landscape: { row: "assistive", col: "deep-implant" },
    dossier: {
      howItWorks:
        "Paradromics is pursuing a dense implanted interface optimized around high-rate neural recording and decoding, especially for communication. Its product story is less about general telepathy and more about regaining expressive throughput.",
      deployment:
        "A speech-focused assistive BCI still needs implantation, calibration, decoder training, language interface design, and long-term caregiver or clinical support. The product is the entire recovery workflow, not only the implant.",
      competitiveFrame:
        "Paradromics competes most directly with Neuralink for the high-bandwidth assistive lane, but with a sharper public emphasis on speech restoration as the wedge.",
      bottlenecks:
        "High ambition brings the usual implanted-system risks: tissue response, device longevity, calibration drift, and the challenge of turning benchmark performance into everyday conversation.",
      proofNeeded:
        "The most meaningful next step would be public evidence of sustained communication speed and quality in real human use rather than just early implantation milestones.",
    },
  },
  science: {
    product: {
      kind: "retina",
      device: "PRIMA retinal implant system",
      touchpoint: "Retinal / visual pathway stimulation",
      procedure: "Specialized ophthalmic implant + rehab",
      mode: "Write-first sensory prosthetic",
      firstJob: "Vision restoration in severe retinal disease",
    },
    landscape: { row: "sensory", col: "deep-implant" },
    dossier: {
      howItWorks:
        "Science's PRIMA program uses an implant and external visual system to create useful perceptual information for people with severe retinal degeneration. This is neurotech as recovered sensory function, not cursor control.",
      deployment:
        "Success depends on surgery, hardware reliability, fitting, perceptual training, rehabilitation, and clinician education. Sensory prosthetics are never just hardware drops; they are adaptation programs.",
      competitiveFrame:
        "Science stands apart from most BCI startups because its flagship case is sensory restoration, making it more comparable to prosthetic vision efforts than to communication-focused assistive BCIs.",
      bottlenecks:
        "Commercial complexity, rehabilitation burden, percept quality, and scaling specialist care are all harder than a single publication can make them appear.",
      proofNeeded:
        "The next important proof is whether strong clinical publication converts into repeatable commercial delivery and meaningful day-to-day patient benefit.",
    },
  },
  inbrain: {
    product: {
      kind: "graphene",
      device: "Graphene bidirectional cortical interface",
      touchpoint: "Surface / near-surface brain circuits",
      procedure: "Implanted therapeutic interface",
      mode: "Read-write closed-loop therapy",
      firstJob: "Parkinson's and related circuit disorders",
    },
    landscape: { row: "therapeutic", col: "surface" },
    dossier: {
      howItWorks:
        "INBRAIN uses high-resolution graphene interfaces to both sense and stimulate neural tissue, aiming to personalize therapy rather than simply fire at a fixed setting. Its story is part materials innovation, part closed-loop therapy platform.",
      deployment:
        "A therapeutic brain interface has to work inside standard clinical care: target selection, implantation, parameter tuning, follow-up visits, and evidence that the therapy meaningfully improves outcomes.",
      competitiveFrame:
        "INBRAIN sits between classical neuromodulation and frontier BCI, using denser interfaces and advanced materials while staying anchored to therapeutic use cases.",
      bottlenecks:
        "The hard questions are whether graphene creates meaningful clinical advantage, whether bidirectional control really improves therapy, and how much complexity clinicians will accept.",
      proofNeeded:
        "What matters next is outcome evidence, not just interface elegance: better therapy durability, stronger patient benefit, and operational simplicity versus competing neuromodulation approaches.",
    },
  },
  motif: {
    product: {
      kind: "cranial-patch",
      device: "DOT depression therapy implant",
      touchpoint: "Targeted brain circuits linked to mood",
      procedure: "Outpatient-delivered implanted therapy",
      mode: "Write-first / closed-loop psychiatric therapy",
      firstJob: "Treatment-resistant depression",
    },
    landscape: { row: "therapeutic", col: "surface" },
    dossier: {
      howItWorks:
        "Motif aims to deliver a discreet therapeutic brain interface for depression, with the larger promise that psychiatric neurotechnology can move from blunt modulation to circuit-targeted intervention closer to source.",
      deployment:
        "Psychiatric neurotech has to win on unusually difficult terrain: symptom measurement, patient selection, long-term safety, clinician trust, and the ethics of intervening in mood and identity.",
      competitiveFrame:
        "Motif is not competing with Neuralink-style assistive BCIs so much as with psychiatric treatments, neuromodulation therapies, and any approach that can show meaningful depression relief with lower burden.",
      bottlenecks:
        "The biggest unknown is whether psychiatric endpoints can be measured and improved convincingly enough to justify an interventional device path.",
      proofNeeded:
        "Clear human efficacy data, durable improvement, and a persuasive ethical and clinical workflow story are what would make this category feel real.",
    },
  },
  nudge: {
    product: {
      kind: "ultrasound",
      device: "Reported ultrasound neural interface",
      touchpoint: "Whole-brain or deeper targets without penetration",
      procedure: "Non-invasive research-device path",
      mode: "Potential read-write non-invasive system",
      firstJob: "Still ambiguous: cognition, mood, sleep, or assistive uses",
    },
    landscape: { row: "therapeutic", col: "noninvasive" },
    dossier: {
      howItWorks:
        "Public reporting suggests Nudge is exploring ultrasound-based neural interfacing, which matters because ultrasound implies different physics and potentially lower burden than implanted electrodes.",
      deployment:
        "The practical path is still hard to judge because the company is private and public primary material is limited. That uncertainty itself is part of the dossier.",
      competitiveFrame:
        "Nudge is best understood as a capital-and-talent signal around non-invasive neurotech rather than a fully comparable public evidence story.",
      bottlenecks:
        "Right now the biggest bottleneck is information: modality detail, human evidence, product intent, and what exact use case the company will pursue first.",
      proofNeeded:
        "Primary technical materials and any serious human-use evidence would immediately make the company easier to place against public peers.",
    },
  },
  cognixion: {
    product: {
      kind: "glasses",
      device: "Axon-R multimodal assistive headset",
      touchpoint: "Non-invasive brain input + eye/head tracking",
      procedure: "Wearable setup, no surgery",
      mode: "Read-first multimodal assistive stack",
      firstJob: "Communication and computer access",
    },
    landscape: { row: "assistive", col: "noninvasive" },
    dossier: {
      howItWorks:
        "Cognixion combines non-invasive brain sensing with eye tracking, head pose, and assisted-reality software. The product thesis is that real usability may come from combining weak signals well rather than chasing one perfect signal.",
      deployment:
        "Because it avoids surgery, the deployment focus shifts toward setup time, ergonomics, communication speed, caregiver fit, and whether the software stack is good enough to become a daily tool.",
      competitiveFrame:
        "Cognixion competes more with assistive communication stacks and multimodal interfaces than with high-bandwidth implanted BCI systems.",
      bottlenecks:
        "Signal quality, workflow reliability, and proving that the overall system outperforms simpler alternatives remain the main tests.",
      proofNeeded:
        "The key evidence is durable real-world use: can people use the system often enough and effectively enough that it becomes sticky?",
    },
  },
  forest: {
    product: {
      kind: "ultrasound-imager",
      device: "Forest 1 ultrasound neurotech platform",
      touchpoint: "Ultrasound access to deep structures",
      procedure: "Research-platform workflow",
      mode: "Research sensing / modulation platform",
      firstJob: "Enable future ultrasound neurotech",
    },
    landscape: { row: "infrastructure", col: "noninvasive" },
    dossier: {
      howItWorks:
        "Forest is building research-grade ultrasound hardware that can image or modulate deeper brain structures without penetrating tissue directly, making it more of an enabling platform than a finished therapeutic product today.",
      deployment:
        "The near-term workflow is research adoption, not consumer or routine clinical deployment. That means the decisive customers are labs, collaborators, and translational programs.",
      competitiveFrame:
        "Forest is important because it broadens the field's physics and research options, not because it is already a mature commercial therapy player.",
      bottlenecks:
        "The major challenge is translating a compelling research platform into a controllable, safe, and specific product path with clear clinical or assistive value.",
      proofNeeded:
        "The next proof is a stronger bridge from research tool to product wedge: who uses it, for what, and why ultrasound beats adjacent approaches.",
    },
  },
  blackrock: {
    product: {
      kind: "research-stack",
      device: "Implantable research interfaces + software stack",
      touchpoint: "Multiple neural interface layers across research workflows",
      procedure: "Research and clinical infrastructure deployment",
      mode: "Infrastructure / enabling platform",
      firstJob: "Make neurotech research and translation possible",
    },
    landscape: { row: "infrastructure", col: "deep-implant" },
    dossier: {
      howItWorks:
        "Blackrock provides the interfaces, instruments, software, and institutional familiarity that let other neurotech efforts exist. Its product is less one flagship device than a long-running operating layer for the field.",
      deployment:
        "Infrastructure companies win through reliability, interoperability, support, and deep relationships with researchers and clinicians rather than through headline demos.",
      competitiveFrame:
        "Blackrock is less a startup-style competitor and more a reference point for what mature neurotech infrastructure looks like.",
      bottlenecks:
        "The challenge is staying central as newer commercial players push for more integrated stacks and more proprietary workflows.",
      proofNeeded:
        "What matters most is whether infrastructure providers remain the default connective tissue as the market fragments into more product-specific companies.",
    },
  },
  cala: {
    product: {
      kind: "wristband",
      device: "kIQ wrist-worn tremor therapy",
      touchpoint: "Peripheral nerve stimulation at the wrist",
      procedure: "Wearable home-use therapy",
      mode: "Write-first therapeutic neuromodulation",
      firstJob: "Reduce action hand tremor",
    },
    landscape: { row: "therapeutic", col: "peripheral" },
    dossier: {
      howItWorks:
        "Cala uses patterned peripheral stimulation at the wrist to reduce tremor. This is neurotech in its most commercially grounded form: targeted symptom relief, measurable outcome, and routine use.",
      deployment:
        "Its strongest advantage is workflow simplicity relative to implanted systems. The practical questions are reimbursement, adherence, and whether symptom relief is strong enough to sustain routine use.",
      competitiveFrame:
        "Cala competes less with frontier BCI and more with other tremor treatments, showing how much of neurotech's serious progress happens in symptom-specific markets.",
      bottlenecks:
        "The main limits are indication breadth, payer logic, and how much benefit people reliably get in ordinary life outside polished studies.",
      proofNeeded:
        "More reimbursement scale, broader clinical adoption, and replication in adjacent symptom categories would strengthen the thesis materially.",
    },
  },
  neuropace: {
    product: {
      kind: "cranial-closedloop",
      device: "RNS System for epilepsy",
      touchpoint: "Implanted leads sensing and stimulating seizure networks",
      procedure: "Implanted clinical neurosurgical therapy",
      mode: "Read-write closed-loop therapy",
      firstJob: "Reduce seizures in drug-resistant focal epilepsy",
    },
    landscape: { row: "therapeutic", col: "targeted-implant" },
    dossier: {
      howItWorks:
        "NeuroPace continuously monitors brain activity, detects abnormal patterns linked to seizures, and responds with stimulation. It is one of the cleanest examples of a true closed loop already operating in real care.",
      deployment:
        "Because it is already a commercial therapy, the relevant workflow is not hypothetical: implantation, physician programming, ongoing review of recorded data, and long-term care integration are all central.",
      competitiveFrame:
        `NeuroPace is less a speculative startup and more a proof that clinically serious neural closed loops can exist, which makes it a template for many younger companies.${cite(["rns-nine-year"])}`,
      bottlenecks:
        "The frontier question is not whether the category is real, but how far the platform idea extends beyond epilepsy into other disorders.",
      proofNeeded:
        "The clearest next proof would be translation of the same sense-decide-stimulate model into additional disease areas or richer physician software advantages.",
    },
  },
  neuspera: {
    product: {
      kind: "sacral",
      device: "Integrated sacral neuromodulation implant",
      touchpoint: "Sacral nerve stimulation",
      procedure: "Localized implanted therapy with wearable power",
      mode: "Write-first therapeutic neuromodulation",
      firstJob: "Overactive bladder and urinary urge incontinence",
    },
    landscape: { row: "therapeutic", col: "targeted-implant" },
    dossier: {
      howItWorks:
        "Neuspera places a small neurostimulator near the sacral nerve and powers it through an external wearable, trying to preserve implanted therapy value while reducing the burden of internal batteries.",
      deployment:
        "This is a targeted medtech workflow: procedure, follow-up tuning, patient education, and clinician confidence around a specific disease state rather than a general-purpose neural platform.",
      competitiveFrame:
        "Neuspera competes in a defined therapeutic market where practical product design and workflow may matter more than broad neurotech branding.",
      bottlenecks:
        "Its challenges are straightforward but real: clinician adoption, outcome durability, and proving the integrated architecture is meaningfully better than established alternatives.",
      proofNeeded:
        "The strongest proof would be clear real-world adoption plus evidence that the design meaningfully improves patient experience or clinical workflow.",
    },
  },
  salvia: {
    product: {
      kind: "migraine-implant",
      device: "MySalvia migraine neurostimulation system",
      touchpoint: "Targeted nerve pathways linked to migraine",
      procedure: "Ultra-thin implanted leads + wearable controller",
      mode: "Write-first therapeutic neuromodulation",
      firstJob: "Resistant migraine and cluster headache",
    },
    landscape: { row: "therapeutic", col: "targeted-implant" },
    dossier: {
      howItWorks:
        "Salvia places ultra-thin implants near headache-relevant pathways and lets patients activate therapy through an external controller. It is a good example of neurotech presented as serious disease-focused medtech rather than frontier theater.",
      deployment:
        "The deployment burden is lower than many brain implants but still nontrivial: procedure logistics, patient education, migraine care integration, and clear evidence that the benefit justifies intervention.",
      competitiveFrame:
        "Salvia lives in a huge patient market where success depends on outcompeting existing migraine treatments and making the care pathway feel worth it.",
      bottlenecks:
        "Clinical efficacy, patient selection, and how much interventional burden migraine care will tolerate are the core questions.",
      proofNeeded:
        "Convincing clinical outcomes and a clean care model would do more for the thesis than additional platform rhetoric.",
    },
  },
  neurable: {
    product: {
      kind: "headphones",
      device: "Brain-sensing wearable / headphones",
      touchpoint: "Scalp-level non-invasive sensing",
      procedure: "Consumer wearable setup",
      mode: "Read-first consumer BCI",
      firstJob: "Attention, focus, fatigue, and passive cognitive state",
    },
    landscape: { row: "assistive", col: "noninvasive" },
    dossier: {
      howItWorks:
        "Neurable tries to push neural sensing into a familiar wearable form factor, using brain-related signals to infer focus, fatigue, or cognitive state in everyday settings.",
      deployment:
        "The burden is low, but consumer neurotech has a different exam: comfort, signal reliability in messy environments, privacy, and whether the insight is valuable enough to become habitual.",
      competitiveFrame:
        "Neurable competes against every low-friction productivity or wellness tool, not only against other BCIs. The bar is not scientific novelty but everyday usefulness.",
      bottlenecks:
        "Weak signals, noisy real-world conditions, and unclear durable value are the obvious risks, with privacy becoming more important if adoption grows.",
      proofNeeded:
        "What would matter most is evidence that consumers actually keep using the product because it changes behavior or outcomes in a way they can feel.",
    },
  },
};

const companyMedia = {
  neuralink: {
    src: "assets/companies/neuralink-link.webp",
    ref: "https://neuralink.com/technology/",
    label: "Official Link implant casing",
    alt: "Exploded view of the Neuralink Link implant casing",
    kind: "Official hardware",
  },
  precision: {
    src: "https://cdn.sanity.io/images/883wn8od/production/9963e33092a8ab996a184d32a85576442c2826af-607x1080.jpg",
    ref: "https://www.precisionneuro.io/",
    label: "Official Layer 7 device render",
  },
  synchron: {
    src: "assets/companies/synchron-stentrode.webp",
    ref: "https://synchron.com/technology",
    label: "Official Stentrode close-up",
    alt: "Synchron Stentrode endovascular electrode array",
    kind: "Official hardware",
  },
  paradromics: {
    src: "https://paradromics.com/wp-content/uploads/2026/07/Paradromics-Brain-Computer-Interface-Platform-Company.png",
    ref: "https://paradromics.com/",
    label: "Official Connexus platform image",
  },
  science: {
    src: "https://science.xyz/_astro/5_PRIMA_Implant_Macro_0384-Retouched-V1.00.DFKvBRAq_Z13JxsY.webp",
    ref: "https://science.xyz/technologies/prima/",
    label: "Official PRIMA image",
  },
  inbrain: {
    src: "https://inbrain-neuroelectronics.com/wp-content/uploads/2026/06/bci-2.png",
    ref: "https://inbrain-neuroelectronics.com/",
    label: "Official homepage image",
  },
  motif: {
    src: "https://cdn.prod.website-files.com/671bc5b6f9174731bd5bd829/68700827ad5617f086406124_Home%20-%20Open%20Graph%20(1).png",
    ref: "https://motifneuro.tech/technology",
    label: "Official DOT system concept render",
    alt: "Motif DOT device shown in an official system concept render",
    kind: "Official concept render",
  },
  nudge: {
    src: "https://nudge.com/static/device_real_image_back_cover.jpg",
    ref: "https://www.nudge.com/blog/about/",
    label: "Official Nudge Zero image",
  },
  cognixion: {
    src: "assets/companies/cognixion-axon-r.webp",
    ref: "https://www.cognixion.com/",
    label: "Official Axon-R system image",
    alt: "Cognixion Axon-R headset and companion hardware",
    kind: "Official hardware",
  },
  forest: {
    src: "assets/companies/forest-1.jpg",
    ref: "https://forestneurotech.org/forest-1",
    label: "Official Forest 1 system render",
    alt: "Forest 1 ultrasound neural interface hardware",
    kind: "Official hardware",
  },
  blackrock: {
    src: "https://blackrockneurotech.com/wp-content/uploads/2023/05/Group-858.png",
    ref: "https://blackrockneurotech.com/",
    label: "Official Utah array close-up",
  },
  cala: {
    src: "https://calahealth.com/wp-content/uploads/2023/05/homepage-watch-features.png",
    ref: "https://calahealth.com/",
    label: "Official product image",
  },
  neuropace: {
    src: "https://www.neuropace.com/wp-content/uploads/2021/01/urn_aaid_sc_US_c53884f6-655a-410f-80e6-da932009f2544.png",
    ref: "https://www.neuropace.com/",
    label: "Official device image",
  },
  neuspera: {
    src: "https://neuspera.com/wp-content/uploads/neuspera-diagram-updated-020720.png",
    ref: "https://neuspera.com/",
    label: "Official device diagram",
  },
  salvia: {
    src: "https://cdn.prod.website-files.com/68809eb754fe33d63d2a3c5f/68809eb754fe33d63d2a3db7_MySalvia%20Device%204.jpg",
    ref: "https://www.salviabioelectronics.com/",
    label: "Official device image",
  },
  neurable: {
    src: "https://cdn.prod.website-files.com/65773cb2354a620eb230d1e4/657b30529e7a3d9845248e54_Neurable-December-Opengraph%20(2).jpg",
    ref: "https://www.neurable.com/",
    label: "Official site image",
  },
};

companies.forEach((company) => {
  const details = companyDetails[company.id];
  if (!details) return;
  company.product = details.product;
  company.landscape = details.landscape;
  company.media = companyMedia[company.id] || null;
  company.dossier = {
    ...company.dossier,
    ...details.dossier,
  };
});

const companySignals = {
  neuralink: { key: "early-human", stage: "Early human", evidence: "Public trial updates; limited peer-reviewed product data" },
  precision: { key: "human-clinical", stage: "Regulated clinical", evidence: "Human studies and device clearance" },
  synchron: { key: "human-clinical", stage: "Human clinical", evidence: "Published safety study and active trials" },
  paradromics: { key: "early-human", stage: "First-in-human", evidence: "Cleared study with early human activity" },
  science: { key: "human-clinical", stage: "Pivotal clinical", evidence: "Peer-reviewed human outcomes" },
  inbrain: { key: "early-human", stage: "Early human", evidence: "Breakthrough designation and first implant" },
  motif: { key: "research", stage: "Clinical readiness", evidence: "Registry and pre-commercial program" },
  nudge: { key: "research", stage: "Research / stealth", evidence: "Sparse primary disclosure" },
  cognixion: { key: "human-clinical", stage: "Human studies", evidence: "Assistive research and partner programs" },
  forest: { key: "research", stage: "Research platform", evidence: "Translational research; product path emerging" },
  blackrock: { key: "commercial", stage: "Established platform", evidence: "Long-running human research infrastructure" },
  cala: { key: "commercial", stage: "Marketed therapy", evidence: "FDA clearance, coverage, and home use" },
  neuropace: { key: "commercial", stage: "Standard of care", evidence: "FDA approval and long-term outcomes" },
  neuspera: { key: "commercial", stage: "Approved therapy", evidence: "FDA-approved disease-specific implant" },
  salvia: { key: "human-clinical", stage: "Clinical stage", evidence: "Human studies and late-stage financing" },
  neurable: { key: "commercial", stage: "Early market", evidence: "Consumer product and research platform" },
};

companies.forEach((company) => {
  company.signal = companySignals[company.id] || {
    key: "research",
    stage: "Research",
    evidence: "Public evidence still developing",
  };
  if (!company.filterTags.includes(company.signal.key)) {
    company.filterTags.push(company.signal.key);
  }
});

const fieldBrief = [
  {
    eyebrow: "Mature now",
    title: "Disease-specific stimulation",
    body: "The strongest commercial reality sits in focused therapies with measurable endpoints: epilepsy, tremor, movement disorders, pain, and peripheral neuromodulation.",
    tone: "teal",
  },
  {
    eyebrow: "Clinically real",
    title: "Assistive communication",
    body: "Cursor control, text entry, speech decoding, and sensory restoration have crossed into meaningful human evidence, but most systems remain early and high-touch.",
    tone: "accent",
  },
  {
    eyebrow: "Still unproven",
    title: "Durable everyday BCI",
    body: "The missing proof is years of reliable home use with low calibration burden, maintainable hardware, clear support, and benefits that beat existing interfaces.",
    tone: "rose",
  },
  {
    eyebrow: "What decides winners",
    title: "Workflow over spectacle",
    body: "Surgery, training, clinician time, reimbursement, service, and continuity of care will separate durable products from technically impressive demonstrations.",
    tone: "blue",
  },
];

const ecosystemGroups = [
  {
    kicker: "Established therapeutic devices",
    title: "The incumbents",
    body: "Large medtech companies already own clinical channels, procedural training, reimbursement muscle, and long-lived stimulation portfolios.",
    players: [
      ["Medtronic", "https://www.medtronic.com/"],
      ["Abbott Neuromodulation", "https://www.neuromodulation.abbott/"],
      ["Boston Scientific", "https://www.bostonscientific.com/"],
      ["LivaNova", "https://www.livanova.com/"],
    ],
  },
  {
    kicker: "Sensory restoration",
    title: "The mature prosthetic branch",
    body: "Cochlear implants are the clearest reminder that neural interfaces can become durable, global product categories rather than perpetual experiments.",
    players: [
      ["Cochlear", "https://www.cochlear.com/"],
      ["MED-EL", "https://www.medel.com/"],
      ["Advanced Bionics", "https://www.advancedbionics.com/"],
    ],
  },
  {
    kicker: "Translational research",
    title: "The labs behind the frontier",
    body: "Many of the field's most important capabilities emerge from long-running academic teams before they become company roadmaps.",
    players: [
      ["BrainGate", "https://www.braingate.org/"],
      ["Stanford NPTL", "https://nptl.stanford.edu/"],
      ["UCSF Chang Lab", "https://changlab.ucsf.edu/"],
    ],
  },
  {
    kicker: "Tools and data",
    title: "The enabling stack",
    body: "Acquisition hardware, research software, electrodes, datasets, and developer access shape who can build and reproduce the next generation of systems.",
    players: [
      ["Ripple Neuro", "https://rippleneuro.com/"],
      ["g.tec", "https://www.gtec.at/"],
      ["OpenBCI", "https://openbci.com/"],
      ["EMOTIV", "https://www.emotiv.com/"],
    ],
  },
  {
    kicker: "Translation and access",
    title: "The rule-setters",
    body: "Regulators, public funders, hospital systems, and payers determine study design, evidence thresholds, access, and whether a product can become routine care.",
    players: [
      ["NIH BRAIN Initiative", "https://braininitiative.nih.gov/"],
      ["DARPA BTO", "https://www.darpa.mil/research/programs/bto"],
      ["U.S. FDA", "https://www.fda.gov/medical-devices"],
      ["CMS", "https://www.cms.gov/"],
    ],
  },
];

const useCases = [
  {
    title: "Communication for paralysis and ALS",
    body:
      `<p>This remains one of the clearest early wedges because the human need is obvious and the output surface is already digital. If someone can communicate faster, more accurately, or with less exhaustion than before, the value is immediate.</p>
       <p>The hard part is making that capability durable enough to become a daily habit rather than an impressive session.${cite(["synchron-home", "paradromics-home", "neuralink-roundup"])}</p>`,
  },
  {
    title: "Computer and environment control",
    body:
      `<p>Cursor movement, interface navigation, smart-home control, and digital autonomy are natural first uses because the world is already full of systems that can accept software commands.</p>
       <p>This is why assistive BCI often looks most convincing when it stays close to computers and software first.${cite(["neuralink-roundup", "cognixion-home"])}</p>`,
  },
  {
    title: "Speech restoration",
    body:
      `<p>Speech is one of the highest-value bandwidth problems in the field. Restoring fluid communication for people who have lost speech would be a major step change in autonomy and quality of life.</p>
       <p>It is also one of the most demanding technical categories, which is why companies like Paradromics matter so much.${cite(["paradromics-home"])}</p>`,
  },
  {
    title: "Movement disorders and tremor",
    body:
      `<p>Therapeutic neurotech is often ahead of the broader BCI narrative because it starts with clearer symptoms, clearer endpoints, and clearer reimbursement logic.</p>
       <p>Cala is one of the cleanest examples of this branch working in the real world already.${cite(["cala-home"])}</p>`,
  },
  {
    title: "Epilepsy and seizure control",
    body:
      `<p>Epilepsy shows one of the strongest cases for closed-loop neurotechnology because the target problem is concrete: detect abnormal activity fast enough and intervene usefully enough to change outcomes.</p>
       <p>NeuroPace is important here because it makes the loop visible: sensing, responding, and generating longitudinal neural data for care decisions, with long-run clinical literature to support that model.${cite(["neuropace-home", "rns-nine-year"])}</p>`,
  },
  {
    title: "Migraine and severe headache disorders",
    body:
      `<p>Migraine is a reminder that a huge share of neurotech value may come from targeted symptom control, not just direct computer control or futuristic cognition narratives.</p>
       <p>Salvia's approach matters because it frames neurotech as a disease-focused intervention for a massive patient population with real day-to-day disability.${cite(["salvia-home"])}</p>`,
  },
  {
    title: "Psychiatric interfaces",
    body:
      `<p>This may become one of the biggest categories eventually, but it is also one of the hardest. Mood and mental state are not as straightforward to decode or regulate as many public narratives imply.</p>
       <p>That is why companies like Motif are fascinating and risky at the same time.${cite(["motif-home"])}</p>`,
  },
  {
    title: "Sensory restoration",
    body:
      `<p>Vision and related sensory interfaces show that neurotech is not just about controlling software. It can be about recovering real human function.</p>
       <p>Science's PRIMA program is one of the clearest public examples of that path.${cite(["science-prima", "nejm-prima"])}</p>`,
  },
];

const researchItems = [
  {
    kicker: "Communication BCIs",
    title: "Speech restoration has become the clearest fast-moving frontier",
    body:
      `<p>The literature now shows a real progression rather than isolated miracles. Early papers established that cortical activity could be translated into text or synthetic speech; newer studies pushed toward larger vocabularies, faster calibration, and more natural conversation-like use.${cite(["speech-text-natneuro", "speech-anarthria-nejm", "handwriting-nature"])}</p>
       <p>This matters for companies like Paradromics, Neuralink, and Precision because communication is one of the highest-value wedges in the field. Someone does not need “full telepathy” for the product to be life-changing. They need a system that restores practical, repeatable autonomy for people who cannot speak or type normally.${cite(["speech-neuroprosthesis", "speech-avatar", "speech-fast-nejm", "speech-bilingual"])}</p>`,
    papers: [
      {
        year: "2020",
        journal: "Nature Neuroscience",
        title: "Machine translation of cortical activity to text",
        takeaway:
          `Helped define the modern encoder-decoder route for turning cortical activity into usable text rather than just coarse classification.${cite(["speech-text-natneuro"])}`,
      },
      {
        year: "2021",
        journal: "NEJM + Nature",
        title: "Speech decoding and handwriting-based communication",
        takeaway:
          `Showed two different but credible ways to restore communication: direct speech decoding in anarthria and rapid text entry through attempted handwriting.${cite(["speech-anarthria-nejm", "handwriting-nature"])}`,
      },
      {
        year: "2023",
        journal: "Nature",
        title: "62-78 words-per-minute speech systems arrive",
        takeaway:
          `Two landmark papers reported 62 words per minute in an intracortical text-decoding system and 78 words per minute in a speech-text-avatar system using surface recordings.${cite(["speech-neuroprosthesis", "speech-avatar"])}`,
      },
      {
        year: "2024",
        journal: "NEJM + Nat Biomed Eng",
        title: "Calibration gets faster and outputs get more expressive",
        takeaway:
          `A newer speech neuroprosthesis reported 99.6% accuracy on a 50-word vocabulary on day one, then scaled to a 125,000-word vocabulary after limited extra calibration, while a separate study showed bilingual decoding across languages.${cite(["speech-fast-nejm", "speech-bilingual"])}`,
      },
    ],
  },
  {
    kicker: "Therapeutic neurotech",
    title: "Closed-loop therapy has the strongest long-run evidence base",
    body:
      `<p>If you want the least speculative branch of neurotech, the literature points first to disease-specific neuromodulation rather than to consumer mind-reading. Responsive epilepsy therapy already has long-term outcomes, physician workflows, and a clearer reimbursement story than most frontier BCI programs.${cite(["rns-nine-year", "neuropace-home"])}</p>
       <p>This is why companies like NeuroPace, INBRAIN, Motif, Cala, Neuspera, and Salvia matter so much. They are not chasing generic sci-fi capability. They are trying to sense and modulate specific circuits with concrete endpoints, which is much closer to how the medical system actually adopts new tools.${cite(["dbs-biomarkers", "closed-loop-onchip", "cala-home", "inbrain-home", "motif-home", "neuspera-home", "salvia-home"])}</p>`,
    papers: [
      {
        year: "2020",
        journal: "Neurology",
        title: "Nine-year RNS follow-up in focal epilepsy",
        takeaway:
          `Reported a 75% median seizure reduction at nine years, a 73% responder rate, and meaningful periods of seizure freedom in a subset of patients. That is not concept-art evidence. It is durable clinical evidence.${cite(["rns-nine-year"])}`,
      },
      {
        year: "2019",
        journal: "Nature Reviews Neurology",
        title: "Biomarkers for closed-loop DBS",
        takeaway:
          `Clarified that the next generation of stimulation systems should key off measurable disease biomarkers instead of delivering fixed pulses on a blind schedule.${cite(["dbs-biomarkers"])}`,
      },
      {
        year: "2021",
        journal: "IEEE TBCAS",
        title: "Closed-loop neural prostheses with on-chip intelligence",
        takeaway:
          `Framed low-latency detection and embedded machine learning as practical requirements for real closed-loop devices, not optional extras.${cite(["closed-loop-onchip"])}`,
      },
    ],
  },
  {
    kicker: "Interface routes",
    title: "Access path is not a footnote. It is the product strategy.",
    body:
      `<p>The literature keeps reinforcing that surgical route, tissue proximity, and workflow burden are inseparable from product viability. Intracortical systems can deliver richer signals, but surface and endovascular approaches may win on who can implant them, where they can be deployed, and how much risk patients will tolerate.${cite(["nature-endo", "endo-review", "speech-avatar"])}</p>
       <p>This is the deeper logic behind why Synchron, Precision, Neuralink, and Paradromics do not look like slight variations of the same company. They are making different bets about what the nervous system should touch and what a realistic care pathway can support.${cite(["jama-stentrode", "precision-home", "neuralink-home", "paradromics-home", "speech-imagined-commbiol"])}</p>`,
    papers: [
      {
        year: "2016",
        journal: "Nature Biotechnology",
        title: "Foundational endovascular stent-electrode array paper",
        takeaway:
          `Established the idea that useful neural interfaces might be delivered through blood vessels rather than open cortical surgery.${cite(["nature-endo"])}`,
      },
      {
        year: "2020",
        journal: "Neurosurgical Focus",
        title: "Systematic review of endovascular arrays",
        takeaway:
          `Reviewed the endovascular route as a serious minimally invasive BCI path instead of a one-off technical curiosity.${cite(["endo-review"])}`,
      },
      {
        year: "2021",
        journal: "Communications Biology",
        title: "Imagined speech from minimally invasive recordings",
        takeaway:
          `Showed that minimally invasive recordings can support real-time speech synthesis, strengthening the middle-path thesis between scalp signals and penetrating arrays.${cite(["speech-imagined-commbiol"])}`,
      },
      {
        year: "2023",
        journal: "JAMA Neurology",
        title: "Fully implanted endovascular BCI safety study",
        takeaway:
          `Provided one of the clearest published clinical safety anchors for the endovascular commercial route that Synchron is pursuing.${cite(["jama-stentrode"])}`,
      },
    ],
  },
  {
    kicker: "Non-invasive and ultrasound",
    title: "The low-burden frontier is real, but its evidence is still thinner",
    body:
      `<p>There is good reason investors and founders keep returning to non-invasive systems: they are easier to distribute, easier to trial, and potentially much easier to live with. The problem is that lower burden does not automatically create enough useful signal or stimulation precision for serious daily value.${cite(["bci-trends-review", "neurable-home", "cognixion-home"])}</p>
       <p>Ultrasound is especially worth watching because it implies different physics and potentially deeper access without penetrating tissue, which is why Forest and Nudge matter conceptually. But the literature still looks more like an active translational research frontier than a mature human product stack.${cite(["forest-home", "nudge-reported", "ultrasound-acoustoelectric"])}</p>`,
    papers: [
      {
        year: "2023",
        journal: "Brain Informatics",
        title: "Field review on BCI trends and threats",
        takeaway:
          `Summarized recurring limits in non-invasive and broader BCI systems: noisy acquisition, user variability, calibration burden, and threat models around security and privacy.${cite(["bci-trends-review"])}`,
      },
      {
        year: "2026",
        journal: "Nature Communications",
        title: "In vivo acoustoelectric neuromodulation study",
        takeaway:
          `Useful as a mechanism-level reminder that ultrasound neuromodulation research is moving, but still sits earlier on the evidence ladder than approved or long-followed implant therapies.${cite(["ultrasound-acoustoelectric"])}`,
      },
    ],
  },
  {
    kicker: "Durability and governance",
    title: "The literature is shifting from possibility questions to survivability questions",
    body:
      `<p>The field no longer needs to prove only that neural systems can work once in a controlled setting. The harder question is whether they can stay useful across months and years while tolerating signal drift, changing models, evolving hardware generations, and the ordinary mess of real care or everyday life.${cite(["speech-fast-nejm", "forever-access", "bci-trends-review"])}</p>
       <p>That is why governance papers belong next to engineering papers. Neurotech users can become structurally dependent on a vendor for access, maintenance, privacy, and upgrades in a way that ordinary app users do not. As the hardware improves, these questions become more urgent, not less.${cite(["forever-access", "bci-regulation"])}</p>`,
    papers: [
      {
        year: "2024",
        journal: "arXiv preprint",
        title: "Towards Forever Access for implanted BCIs",
        takeaway:
          `Pushes the field to think about continuity of care, device maintenance, interoperability, and what happens if a company disappears while a person still depends on its implant.${cite(["forever-access"])}`,
      },
      {
        year: "2025",
        journal: "arXiv preprint",
        title: "Regulating next-generation implantable BCIs",
        takeaway:
          `Frames privacy, autonomy, identity, and lock-in as present design and policy problems rather than distant future hypotheticals.${cite(["bci-regulation"])}`,
      },
    ],
  },
];

const timelineItems = [
  {
    year: "2016",
    title: "Endovascular BCIs become a serious path",
    body:
      `Early published work helped validate the idea that useful neural interfaces might be placed through blood vessels rather than open brain surgery.${cite(["nature-endo"])}`,
  },
  {
    year: "2018",
    title: "Therapeutic neurotech starts looking commercial",
    body:
      `Wearable neuromodulation for tremor pointed toward a branch of neurotech where symptom relief and reimbursement may matter more than science-fiction narratives.${cite(["cala-home"])}`,
  },
  {
    year: "2020",
    title: "Communication and therapy evidence deepen",
    body:
      `Text decoding pipelines and long-run responsive neurostimulation outcomes both made the field feel less speculative: one side restored communication, the other showed durable therapeutic benefit.${cite(["speech-text-natneuro", "rns-nine-year"])}`,
  },
  {
    year: "2023",
    title: "The modern startup wave hits stronger human milestones",
    body:
      `Synchron published safety evidence while landmark Nature papers pushed speech restoration into a much more practical range of performance.${cite(["jama-stentrode", "speech-neuroprosthesis", "speech-avatar"])}`,
  },
  {
    year: "2024",
    title: "Public imagination centers on implanted BCIs",
    body:
      `Neuralink's public participant demos pulled the field into mainstream awareness while the literature kept improving on faster calibration and more expressive speech decoding.${cite(["neuralink-roundup", "speech-fast-nejm", "speech-bilingual"])}`,
  },
  {
    year: "2025",
    title: "Clinical differentiation becomes clearer",
    body:
      `Precision publicized Layer 7 traction, Science published PRIMA results in NEJM, and therapeutic players increasingly separated themselves by disease area and care model.${cite(["precision-home", "nejm-prima", "cala-home"])}`,
  },
  {
    year: "2026",
    title: "Commercialization questions move to the center",
    body:
      `Paradromics entered first-in-human study, Science raised heavily, and the field started to look more like a set of product pathways than a single undifferentiated frontier bet.${cite(["paradromics-home", "science-home"])}`,
  },
];

const bottlenecks = [
  {
    title: "Biology pushes back",
    body:
      "Scar tissue, micromotion, infection, vascular constraints, and healing changes make the body a hostile operating environment for precision electronics.",
  },
  {
    title: "Signal drift is constant",
    body:
      "What works on one day may shift the next. Neural systems change, users fatigue, and interfaces move relative to biology.",
  },
  {
    title: "Therapy or interface burden is real",
    body:
      "Even an outpatient or wearable product still needs onboarding, support, and evidence of lasting value. Implants add surgery, hospital workflows, and follow-up care.",
  },
  {
    title: "The market cares about reimbursement",
    body:
      "A strong product can still stall if payers, providers, and care systems do not know how to fit it into real clinical economics.",
  },
  {
    title: "Dependency raises ethical stakes",
    body:
      `Patients and users may depend on these systems in unusually intimate ways, which makes portability, privacy, and vendor continuity much more than ordinary software questions.${cite(["forever-access", "bci-regulation"])}`,
  },
  {
    title: "Hype distorts the field",
    body:
      "When public expectations are set by dramatic claims rather than durable evidence, quieter but more mature progress can be overlooked and the whole category can absorb the backlash.",
  },
];

const nextSteps = [
  {
    title: "Better communication systems first",
    body:
      "Expect more near-term progress in assistive cursor control, text entry, and speech-related interfaces than in broad cognitive enhancement.",
  },
  {
    title: "Therapeutic neurotech keeps moving",
    body:
      "Disease-specific neuromodulation may continue to commercialize faster than the broad BCI frontier because the endpoints and payment logic are cleaner.",
  },
  {
    title: "Closed-loop personalization becomes central",
    body:
      "The real moat may move toward systems that sense, adapt, personalize, and update over time rather than just record or stimulate in one direction.",
  },
  {
    title: "Non-invasive systems face a proving moment",
    body:
      "The big question for non-invasive players is not whether they are safer. It is whether they can become useful enough to earn daily use and not just curiosity.",
  },
];

const $ = (selector) => document.querySelector(selector);

function renderList(target, items, template) {
  const root = $(target);
  root.innerHTML = items.map(template).join("");
}

function renderSignalCards() {
  renderList("#signal-strip", signalCards, (item) => `
    <article class="signal-card">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderFieldBrief() {
  const maturityCounts = ["commercial", "human-clinical", "early-human", "research"]
    .map((key) => companies.filter((company) => company.signal.key === key).length);

  $("#field-brief").innerHTML = `
    <div class="field-brief__topline">
      <div>
        <p class="section-kicker">The 90-second briefing</p>
        <h3>Where the field actually stands</h3>
      </div>
      <div class="coverage-stats" aria-label="Guide coverage statistics">
        <p><strong>${companies.length}</strong><span>company dossiers</span></p>
        <p><strong>${landscapeColumns.length}</strong><span>interface paths</span></p>
        <p><strong>${sources.length}</strong><span>linked sources</span></p>
      </div>
    </div>
    <div class="field-brief__grid">
      ${fieldBrief.map((item) => `
        <article class="brief-card brief-card--${item.tone}">
          <p class="brief-card__eyebrow">${item.eyebrow}</p>
          <h4>${item.title}</h4>
          <p>${item.body}</p>
        </article>
      `).join("")}
    </div>
    <div class="maturity-strip" aria-label="Profiled company maturity distribution">
      <div class="maturity-strip__label">
        <span>Profile maturity</span>
        <small>Not a quality ranking</small>
      </div>
      ${[
        ["Marketed / established", maturityCounts[0], "commercial"],
        ["Human clinical", maturityCounts[1], "human-clinical"],
        ["Early human", maturityCounts[2], "early-human"],
        ["Research", maturityCounts[3], "research"],
      ].map(([label, count, key]) => `
        <div class="maturity-strip__item maturity-strip__item--${key}">
          <strong>${count}</strong><span>${label}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderEcosystem() {
  $("#ecosystem-grid").innerHTML = ecosystemGroups.map((group) => `
    <article class="ecosystem-card">
      <p class="ecosystem-card__kicker">${group.kicker}</p>
      <h4>${group.title}</h4>
      <p>${group.body}</p>
      <div class="ecosystem-card__links">
        ${group.players.map(([name, url]) => `
          <a href="${url}" target="_blank" rel="noreferrer">${name}<span aria-hidden="true">↗</span></a>
        `).join("")}
      </div>
    </article>
  `).join("");
}

function renderPrimer() {
  renderList("#primer-list", primerItems, (item) => `
    <article class="essay-block essay-block--tight">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderConcepts() {
  renderList("#concept-list", concepts, (item) => `
    <article class="essay-block">
      <h3>${item.title}</h3>
      ${item.body}
    </article>
  `);
}

function renderComparison() {
  renderList("#comparison-body", comparisonRows, (row) => `
    <tr>
      <td>${row.approach}</td>
      <td>${row.touch}</td>
      <td>${row.strength}</td>
      <td>${row.weakness}</td>
      <td>${row.names}</td>
    </tr>
  `);
}

function productMediaHtml(company, size = "card") {
  if (!company.media?.src) {
    return `
      <div class="product-media product-media--${size} product-media--empty">
        <div class="product-media__empty-copy">
          <strong>No official image</strong>
          <span>${company.media?.label || "No public official product image available."}</span>
        </div>
      </div>
    `;
  }

  const caption =
    size === "mini"
      ? ""
      : `<figcaption><a href="${company.media.ref}" target="_blank" rel="noreferrer">${company.media.label}</a></figcaption>`;

  return `
    <figure class="product-media product-media--${size}">
      <span class="product-media__provenance">${company.media.kind || "Official image"}</span>
      <img
        src="${company.media.src}"
        alt="${company.media.alt || `${company.name} product image`}"
        loading="lazy"
        referrerpolicy="no-referrer"
      />
      ${caption}
    </figure>
  `;
}

function renderMarketMap() {
  const plot = $("#market-map-plot");
  plot.innerHTML = `
    <div class="landscape-toolbar" aria-label="Filter landscape by first job">
      <div>
        <p class="landscape-toolbar__eyebrow">Explore by first job</p>
        <div class="landscape-filters">
          <button type="button" class="filter-chip is-active" data-landscape-filter="all" aria-pressed="true">All markets</button>
          ${landscapeRows.map((row) => `<button type="button" class="filter-chip" data-landscape-filter="${row.key}" aria-pressed="false">${row.label}</button>`).join("")}
        </div>
      </div>
      <p class="landscape-summary" id="landscape-summary" aria-live="polite">${companies.length} companies across 5 interface paths</p>
    </div>
    <div class="landscape-scroll" tabindex="0" aria-label="Company landscape matrix; scroll horizontally on small screens">
      <div class="landscape-matrix">
        <div class="landscape-axis">
          <span>First job ↓</span>
          <strong>Procedure burden →</strong>
        </div>
        ${landscapeColumns.map((column, index) => `
          <div class="landscape-column-head landscape-column-head--${column.key}">
            <span>0${index + 1} · ${pathwayBurden[column.key]}</span>
            <strong>${column.label}</strong>
            <p>${column.note}</p>
          </div>
        `).join("")}
        ${landscapeRows.map((row) => `
          <div class="landscape-row" data-landscape-row="${row.key}">
            <div class="landscape-row-head">
              <strong>${row.label}</strong>
              <p>${row.note}</p>
            </div>
            ${landscapeColumns.map((column) => {
              const cellCompanies = companies.filter((company) =>
                company.landscape?.row === row.key && company.landscape?.col === column.key
              );
              return `
                <div class="landscape-cell landscape-cell--${column.key}">
                  ${cellCompanies.length ? cellCompanies.map((company) => `
                    <button
                      type="button"
                      class="landscape-company landscape-company--${company.category}"
                      data-company="${company.id}"
                      aria-label="Open ${company.name} dossier"
                    >
                      <span class="landscape-company__topline">
                        <strong>${company.name}</strong>
                        <i class="company-stage company-stage--${company.signal.key}" aria-label="${company.signal.stage}"></i>
                      </span>
                      <span>${company.product.device}</span>
                    </button>
                  `).join("") : `<span class="landscape-empty">No tracked company</span>`}
                </div>
              `;
            }).join("")}
          </div>
        `).join("")}
      </div>
    </div>
  `;

  $("#market-legend").innerHTML = `
    <div class="market-legend__items">
      ${[
          { label: "Preclinical", color: "#7c8ece" },
          { label: "Early human", color: "#b88b95" },
          { label: "Regulated clinical", color: "#cea164" },
          { label: "Commercial", color: "#71a8a8" },
        ].map((item) => `
            <div class="legend-item">
              <span class="legend-dot" style="background:${item.color}"></span>
              <span>${item.label}</span>
            </div>
          `).join("")}
    </div>
    <div class="market-legend__note">
      <strong>How to read the map</strong>
      <p>
        Horizontal position is interface burden, not a quality ranking. Dots show
        maturity: blue is preclinical, rose early human, copper regulated clinical,
        and teal commercial. Select a company to open its dossier.
      </p>
    </div>
  `;
}

function setupLandscapeFilters() {
  const controls = Array.from(document.querySelectorAll("[data-landscape-filter]"));
  const rows = Array.from(document.querySelectorAll("[data-landscape-row]"));
  const summary = $("#landscape-summary");

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const filter = control.dataset.landscapeFilter;
      controls.forEach((item) => {
        const active = item === control;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      rows.forEach((row) => {
        row.hidden = filter !== "all" && row.dataset.landscapeRow !== filter;
      });
      const visibleCompanies = filter === "all"
        ? companies.length
        : companies.filter((company) => company.landscape?.row === filter).length;
      const label = landscapeRows.find((row) => row.key === filter)?.label || "all markets";
      summary.textContent = `${visibleCompanies} ${visibleCompanies === 1 ? "company" : "companies"} · ${label}`;
    });
  });
}

function renderUseCases() {
  renderList("#usecase-list", useCases, (item) => `
    <article class="essay-block">
      <h3>${item.title}</h3>
      ${item.body}
    </article>
  `);
}

function renderResearch() {
  renderList("#research-list", researchItems, (item) => `
    <article class="research-track">
      <div class="research-track__head">
        <p class="research-track__kicker">${item.kicker}</p>
        <h3>${item.title}</h3>
      </div>
      <div class="research-track__body">
        ${item.body}
      </div>
      <div class="research-paper-grid">
        ${item.papers
          .map(
            (paper) => `
              <article class="research-paper">
                <div class="research-paper__meta">
                  <span>${paper.year}</span>
                  <p>${paper.journal}</p>
                </div>
                <div class="research-paper__body">
                  <h4>${paper.title}</h4>
                  <p>${paper.takeaway}</p>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </article>
  `);
}

function renderTimeline() {
  renderList("#timeline-list", timelineItems, (item) => `
    <article class="timeline-item">
      <div class="timeline-item__rail">
        <span class="timeline-item__dot"></span>
      </div>
      <div class="timeline-item__year">${item.year}</div>
      <div class="timeline-item__body">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </div>
    </article>
  `);
}

function renderBottlenecks() {
  renderList("#bottleneck-list", bottlenecks, (item) => `
    <article class="essay-block essay-block--tight">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderNextSteps() {
  renderList("#next-step-list", nextSteps, (item) => `
    <article class="essay-block essay-block--tight">
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);
}

function renderSources() {
  renderList("#sources-list", sources, (source) => `
    <article class="source-row" id="src-${source.id}">
      <div class="source-row__label">
        <span>[${sourceNumber.get(source.id)}]</span>
      </div>
      <div class="source-row__body">
        <h3>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.title}</a>
        </h3>
      </div>
    </article>
  `);
}

function companyModalHtml(company) {
  return `
    <div class="dossier-head dossier-head--${company.category}">
      <div>
        <p class="dossier-kicker">${company.badge}</p>
        <h2>${company.name}</h2>
      </div>
      <p class="dossier-summary">${company.summary}</p>
    </div>
    <div class="dossier-intro">
      ${productMediaHtml(company, "modal")}
      <div class="dossier-facts">
        <div>
          <span>Maturity</span>
          <p><b class="company-stage company-stage--${company.signal.key}">${company.signal.stage}</b></p>
        </div>
        <div>
          <span>Evidence signal</span>
          <p>${company.signal.evidence}</p>
        </div>
        <div>
          <span>Device</span>
          <p>${company.product.device}</p>
        </div>
        <div>
          <span>Touchpoint</span>
          <p>${company.product.touchpoint}</p>
        </div>
        <div>
          <span>Procedure</span>
          <p>${company.product.procedure}</p>
        </div>
        <div>
          <span>Mode</span>
          <p>${company.product.mode}</p>
        </div>
        <div>
          <span>First job</span>
          <p>${company.product.firstJob}</p>
        </div>
        <div>
          <span>Traction now</span>
          <p>${company.traction}</p>
        </div>
      </div>
    </div>
    <div class="dossier-grid">
      <section class="dossier-block">
        <h3>Thesis</h3>
        <p>${company.dossier.thesis}</p>
      </section>
      <section class="dossier-block">
        <h3>How The Product Works</h3>
        <p>${company.dossier.howItWorks}</p>
      </section>
      <section class="dossier-block dossier-block--wide">
        <h3>Why It Matters</h3>
        <p>${company.dossier.whyItMatters}</p>
      </section>
      <section class="dossier-block dossier-block--wide">
        <h3>Current State</h3>
        <p>${company.dossier.currentState}</p>
      </section>
      <section class="dossier-block">
        <h3>Deployment Reality</h3>
        <p>${company.dossier.deployment}</p>
      </section>
      <section class="dossier-block">
        <h3>Competitive Frame</h3>
        <p>${company.dossier.competitiveFrame}</p>
      </section>
      <section class="dossier-block">
        <h3>Main Bottlenecks</h3>
        <p>${company.dossier.bottlenecks}</p>
      </section>
      <section class="dossier-block">
        <h3>Key Milestones</h3>
        <ul class="dossier-list">
          ${company.dossier.milestones.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </section>
      <section class="dossier-block dossier-block--wide">
        <h3>What Would Prove The Case</h3>
        <p>${company.dossier.proofNeeded}</p>
      </section>
      <section class="dossier-block dossier-block--wide">
        <h3>What To Watch Next</h3>
        <p>${company.dossier.watchFor}</p>
      </section>
    </div>
  `;
}

function setupDossiers() {
  const modal = $("#company-modal");
  const content = $("#company-modal-content");

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-company]");
    if (!trigger) return;
    const company = companies.find((item) => item.id === trigger.dataset.company);
    if (!company) return;
    content.innerHTML = companyModalHtml(company);
    modal.showModal();
  });

  modal.addEventListener("click", (event) => {
    const rect = modal.getBoundingClientRect();
    const inside =
      rect.top <= event.clientY &&
      event.clientY <= rect.top + rect.height &&
      rect.left <= event.clientX &&
      event.clientX <= rect.left + rect.width;
    if (!inside) modal.close();
  });
}

function setupRailHighlight() {
  const links = Array.from(document.querySelectorAll(".chapter-rail a"));
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function updateActiveLink() {
    const offset = 150;
    let activeSection = sections[0];
    const scrollable = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const progress = Math.min(1, Math.max(0, window.scrollY / scrollable));
    document.documentElement.style.setProperty(
      "--reading-progress",
      `${(progress * 100).toFixed(2)}%`
    );

    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) {
        activeSection = section;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        "is-active",
        link.getAttribute("href") === `#${activeSection.id}`
      );
    });
  }

  updateActiveLink();
  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
}

function setupRevealMotion() {
  const targets = Array.from(document.querySelectorAll(
    ".field-brief, .ecosystem-card, .chapter-scene"
  ));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((target) => target.classList.add("is-revealed"));
    return;
  }

  document.body.classList.add("motion-ready");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

  targets.forEach((target) => observer.observe(target));
}

function setupDepthMotion() {
  const scene = document.querySelector(".hero-scene");
  const precisePointer = window.matchMedia(
    "(prefers-reduced-motion: no-preference) and (pointer: fine)"
  ).matches;
  if (!scene || !precisePointer) return;

  scene.addEventListener("pointermove", (event) => {
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    scene.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
    scene.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    scene.style.setProperty("--shift-x", `${(x * 8).toFixed(2)}px`);
    scene.style.setProperty("--shift-y", `${(y * 8).toFixed(2)}px`);
  });
  scene.addEventListener("pointerleave", () => {
    scene.style.removeProperty("--tilt-x");
    scene.style.removeProperty("--tilt-y");
    scene.style.removeProperty("--shift-x");
    scene.style.removeProperty("--shift-y");
  });
}

function setupSectionSceneMotion() {
  const scenes = Array.from(document.querySelectorAll("[data-scene]"));
  const precisePointer = window.matchMedia(
    "(prefers-reduced-motion: no-preference) and (pointer: fine)"
  ).matches;
  if (!precisePointer) return;

  scenes.forEach((scene) => {
    scene.addEventListener("pointermove", (event) => {
      const rect = scene.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      scene.style.setProperty("--scene-x", `${(-y * 4).toFixed(2)}deg`);
      scene.style.setProperty("--scene-y", `${(x * 5).toFixed(2)}deg`);
    });
    scene.addEventListener("pointerleave", () => {
      scene.style.removeProperty("--scene-x");
      scene.style.removeProperty("--scene-y");
    });
  });
}

function init() {
  renderFieldBrief();
  renderSignalCards();
  renderPrimer();
  renderConcepts();
  renderComparison();
  renderMarketMap();
  renderUseCases();
  renderResearch();
  renderTimeline();
  renderBottlenecks();
  renderNextSteps();
  renderSources();
  renderEcosystem();
  setupLandscapeFilters();
  setupDossiers();
  setupRailHighlight();
  setupRevealMotion();
  setupDepthMotion();
  setupSectionSceneMotion();
}

init();
