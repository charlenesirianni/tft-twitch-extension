# A Twitch Extension for Teamfight Tactics

This is a demo project that constructs responsive and reusable UI with a tiered-CSS approach. The majority of the classes are functional CSS.

- Tier 1: Basscss | http://basscss.com (MIT License), used to build the responsive layout
- Tier 2: A set of CSS for generic styles that can be reused to build other extensions (The class names are prefixed with "e-")
- Tier 3: A set of CSS for specific styling that is only applicable to this extension (The class names are prefixed with "tft-")
- Tier 4: Additional CSS used only for the Overlay version of this extension; for the mobile version, a separate set of CSS is required. The classes for this tier are mostly semantic, instead of functional.

For more examples of this tiered-CSS approach, see https://charlenesirianni.github.io/3tiercss/
