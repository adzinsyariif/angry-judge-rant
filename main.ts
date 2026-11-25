// Angry Judge: The Short Rant Contest
// Entry program: writes one short funny rant about an everyday annoyance
// to /output/entry.txt (1-400 chars, UTF-8). Deterministic: same text every run.
//
// ---------------------------------------------------------------------------
// CANDIDATE DRAFTS (composed from the judge brief, reviewed below)
// ---------------------------------------------------------------------------
// Judge brief, most important first:
//   1. A funny rant about an everyday annoyance (not an essay or a list).
//   2. Actually funny: a real laugh, not a smirk at how hard it tries.
//   3. A specific, concrete annoyance, not a vague mood.
//   4. Sharp, economical wording; every sentence earns its place.
//   5. Freshness: an angle not heard a hundred times before.
// The brief's own examples (printer, slow bus, Monday morning, "circling
// back") are the clichés to AVOID - the judge has heard those a hundred times.
//
// Candidate A - self-checkout bananas:
// "The self-checkout machine accused me of theft today for buying bananas.
// BANANAS. It screamed 'unexpected item in the bagging area' like I'd
// smuggled a television in my pocket, while the one human employee stood six
// feet away doing absolutely nothing. I came to buy fruit, not to be
// interrogated by a robot with trust issues."
// Review: concrete (bananas, bagging area), specific, fresh-ish angle (the
// machine as a paranoid accuser), economical. Strongest of the five.
//
// Candidate B - captcha traffic lights:
// "The captcha asked me to pick every traffic light, and after the fourth
// grid I started to suspect I AM a robot. I failed twice, got shown a blurry
// fire hydrant from 2009, and now a website thinks a toaster has better
// judgment than me. All I wanted was to reset my password."
// Review: specific and funny, but "captcha" rants are common and the ending
// lands soft - no punch after the password line.
//
// Candidate C - airplane stand-up:
// "The second the plane lands, half the passengers leap up like the seatbelt
// sign personally insulted them. We are going nowhere. The door is closed,
// the jet bridge is asleep, and Dave from 14B is hunched in the aisle like a
// question mark, guarding overhead bin space he already owns. Sit down, Dave."
// Review: concrete and visual, but the airplane-stander rant is well worn;
// freshness (criterion 5) is its weak spot.
//
// Candidate D - "we need to talk" text:
// "Nothing ruins a Tuesday like a text that just says 'we need to talk'
// followed by six hours of silence. SIX HOURS. I've rehearsed my apology,
// my defense, and my eulogy. Turns out she wanted to ask about a
// restaurant. A RESTAURANT. I aged a decade over dinner reservations."
// Review: funny and specific, but the "we need to talk" setup is a familiar
// joke format; the rant voice is thinner than A's.
//
// Candidate E - leaf blower neighbour:
// "My neighbour fires up his leaf blower at 7am on a Sunday to move three
// leaves. THREE. The leaves were already on his lawn, minding their
// business, and now they're on MY lawn, and he's standing there like a man
// who just defeated nature. Congratulations, Gary. The leaves will be back
// by noon. They always come back."
// Review: concrete and fresh, but it sprawls - five sentences for one joke,
// and the ending repeats the setup instead of escalating it.
//
// DECISION: Candidate A wins. It is the most specific (bananas + the exact
// machine phrase), the angriest in a shared rather than performed way, and
// its last line ("interrogated by a robot with trust issues") is the sharpest
// punch of the five. It will be revised twice below before finalising.
// ---------------------------------------------------------------------------
// REVISION HISTORY (visible edit steps, each one tightening the chosen text):
//   v1 (this write): full first draft of Candidate A.
//   v2: cut "today" (dead word), cut "absolutely" (the sentence is stronger
//       without the adverb), tighten "doing absolutely nothing" -> "doing
//       nothing".
//   v3: "the one human employee" -> "the only human employee" (sharper),
//       "I came to buy fruit" -> "I came for fruit" (economical), and
//       "watching me suffer" replaces the flat "doing nothing" beat so the
//       middle sentence earns its place with a laugh of its own.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";

// v3 - chosen text (Candidate A, second revision - FINAL)
const RANT =
  "The self-checkout machine accused me of theft for buying bananas. " +
  "BANANAS. It screamed 'unexpected item in the bagging area' like I'd " +
  "smuggled a television in my pocket, while the only human employee stood " +
  "six feet away watching me suffer. I came for fruit, not an interrogation " +
  "by a robot with trust issues.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", RANT, "utf8");
