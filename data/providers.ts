import { Provider } from "@/lib/types";

export const providers: Provider[] = [
  {
    slug: "room-707",
    name: "Room 707",
    kind: "Organization",
    city: "Lagos",
    photo:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
    tagline:
      "A quiet room for survivors of abuse to be heard first, helped second.",
    about:
      "Room 707 runs confidential peer-support circles and one-on-one sessions for survivors of domestic and emotional abuse. Sessions are trauma-informed and led by a mix of licensed counsellors and trained peer supporters.",
    specialties: [
      "Abuse & Domestic Violence",
      "Sexual Assault & Rape",
      "Grief & Loss",
    ],
    licensed: true,
    certified: true,
    credentialNote: "Registered NGO · Counsellors licensed by CASSON",
    priceFrom: 0,
    freeFirstSession: true,
    languages: ["English", "Yoruba", "Pidgin"],
    contacts: [
      { type: "call", value: "+2348021234567" },
      { type: "whatsapp", value: "https://wa.me/2348021234567" },
      { type: "booking", value: "https://cal.com/room707/intake" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "dr-amara-nwosu",
    name: "Dr. Amara Nwosu",
    kind: "Individual Practitioner",
    city: "Abuja",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=800&auto=format&fit=crop",
    tagline:
      "Clinical psychologist focused on anxiety, depression, and burnout.",
    about:
      "Dr. Nwosu has twelve years of clinical experience helping working professionals manage anxiety, depression, and chronic stress. She uses CBT and ACT frameworks and offers both in-person and video sessions.",
    specialties: ["Depression & Anxiety", "Workplace & Stress"],
    licensed: true,
    certified: true,
    credentialNote: "MBPsS · Licensed Clinical Psychologist",
    priceFrom: 25000,
    freeFirstSession: false,
    languages: ["English"],
    contacts: [
      { type: "booking", value: "https://calendly.com/dramaranwosu/session" },
      { type: "whatsapp", value: "https://wa.me/2348139988776" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "safe-haven-initiative",
    name: "Safe Haven Initiative",
    kind: "Organization",
    city: "Port Harcourt",
    photo:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
    tagline: "24/7 crisis line and shelter referrals for survivors of assault.",
    about:
      "Safe Haven runs a round-the-clock crisis line for survivors of sexual assault and rape, with a network of partner clinics for medical and legal support. Their team includes trained crisis counsellors, not all of whom hold formal licenses, but all are supervised.",
    specialties: [
      "Sexual Assault & Rape",
      "Suicide & Crisis Support",
      "Abuse & Domestic Violence",
    ],
    licensed: false,
    certified: true,
    credentialNote: "Crisis-response certified · Volunteer-supervised model",
    priceFrom: 0,
    freeFirstSession: true,
    languages: ["English", "Pidgin", "Ikwerre"],
    contacts: [
      { type: "call", value: "+2348052223344" },
      { type: "whatsapp", value: "https://wa.me/2348052223344" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "kunle-adeyemi-coaching",
    name: "Kunle Adeyemi",
    kind: "Individual Practitioner",
    city: "Lagos",
    photo:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
    tagline:
      "Life & career coach helping men navigate stress, purpose, and pressure.",
    about:
      "Kunle is a certified life coach (not a licensed therapist) who works mostly with men navigating career pressure, purpose, and relationship stress. He's upfront that coaching complements, but doesn't replace, clinical therapy.",
    specialties: ["Workplace & Stress", "Family Therapy"],
    licensed: false,
    certified: true,
    credentialNote: "ICF-certified Life Coach",
    priceFrom: 15000,
    freeFirstSession: true,
    languages: ["English", "Yoruba"],
    contacts: [{ type: "whatsapp", value: "https://wa.me/2347031122334" }],
    verifiedByHelpHub: true,
  },
  {
    slug: "mindwell-couples-clinic",
    name: "MindWell Couples Clinic",
    kind: "Organization",
    city: "Lagos",
    photo:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
    tagline: "Structured therapy for couples, before and after marriage.",
    about:
      "MindWell specialises in the Gottman Method for couples counselling, working with partners on communication, trust repair, and pre-marital readiness. All therapists are licensed marriage and family therapists.",
    specialties: ["Couples & Marriage", "Family Therapy"],
    licensed: true,
    certified: true,
    credentialNote: "Licensed Marriage & Family Therapists · Gottman-trained",
    priceFrom: 30000,
    freeFirstSession: false,
    languages: ["English"],
    contacts: [
      { type: "booking", value: "https://mindwellclinic.setmore.com" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "new-dawn-recovery",
    name: "New Dawn Recovery Fellowship",
    kind: "Organization",
    city: "Ibadan",
    photo:
      "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop",
    tagline: "Peer-led recovery groups for substance and alcohol addiction.",
    about:
      "A community-run, 12-step-inspired recovery fellowship. Facilitators are people in long-term recovery themselves, not clinicians, and New Dawn is best used alongside, not instead of, medical detox care.",
    specialties: ["Addiction & Substance Abuse", "Grief & Loss"],
    licensed: false,
    certified: false,
    credentialNote: "Peer-led community group · No formal clinical license",
    priceFrom: 0,
    freeFirstSession: true,
    languages: ["English", "Yoruba"],
    contacts: [{ type: "call", value: "+2348064455667" }],
    verifiedByHelpHub: true,
  },
  {
    slug: "dr-ifeoma-balogun",
    name: "Dr. Ifeoma Balogun",
    kind: "Individual Practitioner",
    city: "Abuja",
    photo:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop",
    tagline: "Psychiatrist offering medication management and talk therapy.",
    about:
      "Dr. Balogun is a licensed psychiatrist who works with clients experiencing severe depression, anxiety disorders, and suicidal ideation, offering both medication management and integrated talk therapy.",
    specialties: ["Depression & Anxiety", "Suicide & Crisis Support"],
    licensed: true,
    certified: true,
    credentialNote:
      "MBBS, Fellow of the West African College of Physicians (Psychiatry)",
    priceFrom: 40000,
    freeFirstSession: false,
    languages: ["English", "Igbo"],
    contacts: [
      { type: "booking", value: "https://cal.com/dr-ifeoma-balogun" },
      { type: "call", value: "+2349021119988" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "teenspace-ng",
    name: "TeenSpace NG",
    kind: "Organization",
    city: "Lagos",
    photo:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=800&auto=format&fit=crop",
    tagline: "Counselling built for teenagers, in language they actually use.",
    about:
      "TeenSpace pairs adolescents with counsellors trained specifically in youth mental health, school pressure, identity, bullying, and family conflict. Parents can book, but sessions stay confidential to the teen.",
    specialties: [
      "Teen & Adolescent Support",
      "Family Therapy",
      "Depression & Anxiety",
    ],
    licensed: true,
    certified: true,
    credentialNote: "Licensed Counsellors · Youth mental health certified",
    priceFrom: 10000,
    freeFirstSession: true,
    languages: ["English", "Pidgin"],
    contacts: [
      { type: "whatsapp", value: "https://wa.me/2348101122334" },
      { type: "booking", value: "https://teenspace.ng/book" },
    ],
    verifiedByHelpHub: true,
  },
  {
    slug: "grace-okonjo-family",
    name: "Grace Okonjo",
    kind: "Individual Practitioner",
    city: "Enugu",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    tagline: "Family therapist working with multi-generational households.",
    about:
      "Grace works with families navigating conflict between generations, often around finances, in-laws, and caregiving. She is certified in family systems therapy and is currently completing full clinical licensure.",
    specialties: ["Family Therapy", "Grief & Loss"],
    licensed: false,
    certified: true,
    credentialNote:
      "Certified in Family Systems Therapy · Licensure in progress",
    priceFrom: 12000,
    freeFirstSession: false,
    languages: ["English", "Igbo"],
    contacts: [{ type: "whatsapp", value: "https://wa.me/2348175566778" }],
    verifiedByHelpHub: false,
  },
];

export const specialtyList = [
  "Abuse & Domestic Violence",
  "Sexual Assault & Rape",
  "Suicide & Crisis Support",
  "Depression & Anxiety",
  "Couples & Marriage",
  "Family Therapy",
  "Workplace & Stress",
  "Addiction & Substance Abuse",
  "Grief & Loss",
  "Teen & Adolescent Support",
] as const;
