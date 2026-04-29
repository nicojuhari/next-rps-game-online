# i18n Plan — Spanish (es) + Portuguese (pt)

**Languages:** English (default, no prefix), Spanish (`/es/`), Portuguese (`/pt/`)
**Approach:** Explicit locale directories. English stays untouched at `/`, `/two-players`, `/privacy`. New locales get their own directories with translated slugs.

---

## URL Map

| Page          | English (default)  | Spanish                  | Portuguese                  |
| ------------- | ------------------ | ------------------------ | --------------------------- |
| Home          | `/`                | `/es/`                   | `/pt/`                      |
| Two Players   | `/two-players`     | `/es/dos-jugadores`      | `/pt/dois-jogadores`        |
| Privacy       | `/privacy`         | `/es/privacidad`         | `/pt/privacidade`           |

---

## Step 1 — Create the translation type

**File to create:** `lib/i18n/types.ts`

Define a `Translations` TypeScript type that mirrors every user-facing string in the app. This is the source of truth — every other translation file must match this shape exactly. Include:

- `meta`: page titles, descriptions, keywords (per page: home, twoPlayers, privacy)
- `home`: H1, subtitle, all HomeContent sections (strategy, rules, statistics, history, FAQ)
- `twoPlayers`: H1, all TwoPlayersContent sections (how-to steps, 1v1 section, why-settle section, FAQ)
- `privacy`: H1, all section titles and body text, delete button, alert message
- `header`: nav link text
- `footer`: footer text
- `mainCTA`: all labels, placeholder, button text
- `onePlayer`: score header labels, game labels, certificate badge text
- `gameBoard`: score header labels, game labels, certificate badge text
- `tableBoard`: column headers (You, Computer / 2nd Player, Results)
- `gameOverlay`: win/draw/lose headline + subtitle, button labels
- `gameResults`: result messages, share link text
- `joinGame`: invitation text, join button
- `waitingPlayer`: room created text, share prompt, copy button
- `jsonLd`: VideoGame schema description, FAQPage questions + answers (home + twoPlayers)

---

## Step 2 — Create the English translation file

**File to create:** `lib/i18n/en.ts`

Extract every hardcoded English string from the codebase into this file. No logic — only strings. This file becomes the canonical reference before writing Spanish and Portuguese.

Strings to extract (by component):

**HomeContent:**
- Section titles (H2): "How to Win at Rock Paper Scissors", "Rock Paper Scissors Rules", "Rock Paper Scissors Statistics", "What Is Rock Paper Scissors?", "Frequently Asked Questions"
- All paragraph text, list items, strategy tips, FAQ Q&As

**TwoPlayersContent:**
- H1: "Play Rock Paper Scissors Online with Friends"
- Section titles and body: How to Play (steps 1–4), 1v1 section, Why Settle section, FAQ Q&As

**OnePlayer / GameBoard:**
- "You", "Bot", "Friend", "Play vs Computer", "Play vs Friend"
- "Pick your move"
- Button labels: "Rock", "Paper", "Scissors"
- "Reset the Score"
- "Get your winner's certificate"
- "Win more games than the bot to unlock your certificate."
- "Win more games than your friend to unlock your certificate."

**TableBoard:**
- "You", "Computer", "2nd Player", "Results"

**GameOverlay:**
- win: headline "You Win!", sub "Nicely done. Ready for another round?"
- draw: headline "It's a Draw!", sub "So close. Want to settle it?"
- lose: headline "You Lost.", sub "Don't give up - play again!"
- Buttons: "Get Certificate", "Play Again"

**GameResults:**
- "You Won!", "It's a Draw!", "You Lost.", "Share score"

**JoinGame:**
- "You are invited to play RPS online!"
- "Join the Game"

**WaitingPlayerTwo:**
- "You created this game room" ← fix typo (currently "You a created this room game")
- "Share the link with someone to start playing!"
- "Copy the Link", "Copying ..."

**MainCTA:**
- "What's at stake?", "(optional)"
- Placeholder: "e.g., who goes first, who washes dishes, etc."
- "Create a Game", "No account needed"

**Header:**
- "Play with a Friend"

**Footer:**
- "Created with ❤ by Nick" (keep as-is across all locales — not translated)

**PrivacyPolicy:**
- H1: "Privacy Assurance"
- All 6 section titles + body paragraphs
- Button: "Delete My Game Data"
- Alert: "Your game data has been deleted."

**Page metadata:**
- Home: title, description, keywords array
- Two-players: title, description, keywords array
- Privacy: title, description, keywords array

**JSON-LD:**
- VideoGame schema: name, description, featureList
- FAQPage (home): all 7 Q&A pairs
- FAQPage (two-players): all 7 Q&A pairs

---

## Step 3 — Create the Spanish translation file

**File to create:** `lib/i18n/es.ts`

Must implement the same `Translations` type as `en.ts`. Full translation list:

**Page metadata:**

Home:
- title: `"Piedra Papel Tijeras Online — Juega Gratis vs Computadora | Sin Registro"`
- description: `"Juega Piedra Papel Tijeras online gratis. Desafía a la computadora al instante — sin descarga, sin cuenta requerida. Mejores de 3 rondas, funciona en todos los dispositivos."`
- keywords: `["piedra papel tijeras online", "jugar piedra papel tijeras online", "rps juego online", "piedra papel tijeras gratis", "piedra papel tijeras sin registro", "piedra papel tijeras vs computadora", "juego rps online"]`

Two-players:
- title: `"Piedra Papel Tijeras con Amigos Online — Multijugador en Tiempo Real | Sin Registro"`
- description: `"Desafía a un amigo a Piedra Papel Tijeras online en tiempo real. Comparte el enlace, elige tus movimientos, descubre quién gana. Gratis, sin inicio de sesión, funciona en cualquier dispositivo."`
- keywords: `["piedra papel tijeras multijugador", "piedra papel tijeras con amigos online", "rps multijugador online", "piedra papel tijeras en tiempo real", "piedra papel tijeras dos jugadores", "sin registro"]`

Privacy:
- title: `"Política de Privacidad — Piedra Papel Tijeras Online"`
- description: `"Conoce nuestras prácticas de privacidad y protección de datos para Piedra Papel Tijeras Online."`

**H1 / Hero:**
- Home H1 label: `"Gratis · Sin Registro"`
- Home H1 main text: `"Piedra Papel Tijeras Online"` (keep same colored span structure)
- Home subtitle: `"Juega contra la computadora o desafía a un amigo\nSin descarga, sin cuenta requerida."`

Two-players H1: `"Juega Piedra Papel Tijeras Online con Amigos"`

**HomeContent sections:**
- "Cómo Ganar en Piedra Papel Tijeras"
- "Reglas de Piedra Papel Tijeras"
- "Estadísticas de Piedra Papel Tijeras"
- "¿Qué es Piedra Papel Tijeras?"
- "Preguntas Frecuentes"
- Translate all body paragraphs, list items, strategy tips

**TwoPlayersContent sections:**
- "Cómo Jugar Piedra Papel Tijeras Online con Amigos"
- "Piedra Papel Tijeras 1v1 — Cómo Funciona"
- "¿Por Qué Decidirlo con Piedra Papel Tijeras?"
- "Preguntas Frecuentes"
- Translate all steps, body, FAQ Q&As

**UI strings:**
- "Tú", "Bot", "Amigo", "Jugar vs Computadora", "Jugar vs Amigo"
- "Elige tu movimiento"
- "Piedra", "Papel", "Tijeras"
- "Reiniciar Puntuación"
- "Obtén tu certificado de ganador"
- "Gana más partidas que el bot para desbloquear tu certificado."
- "Gana más partidas que tu amigo para desbloquear tu certificado."
- "Tú", "Computadora", "2.º Jugador", "Resultado"
- win: "¡Ganaste!", "Bien hecho. ¿Listo para otra ronda?"
- draw: "¡Empate!", "Tan cerca. ¿Quieres resolverlo?"
- lose: "Perdiste.", "No te rindas — ¡juega de nuevo!"
- "Obtener Certificado", "Jugar de Nuevo"
- "¡Ganaste!", "¡Empate!", "Perdiste.", "Compartir puntuación"
- "¡Estás invitado a jugar RPS online!"
- "Unirse al Juego"
- "Creaste esta sala de juego"
- "¡Comparte el enlace con alguien para empezar a jugar!"
- "Copiar el Enlace", "Copiando ..."
- "¿Qué está en juego?", "(opcional)"
- Placeholder: "ej., quién va primero, quién lava los platos, etc."
- "Crear una Partida", "Sin cuenta requerida"
- "Jugar con un Amigo"

**PrivacyPolicy (es):**
- H1: "Garantía de Privacidad"
- All 6 sections translated
- Button: "Eliminar Mis Datos de Juego"
- Alert: "Tus datos de juego han sido eliminados."

**JSON-LD (es):**
- VideoGame description in Spanish
- All 7 FAQPage Q&As for home in Spanish
- All 7 FAQPage Q&As for two-players in Spanish

---

## Step 4 — Create the Portuguese translation file

**File to create:** `lib/i18n/pt.ts`

Same shape as `es.ts`. Full translation list:

**Page metadata:**

Home:
- title: `"Pedra Papel Tesoura Online — Jogue Grátis vs Computador | Sem Cadastro"`
- description: `"Jogue Pedra Papel Tesoura online de graça. Desafie o computador instantaneamente — sem download, sem conta necessária. Melhor de 3 rodadas, funciona em qualquer dispositivo."`
- keywords: `["pedra papel tesoura online", "jogar pedra papel tesoura online", "jogo rps online", "pedra papel tesoura grátis", "pedra papel tesoura sem cadastro", "pedra papel tesoura vs computador", "jogar rps online"]`

Two-players:
- title: `"Pedra Papel Tesoura com Amigos Online — Multijogador em Tempo Real | Sem Cadastro"`
- description: `"Desafie um amigo para Pedra Papel Tesoura online em tempo real. Compartilhe o link, escolha seus movimentos, veja quem ganha. Grátis, sem login, funciona em qualquer dispositivo."`
- keywords: `["pedra papel tesoura multijogador", "pedra papel tesoura com amigos online", "rps multijogador online", "pedra papel tesoura em tempo real", "pedra papel tesoura dois jogadores", "sem cadastro"]`

Privacy:
- title: `"Política de Privacidade — Pedra Papel Tesoura Online"`
- description: `"Saiba sobre nossas práticas de privacidade e proteção de dados para Pedra Papel Tesoura Online."`

**H1 / Hero:**
- Home H1 label: `"Grátis · Sem Cadastro"`
- Home H1 main text: `"Pedra Papel Tesoura Online"`
- Home subtitle: `"Jogue contra o computador ou desafie um amigo\nSem download, sem conta necessária."`

Two-players H1: `"Jogue Pedra Papel Tesoura Online com Amigos"`

**HomeContent sections:**
- "Como Vencer no Pedra Papel Tesoura"
- "Regras do Pedra Papel Tesoura"
- "Estatísticas do Pedra Papel Tesoura"
- "O Que é Pedra Papel Tesoura?"
- "Perguntas Frequentes"
- Translate all body paragraphs

**TwoPlayersContent sections:**
- "Como Jogar Pedra Papel Tesoura Online com Amigos"
- "Pedra Papel Tesoura 1v1 — Como Funciona"
- "Por Que Decidir com Pedra Papel Tesoura?"
- "Perguntas Frequentes"
- Translate all steps, body, FAQ Q&As

**UI strings:**
- "Você", "Bot", "Amigo", "Jogar vs Computador", "Jogar vs Amigo"
- "Escolha seu movimento"
- "Pedra", "Papel", "Tesoura"
- "Reiniciar Placar"
- "Obtenha seu certificado de vencedor"
- "Ganhe mais jogos que o bot para desbloquear seu certificado."
- "Ganhe mais jogos que seu amigo para desbloquear seu certificado."
- "Você", "Computador", "2.º Jogador", "Resultado"
- win: "Você Ganhou!", "Muito bem. Pronto para mais uma rodada?"
- draw: "Empate!", "Tão perto. Quer resolver?"
- lose: "Você Perdeu.", "Não desista — jogue de novo!"
- "Obter Certificado", "Jogar Novamente"
- "Você Ganhou!", "Empate!", "Você Perdeu.", "Compartilhar placar"
- "Você foi convidado para jogar RPS online!"
- "Entrar no Jogo"
- "Você criou esta sala de jogo"
- "Compartilhe o link com alguém para começar a jogar!"
- "Copiar o Link", "Copiando ..."
- "O que está em jogo?", "(opcional)"
- Placeholder: "ex.: quem vai primeiro, quem lava a louça, etc."
- "Criar uma Partida", "Sem conta necessária"
- "Jogar com um Amigo"

**PrivacyPolicy (pt):**
- H1: "Garantia de Privacidade"
- All 6 sections translated
- Button: "Excluir Meus Dados de Jogo"
- Alert: "Seus dados de jogo foram excluídos."

**JSON-LD (pt):**
- VideoGame description in Portuguese
- All 7 FAQPage Q&As for home in Portuguese
- All 7 FAQPage Q&As for two-players in Portuguese

---

## Step 5 — Create the `getTranslations` helper

**File to create:** `lib/i18n/index.ts`

```typescript
import en from "./en";
import es from "./es";
import pt from "./pt";
import type { Translations } from "./types";

export type Locale = "en" | "es" | "pt";

const translations: Record<Locale, Translations> = { en, es, pt };

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations.en;
}
```

---

## Step 6 — Refactor components to accept a `t` prop

Update every component that contains user-facing text to receive a `t: Translations` prop instead of hardcoded strings. Do NOT change any logic, styling, or structure — only replace string literals.

Components to update (in this order, simplest first):

1. `components/Footer.tsx` — keep as-is (no translation needed, "Created by Nick" stays)
2. `components/Header.tsx` — add `t` prop, replace "Play with a Friend"
3. `components/JoinGame.tsx` — add `t` prop
4. `components/WaitingPlayerTwo.tsx` — add `t` prop + fix typo "You a created this room game" → use `t.waitingPlayer.roomCreated`
5. `components/TableBoard.tsx` — add `t` prop for column headers
6. `components/GameResults.tsx` — add `t` prop
7. `components/GameOverlay.tsx` — add `t` prop for CONFIG win/draw/lose strings + buttons
8. `components/MainCTA.tsx` — add `t` prop for all labels and placeholder
9. `components/PrivacyPolicy.tsx` — add `t` prop for full content
10. `components/HomeContent.tsx` — add `t` prop for all text
11. `components/TwoPlayersContent.tsx` — add `t` prop for all text
12. `components/GameBoard.tsx` — add `t` prop (passes `t` down to TableBoard, GameOverlay)
13. `components/OnePlayer.tsx` — add `t` prop (passes `t` down to TableBoard, GameOverlay)

**Pass `t` down the tree:** `app/page.tsx` → `OnePlayer` → `TableBoard` + `GameOverlay`; `app/two-players/page.tsx` → `TwoPlayersContent` → `GameBoard` → `TableBoard` + `GameOverlay`.

---

## Step 7 — Update English pages to pass `t`

**Files to update:** `app/page.tsx`, `app/two-players/page.tsx`, `app/privacy/page.tsx`

Import `getTranslations` and pass `t = getTranslations("en")` to every component that now requires it. English behavior should be identical to before — this step is a refactor, not a visible change.

Also update `app/layout.tsx`: pass `t` to `Header` component. Since `Header` is in the root layout and doesn't know the locale yet, create a `locale` prop or use a different approach — see Step 8.

---

## Step 8 — Handle locale in the root layout

The root `app/layout.tsx` wraps all pages including `/es/` and `/pt/`. To make `Header` locale-aware:

- The easiest approach: do NOT pass `t` to `Header` from layout. Instead, create a separate `HeaderWrapper` client component that reads the current pathname and picks the right locale.
- OR: each locale's layout (`app/es/layout.tsx`, `app/pt/layout.tsx`) overrides the header.

**Recommended:** Create `app/es/layout.tsx` and `app/pt/layout.tsx` that wrap content with a locale-specific `Header`. This keeps the root layout clean.

```
app/
  layout.tsx          ← English layout (passes en Header)
  es/
    layout.tsx        ← Spanish layout (passes es Header)
  pt/
    layout.tsx        ← Portuguese layout (passes pt Header)
```

---

## Step 9 — Create Spanish page files

**Files to create:**

```
app/es/page.tsx               ← Spanish home
app/es/dos-jugadores/page.tsx ← Spanish two-players
app/es/privacidad/page.tsx    ← Spanish privacy
```

Each page:
1. Calls `getTranslations("es")`
2. Exports `metadata` using `t.meta.home` (or `twoPlayers` / `privacy`) strings + `createMetadata()`
3. Renders the same components as the English version but passes `t` prop
4. Adds `hreflang` alternates in metadata (see Step 11)
5. Includes FAQPage JSON-LD from `t.jsonLd.faqHome` or `t.jsonLd.faqTwoPlayers`

---

## Step 10 — Create Portuguese page files

Same structure as Step 9 but for `pt`:

```
app/pt/page.tsx
app/pt/dois-jogadores/page.tsx
app/pt/privacidade/page.tsx
```

---

## Step 11 — Add `hreflang` alternates to all pages

Update `createMetadata()` in `lib/metadata.ts` (or pass directly in each page's metadata export) to include `alternates.languages`:

```typescript
alternates: {
  canonical: "https://rps-game.online/",       // English page
  languages: {
    "en": "https://rps-game.online/",
    "es": "https://rps-game.online/es/",
    "pt": "https://rps-game.online/pt/",
    "x-default": "https://rps-game.online/",
  },
}
```

Add to every page (home, two-players, privacy) in all three locales, pointing to the correct URL per language pair.

---

## Step 12 — Update the sitemap

**File to update:** `app/sitemap.ts`

Add all 9 new locale URLs (3 pages × 2 new locales). Also add `lastModified`, `changeFrequency`, `priority` for each.

```typescript
// Spanish
{ url: "https://rps-game.online/es/", priority: 0.9 },
{ url: "https://rps-game.online/es/dos-jugadores", priority: 0.8 },
{ url: "https://rps-game.online/es/privacidad", priority: 0.3 },
// Portuguese
{ url: "https://rps-game.online/pt/", priority: 0.9 },
{ url: "https://rps-game.online/pt/dois-jogadores", priority: 0.8 },
{ url: "https://rps-game.online/pt/privacidade", priority: 0.3 },
```

---

## Step 13 — Update the VideoGame JSON-LD in the root layout

The root layout's VideoGame schema should only apply to the English version. Each locale layout (`app/es/layout.tsx`, `app/pt/layout.tsx`) should include its own VideoGame JSON-LD with a translated `name` and `description`.

Spanish VideoGame name: `"Piedra Papel Tijeras Online"`
Portuguese VideoGame name: `"Pedra Papel Tesoura Online"`

---

## Step 14 — Add a language switcher to the Header

Once all locales are live, add a small language selector to the Header so users can switch between EN / ES / PT. It should:

- Show the current locale as active
- Link to the equivalent page in the other languages (not always root — `/es/dos-jugadores` from `/two-players`, etc.)
- Be lightweight (3 short text links, no flag images needed)

This requires the Header to know both the current locale AND the current page slug so it can build the right cross-locale URL.

---

## Step 15 — QA checklist

For each of the 9 locale pages:

- [ ] Page renders without console errors
- [ ] Title tag shows the correct translated title
- [ ] Meta description is present and translated
- [ ] H1 text is correct and in the right language
- [ ] All H2/H3 headings are translated
- [ ] All body text, lists, and FAQs are translated
- [ ] Buttons and labels are translated
- [ ] JSON-LD structured data validates at https://validator.schema.org/
- [ ] `hreflang` tags are present and point to the correct URLs
- [ ] Sitemap.xml includes all 9 new URLs
- [ ] No English strings leak into Spanish or Portuguese pages
- [ ] Game functionality (create game, join game, play) works on `/es/dos-jugadores` and `/pt/dois-jogadores`
- [ ] Certificate modal text is translated
- [ ] Privacy policy delete button works in all locales

---

## File creation summary

| File | Action |
|---|---|
| `lib/i18n/types.ts` | Create |
| `lib/i18n/en.ts` | Create |
| `lib/i18n/es.ts` | Create |
| `lib/i18n/pt.ts` | Create |
| `lib/i18n/index.ts` | Create |
| `app/es/layout.tsx` | Create |
| `app/es/page.tsx` | Create |
| `app/es/dos-jugadores/page.tsx` | Create |
| `app/es/privacidad/page.tsx` | Create |
| `app/pt/layout.tsx` | Create |
| `app/pt/page.tsx` | Create |
| `app/pt/dois-jogadores/page.tsx` | Create |
| `app/pt/privacidade/page.tsx` | Create |
| `components/Header.tsx` | Update |
| `components/JoinGame.tsx` | Update |
| `components/WaitingPlayerTwo.tsx` | Update + fix typo |
| `components/TableBoard.tsx` | Update |
| `components/GameResults.tsx` | Update |
| `components/GameOverlay.tsx` | Update |
| `components/MainCTA.tsx` | Update |
| `components/PrivacyPolicy.tsx` | Update |
| `components/HomeContent.tsx` | Update |
| `components/TwoPlayersContent.tsx` | Update |
| `components/GameBoard.tsx` | Update |
| `components/OnePlayer.tsx` | Update |
| `app/page.tsx` | Update (pass `t`) |
| `app/two-players/page.tsx` | Update (pass `t`) |
| `app/privacy/page.tsx` | Update (pass `t`) |
| `app/layout.tsx` | Update (pass `t` to Header) |
| `app/sitemap.ts` | Update |
| `lib/metadata.ts` | Update (hreflang support) |
