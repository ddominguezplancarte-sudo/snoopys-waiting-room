export const biomarkers = [
  {
    id: "er",
    name: "ER",
    fullName: "Estrogen Receptor",
    emoji: "🧬",
    color: "sky",
    tagline: "Tells us if estrogen plays a role.",
    explanation:
      "When a tumor is ER+, it means the cancer cells have receptors that respond to estrogen — estrogen may be helping them grow. This is actually useful information, because it opens the door to hormone-blocking therapies that are highly effective and well-tolerated.",
    whyItMatters:
      "ER+ cancers often respond very well to hormone therapy (like tamoxifen or aromatase inhibitors). This is one of the most treatable subtypes.",
    nextSteps:
      "If ER+, your oncologist will likely discuss hormone therapy as part of your treatment plan. This may be used alone or alongside other treatments.",
    signal: "green",
    signalLabel: "Often a favorable sign",
  },
  {
    id: "pr",
    name: "PR",
    fullName: "Progesterone Receptor",
    emoji: "🧬",
    color: "sage",
    tagline: "Similar to ER — looks at progesterone's role.",
    explanation:
      "PR+ means cancer cells also have receptors for progesterone. PR and ER are often tested together. Being positive for both gives doctors even more information about how to treat the cancer.",
    whyItMatters:
      "PR+ alongside ER+ generally indicates a good response to hormone therapy. It helps your care team choose the most targeted treatment.",
    nextSteps:
      "PR results are interpreted alongside ER results. Your oncologist will consider both together when building your treatment plan.",
    signal: "green",
    signalLabel: "Often seen with ER+",
  },
  {
    id: "her2",
    name: "HER2",
    fullName: "Human Epidermal Growth Factor Receptor 2",
    emoji: "🔬",
    color: "peach",
    tagline: "A protein that can affect how fast cells grow.",
    explanation:
      "HER2 is a protein that helps cells grow. When there's too much of it (HER2+), it can cause cancer cells to grow more aggressively. The important news: there are now very targeted therapies specifically designed for HER2+ cancers.",
    whyItMatters:
      "HER2 status directly affects treatment decisions. HER2+ cancers have dedicated targeted therapies (like Herceptin/trastuzumab) that have dramatically improved outcomes.",
    nextSteps:
      "If HER2+, your oncologist will discuss targeted therapies. If HER2-, this helps narrow down treatment to other approaches.",
    signal: "yellow",
    signalLabel: "Important for treatment planning",
  },
  {
    id: "ki67",
    name: "Ki-67",
    fullName: "Ki-67 Proliferation Index",
    emoji: "📊",
    color: "sunflower",
    tagline: "Measures how quickly cells are dividing.",
    explanation:
      "Ki-67 is a marker that shows what percentage of cancer cells are actively dividing at any moment. A lower number means slower-growing cells; a higher number means faster-growing. This helps your team understand the cancer's pace.",
    whyItMatters:
      "Ki-67 helps predict how the cancer might behave and how it may respond to chemotherapy. Higher Ki-67 sometimes means better response to chemo.",
    nextSteps:
      "Your oncologist will interpret Ki-67 alongside ER, PR, and HER2 results together — no single number tells the whole story.",
    signal: "yellow",
    signalLabel: "Part of the bigger picture",
  },
  {
    id: "brca",
    name: "BRCA",
    fullName: "BRCA1 / BRCA2 Gene Mutations",
    emoji: "🧩",
    color: "sky",
    tagline: "Genetic markers that run in families.",
    explanation:
      "BRCA1 and BRCA2 are genes that normally help repair DNA. When they have a mutation, that repair function is impaired. Knowing your BRCA status helps with surgical decisions and also has implications for other family members who may want to be tested.",
    whyItMatters:
      "BRCA status can affect decisions about surgery type, and may qualify you for specific targeted therapies called PARP inhibitors. It also gives your family members the option to understand their own risk.",
    nextSteps:
      "Genetic counseling is typically recommended alongside BRCA testing. Results are deeply personal — a counselor can help interpret what they mean for you and your family.",
    signal: "blue",
    signalLabel: "Genetic testing — ask about counseling",
  },
  {
    id: "oncotype",
    name: "Oncotype DX",
    fullName: "Oncotype DX Recurrence Score",
    emoji: "🎯",
    color: "sage",
    tagline: "Helps decide if chemotherapy is needed.",
    explanation:
      "Oncotype DX is a genomic test that analyzes 21 genes within a tumor to predict the likelihood of recurrence and how much benefit chemotherapy might add. It's typically used for early-stage, hormone receptor-positive, HER2-negative cancers.",
    whyItMatters:
      "This test has helped many women with early-stage ER+ cancer safely skip chemotherapy when the score is low, avoiding side effects without compromising outcomes.",
    nextSteps:
      "Not every patient needs this test. Ask your oncologist if Oncotype DX is appropriate for your specific situation.",
    signal: "blue",
    signalLabel: "May help avoid unnecessary chemo",
  },
];
