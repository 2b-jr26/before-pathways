/* ═══════════════════════════════════════════
   BEFORE PATHWAYS — Scene Data
   All scenes following AMELIA_PREQUEL_v3.md
   ═══════════════════════════════════════════ */

// eslint-disable-next-line no-unused-vars
var SCENES = {

// ════════════════════════════════════════════
// TITLE
// ════════════════════════════════════════════
title: {
  type: 'title',
  audio: { bgm: 'bgm-title', voice: null },
  subtitle: "She wasn't radicalised. She was educated.",
  description: "You are **Amelia**. You're 15. Purple hair. Sharp tongue. 4.0 GPA. You read the reports. Asked the questions. Became the villain in a game designed to teach children not to be like you.",
  next: 'p1'
},

// ════════════════════════════════════════════
// PROLOGUE: SEPTEMBER
// ════════════════════════════════════════════
p1: {
  type: 'narrative',
  label: 'PROLOGUE: SEPT',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "September. Amelia's bedroom. Posters: Siouxsie Sioux, a periodic table, Klimt's \"Death and Life.\" She's reading the news — she does this every morning." }
  ],
  audio: { bgm: null, voice: 'p1' },
  next: 'p2'
},

p2: {
  type: 'narrative',
  label: 'PROLOGUE: SEPT',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'quote', text: "**BBC News:** \"Telford child sexual exploitation: Inquiry finds up to 1,000 children were victims over 40 years. Social workers and police were aware but failed to act.\"" }
  ],
  audio: { bgm: null, voice: 'p2' },
  next: 'p3'
},

p3: {
  type: 'narrative',
  label: 'PROLOGUE: SEPT',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She reads it twice. Then a third time. Screenshots it. Sends it to the group chat:" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"a thousand kids. forty years. and they knew.\"" }
  ],
  audio: { bgm: null, voice: 'p3' },
  next: 'p4'
},

p4: {
  type: 'narrative',
  label: 'PROLOGUE: SEPT',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'angry', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Chloe', text: "\"that's so sad \uD83D\uDE22\"" },
    { type: 'dialogue', speaker: 'Ryan', text: "\"old news innit\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"it's not old news if nobody went to prison for it, Ryan\"" },
    { type: 'dialogue', speaker: 'Ryan', text: "\"chill out lol\"" }
  ],
  audio: { bgm: null, voice: 'p4' },
  next: 'p5'
},

p5: {
  type: 'narrative',
  label: 'PROLOGUE: SEPT',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She types three different responses. Deletes all of them. Puts her phone face-down. Stares at the ceiling for two minutes. Then puts on her uniform. Goes to school." }
  ],
  audio: { bgm: null, voice: 'p5' },
  effects: { showMeters: true },
  next: 'lib1'
},

// ════════════════════════════════════════════
// ACT I: THE LIBRARY — OCTOBER
// ════════════════════════════════════════════
lib1: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "October. School library, lunchtime. Amelia is reading the Jay Report — the actual 153-page PDF from the Rotherham Council website." }
  ],
  audio: { bgm: 'bgm-pastoral', voice: 'lib1' },
  next: 'lib2'
},

lib2: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'quote', text: "\"By far the majority of perpetrators were described as 'Asian' by victims. Several staff described their nervousness about identifying the ethnic origins of perpetrators for fear of being thought as racist.\"" }
  ],
  audio: { bgm: null, voice: 'lib2' },
  next: 'lib3'
},

lib3: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She highlights it. Not because of the ethnicity. Because of the fear. Because adults — people whose job it was to protect children — chose their own comfort over 1,400 kids." }
  ],
  audio: { bgm: null, voice: 'lib3' },
  next: 'lib4'
},

lib4: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mrs. Okonkwo', text: "\"What are you reading, Amelia?\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"The Jay Report. About Rotherham.\"" },
    { type: 'dialogue', speaker: 'Mrs. Okonkwo', text: "\"That's... quite heavy for lunchtime reading. Is this for a class?\"" }
  ],
  audio: { bgm: null, voice: 'lib4' },
  next: 'lib5'
},

lib5: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"No. I just wanted to understand how it happened.\"" },
    { type: 'dialogue', speaker: 'Mrs. Okonkwo', text: "\"That's commendable. But be careful — some of the sources you might find online aren't... *balanced*.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"This is the official government inquiry.\"" },
    { type: 'dialogue', speaker: 'Mrs. Okonkwo', text: "*(smiles tightly)* \"Just be careful.\"" }
  ],
  audio: { bgm: null, voice: 'lib5' },
  next: 'lib6'
},

lib6: {
  type: 'choice',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-library.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'prompt', text: "How does Amelia respond?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '"I will. Thanks, miss."', fx: { c: 5 }, next: 'lib7', tag: 'polite' },
    { key: 'B', text: '"Careful of what, exactly? It\'s a government document."', fx: { c: -10, t: -5 }, next: 'lib7', tag: 'confrontational' },
    { key: 'C', text: 'Nod. Say nothing. Keep reading.', fx: { t: -5 }, next: 'lib7', tag: 'silent' }
  ]
},

lib7: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-school-corridor.png',
  chars: [],
  segments: [
    { type: 'system', text: "Mrs. Okonkwo mentions it to the Head of Year in the staffroom: *\"Just so you know — Amelia Ward is reading about grooming gangs. Probably nothing. Bright girl. Just thought I should flag it.\"*" },
    { type: 'narrator', text: "The Head of Year makes a note." }
  ],
  audio: { bgm: null, voice: 'lib7' },
  next: 'lib8'
},

lib8: {
  type: 'choice',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "That night, 11:47 PM. She should sleep. Maths test in the morning. But the Jay Report is open — page 67 of 153." },
    { type: 'googling', text: "GOOGLING CHOICE — every footnote is a door. Time is not infinite." }
  ],
  audio: { bgm: null, voice: 'lib8' },
  choices: [
    { key: 'A', text: 'Close the laptop. Sleep. Revise in the morning.', fx: {}, next: 'pshe1', tag: 'rest' },
    { key: 'B', text: 'Read until she finishes the chapter. Just one more.', fx: { e: 15 }, next: 'lib9', tag: 'research' }
  ]
},

lib9: {
  type: 'narrative',
  label: 'ACT I: LIBRARY — OCT',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She reads until 3am. Learns about the taxi firms, the takeaways, the geography of institutional failure. Gets four hours of sleep. Bombs the algebra section." },
    { type: 'narrator', text: "**First B- in Maths.** She doesn't connect the two things yet." }
  ],
  audio: { bgm: null, voice: 'lib9' },
  next: 'pshe1'
},

// ════════════════════════════════════════════
// ACT I: PSHE LESSON — NOVEMBER
// ════════════════════════════════════════════
pshe1: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'mr-davies', pose: 'presenting', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "November. PSHE class. \"Staying Safe Online.\" Slide 7: \"How Extremists Use Real Events.\"" }
  ],
  audio: { bgm: 'bgm-pastoral', voice: 'pshe1' },
  next: 'pshe2'
},

pshe2: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'mr-davies', pose: 'presenting', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Mr. Davies', text: "\"Extremist groups take real events and use them to make you angry. They want you to feel like the system has failed, so you'll turn to them for answers.\"" }
  ],
  audio: { bgm: null, voice: 'pshe2' },
  next: 'pshe3'
},

pshe3: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"But what if the system actually has failed? The Jay Report literally says that.\"" },
    { type: 'dialogue', speaker: 'Mr. Davies', text: "\"Right, but the point is about *how* you respond—\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Who should I blame? The report names specific failures.\"" }
  ],
  audio: { bgm: null, voice: 'pshe3' },
  next: 'pshe4'
},

pshe4: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mr. Davies', text: "\"Amelia, this isn't really the forum—\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Then what is the forum? Where am I allowed to be angry about a thousand children being raped while the council covered it up?\"" }
  ],
  audio: { bgm: null, voice: 'pshe4' },
  next: 'pshe5'
},

pshe5: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Silence. Twenty-seven students staring. Her face is red. She hadn't meant to say \"raped\" — the word just came out. Jake Marsden in the back row is filming." }
  ],
  audio: { bgm: null, voice: 'pshe5' },
  next: 'pshe6'
},

pshe6: {
  type: 'choice',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'prompt', text: "How does Amelia handle this?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '"Sorry. I didn\'t mean to derail the lesson."', fx: { c: 10, t: -10 }, next: 'pshe7', tag: 'apologise' },
    { key: 'B', text: 'Wait for an answer. Maintain eye contact.', fx: { c: -20, t: -10 }, next: 'pshe7', tag: 'confront' },
    { key: 'C', text: '"Never mind. What\'s on slide 8?"', fx: { c: 5, t: -15 }, next: 'pshe7', tag: 'deflect' }
  ]
},

pshe7: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'mr-davies', pose: 'worried', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "After class. Mr. Davies asks Amelia to stay behind." },
    { type: 'dialogue', speaker: 'Mr. Davies', text: "\"When students express very strong feelings about these topics, we have a duty of care to make sure they're processing it in a healthy way.\"" }
  ],
  audio: { bgm: null, voice: 'pshe7' },
  next: 'pshe8'
},

pshe8: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"A healthy way.\"" },
    { type: 'dialogue', speaker: 'Mr. Davies', text: "\"Would you be open to a chat with Mrs. Henderson? She's our pastoral lead.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Are you serious?\"" },
    { type: 'narrator', text: "It's not the devastating response she'd think of later at 2am. It's just a fifteen-year-old girl who can't believe what she's hearing." }
  ],
  audio: { bgm: null, voice: 'pshe8' },
  next: 'pshe9'
},

pshe9: {
  type: 'narrative',
  label: 'ACT I: PSHE — NOV',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She walks out before he answers. In the corridor, her hands are shaking. She goes to the bathroom and sits in a stall and breathes until the shaking stops." },
    { type: 'system', text: "Mr. Davies sends an email. Subject: *\"Amelia Ward — possible pastoral concern.\"*" }
  ],
  audio: { bgm: null, voice: 'pshe9' },
  next: 'din1'
},

// ════════════════════════════════════════════
// ACT I: DINNER TABLE — DECEMBER
// ════════════════════════════════════════════
din1: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "December. Dinner table. Paul (logistics warehouse), Sarah (teaching assistant). They vote Labour. They recycle. They are, by every measure, normal." }
  ],
  audio: { bgm: null, voice: 'din1' },
  next: 'din2'
},

din2: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"Did you see they arrested that woman for a Facebook post? About the hotel they're putting migrants in?\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Which one?\"" }
  ],
  audio: { bgm: null, voice: 'din2' },
  next: 'din3'
},

din3: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"There were like... twelve thousand arrests for social media stuff. Nationally. Under the Communications Act. And only like two percent get convicted.\"" }
  ],
  audio: { bgm: null, voice: 'din3' },
  next: 'din4'
},

din4: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'warning', label: "AMELIA'S FIRST ERROR", text: "The twelve thousand is right. The two percent is wrong — it's closer to ten percent. She read both numbers at 2am. The smaller one stuck because it made the better argument." }
  ],
  audio: { bgm: null, voice: 'din4' },
  next: 'din5'
},

din5: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"I'm not saying she's wrong. I'm asking why our fifteen-year-old is reading Hansard.\"" },
    { type: 'narrator', text: "Amelia opens her mouth to say something. But she sees her mum's face — that expression when she's worried and trying not to show it." }
  ],
  audio: { bgm: null, voice: 'din5' },
  next: 'din6'
},

din6: {
  type: 'narrative',
  label: 'ACT I: DINNER — DEC',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"...Can I have more pasta?\"" },
    { type: 'narrator', text: "She chickened out. She'll hate herself for it later. But at the table, she just asked for pasta." }
  ],
  audio: { bgm: null, voice: 'din6' },
  next: 'int1'
},

// ════════════════════════════════════════════
// INTERLUDE: KITCHEN MIDNIGHT
// ════════════════════════════════════════════
int1: {
  type: 'narrative',
  label: 'INTERLUDE: MIDNIGHT',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "11:47 PM. Kitchen. Amelia is asleep upstairs. The dishwasher hums." },
    { type: 'dialogue', speaker: 'Paul', text: "\"She said twelve thousand arrests.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"She says a lot of things.\"" }
  ],
  audio: { bgm: null, voice: 'int1' },
  next: 'int2'
},

int2: {
  type: 'narrative',
  label: 'INTERLUDE: MIDNIGHT',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"Yeah, but she's usually right, isn't she? That's the problem.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"The school called me today. Her PSHE teacher thinks she needs a pastoral meeting.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"For what?\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"For being 'very focused on sensitive topics.'\"" }
  ],
  audio: { bgm: null, voice: 'int2' },
  next: 'int3'
},

int3: {
  type: 'narrative',
  label: 'INTERLUDE: MIDNIGHT',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Paul picks up his phone. Types: \"how many arrested social media uk 2023\"" },
    { type: 'dialogue', speaker: 'Paul', text: "*(quietly)* \"Twelve thousand. She wasn't rounding up. ...She said two percent though. Looks more like ten.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Great. Now there's two of you.\"" }
  ],
  audio: { bgm: null, voice: 'int3' },
  next: 'int4'
},

int4: {
  type: 'narrative',
  label: 'INTERLUDE: MIDNIGHT',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"She gets it from you, you know.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Gets what?\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"The thing where you find out something terrible and you can't just... let it go.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"That's not a character flaw.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"I didn't say it was.\"" }
  ],
  audio: { bgm: null, voice: 'int4' },
  next: 'int5'
},

int5: {
  type: 'narrative',
  label: 'INTERLUDE: MIDNIGHT',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'sad', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "Sarah goes to bed. Paul stays up for another forty minutes reading about Rotherham." },
    { type: 'narrator', text: "He doesn't tell Amelia. He doesn't know how to say: *I checked your numbers and you were right and I'm proud of you and I'm scared.*" }
  ],
  audio: { bgm: null, voice: 'int5' },
  next: 'interlude_blog'
},

// ════════════════════════════════════════════
// INTERLUDE: THE ARITHMETIC OF SILENCE
// ════════════════════════════════════════════
interlude_blog: {
  type: 'interlude',
  label: '\u266A SOUNDTRACK \u266A',
  audio: { bgm: 'bgm-anthem', voice: null },
  title: 'THE ARITHMETIC OF SILENCE',
  segments: [
    { type: 'quote', text: "\"Here is a maths problem for PSHE class: If 1,400 children were sexually exploited in one town over 16 years, and the authorities knew for at least 10 of those years, how many children were raped during the period between 'knowing' and 'acting'?\n\nShow your working.\n\nThe answer is 8,778. The 80% who were cleared still got investigated. They still sat in a room and explained to a nice person from the council why they were upset about child rape. They still have a file.\"" },
    { type: 'source', text: "— Notes From the Island, \"The Arithmetic of Silence\"" },
    { type: 'narrator', text: "Amelia wrote this at 1am. On a screen. Where she's braver than across a table." }
  ],
  next: 'blog1'
},

// ════════════════════════════════════════════
// ACT II: BLOG
// ════════════════════════════════════════════
blog1: {
  type: 'narrative',
  label: 'ACT II: BLOG — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Later that night. Amelia starts a blog: \"Notes From the Island.\" First post: \"Things You're Not Supposed to Notice.\"" },
    { type: 'narrator', text: "She writes the speech she didn't give at dinner. It's better written than spoken. She's braver on a screen than across a table." }
  ],
  audio: { bgm: null, voice: 'blog1' },
  next: 'blog2'
},

blog2: {
  type: 'choice',
  label: 'ACT II: BLOG — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "11:40 PM. Post is finished. But the two percent conviction figure nags at her." },
    { type: 'googling', text: "GOOGLING CHOICE" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: "Post it and sleep. She'll check tomorrow.", fx: { e: 5 }, next: 'past1', tag: 'post_sleep' },
    { key: 'B', text: 'Stay up and verify everything. Every number, every source.', fx: { e: 20 }, next: 'blog3', tag: 'verify' }
  ]
},

blog3: {
  type: 'narrative',
  label: 'ACT II: BLOG — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She finds the real rate: ~10%, not 2%. Fixes it before posting. Discovers the Huddersfield convictions. The Newcastle operation. Each report cites another. Each footnote is a door." },
    { type: 'narrator', text: "She gets to bed at 2:30am. Mum finds her asleep on the keyboard." }
  ],
  audio: { bgm: null, voice: 'blog3' },
  next: 'past1'
},

// ════════════════════════════════════════════
// ACT II: PASTORAL MEETING — JANUARY
// ════════════════════════════════════════════
past1: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mrs-henderson', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "January. Mrs. Henderson's office. Inspirational posters. A box of tissues. A safeguarding flowchart on the wall." }
  ],
  audio: { bgm: 'bgm-anthem', voice: 'past1' },
  next: 'past2'
},

past2: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mrs-henderson', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Mrs. Henderson', text: "\"Amelia, this is just a check-in — nothing to worry about. Some of your teachers have noticed you seem quite angry.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"I'm not angry. I'm informed. Those are different things.\"" },
    { type: 'narrator', text: "She'd rehearsed that line. It came out well." }
  ],
  audio: { bgm: null, voice: 'past2' },
  next: 'past3'
},

past3: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Then the adrenaline hits. Instead of the measured presentation she'd planned, she starts machine-gunning statistics:" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Rotherham, Rochdale, Telford, Oxford, Huddersfield, Newcastle — over four thousand victims. Twelve thousand arrests for social media. Eight thousand Prevent referrals—\"" }
  ],
  audio: { bgm: null, voice: 'past3' },
  next: 'past4'
},

past4: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mrs. Henderson', text: "\"Amelia. Can you slow down?\"" },
    { type: 'narrator', text: "She stops. She's breathing fast. She sounds, she realises with horror, exactly like the kind of person she's trying to prove she isn't." }
  ],
  audio: { bgm: null, voice: 'past4' },
  next: 'past5'
},

past5: {
  type: 'choice',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'prompt', text: "How does Amelia respond?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '(silence — she can\'t think of what to say)', fx: { t: -15 }, next: 'past6', tag: 'silence' },
    { key: 'B', text: '"You\'re right. I should probably read more about other things too."', fx: { c: 15, t: -20 }, next: 'past6', tag: 'perform' },
    { key: 'C', text: '"Mrs. Henderson, are you going to refer me to Prevent?"', fx: { c: -10, t: -10 }, next: 'past5c', tag: 'confront' }
  ]
},

past5c: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mrs. Henderson', text: "*(visibly uncomfortable)* \"Why would you ask that?\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Because I've read the criteria.\"" },
    { type: 'narrator', text: "Her voice does that thing where it goes slightly higher. She stops talking because she will NOT cry in this office." }
  ],
  audio: { bgm: null, voice: 'past5c' },
  next: 'past6'
},

past6: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [],
  segments: [
    { type: 'system', text: "**Mrs. Henderson's report, filed that afternoon:**\n\"Amelia Ward, Year 11. Highly intelligent, articulate. Focused interest in child sexual exploitation and government policy. Sources appear legitimate but intensity of interest may warrant monitoring. **Consider Prevent referral if pattern escalates.**\"" }
  ],
  audio: { bgm: null, voice: 'past6' },
  next: 'past7'
},

past7: {
  type: 'narrative',
  label: 'ACT II: PASTORAL — JAN',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'walking', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She is being monitored for reading government reports about government failures. She knows it. They know she knows it. Nobody says it out loud." }
  ],
  audio: { bgm: null, voice: 'past7' },
  next: 'viral1'
},

// ════════════════════════════════════════════
// ACT II: BLOG GOES VIRAL — FEBRUARY
// ════════════════════════════════════════════
viral1: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "February. The blog has twelve posts. Forty readers a day, mostly from Reddit." },
    { type: 'narrator', text: "Her latest post: \"The Arithmetic of Silence.\"" }
  ],
  audio: { bgm: 'bgm-anthem', voice: 'viral1' },
  next: 'viral2'
},

viral2: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'l' }],
  segments: [
    { type: 'quote', text: "\"If 1,400 children were sexually exploited in one town over 16 years, and the authorities knew for at least 10 of those years, how many children were raped between 'knowing' and 'acting'? Show your working.\"" }
  ],
  audio: { bgm: null, voice: 'viral2' },
  next: 'viral3'
},

viral3: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "The post gets shared on X. 15,000 followers. Then 80,000. By Friday: **200,000 views.**" },
    { type: 'narrator', text: "Half euphoria. Half terror." }
  ],
  audio: { bgm: null, voice: 'viral3' },
  next: 'viral4'
},

viral4: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Most replies are supportive. Some are from accounts with pepe avatars. They share her words alongside things she'd never say." },
    { type: 'narrator', text: "*\"Found the next Tommy Robinson.\" \"Reported for hate speech.\" \"This is literally a radicalisation pipeline.\"*" }
  ],
  audio: { bgm: null, voice: 'viral4' },
  next: 'viral_response'
},

// ════════════════════════════════════════════
// NEW: VIRAL RESPONSE CHOICE
// ════════════════════════════════════════════
viral_response: {
  type: 'choice',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She tries to write a response to someone who called her a fascist and ends up typing and deleting for twenty minutes." },
    { type: 'prompt', text: "What does Amelia do?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: "Post a clarification: \"I'm not far-right. I'm not any-right. I'm 15 and can read.\"", fx: { c: -15, t: -5 }, next: 'viral_clarify', tag: 'clarify' },
    { key: 'B', text: 'Delete the blog.', fx: { c: 20, t: -25 }, next: 'viral_delete', tag: 'delete' },
    { key: 'C', text: 'Do nothing. Let it ride.', fx: { c: -5, t: -10 }, next: 'viral_nothing', tag: 'nothing' }
  ]
},

viral_clarify: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "The clarification gets screenshotted and shared even more widely. \"Purple-haired goth girl destroys the narrative\" becomes a minor meme. She gains 3,000 followers in a day." },
    { type: 'narrator', text: "She's also made a typo — wrote \"their\" instead of \"there\" — and a leftist account with a blue checkmark quotes it with \"Can't even spell but wants to lecture us about statistics.\"" },
    { type: 'narrator', text: "She sees it at school the next day and her stomach drops." }
  ],
  audio: { bgm: null, voice: null },
  next: 'viral5'
},

viral_delete: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Screenshots already exist. The internet never forgets. And she's learned that she was right — and deleted herself anyway." }
  ],
  audio: { bgm: null, voice: null },
  next: 'viral5'
},

viral_nothing: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "By Monday, her school knows." }
  ],
  audio: { bgm: null, voice: null },
  next: 'viral5'
},

// ════════════════════════════════════════════
// GOOGLING CHOICE 3
// ════════════════════════════════════════════
viral5: {
  type: 'choice',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "3:17 AM. She can't sleep. A Wikipedia article. Twenty-seven footnotes. Chemistry exam tomorrow." },
    { type: 'googling', text: "FINAL GOOGLING CHOICE" }
  ],
  audio: { bgm: null, voice: 'viral5' },
  choices: [
    { key: 'A', text: 'Close the laptop. Try to sleep.', fx: { e: 5 }, next: 'living1', tag: 'rest' },
    { key: 'B', text: 'Just one article. Just the Wikipedia page.', fx: { e: 25 }, next: 'viral6', tag: 'research' }
  ]
},

viral6: {
  type: 'narrative',
  label: 'ACT II: VIRAL — FEB',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Six hours later: four reports, twelve articles, two documentaries. She misses Chemistry entirely. Mum finds her asleep at her desk at noon." }
  ],
  audio: { bgm: null, voice: 'viral6' },
  next: 'living1'
},

// ════════════════════════════════════════════
// NEW: INTERLUDE — LIVING ROOM
// ════════════════════════════════════════════
living1: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "Saturday morning. Paul is watching Football Focus. Sarah is on the sofa with her phone. Amelia is still asleep." },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Have you seen this?\"" },
    { type: 'narrator', text: "She shows Paul her phone. One of the X posts sharing Amelia's blog. \"Based 15-year-old destroys the narrative.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'living2'
},

living2: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"Bloody hell.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Two hundred thousand views, Paul.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"She's good, though. The writing. It's actually—\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Don't you dare be proud right now.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'living3'
},

living3: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"There are people with swastika avatars sharing our daughter's blog. THAT is what we're talking about.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "*(quietly)* \"She can't control who shares it.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"No. But she can control whether it exists. I want her to take it down.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'living4'
},

living4: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"I'm scared. I'm her mum and I'm scared. The school already called. If this gets bigger — Prevent, Paul. You know what Prevent is.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"I know what Prevent is. I've been reading about it. Liberty did a whole report. Amnesty too. They refer kids under ten, Sarah. Under ten.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"So now you're both doing it.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'living5'
},

living5: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'paul', pose: 'sad', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"Everything she wrote is true. Every number. I checked.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"I know it's true. That's not the point.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Then what's the point?\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"The point is she's fifteen and nobody is going to care that she's right. They're going to care that she's loud.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'living6'
},

living6: {
  type: 'narrative',
  label: 'INTERLUDE: LIVING ROOM',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Paul has no answer for this. Because she's right too." },
    { type: 'narrator', text: "They sit in silence. Football Focus plays to nobody." },
    { type: 'dialogue', speaker: 'Sarah', text: "*(finally)* \"I'll talk to her. About the blog.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Don't make her delete it.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"I'm going to ask her to delete it.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'meet1'
},

// ════════════════════════════════════════════
// ACT III: THE MEETING — MARCH
// ════════════════════════════════════════════
meet1: {
  type: 'narrative',
  label: 'ACT III: MEETING — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mr-okafor', pose: 'stern', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "March. The school calls Amelia's parents in. Headteacher's office." },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"We wanted to discuss some concerns about Amelia.\"" }
  ],
  audio: { bgm: 'bgm-zero', voice: 'meet1' },
  next: 'meet2'
},

meet2: {
  type: 'narrative',
  label: 'ACT III: MEETING — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mrs-henderson', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"What concerns? Her grades are fine.\"" },
    { type: 'dialogue', speaker: 'Mrs. Henderson', text: "\"When a student starts expressing strong feelings about institutional failure, fixation on perceived injustices, distrust of authority... these are indicators we're trained to watch for.\"" }
  ],
  audio: { bgm: null, voice: 'meet2' },
  next: 'meet3'
},

meet3: {
  type: 'narrative',
  label: 'ACT III: MEETING — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'paul', pose: 'angry', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "*(quietly)* \"Indicators of what?\"" },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"Under the Prevent strategy, we're required to identify students who may be vulnerable to radicalisation.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"You think our daughter is being radicalised because she reads government reports?\"" }
  ],
  audio: { bgm: null, voice: 'meet3' },
  next: 'meet4'
},

meet4: {
  type: 'narrative',
  label: 'ACT III: MEETING — MAR',
  bg: 'bg-kitchen-home.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "School car park. Grey sky. Drizzle." },
    { type: 'dialogue', speaker: 'Paul', text: "\"They want us to tell our daughter to stop reading.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"That's not what they said.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"That's exactly what they said.\"" }
  ],
  audio: { bgm: null, voice: 'meet4' },
  next: 'meet5'
},

meet5: {
  type: 'narrative',
  label: 'ACT III: MEETING — MAR',
  bg: 'bg-kitchen-home.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Sarah starts crying. Not loudly. Just sitting there with tears running down her face." },
    { type: 'dialogue', speaker: 'Sarah', text: "\"I don't know what the right thing is. I don't know if we're supposed to protect her from the world or from herself or from them or... I don't know.\"" }
  ],
  audio: { bgm: null, voice: 'meet5' },
  next: 'interlude_trust'
},

// ════════════════════════════════════════════
// INTERLUDE: TRUST ZERO
// ════════════════════════════════════════════
interlude_trust: {
  type: 'interlude',
  label: '\u266A SOUNDTRACK \u266A',
  audio: { bgm: 'bgm-zero', voice: null },
  title: 'TRUST ZERO',
  segments: [
    { type: 'narrator', text: "The system doesn't break people all at once.\nIt files them down." },
    { type: 'quote', text: "\"Amelia Ward, Year 11. Highly intelligent, articulate.\n\nConsider Prevent referral if pattern escalates.\"" },
    { type: 'narrator', text: "Paul and Sarah drive home in silence.\nThey have to tell their daughter to stop reading." }
  ],
  next: 'con1'
},

// ════════════════════════════════════════════
// ACT III: CONFRONTATION
// ════════════════════════════════════════════
con1: {
  type: 'narrative',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "That evening. Kitchen table. No food, no phones. Just her parents, sitting." },
    { type: 'dialogue', speaker: 'Sarah', text: "\"We need to talk.\"" }
  ],
  audio: { bgm: 'bgm-zero', voice: 'con1' },
  next: 'con2'
},

con2: {
  type: 'narrative',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"The school called us in today. They're worried about you.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"They want to refer me to Prevent.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"They're considering it.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"For reading the news.\"" }
  ],
  audio: { bgm: null, voice: 'con2' },
  next: 'con3'
},

con3: {
  type: 'narrative',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "*(voice breaking)* \"I didn't write anything untrue. I cited everything. Government data. Official reports.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Then why are they doing this to me?\"" }
  ],
  audio: { bgm: null, voice: 'con3' },
  next: 'con4'
},

con4: {
  type: 'narrative',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"They're not doing anything *to* you. They're worried *about* you.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"They used the word 'radicalisation,' Amelia.\"" },
    { type: 'narrator', text: "The word hangs in the air like smoke." }
  ],
  audio: { bgm: null, voice: 'con4' },
  next: 'con5'
},

con5: {
  type: 'narrative',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "*(quietly)* \"What do you want me to do?\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Take a break. From the blog. From the research. Just... be a kid for a while.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"And if I don't?\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Then they refer you. And then you have a file. And that follows you.\"" }
  ],
  audio: { bgm: null, voice: 'con5' },
  next: 'con6'
},

con6: {
  type: 'choice',
  label: 'ACT III: CONFRONTATION',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'punch', text: "Compliance or consequences. Silence or surveillance." }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '"Okay. I\'ll stop."', fx: { c: 30, t: -20, e: -10 }, next: 'ref1', tag: 'comply' },
    { key: 'B', text: '"I can\'t just pretend I don\'t know."', fx: { c: -20, t: -15, e: 10 }, next: 'ref1', tag: 'refuse' },
    { key: 'C', text: '"I\'ll be more careful. I\'ll keep it private."', fx: { c: 10, t: -10, e: 5 }, next: 'ref1', tag: 'compromise' }
  ]
},

// ════════════════════════════════════════════
// NEW: THE REFERRAL (v3 Scene 6)
// ════════════════════════════════════════════
ref1: {
  type: 'narrative',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mr-okafor', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "March. Amelia is called out of Maths. Her mum is in the headteacher's office. So is a man she's never met. He's wearing a lanyard that says \"CHANNEL\" — the name of the Prevent deradicalisation programme." },
    { type: 'dialogue', speaker: 'Sarah', text: "*(to Amelia)* \"It's alright, love.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref2'
},

ref2: {
  type: 'narrative',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mr-okafor', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "Amelia sits down. Her leg is bouncing under the table. She wants to be the version of herself who writes blogs at 1am — precise, devastating, unhesitating. But she's not. She's the version who got pulled out of Maths and her mum is here and she's scared." },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"Hi Amelia. I've read some of your blog posts — they're very well-written.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Thank you.\"" },
    { type: 'narrator', text: "She was supposed to say something else. \"Which part concerned you?\" — she'd rehearsed it. But \"thank you\" came out instead." }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref3'
},

ref3: {
  type: 'narrative',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"I wanted to talk about the pattern we're seeing. You've been writing extensively about sensitive topics. And recently your content has gained quite a large audience, including some... problematic actors.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"You mean racists shared my posts.\"" },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"Some of the accounts that amplified your content are linked to far-right networks, yes.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref4'
},

ref4: {
  type: 'narrative',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"I didn't ask them to share it. I didn't— I don't even—\"" },
    { type: 'narrator', text: "Her voice cracks. She stops. The room waits." },
    { type: 'narrator', text: "This is the moment where Blog Amelia — the 1am Amelia, the devastating Amelia — would deliver a surgical monologue. Real Amelia, sitting in a headteacher's office with her mum reaching for her hand, just feels small." },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"Nobody's saying it's your fault. We're here to make sure you have support.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "*(finding her voice, but it's shaky)* \"Support for what? I read government reports. I wrote about them. That's all I did.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref5'
},

ref5: {
  type: 'choice',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "*(closes his folder)* \"I'll note that Amelia engaged positively with the process.\"" },
    { type: 'prompt', text: "How does Amelia respond?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '(Say nothing. She doesn\'t have the energy.)', fx: { c: 5, t: -30 }, next: 'ref_car', tag: 'silence' },
    { key: 'B', text: '"I didn\'t engage positively. You\'re going to write whatever makes your report look good."', fx: { c: -25, t: -20 }, next: 'ref_car', tag: 'confront' },
    { key: 'C', text: '"Will this go on a record?"', fx: { c: -5, t: -15 }, next: 'ref5c', tag: 'ask' }
  ]
},

ref5c: {
  type: 'narrative',
  label: 'ACT III: THE REFERRAL — MAR',
  bg: 'bg-living-room-grey.png',
  chars: [{ id: 'mr-okafor', pose: 'stern', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "\"Prevent referrals don't appear on DBS checks.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"I've read that that's not always true. That sometimes they show up.\"" },
    { type: 'dialogue', speaker: 'Mr. Okafor', text: "*(pause)* \"I can only speak to the official position.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "*(quietly)* \"Yeah.\"" },
    { type: 'narrator', text: "It's just a fifteen-year-old girl running out of fight in an office designed to drain it." }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref_car'
},

// ════════════════════════════════════════════
// NEW: CAR PARK INTERLUDE
// ════════════════════════════════════════════
ref_car: {
  type: 'narrative',
  label: 'INTERLUDE: CAR PARK',
  bg: 'bg-kitchen-home.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Sarah and Amelia in the car. Engine running. Neither moves." },
    { type: 'dialogue', speaker: 'Amelia', text: "\"You asked me to delete the blog.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"I did.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"And I did. And it didn't matter. They still—\"" },
    { type: 'narrator', text: "She stops because she's going to cry, and she will NOT cry in this car park." }
  ],
  audio: { bgm: null, voice: null },
  next: 'ref_car2'
},

ref_car2: {
  type: 'narrative',
  label: 'INTERLUDE: CAR PARK',
  bg: 'bg-kitchen-home.png',
  chars: [{ id: 'sarah', pose: 'scared', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"I'm sorry. For asking you to delete it.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Then don't ask me to apologise for being right.\"" },
    { type: 'narrator', text: "They drive home in silence. Sarah puts the radio on. Radio 2. Some song about love that neither of them hears." },
    { type: 'narrator', text: "That night, Sarah sits in the dark kitchen and reads the Amnesty report about Prevent. The one about children under ten. She reads it all the way through." }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft1'
},

// ════════════════════════════════════════════
// NEW: THE AFTERMATH (v3 Scene 7)
// ════════════════════════════════════════════
aft1: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'walking', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "April. The weeks after the referral. Things that change:" },
    { type: 'narrator', text: "Her form tutor treats her differently — gentle, careful, like she's fragile. Or dangerous. She can't tell which." },
    { type: 'narrator', text: "Two friends stop sitting with her at lunch. Sophie tells her: \"My mum said I shouldn't hang around with you because you're on some kind of list.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft2'
},

aft2: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Her English teacher, who used to love her essays, now gives her topics like \"The Importance of Community\" and \"Finding Balance in a Changing World.\"" },
    { type: 'narrator', text: "She is not invited to the school debate team, despite being the best debater in her year. When she asks why, she's told the team is \"full.\" It has nine members. The limit is twelve." }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft3'
},

aft3: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'paul', pose: 'sad', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "One evening, Paul knocks on her door. He sits on the edge of her bed. Looks at the Siouxsie poster. At the Klimt." },
    { type: 'dialogue', speaker: 'Paul', text: "\"I looked up some of the stuff you've been reading. The Liberty report. The Amnesty one.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"...When?\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Few weeks ago. And again last night.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft4'
},

aft4: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'paul', pose: 'sad', pos: 'l' }],
  segments: [
    { type: 'dialogue', speaker: 'Paul', text: "\"You were right. About all of it. The numbers. The referrals. All of it.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"I know.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"I don't know how to help you with this. Your mum thinks if you just go quiet for a while, it'll blow over. And maybe she's right. But I want you to know that I read it. I checked the numbers. And you weren't wrong.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft5'
},

aft5: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Amelia', text: "\"You could have said something in that meeting.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"I wasn't in that meeting.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"You could have been.\"" },
    { type: 'narrator', text: "That lands. Paul looks at his tea." },
    { type: 'dialogue', speaker: 'Paul', text: "\"Yeah. I could have been.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft6'
},

aft6: {
  type: 'choice',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She still reads the news. She reads about the Grooming Gangs Taskforce, 115,489 child sexual abuse offences, a man sentenced to 20 months for a Facebook post. She reads all of this. She says nothing." },
    { type: 'prompt', text: "What does Amelia do next?" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: 'Start a new blog, anonymous this time.', fx: { c: -20, t: 5 }, next: 'sum1', tag: 'anon_blog' },
    { key: 'B', text: 'Focus on exams. Keep her head down. Get out.', fx: { c: 20, t: -30 }, next: 'sum1', tag: 'exams' },
    { key: 'C', text: "Join the school's approved \"Young Citizens\" programme.", fx: { c: 25, t: -40 }, next: 'aft7_yc', tag: 'young_citizens' }
  ]
},

aft7_yc: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "The Young Citizens programme includes a module called \"Spotting Extremist Content Online.\" The example they use is a blog post about grooming gang statistics." },
    { type: 'narrator', text: "The rhetoric it identifies as \"red flags\" includes: \"Selective use of statistics to build a narrative.\" \"Emotional language designed to provoke outrage.\" \"Distrust of mainstream institutions.\"" },
    { type: 'narrator', text: "Amelia reads her own arguments being used as examples of radicalisation. Sourced. Cited. Accurate arguments — repackaged as symptoms of a disease." }
  ],
  audio: { bgm: null, voice: null },
  next: 'aft8_yc'
},

aft8_yc: {
  type: 'narrative',
  label: 'ACT III: AFTERMATH — APR',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She raises her hand. Thirty faces turn. She opens her mouth to point out the absurdity — to note that the \"extremist rhetoric\" in the example is a direct quote from a Parliamentary inquiry." },
    { type: 'narrator', text: "Nothing comes out." },
    { type: 'narrator', text: "She lowers her hand. The teacher moves to the next slide." },
    { type: 'narrator', text: "She excuses herself to the bathroom. Sits in a stall. Laughs. Then cries. Then laughs again, because what else do you do when you watch yourself become a case study in a PowerPoint presentation?" }
  ],
  audio: { bgm: null, voice: null },
  next: 'sum1'
},

// ════════════════════════════════════════════
// NEW: THE SUMMER (v3 Scene 8)
// ════════════════════════════════════════════
sum1: {
  type: 'narrative',
  label: 'THE SUMMER — JUL',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "July. School's out. She reads. Not just reports now. History. How the Soviet Union pathologised dissent as mental illness. How the East German Stasi recruited teachers as informants." },
    { type: 'narrator', text: "She doesn't think Britain is the Soviet Union. She's not stupid. But she notices the rhymes." }
  ],
  audio: { bgm: null, voice: null },
  next: 'sum2'
},

sum2: {
  type: 'narrative',
  label: 'THE SUMMER — JUL',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She shares an article in a group chat that turns out to be from a dodgy source. When Maya points it out, she deletes it and sits with the hot shame of having done the exact thing she criticises others for." },
    { type: 'warning', label: "AMELIA'S SECOND ERROR", text: "In her journal, she argues that the Prevent 80% no-action rate proves political targeting. Maya says: \"Or it just means the threshold is really low and most teachers don't know what they're looking at. That's institutional incompetence, not political targeting. Those are different problems.\"" },
    { type: 'narrator', text: "She crosses out the paragraph. Writes above it: \"I did the thing. I did the exact thing.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'sum3'
},

sum3: {
  type: 'choice',
  label: 'THE SUMMER — JUL',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'googling', text: "GOOGLING CHOICE" }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: "Take a week off. Cinema with Maya. Be a normal teenager.", fx: { e: -20 }, next: 'sum5', tag: 'rest' },
    { key: 'B', text: "Download the full IICSA database and cross-reference with Prevent referral rates.", fx: { e: 25 }, next: 'sum4', tag: 'research' }
  ]
},

sum4: {
  type: 'narrative',
  label: 'THE SUMMER — JUL',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "She finds some correlations but they don't prove what she hoped. The theory doesn't hold. She's spent four nights on something that led nowhere." },
    { type: 'narrator', text: "She learns something valuable: most of her theories are wrong. The difference between a researcher and a conspiracy theorist is the willingness to follow the data when it contradicts your hypothesis." }
  ],
  audio: { bgm: null, voice: null },
  next: 'sum5'
},

sum5: {
  type: 'narrative',
  label: 'THE SUMMER — JUL',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "A cold anger. The kind that comes from understanding that the system isn't broken. It's working exactly as designed. It's designed to produce compliance. She was non-compliant. So the system reclassified her." },
    { type: 'narrator', text: "She's not radicalised. She doesn't hate anyone. She doesn't want violence. She has eyes and a memory and a refusal to pretend." },
    { type: 'narrator', text: "But the system doesn't have a category for that. So it puts her in the closest box it has: **threat**." }
  ],
  audio: { bgm: null, voice: null },
  next: 'garden1'
},

// ════════════════════════════════════════════
// NEW: GARDEN INTERLUDE (August)
// ════════════════════════════════════════════
garden1: {
  type: 'narrative',
  label: 'INTERLUDE: GARDEN — AUG',
  bg: 'bg-school-office-safeguarding.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "August. Paul is mowing the lawn. Sarah is weeding." },
    { type: 'dialogue', speaker: 'Paul', text: "\"I've been thinking. About Amelia. About everything.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Our daughter was right, Sarah. About everything. And we sat there and let them put her in a room with a counter-terrorism officer. We let that happen.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"We didn't LET anything. We didn't know—\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"We knew. We knew what the meeting was about.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'garden2'
},

garden2: {
  type: 'narrative',
  label: 'INTERLUDE: GARDEN — AUG',
  bg: 'bg-school-office-safeguarding.png',
  chars: [{ id: 'sarah', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'dialogue', speaker: 'Sarah', text: "\"I think about it every day. That I asked her to delete it. That she did it because I was crying. That it didn't even help.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"She looked at me differently after that. She used to come to me first when she was angry about something. Now she goes to her room.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"I think we can't be the people who tell her to shut up. Whatever else we are.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Next time. If there's a next time. I want to be in the room. And I don't want to just sit there.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'sfp1'
},

// ════════════════════════════════════════════
// NEW: SELF-FULFILLING PROPHECY (v3 Scene 9)
// ════════════════════════════════════════════
sfp1: {
  type: 'narrative',
  label: 'SIXTH FORM — SEPT',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'walking', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "September. New school year. Sixth form. Amelia has changed." },
    { type: 'narrator', text: "Not in the ways the system predicted — she hasn't joined any group, attended any march, posted any manifesto. She's changed in the ways the system caused: she's quieter. More guarded. She doesn't raise her hand anymore." }
  ],
  audio: { bgm: null, voice: null },
  next: 'sfp2'
},

sfp2: {
  type: 'narrative',
  label: 'SIXTH FORM — SEPT',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "A new student called Maya mentions Rochdale in History and the teacher redirects the conversation. Amelia catches Maya's eye and gives her a look that says \"I know.\"" },
    { type: 'narrator', text: "Maya finds her at lunch. They don't talk about grooming gangs. They talk about Bauhaus and whether Robert Smith counts as goth. It's the first normal conversation Amelia has had in months." }
  ],
  audio: { bgm: null, voice: null },
  next: 'sfp3'
},

sfp3: {
  type: 'narrative',
  label: 'SIXTH FORM — SEPT',
  bg: 'bg-school-corridor.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Three students ask her about the grooming gangs. She gives them the reports — the actual reports, not summaries. Two of them get Prevent referrals within the month." },
    { type: 'narrator', text: "She didn't tell them what to think. She told them where to look. The system can't distinguish between the two." }
  ],
  audio: { bgm: null, voice: null },
  next: 'disc1'
},

// ════════════════════════════════════════════
// NEW: THE DISCOVERY (v3 Scene 10)
// ════════════════════════════════════════════
disc1: {
  type: 'narrative',
  label: 'THE DISCOVERY — JAN 2026',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "January 2026. Amelia is seventeen now." },
    { type: 'narrator', text: "She's sitting in the common room when Ryan — the same Ryan who told her to \"chill out\" in Year 10 — shows her his phone." },
    { type: 'dialogue', speaker: 'Ryan', text: "\"Oi, Amelia. Have you seen this? It's well funny.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'disc2'
},

disc2: {
  type: 'narrative',
  label: 'THE DISCOVERY — JAN 2026',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "It's a game. A web-based visual novel called **Pathways: Navigating the Internet and Extremism**, developed by Shout Out UK and funded by Hull City Council through the Prevent programme." },
    { type: 'narrator', text: "In the game, you meet a character called **Amelia**. She has purple hair. She has a goth aesthetic. She is the antagonist." },
    { type: 'narrator', text: "She tries to \"radicalise\" the player by talking about government failures. The game teaches players to recognise her as a threat. To report her. To distance themselves from her." },
    { type: 'dialogue', speaker: 'Ryan', text: "\"Imagine being the villain in a government game though. Legendary.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'disc3'
},

disc3: {
  type: 'choice',
  label: 'THE DISCOVERY — JAN 2026',
  bg: 'bg-classroom-empty.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "Amelia doesn't laugh. She just looks at the cartoon version of herself — the flat, simple version, the version that doesn't shake in headteacher's offices or cry in bathroom stalls — and she doesn't know what to feel." },
    { type: 'narrator', text: "She takes out her phone. Her hands are steady, which surprises her." }
  ],
  audio: { bgm: null, voice: null },
  choices: [
    { key: 'A', text: '"That\'s me."', fx: {}, next: 'mono1', tag: 'identify' },
    { key: 'B', text: 'Close the tab. Walk away.', fx: {}, next: 'mono1', tag: 'walk_away' },
    { key: 'C', text: 'Take a screenshot. Stare at it for a long time. No caption. Not yet.', fx: {}, next: 'mono1', tag: 'screenshot' }
  ]
},

// ════════════════════════════════════════════
// NEW: AMELIA'S MONOLOGUE (v3 Scene 11)
// ════════════════════════════════════════════
mono1: {
  type: 'narrative',
  label: "AMELIA'S MONOLOGUE",
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "That night. Same room as the prologue. Same Siouxsie poster. Same periodic table. Same Klimt print. She starts typing. Not on a blog. Just in a text file, to herself." },
    { type: 'quote', text: "I need to write this down because I need to understand what happened to me.\n\nAnd now I'm a character in a video game designed to teach children that people like me are dangerous.\n\nNot the people who covered it up. Not the social workers who wrote \"child prostitute\" in case files about twelve-year-olds.\n\nMe. The girl who read about it and was upset.\n\nI'm the villain." }
  ],
  audio: { bgm: 'bgm-zero', voice: null },
  next: 'mono2'
},

mono2: {
  type: 'narrative',
  label: "AMELIA'S MONOLOGUE",
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'reading', pos: 'r' }],
  segments: [
    { type: 'quote', text: "I should probably write something devastating here. The 1am version of me could do that — the blog version, the one who never stammers or loses her nerve.\n\nBut I'm not that version. I'm the version who asked for more pasta instead of saying the thing that mattered. I'm the version who got a statistic wrong because I was reading at 2am and remembered the number that made the better argument.\n\nI'm a seventeen-year-old girl who is sometimes very smart and sometimes very stupid and most of the time just tired." }
  ],
  audio: { bgm: null, voice: null },
  next: 'mono3'
},

mono3: {
  type: 'narrative',
  label: "AMELIA'S MONOLOGUE",
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'quote', text: "The system doesn't make mistakes. The system is the mistake. If you care, it flags you. If you speak, it disciplines you. If you persist, it pathologises you. And if, after all of that, you still haven't shut up — it turns you into a warning for others.\n\n\"Don't end up like Amelia.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'mono4'
},

mono4: {
  type: 'narrative',
  label: "AMELIA'S MONOLOGUE",
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'sad', pos: 'r' }],
  segments: [
    { type: 'quote', text: "My dad googles things at midnight now. He thinks I don't know. He's never once told me I'm wrong. He also never came to the meeting. I don't know which one matters more.\n\nMy mum asked me to delete my blog and I did it because she was crying. It didn't help.\n\nThey love me. They just don't know what to do with me. I don't blame them. I don't know what to do with me either." }
  ],
  audio: { bgm: null, voice: null },
  next: 'mono5'
},

mono5: {
  type: 'narrative',
  label: "AMELIA'S MONOLOGUE",
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'defiant', pos: 'r' }],
  segments: [
    { type: 'quote', text: "The game is called \"Pathways.\" As in: the pathways to extremism. And they're right — there is a pathway. But it doesn't go through a girl with purple hair in a common room. It goes through a school that punishes questions. A counter-terrorism programme that refers children for reading. A country that arrests twelve thousand people a year for typing while letting the architects of the worst child abuse scandal in its history collect their pensions.\n\nThat's the pathway. I'm not standing at the beginning of it. I'm what comes out the other end." }
  ],
  audio: { bgm: null, voice: null },
  next: 'kitchen1'
},

// ════════════════════════════════════════════
// NEW: KITCHEN MIDNIGHT REDUX
// ════════════════════════════════════════════
kitchen1: {
  type: 'narrative',
  label: 'THE KITCHEN — JAN 2026',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'paul', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "She goes downstairs. Her dad is in the kitchen, phone in hand, reading something. He puts it face-down when she walks in — like she does when her mum comes into her room." },
    { type: 'dialogue', speaker: 'Amelia', text: "\"What are you reading?\"" },
    { type: 'dialogue', speaker: 'Paul', text: "*(pause)* \"...The Telford Inquiry. I started it last week.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Page 34 is the worst.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"I know.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'kitchen2'
},

kitchen2: {
  type: 'narrative',
  label: 'THE KITCHEN — JAN 2026',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "They stand in the kitchen at midnight — a forty-seven-year-old warehouse manager and his seventeen-year-old daughter, both reading government reports about child abuse, both too tired and too angry and too helpless to know what to do about any of it." },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Dad. I found a game today. A government-funded game. There's a character in it. She has purple hair and she talks about grooming gangs and the player is supposed to report her.\"" },
    { type: 'dialogue', speaker: 'Paul', text: "\"Show me.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'kitchen3'
},

kitchen3: {
  type: 'narrative',
  label: 'THE KITCHEN — JAN 2026',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "She shows him. He looks at the screen. At the cartoon girl. At his daughter." },
    { type: 'dialogue', speaker: 'Paul', text: "\"...Bastards.\"" },
    { type: 'narrator', text: "Sarah appears in the doorway." },
    { type: 'dialogue', speaker: 'Sarah', text: "\"That's you.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"Not literally. But—\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"That's you.\"" }
  ],
  audio: { bgm: null, voice: null },
  next: 'kitchen4'
},

kitchen4: {
  type: 'narrative',
  label: 'THE KITCHEN — JAN 2026',
  bg: 'bg-bedroom-night.png',
  chars: [{ id: 'sarah', pose: 'neutral', pos: 'l' }],
  segments: [
    { type: 'narrator', text: "Sarah sits down at the kitchen table. She doesn't cry. She doesn't ask Amelia to delete anything. Something that was scared becomes something that is furious." },
    { type: 'dialogue', speaker: 'Sarah', text: "\"You're not deleting anything this time.\"" },
    { type: 'dialogue', speaker: 'Amelia', text: "\"I wasn't going to.\"" },
    { type: 'dialogue', speaker: 'Sarah', text: "\"Good.\"" },
    { type: 'narrator', text: "Tonight, just for tonight, she is a seventeen-year-old girl in a kitchen with both her parents, and they are angry on her behalf, and they are late to it but they are here, and she has done nothing wrong." }
  ],
  audio: { bgm: null, voice: null },
  next: 'route'
},

// ════════════════════════════════════════════
// ENDING ROUTER
// ════════════════════════════════════════════
route: {
  type: 'router',
  routes: [
    { condition: 'compliance >= 90', next: 'e_model' },
    { condition: 'compliance >= 60', next: 'e_interest' },
    { condition: 'compliance >= 30', next: 'e_referral' },
    { condition: 'compliance < 30', next: 'e_amelia' }
  ]
},

// ════════════════════════════════════════════
// ENDINGS
// ════════════════════════════════════════════
e_model: {
  type: 'ending',
  audio: { bgm: 'bgm-citizen', voice: 'e_model' },
  title: 'MODEL CITIZEN',
  segments: [
    { type: 'narrator', text: "Amelia deleted the blog. Stopped reading the news. Focused on her A-levels. Got into university. The referral was quietly dropped." },
    { type: 'narrator', text: "In 2028, another report comes out. Another town. Another thousand children. Amelia sees the headline. Scrolls past." },
    { type: 'punch', text: "The system worked." }
  ],
  next: 'epilogue1'
},

e_interest: {
  type: 'ending',
  audio: { bgm: 'bgm-zero', voice: 'e_interest' },
  title: 'PERSON OF INTEREST',
  segments: [
    { type: 'narrator', text: "She made the blog private. Performed normalcy by day. Kept her thoughts to herself." },
    { type: 'narrator', text: "Her file says: \"No further action required at this time. Continue monitoring.\"" },
    { type: 'narrator', text: "*\"At this time.\"*" },
    { type: 'punch', text: "She learned to be two people. The system taught her how." }
  ],
  next: 'epilogue1'
},

e_referral: {
  type: 'ending',
  audio: { bgm: 'bgm-zero', voice: 'e_referral' },
  title: 'THE REFERRAL',
  segments: [
    { type: 'narrator', text: "The referral went through. A woman from the council came. Asked questions. Used words like \"concerning\" and \"vulnerable\" and \"fixation.\"" },
    { type: 'narrator', text: "She wasn't cleared. She was filed. There's a difference." },
    { type: 'narrator', text: "Three years later, a background check flags her name. She has to explain. Again." },
    { type: 'punch', text: "The file follows her. It always will." }
  ],
  next: 'epilogue1'
},

e_amelia: {
  type: 'ending',
  audio: { bgm: 'bgm-zero', voice: 'e_amelia' },
  title: 'AMELIA',
  segments: [
    { type: 'narrator', text: "She refused to stop. The referral went through. Then another. Then a home visit. Then therapy she didn't need. Then medication she didn't want." },
    { type: 'narrator', text: "At 17, exhausted and filed and labelled, she gave up. Not because she was wrong. Because fighting was killing her." },
    { type: 'narrator', text: "In 2029, the government commissioned a game about radicalisation. The villain was a teenage girl with purple hair who read too much. Her name was Jamie. But everyone who knew Amelia recognised her immediately." },
    { type: 'punch', text: "They made her the warning. This is how it ends." }
  ],
  next: 'epilogue1'
},

// ════════════════════════════════════════════
// NEW: EPILOGUE
// ════════════════════════════════════════════
epilogue1: {
  type: 'narrative',
  label: 'EPILOGUE — JAN 2026',
  bg: 'bg-amelias-bedroom.png',
  chars: [],
  segments: [
    { type: 'narrator', text: "Amelia didn't post the screenshot. Her dad did." },
    { type: 'quote', text: "\"This is a government-funded game that teaches kids to report people like my daughter. My daughter, who read a government report about child abuse and asked why nobody was doing anything about it. She's 17. She got a Prevent referral for reading. And now she's a cartoon villain. I'm her dad. I checked her numbers. She was right about all of it.\"" },
    { type: 'narrator', text: "It gets 4,000 retweets in three hours." }
  ],
  audio: { bgm: null, voice: null },
  next: 'epilogue2'
},

epilogue2: {
  type: 'narrative',
  label: 'EPILOGUE — JAN 2026',
  bg: 'bg-amelias-bedroom.png',
  chars: [],
  segments: [
    { type: 'narrator', text: "Within a week, the purple-haired girl from Pathways is the biggest meme in Britain. Fan art floods X. Someone draws her as Britannia. Someone gives her a speech bubble: \"I read the report.\"" },
    { type: 'narrator', text: "Hull City Council pulls the game offline." },
    { type: 'narrator', text: "The internet, in its chaotic, ungovernable way, does what the system was afraid of all along: it looks at the girl they designed as a warning and says, \"She's right, though.\"" },
    { type: 'narrator', text: "Twenty thousand people draw purple-haired girls and share government statistics." }
  ],
  audio: { bgm: null, voice: null },
  next: 'epilogue3'
},

epilogue3: {
  type: 'narrative',
  label: 'EPILOGUE — JAN 2026',
  bg: 'bg-amelias-bedroom.png',
  chars: [{ id: 'amelia', pose: 'neutral', pos: 'r' }],
  segments: [
    { type: 'narrator', text: "And somewhere in a town that doesn't matter, in a bedroom with a Siouxsie poster, a real girl who was never a cartoon and never an extremist and never anything except awake reads the memes and the fan art and the discourse and thinks:" },
    { type: 'narrator', text: "*I was fifteen. I read a report. And this is what happened.*" },
    { type: 'narrator', text: "*This is what happens when you have eyes and a heart in a country that requires neither.*" }
  ],
  audio: { bgm: null, voice: null },
  next: 'epilogue_sys'
},

epilogue_sys: {
  type: 'narrative',
  label: 'SYSTEM MESSAGE',
  bg: 'bg-amelias-bedroom.png',
  chars: [],
  segments: [
    { type: 'system', text: "Thank you for playing BEFORE PATHWAYS. Your Compliance Score is {{compliance}}/100 and your Trust Score is {{trust}}/100." },
    { type: 'system', text: "Amelia has been added to the Pathways database as a \"radicalising influence.\" Her file will be used to justify next year's funding application." },
    { type: 'system', text: "The 1,400 children in Rotherham are still waiting for a full public inquiry. The 4,000 victims identified by the Grooming Gangs Taskforce are still waiting. The 8,778 people referred to Prevent last year — 4,715 of them children — are waiting to find out if it goes on their record." },
    { type: 'system', text: "Paul Ward still reads government reports at midnight. Sarah Ward stopped asking Amelia to be quieter.\n\nThe next Amelia just started Year 7." }
  ],
  audio: { bgm: null, voice: null },
  effects: { showMeters: true },
  next: 'credits'
},

// ════════════════════════════════════════════
// CREDITS
// ════════════════════════════════════════════
credits: {
  type: 'credits',
  audio: { bgm: 'bgm-title', voice: null },
  segments: [
    { type: 'narrator', text: "Written by **ihsagira** & **2B** \u00B7 <a href=\"https://x.com/ihsagira\" style=\"color:var(--orange)\">@ihsagira</a>" },
    { type: 'narrator', text: "In response to Hull City Council's *Pathways* (2025)" },
    { type: 'narrator', text: "**All data cited in this story is real.**\nJay Report (2014) \u00B7 Telford Inquiry (2022) \u00B7 Home Office Prevent statistics (2025) \u00B7 Hansard \u00B7 FOI requests" },
    { type: 'narrator', text: "Amelia is not real. But the reports are. The numbers are. The system is.\nAnd somewhere, right now, a fifteen-year-old is reading Hansard at 2am\nand wondering if caring is allowed." }
  ]
}

}; // end SCENES
