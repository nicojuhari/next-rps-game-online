# Content Plan: Home Page (/)

**Type:** Page optimization + additions
**Status:** Planned
**Priority:** Quick Win
**Created:** 2026-04-30

---

## Page Purpose & SEO Role

The home page is a **conversion page first, content page second**. Its job:

1. Get the visitor into the 1-player game immediately (above the fold)
2. Rank for navigational/transactional queries: "rock paper scissors online", "rps game free", "rock paper scissors vs computer"
3. Support SEO with rich editorial content (already exists — just needs links out)
4. Cross-promote the 2-player mode
5. Feed traffic to blog articles via internal links

**This page does NOT try to rank for:**
- "how to win rock paper scissors" (→ blog article)
- "rock paper scissors rules" (→ blog article)
- "rock paper scissors statistics" (→ blog article)
- "rock paper scissors online with friends" (→ /two-players)

The strategy/rules/statistics/history sections that already exist serve as depth signals and GEO snippet sources — they do not compete with blog articles because the page's *primary* intent is transactional ("play now").

---

## Target Keywords

| Type | Keyword |
|------|---------|
| Primary | rock paper scissors online |
| Primary | play rock paper scissors online |
| Secondary | rock paper scissors vs computer |
| Secondary | rock paper scissors game online free |
| Secondary | rock paper scissors online free no signup |
| Supporting (depth) | rock paper scissors rules |
| Supporting (depth) | how to win rock paper scissors |
| Supporting (depth) | rock paper scissors statistics |
| Long-tail / GEO | play rock paper scissors online no account no download |

---

## Current Page Structure (what already exists — keep)

```
[H1 Animated] Rock Paper Scissors Online
[Subtitle] Play against the computer or challenge a friend / No download, no account required.
[OnePlayer game widget]
[AdSense]
[HomeContent]:
  - Strategy: "How to Win at Rock Paper Scissors"
  - Rules: "Rock Paper Scissors Rules"
  - Statistics: "Rock Paper Scissors Statistics"
  - History: "What Is Rock Paper Scissors?"
  - FAQ (7 items)
[Footer: privacy link]
```

---

## What to ADD

### Addition 1 — "Challenge a Friend" CTA Banner

**Where:** Between the OnePlayer game widget and the AdSense/HomeContent section

**Purpose:** Users who land on the home page to play solo should see a clear path to the multiplayer mode. Currently there is no in-page CTA to /two-players below the game widget — only the header link.

**Content:**

```
[Section: subtle card or banner]
H3: Want to challenge a friend?
Text: Create a private game room, share the link, and play in real time.
      No account needed on either side.
CTA button: "Play With a Friend →" → /two-players
```

**Design note:** Should be visually lighter than the game widget — a soft banner, not a competing hero. The game widget is primary above the fold.

**Keyword alignment:** This section helps the home page capture "challenge a friend online" intent without competing with /two-players for its primary keywords.

---

### Addition 2 — Internal Links from Existing Content Sections

The HomeContent sections (strategy, rules, statistics, history) are great for depth — but they are teasers with no outbound links. Adding "Read more →" links to each blog article serves two goals:
1. Signals to Google that those articles are the authoritative source for those topics
2. Sends engaged readers into the blog content funnel → more page views → more ad impressions

**Links to add:**

| Content Section | Link Text | Target URL |
|----------------|-----------|-----------|
| Strategy (end of section) | "Read the full strategy guide →" | /blog/how-to-win-rock-paper-scissors |
| Rules (end of section) | "See the complete rules →" | /blog/rock-paper-scissors-rules |
| Statistics (end of section) | — (no blog article planned yet; skip) | — |
| History (end of section) | — (no blog article planned yet; skip) | — |

**Implementation:** Add translation key for each link text. Add `<Link href="...">` after the last `<p>` in each relevant HomeContent card.

---

### Addition 3 — Expanded FAQ (3 new items)

The current FAQ (7 items) covers core "what beats what" and no-signup questions. These 3 new items fill PAA gaps not currently addressed — and are structured for GEO snippet extraction.

Add to the end of the FAQ in `en.json` under `home.faq.items` and `jsonLd.faqHome`:

**New FAQ item 1:**
```json
{
  "q": "Can I play Rock Paper Scissors online with someone in a different country?",
  "a": "Yes. The game works in any browser, anywhere. Share the game link and both players can join from any country, any device, with no app or account required."
}
```

**New FAQ item 2:**
```json
{
  "q": "How does the computer pick its move? Is it rigged?",
  "a": "The computer picks randomly every time — Rock, Paper, and Scissors each have an equal 1 in 3 chance. There is no pattern, no adjustment based on your history, and no tricks."
}
```

**New FAQ item 3:**
```json
{
  "q": "Is Rock Paper Scissors online better than texting it?",
  "a": "Yes, because both players reveal their move at exactly the same time. In a texted game, one player can delay their response to react to the other's choice. Online, both moves are locked in and revealed simultaneously — no peeking, no cheating."
}
```

---

### Addition 4 — Meta Optimization

**Current title:** "Rock Paper Scissors Online - Play Free vs Computer"
**Current description:** "Play Rock Paper Scissors online for free. Challenge the computer instantly - no download, no account required. Best-of-3 rounds, works on all devices."

Both are solid. Minor improvements:

**Improved title (add "No Signup"):**
```
Rock Paper Scissors Online — Free, No Signup
```
*Why: "No Signup" is a strong conversion signal in the SERP and is in our brand vocabulary.*

**Improved description (add simultaneous reveal signal):**
```
Play Rock Paper Scissors online for free — vs computer or with a friend. Simultaneous reveal, best-of-3. No account, no download, works on any device.
```
*Why: "Simultaneous reveal" differentiates from competitors and answers a PAA question directly in the snippet.*

---

## What NOT to Change

- The H1 structure and animation — it's already keyword-rich and visually distinctive
- The strategy/rules/statistics/history content — it's well-written and GEO-ready as-is
- The FAQ structure — just add to it, don't replace
- The OnePlayer game widget — it's the primary CTA, leave it above the fold
- The footer privacy link — leave as-is

---

## Internal Linking Map

```
Home page (/) links TO:
├── /two-players             "Play With a Friend →" (new CTA banner)
├── /blog/how-to-win-rock-paper-scissors   "Read the full strategy guide →" (new)
└── /blog/rock-paper-scissors-rules        "See the complete rules →" (new)

Home page (/) receives links FROM:
├── All 6 blog articles      "Play now →" or "Try it free →" CTA in each
├── /two-players             "Practice solo first →" (new on that page)
└── /blog/how-to-play-rps-online-with-friends  "1-player vs computer →" option
```

---

## GEO Optimization Notes

The existing content sections are already well-structured for GEO. Key improvements:

1. **The "Is it better than texting?" FAQ item** (Addition 3) directly targets the AI question "what's the best way to play rock paper scissors with someone online?" — structured as a short, self-contained answer.

2. **The history.fairPlay text** already contains a perfect GEO snippet:
   > "On rps-game.online, both players commit their choice privately before either result is shown, so every match is genuinely fair."
   This should stay exactly as-is — it's already answer-first and extractable.

3. **Ensure consistent entity usage:** The page uses "rps-game.online" in one place — consider adding the full phrase "Rock Paper Scissors Online" once in each major section for entity reinforcement.

---

## Schema Markup (existing — verify and keep)

- `FAQPage` JSON-LD is already implemented via `jsonLd.faqHome` — good
- Consider adding `WebApplication` or `VideoGame` schema for the game itself (currently not present)

---

## Implementation Summary

| Change | File | Effort |
|--------|------|--------|
| "Challenge a friend" CTA banner | New component or inline in page.tsx | Medium |
| Internal links from HomeContent sections | HomeContent.tsx + en.json | Small |
| 3 new FAQ items | en.json (home.faq.items + jsonLd.faqHome) | Small |
| Meta title/description update | en.json (meta.home.title + .description) | Trivial |

**Total effort:** ~2-3 hours of implementation

---

## CTA Summary

| CTA | Text | Target | Placement |
|-----|------|--------|-----------|
| Primary | (game widget — already exists) | Play inline | Above fold |
| Secondary | "Play With a Friend →" | /two-players | Below game widget |
| Tertiary | "Read the full strategy guide →" | /blog/how-to-win-rps | End of strategy section |
| Tertiary | "See the complete rules →" | /blog/rps-rules | End of rules section |
