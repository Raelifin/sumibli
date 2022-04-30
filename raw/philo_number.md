📛Numbers

&nbsp;
how to count
&nbsp;

🔗\🧠 Back to Philosophy
🔗\🚀
🔗\🎓
🔗\🌳
🔗\🗣️
🔗\📚

The base word for numbers in Sumibli is "si", which means "[cardinal] is the count of [countable]".

|🎏si|si|cardinal|countable

There is also a word for ordinal numbers: "sai", which means "[ordinal] is the position of [ranked]".

|🎏sai|sai|ordinal|ranked

Sumibli ordinals are 🔗https://en.wikipedia.org/wiki/Zero-based_numbering zero-indexed💬. Thus primary/first corresponds to 0, secondary = 1, tertiary/third = 2, et cetera.

Unlike most words, "si" and "sai" have special rules for being used as an augment and for augmenting other words. When being used as an augment to a noun they mean "some quantity of" or "some ranking of". If there's a bridge consonant before it, the alphabetical index of that consonant specifies the number. As per the usual rules, "s" can't be used as a bridge consonant (because "si" starts with an "s" already) and we typically don't use "z" for a bridge either. Thus p = 0, b = 1, t = 2, ..., f = 8, v = 9.

When augmenting a verb, "si" naturally means the number of times that action/relationship occurs, while "sai" indicates the position of that action in a series of actions.

|🎏idasi|idasi|a number of things
|🎏idasai|idasai|a ranked thing
|🎏idatsi|idatsi|two things
|🎏idavsi|idavsi|nine things
|🎏idagsai|idagsai|the fifth thing
|🎏ima la gutsi|ima la gutsi|I travelled twice
|🎏ima la gupsai
la fibsai|ima la gupsai
la fibsai|First I went,
then I worked

It's common to use suffixes like "-tsi" to quickly specify quantity. But in many cases we want to talk about bigger numbers than 9.

When "si" (or "sai") itself is augmented, it represents a specific number based on the sounds of the augmenting syllables (not their usual meanings). To be more precise, we can think of words that start with "si" (or "sai") as representing strings of vowel-annotated digits, which we then interpret as a number in some 📣numeric framework💬.

📛The Standard Framework

Let's consider the standard Sumibli numeric framework.

Consider "sipa". This does not mean "person number". We forget that "pa" means "person", and see it as the letters "p" and "a". We interpret "p" as meaning 0, because "p" is the 0th letter of the alphabet. The sound "a" marks the digit 0 as a normal digit. Thus "sipa" means zero.

Now let's consider "sitata". We interpret the two augmenting syllables as basic digits. The letter "t" is the second in the alphabet, so "sitata" corresponds to 🔈22💬.

Here's where things get really different: the standard Sumibli numerical framework doesn't use base-ten, it uses 🔗https://www.seximal.net/ base-six💬. Instead of having a one's-place, a ten's-place, a hundred's-place, and so on, we have a one's-place, a six's-place, a thirty-six's-place, and so on. The digits "🔈22💬" thus mean two-ones and two-sixes, ie fourteen.

Even more divergent from English, the standard numerical framework is little-endian. This mean the least significant digits in the number come first, followed by more significant digits. This means "sidata" corresponding to 🔈32💬 means three-ones and two-sixes, ie fifteen.

|Sumibli|Vowel-Annotated
Digits|Little-Endian
Base-Six|Big-Endian
Base-Ten
|------------------------
|sipa|0a|🔈0|0
|siba|1a|🔈1|1
|sita|2a|🔈2|2
|sida|3a|🔈3|3
|sika|4a|🔈4|4
|siga|5a|🔈5|5
|sipaba|0a1a|🔈01|6
|sibaba|1a1a|🔈11|7
|sitaba|2a1a|🔈21|8
|sidaba|3a1a|🔈31|9
|sikaba|4a1a|🔈41|10
|sigaba|5a1a|🔈51|11
|sipata|0a2a|🔈02|12

Little-endian is more correct because we don't know how many digits will occur, so we can immediately start hearing the number instead of having to remember early digits and be surprised when we hear/read a new digit. For example, let's say I read "siga...". If this is little-endian, then I can be confident that I'm reading a number that has a 5 in the one's-place, whereas if I'm big endian than I know that there's a five in the most significant digit slot, but I need to see the whole number before I can figure out what place that actually is.

(One hint that little-endian is the correct way of writing numbers is that the "0,1,2..." digits are Arabic in origin, and Arabic is read right-to-left.)

But the fun doesn't stop here. Remember that we can annotate our digits with vowels. Thus "sita" is not the same as "siti". What does "siti" mean? Again, it depends on the numeric framework that's being used, but in the standard one digits that are annotated with "i" are fractional. So "siti" means 🔈.2💬. Remember that we're still in base-six, however, so 🔈.2💬 corresponds to two-sixths or one-third.

Unlike when annotating with "a", standard fractional digits are big-endian. This is because of the exact same logic as before. Seeing a prefix of a number should not significantly change the number. If we know what number place we're reading, big endian is superior because we usually care most about the most significant digit. In a non-fractional number we don't have that luxury, but in a fractional number we do!

It is heavily recommended to put fractional digits after normal ones, and never to intersperse the two.

|sibi|1i|🔈.1|1/6
|sibidi|1i3i|🔈.13|1/4
|siti|2i|🔈.2|1/3
|sidi|3i|🔈.3|1/2
|siki|4i|🔈.4|2/3
|sikidi|4i3i|🔈.43|3/4
|sigi|5i|🔈.5|5/6
|sibadi|1a3i|🔈1.3|1.5
|sibagakidi|1a5a4i3i|🔈15.43|31.75

As you might have noticed, 1/5 is absent from that list. The reason is that the representation of 1/5 in base-six is "0.111111...". The vowel "ai" in the standard framework indicates that the digit is part of a repeating decimal suffix ("ai" digits should come after "i" digits). Otherwise, "ai" digits are treated like "i" digits.

|sibai|1ai|🔈.1̅|1/5
|sitai|2ai|🔈.2̅|2/5
|sidai|3ai|🔈.3̅|3/5
|sikai|4ai|🔈.4̅|4/5
|sibidikai|1i3i4ai|🔈.134̅|0.272̅
|sitibaikaipaitaigai|2i1ai4ai0ai2ai5ai|🔈.21̅4̅0̅2̅5̅|0.38

The first normal digit in a negative number is annotated with "au" instead of "a". If the number is less than one, and thus would have no normal digits, it's given a leading negative-zero.

|sibau|1au|🔈-1|-1
|sikaukata|4au4a2a|🔈-442|-100
|sipauti|0au2i|🔈-0.2|-1/3

The standard framework also supports scientific notation. When digits annotated with "u" are given (conventionally before normal/decimal digits), they are interpreted as the power of six that the number is multiplied with. If no additional digits are given, the coefficient is implied to be 1.

|sibuba|1u1a|🔈1e1|6
|situbau|2u1au|🔈-1e2|-36
|sidu|3u|🔈1e3|216
|sikubau|4u1au|🔈-1e4|-1296
|sigu|5u|🔈1e5|7776
|sipubu|0u1u|🔈1e01|46656

A leading vowel of "ua" marks a negative power of six, just like "au" marks a negative coefficient.

|sikuabau|4ua1au|🔈-1e-4|roughly -0.0008

After the "ua", "u", "au", "a", "i", and "ai" digits are specified (in that order), one can specify a "iu" or "ui" digit, which marks the beginning of the negative/positive imaginary component of a complex number. Once the imaginary component is begun, normal digits and decimal digits can follow. It is very rare to mix imaginary components and scientific notation.

|sibui|1ui|🔈i|i
|sibiu|1iu|🔈-i|-i
|sigagui|5a5ui|🔈5 + 5i|5 + 5i
|sigapiugadi|5a0iu5a3i|🔈5 - 05.3|5 - 30.5i

While the standard framework allows easily specifying complex numbers, it should not be implied that all numbers specified in this way are complex. We can count the natural integers as "sipa", "siba", "sita", et cetera, for example. The type of a number (ℂ,ℝ,ℚ,ℤ,ℕ) should be inferred from context.

The standard numerical framework rejects bridge consonants in the "si" compound. Non-plosive consonants are also rejected except when a single digit is given for a class (exponent digits, standard digits, fractional digits, etc), in which case the non-plosive standard consonants are accepted shorthands for the two-syllable version.

|sina|6a|🔈6|6
|sima|7a|🔈7|7
|sifa|8a|🔈8|8
|siva|9a|🔈9|9
|sisa|Aa|🔈A|10
|siza|Ba|🔈B|11

📛Non-Standard Frameworks

We're not limited to using the standard framework in all situations. For instance, "si" also lets us specify phone numbers as strings of base-ten digits. Phone number digits show up in the natural order.

|si gagaga fanama gadapava|555-867-5309

If you happen to be a barbarian living in a world that uses big-endian base-ten numbers, you can use a numerical framework that's similar to the standard framework except for changing the order of digits, and accepting "n"/"m"/"f"/"v" as valid consonants.

|sikubaumimi|-1.77e4 (ie -17,700)

We have a numeric framework for maximizing density of information, which is useful for passcodes or storing information on a computer. In this framework, each possible compound of "si" can be seen as a natural number in base-(twelve,twelve,twelve) or base-seventeen-hundred-twenty-eight.

|sipi|0
|sibpi|1
|sitpi|2
|...
|sizpi|11
|sibi|12
|sipbi|13
|sitbi|14
|...
|siszi|143
|sipa|144
|...
|sipu|288
|...
|sipli|432
|...
|sipla|576
|...
|siszau|1727
|sipibpi|1728
|sibpibpi|1729

In practice, the dense framework is rarely thought of as being about a number per se, and is more commonly just a way of packing arbitrary information into a Sumibli word.

The last significant frameworks that we should touch on are those corresponding to non-uniform bases, such as dates and times. When specifying a time in hours:minutes:seconds, it's convenient to divide up the digits according to what part of the time they're in. In these circumstances, it's common to find the most significant digits annotated with "u", followed by "a", and then "i".

|sibubudapa|11:30
|sibuvuvukubabi|1994/1/1

Sumibli doesn't use these barbaric notions of dates/times, but if you find yourself on Old Earth, it might be useful to talk about them anyway.

🔝
