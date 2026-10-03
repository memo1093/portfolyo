import path from "node:path";
import {
  Circle,
  Defs,
  Document,
  Ellipse,
  Font,
  Link,
  Page,
  RadialGradient,
  Stop,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import {
  experienceTech,
  profile,
  projectMeta,
  school,
  skillGroups,
  type PlanetVariant,
} from "@/data/profile";
import type { Dictionary } from "@/dictionaries/types";

/* Inter (OFL) — Türkçe karakterleri (ğ, ş, ı, İ…) desteklemesi için gömülür. */
const fontDir = path.join(process.cwd(), "assets", "fonts");
Font.register({
  family: "Inter",
  fonts: [
    { src: path.join(fontDir, "Inter-Regular.ttf"), fontWeight: 400 },
    { src: path.join(fontDir, "Inter-SemiBold.ttf"), fontWeight: 600 },
    { src: path.join(fontDir, "Inter-Bold.ttf"), fontWeight: 700 },
  ],
});
Font.registerHyphenationCallback((word) => [word]);

const c = {
  navy: "#0b1030",
  navy2: "#161d4a",
  ink: "#0f172a",
  muted: "#475569",
  soft: "#e2e8f0",
  accent: "#4f46e5",
  accentSoft: "#eef2ff",
  sky: "#38bdf8",
  plasma: "#f472b6",
  onDark: "#e8ebff",
  onDarkMuted: "#9aa3cc",
};

const planetColor: Record<PlanetVariant, string> = {
  ember: "#f97316",
  ocean: "#0ea5e9",
  violet: "#8b5cf6",
  ice: "#60a5fa",
  jade: "#10b981",
  gold: "#eab308",
};

const SIDEBAR = 178;

const s = StyleSheet.create({
  page: { flexDirection: "row", fontFamily: "Inter", fontSize: 8.8, color: c.ink, lineHeight: 1.45 },

  /* Yan sütun */
  side: { width: SIDEBAR, backgroundColor: c.navy, paddingHorizontal: 22, paddingTop: 34, paddingBottom: 24 },
  sideDeco: { position: "absolute", left: 0, bottom: 0 },
  monogram: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: c.sky,
    color: c.navy,
    fontSize: 15,
    fontWeight: 700,
    textAlign: "center",
    paddingTop: 10,
  },
  sideName: { color: "#fff", fontSize: 13, fontWeight: 700, marginTop: 10, lineHeight: 1.25 },
  sideRole: { color: c.sky, fontSize: 8.5, fontWeight: 600, marginTop: 2 },
  sideBlock: { marginTop: 22 },
  sideTitle: {
    color: c.sky,
    fontSize: 7.5,
    fontWeight: 700,
    letterSpacing: 1.6,
    textTransform: "uppercase",
    marginBottom: 8,
  },
  contactLabel: { color: c.onDarkMuted, fontSize: 7, marginTop: 6 },
  contactValue: { color: c.onDark, fontSize: 8, fontWeight: 600, textDecoration: "none" },
  skillGroup: { marginBottom: 10 },
  skillGroupTitle: { color: c.onDark, fontSize: 8, fontWeight: 600, marginBottom: 4 },
  chips: { flexDirection: "row", flexWrap: "wrap" },
  chipDark: {
    backgroundColor: c.navy2,
    color: "#c7d2fe",
    fontSize: 7,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 3,
    marginBottom: 3,
  },
  eduName: { color: "#fff", fontSize: 9.5, fontWeight: 700 },
  eduLine: { color: c.onDark, fontSize: 8, marginTop: 2 },
  eduYears: { color: c.onDarkMuted, fontSize: 7.5, marginTop: 1 },
  certRow: { flexDirection: "row", marginBottom: 5 },
  certDot: { width: 9, color: c.sky, fontSize: 8 },
  certText: { flex: 1, color: c.onDark, fontSize: 8 },
  certMeta: { color: c.onDarkMuted, fontSize: 7.5 },

  /* Ana sütun */
  main: { flex: 1, paddingHorizontal: 30, paddingTop: 34, paddingBottom: 28 },
  name: { fontSize: 30, fontWeight: 700, color: c.navy, lineHeight: 1.1, letterSpacing: -0.6 },
  role: { fontSize: 13, fontWeight: 600, color: c.accent, marginTop: 6, lineHeight: 1.3 },
  yearsChip: {
    alignSelf: "flex-start",
    marginTop: 9,
    backgroundColor: c.accentSoft,
    color: c.accent,
    fontSize: 8,
    fontWeight: 600,
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  accentBar: { width: 38, height: 3, borderRadius: 2, backgroundColor: c.sky, marginTop: 14 },

  section: { marginTop: 20 },
  headRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  headMark: { width: 7, height: 7, borderRadius: 2, backgroundColor: c.accent, marginRight: 7 },
  headText: { fontSize: 9, fontWeight: 700, letterSpacing: 1.6, textTransform: "uppercase", color: c.navy },
  headLine: { flex: 1, height: 1, backgroundColor: c.soft, marginLeft: 10 },
  summary: { color: c.muted, fontSize: 9.4, lineHeight: 1.55 },

  /* Zaman çizelgesi */
  job: { borderLeftWidth: 1.5, borderLeftColor: "#dbe3ff", paddingLeft: 13, marginLeft: 4, marginBottom: 13 },
  jobDot: {
    position: "absolute",
    left: -6,
    top: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: c.accent,
    borderWidth: 2,
    borderColor: "#fff",
  },
  jobHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  company: { fontSize: 12, fontWeight: 700, color: c.navy },
  period: {
    fontSize: 7.5,
    fontWeight: 600,
    color: c.accent,
    backgroundColor: c.accentSoft,
    borderRadius: 8,
    paddingHorizontal: 7,
    paddingVertical: 2,
  },
  focus: { color: c.muted, fontWeight: 600, fontSize: 8.4, marginTop: 1 },
  badge: {
    alignSelf: "flex-start",
    marginTop: 4,
    color: "#be185d",
    backgroundColor: "#fdf2f8",
    fontSize: 7.2,
    fontWeight: 600,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1.5,
  },
  para: { marginTop: 4, color: c.muted },
  bullet: { flexDirection: "row", marginTop: 2.5 },
  dot: { width: 9, color: c.accent, fontWeight: 700 },
  bulletText: { flex: 1 },
  techRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 6 },
  chipLight: {
    backgroundColor: c.accentSoft,
    color: "#3730a3",
    fontSize: 7,
    fontWeight: 600,
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 3,
    marginBottom: 3,
  },

  /* Projeler */
  grid: { flexDirection: "row", flexWrap: "wrap", marginRight: -8 },
  card: {
    width: "50%",
    paddingRight: 8,
    marginBottom: 8,
    flexDirection: "column",
  },
  cardInner: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: c.soft,
    borderRadius: 8,
    padding: 10,
    minHeight: 112,
  },
  cardTop: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  planet: { width: 11, height: 11, borderRadius: 5.5, marginRight: 6 },
  cardCompany: { fontSize: 7, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: c.muted },
  cardTitle: { fontSize: 9.6, fontWeight: 700, color: c.navy, lineHeight: 1.3 },
  cardText: { marginTop: 3, color: c.muted, fontSize: 8.2 },

  closing: {
    marginTop: 14,
    backgroundColor: c.navy,
    borderRadius: 10,
    padding: 14,
  },
  closingText: { color: "#fff", fontSize: 10, fontWeight: 600 },
  closingLinks: { flexDirection: "row", flexWrap: "wrap", marginTop: 6 },
  closingLink: { color: c.sky, fontSize: 8.2, fontWeight: 600, textDecoration: "none", marginRight: 14 },
});

/** Yan sütunun altındaki dekoratif gezegen (uzay teması). */
function SideDeco() {
  return (
    <Svg width={SIDEBAR} height={150} viewBox="0 0 178 150" style={s.sideDeco}>
      <Defs>
        <RadialGradient id="pl" cx="0.3" cy="0.28" r="0.85">
          <Stop offset="0" stopColor="#e3d4ff" stopOpacity={0.9} />
          <Stop offset="0.5" stopColor="#8b5cf6" stopOpacity={0.7} />
          <Stop offset="1" stopColor="#2e1065" stopOpacity={0.5} />
        </RadialGradient>
      </Defs>
      <Circle cx="30" cy="140" r="62" fill="url(#pl)" />
      <Ellipse
        cx="30"
        cy="140"
        rx="105"
        ry="22"
        fill="none"
        stroke="#38bdf8"
        strokeWidth={1.4}
        strokeOpacity={0.55}
        transform="rotate(-18 30 140)"
      />
      <Circle cx="140" cy="48" r="2" fill="#fff" fillOpacity={0.8} />
      <Circle cx="108" cy="92" r="1.2" fill="#fff" fillOpacity={0.6} />
      <Circle cx="160" cy="112" r="1.5" fill="#fff" fillOpacity={0.7} />
    </Svg>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <View style={s.headRow} minPresenceAhead={70}>
      <View style={s.headMark} />
      <Text style={s.headText}>{children}</Text>
      <View style={s.headLine} />
    </View>
  );
}

function Chips({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <View style={s.chips}>
      {items.map((t) => (
        <Text key={t} style={dark ? s.chipDark : s.chipLight}>
          {t}
        </Text>
      ))}
    </View>
  );
}

interface CvDocumentProps {
  dict: Dictionary;
}

export function CvDocument({ dict }: CvDocumentProps) {
  const { cv } = dict;
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <Document
      title={`${profile.name} — ${dict.hero.role}`}
      author={profile.name}
      subject={dict.meta.description}
      keywords={dict.meta.keywords.join(", ")}
      creator={profile.name}
      producer={profile.name}
    >
      {/* ------------------------------ Sayfa 1 ------------------------------ */}
      <Page size="A4" style={s.page}>
        <View style={s.side}>
          <SideDeco />

          <View>
            <Text style={s.sideTitle}>{cv.contactTitle}</Text>
            <Text style={s.contactLabel}>E-mail</Text>
            <Link src={`mailto:${profile.email}`} style={s.contactValue}>
              {profile.email}
            </Link>
            <Text style={s.contactLabel}>GitHub</Text>
            <Link src={profile.github.url} style={s.contactValue}>
              {profile.github.handle}
            </Link>
            <Text style={s.contactLabel}>LinkedIn</Text>
            <Link src={profile.linkedin.url} style={s.contactValue}>
              {profile.linkedin.handle}
            </Link>
          </View>

          <View style={s.sideBlock}>
            <Text style={s.sideTitle}>{cv.skillsTitle}</Text>
            {skillGroups.map((group) => (
              <View key={group.id} style={s.skillGroup} wrap={false}>
                <Text style={s.skillGroupTitle}>{dict.skills.groups[group.id].title}</Text>
                <Chips items={group.items} dark />
              </View>
            ))}
          </View>
        </View>

        <View style={s.main}>
          <Text style={s.name}>{profile.name}</Text>
          <Text style={s.role}>{dict.hero.role}</Text>
          <Text style={s.yearsChip}>{dict.hero.years}</Text>
          <View style={s.accentBar} />

          <View style={s.section}>
            <Heading>{cv.summaryTitle}</Heading>
            <Text style={s.summary}>{cv.summary}</Text>
          </View>

          <View style={s.section}>
            <Heading>{cv.experienceTitle}</Heading>
            {dict.experience.items.map((job) => (
              <View key={job.id} style={s.job} wrap={false}>
                <View style={s.jobDot} />
                <View style={s.jobHead}>
                  <Text style={s.company}>{job.company}</Text>
                  <Text style={s.period}>{job.period}</Text>
                </View>
                <Text style={s.focus}>{job.focus}</Text>
                {job.badge && <Text style={s.badge}>{job.badge}</Text>}
                <Text style={s.para}>{job.summary}</Text>
                {job.bullets.map((b) => (
                  <View key={b} style={s.bullet}>
                    <Text style={s.dot}>•</Text>
                    <Text style={s.bulletText}>{b}</Text>
                  </View>
                ))}
                <View style={s.techRow}>
                  <Chips items={experienceTech[job.id] ?? []} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>

      {/* ------------------------------ Sayfa 2 ------------------------------ */}
      <Page size="A4" style={s.page}>
        <View style={s.side}>
          <SideDeco />

          <View>
            <Text style={s.monogram}>{initials}</Text>
            <Text style={s.sideName}>{profile.name}</Text>
            <Text style={s.sideRole}>{dict.hero.role}</Text>
          </View>

          <View style={s.sideBlock}>
            <Text style={s.sideTitle}>{cv.educationTitle}</Text>
            <Text style={s.eduName}>{school.name}</Text>
            <Text style={s.eduLine}>{dict.education.field}</Text>
            <Text style={s.eduLine}>{dict.education.degree}</Text>
            <Text style={s.eduYears}>{school.years}</Text>
          </View>

          <View style={s.sideBlock}>
            <Text style={s.sideTitle}>{cv.certificatesTitle}</Text>
            {dict.education.certs.map((cert) => (
              <View key={cert.title} style={s.certRow}>
                <Text style={s.certDot}>•</Text>
                <Text style={s.certText}>
                  {cert.title}
                  {cert.meta ? <Text style={s.certMeta}> ({cert.meta})</Text> : null}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={s.main}>
          <View>
            <Heading>{cv.projectsTitle}</Heading>
            <View style={s.grid}>
              {dict.projects.items.map((p) => {
                const meta = projectMeta[p.id];
                return (
                  <View key={p.id} style={s.card} wrap={false}>
                    <View style={s.cardInner}>
                      <View style={s.cardTop}>
                        <View style={[s.planet, { backgroundColor: planetColor[meta.planet] }]} />
                        <Text style={s.cardCompany}>{meta.company}</Text>
                      </View>
                      <Text style={s.cardTitle}>{p.title}</Text>
                      <Text style={s.cardText}>{p.description}</Text>
                      <View style={s.techRow}>
                        <Chips items={meta.tech} />
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={s.closing} wrap={false}>
            <Text style={s.closingText}>{cv.closing}</Text>
            <View style={s.closingLinks}>
              <Link src={`mailto:${profile.email}`} style={s.closingLink}>
                {profile.email}
              </Link>
              <Link src={profile.github.url} style={s.closingLink}>
                {profile.github.handle}
              </Link>
              <Link src={profile.linkedin.url} style={s.closingLink}>
                {profile.linkedin.handle}
              </Link>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
