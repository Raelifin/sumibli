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

📛Letter Clusters

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

A "trailing thur" is an optional thur that, when present, can optionally have an orientation.

💻trailing thur ≔ optional (thur & optional orientation)

A "trailing thij" is just an optional thij.

💻trailing thur ≔ optional thij

An "ufamglanaisau" or "bridge-consonant" is either the letter thih, a standard consonant, or the letter thur followed by an optional pair of an orientation ("thui" or "thau") and an optional standard consonant. In other words, ufamglanaisau are either a standard consonant, a trailing thur, both, or neither. When it's both, the trailing thur must also have an orientation vowel.

💻ufamglanaisau ≔ thih \| ufamglanaiva
  \| thur & (optional (orientation & optional ufamglanaiva))

🔝

📛Words

A word ("imai") is either a heavy-defined-word ("imaizladu"), an emotion-word ("imaipau"), or a strange-word ("imaivla").

💻imai ≔ imaizladu \| imaipau \| imaivla

A heavy-defined-word is just a defined-word and a trailing thur.

💻imaizladu ≔ imaizla & trailing thur

Imaizla are built up in stages from left-to-right. The leftmost stage consists of a standard consonant and a middle-sound. Additional stages usually conisist of the imaizla to the left, plus a bridge-consonant, a standard consonant, and a middle-sound. Additionally, we can have an imaizladu on the left, and then a thij, such that there is an entire imaizla on the right.

💻imaizla
  ≔ ufamglanaiva & ufamglabai
  \| imaizla & ufamglanaisau & ufamglanaiva & ufamglabai
  \| imaizladu & thij & imaizla & *

The asterisk on the last constructor indicates that when we're a top-level imaizla, we have nothing there. On sub-imaizla we must put a 💻(thij & thui)💬 pair after.

TODO

🔝
