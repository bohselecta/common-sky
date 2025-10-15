export default {
  common: {
    brand: "The Common Sky",
    enterPortal: "Enter Portal",
    tools: "Tools",
    download: "Download",
    learnMore: "Learn more",
    comingSoon: "Coming soon",
    footer: "People First, Power Verified."
  },
  landing: {
    h1: "Under One Sky. A Civic Covenant for a New Dawn.",
    blurb: "Freedom of worship without fear. Equal dignity for women and men. Truth anyone can verify.",
    ctas: { enter: "Enter Portal", tools: "Get the App" },
    section2Title: "Rights, Safety, and Real Economic Life",
    bullets: [
      "Faith with Peace: Worship is free; harm is not. Houses of prayer are protected.",
      "Women's Dignity: Equal access to education, work, health, and public life.",
      "Truth You Can Verify: Every action leaves a cryptographic receipt—no secrets, no spin.",
      "Local Commerce: A living economy matters: shopkeepers, markets, artisans, cafés."
    ],
    toolsTitle: "Tools for the People",
    citizenAppTitle: "Citizen App (Android)",
    citizenAppDesc: "Anonymous tips (with default redaction), petitions, and verifiable receipts.",
    observerTitle: "Observer Panel",
    observerDesc: "Explore public data with a Proof Panel—records + inclusion proofs.",
    clerkBuilderTitle: "Clerk & Builder Consoles",
    clerkBuilderDesc: "Agendas, attestations, and schema proposals with three-key quorum."
  },
  tools: {
    pageTitle: "Tools for the People",
    citizen: {
      title: "Citizen App (Android)",
      hero: "Anonymous tips with default redaction, petitions/signing, and verifiable receipts—built for safety, truth, and dignity.",
      download: "Get APK",
      manifest: "Manifest & SHA-256",
      verifyAndroid: "Verify on Android (Termux)",
      verifyMacLinux: "Verify on macOS/Linux",
      feature1: { t: "Anonymous by default", d: "On-device hashing & encryption; faces/plates blurred; geo-jitter available." },
      feature2: { t: "Petitions & signing", d: "Privacy-preserving signatures. Your voice counts without sacrificing safety." },
      feature3: { t: "Receipts you can prove", d: "Every action yields a cryptographic receipt—verifiable in the public ledger." },
      privacyTitle: "What's collected (and what isn't)",
      privacyPoints: [
        "Media you submit (encrypted at rest), timestamp, and approximate location (if you choose).",
        "We do not publish faces/plates or personal identifiers. Public maps are aggregated only.",
        "Sealed originals can only be exported to lawful authorities with oversight and audit logs."
      ]
    }
  },
  register: {
    title: "Enter the Portal",
    prompt: "Use your civic ID number to continue.",
    idLabel: "Civic ID Number",
    submit: "Enter",
    error: "Please check your code and try again."
  },
  dashboard: {
    welcome: "Welcome to The Common Sky",
    blurb: "Your hub for tools, rights, and receipts.",
    citizenCard: { t: "Citizen App", d: "Download, verify hash, learn how receipts work.", cta: "Open →" },
    receiptsCard: { t: "Submit a Receipt", d: "Post an incident receipt (hash + timestamp) to test the ledger API.", cta: "Submit →" }
  },
  receipts: {
    title: "Submit an Incident Receipt",
    blurb: "Paste an incidentId, one or more sha256: hashes, and the createdAt time.",
    incidentId: "Incident ID",
    hashes: "SHA-256 Hash(es)",
    createdAt: "Created At (ISO)",
    submit: "Submit",
    statusOk: "Saved. Scroll down to see it.",
    statusBad: "Check fields and try again.",
    recent: "Recent Receipts (debug)",
    recId: "Record ID"
  }
};
