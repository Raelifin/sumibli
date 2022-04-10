📛Specification
&nbsp; of Grammar

the full details of how
to interpret sound/writing
as meaningful expression

🔗\🎓
🔗\🧠
🔗\🌳
🔗\📚

This page will be pretty technical. It's recommended that you at least read 🔗\🎓 the basics💬 before diving in, but it's not strictly necessary. If formal systems are not your cup of tea, don't worry about reading this page. Sumibli is meant to be easy to learn and speak without having to dig into the math behind it. It's simply good if 🔈somebody💬 knows the answer to technicals question about the language, and this document serves as a resource for that.

📑

📛Prerequisites

This document will include definitions written in a simple formal language. Each definition consists of a name for the thing being defined, then a "≔" symbol, then the structure of the thing being defined.

The "\|" symbol indicates that the structure can either be the thing on the left of the pipe or the thing on the right. Multiple "\|" symbols indicates multiple options. Each option is called "a constructor", because it describes a way of building an instance of the named thing. Constructors are distinct even though they're not named (in this document).

The "&" symbol indicates the structure consists of both the thing on the left of the ampersand and the thing on the right. Multiple "&" symbols indicate a structure with many parts. Ampersands have a higher precedence than pipes, meaning expressions like 💻a \| b & c💬 should be read as 💻a \| (b & c)💬.

Variables that define families of definitions are upper-case single-letters. The phrase "💻optional X💬" refers to a structure that can either be empty or can have a single X in it. We'll also use "X?" as a synonym for "💻(optional X)💬". The term "💻bit💬" (aka "bool") refers to a structure that can either be "💻lo💬" or "💻hi💬". The phrase "💻enforced X B💬" refers to a structure that can either have a single X, or if B = lo, can also be empty. The phrase "💻list X💬" refers to a structure that consists of zero or more X's in some order. The phrase "💻list1 X💬" is a non-empty list of X's.

A "💻fancy-list X💬" takes a 🔈family💬 of structures (X) that's parameterized on two bits. The fancy-list contains zero or more items, just like a normal list. Each item in the fancy-list is an X, where the first bit is lo iff the X is the first item and the second bit is lo iff it's the last item. Thus, a fancy list with four items would be [X lo hi, X hi hi, X hi hi, X hi lo].

The syntax "💻A : B💬" indicates that we're giving the name "A" to the B structure for the sake of discussing it. If an equality (or inequality) shows up in a structure, it is an unspoken/unwritten constraint on that constructor. For instance, "💻(A : bit) & (B : bit) & (A = B)💬" means we have two bits that must be equal.

📛The Alphabet

We start by defining a type of letter ("isaimai") that can either be a consonant ("ufamglanai") or a vowel ("ufamglakau").

💻isaimai ≔ ufamglanai \| ufamglakau

Consonants can either be standard ("ufamglanaiva") or weird ("ufamglanaivla").

💻ufamglanai ≔ ufamglanaiva \| ufamglanaivla

💻ufamglanaiva
  ≔ thip \| thub \| thit \| thud \| thik \| thug
  \| thin \| thum \| thif \| thuv \| this \| thuz

💻ufamglanaivla ≔ thih \| thux \| thij \| thur \| thil

💻ufamglakau ≔ thui \| thua \| thau

The order of the letters is as presentend above – ufamglanaiva < ufamglanaivla < ufamglakau. Each letter has a representation in sound, the Latin alphabet, and the Sumibli alphabet ("sumibligli"). For sound and Latin text, there a sometimes multiple ways to express a letter. When multple ways are profided, the first way is the preferred way, except with thux. The letter thux is pronounced as ð at the start of a syllable and θ at the end.

|isaimai|Latin
representation|sumibligli
representation|international
phonetic
alphabet
representation
|--------------------------
|thip|p|🎏p|p
|thub|b|🎏b|b
|thit|t|🎏t|t
|thud|d|🎏d|d
|thik|k|🎏k|k
|thug|g|🎏g|g
|thin|n|🎏n|n, ŋ
|thum|m|🎏m|m
|thif|f|🎏f|f
|thuv|v|🎏v|v
|this|s|🎏s|s
|thuz|z|🎏z|z
|thih|h|🎏h|h
|thux|th, x|🎏x|ð or θ
|thij|sh, j|🎏j|ʃ, ʒ
|thur|r|🎏r|ɹ, ɾ, r
|thil|l|🎏l|l
|thui|i|🎏i|i, ɪ
|thua|a|🎏a|ä, ɘ, ə, ɤ, ɛ,
œ, ɜ, ɞ, ʌ, ɔ,
æ, ɐ, a, ɶ, ɑ, ɒ
|thau|u|🎏u|u, y, ʏ, ɨ, ʉ,
ʊ, ɯ, ø, ɵ, o

Though it's not part of the grammar, letters are supposed to be associated with concepts. See 🔗https://docs.google.com/spreadsheets/d/1vu7bMwkWCiX-QZ7PWwAFZqRIXSGHMtYP4Cz1YEf4o_8/edit#gid=1902165936 the official Sumibli spreadsheet💬 for a list of associations.

🔝

📛Misc. Structures

Vowels can be combined to make diphthongs ("ufamglakautsi").

|Vowels|sumibligli|IPA
|---------------------
|i + a|🎏ia|jɑː
|i + u|🎏iu|ju
|a + i|🎏ai|aɪ
|a + u|🎏au|aʊ
|u + i|🎏ui|wiː
|u + a|🎏ua|wɑː

The middle-sound of a syllable ("ufamglabai") consists of either a vowel by itself, a diphthong, or the letter thil followed by a vowel.

💻ufamglabai ≔ ufamglakau \| ufamglakautsi \| thil & ufamglakau

An orientation is either left or right, indicated by the letter "thui" or "thau", respectively.

💻orientation ≔ thui \| thau

A "💻thur*💬" is an optional "thur" that, when present, can optionally have an orientation.

💻thur* ≔ optional (thur & orientation?)

An "ufamglanaisau" or "bridge-consonant" is either the letter thih, a standard consonant, or the letter thur followed by an optional pair of an orientation ("thui" or "thau") and an optional standard consonant. In other words, ufamglanaisau are either a standard consonant, a thur*, both, or neither. When it's both, the thur* must also have an orientation vowel.

💻ufamglanaisau
  ≔ thih
  \| ufamglanaiva
  \| thur & (optional (orientation & ufamglanaiva?))

🔝

📛Words

A word ("imai") is either a heavy-defined-word ("imaizladu"), an emotion-word ("imaipau"), or a strange-word ("imaivla").

💻imai ≔ imaizladu \| imaipau \| imaivla

A heavy-defined-word is a defined-word and a thur*. Defined-words ("imaizla") are parameterized on a bit, and in our heavy-defined-word that bit is lo.

💻imaizladu ≔ imaizla lo & thur*

Imaizla are built up in sections from left-to-right. The leftmost section consists of a standard consonant and a middle-sound. We can bolt on an additional section using a bridge-consonant, a standard consonant, and a middle-sound. Finally, we can bolt a section that consists of an entire imaizla by using a thur* and a "thij". In this last case we can explicitly end the section by "thij" & "thui", and this explicit end is required when the bit-parameter is hi.

💻imaizla B
  ≔ ufamglanaiva & ufamglabai
  \| imaizla hi & ufamglanaisau & ufamglanaiva & ufamglabai
  \| imaizla hi & thur* & thij
      & imaizla lo & enforced (thij & thui) B

Emotion words are also built in sections. The leftmost section consists of the letter "thih" followed by either a diphthong or a single vowel. Additional sections involve two 🔈different💬 standard consonants followed by a middle-sound.

💻imaipau
  ≔ thih & (ufamglakautsi \| ufamglakau)
  \| imaipau & (P : ufamglanaiva) & (B : ufamglanaiva) & ufamglabai
      & (P ≠ B)

Strange words are simply one of several specific forms:

💻imaivla
  ≔ thih & thua & thil
  \| thij & thua & thur* & thij?
  \| thij & thau & thur*
  \| thil & ufamglakau & thur* & thij?
  \| thil & thau & thua & thur* & thij?
  \| thil & thua & thui & ufamglanaiva & ufamglabai & thur* & thij?
  \| thil & thua & thau
  \| thit & thij & ufamglakautsi?
  \| thux & (ufamglakautsi \| ufamglakau) & ufamglanai

(Note: The word "hal" can only show up before an ivla. See next two sections.)

🔝

📛Foreign Text

Foreign concepts can be imported into Sumibli by using a "stranger" ("ivla") structure. This consists of a "-th" suffix, that is (unlike all other instances of "thux") pronounced unvoiced, followed by some arbitrary sounds. Alas, because foreign text can have arbitrary sounds, there is no explicit marker for the end of foreign speech; it's up to the speaker to make it clear that they're speaking Sumibli again. When writing, it's customary to include spaces around foreign words to distinguish them.

An ivla can also be used to quote a Sumibli speaker. Like with foreign text, this is marked using an unvoiced "thux". It is strongly recommended (but not required) for quoted expressions to explicitly end using "tsh". When writing quotes, quote marks are often used (sometimes in combination with whitespace).

🔝

📛Concepts

A concept ("umai") is built out of either a heavy-defined-word ("imaizladu"), a stranger ("ivla"), or a name ("imaiva").

💻imai ≔ imaizladu \| ivla \| imaiva

Names are either proper nouns built from "tha" and some imaizla, or are pronouns formed from the other cases of the last imaivla constructor.

💻imaiva
  ≔ thux & thua & imaizla lo
  \| thux & (A : (ufamglakautsi \| ufamglakau)) & ufamglanai
      & (A ≠ thua)

A big-concept ("umaidu") is either a concept flanked by an arbitrary number of thih-words ("imaithih"), or it's simply a non-empty list of thih-words.

💻umaidu ≔ list maithih & umai & list maithih
  \| list1 maithih

A thih-word is either an emotion-word ("imaipau") or the word "hal" followed by a stranger ("ivla").

💻imaithih ≔ imaipau \| thih & thua & thil & ivla

An owned-concept ("umaifu") is a non-empty list of big-concepts ("umaidu") seperated by the word "sha" (with a thur*), followed by an optional "shash" and then another owned-concept.

💻umaifu ≔ umaidu & list (thij & thua & thur* & umaidu)
  & optional (thij & thua & thur* & thij & umaifu)

The final piece needed to create phrases is the set-of-concepts ("usamai"), which is just a list of owned-concepts seperated by the word "shu" (with a thur*). It's a known limitation that one can use owned-concepts in a set-of-concepts, but not vice-versa.

💻usamai ≔ umaifu & list (thij & thau & thur* & umaifu)

🔝

📛Phrases and Clauses

An expression-piece ("ublirmi") is how we talk about phrases and clauses in our sentences. There are too many constructors to describe in English. The following definition is parameterized on two bits because we want to use it in a fancy-list (see: 🔗#Prerequisites Prerequisites💬). We can think of these as the "tail-bit" ("T") and "init-bit" ("I") to riff off of functional programming jargon.

💻ublirmi T I
  ≔ thil & ufamglakau & thur* & usamai
  \| thil & thau & thua & thur* & usamai
  \| thil & thui & thur* & idami & enforced (thil & thua & thij) I
  \| thil & thau & thur* & idami & enforced (thil & thua & thij) I
  \| thil & thua & thui & ufamglanaiva & ufamglabai & thur* & usamai?
  \| thil & thua & thui & ufamglanaiva & ufamglabai & thur* & thij
      & idami & enforced (thil & thua & thij) I
  \| thil & thua & thau & usamai
      & list (ublirmi hi hi) & enforced (thil & thua & thij) I
  \| usamai & (T = lo)

🔝

📛Sentences and Expressions

A sentence ("idami") is a fancy-list of expression-peices ("ublirmi") preceded by a semi-optional sentence-start ("idamitu"). Like ublirmi, idami are also parameterized on two bits.

💻idami T I ≔ enforced idamitu T & fancy-list ublirmi

Sentence-starts ("idamitu") are the letters thit and thij followed by any diphthong.

💻idamitu ≔ thit & thij & ufamglakautsi

An expression ("imi") is an orientation followed by a fancy-list of sentences ("idami") and terminated by an optional "tsh". We are allowed to drop the orientation if there is at least one thur with an explicit orientation before the first imaizladu. (Thus if there are no imaizladu in an expression, the orientation can be dropped.) 📣Unlike everywhere else, the formal definition doesn't include this rule💬 (because it's annoying to formally specify).

💻imi ≔ orientation? & fancy-list idami & optional (thit & thij)

🔝
