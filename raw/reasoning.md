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

In addition to specifying the formal grammar of Sumibli, this page also serves to document the justifications for why each aspect of the language is the way it is.

📑

📛Choosing Letters

Let's begin with the alphabet. Simplicity, Clarity, and Typability all want a language with discrete letters from a small, finite alphabet. Letters should be obvious to represent in both sound and speech, and it should be easy to convert between the two. Because sound is analog and messy, we must accept a range of sounds as valid representations of a letter (one-to-one correspondence is a nonsense goal), but we should have a clear exemplar sound that one should aim for. Clarity wants sound-sets to be non-overlapping, Simplicity wants there to be few sounds/letters, Utility wants there to be enough letters to have a good vocabulary, and Compatibility with English wants the sounds to not stray too far from the English phonemes.

The 🔗https://en.wikipedia.org/wiki/International_Phonetic_Alphabet IPA💬 is a good starting place for conceptualizing different possible sounds. The 🔗https://en.wikipedia.org/wiki/Help:IPA/English IPA for English wikipedia page💬 lists around 30 consonant sounds and around 20 vowel sounds, depending on which sound-combinations are considered distinct (rather than composite). Removing the marginal phonemes, long vowels (ː), and composites like "dʒ", we are left with:

|Obvious consonants:|b d ð θ f g k l m n ŋ p r s ʃ ʒ t v z h
|Borderline consonants:|j w
|Vowels:|ɑ ɒ æ ʊ ɛ ɪ ʌ ə i u
|Dipthongs:|aɪ aʊ eɪ ɔɪ oʊ

Almost all of the obvious consonants seem good. We want to be able to transcode English into Sumibli, so it seems prudent to be able to handle each of these sounds.

I want to throw out "ŋ" because down the line Simplicity is going to want to have a clean story about how consonants are used and it seems sketchy to have to be able to pronounce it distinctly in various positions. (English phonotactics deny "ŋ" except near the ends of words.) Also, Clarity thinks that it'll be hard to distinguish from "n". To solve this, we can consider "ŋ" to be a variant pronunciation of "n".

I want to throw out "ʒ" for similar reasons to "ŋ". It seems closest to "ʃ", so we lump it in as an alternate pronunciation.

I want to merge "ð" and "θ" because they're merged in English spellings and while neither of them seems more primary, it seems costly to distinguish them as letters. In order to get more milage out of the letter, we consider "ð" to be the correct pronunciation at the start of words and "θ" as the correct version at the end of words. This gives us the ability to distinguish those sounds and thus make things more clear, but also provide some safe wiggle-room in case it's difficult to pull off the distinction.

The vowels, unlike the consonants, seem like a huge mess. My brain has a hard time distinguishing "ʌ" from "ə", for example. In fact, I feel like Simplicity wants to retreat to something like the five-vowel system used in Japanese, Toki Pona, and Lojban (ignoring y'ybu). Furthermore, it seems unclear how semivowels like "w" should be treated.

Since the lots-of-vowels side of the spectrum is crowded and ugly, let's see what going deep into Simplicity gets us. If we just had one vowel, it seems like we'd lose too much vocabulary space, and it seems like we can get up to three vowels before any problems even begin to emerge. The natural vowels to pick are a closed-front, an open-central, and a closed-back vowel – "i", "ä", and "u". To my English ears/mouth, the six corresponding diphthongs come out as "jɑː", "juː", "aɪ", "aʊ", "wiː", and "wɑː". It's cool that there are six of these and they all seem fairly easy.

Thus, Sumibli has three vowels, that have standard "diphthongs" whenever two different vowels are adjacent. Whether these dipthongs are true dipthongs or simply semivowel consonants slapped onto a vowel, is left to the mind of the reader.

Why not have more vowels? Because I seem to not need them, and this is better for Simplicity. It also has the advantage of future-proofing a large vocabulary space in case more words need to be added later. In the case that future versions of Sumibli add other vowels, I consider the obvious candidates to be "oʊ" and "e", in that order.

But how do we transcode English vowels into Sumibli? The simple story is that we're extremely lossy here, and rely on context and other redundancies to make things clear. The vowel "e" is such a borderline case that there is no official recommendation as to whether it's a Sumibli "i" or "a".

|Sumibli Vowel|Canonical IPA Vowel|Permitted IPA Vowels
|------------------------------------------------------
|i|i|i ɪ
|u|u|y ʏ ɨ ʉ ʊ ɯ u ø ɵ o
|a|ä|ɘ ə ɤ ɛ œ ɜ ɞ ʌ ɔ æ ɐ a ɶ ä ɑ ɒ
|
|

|Sumibli Diphthong|IPA Equivalent
|--------------------------------
|ia|jɑː
|iu|ju
|ai|aɪ
|au|aʊ
|ui|wiː
|ua|wɑː
|
|

|Sumibli Consonant|Canonical IPA Consonant|IPA Alternatives
|----------------------------------------------------------
|p|p|
|b|b|
|t|t|
|d|d|
|k|k|
|g|g|
|n|n|ŋ
|m|m|
|f|f|
|v|v|
|s|z|
|h|h|
|l|l|
|r|ɹ|ɾ r
|th|ð or θ|
|sh|ʃ|ʒ

🔝

📛Giving Letters Meaning

One of the most core ideas of Sumibli is that by stepping away from having to have words be cognate with some Earth etymology, we can gain Clarity by having the meanings of words relate to their sounds. The most foundational way to do this is to give a meaning to each letter of the alphabet, and let the meanings of words flow from rules for how sounds compose.

First, we group consonants by Place, Manner, and Voicelessness

|Place|Manner|Unvoiced|Voiced
|----------------------------
|Labial|Plosive|p|b
|Coronal|Plosive|t|d|
|Dorsal|Plosive|k|g|
|Labial|Nasal||m
|Coronal|Nasal||n
|Labial|Fricative|f|v
|Coronal (Alveolar)|(Sibilant) Fricative|s|z
|Coronal (Post-Alveolar)|(Sibilant) Fricative|sh|
|Coronal (Post-Alveolar)|(Non-Sibilant) Fricative|th|th
|Larangeal|Fricative|h|
|Coronal|Approximant|r|
|Coronal|Lateral Approximant|l|

There's a nice pattern with the plosives where they can be ordered by place and grouped into pairs. Cooincidentally, there are also six of them, and down the line we want to make Sumibli base-6. If we put the plosives at the start of the alphabet then we can make their ordinal position in the alphabet the corresponding meaning when they're used as numbers.

If we're grouping the letters by manner, it makes sense to group the Nasals, Fricatives, and Approximants as well. There's an obvious way in which "f", "v", "s", and "z" resemble the plosives in being voiced pairs. If we treat "n" and "m" as paired, then we get 12 letters that have nice pairs. We'd like to support base-12 down the line, so it makes sense to put these six letters after the plosives.

Why put the unvoiced consonants first, and then the voiced ones? Because the voiced versions sound larger than the voiced ones, and thus come later in the ascending order.

Why order the plosives from the lips back instead of from the throat forward? Because the natural point of reference is outside the mouth, so as we point to each of the places of articulation the natural order is to start with the most external and move deeper as we go.

Why order "f", "v", "s", and "z" in that order? Like the plosives, this is ordering from the front of the mouth to the back.

Why put "n" and "m" in between? So that the fricatives are all together in the alphabet.

Why put "n" before "m"? Isn't "m" a labial sound and "n" a coronal sound, violating the previous logic? Unfortunately, yes. The real reason "n" comes first is that down the road I want the graphemes for paired letters to have a particular relationship and it feels much better to have "n" first and "m" second there. So we invent a story as to why "n" and "m" are flipped compared to the normal letters: "n" is the letter for negation, "no", and opposites. Thus, in the case of "n" and "m", we're opposite to how we usually are. It doesn't make me happy, but it makes me less-unhappy than the alternative. 😐

The last five consonants are weird compared to the first twelve (ignoring the weirdness of "n" and "m"). We'll talk about their order a bit later.

The three vowels are naturally ordered from close-to-far: "i", "a", then "u". Synesthetically, "i" has a sharp, tight sound, and "u" has a broad, big sound. So we associate "i" with closeness, tightness, and sharpness, and "u" with deepness, farness, and bigness, with "a" in the middle. There aren't enough distinct vowels to give more elaborate meanings than those.

With the canonical order of the first twelve consonants established, we've established the first set of meanings for the sounds. The letter "p" is associated with 0, the letter "b" associated with 1 and so on.

The next set of meanings to the letters is given by a pair of narratives. The first narrative is that we want to move from concrete to abstract, from simple to complex, and from obvious to subtle. The second narrative is that we want to follow the natural path of development of a mind – not necessarily a human, but rather a mind in abstract as it first engages with the world.

The most concrete, simple, obvious, primal aspect of reality, I claim, is one's subjective experience. Not the meta-level conceptualization of one's experience involved in conscious reflection, but rather the thoughts, feelings, and goals that we have as minds. Cogito ergo sum. Thus the letter "p" is associated with those internal, undeniable aspects of existence: experience, thought, desire, and personhood.

The next-most concrete aspect of reality is the difference between self and other, in other words the border formed by the body. Edge detectors are one of the first pattern-matchers to form in the visual cortex. In order to percieve things one must distinguish one thing from the next. Unlike the "p" words, this requires extrospection, but one need not go far to find edges. In carving up the world into parts, the mind gives it order and finds patterns. And once borders are located, the concept of place begins to make sense. Thus "b" is associated with borders, places, containers, and basics.

I like the adjacency of "p" and "b" as symbolically about mind and body.

Next, a mind able to see places and edges can begin to understand the relative orientation of things, and where they exist in space. Voids and negative spaces become meaningful, as does the progression of time and the sequence of events. Thus "t" is associated with positions, this, that, then, now, here, there, up, down, and emptiness.

I like the adjacency of "b" and "t" as symbolically about place and time.

But what exists in these places, other than the mind? Why, 🔈things💬 of course! Objects as meaningful entities in their own right can occupy space. And things have character, of course. The most obvious concrete things are big and heavy and solid. Thus "d" is associated with objects, anchors, mass, and substance.

I like the adjacency of "t" and "d" as symbolically about where and what.

As a mind develops, it will come to understand that some things are more complex than those other basic objects. Some things are alive, and built by the natural world. They behave in self-directed ways, according to cycles, and are full of water. Thus "k" is associated with creatures, nature, water, cycles, and curves.

I like the adjacency of "d" and "k" as symbolically about inanimate and animate.

And creatues move! They do things, go places, and take actions in the world. The most obvious, concrete kinds of actions and motions are those that can be done by living and unliving things. Falling, springing, sinking, and making noises are all actions that are done by things regardless of whether those things are animate. Fire isn't a creature, but it still posesses energy and motion in its essence. Thus "g" is about going, doing, fire, energy, and power.

I like the adjacency of "k" and "g" as symbolically about things that (characteristically) move and motions themselves.

I also like the way that we can see the four classical elements (air/earth/water/fire) naturally mirrored in the final four plosives. If we think of mind and body as being elements, we can consider the plosives to be 🔈elemental💬 letters that are about the foundations of the world.

Next we get to "n", which we've already talked about having an atmosphere of negation, "no", and opposition. This feels right as a partner to "g", in that "g" is about going and "n" is about stopping. The letter "n" is also the first that introduces significant interactions 🔈between💬 things.

The letter "m" can also be seen as an extremely simple way that two beings interact. Where "n" is violent and zero-sum – describing a state of nature where no collaboration is possible, "m" is the foundation of all civilization: communication. If our mind meets another mind in the world and they don't immediately resort to violence, the first and most concrete step on the journey of co-existence is to talk to one another.

Once a working relationship has been set up, a being must establish boundaries of what is permitted and what is forbidden in the nascent relationship/civilization. Ownership and property begets trade, both of goods and of services. And as civilization builds, tools and products come to exist. Thus "f" is about property, trade, fabrication, labor, games, money, and tools.

As the mind finds itself in a world of many others, trading and making a living, notions of credit, reputation, and contract begin to melt into a broad base of trust, friendship, and community. This is the foundation of civilization. Norms, customs, and memes about virtue and goodness begin to dominate. Thus "v" is about culture, normality, goodness, virtue, and friendship.

The least concrete aspects of the world are those that are only possible to attend to once a safe, peaceful life is ensured: the abstractions of mathematics and philosophy, and naming the deep patterns that govern the universe. The letter "s" is about formal systems, especially numbers, sets, and mathematics.

But after studying the formal ways, and learning the arts of the logician, the mind comes to see that there are things that cannot be proven, and numbers that cannot be named. They come to reflect on their own thoughts, closing the loop and glimpsing infinity. The letter "z" is about the truth, both speakable and unspeakable, and the worlds that may exist elsewhere in the space of possibilities that will never interact with our own.

📛Syllables, Words, and Glyphs

With the meanings of the vowels and standard consonants in hand, let's consider how we want to compose these together.

It's physiologically tricky to chain together long strings of consonants. Some combinations are doable, but the limitations here bend to the arbitrary choices of sound and what is speakable by someone who knows English. For the sake of simplicity and speakability, Sumibli chooses to break expressions down into a series of syllables. Syllables consist of an onset of consonants, a nucleus of vowels, and a coda of consonants.

All syllables of the form CVC are pronouncible in isolation, but we immediately have a problem if we imagine that our expressions are made entirely from CVC syllables: it will sound very chunky and kinda horrible. Here are four randomly generated CVC syllables in a row: "zingubgitvan". When I read that to myself several times, I notice my lips stumbling over the breaks in the sound. Ideally we can drop some of those consonants to let the sound flow more; here's what that sounds like when we drop the codas: "zigugiva". Much more smooth!

Having any expressions that have a two-syllable expression like CVC+CVC also brings up the question of how to deal with repeated consonants. Do we want to distinguish sound-length? Is is it pronounced like CVCVC? Or are we forced to pause between syllables in order to properly articulate?

Distinguishing sound length seems bad (eg plosives can't really be extended), as does forcing a pause. In fact, Clarity says that to make Sumibli as easy to hear as possible, even when one is speaking quickly, 📣Sumibli does not depend on any pauses, whitespace, or duration-of-sound💬.

...

🔝
