/* ── DATA ─────────────────────────────────────────────────── */
const prompts = [
  {
    id: "01", category: "cinematic", level: "Beginner",
    title: "Neo-Noir Night Driver",
    preview: "Place yourself in a rain-soaked, neon-drenched car interior at midnight.",
    tags: ["noir", "neon", "car", "night"],
    emoji: "🎬",
    full: `Using the uploaded photo of my face, create a hyper-realistic neo-noir portrait of me in the driver's seat of a car at night.

Deep blue and magenta neon lights bleed through the rain-streaked window onto my face. Keep my exact facial features — same eyes, nose, mouth, bone structure. I grip the steering wheel with a serious, partially shadowed expression.

Shot through the car window with shallow depth of field. High contrast, cinematic photography. Add subtle text at the bottom: "IN THE NIGHT" in an elegant serif font.

Ratio: 9:16 vertical. Ultra-realistic.`,
    tips: [
      "Use a clear front-facing selfie for best face preservation.",
      "Ask ChatGPT to 'keep my exact facial features unchanged'.",
      "Try: change 'blue and magenta' to 'amber and crimson' for a warmer tone.",
      "Generate 3 times — the rain streaks vary each run."
    ],
    resultHint: "Cinematic, dark, moody. Looks like a movie poster or a thriller album cover. Strong contrast between neon colors and dark interior.",
    resultUrl: "https://drive.google.com/file/d/1BXTHB52dlFufQop-qVSn6aFuopy00WJL/view?usp=drive_link"
  },
  {
    id: "02", category: "futuristic", level: "Intermediate",
    title: "Cyberpunk Street Portrait",
    preview: "Neon city, holographic overlays, rain — you as a cyberpunk protagonist.",
    tags: ["cyberpunk", "neon", "sci-fi", "city"],
    emoji: "⚡",
    full: `Transform this image into a cyberpunk aesthetic portrait of me.

Keep my exact facial features identical to the uploaded photo. Place me on a rain-slicked city street at night: neon signs in Japanese and English reflect off the wet pavement, holographic advertisements glow in the background. 

I am wearing a high-collar tech jacket with LED accents. Misty rain surrounds me. Moody shadows and neon light reflections on metal surfaces. My expression is sharp, focused.

Cinematic 9:16 portrait, ultra-realistic, shallow depth of field. Heavy atmosphere.`,
    tips: [
      "A photo with good facial lighting yields sharper face preservation.",
      "Try replacing 'Japanese signs' with 'Arabic or Korean' for different vibes.",
      "Add 'a glowing cybernetic tattoo on my neck' for extra edge.",
      "Generate at 16:9 for a desktop wallpaper format."
    ],
    resultHint: "Dark, electric, futuristic. Heavy neon blues and purples contrasting against your face. Immersive cinematic atmosphere."
  },
  {
    id: "03", category: "editorial", level: "Beginner",
    title: "Vogue Magazine Cover",
    preview: "High-fashion editorial. You on the cover of a luxury magazine.",
    tags: ["fashion", "editorial", "luxury", "magazine"],
    emoji: "👁️",
    full: `Using the uploaded photo of my face, design a luxury magazine cover featuring me as the cover model.

Keep my facial features exactly as they appear in the uploaded image. Style: high-fashion editorial — glossy texture, cinematic color grading, softbox studio lighting. 

Include elegant cover typography: a bold serif masthead at top reading "ÉCLAT", cover lines in fine print, issue date, barcode. Clean white space margins. Inspired by the visual language of Vogue or i-D magazine.

Ultra-realistic photography style. My expression: confident, slightly away from camera.`,
    tips: [
      "Wear (or describe) a simple outfit — let the magazine design do the talking.",
      "Ask to change the magazine name for a more personal touch.",
      "Try: 'Replace the background with a solid deep burgundy' for drama.",
      "Great for personal branding content."
    ],
    resultHint: "Polished, professional, luxurious. Looks like an actual editorial shoot. Perfect for social media bios and digital portfolios."
  },
  {
    id: "04", category: "fantasy", level: "Intermediate",
    title: "Dark Fantasy Warrior",
    preview: "Ancient armor, dramatic light, epic battle-ready portrait.",
    tags: ["fantasy", "warrior", "armor", "epic"],
    emoji: "⚔️",
    full: `Using my face from the uploaded photo, create an epic dark fantasy portrait of me as a warrior.

Keep my exact facial features. Dress me in intricately detailed ancient armor — dark iron with gold runes etched into the surface. A long tattered cloak flows behind me. 

Setting: top of a cliff at dusk, storm clouds rolling in, lightning on the horizon. Dramatic side lighting illuminates my face with a warm orange glow. My expression: serious, battle-hardened.

Style: ultra-detailed digital oil painting, cinematic realism, 8K quality. Full upper-body portrait.`,
    tips: [
      "Use a photo with a neutral expression for the most warrior-like result.",
      "Try 'female warrior in silver elven armor' for a different fantasy archetype.",
      "Add 'holding a glowing sword' or 'a raven perched on my shoulder'.",
      "Generates beautifully as a printed poster."
    ],
    resultHint: "Epic, dramatic, cinematic. Rich dark tones with dramatic highlights. Feels like a video game character art or book cover."
  },
  {
    id: "05", category: "retro", level: "Beginner",
    title: "90s Paparazzi Film Shot",
    preview: "Expired Kodak film, heavy grain, flash — accidental celebrity energy.",
    tags: ["retro", "film", "90s", "candid"],
    emoji: "📷",
    full: `Using my uploaded photo, recreate me as if photographed by a paparazzi in the 1990s.

Keep my facial features exactly. Setting: I'm sitting on a shag carpet in a small apartment, intensely focused on a flickering old CRT television. Wearing vintage 90s streetwear — oversized graphic tee, baggy jeans.

I am caught mid-action, turning sharply toward the camera. Harsh, unfiltered direct flash. Expired Kodak Portra 800 film aesthetic: heavy grain, slight color shift to warm yellows and reds, light leaks on the edges, deep shadows.

Candid, raw, imperfect. No cinematic polish.`,
    tips: [
      "Works especially well with casual, relaxed photos of yourself.",
      "Try replacing the setting: 'at a crowded nightclub' or 'on a street corner'.",
      "Add 'wearing sunglasses' for an iconic look.",
      "This style goes extremely viral on Instagram."
    ],
    resultHint: "Authentic, nostalgic, raw. Heavy grain and warm color shift. Feels genuinely accidental, like a real paparazzi shot from a tabloid."
  },
  {
    id: "06", category: "portrait", level: "Beginner",
    title: "Soft Studio Portrait",
    preview: "Clean, polished professional portrait with cinematic studio lighting.",
    tags: ["portrait", "studio", "professional", "clean"],
    emoji: "🕯️",
    full: `Using my uploaded photo, create a professional studio portrait of me.

Preserve my exact face — same eyes, nose, mouth, skin tone, and bone structure. Lighting: soft Rembrandt lighting from the upper left, creating a gentle triangle shadow on one cheek. 

Clean, neutral grey gradient background. I am wearing a simple black crewneck. My expression is calm and confident, looking directly into the camera. Skin retouched naturally — not over-edited.

Style: high-end portrait photography, 85mm lens simulation, shallow depth of field. Ultra-realistic.`,
    tips: [
      "Start with a clean selfie — ChatGPT will refine the quality.",
      "Specify your exact skin tone: 'warm medium skin with golden undertones'.",
      "Try different lighting: 'golden hour window light' or 'dramatic harsh flash'.",
      "Best prompt for LinkedIn profiles and professional headshots."
    ],
    resultHint: "Clean, refined, professional. Looks like a $500 studio headshot. Neutral tones with perfect skin and precise lighting."
  },
  {
    id: "07", category: "nature", level: "Intermediate",
    title: "Forest Spirit Portrait",
    preview: "Moss, fog, dappled light — you as a mystical being of the woods.",
    tags: ["nature", "forest", "mystical", "soft"],
    emoji: "🌲",
    full: `Using my uploaded photo, create a portrait of me as a mystical forest spirit.

Preserve my facial features completely. I am standing in an ancient misty forest — enormous gnarled trees, soft bioluminescent mushrooms glowing at my feet, fireflies drifting through the air. Dappled green and gold light filters through the canopy onto my face.

My skin has a faint iridescent quality, like moonlight. Flowers and tiny leaves are woven into my hair. My expression: serene, knowing.

Style: painterly realism with a fantasy watercolor softness. Cinematic 2:3 portrait.`,
    tips: [
      "Provide a photo where your face is fully visible and unobscured.",
      "Specify your hair type for better flower weaving: 'curly hair', 'short hair'.",
      "Change the forest setting: 'deep underwater' or 'floating in clouds'.",
      "Beautiful as a printed art piece."
    ],
    resultHint: "Dreamlike, ethereal, painterly. Soft greens and golds with a magical quality. Feels like a fantasy novel illustration."
  },
  {
    id: "08", category: "cinematic", level: "Intermediate",
    title: "Slow-Motion Street Walk",
    preview: "You walking against a rushing crowd — cinematic slow motion freeze.",
    tags: ["cinematic", "street", "motion blur", "urban"],
    emoji: "🎞️",
    full: `Using my uploaded photo, create a cinematic street portrait of me.

I am walking through a busy metro station or city street. I am in sharp focus — all others around me are blurred with motion trails, moving fast while I move at a different pace. 

I am wearing a long structured trench coat, expression serious and focused. Cool desaturated blue tones. 35mm film look. Ambient lighting from overhead signs and shop windows. 

Shot at a slight low angle, looking up at me. 9:16 portrait. Cinematic depth.`,
    tips: [
      "A full-body or half-body photo gives the best pose reference.",
      "Try: 'rainy street in Tokyo' or 'Paris at dusk' for specific atmospheres.",
      "Change the trench coat color: 'camel', 'all-black', 'olive green'.",
      "Pair this with text overlay: your name at the bottom for a poster effect."
    ],
    resultHint: "Dynamic, cinematic, intense. Strong contrast between your sharp focus and the blurred world around you. Powerful and editorial."
  },
  {
    id: "09", category: "artistic", level: "Beginner",
    title: "Pixar 3D Character",
    preview: "Rendered as a polished Pixar animated character with cinematic lighting.",
    tags: ["pixar", "3D", "animated", "fun"],
    emoji: "✨",
    full: `Convert my uploaded photo into a 3D Pixar-style animated version of me.

Keep my core facial features: same eye shape, nose, face structure, and skin tone. Render in Pixar's signature style: clean smooth surfaces, soft subsurface scattering on skin, expressive large eyes, slightly stylized proportions.

Cinematic studio lighting — warm key light from the upper right, soft fill from left. Expression: friendly, slightly surprised, as if reacting to something funny.

Background: a soft Pixar-style bokeh environment suggesting a colorful animated world. Ultra-polished 3D render.`,
    tips: [
      "Works well with any facial expression — happy photos give warmer results.",
      "Try: 'give me a sad/determined/curious Pixar expression'.",
      "Add accessories: 'wearing a small explorer's backpack' or 'holding a map'.",
      "Great for social media profile pictures and fun gifts."
    ],
    resultHint: "Charming, polished, cinematic. Warm 3D render with smooth skin and expressive eyes. Immediately recognizable as 'Pixar you'."
  },
  {
    id: "10", category: "editorial", level: "Advanced",
    title: "B&W Graphic Art Portrait",
    preview: "High-contrast black and white with bold graphic design overlays.",
    tags: ["graphic", "B&W", "design", "bold"],
    emoji: "◼",
    full: `Create a high-contrast black-and-white graphic design portrait using my uploaded face.

Preserve my facial features. Render the portrait with dramatic chiaroscuro lighting — deep blacks, bright whites, minimal midtones. My expression: calm, direct eye contact.

Overlay graphic design elements on the image: a bold red geometric rectangle framing one eye. Vertical text down the left side reading "FOCUS" in bold sans-serif, slightly transparent. A thin red horizontal line across the lower third.

Background: smooth grey canvas. Add a small minimal logo mark in the bottom corner. Style: editorial graphic design meets fine art photography.`,
    tips: [
      "Works best with a front-facing photo with good facial contrast.",
      "Change the accent color: replace 'red' with 'electric blue' or 'neon green'.",
      "Customize the text: replace 'FOCUS' with your name or a word that defines you.",
      "This style prints beautifully at large format."
    ],
    resultHint: "Bold, artistic, striking. High graphic impact. Strong visual identity — feels like a personal brand statement or art gallery piece."
  },
  {
    id: "11", category: "retro", level: "Beginner",
    title: "Golden Hour Transformation",
    preview: "Warm sunlight, soft highlights, dreamy golden tones saturating your portrait.",
    tags: ["golden hour", "warm", "dreamy", "light"],
    emoji: "🌅",
    full: `Using my uploaded photo, apply a golden hour transformation.

Preserve my exact facial features. Replace or transform the current lighting and environment to a magical golden hour outdoor setting: warm late afternoon sunlight hitting my face from a low angle, creating soft highlights on my cheekbones and hair. 

Long soft shadows. A blurred background of warm-toned trees or an open field. The entire image bathes in golden and amber light. My skin glows naturally.

Style: lifestyle photography, slightly editorial. 4:5 ratio.`,
    tips: [
      "Any photo works — indoor photos transform dramatically.",
      "Try: 'change golden hour to blue hour' for a cooler, moodier tone.",
      "Add: 'I am laughing, looking slightly off camera' for candid energy.",
      "Great for Instagram feed aesthetic."
    ],
    resultHint: "Warm, glowing, radiant. Every feature softened and illuminated. Feels like the best photo ever taken of you, in perfect golden light."
  },
  {
    id: "12", category: "futuristic", level: "Intermediate",
    title: "Sci-Fi Space Commander",
    preview: "A cinematic space opera portrait — you as a starship commander.",
    tags: ["sci-fi", "space", "commander", "epic"],
    emoji: "🚀",
    full: `Using my uploaded photo, create a cinematic sci-fi portrait of me as a starship commander.

Keep my exact facial features. I am wearing a sleek, high-tech military uniform — dark charcoal with teal energy accents and rank insignia. I stand on the observation deck of a spaceship, stars and a massive nebula visible through the window behind me.

Cool cinematic lighting — blue-white from the stars, warm amber from interior panels. Expression: commanding, focused, looking slightly past the camera.

Style: ultra-realistic space opera cinematography, similar to Interstellar or The Expanse. 9:16 portrait.`,
    tips: [
      "Use a confident, upright photo for the commander stance.",
      "Try: 'a rebel pilot' or 'an alien diplomat' for different story angles.",
      "Add 'a holographic map glowing on the desk beside me' for depth.",
      "Works beautifully as a desktop wallpaper."
    ],
    resultHint: "Epic, immersive, cinematic. Deep space atmosphere with rich blue and amber tones. Feels like a frame from a Hollywood sci-fi film."
  },
  {
    id: "13", category: "artistic", level: "Intermediate",
    title: "Classical Oil Painting",
    preview: "Rembrandt-style oil painting. You immortalized as a Renaissance subject.",
    tags: ["oil painting", "classical", "renaissance", "art"],
    emoji: "🖼️",
    full: `Using my uploaded photo, create a classical oil painting portrait of me in the style of Rembrandt or Vermeer.

Preserve my facial features faithfully. Dress me in rich period clothing — a dark velvet doublet with a white lace collar. Background: a dark, warmly lit interior suggesting wealth and depth.

Lighting: Rembrandt lighting — a single warm candle-like source from the upper left, casting a dramatic shadow triangle on my right cheek. My expression: thoughtful, slightly melancholic, timeless.

Style: thick visible brushstrokes, rich impasto texture, varnished amber tones. Museum-quality resolution.`,
    tips: [
      "A photo with clear facial shadows gives the most dramatic Rembrandt effect.",
      "Try 'Baroque period' or 'Dutch Golden Age' for slight style variations.",
      "Request a specific material: 'in a silk gown with embroidered flowers'.",
      "Incredible when printed on canvas texture for home decor."
    ],
    resultHint: "Timeless, dramatic, museum-quality. Rich amber and dark tones with masterful light. Genuinely looks like a 400-year-old painting."
  },
  {
    id: "14", category: "fantasy", level: "Beginner",
    title: "Anime Hero Portrait",
    preview: "Bold linework, dramatic speed lines — you as an anime protagonist.",
    tags: ["anime", "hero", "manga", "dynamic"],
    emoji: "⭐",
    full: `Using my uploaded photo, create an anime-style portrait of me as an anime protagonist.

Keep my core facial features — face shape, eye color, and distinguishing features — but stylize them with bold linework, enlarged expressive eyes, and detailed hair rendered in anime style.

I am wearing a dramatic flowing coat, partially open with the wind. Behind me: dynamic speed lines radiating outward and a partially visible glowing moon. My expression: determined, fierce, mid-transformation energy.

Style: high-quality manga illustration, slightly cel-shaded, bold outlines. Optional Japanese text subtitle at the bottom.`,
    tips: [
      "Describe your hair color clearly: 'silver hair' or 'dark wavy hair'.",
      "Add your 'power': 'surrounded by swirling fire' or 'lightning crackling around hands'.",
      "Try: 'slice-of-life anime style' for a softer, Makoto Shinkai aesthetic.",
      "Perfect for Discord profile pictures and gaming avatars."
    ],
    resultHint: "Dynamic, bold, vivid. Striking linework with dramatic composition. Feels like the opening frame of an anime series."
  },
  {
    id: "15", category: "portrait", level: "Beginner",
    title: "Color Analysis Portrait",
    preview: "Discover your seasonal palette — a fashion color analysis infographic.",
    tags: ["color analysis", "fashion", "infographic", "beauty"],
    emoji: "🎨",
    full: `Create a color analysis portrait graphic using my uploaded photo.

Keep my face unchanged — preserve skin tone, eye color, and hair color exactly. Identify my skin undertone (warm, cool, or neutral) based on the image. 

Around my face, display color swatches organized in a minimal grid: 6–8 colors that complement my complexion, and 3–4 colors to avoid. Highlight the best 3 colors with a soft glow or checkmark indicator.

Style: clean infographic design, fashion editorial aesthetic. Minimal labels only — no paragraphs of text. Social media ready, square or portrait format.`,
    tips: [
      "Use a photo with natural, unfiltered lighting for accurate color reading.",
      "Follow up with: 'now show me outfit color combinations for my palette'.",
      "Try: 'show me best lipstick shades for my undertone'.",
      "Extremely popular on Pinterest and TikTok beauty content."
    ],
    resultHint: "Clean, editorial, informative. A beautiful visual that's genuinely useful for fashion and makeup shopping decisions."
  },
  {
    id: "16", category: "cinematic", level: "Advanced",
    title: "Surreal Dreamscape",
    preview: "Levitating objects, bending reality, pastel haze — you in a dream.",
    tags: ["surreal", "dream", "pastel", "weird"],
    emoji: "🌙",
    full: `Using my uploaded photo, place me inside a surreal dreamscape.

Keep my facial features intact. I am standing in an impossible landscape: a vast pastel desert where books float open in the air, staircases spiral upward into clouds, and the sky cycles between deep violet and dusty rose.

My expression: calm, as if I belong here. I am wearing something simple — white linen. My hair moves slightly as if weightless. Soft fog surrounds my feet.

Style: surrealist painting meets cinematic photography. Soft haze, unnatural light sources, gentle pastel atmosphere. Not horrifying — peaceful and strange.`,
    tips: [
      "Try replacing elements: 'clocks instead of books' or 'mirrors instead of staircases'.",
      "Change the color mood: 'deep blue and gold' for a more dramatic surreal tone.",
      "Add: 'a second me standing far in the distance, back turned'.",
      "Generates extremely unique, one-of-a-kind art pieces."
    ],
    resultHint: "Peaceful, strange, painterly. Soft colors and dreamlike impossibility. Deeply personal and conversation-starting as wall art."
  },
  {
    id: "17", category: "editorial", level: "Intermediate",
    title: "Luxury Brand Campaign",
    preview: "High-end fragrance or fashion ad — you in a multi-million dollar campaign.",
    tags: ["luxury", "brand", "ad", "fashion"],
    emoji: "💎",
    full: `Using my uploaded photo, create a luxury brand advertisement featuring me.

Keep my facial features exactly as they appear in the uploaded photo. I am the main subject of a high-end fragrance or fashion campaign.

Setting: a dramatic marble interior with dramatic architectural lines. I am seated or leaning casually, wearing a simple, expensive-looking black outfit. Expression: effortlessly confident, not smiling.

Lighting: crisp editorial studio lighting with deep shadows. Add minimal text overlay: a fictional brand name "LUMIÈRE" in thin gold serif at the top, a tagline in small italics below my image: "Presence. Defined."

Style: Dior or Bottega Veneta campaign photography. Ultra-realistic.`,
    tips: [
      "Use a photo where you look relaxed and natural.",
      "Customize the brand name and tagline to your personal brand.",
      "Try: 'outdoor campaign in Santorini' or 'winter fur coat in the snow'.",
      "The marble interior can be replaced with: 'minimal white void' or 'Parisian balcony'."
    ],
    resultHint: "Aspirational, cinematic, expensive-looking. Genuinely feels like a multi-million dollar ad campaign. Instantly elevates your visual presence."
  },
  {
    id: "18", category: "nature", level: "Beginner",
    title: "Underwater Portrait",
    preview: "Submerged in crystal blue water — ethereal, weightless, cinematic.",
    tags: ["underwater", "blue", "ethereal", "cinematic"],
    emoji: "🌊",
    full: `Using my uploaded photo, create a cinematic underwater portrait of me.

Keep my facial features identical. I am submerged in clear, luminous blue-green water. My hair floats weightlessly around me. Small bubbles drift upward from my lips. Light refracts in broken, shifting patterns across my skin.

Expression: eyes open, serene, as if at peace. I am wearing white fabric that billows around me.

Style: fine art underwater photography — similar to the work of Elena Kalis or Christian Waeber. Rich aqua tones, god-rays of light filtering down from the surface above. Ultra-realistic.`,
    tips: [
      "Provide a clear, front-facing photo for the face to survive the transformation.",
      "Try: 'add jellyfish floating around me' or 'a school of fish in the background'.",
      "Change the water color: 'dark ocean black' for a more dramatic version.",
      "Spectacular printed at large format on metallic paper."
    ],
    resultHint: "Ethereal, weightless, deeply beautiful. Rich aqua and teal tones with refracted light. One of the most universally striking results."
  },
  {
    id: "19", category: "futuristic", level: "Advanced",
    title: "Holographic Data Portrait",
    preview: "Your face overlaid with flowing data streams, circuits, and holograms.",
    tags: ["holographic", "data", "tech", "digital"],
    emoji: "🔷",
    full: `Create a futuristic holographic portrait of me using the uploaded photo.

Keep my exact facial features. Apply a semi-transparent holographic overlay effect: my face appears both physical and digital simultaneously. Flowing data streams — thin lines of binary and geometric patterns — drift across my face and neck like a projection.

A cool electric blue and cyan color palette. Half of my face dissolves into flowing particles. Behind me: a dark void with faint hexagonal grid lines.

Style: conceptual digital art, high-end tech brand aesthetic. Not gimmicky — serious, refined, and futuristic. 9:16 portrait.`,
    tips: [
      "Works best with a strong, expressive facial photo.",
      "Try: 'replace cyan with gold circuits' for a warmer cybernetic feel.",
      "Add: 'my eyes are glowing with a soft cyan light'.",
      "Excellent for tech brand content and futuristic personal branding."
    ],
    resultHint: "Striking, conceptual, future-forward. Cool blues and data patterns that merge with your real face. Looks like a tech company's brand identity."
  },
  {
    id: "20", category: "retro", level: "Beginner",
    title: "Vintage Polaroid Collection",
    preview: "A set of faded, overexposed Polaroid snapshots — nostalgic and warm.",
    tags: ["polaroid", "vintage", "nostalgia", "warm"],
    emoji: "📸",
    full: `Using my uploaded photo, generate a set of 4 vintage Polaroid photographs of me in different scenarios.

Keep my facial features consistent across all four. Each Polaroid should show me in a different casual, candid moment: 1) laughing at something off-camera, 2) looking out a window at rain, 3) mid-conversation, 4) reading a book.

Polaroid aesthetic: slight overexposure, warm yellowish film shift, soft vignette at corners, faded whites, tiny date stamp in the bottom right. Each Polaroid has the classic white border with a handwritten caption in pen.

Arrange all 4 in a scattered, slightly overlapping layout on a wooden table surface.`,
    tips: [
      "Provide a simple, natural photo — no posed or staged photos work best here.",
      "Customize the captions: ask ChatGPT to write specific captions for each.",
      "Try: 'black and white Polaroid collection' for a timeless look.",
      "Print and use as a mood board or personal art piece."
    ],
    resultHint: "Warm, intimate, nostalgic. Feels like finding old memories in a drawer. Instantly personal and emotionally resonant."
  },
  {
    id: "21", category: "fantasy", level: "Intermediate",
    title: "Ancient Egyptian Deity",
    preview: "Gold, hieroglyphics, lapis lazuli — you as an Egyptian god.",
    tags: ["egypt", "deity", "gold", "ancient"],
    emoji: "𓂀",
    full: `Using my uploaded photo, create an Ancient Egyptian deity portrait of me.

Keep my facial features. Style my face with classic Egyptian cosmetic art: kohl-lined eyes extended with wings, metallic gold and lapis lazuli eye shadow. I am wearing a royal Egyptian headdress — the Nemes cloth in gold and blue stripes.

Around me: hieroglyphic panels and lotus flowers. Skin rendered in the stylized, slightly flat Egyptian artistic convention, but with photorealistic texture. A golden collar necklace (usekh) adorns my neck.

Style: a fusion of museum-quality Egyptian art and contemporary portrait photography. Rich gold, blue, and black tones. Square format.`,
    tips: [
      "Specify gender: 'male pharaoh' or 'goddess Isis' for different headdress styles.",
      "Try: 'add an ankh I am holding in my right hand'.",
      "Change setting: 'in front of the Great Pyramid at sunrise'.",
      "Generates beautiful results for custom print gifts."
    ],
    resultHint: "Majestic, ornate, deeply striking. Rich gold and lapis tones. Feels simultaneously ancient and contemporary — a timeless portrait."
  },
  {
    id: "22", category: "portrait", level: "Beginner",
    title: "Hairstyle Exploration",
    preview: "See yourself with 4 completely different hairstyles — before you commit.",
    tags: ["hair", "style", "comparison", "beauty"],
    emoji: "💇",
    full: `Using my uploaded photo, create a hairstyle exploration graphic.

Keep my face completely unchanged — preserve every feature exactly. Show me with 4 different hairstyles in a clean 2x2 grid layout:
1. Short textured crop
2. Medium-length soft waves
3. Long straight with curtain bangs
4. Natural curly volume

Each version should look photorealistic on my face. Label each style with a small clean text tag. Consistent studio lighting across all four panels.

Style: beauty editorial, clean white background, professional and informative.`,
    tips: [
      "Use your natural hair color unless you specify otherwise.",
      "Request: 'now show the same 4 styles in different hair colors'.",
      "Try: 'show me with buzz cut, mohawk, locs, and French braid' for bolder options.",
      "Useful before visiting a salon — a real decision-support tool."
    ],
    resultHint: "Practical, revealing, beautifully designed. Clean grid shows all four styles clearly. A genuinely useful before-and-see visualization."
  },
  {
    id: "23", category: "cinematic", level: "Advanced",
    title: "Thriller Movie Poster",
    preview: "Your name above the title — a dramatic psychological thriller poster.",
    tags: ["movie poster", "thriller", "typography", "dramatic"],
    emoji: "🎭",
    full: `Using my uploaded photo, create a dramatic psychological thriller movie poster featuring me.

My face should dominate the composition — close up, partially in shadow, eyes intense and looking directly at the viewer. Keep all my facial features exactly as they appear.

Typography overlay: at the top in small caps: "A CHEZAR FILMS PRODUCTION". Large serif title in the middle-lower area: "THE LAST SIGNAL". My name in smaller text above the title. Tagline at the bottom: "Some secrets find you."

Bottom billing block: tiny text listing fictional crew names. Standard movie poster aspect ratio 27:40 (tall vertical). Dark, desaturated color grading — deep blues and blacks.`,
    tips: [
      "An intense, direct-eye-contact photo produces the most gripping result.",
      "Customize the film title to something personal or meaningful.",
      "Try: 'romantic drama' or 'action blockbuster' for different genre poster styles.",
      "Replace 'psychological thriller' with 'horror' for a completely different atmosphere."
    ],
    resultHint: "Intense, dramatic, professional. Looks indistinguishable from an actual Hollywood movie poster. Incredibly fun as a personalized gift."
  },
  {
    id: "24", category: "artistic", level: "Intermediate",
    title: "Watercolor Loose Portrait",
    preview: "Expressive, loose, impressionistic watercolor — art that breathes.",
    tags: ["watercolor", "impressionist", "painterly", "loose"],
    emoji: "🖌️",
    full: `Using my uploaded photo as a reference, create an expressive watercolor portrait of me.

Keep my face recognizable — same features, same hair — but render loosely in an impressionistic watercolor style. The paint should bleed and bloom at the edges. Some areas remain unpainted, letting the white paper show through.

Color palette: warm pinks and peaches for skin, indigo and viridian for shadows, loose washes of gold in the background. Visible brushstrokes. A few areas with confident dark ink linework.

Style: editorial illustration meets fine art — similar to Cecile Cellier or David Downton fashion illustration. Not photorealistic. Atmospheric and human.`,
    tips: [
      "This style loves white space — don't add too much detail to the background.",
      "Try: 'cool blue and silver palette' for a completely different emotional tone.",
      "Add: 'a single red poppy tucked behind my ear' for a pop of color.",
      "Prints beautifully on thick watercolor paper stock."
    ],
    resultHint: "Fluid, emotional, human. Washes of color that feel alive. Genuinely artistic — feels like a commissioned fine art portrait."
  },
  {
    id: "25", category: "futuristic", level: "Beginner",
    title: "Neon Glow Portrait",
    preview: "Bold neon colors bathing your face — pure electric energy.",
    tags: ["neon", "color", "electric", "bold"],
    emoji: "🌈",
    full: `Using my uploaded photo, create a portrait of me bathed in neon glow.

Keep my exact facial features. The image should be dramatically lit by colorful neon light sources from multiple directions: magenta from the left, electric blue from the right, a touch of yellow from below.

Dark, minimal background — almost black. The neon light creates sharp color transitions across my face. My expression: direct, confident eye contact. 

Style: contemporary neon portrait photography — bold, graphic, high contrast. Not soft, not pastel. Electric and intentional. 4:5 format.`,
    tips: [
      "Any photo works here — the lighting is entirely replaced.",
      "Try: 'only one neon color — all green' for a matrix aesthetic.",
      "Add: 'rain falling behind me, catching the neon reflections'.",
      "Extremely popular for music artists and creative professionals."
    ],
    resultHint: "Electric, bold, immersive. Strong graphic impact. The neon colors create a portrait that feels like a music video still."
  },
  {
    id: "26", category: "nature", level: "Intermediate",
    title: "Autumn in Tokyo",
    preview: "You on a Kyoto street in fall — fallen leaves, warm lanterns, stillness.",
    tags: ["japan", "autumn", "travel", "cinematic"],
    emoji: "🍂",
    full: `Using my uploaded photo, create a cinematic travel portrait of me in Kyoto, Japan during autumn.

Keep my facial features exactly. I am walking down a narrow stone path lined with ancient maple trees in full autumn color — deep crimson, amber, and gold. Paper lanterns glow softly above me. Early morning light.

I am wearing a simple dark coat. My expression: peaceful, contemplative, slightly looking to the side.

Style: travel lifestyle photography — soft and cinematic, warm fall tones, slightly hazy atmospheric perspective. Film-inspired color grading. 4:5 portrait.`,
    tips: [
      "Swap Kyoto for: 'Central Park in October' or 'Amsterdam in autumn rain'.",
      "Try: 'replace autumn with cherry blossom season' for pink instead of red.",
      "Add: 'holding a matcha latte' for a lifestyle authenticity.",
      "Great for travel content creators and Instagram feeds."
    ],
    resultHint: "Warm, peaceful, cinematic. The rich reds and ambers of autumn frame your face beautifully. Feels like a travel magazine cover."
  },
  {
    id: "27", category: "retro", level: "Intermediate",
    title: "1970s Vinyl Album Cover",
    preview: "Faded earth tones, serif fonts — you on a fictional '70s vinyl record.",
    tags: ["70s", "vinyl", "retro", "music"],
    emoji: "🎵",
    full: `Using my uploaded photo, create a fictional 1970s vinyl album cover featuring me as the artist.

Keep my facial features. Style the photo in authentic 1970s photography: warm, slightly faded earth tones, film grain, analog color shift. I am photographed from a slight distance, standing in an open field or by a window with natural light.

The album cover design: a fictional album title "DUSK & SILENCE" in a vintage serif font at the top. My name in smaller text below. Muted mustard, terracotta, and brown color palette.

Back of the album visible at the bottom edge showing a track list in period-accurate typography. Square format (12" vinyl).`,
    tips: [
      "Use a natural, candid-feeling photo for the most authentic 70s result.",
      "Customize the album and artist name completely to your taste.",
      "Try: '1980s new wave album' or '1960s folk album' for different eras.",
      "Prints perfectly at 12x12 inches as a wall art statement piece."
    ],
    resultHint: "Warm, nostalgic, analog. Rich earth tones with that distinctly '70s color science. Feels genuinely vintage and deeply cool."
  },
  {
    id: "28", category: "portrait", level: "Advanced",
    title: "Before & After Transformation",
    preview: "Side-by-side editorial transformation: one prompt, two dramatic states.",
    tags: ["before/after", "transformation", "editorial", "comparison"],
    emoji: "↔️",
    full: `Using my uploaded photo, create a before-and-after transformation image with me as the subject.

Left side (before): me in my current natural appearance — casual, everyday, slightly imperfect. Natural lighting, relaxed expression. 

Right side (after): me styled as a high-fashion editorial model — flawless skin, dramatic makeup, sleek styled hair, wearing a sharp fashion look. Professional studio lighting.

Both sides: identical face structure, same camera angle, same framing. A subtle vertical dividing line between the two halves. Keep the same background color on both sides for a clean comparison.

Style: beauty editorial. Clean, professional. Square format.`,
    tips: [
      "This works best with a clean, unfiltered reference photo.",
      "Customize the 'after' style: 'bohemian festival look' or 'dark gothic aesthetic'.",
      "Try: 'before: office casual / after: red carpet gown'.",
      "Popular for beauty and fashion content across all platforms."
    ],
    resultHint: "Satisfying, dramatic, revealing. The split format is immediately engaging. A perfect scroll-stopper for social content."
  },
  {
    id: "29", category: "fantasy", level: "Beginner",
    title: "Anime Studio Portrait — Slice of Life",
    preview: "Soft, warm Makoto Shinkai style — you in a quiet everyday anime moment.",
    tags: ["anime", "slice of life", "soft", "shinkai"],
    emoji: "🌸",
    full: `Using my uploaded photo, create a Makoto Shinkai (Your Name / Suzume) anime-style portrait of me.

Keep my facial features — face shape, eye color, any distinctive features — but render them in this specific style: soft painterly backgrounds with photorealistic detail, large luminous eyes with detailed reflections, detailed hair with individual strand rendering.

Setting: I am sitting by a large window in a cozy room, afternoon golden light streaming in, dust particles visible in the light beams. My expression: thoughtful, peaceful, slightly wistful. A cup of tea on the windowsill.

Style: NOT bold shonen anime. Soft, painterly, cinematic, emotional.`,
    tips: [
      "Describe your eye color for better accuracy: 'dark brown eyes with amber flecks'.",
      "Try different settings: 'a crowded train platform' or 'a rooftop at dusk'.",
      "Add a detail: 'a small cat asleep in my lap'.",
      "One of the most emotionally resonant styles for personal portraits."
    ],
    resultHint: "Soft, emotional, cinematic. Rich painterly backgrounds with luminous light. Feels like a still from an award-winning animated film."
  },
  {
    id: "30", category: "editorial", level: "Intermediate",
    title: "Sculpture & Marble Portrait",
    preview: "You immortalized as a classical marble sculpture in a museum.",
    tags: ["sculpture", "marble", "classical", "white"],
    emoji: "🗿",
    full: `Using my uploaded photo, create a classical marble sculpture portrait of me.

Render my face and upper body as if carved from smooth white Carrara marble. Keep my features recognizable — the sculptor has captured my likeness faithfully. My expression: serene, idealized, timeless. Eyes slightly upward.

Setting: I am displayed in a museum gallery, soft diffused natural light from above, marble plinth visible at the base. A slight cool shadow in the stone's indentations.

Style: ultra-realistic sculpture photography. The marble should have genuine texture and translucency. Not obviously digital — should look like a real museum photograph of a real statue.`,
    tips: [
      "A front-facing photo with a neutral expression works best.",
      "Try: 'ancient Greek style with a laurel wreath crown'.",
      "Add: 'the sculpture is slightly cracked and aged, from 200 BC'.",
      "Wonderful printed on white matte paper — looks like an art catalog image."
    ],
    resultHint: "Timeless, elegant, artistic. Pure white with subtle cool shadows. Genuinely looks like you've been immortalized in marble."
  },
  {
    id: "31", category: "cinematic", level: "Advanced",
    title: "Post-Apocalyptic Survivor",
    preview: "Dust, scars, determination — you surviving in a collapsed world.",
    tags: ["apocalyptic", "survival", "gritty", "action"],
    emoji: "🔥",
    full: `Using my uploaded photo, create a cinematic post-apocalyptic portrait of me as a survivor.

Keep my facial features. My face has a small cut above one eyebrow and dust on my skin — earned, not dramatic. I am wearing a worn leather jacket with a scarf wrapped around my neck. Behind me: the ruins of a city, smoke rising, an orange dust-haze sky.

Expression: exhausted but determined. Looking at something in the distance beyond the camera. The wind is blowing slightly.

Style: cinematic survival drama — similar to The Last of Us or Mad Max: Fury Road. Warm dusty orange and grey tones. Ultra-realistic, not cartoony. 9:16 portrait.`,
    tips: [
      "Use a photo with a strong, forward-looking expression.",
      "Try: 'replace the ruined city with a burning forest'.",
      "Add: 'I am holding a worn map in my left hand'.",
      "Adjust tone: 'hopeful survivor' vs 'haunted and alone' for different emotional reads."
    ],
    resultHint: "Gritty, cinematic, powerful. Warm dust tones with a survivor's quiet intensity. Feels like a character poster for a prestige TV drama."
  },
  {
    id: "32", category: "artistic", level: "Beginner",
    title: "Ink Sketch Portrait",
    preview: "Clean, gestural ink lines — a master illustrator's quick portrait study.",
    tags: ["ink", "sketch", "illustration", "minimal"],
    emoji: "🖊️",
    full: `Using my uploaded photo as a reference, create a hand-drawn ink sketch portrait of me.

Keep my face recognizable — same proportions, same eyes, same hair silhouette. Style: confident, gestural ink linework. Not photorealistic — loose, sketchy, human. 

The face rendered with detail and care; the body and clothing suggested loosely with quick hatching. A few ink wash shadows add depth. White paper background.

Style: the kind of quick portrait a skilled illustrator might draw while observing someone in a café. Clean, minimal, confident.`,
    tips: [
      "Any photo works — this style is forgiving of photo quality.",
      "Request: 'more detailed, tighter linework' or 'even looser, gestural only'.",
      "Try: 'add a small doodle background with stars and plants'.",
      "Prints beautifully on cream or aged paper for a journaling aesthetic."
    ],
    resultHint: "Clean, artistic, human. Confident ink lines with white space breathing room. Genuinely feels like it was drawn by a skilled hand."
  },
  {
    id: "33", category: "nature", level: "Beginner",
    title: "Winter Snow Portrait",
    preview: "First snow, breath in the air — a quiet, cinematic winter portrait.",
    tags: ["winter", "snow", "cold", "cinematic"],
    emoji: "❄️",
    full: `Using my uploaded photo, create a cinematic winter portrait of me.

Keep my facial features exactly. I am outdoors in a quiet snowfall — large soft snowflakes falling around me. I am wearing a heavy wool coat and a dark scarf. My breath is faintly visible in the cold air.

The setting: a city park or forest edge, bare trees dusted with snow. Cool blue-white light. My expression: peaceful, slightly looking upward at the falling snow.

Style: fine art winter photography — understated, quiet, beautiful. Minimal color palette: whites, blues, and the warmth of my coat. 4:5 portrait format.`,
    tips: [
      "Works with any photo — ChatGPT replaces the entire environment.",
      "Try: 'nighttime snowfall with street lights and bokeh snow'.",
      "Add: 'holding a steaming paper coffee cup'.",
      "Change: 'heavy blizzard' for dramatic weather, or 'light dusting' for subtlety."
    ],
    resultHint: "Quiet, beautiful, atmospheric. Cool blues and soft whites create a meditative calm. Feels like the opening scene of an indie film."
  },
  {
    id: "34", category: "futuristic", level: "Intermediate",
    title: "AI-Generated Version of You",
    preview: "A portrait that looks generated — exploring the line between real and artificial.",
    tags: ["meta", "AI aesthetic", "synthetic", "concept"],
    emoji: "🤖",
    full: `Using my uploaded photo, create a portrait that deliberately blurs the line between photographic and AI-generated.

Keep my facial features, but render the image with a subtle uncanny quality: skin that is too perfect, symmetry that is slightly too precise, eyes that glow with a faint light of their own. 

Background: pure studio void, subtly iridescent. Lighting: cool and clinical — the light of a server room.

Add a small visual artifact or glitch: a faint scan line across one cheek, a slight color aberration at the ear edge.

The portrait should make viewers ask: is this real or not? Style: high-end conceptual AI art photography.`,
    tips: [
      "A very clean, high-quality selfie produces the most uncanny contrast.",
      "Try: 'make the glitch effect more prominent — obvious corruption at the edges'.",
      "Ask: 'add small text overlaid: SUBJECT_ID_0047'.",
      "Excellent for social media posts exploring identity and technology."
    ],
    resultHint: "Unsettling, conceptual, thought-provoking. Beautifully rendered with deliberate imperfections. A portrait that sparks conversation."
  },
  {
    id: "35", category: "editorial", level: "Beginner",
    title: "Makeup Look Visualizer",
    preview: "Preview a dramatic makeup transformation before you pick up a brush.",
    tags: ["makeup", "beauty", "editorial", "fashion"],
    emoji: "💄",
    full: `Using my uploaded photo, apply a dramatic editorial makeup look to my face.

Keep my face unchanged — preserve every feature, skin tone, and bone structure. Apply the following makeup:
- Graphic black eyeliner with a bold geometric extension beyond the corner of the eye
- Deep oxblood lip color
- High-shine highlight on cheekbones
- Clean skin with visible but natural texture

My expression: direct, strong eye contact. Lighting: professional beauty photography — soft ring light, minimal shadow.

Style: fashion editorial beauty shoot. Clean background — pure white or soft cream.`,
    tips: [
      "Use a makeup-free or minimal makeup photo for the most dramatic transformation.",
      "Describe a specific look: 'old Hollywood glamour', 'editorial avant-garde', 'K-beauty glass skin'.",
      "Try the opposite: 'remove all makeup and show my completely bare face, perfected'.",
      "Excellent for makeup artists showing client possibilities."
    ],
    resultHint: "Striking, professional, editorial. Clean beauty photography that shows the makeup's full drama without distraction."
  },
  {
    id: "36", category: "fantasy", level: "Advanced",
    title: "Wizard & Magic Academy",
    preview: "Spell books, candlelight, robes — you as a scholar of ancient magic.",
    tags: ["wizard", "magic", "academy", "warm"],
    emoji: "🧙",
    full: `Using my uploaded photo, create a portrait of me as a wizard or scholar at a magical academy.

Keep my facial features faithfully. I am seated in an ancient stone library — floor-to-ceiling bookshelves vanishing into shadows, candelabras casting warm amber light. An open spell book on the desk glows faintly.

I am wearing dark scholarly robes with silver detail at the collar. My expression: focused, mid-thought, as if having just discovered something important. 

Style: cinematic dark fantasy — warm candlelight contrasting with cool stone shadows. Reminiscent of Harry Potter or The Name of the Wind aesthetic. Highly detailed, painterly realism.`,
    tips: [
      "Add a familiar: 'a small owl perched on my shoulder'.",
      "Try: 'I am casting a spell — my hands glow with blue energy'.",
      "Change: 'a sinister dark magic library' for a more villainous take.",
      "This style works beautifully as a printed birthday card for book lovers."
    ],
    resultHint: "Warm, immersive, magical. Rich amber candlelight and deep library shadows. Genuinely feels like a scene from a beloved fantasy world."
  },
  {
    id: "37", category: "retro", level: "Intermediate",
    title: "Soviet Constructivist Poster",
    preview: "Bold geometry, limited palette, graphic power — you as propaganda art.",
    tags: ["constructivist", "poster", "graphic", "geometric"],
    emoji: "⬛",
    full: `Using my uploaded photo, create a Soviet Constructivist-style graphic poster featuring my face.

Keep my face recognizable but stylize it in the angular, graphic Constructivist manner: simplified planes, strong shadows, slightly geometric features.

Color palette: strictly limited — deep red, black, cream/white, and one additional accent. Bold diagonal compositional lines. Strong typography overlay in a Constructivist sans-serif: large text reading "FORWARD" or a word of your choice.

A few bold geometric shapes — rectangles, triangles — integrate with my portrait.

Style: authentic 1920s–1930s Soviet avant-garde design. Flat, powerful, graphically confident.`,
    tips: [
      "A strong, front-facing photo with a neutral expression works best.",
      "Customize the text: your name or a personal motto works well.",
      "Try: 'Art Deco poster' or 'Bauhaus design' for related graphic styles.",
      "Prints stunningly at A2 or larger as wall art."
    ],
    resultHint: "Bold, graphic, historically referential. The limited palette and strong geometry make a portrait of extraordinary visual power."
  },
  {
    id: "38", category: "portrait", level: "Beginner",
    title: "3-Year-Old Childhood Photo",
    preview: "See what you might have looked like as a toddler — charming and uncanny.",
    tags: ["childhood", "nostalgic", "fun", "portrait"],
    emoji: "🧒",
    full: `Using my uploaded photo, generate an image of what I might have looked like as a 3-year-old child.

Keep my core distinguishing features — eye color, face shape, any unique characteristics — but de-age me to approximately 3 years old. Chubbier cheeks, wider eyes, smaller nose, toddler proportions.

Setting: a warm 1990s-style home photo — slightly washed out colors, soft daylight. I am wearing a simple childhood outfit — overalls or a colorful t-shirt. My expression: curious, slightly unsure, looking at the camera.

Style: authentic family photo aesthetic. Not a studio shoot — feels like a real childhood memory.`,
    tips: [
      "This often works best with multiple generations (try: 'at age 5', 'at age 10', 'at age 70').",
      "Try: 'show me at 80 years old' for the opposite direction.",
      "Add context: 'it is Christmas morning, there are presents behind me'.",
      "Makes a wonderful, deeply personal gift for parents or grandparents."
    ],
    resultHint: "Charming, emotional, uncanny in the best way. Often instantly recognizable as 'you' — just smaller. Deeply nostalgic and warm."
  },
  {
    id: "39", category: "artistic", level: "Advanced",
    title: "Split-Style Duality Portrait",
    preview: "Left half realistic, right half abstract — a portrait in tension with itself.",
    tags: ["duality", "abstract", "experimental", "concept"],
    emoji: "◑",
    full: `Using my uploaded photo, create a conceptual duality portrait.

Keep my facial features as the base. Split the image down the vertical center of my face:

Left half: ultra-realistic portrait photography — crisp, natural, true to the photo.

Right half: dissolving into abstract art — my features breaking apart into geometric shapes, watercolor washes, ink splashes, or particle streams, depending on which feels most dramatic.

The split should feel intentional and designed, not accidental. A subtle glowing or sharp edge where the two halves meet.

Style: fine art conceptual photography. Color palette: the realistic side in natural tones; the abstract side in a bold complementary palette of your choice.`,
    tips: [
      "Choose the abstract style: 'geometric fragments', 'watercolor splash', 'digital pixel dissolve'.",
      "Try: 'the split is diagonal instead of vertical'.",
      "The color for the abstract half: 'deep indigo and gold' or 'electric coral and black'.",
      "One of the most conversation-provoking portrait styles — deeply personal."
    ],
    resultHint: "Conceptual, striking, thought-provoking. The tension between the real and abstract halves creates a portrait unlike anything else."
  }
  ,
  {
    id: "40", category: "portrait", level: "Beginner",
    title: "Collector Action Figure",
    preview: "You as a premium boxed action figure — complete with accessories and a nameplate.",
    tags: ["action figure", "toy", "collectible", "fun"],
    emoji: "🧸",
    full: `Using my uploaded photo, create a realistic 3D action figure of me displayed inside a collector's blister pack.

Keep my face and likeness accurate. The figure should be full-body, standing in a confident, upright pose with a relaxed expression. Render in a premium collectible toy style — slightly stylized but recognizably me.

Blister pack design: clear plastic bubble front. Bold cardboard backing. A header at the top in large bold typography: "[YOUR NAME]" — and a subheading below: "[YOUR ROLE OR TITLE]". Inside the pack, include 3–5 small accessories relevant to your life — a laptop, coffee cup, phone, books, or whatever fits.

Style: studio lighting on the packaging, glossy plastic reflections. Ultra-realistic toy product photography.`,
    tips: [
      "Add specific accessories: 'a camera', 'a yoga mat', 'a chef's knife' — make it personal.",
      "Specify the packaging color: 'deep navy card backing' or 'bright red with gold foil accents'.",
      "Try: 'make it look like a limited edition 1990s Mattel toy' for a retro vibe.",
      "One of the most viral portrait prompts of 2025 — great for LinkedIn bios and social content."
    ],
    resultHint: "Delightful, hyper-specific, shareable. The blister pack detail is uncanny. Instantly recognizable as you — but miniaturized and collectible."
  },
  {
    id: "41", category: "artistic", level: "Beginner",
    title: "Chibi Sticker Pack",
    preview: "A 2×2 grid of cute chibi-style stickers — you with four different expressions.",
    tags: ["chibi", "sticker", "cute", "illustration"],
    emoji: "🎀",
    full: `Using my uploaded photo as a face reference, create a 2×2 grid of chibi-style emoji sticker illustrations of me.

Keep my core features — face shape, hair, eye color — but render in a chibi style: large rounded head, tiny body, oversized expressive eyes, simplified features. Each of the four panels shows a different expression or mood:
1. Happy/laughing — eyes curved into crescents
2. Surprised — big round eyes, small open mouth
3. Focused/determined — furrowed brows, small serious mouth
4. Sleepy — heavy-lidded eyes, cheek blush marks

Each sticker has a transparent-style white background, bold clean outlines, bright pastel colors. Sticker-pack layout: clean 2×2 grid with small gaps between panels.

Style: Korean webtoon / LINE sticker aesthetic. Bright, cheerful, commercially polished.`,
    tips: [
      "Describe your hair clearly: 'short black hair' or 'long wavy auburn' — chibi hair is very expressive.",
      "Request custom expressions: 'crying dramatically' or 'starry-eyed' for more personality.",
      "Try: 'make all 4 in a single color palette — all pink pastels' for a cohesive aesthetic.",
      "Perfect for Telegram and Discord sticker packs, or printed as phone case art."
    ],
    resultHint: "Adorable, personality-filled, immediately shareable. The four expressions together capture a complete emotional range in a tiny, lovable format."
  },
  {
    id: "42", category: "artistic", level: "Advanced",
    title: "Tarot Major Arcana Card",
    preview: "You as a hand-illustrated tarot card — mystical, symbolic, richly detailed.",
    tags: ["tarot", "mystical", "illustration", "symbolic"],
    emoji: "🔮",
    full: `Using my uploaded photo, create a detailed tarot card illustration featuring me as the central figure.

Keep my face recognizable but render it in a rich, hand-illustrated tarot art style: intricate linework, symbolism-heavy composition, aged parchment texture.

I am depicted as a major arcana figure — "THE VISIONARY" — seated or standing in a pose of quiet authority. Surrounding me: symbolic objects relevant to the card's meaning (a lantern, stars, an open book, a compass). Above my figure: the card title "THE VISIONARY" in ornate gothic lettering. Below: a Roman numeral.

Border: elaborate Art Nouveau-style frame with botanical and geometric motifs. Color palette: deep midnight blue, rich gold, ivory parchment, crimson accents.

Style: pre-Raphaelite meets Art Nouveau. Dense, symbolic, painterly.`,
    tips: [
      "Choose your own arcana name: 'THE WANDERER', 'THE ARCHITECT', 'THE DREAMER'.",
      "Request specific symbols: 'add a crescent moon and a wolf at my feet'.",
      "Try: 'make the style look like 1970s Rider-Waite tarot' for the classic occult aesthetic.",
      "Prints beautifully as a card-sized art print — makes a stunning personalized gift."
    ],
    resultHint: "Mysterious, ornate, deeply personal. The symbolism feels hand-chosen. One of the most artistically striking portrait formats possible."
  },
  {
    id: "43", category: "fantasy", level: "Intermediate",
    title: "Norse Viking Portrait",
    preview: "Braided beard, iron helm, fjord at your back — you as a Viking age warrior.",
    tags: ["viking", "norse", "warrior", "historical"],
    emoji: "⚡",
    full: `Using my uploaded photo, create a cinematic portrait of me as a Norse Viking warrior.

Keep my exact facial features. Add culturally accurate Viking elements: iron or leather helmet with cheek guards (no horns — historically inaccurate), heavy wool and fur-lined cloak, chainmail. Braided details in hair or beard where appropriate.

Setting: a grey rocky fjord coastline at dawn — mist rising off the water, longship visible in the background, a storm brewing on the horizon. Wind is moving my cloak.

My expression: weathered, calm, purposeful. Eyes sharp. The face of someone who has seen open ocean.

Style: cinematic historical realism, similar to the TV series Vikings or The Last Kingdom. Rich desaturated tones — steel grey, deep brown, muted green. Ultra-detailed.`,
    tips: [
      "A photo with strong facial structure produces the most striking result.",
      "Request a specific role: 'I am a jarl' or 'I am a shield maiden' for different styling.",
      "Add: 'holding a rune-carved axe' or 'a raven perched on my arm'.",
      "Try: 'Anglo-Saxon warrior' or 'Celtic warrior' for different historical flavors."
    ],
    resultHint: "Cinematic, weathered, historical. The grey fjord tones and worn materials give it genuine weight. Feels like a prestige TV production still."
  },
  {
    id: "44", category: "artistic", level: "Advanced",
    title: "Medieval Stained Glass Window",
    preview: "You immortalized in glowing cathedral glass — geometric, devotional, luminous.",
    tags: ["stained glass", "medieval", "geometric", "luminous"],
    emoji: "🪟",
    full: `Using my uploaded photo, create a portrait of me rendered as a medieval stained glass cathedral window.

Keep my face recognizable but stylize it in the flat, iconic style of Gothic stained glass: bold black lead lines separating sections of glowing jewel-toned glass. My features simplified into clear geometric zones — deep cobalt eyes, ruby lips, warm amber skin tones.

I am depicted as a noble or saint-like figure, hands slightly raised. Around me: decorative Gothic arch framing with intricate tracery. Small narrative roundels in the corners. Background: deep sapphire and violet glass suggesting a celestial sky.

Light appears to glow through the glass from behind. The overall effect: radiant, reverential, timeless.

Style: authentic 12th–13th century Gothic stained glass aesthetic. Flat, bold, luminous.`,
    tips: [
      "The flatter and more front-facing your photo, the more authentic the stained glass result.",
      "Choose a color palette: 'warm amber and crimson' or 'cool sapphire and emerald'.",
      "Try: 'Art Nouveau Tiffany lamp style' for a softer, more ornate version.",
      "Printed on translucent film and backlit — creates a stunning decorative piece."
    ],
    resultHint: "Radiant, iconic, otherworldly. The jewel tones and lead-line geometry create a portrait of extraordinary visual power and historical resonance."
  },
  {
    id: "45", category: "cinematic", level: "Intermediate",
    title: "Half-Submerged Neon Rain Portrait",
    preview: "Face half in water, half out — neon city light bleeding through the surface.",
    tags: ["water", "neon", "cinematic", "surreal"],
    emoji: "💧",
    full: `Using my uploaded photo, create a dramatic cinematic portrait of me half-submerged in water.

Keep my exact facial features. The composition: my face at water level — the bottom half submerged, top half above the surface. The dividing line runs cleanly through the middle of my face. 

Above water: lit by soft ambient blue and magenta neon from city lights above. Below water: distorted light refraction, soft blue-green glow, tiny bubbles clinging to my skin, wet hair drifting slowly.

My expression: calm, eyes open, looking directly into the camera — unbothered, as if this is perfectly natural.

Style: ultra-realistic cinematic photography. Heavy atmosphere. Cool neon palette — deep blue, cyan, soft magenta. 4:5 portrait format.`,
    tips: [
      "A close-up face photo works best — this is an intimate, detail-heavy composition.",
      "Try: 'the water is completely still, creating a perfect mirror reflection of my face'.",
      "Add: 'the city lights above are reflected in the water surface around me'.",
      "Extremely effective for music artists and creative professional branding."
    ],
    resultHint: "Breathtaking, cinematic, conceptually strong. The water divide creates an image that is both strikingly beautiful and genuinely unique."
  },
  {
    id: "46", category: "retro", level: "Beginner",
    title: "Scrapbook Memory Collage",
    preview: "Layered polaroids, torn paper, tape, handwriting — you as a personal memory archive.",
    tags: ["scrapbook", "collage", "nostalgic", "layered"],
    emoji: "📋",
    full: `Using my uploaded photo, create a scrapbook-style memory collage featuring me as the subject.

Use multiple overlapping versions of me from the uploaded photo — different crops and sizes: a full portrait print, an extreme close-up of just my eyes, a profile crop, a candid-feeling wide shot. Arrange these prints in a scattered, layered layout as if assembled by hand.

Add analog scrapbook elements: torn paper edges, strips of washi tape, handwritten-style captions in pen ("summer 2024", "golden hour", "here"), dried flower stickers, small circular date stamps, a vintage postage stamp in one corner.

Color: warm amber and brown tones, film-grain texture throughout, slightly faded colors as if printed on old photo paper.

Style: intimate indie Tumblr/Pinterest moodboard. Personal, layered, nostalgic.`,
    tips: [
      "Any casual, natural photo works beautifully — the collage format forgives imperfect lighting.",
      "Customize the handwritten captions: ask ChatGPT to write specific text or a personal date.",
      "Try: 'black and white photos with one color photo as a focal point'.",
      "Print the result at A4 and frame it — it looks like a handmade art piece."
    ],
    resultHint: "Warm, intimate, deeply personal. The layered analog elements give it genuine emotional texture. Feels like finding something treasured in a drawer."
  },
  {
    id: "47", category: "nature", level: "Advanced",
    title: "Deep Sea Explorer",
    preview: "Bioluminescent creatures, crushing pressure, you in the deep abyss.",
    tags: ["ocean", "deep sea", "bioluminescent", "explorer"],
    emoji: "🌊",
    full: `Using my uploaded photo, create a portrait of me as a deep sea explorer in the abyssal zone of the ocean.

Keep my exact facial features. I am wearing a vintage-style deep sea diving helmet — heavy brass, round porthole glass. Through the porthole glass, my face is clearly visible and lit by the bioluminescent blue-green glow of the surrounding creatures.

The environment: total darkness beyond the helmet's light radius. Surrounding me: enormous glowing jellyfish drifting past, a giant bioluminescent anglerfish lurking in the dark distance, tiny shrimp and plankton glowing like stars.

The water pressure is visible — slight optical distortion, particles drifting, light refracting. My expression through the porthole: focused, awed.

Style: cinematic underwater photography meets Jules Verne illustration. Deep cold blue-black tones with electric bioluminescent accents.`,
    tips: [
      "A clear, well-lit face photo is essential — it needs to read through the porthole glass.",
      "Try: 'a modern technical diving suit instead of vintage brass helmet' for a sci-fi feel.",
      "Add: 'a massive sperm whale passing silently behind me in the darkness'.",
      "The vintage helmet with modern face creates a beautiful temporal collision."
    ],
    resultHint: "Otherworldly, cinematic, genuinely awe-inspiring. The contrast of the warm face against cold bioluminescent darkness is visually extraordinary."
  },
  {
    id: "48", category: "artistic", level: "Intermediate",
    title: "Pop Art Halftone Portrait",
    preview: "Roy Lichtenstein dots, CMYK color blocks, bold outlines — you as pure pop art.",
    tags: ["pop art", "halftone", "lichtenstein", "bold"],
    emoji: "🟡",
    full: `Using my uploaded photo, create a Pop Art halftone portrait of me in the style of Roy Lichtenstein.

Keep my face recognizable but render it completely in the Pop Art language: bold black outlines defining the major planes of my face. Ben-Day halftone dots in areas of shade and midtone — small regular dots in CMYK colors (cyan, magenta, yellow). Flat, unmodulated blocks of color for highlights.

Color palette: limited and punchy — choose 3–4 colors maximum. Classic options: red, yellow, blue, white, and black. Or try a more contemporary palette of your choice.

Add a speech bubble in the corner (empty or with a short phrase). Background: a flat primary-colored field or a simple dot pattern.

Style: authentic 1960s American Pop Art. Graphic, flat, intentionally "commercial". No gradients, no photorealism.`,
    tips: [
      "A high-contrast, direct-eye-contact photo produces the most striking result.",
      "Customize the speech bubble text: your name, a motto, or a dramatic exclamation.",
      "Try: 'use only blue and yellow' for a Mondrian-adjacent palette.",
      "Prints perfectly on canvas or as a large-format poster — a timeless interior piece."
    ],
    resultHint: "Graphic, bold, immediately iconic. The halftone dots and flat color blocks transform any face into a gallery-worthy statement. Endlessly shareable."
  },
  {
    id: "49", category: "editorial", level: "Intermediate",
    title: "Baroque Royal Portrait",
    preview: "Velvet, pearls, candlelight — you as 17th century European royalty.",
    tags: ["baroque", "royal", "historical", "opulent"],
    emoji: "👑",
    full: `Using my uploaded photo, create an opulent Baroque royal portrait of me in the style of Anthony van Dyck or Diego Velázquez.

Keep my facial likeness completely faithful. Dress me in authentic 17th century European court attire: for a male figure — a doublet of deep burgundy velvet with gold embroidery, a lace collar (falling band), and a royal sash. For a female figure — a silk gown with off-shoulder décolletage, pearl choker, and elaborate sleeve detail.

Setting: a palatial interior. Behind me: heavy draped curtain in deep green or crimson, a carved stone column, a window suggesting a distant landscape.

My expression: composed, assured — the expression of someone who has never doubted their own authority.

Style: Baroque court portraiture. Rich saturated color, dramatic chiaroscuro, masterful fabric texture rendering. Museum-quality oil painting aesthetic.`,
    tips: [
      "A neutral, upright posture photo gives the best aristocratic bearing.",
      "Specify gender presentation: 'dress me as a queen' or 'as a duke'.",
      "Try: 'add a crown' or 'a heraldic crest visible on my sash'.",
      "Printed on canvas and framed in an ornate gold frame — an extraordinary home decor piece."
    ],
    resultHint: "Sumptuous, regal, deeply impressive. The Baroque fabric textures and warm candlelit tones create a portrait that genuinely reads as a museum masterpiece."
  },
  {
    id: "50", category: "futuristic", level: "Advanced",
    title: "Zero Gravity Bedroom Float",
    preview: "You and all your objects suspended mid-air — a cinematic zero-gravity moment.",
    tags: ["zero gravity", "surreal", "floating", "conceptual"],
    emoji: "🛸",
    full: `Using my uploaded photo, create a cinematic zero-gravity portrait of me floating in my bedroom.

Keep my exact facial features. I am floating mid-air in a bedroom environment — my body in a relaxed, slightly tilted position as if weightless. Around me, all of my personal objects are also suspended: books floating open, a coffee mug with a small sphere of coffee hovering out of it, clothes drifting gently, headphones floating nearby, a laptop open mid-air.

My expression: calm, eyes open, slightly amused — utterly unbothered by the fact that physics has stopped applying.

Lighting: warm bedroom ambient light — a desk lamp glowing on the ceiling below me, morning light from a window to the side.

Style: hyper-realistic conceptual photography. Not cartoony — the floating objects cast accurate shadows. Reminiscent of Antoine Geiger's "Sur-Fake" series. 4:5 portrait.`,
    tips: [
      "List your actual personal objects for a deeply personalized result.",
      "Try: 'the setting is an office' or 'a kitchen' for a different environment.",
      "Add: 'a pet is also floating, looking bewildered' for extra charm.",
      "The shadow and lighting consistency is what makes this surreal — ask ChatGPT to be precise."
    ],
    resultHint: "Conceptual, warm, surprising. The mundane objects floating with you make it deeply personal. Both whimsical and genuinely striking as art."
  },
  {
    id: "51", category: "cinematic", level: "Beginner",
    title: "Midnight Rooftop Silhouette",
    preview: "You on a rooftop edge — city glow below, stars above, wind in your hair.",
    tags: ["rooftop", "city", "silhouette", "night"],
    emoji: "🌃",
    full: `Using my uploaded photo, create a cinematic rooftop portrait of me at midnight.

Keep my exact facial features. I am standing on the edge of a city rooftop — the skyline behind and below me, lit office windows stretching to the horizon. Warm amber and white city light glows upward onto my face from below, creating a dramatic under-lighting effect.

My hair moves slightly in the wind. I am wearing a simple dark jacket. Expression: contemplative, free, slightly looking down at the city below.

Style: cinematic urban photography — wide angle slight distortion, rich contrast between the dark sky and glowing city. Deep blues, warm ambers. 9:16 portrait format.`,
    tips: [
      "Any photo works — the environment is entirely replaced.",
      "Try: 'replace the city with a mountain range at night' for a wilderness version.",
      "Add: 'the rooftop has a water tower and a flickering neon sign nearby'.",
      "Powerful as a music artist or creative professional banner image."
    ],
    resultHint: "Dramatic, free, cinematic. The upward city glow creates a unique lighting effect that feels both grounded and limitless."
  },
  {
    id: "52", category: "portrait", level: "Intermediate",
    title: "Mirror Reflection Duality",
    preview: "You and your reflection — but the reflection shows a different version of you.",
    tags: ["mirror", "duality", "concept", "portrait"],
    emoji: "🪞",
    full: `Using my uploaded photo, create a conceptual portrait showing me and my mirror reflection — but the reflection is different.

Keep my exact facial features on both sides. Left: me in everyday, casual appearance — natural, soft light, relaxed. Right (in the mirror): a dramatically different version — perhaps in formal attire, or with an intense editorial look, or rendered in a different artistic style.

The mirror frame: ornate antique gold. My expression looking at the mirror: curious, perhaps slightly unsettled or amused. The background behind me: simple, dark, intimate.

The lighting difference between the two versions should feel deliberate — warm natural on my side, cool dramatic on the reflection's side.

Style: fine art conceptual photography. Rich, considered. 4:5 portrait.`,
    tips: [
      "Decide the contrast: 'casual vs formal', 'natural vs dark', 'present vs aged'.",
      "Try: 'the reflection shows me in 30 years' for a powerful time-concept piece.",
      "Add: 'a crack running through the center of the mirror' for symbolic tension.",
      "One of the most philosophically interesting portrait formats."
    ],
    resultHint: "Thought-provoking, elegant, personal. The duality invites questions. A portrait that people study rather than just glance at."
  },
  {
    id: "53", category: "fantasy", level: "Advanced",
    title: "Fire & Ice Elemental",
    preview: "Half engulfed in flame, half encased in ice — the duality of elements.",
    tags: ["elemental", "fire", "ice", "fantasy"],
    emoji: "🔥",
    full: `Using my uploaded photo, create a fantasy elemental portrait of me embodying both fire and ice.

Keep my exact facial features. Split the image vertically — left half: my face and body engulfed in living flame, hot orange and deep red tongues of fire crawling across my skin and hair, ember sparks drifting upward. Right half: me encased in jagged ice formations — crystalline, cold blue-white, frost patterns across my skin.

At the center split: the two elements clash — steam rising where fire meets ice, creating a dramatic glowing boundary.

My expression: powerful, composed — completely in control of both forces.

Style: cinematic fantasy digital art — ultra-detailed, 8K quality. Bold and elemental. Epic vertical portrait format.`,
    tips: [
      "A neutral, forward-facing expression sells the 'controlled power' feeling.",
      "Try: 'replace fire/ice with lightning and void darkness' for a different elemental pair.",
      "Add: 'glowing runes appearing on my arms in both elements'.",
      "Request 'earth and wind' or 'light and shadow' for more variations."
    ],
    resultHint: "Epic, visually explosive, powerful. The split elements create an image of extraordinary fantasy impact. Looks like a game character concept art."
  },
  {
    id: "54", category: "retro", level: "Beginner",
    title: "Vintage Soviet Cosmonaut",
    preview: "Space suit patches, CCCP badge, Gagarin-era energy — you as a retro cosmonaut.",
    tags: ["soviet", "space", "cosmonaut", "retro"],
    emoji: "🚀",
    full: `Using my uploaded photo, create a portrait of me as a Soviet-era cosmonaut from the 1960s.

Keep my exact facial features. Dress me in an authentic Vostok-era space suit — orange pressure suit, white helmet ring, CCCP patch on the chest, mission patches on the sleeves. Expression: stoic, proud, slightly heroic — the face on a propaganda poster.

Style: authentic 1960s Soviet documentary photography — slightly desaturated warm tones, heavy grain, high contrast black shadows. Feel of archival news photography.

Optional: a framed photo of Earth visible in a small porthole behind me. A Cyrillic caption at the bottom in period typography.`,
    tips: [
      "A direct, forward-looking expression gives the most 'official portrait' energy.",
      "Try: 'NASA Apollo-era astronaut instead' for the American counterpart.",
      "Add: 'the reflection of Earth visible in my helmet visor'.",
      "Ask ChatGPT to add an official-looking mission number and date."
    ],
    resultHint: "Iconic, historical, deeply atmospheric. The heavy film grain and Soviet color palette transport you completely to the Space Race era."
  },
  {
    id: "55", category: "editorial", level: "Intermediate",
    title: "Luxury Perfume Campaign",
    preview: "Soft skin, golden light, abstract shapes — you as a high-end fragrance campaign star.",
    tags: ["perfume", "luxury", "campaign", "fashion"],
    emoji: "✨",
    full: `Using my uploaded photo, create a luxury perfume advertisement campaign image featuring me.

Keep my exact facial features. Render me with flawless, luminous skin — soft diffused studio lighting from the left, a warm golden back glow. My expression: sensual, slightly away from camera, eyes half-closed in a moment of contemplation.

Overlay: a beautiful abstract gold liquid shape drifting across the composition — not a bottle, but a suggestion of scent: movement, warmth, mystery. A fictional perfume name in elegant minimal serif typography: "DUSK — EAU DE PARFUM" in the lower corner.

Background: deep charcoal or soft ivory gradient.

Style: the visual language of Chanel, Dior, or YSL campaigns. Clean, iconic, expensive.`,
    tips: [
      "A close-up, well-lit face photo gives the most editorial result.",
      "Customize the perfume name to something personal or evocative.",
      "Try: 'make the campaign style more avant-garde — abstract and editorial'.",
      "Pairs beautifully with a matching body shot for a full campaign set."
    ],
    resultHint: "Luxurious, refined, aspirational. Feels like a genuine high-fashion campaign. Instantly elevates any professional portfolio or social presence."
  },
  {
    id: "56", category: "artistic", level: "Beginner",
    title: "Mosaic Tile Portrait",
    preview: "Ancient Rome meets modern you — a mosaic of thousands of tiny tiles.",
    tags: ["mosaic", "roman", "tiles", "ancient"],
    emoji: "🟦",
    full: `Using my uploaded photo as a reference, create a portrait of me rendered entirely as an ancient Roman-style mosaic.

Keep my face clearly recognizable — the mosaic should capture my likeness faithfully. Build the entire image from small square tesserae tiles — each tile a single flat color, the face built from thousands of them in varying warm skin tones, cool shadow blues, rich hair colors.

The mosaic should have the texture of genuine stone and glass tesserae — slight irregularity in placement, visible grout lines. Background: a simple geometric mosaic border pattern in terracotta and ochre, suggesting a Roman floor or wall.

Style: authentic Pompeian or Byzantine mosaic aesthetic — flat, iconic, timeless. Not pixelated digital art — genuine mosaic texture.`,
    tips: [
      "A simple, front-facing photo with high contrast gives the clearest mosaic result.",
      "Try: 'Byzantine gold-background style' for a more ornate religious icon feel.",
      "Add: 'a mosaic inscription of my name in Latin letters below the portrait'.",
      "Printed on stone-textured paper, this looks like a genuine archaeological artifact."
    ],
    resultHint: "Ancient, textured, timeless. The tessera tiles give it genuine material weight. Simultaneously classical and contemporary."
  },
  {
    id: "57", category: "nature", level: "Intermediate",
    title: "Thunderstorm Portrait",
    preview: "Lightning at your back, wind in your face — you at the center of a storm.",
    tags: ["storm", "lightning", "dramatic", "weather"],
    emoji: "⛈️",
    full: `Using my uploaded photo, create a dramatic portrait of me at the center of a thunderstorm.

Keep my exact facial features. I am standing outdoors on open ground — a flat plain or clifftop. Behind me: a massive, churning supercell thunderstorm with multiple lightning bolts branching across the dark sky. The storm is close — the air itself seems electric.

The wind is hitting my face — hair blowing back, slight squint. Rain beginning to fall. The light is dramatic pre-storm light: a strange, sickly yellow-green glow on my face contrasted against the near-black sky behind me.

My expression: completely calm — unafraid, in awe.

Style: fine art storm photography — ultra-realistic, dramatic. The storm is the protagonist; I am its subject.`,
    tips: [
      "A slightly upward-looking expression maximizes the storm's imposing scale.",
      "Try: 'I am standing on the bow of a ship in a sea storm instead'.",
      "Change the season: 'winter blizzard with horizontal snow' for a different drama.",
      "The yellow-green storm light is the key — ask for that specific color if it's missing."
    ],
    resultHint: "Awe-inspiring, raw, elemental. The strange storm light on the face against the black sky is visually stunning and genuinely dramatic."
  },
  {
    id: "58", category: "futuristic", level: "Advanced",
    title: "Neural Interface Upload",
    preview: "Data streaming from your mind — the moment of human-AI connection.",
    tags: ["neural", "data", "sci-fi", "concept"],
    emoji: "🧠",
    full: `Using my uploaded photo, create a conceptual sci-fi portrait of me in the moment of neural interface activation.

Keep my exact facial features. My eyes are open but glowing with soft blue-white light from within — data streams are visible as thin luminous threads flowing from my temples into the surrounding space, dissolving into floating code and geometric data structures.

My expression: completely still, transcendent — not pained, but deeply focused, as if experiencing something beyond human language.

Background: absolute darkness, making the data streams and neural glow the only light sources. A faint holographic circular interface visible around my head like a halo made of code.

Style: high-concept sci-fi concept art — part cinematic photography, part digital illustration. Monochrome with electric blue accents. Ultra-detailed.`,
    tips: [
      "A still, neutral expression sells the 'transcendent focus' concept best.",
      "Try: 'the data streams are green — Matrix aesthetic' for a different palette.",
      "Add: 'binary code reflected in my eyes' for extra depth.",
      "Try a different color palette: 'warm gold data streams' for a more spiritual feel."
    ],
    resultHint: "Visually stunning, conceptually powerful. The data-stream glow gives it a spiritual quality that transcends typical sci-fi aesthetics."
  },
  {
    id: "59", category: "cinematic", level: "Intermediate",
    title: "Rainy Café Window Portrait",
    preview: "You behind glass, rain streaming down — the feeling of watching the world pass.",
    tags: ["rain", "café", "window", "intimate"],
    emoji: "☕",
    full: `Using my uploaded photo, create a cinematic portrait of me sitting inside a café, seen through the rain-streaked window from the outside.

Keep my exact facial features. I am sitting at the café window, looking out — or perhaps reading, slightly distracted. The glass between the camera and me: heavy rain streaks running vertically down the pane, slight reflection of the street behind the camera.

The café interior light: warm amber, flickering candle on the table. My expression: thoughtful, content, inward.

Outside: dark, wet, the street slightly blurred. The contrast between the warm interior and cold exterior rain is the soul of the image.

Style: intimate cinematic photography — French New Wave, melancholic but warm. Shallow depth of field. 4:5 ratio.`,
    tips: [
      "A contemplative, inward expression sells the mood completely.",
      "Try: 'nighttime — the street outside has neon reflections in the puddles'.",
      "Add: 'a cup of coffee and an open book visible on the table'.",
      "Works beautifully in black and white — ask for a B&W version as well."
    ],
    resultHint: "Intimate, cinematic, emotionally resonant. The rain-on-glass texture creates immediate atmosphere. Feels like a film still from a quiet European movie."
  },
  {
    id: "60", category: "portrait", level: "Beginner",
    title: "Dramatic Smoke Portrait",
    preview: "Soft smoke curling around your face — mysterious, sensual, atmospheric.",
    tags: ["smoke", "dramatic", "atmospheric", "portrait"],
    emoji: "💨",
    full: `Using my uploaded photo, create a dramatic smoke portrait of me.

Keep my exact facial features. Soft, organic white and pale grey smoke curls naturally around my face — not covering it, but framing it, drifting across one side, rising gently above my head. The smoke is beautifully lit against a completely black background.

My face: lit by a single, clean studio softbox light from slightly above and to the left. Skin luminous against the dark. Expression: calm, direct eye contact, slightly mysterious.

Style: fine art portrait photography — the kind of smoke portrait achieved with long exposure and actual incense smoke in studio. Ultra-realistic texture. 4:5 portrait.`,
    tips: [
      "A clean, direct expression works best — the smoke provides all the atmosphere.",
      "Try: 'the smoke is backlit, creating a silhouette of my face within it'.",
      "Change smoke color: 'deep blue smoke' or 'golden smoke' for a different tone.",
      "Striking in a large print format — the smoke texture rewards close inspection."
    ],
    resultHint: "Mysterious, refined, atmospheric. The smoke creates an almost supernatural quality. Intimate yet slightly otherworldly."
  },
  {
    id: "61", category: "fantasy", level: "Intermediate",
    title: "Celestial Astrologer",
    preview: "Stars mapped across your skin — you as a living constellation chart.",
    tags: ["stars", "celestial", "astrology", "mystical"],
    emoji: "🌠",
    full: `Using my uploaded photo, create a mystical portrait of me as a celestial astrologer with constellations mapped across my skin and surroundings.

Keep my exact facial features. My skin has a faint luminous quality — and across my face, neck, and shoulders, thin gold constellation lines are drawn, connecting faint star-points to form zodiac patterns. The effect is subtle: my face is still fully readable, but I am also a star chart.

I am wearing a deep midnight blue robe. Behind me: an enormous antique celestial globe and stacks of star maps. The room is lit by candlelight and the blue-silver glow of moonlight from a tall window.

My expression: wise, knowing, deeply calm.

Style: painterly baroque meets mystical illustration. Rich, detailed, warm candlelight against cool cosmic silver. 2:3 portrait.`,
    tips: [
      "Specify your zodiac or a meaningful constellation: 'the Orion belt runs across my cheekbone'.",
      "Try: 'the constellations glow brighter — more visible, more dramatic'.",
      "Add: 'I am holding a brass armillary sphere in my hands'.",
      "Works beautifully combined with the Tarot Card prompt (42) for a mystical art series."
    ],
    resultHint: "Mystical, elegant, deeply beautiful. The constellation overlay on skin is a poetic visual concept that feels both personal and cosmic."
  },
  {
    id: "62", category: "editorial", level: "Advanced",
    title: "Architectural Background Portrait",
    preview: "Brutal concrete, perfect symmetry — you as a point of humanity in a designed world.",
    tags: ["architecture", "symmetry", "concrete", "editorial"],
    emoji: "🏛️",
    full: `Using my uploaded photo, create an editorial portrait of me set against a dramatic architectural background.

Keep my exact facial features. Place me at the center of a perfectly symmetrical architectural scene: an enormous brutalist concrete staircase or corridor stretching behind me, vanishing point precisely centered behind my head. I am the only warm human element in a cold, designed space.

I am dressed simply — dark minimal clothing that recedes, letting the architecture speak. My expression: direct, composed, inhabiting this designed world with complete confidence.

Lighting: cool diffused grey architectural light. The concrete texture is rich and detailed. My skin warm by contrast.

Style: high-fashion editorial architecture photography — Andreas Gursky meets Irving Penn. 4:5 portrait format. Rigorous and considered.`,
    tips: [
      "Try different architectural styles: 'Gothic cathedral interior' or 'minimalist Tokyo stairwell'.",
      "Change the symmetry: 'diagonal composition — I am off-center, the architecture dominates'.",
      "Add: 'a single shaft of harsh sunlight cutting across the scene'.",
      "One of the most distinctly editorial portrait formats — ideal for portfolios."
    ],
    resultHint: "Rigorous, dramatic, powerful. The human figure against the architectural scale creates a portrait of enormous compositional strength."
  },
  {
    id: "63", category: "retro", level: "Intermediate",
    title: "1980s Yearbook Glamour Shot",
    preview: "Laser background, big hair, feathered lighting — the quintessential '80s school photo.",
    tags: ["80s", "yearbook", "kitsch", "nostalgic"],
    emoji: "📸",
    full: `Using my uploaded photo, create an authentic 1980s school or yearbook glamour photo of me.

Keep my facial features. Style me in the iconic 1980s glamour photography tradition: hair with volume and light feathering, soft-focus portrait lens look, a classic brushed-side pose at a slight angle.

Background: the quintessential '80s laser portrait background — deep blue-purple gradient with crossing colored laser beams and geometric shapes. The light quality: slightly warm, slightly blown-out, deeply nostalgic.

Expression: the formal-but-trying-to-look-natural smile of every school photo ever taken.

Optional bottom strip: a name placard in '80s yearbook typography.

Style: completely authentic period photography. No modern digital polish. Grain, color shift, and all.`,
    tips: [
      "This prompt produces immediate recognition and laughter — great for social content.",
      "Try: '1990s school photo' for a slightly less extreme, still nostalgic version.",
      "Specify the background color: 'classic blue laser' or 'the green and pink version'.",
      "Add your actual name to the yearbook placard for maximum authenticity."
    ],
    resultHint: "Instantly nostalgic, perfectly kitsch, completely committed. Feels like you found it in an actual '80s yearbook. High-comedy, high-craft."
  },
  {
    id: "64", category: "nature", level: "Beginner",
    title: "Sunrise Mountain Summit",
    preview: "You at the peak, first light breaking over the range — pure summit energy.",
    tags: ["mountain", "sunrise", "hiking", "adventure"],
    emoji: "🏔️",
    full: `Using my uploaded photo, create a portrait of me at the summit of a mountain at sunrise.

Keep my exact facial features. I am standing at the very top of a high alpine peak — the world spread below me, other mountain ranges visible in the far distance. The sun is just breaking over the horizon behind me: first light, golden and pink, creating a rim light halo effect around my silhouette.

I am wearing hiking gear — a technical jacket, windswept hair. My expression: the expression of someone who earned this view. Tired, elated, completely alive.

The sky: deep blue-purple fading to warm gold. Some cloud wisps below us.

Style: adventure lifestyle photography — authentic, earned, not polished. 4:5 portrait.`,
    tips: [
      "A windswept, natural photo gives the most authentic outdoor result.",
      "Try: 'sunset instead of sunrise' for warm orange tones and a closing-day energy.",
      "Specify a real mountain: 'the summit of Rinjani' or 'the Dolomites at dawn'.",
      "Great for outdoor enthusiasts, travel creators, and adventure brand content."
    ],
    resultHint: "Authentic, inspiring, earned. The summit light creates a portrait of genuine emotional power. Feels like a memory you'd frame and keep forever."
  },
  {
    id: "65", category: "cinematic", level: "Advanced",
    title: "Villain Origin Moment",
    preview: "The exact moment everything changed — cinematic, operatic, unforgettable.",
    tags: ["villain", "cinematic", "dramatic", "origin"],
    emoji: "🎭",
    full: `Using my uploaded photo, create a cinematic villain origin portrait of me — the exact moment everything changed.

Keep my exact facial features. I am caught in a defining moment: standing in rain, in wreckage, in a burned room — the setting your choice, but it should feel like the aftermath of something. My clothing: elegant but damaged — a fine coat, one lapel torn, ash on my face.

My expression: not angry — something colder. The moment where a decision has been made and there is no returning from it. Eyes direct, jaw set, completely still inside.

Lighting: dramatic and cinematic — a single cold light source from below or the side, deep shadows.

Style: prestige cinema — operatic, composed, deliberate. No camp. Think Michael Mann, Denis Villeneuve. 9:16 portrait.`,
    tips: [
      "A completely still, cold expression is the key — avoid anger, lean into resolve.",
      "Specify the setting: 'a flooded boardroom', 'the ruins of a library', 'an empty stage'.",
      "Try: 'hero origin' instead of villain for a completely different emotional tone.",
      "This portrait demands a strong, dramatically lit source photo for best results."
    ],
    resultHint: "Operatic, cold, unforgettable. The stillness in the expression combined with cinematic damage reads as a genuinely iconic villain portrait."
  },
  {
    id: "66", category: "artistic", level: "Intermediate",
    title: "Geometric Low Poly Portrait",
    preview: "Your face fragmented into sharp triangular planes — digital origami.",
    tags: ["low poly", "geometric", "digital art", "abstract"],
    emoji: "🔺",
    full: `Using my uploaded photo as a reference, create a low-poly geometric portrait of me.

Keep my likeness recognizable. Render my face as a low-polygon 3D mesh — each facet a flat-shaded triangle in a slightly different tone, building up my features through geometric fragmentation. The overall image reads clearly as a portrait while also being an abstract geometric artwork.

Color palette: either realistic skin tones with dramatic shadows, or a stylized palette of deep jewel tones — sapphire, emerald, gold — whichever creates the most dramatic visual impact.

Background: a contrasting solid tone or a complementary geometric pattern that extends the portrait's visual language.

Style: clean, precise, contemporary digital design. The geometry should feel intentional and crafted, not random.`,
    tips: [
      "A high-contrast photo with strong directional lighting produces the best faceted result.",
      "Try: 'the poly count is very low — extremely blocky and angular' for a dramatic version.",
      "Customize the palette: 'all cool blues and silver' or 'sunset orange and deep purple'.",
      "Prints beautifully as a large-format poster — the geometry rewards scale."
    ],
    resultHint: "Crisp, contemporary, architectural. The geometric fragmentation creates a portrait that is both recognizably you and a standalone digital artwork."
  },
  {
    id: "67", category: "editorial", level: "Beginner",
    title: "Book Author Back Cover",
    preview: "The definitive author photo — intellectual, considered, quietly brilliant.",
    tags: ["author", "book", "intellectual", "portrait"],
    emoji: "📚",
    full: `Using my uploaded photo, create a professional author portrait suitable for the back cover of a literary novel.

Keep my exact facial features. I am photographed in a thoughtful, slightly informal setting that suggests intellectual life: a library corner, a desk with books, near a large window with soft natural light filtering in.

My expression: warm but considered — the expression of someone who thinks carefully before speaking. Slight hint of a smile. I might be holding a cup of tea or coffee. My clothing: intelligent-casual — a nice sweater, or an open-collar shirt. No power suits.

Style: warm literary photography — the visual language of Penguin or Knopf author portraits. Shallow depth of field. 4:5 ratio.`,
    tips: [
      "Add a brief fictional biography in small text at the bottom for the full effect.",
      "Try: 'academic headshot for a university website' for a more formal variation.",
      "Change the setting: 'a used bookshop' or 'a garden in summer'.",
      "Combine this with the Magazine Cover prompt (03) for a full author brand suite."
    ],
    resultHint: "Warm, intelligent, credible. Feels like the back of a book you'd want to read. A portrait that suggests depth and a rich inner world."
  },
  {
    id: "68", category: "retro", level: "Advanced",
    title: "Daguerreotype Victorian Portrait",
    preview: "You as if photographed in 1860 — silver-plate detail, sepia tones, absolute stillness.",
    tags: ["daguerreotype", "victorian", "historical", "sepia"],
    emoji: "🕰️",
    full: `Using my uploaded photo, create a portrait of me rendered as an authentic 1860s daguerreotype photograph.

Keep my exact facial features. Dress me in period-accurate Victorian attire: for a male subject — a dark wool frock coat, high collar, cravat or bow tie. For a female subject — a dark silk dress with a high collar, hair parted and pulled back. Minimal jewelry.

The daguerreotype aesthetic: the image rendered in the distinctive silver-gray tonality of the original process — not brown sepia, but a cooler metallic silver grey. Extreme fine detail in the face and fabric. The edges of the image slightly vignetted, as if on an actual silver plate.

My expression: completely still — as required by the long exposure times of 1860s photography. A composed, formal Victorian stillness.

Style: the most authentic daguerreotype recreation possible. Place in a simple oval vignette frame border.`,
    tips: [
      "A very neutral, still expression is historically correct — early photography required long stillness.",
      "Try: 'ambrotype style' or '1890s cabinet card' for slightly different historical aesthetics.",
      "Add: 'hand-tinting on the cheeks — a practice of the period'.",
      "Printed on metallic photo paper, this is extraordinarily convincing as a historical artifact."
    ],
    resultHint: "Eerie, convincing, historically fascinating. The silver-grey daguerreotype tones make it look genuinely 160 years old. Deeply compelling."
  },
  {
    id: "69", category: "fantasy", level: "Beginner",
    title: "Garden Fairy Portrait",
    preview: "Gossamer wings, flower-crown, soft dappled light — you as a garden fairy.",
    tags: ["fairy", "magical", "garden", "whimsical"],
    emoji: "🧚",
    full: `Using my uploaded photo, create a whimsical portrait of me as a garden fairy.

Keep my exact facial features. I am in a lush English garden in full bloom — enormous blowsy roses, foxgloves, and lavender surrounding me. I have delicate translucent wings — like a dragonfly's, catching the light. A crown of tiny flowers sits in my hair.

The light: soft, golden, dappled — the kind that comes through a canopy of leaves on a summer afternoon. Tiny motes of magical light drift around me.

My expression: playful, mischievous, joyful — caught mid-moment.

Style: romantic painterly fantasy — reminiscent of Victorian fairy painting (Richard Dadd, John Anster Fitzgerald) but rendered with contemporary photorealism. Warm, lush, and beautiful.`,
    tips: [
      "Describe your hair so the flower crown can be matched: 'dark curly hair' or 'light straight hair'.",
      "Try: 'dark fairy — night garden, moonflowers, shadowed wings' for a gothic version.",
      "Add: 'a tiny hummingbird hovering by my shoulder'.",
      "Beautiful printed large — the floral detail in the background is exquisite."
    ],
    resultHint: "Enchanting, lush, joyful. The Victorian fairy painting aesthetic gives it genuine artistic weight beyond simple whimsy. Warm and magical."
  },
  {
    id: "70", category: "portrait", level: "Advanced",
    title: "Emotion Study Triptych",
    preview: "Three panels — joy, grief, rage — your full emotional range in one artwork.",
    tags: ["triptych", "emotion", "study", "fine art"],
    emoji: "🎨",
    full: `Using my uploaded photo, create a fine art emotion study triptych — three portrait panels showing me expressing three distinct emotional states.

Keep my facial features exactly consistent across all three panels. The three states:

Panel 1 — JOY: eyes crinkling, genuine smile, warm light.
Panel 2 — GRIEF: eyes downcast or wet, expression collapsed inward, cool grey light.
Panel 3 — RAGE: jaw set, eyes intense and direct, hard side light with deep shadows.

Each panel in the same compositional framing — same crop, same distance — so the emotional contrast is purely in the expression and light. A thin dividing line between panels. Each emotion labeled below in small, clean typography.

Style: fine art photography study. Black and white, or each panel in a different carefully chosen tone.`,
    tips: [
      "Request the triptych horizontal or vertical depending on your use case.",
      "Choose different emotions: 'joy, fear, surprise' or 'calm, melancholy, defiance'.",
      "Try: 'the same emotion but across three different ages — young, middle, old'.",
      "Printed large, this is a genuinely powerful fine art wall piece."
    ],
    resultHint: "Arresting, human, deeply felt. The emotional range captured in one artwork creates something genuinely moving. Fine art at its most direct."
  },
  {
    id: "71", category: "futuristic", level: "Intermediate",
    title: "Hologram Projection Portrait",
    preview: "You as a glitching hologram projected in an empty dark room.",
    tags: ["hologram", "glitch", "sci-fi", "projection"],
    emoji: "📡",
    full: `Using my uploaded photo, create a portrait of me rendered as a holographic projection in a dark empty room.

Keep my facial features. Render me as a floating full-body hologram: my figure translucent and blue-white, visible scan lines running horizontally across my form at regular intervals. Small areas of digital glitch — my shoulder briefly pixelating, the edge of my hand breaking into static.

I am in a natural standing pose, as if having a conversation. Around me: the darkness of the room, with the hologram as the only light source, casting faint blue light on the immediate floor.

The hologram quality: not perfect — this is practical technology, not magical. It flickers slightly at the edges.

Style: cinematic sci-fi. The realism of the glitch and scan lines is what sells it. 9:16 portrait format.`,
    tips: [
      "A full standing pose photo gives the best hologram projection result.",
      "Try: 'the hologram is mid-disintegration — dissolving upward into pixels'.",
      "Add: 'a small circular projector device visible on the floor below me'.",
      "Great concept for music artists, event branding, or technology companies."
    ],
    resultHint: "Visually striking, technically convincing. The scan lines and translucency create an immediately recognizable hologram aesthetic with real cinematic quality."
  },
  {
    id: "72", category: "artistic", level: "Beginner",
    title: "Risograph Print Portrait",
    preview: "Misregistered layers, flat ink colors — you as a hand-pulled Riso print.",
    tags: ["risograph", "print", "indie", "graphic"],
    emoji: "🖨️",
    full: `Using my uploaded photo as a reference, create a portrait of me in the aesthetic of a Risograph (Riso) printed poster.

Keep my face recognizable. Render the image using only two or three flat ink colors — choose a characteristic Riso palette: teal, fluorescent pink, and black; or bright red, gold, and dark navy. Each color layer is slightly misregistered — offset by 2–4 pixels in different directions — creating the characteristic Riso double-vision effect.

Halftone dot screens in the shadow areas. Flat, graphic rendering with visible ink texture. No photorealism — this is a print medium.

Background: a single Riso color, perhaps with a simple geometric or botanical pattern element.

Style: contemporary independent poster design — the aesthetic of small-batch art zines and music venue posters. Warm and human.`,
    tips: [
      "Choose your color combination: 'fluorescent orange and teal' is extremely striking.",
      "The misregistration should be subtle — 'slight' not 'extreme' for the authentic look.",
      "Add: 'a simple text element — my name or a word in bold sans-serif'.",
      "Printed at A3, this is the perfect bedroom or studio wall piece."
    ],
    resultHint: "Warm, independent, deeply contemporary. The Riso aesthetic carries cultural associations with creativity and craft. Feels handmade and intentional."
  },
  {
    id: "73", category: "nature", level: "Advanced",
    title: "Overgrown Ruin Portrait",
    preview: "You reclaimed by nature — moss, vines, and time having their way.",
    tags: ["ruin", "overgrown", "nature", "surreal"],
    emoji: "🌿",
    full: `Using my uploaded photo, create a surreal portrait of me partially reclaimed by nature — as if I have been still long enough for the forest to begin growing around and through me.

Keep my exact facial features clearly visible. But my clothing, shoulders, and arms are being overtaken: ivy trails across my left shoulder, a small fern has taken root in the fold of my coat, moss is beginning to form on my sleeve, a flower blooms near my collarbone.

The effect should feel poetic, not horrifying — I look comfortable with it, as if I chose to stand here for a hundred years.

Setting: the interior of a forest ruin — a collapsed stone wall behind me, filtered green light from the canopy above.

My expression: serene, ancient, at peace.

Style: painterly magical realism photography — soft, textured, atmospheric. 4:5 portrait.`,
    tips: [
      "Specify the dominant plant: 'roses and thorns' for beauty-and-danger symbolism.",
      "Try: 'the overgrowth is flowers, not vines — I am becoming a garden'.",
      "Add: 'birds have made a small nest in my hair'.",
      "One of the most philosophically resonant portrait concepts — deeply human."
    ],
    resultHint: "Dreamlike, poetic, genuinely moving. The tension between the human face and the growing nature creates an image of extraordinary quiet power."
  },
  {
    id: "74", category: "cinematic", level: "Beginner",
    title: "Long Hallway Walk-Away Shot",
    preview: "You walking away down an infinite corridor — cinematic, solitary, iconic.",
    tags: ["hallway", "cinematic", "solitary", "depth"],
    emoji: "🚶",
    full: `Using my uploaded photo, create a cinematic shot of me walking away down a long empty hallway or corridor.

Keep my face and general build from the uploaded photo. The composition: I am shown from behind, walking away from the camera, centered in the frame, moving toward a distant vanishing point. The hallway stretches enormously ahead of me.

The hallway options: a grand hotel corridor with ornate patterned carpet and warm wall sconces; or a stark brutalist concrete corridor with cold overhead lighting; or a hospital corridor with fluorescent lights flickering.

My posture: confident, purposeful, unhurried. Long coat or structured jacket. 

Lighting: whatever fits the hallway — warm and opulent, or cold and clinical.

Style: cinematic photography — Kubrick-inspired symmetrical perspective. 9:16 portrait format.`,
    tips: [
      "The hallway choice entirely changes the emotional read — choose deliberately.",
      "Try: 'the hallway has a glowing door at the very far end' for a symbolic touch.",
      "A full-body photo gives the best reference for posture and clothing.",
      "One of the most classically cinematic compositions — timeless and iconic."
    ],
    resultHint: "Instantly cinematic, compositionally perfect. The symmetrical perspective draws the eye inevitably forward. Feels like the opening shot of a prestige film."
  },
  {
    id: "75", category: "portrait", level: "Intermediate",
    title: "Candlelit Close-Up",
    preview: "A single flame, absolute darkness — the most intimate portrait possible.",
    tags: ["candlelight", "intimate", "close-up", "darkness"],
    emoji: "🕯️",
    full: `Using my uploaded photo, create an intimate close-up portrait of me lit by a single candle in complete darkness.

Keep my exact facial features. The only light source: a candle held just below and to the left of my face, casting warm orange-gold light that illuminates the underside of my chin, cheekbones, and one side of my nose. The other side of my face dissolves into near-total darkness.

My eyes catch the candlelight — the flame reflected as a tiny point of warmth in each eye. My expression: still, interior, as if deep in thought. Not looking at the camera — eyes slightly lowered, focused on nothing.

Background: pure darkness — nothing else exists.

Style: old master chiaroscuro photography — the quality of a Caravaggio painting rendered photographically. Extreme contrast, extraordinary skin texture, total intimacy.`,
    tips: [
      "This is the most technically intimate prompt in the library — the result is always striking.",
      "Try: 'I am looking directly into the camera' for a more confrontational version.",
      "Add: 'the candle is almost burned out — only a short nub remaining'.",
      "Printed large on matte paper, the skin and shadow texture is museum quality."
    ],
    resultHint: "Profoundly intimate, technically extraordinary. The single flame against total darkness creates a portrait of timeless emotional and artistic power."
  },
  {
    id: "76", category: "cinematic", level: "Beginner",
    title: "Train Window Reverie",
    preview: "You in motion, the world blurring past — the universal feeling of going somewhere.",
    tags: ["train", "travel", "motion", "cinematic"],
    emoji: "🚆",
    full: `Using my uploaded photo, create a cinematic portrait of me sitting at a train window.

Keep my exact facial features. I am seated at a train window, the landscape outside blurring past in motion — fields, trees, or city buildings reduced to abstract streaks of color and light. The window glass reflects a faint ghost of my face over the rushing exterior.

Warm interior train light from above. I am not looking at the camera — eyes directed at the window, expression: contemplative, peaceful, in-between. Slightly tired, in the best way.

My clothing: simple, comfortable travel clothes. A jacket on the seat beside me.

Style: cinematic travel photography — intimate and universal. Warm interior tones against cool rushing exterior. 4:5 portrait.`,
    tips: [
      "A relaxed, natural expression works best — this is a candid, not a pose.",
      "Try: 'nighttime train — city lights streaking past the window' for a dramatic version.",
      "Add: 'a book open face-down on the seat beside me, forgotten'.",
      "Universal emotional resonance — one of the most relatable cinematic settings."
    ],
    resultHint: "Intimate, universal, emotionally precise. The motion blur outside against the still face creates a beautifully cinematic tension. Feels like everyone's best travel memory."
  },
  {
    id: "77", category: "artistic", level: "Intermediate",
    title: "Neon Sign Letter Portrait",
    preview: "Your face built from glowing neon sign letters and typography — electric and bold.",
    tags: ["typography", "neon", "letters", "graphic"],
    emoji: "🔤",
    full: `Using my uploaded photo as a reference, create a portrait of me constructed entirely from glowing neon sign letters and typographic elements.

Keep my face recognizable — the letters should build up my features the way pixels build an image, but in a looser, more gestural way. Large letters form the main planes of the face; smaller characters fill shadow areas. The letters can be from any alphabet — Latin, Arabic, Japanese katakana — mixed freely.

Each letter glows with neon tube light — warm white and yellow for the light areas, deep magenta and blue for the shadows. The background: absolute black, making the letter-glow the only light source.

Style: contemporary typographic art — the poster design tradition of Stefan Sagmeister, but rendered with photorealistic neon material quality.`,
    tips: [
      "Specify a dominant language or alphabet: 'build me from Japanese characters only'.",
      "Try: 'use only the letters of my name, repeated throughout'.",
      "Change the glow color: 'all green neon — Matrix aesthetic' or 'all warm amber — vintage signage'.",
      "Printed large, the letter-detail at close range is endlessly rewarding."
    ],
    resultHint: "Visually complex, typographically rich, electric. Steps back: a portrait. Steps forward: a universe of glowing letters. A genuinely rewarding artwork."
  },
  {
    id: "78", category: "fantasy", level: "Beginner",
    title: "Sand Dune Desert Prince",
    preview: "Wind-carved dunes, golden light, billowing robes — you as a desert sovereign.",
    tags: ["desert", "sand", "royalty", "golden"],
    emoji: "🏜️",
    full: `Using my uploaded photo, create a portrait of me as a desert prince or princess in a vast golden sand dune landscape.

Keep my exact facial features. Dress me in flowing robes of white and deep indigo, richly embroidered, catching the wind. A light fabric wraps my head, partially framing my face. Gold jewelry — a single ring, a cuff — catches the light.

Setting: the crest of an enormous sand dune at golden hour, the dune sea stretching to the horizon behind me. The wind is moving the fabric and lifting fine sand particles into the air, catching the low orange light.

My expression: calm, surveying, completely sovereign.

Style: cinematic Arabian Nights aesthetic — rich, warm, textured. The quality of a David Lean epic. 9:16 portrait.`,
    tips: [
      "A proud, upright posture photo gives the most regal bearing.",
      "Try: 'Saharan desert' or 'Arabian Empty Quarter' for specific geographic atmospheres.",
      "Add: 'a white Arabian horse visible on the dune behind me'.",
      "The embroidery detail on the robes rewards a large print format."
    ],
    resultHint: "Regal, cinematic, breathtaking. The golden sand and flowing robes create a portrait of extraordinary warmth and visual splendor."
  },
  {
    id: "79", category: "portrait", level: "Beginner",
    title: "Renaissance Selfie",
    preview: "The exact selfie angle and expression — but painted in 1490 by a master.",
    tags: ["renaissance", "selfie", "humor", "painting"],
    emoji: "🤳",
    full: `Using my uploaded photo, recreate my selfie exactly — but painted as if by a Renaissance master in 1490.

Keep my exact pose, expression, framing, and any background elements from the original photo — but render everything in meticulous Renaissance oil painting technique. If I am holding a phone, the painter has faithfully depicted this mysterious flat object. If the background is a bedroom or office, the painter has rendered it in full period-appropriate detail.

Thick impasto paint. Warm amber varnish tones. Masterful rendering of skin, fabric, and light. The kind of craft that takes months.

The joke is the tension: my exact contemporary self, utterly faithfully rendered, in the visual language of Raphael or Titian.

Style: Northern Renaissance or High Renaissance — your choice.`,
    tips: [
      "The funnier your original selfie pose, the better this prompt becomes.",
      "Try: 'painted in the style of a medieval illuminated manuscript' for a flatter, older aesthetic.",
      "Add: 'the painter has included a Latin inscription in the corner attempting to describe a smartphone'.",
      "One of the most shareable prompts in the library — always generates conversation."
    ],
    resultHint: "Immediately funny and technically impressive simultaneously. The collision between contemporary pose and Renaissance craft is both absurd and beautiful."
  },
  {
    id: "80", category: "futuristic", level: "Intermediate",
    title: "Deep Space Isolation Pod",
    preview: "Sleeping in cryogenic suspension — centuries from home, beautifully still.",
    tags: ["cryo", "space", "isolation", "sci-fi"],
    emoji: "🛸",
    full: `Using my uploaded photo, create a cinematic sci-fi portrait of me in cryogenic suspension inside a deep space isolation pod.

Keep my exact facial features. I am lying still inside a transparent cryo-pod — the glass slightly frosted at the edges. My face is peaceful, eyes closed, skin pale with the faint blue-white glow of the cryo-field surrounding my body.

Through the pod glass: the interior of a vast deep space vessel visible beyond me — other pods in rows, faint emergency lighting, the deep black of space through a distant porthole.

Tiny ice crystals form on my eyelashes and hair. I look completely at peace — suspended between two lives.

Style: cinematic hard sci-fi — the aesthetic of Alien, Passengers, or Interstellar. Ultra-realistic. Cool blues and whites with amber emergency lighting accents.`,
    tips: [
      "A relaxed, eyes-closed photo gives the best cryosleep reference.",
      "Try: 'the pod is just opening — I am awakening, disoriented' for a different moment.",
      "Add: 'mission patches on my suit visible inside the pod' for worldbuilding detail.",
      "The frosted glass texture is the key detail — ask for it to be prominent."
    ],
    resultHint: "Cinematic, eerily beautiful, contemplative. The frosted glass and cryo-glow create a portrait that is both science fiction and deeply peaceful."
  },
  {
    id: "81", category: "editorial", level: "Intermediate",
    title: "Newspaper Front Page",
    preview: "Breaking news — you as the subject of a major broadsheet front page.",
    tags: ["newspaper", "editorial", "journalism", "graphic"],
    emoji: "📰",
    full: `Using my uploaded photo, create a realistic newspaper front page featuring me as the main story subject.

Keep my facial features exactly. Place a large editorial-style photo of me — serious, direct expression — prominently on the front page. The newspaper design: authentic broadsheet layout with a masthead at top reading "THE MORNING HERALD" in classic serif newspaper typography.

A bold headline above my photo: customize this to whatever story you want to tell — "LOCAL DESIGNER WINS INTERNATIONAL AWARD" or make it fictional and dramatic. Sub-headline. A few lines of body text in column format below. A pull quote.

Other small stories visible in the columns beside and below the main story. Date. Issue number.

Style: authentic quality newspaper design — The Times or New York Times visual language. Black and white editorial photography for my portrait. Slightly aged newsprint texture.`,
    tips: [
      "Customize the headline completely — make it reflect a real achievement or a funny fictional one.",
      "Try: 'a tabloid front page instead — yellow journalism energy, bold caps, slightly sensational'.",
      "Add: 'a second smaller photo of me at a podium or receiving an award'.",
      "A personalized version of this makes an excellent gift — print and frame."
    ],
    resultHint: "Convincingly authentic, immediately personal. The newsprint texture and typography make it look genuinely publishable. Endlessly customizable."
  },
  {
    id: "82", category: "cinematic", level: "Advanced",
    title: "Car Chase Passenger Shot",
    preview: "Speed, motion blur, urgency — you mid-chase, the city smearing past.",
    tags: ["car", "chase", "action", "motion"],
    emoji: "🚗",
    full: `Using my uploaded photo, create a cinematic action portrait of me as the passenger in a high-speed car chase.

Keep my exact facial features. I am in the passenger seat, one hand on the dashboard, leaning slightly forward — every muscle engaged. The car is moving at speed: through the windows, city streets are smearing into light trails and color. Oncoming headlights streak past.

The interior: night-lit by dashboard glow and passing streetlights. My expression: alert, adrenaline-focused, completely in the moment — not afraid, but fully alive.

The window is open slightly — wind catching my hair.

Style: Michael Mann-level cinematic car photography — Heat, Collateral, Drive. The car interior as a contained world. Deep shadows, dashboard light, city streaks. 16:9 wide format.`,
    tips: [
      "An alert, focused expression is key — avoid wide eyes of fear; aim for controlled urgency.",
      "Try: 'I am the driver instead — both hands on the wheel, jaw set'.",
      "Specify the city: 'Los Angeles freeway at 2am' or 'Paris boulevard at night'.",
      "The dashboard light color changes the whole mood: 'amber' vs 'blue-green' vs 'red'."
    ],
    resultHint: "Adrenaline-soaked, technically dazzling. The motion streaks and dashboard glow create a portrait of pure cinematic velocity."
  },
  {
    id: "83", category: "retro", level: "Beginner",
    title: "Polaroid Grid Wall",
    preview: "A wall of overlapping Polaroids — every one of you, candid and warm.",
    tags: ["polaroid", "collage", "wall", "nostalgic"],
    emoji: "🖼️",
    full: `Using my uploaded photo, create an image of a wall covered in overlapping Polaroid photographs — all of them featuring me.

Generate multiple Polaroid crops from my photo: different zoom levels, different expressions (inferred), different angles. Each Polaroid has the characteristic thick white border and the handwritten caption area at the bottom — different short captions on each: "summer", "laughing", "finally", "3am", "us".

The Polaroids are arranged in a casual overlapping grid on a textured wall — some straight, some slightly tilted. A few have small stickers on them. One is faded more than the others.

Each individual Polaroid: warm color tone, slightly overexposed, the characteristic Polaroid color science with muted highlights and milky shadows.

Style: intimate analog photography aesthetic. Personal, warm, lived-in.`,
    tips: [
      "Provide a few different natural photos of yourself for richer variation across the Polaroids.",
      "Customize the handwritten captions to real dates or inside references.",
      "Try: 'the wall is a corkboard with pushpins instead' for a different backing texture.",
      "This works beautifully as a phone wallpaper or bedroom print."
    ],
    resultHint: "Warm, personal, deeply nostalgic. The overlapping Polaroids create an atmosphere of accumulated memory and genuine life lived."
  },
  {
    id: "84", category: "nature", level: "Intermediate",
    title: "Bioluminescent Beach at Night",
    preview: "Glowing blue waves lapping at your feet — magic made real by nature.",
    tags: ["bioluminescent", "beach", "night", "magical"],
    emoji: "🌊",
    full: `Using my uploaded photo, create a portrait of me on a bioluminescent beach at night.

Keep my exact facial features. I am standing at the water's edge — barefoot in the sand, waves lapping softly around my feet and ankles. Each wave glows with brilliant electric blue bioluminescence — the water alive with light where it moves and breaks.

The beach is otherwise dark — only moonlight and the bioluminescent glow illuminating me. The blue light from below catches the underside of my face and reflects off my skin. My expression: awed, joyful, completely present.

Setting: a secluded beach, palm silhouettes visible against the moonlit sky.

Style: nature photography meets magic realism — ultra-realistic bioluminescent light rendering. Deep blue and soft silver tones. 4:5 portrait.`,
    tips: [
      "The bioluminescent light source from below creates a uniquely beautiful under-lighting.",
      "Try: 'I am sitting in the water, waves breaking around me' for more immersion.",
      "Add: 'my hand is trailing in the water, leaving a glowing blue wake'.",
      "Real bioluminescent beaches exist — Maldives, Puerto Rico — add a location for realism."
    ],
    resultHint: "Magical, genuinely awe-inspiring. The electric blue bioluminescence against total beach darkness is one of nature's most extraordinary visuals."
  },
  {
    id: "85", category: "artistic", level: "Advanced",
    title: "Brutalist Architecture Poster",
    preview: "Raw concrete, bold typography, Soviet-scale ambition — you as a monumental poster.",
    tags: ["brutalist", "concrete", "poster", "bold"],
    emoji: "🏗️",
    full: `Using my uploaded photo, create a Brutalist-inspired graphic poster featuring my face.

Keep my face recognizable but render it with heavy contrast and graphic boldness — reduced to strong shadow planes, simplified forms, the subtlety of photography stripped away in favor of graphic impact.

Background: raw concrete texture — the actual material texture of poured concrete with formwork marks and aggregate. Bold typographic elements integrated into the composition: large uppercase sans-serif text reading "CONSTRUCT" (or a word of your choice) at an unconventional angle.

Color palette: severely limited — concrete grey, deep black, one single bold accent color (choose: red, yellow, or white). No gradients. Every element is intentional and structural.

Style: Brutalist graphic design movement — raw material honesty, functional form, zero ornamentation. Powerful.`,
    tips: [
      "A high-contrast, strong-shadow photo gives the most graphic reduction.",
      "The single accent color choice changes everything: 'red' reads urgent, 'yellow' reads bold, 'white' reads clean.",
      "Try: 'replace the text with your name in Helvetica Neue Black'.",
      "Printed on uncoated paper stock, the concrete texture looks tactile and real."
    ],
    resultHint: "Uncompromising, structurally powerful, graphic. The raw material aesthetic creates a portrait that feels built rather than photographed."
  },
  {
    id: "86", category: "fantasy", level: "Intermediate",
    title: "Mermaid Depth Portrait",
    preview: "Deep water, coral light, scales catching the sun — you beneath the surface.",
    tags: ["mermaid", "ocean", "fantasy", "underwater"],
    emoji: "🧜",
    full: `Using my uploaded photo, create a fantasy underwater portrait of me as a mermaid or merman.

Keep my exact facial features. My upper body is human — but from the waist down, a powerful tail of iridescent scales: deep sapphire, aquamarine, and flecks of gold catching the light.

I am suspended in clear warm tropical water — dappled sunlight filtering down from above in shafts of gold and green, creating caustic light patterns across my skin and scales. My hair drifts gently upward in the current.

My expression: serene, powerful, completely at home. Not performing — simply being.

Surrounding me: a coral reef, small tropical fish drifting by, soft sea anemones in the distance.

Style: cinematic underwater photography meets fantasy illustration — painterly, luminous, warm. 9:16 portrait format.`,
    tips: [
      "Specify your scale color: 'deep emerald and copper' or 'midnight purple and silver'.",
      "Try: 'dark ocean setting — abyssal zone, cold and deep' for a completely different tone.",
      "Add: 'I am holding a glowing trident' for a more regal, powerful version.",
      "A full-body photo gives the best reference for the tail transition point."
    ],
    resultHint: "Luminous, fantastical, genuinely beautiful. The caustic underwater light creates extraordinary skin texture. Warm and otherworldly simultaneously."
  },
  {
    id: "87", category: "portrait", level: "Advanced",
    title: "Four Seasons Quadrant",
    preview: "Spring, summer, autumn, winter — you in all four, one unified portrait.",
    tags: ["seasons", "quadrant", "nature", "series"],
    emoji: "🍂",
    full: `Using my uploaded photo, create a four-panel seasonal portrait of me — one panel per season, arranged in a 2×2 grid.

Keep my facial features exactly consistent across all four panels. Same composition, same framing — only the environment, light, and styling changes with each season.

Top-left — SPRING: soft cherry blossom light, fresh green, cool-warm air.
Top-right — SUMMER: golden harsh sun, sharp shadows, warm skin.
Bottom-left — AUTUMN: amber and crimson, the quality of October afternoon light.
Bottom-right — WINTER: cool blue-white, snow falling, breath visible.

Each panel's lighting and color grade precisely matches its season. A thin dividing line between panels. Season name labeled in small clean typography on each.

Style: fine art portrait photography series. Precise, considered, unified.`,
    tips: [
      "This works best with a consistent, direct expression across all panels.",
      "Try: 'make each panel a different artistic style — spring: watercolor, summer: photography'.",
      "Customize clothing to match each season rather than keeping it consistent.",
      "Printed as a quad in one frame, this is one of the most beautiful wall pieces possible."
    ],
    resultHint: "Considered, beautiful, complete. The four seasonal lights on one face create a portrait that feels like a year captured in a single artwork."
  },
  {
    id: "88", category: "futuristic", level: "Beginner",
    title: "Retro-Futurist Space Ad",
    preview: "1950s optimism meets outer space — you in a vintage rocket-age advertisement.",
    tags: ["retro-futurism", "space", "50s", "advertising"],
    emoji: "🛸",
    full: `Using my uploaded photo, create a 1950s-style retro-futurist space travel advertisement featuring me.

Keep my facial features. Style me in authentic 1950s fashion: for a male figure — a sharply tailored suit, narrow tie, pocket square. For a female figure — a full-skirt dress or a sleek 50s travel outfit. My expression: the optimistic, slightly exaggerated smile of mid-century advertising.

Setting: a stylized rocket launchpad or a luxury space liner observation deck, rendered in the bright, saturated illustration style of 1950s travel posters. Bold primary colors. Clean geometric shapes.

Advertising copy overlaid in period-accurate typography: "VISIT MARS — A WEEKEND GETAWAY" or similar. A fictional travel company logo.

Style: the visual language of Pan Am, Bonestell, and Saturday Evening Post covers. Optimistic, clean, mid-century perfect.`,
    tips: [
      "A bright, smiling, confident expression sells the advertising aesthetic.",
      "Customize the destination: 'Weekend on the Moon' or 'Jupiter — The New Frontier'.",
      "Try: 'rendered as a fully painted illustration — no photographic element at all'.",
      "Prints perfectly as a vintage travel poster for home or studio walls."
    ],
    resultHint: "Joyful, nostalgic, visually optimistic. The collision of 1950s design language with space travel creates an image of boundless charm."
  },
  {
    id: "89", category: "cinematic", level: "Intermediate",
    title: "Interrogation Room Portrait",
    preview: "One harsh bulb, a metal table, shadows — the most cinematic room in the world.",
    tags: ["interrogation", "thriller", "shadows", "dramatic"],
    emoji: "💡",
    full: `Using my uploaded photo, create a cinematic interrogation room portrait of me.

Keep my exact facial features. I am seated at a metal table in a stark interrogation room — bare concrete walls, a one-way mirror on the far wall. A single hanging incandescent bulb casts a harsh, hard-edged light directly overhead.

My expression: depends on my role. Option A: I am completely calm, arms folded, expressionless — clearly the most dangerous person in the room. Option B: I know something, and I am deciding whether to share it.

Deep shadows under my eyes, strong jaw highlight, the rest of my face falling into darkness.

Style: the visual language of prestige crime cinema — True Detective, Mindhunter, Sicario. Desaturated, clinical, brutal. 4:5 portrait.`,
    tips: [
      "Choose your character before generating: 'I am the detective' vs 'I am the suspect' changes everything.",
      "Try: 'the overhead light is swinging slightly — motion blur on the light'.",
      "Add: 'a single folder of documents on the table in front of me'.",
      "The desaturation level is key — ask for 'heavily desaturated, almost black and white'."
    ],
    resultHint: "Tense, cinematic, completely committed. The single harsh bulb creates the most dramatically effective portrait lighting in crime cinema history."
  },
  {
    id: "90", category: "editorial", level: "Advanced",
    title: "Haute Couture Runway Exit",
    preview: "Post-runway: backstage light, still dressed, the show just ended.",
    tags: ["couture", "runway", "fashion", "backstage"],
    emoji: "👗",
    full: `Using my uploaded photo, create an editorial portrait of me in an extraordinary haute couture garment, photographed in the moments after walking a runway show.

Keep my exact facial features. Dress me in a spectacular fictional haute couture creation — describe it yourself or ask for: an architectural sculptural dress in ivory organza, a dramatic feathered black coat, or an asymmetric embroidered gown. The garment should be genuinely extraordinary — the kind of thing only seen once a year in Paris.

Setting: backstage immediately after the walk — a narrow corridor with warm overhead glow, other garment bags visible in the background. I am still in full runway makeup and hair. Expression: post-show stillness — the adrenaline settling.

Style: backstage fashion photography — the intimate, unguarded quality of a Vogue backstage series. Beautiful and real simultaneously.`,
    tips: [
      "Describe the garment in detail for best results: material, silhouette, color, structure.",
      "Try: 'front-of-house runway shot instead — walking toward camera, crowd blurred behind'.",
      "Add: 'a fashion assistant adjusting the hem of the garment in the corner of frame'.",
      "Pair with the Magazine Cover (03) and Perfume Campaign (55) for a full fashion editorial."
    ],
    resultHint: "Exquisite, aspirational, genuinely couture-level. The backstage intimacy combined with extraordinary garment creates a portrait of rare elegance."
  },
  {
    id: "91", category: "artistic", level: "Beginner",
    title: "Vintage Botanical Illustration",
    preview: "18th-century natural history style — you surrounded by meticulously painted flora.",
    tags: ["botanical", "illustration", "vintage", "nature"],
    emoji: "🌺",
    full: `Using my uploaded photo, create a portrait of me in the style of an 18th-century botanical natural history illustration.

Keep my face recognizable. Render me in the precise, meticulous linework and watercolor technique of historical botanical illustration — think the Duchess of Portland's collection, or Robert Thornton's Temple of Flora.

Around and integrated with my portrait: extraordinary botanical specimens rendered with scientific precision — exotic flowers, detailed leaves, seed pods, cross-sections — all meticulously labeled in copperplate script. My clothing: period-appropriate 18th century, rendered in the same illustration style.

The overall composition: a plate from a magnificent natural history folio. Cream paper background with slight foxing and age marks.

Style: the highest level of 18th century botanical and natural history illustration. Scientific precision meeting artistic beauty.`,
    tips: [
      "Specify favorite or meaningful flowers: 'surround me with peonies and jasmine'.",
      "Try: 'replace botanicals with insects and butterflies — entomological illustration style'.",
      "Add: 'my name written in copperplate at the bottom: Plate XII — [Your Name]'.",
      "Printed on aged paper stock, this is an extraordinary and unique artwork."
    ],
    resultHint: "Exquisite, scholarly, genuinely beautiful. The precision of botanical illustration applied to a portrait creates something entirely unique and deeply cultured."
  },
  {
    id: "92", category: "fantasy", level: "Advanced",
    title: "God of Thunder Storm Throne",
    preview: "Seated on a storm cloud, lightning answering your call — pure divine power.",
    tags: ["god", "thunder", "divine", "epic"],
    emoji: "⚡",
    full: `Using my uploaded photo, create a divine epic portrait of me as a thunder deity seated on a throne of storm clouds.

Keep my exact facial features. I am seated on a massive throne that is made entirely of churning storm clouds — grey-white cumulus, crackling with lightning from within. My clothing: a divine garment of deep storm grey and electric silver, flowing into the clouds below me.

From my hands, or simply surrounding me: thick bolts of lightning branch and arc outward in every direction, illuminating my face with their harsh white light. Behind me: the open sky — an infinite wall of storm.

My expression: absolute calm. The eyes of someone who did not summon the storm — the storm summoned them.

Style: epic mythological digital painting — Frank Frazetta scale, cinematic realism rendering. Maximum drama. 9:16 portrait.`,
    tips: [
      "A completely calm, composed expression contrasts most powerfully with the chaos.",
      "Try: 'goddess of the sea — throne of ocean waves' or 'god of fire — throne of lava'.",
      "Add: 'a raven or eagle perched on my arm' for mythological depth.",
      "The lightning illumination is the key — ask for 'multiple simultaneous strikes' for maximum drama."
    ],
    resultHint: "Operatic, mythologically powerful, visually overwhelming. The calm face against surrounding lightning is a compositional masterstroke."
  },
  {
    id: "93", category: "retro", level: "Intermediate",
    title: "Vintage Travel Passport Photo",
    preview: "A whole fictional passport — you as a citizen of somewhere extraordinary.",
    tags: ["passport", "travel", "vintage", "identity"],
    emoji: "🛂",
    full: `Using my uploaded photo, create a realistic fictional vintage passport document featuring me.

Keep my facial features for the passport photo. Design a complete fictional vintage passport — ideally from a fictional or nostalgic country, circa 1960s–1970s aesthetic. 

The passport design: a rich deep colour cover (midnight blue, forest green, or burgundy) with embossed fictional country seal in gold. Inside spread showing: my passport photo (in the style of official documents — slightly harsh light, white background), a fictional name, fictional country of origin with an evocative name, date of birth, various entry/exit stamps from exotic locations with dates.

Visa stamps: beautiful artistic versions from fictional places — colorful, detailed, worn from use.

Style: authentic vintage document design — the beauty of a well-traveled 1960s passport.`,
    tips: [
      "Invent an evocative fictional country name for maximum personality.",
      "Fill the stamps with real places you've visited or dream of visiting.",
      "Try: 'a contemporary passport design — my real country, modern aesthetic'.",
      "The entry stamps are the most beautiful detail — ask for 'heavily stamped, 20+ stamps'."
    ],
    resultHint: "Detailed, personal, evocative. A fully designed document that tells a story of travel and identity. Beautiful as a print and deeply personal."
  },
  {
    id: "94", category: "nature", level: "Beginner",
    title: "Cherry Blossom Sakura Portrait",
    preview: "Soft pink petals raining down — the most beautiful moment of the Japanese spring.",
    tags: ["sakura", "cherry blossom", "japan", "spring"],
    emoji: "🌸",
    full: `Using my uploaded photo, create a portrait of me under a cherry blossom tree at full bloom.

Keep my exact facial features. I am standing or sitting beneath an enormous sakura tree in full bloom — the branches heavy with soft pink and white blossoms, a constant gentle snow of falling petals drifting around me. Some petals rest in my hair and on my shoulders.

The light: the extraordinarily beautiful diffused pink-tinged light that exists only under a cherry tree in bloom — soft, warm, magical.

My expression: peaceful, slightly upward-looking, completely present in the moment.

Setting: a Japanese park — perhaps a path, a stone lantern partially visible in the background.

Style: fine art lifestyle photography — the visual language of Japanese spring. Soft, romantic, luminous. 4:5 portrait.`,
    tips: [
      "Any photo works — this is a complete environment replacement.",
      "Try: 'I am in a kimono' for a fully Japanese aesthetic.",
      "Add: 'I am holding a branch of blossom, examining one small flower closely'.",
      "The petals-in-hair detail is the most beautiful element — ask for it explicitly."
    ],
    resultHint: "Breathtakingly beautiful, soft, and romantic. The sakura light is unlike any other — it creates a portrait of extraordinary delicacy and warmth."
  },
  {
    id: "95", category: "cinematic", level: "Beginner",
    title: "Bookshop Afternoon Portrait",
    preview: "Warm light, full shelves, the smell of paper — you in the perfect bookshop moment.",
    tags: ["bookshop", "warm", "cozy", "cinematic"],
    emoji: "📖",
    full: `Using my uploaded photo, create a cinematic portrait of me in a beautiful independent bookshop.

Keep my exact facial features. I am standing in an aisle of floor-to-ceiling bookshelves — the shelves stretching behind me, books in every color. The light: warm, late afternoon, filtering from a front window and casting long soft shadows through the stacks.

I am holding an open book, caught mid-page — not posing, genuinely reading a passage that has arrested me. Expression: absorbed, slightly surprised by something I've just read. My clothing: comfortable, intelligent-casual.

Style: warm cinematic photography — the light quality of a late afternoon in an old bookshop. Shallow depth of field, the book spines behind me softly blurred. 4:5 portrait.`,
    tips: [
      "A relaxed, natural expression gives the most authentic 'genuinely reading' quality.",
      "Specify the bookshop type: 'second-hand', 'rare books', 'a grand Victorian reading room'.",
      "Add: 'a cup of tea on a small step stool beside me'.",
      "Try: 'nighttime — the bookshop is closed, I am the only one here, reading by lamplight'."
    ],
    resultHint: "Warm, intellectual, completely inviting. The book-spine bokeh and afternoon light create a portrait of ideal cozy contentment."
  },
  {
    id: "96", category: "editorial", level: "Beginner",
    title: "Album Liner Notes Portrait",
    preview: "The inside of a debut album — you as the artist, grainy and intimate.",
    tags: ["music", "album", "liner notes", "intimate"],
    emoji: "🎵",
    full: `Using my uploaded photo, create a portrait of me in the style of album liner notes photography from a debut indie album.

Keep my exact facial features. The portrait should feel intimate, slightly unguarded — the kind of photo an artist's friend takes. Not a glamour shot; an honest portrait.

Style: the visual language of indie album art — slightly grainy, high-quality 35mm film aesthetic. Warm, low-contrast, slightly faded. I might be sitting on a bare floor, on a fire escape, or in a plain room. Simple clothes. Expression: relaxed, slightly vulnerable — the face behind the music.

Include album design elements: my name in a small, carefully chosen typeface. A fictional album title: "QUIET HOURS" or similar. Side A / Side B track listing in small print along the bottom.

Format: the inner gatefold spread of a 12" vinyl album.`,
    tips: [
      "A natural, unposed photo gives the most authentic liner notes energy.",
      "Customize the album title and track listing to make it genuinely personal.",
      "Try: 'outer album cover instead — more designed, less intimate'.",
      "Combine with the Vinyl Record Cover (27) for a complete album art package."
    ],
    resultHint: "Intimate, honest, genuinely musical. The liner notes format invites closeness. Feels like a portrait taken by someone who knows and loves you."
  },
  {
    id: "97", category: "artistic", level: "Intermediate",
    title: "Ukiyo-e Woodblock Print",
    preview: "Bold flat lines, Mt. Fuji in the distance — you in the Edo-period tradition.",
    tags: ["ukiyo-e", "japanese", "woodblock", "traditional"],
    emoji: "🗻",
    full: `Using my uploaded photo as a reference, create a portrait of me rendered as a traditional Japanese ukiyo-e woodblock print.

Keep my facial features, but stylize them completely in the ukiyo-e tradition: graceful elongated features, clearly defined flat color areas separated by precise black outlines, the characteristic rendering of hair in sweeping brushstroke forms.

My clothing: a richly patterned kimono with detailed textile patterns — waves, cranes, cherry blossoms, or geometric patterns. The background: a classic ukiyo-e landscape element — a glimpse of Mt. Fuji, a stylized wave, or a full moon over pine trees.

Color palette: the authentic ukiyo-e woodblock palette — indigo blue, vermillion, black, gold, pale yellow, pine green. No gradients — pure flat color with visible woodblock texture.

Style: the masters of the tradition — Hiroshige, Hokusai, Utamaro. Precise, elegant, timeless.`,
    tips: [
      "Specify the kimono pattern: 'cranes and pine needles' or 'flowing water and koi'.",
      "Try: 'the background is the Great Wave — I am on the shore observing'.",
      "Add: 'a haiku written in Japanese calligraphy in the upper right corner'.",
      "Printed on rice paper or textured stock, this is an extraordinary artwork."
    ],
    resultHint: "Serene, elegant, culturally rich. The flat ukiyo-e color areas and precise line work create a portrait of timeless beauty and artistic tradition."
  },
  {
    id: "98", category: "portrait", level: "Beginner",
    title: "Superhero Costume Reveal",
    preview: "Torn civilian clothes, revealed suit beneath — your hero moment has arrived.",
    tags: ["superhero", "costume", "action", "hero"],
    emoji: "🦸",
    full: `Using my uploaded photo, create a portrait of me in a superhero costume reveal moment.

Keep my exact facial features. Design me a completely original superhero suit — not an existing character's costume. Your design: a sleek, modern suit in deep midnight blue and silver, or crimson and black, or forest green and gold — whatever feels most 'you'. The suit has a distinctive symbol on the chest.

The moment: I am standing tall, confident, one hand raised slightly — the pose of someone who has just arrived and intends to matter. Behind me: a city skyline, stormy sky, dramatic lighting.

My expression: determined, calm, completely certain.

Style: contemporary superhero film photography — Marvel/DC cinematic quality. Dramatic rim lighting, epic scale. 9:16 portrait.`,
    tips: [
      "Describe your ideal suit in detail: color, material, symbol, cape or no cape.",
      "Try: 'dark, grounded, realistic suit — less Marvel, more Nolan-era Batman'.",
      "Add: 'the symbol on my chest glows softly with energy'.",
      "Ask for your superhero name in a title treatment at the bottom of the image."
    ],
    resultHint: "Empowering, epic, surprisingly personal. Your own original superhero identity — not borrowed from existing IP. Genuinely yours."
  },
  {
    id: "99", category: "futuristic", level: "Advanced",
    title: "Time Traveler's First Moment",
    preview: "The coordinates set, the destination unknown — the face before the leap.",
    tags: ["time travel", "sci-fi", "concept", "dramatic"],
    emoji: "⏱️",
    full: `Using my uploaded photo, create a cinematic portrait of me as a time traveler in the moment before departure.

Keep my exact facial features. I am standing inside a time machine or temporal displacement chamber: surrounding me, rings of electrical energy, arcing sparks of blue-white light, a humming field of distortion bending the air. Below me: a circular floor platform with temporal coordinates glowing.

My clothing: layered, practical, with details suggesting many eras — a Victorian waistcoat visible under a modern jacket, a future-tech device on my wrist.

My expression: the expression of someone who knows exactly what they're doing and has done it before — calm, focused, slightly exhilarated.

Style: cinematic sci-fi — the quality of Arrival meets Doctor Who meets Tenet. The temporal distortion field is ultra-realistic. Electrical arcs cast harsh shadows. 9:16 portrait.`,
    tips: [
      "The layered cross-era clothing is a storytelling detail — specify your era mix.",
      "Try: 'I have just arrived — disheveled, coat smoking slightly, expression of relief'.",
      "Add: 'a pocket watch open in my hand, hands spinning in both directions'.",
      "The expression of 'calm certainty' is the key emotional note to request."
    ],
    resultHint: "Conceptually rich, visually electric, cinematically thrilling. The temporal distortion field creates a portrait that crackles with energy and narrative possibility."
  },
  {
    id: "100", category: "cinematic", level: "Advanced",
    title: "The Last Frame",
    preview: "A closing shot. The end of your film — you walking into whatever comes next.",
    tags: ["cinematic", "final", "emotional", "iconic"],
    emoji: "🎬",
    full: `Using my uploaded photo, create the final frame of my film — the closing shot of a movie about my life.

Keep my exact facial features. The setting is your choice — but it should feel like an ending that is also a beginning: a road stretching to the horizon, a shoreline at the edge of a continent, an airport terminal, a front door.

I am walking away, or standing still at the threshold — facing what comes next. The light: the golden, slightly overexposed warmth of a cinematic final frame. The camera is slightly behind me, or at a low angle looking up.

Optional: a title card in elegant serif typography appears over the image, or closing credits begin to roll.

My expression, visible or suggested: the quiet resolution of someone who has been through something, and come out the other side.

Style: the final frames of the greatest films — Shawshank, Lost in Translation, Before Sunset. Still. True. Complete.`,
    tips: [
      "The location you choose is deeply personal — it should mean something to you.",
      "Try: 'the final frame is black and white' for a more timeless, classic quality.",
      "Add: 'my name appears as the title card over the image'.",
      "This is the most emotionally resonant prompt in the library — generate it when you're ready."
    ],
    resultHint: "Quietly devastating, cinematically perfect, deeply personal. The closing frame of your story — whatever that means to you. The most powerful portrait possible."
  }
];

/* ── IFRAME RESULT ────────────────────────────────────────── */
let currentResultUrl = '';

function loadResultIframe() {
  if (!currentResultUrl) return;
  const wrap = document.getElementById('resultIframeWrap');
  const preview = document.getElementById('resultPreview');
  const iframe = document.getElementById('resultIframe');
  const loading = document.getElementById('iframeLoading');
  const urlDisplay = document.getElementById('iframeUrlDisplay');

  preview.style.display = 'none';
  wrap.classList.add('loaded');
  loading.classList.remove('hidden');
  urlDisplay.textContent = currentResultUrl;

  iframe.onload = () => {
    loading.classList.add('hidden');
  };
  iframe.src = currentResultUrl;
}

function closeResultIframe() {
  const wrap = document.getElementById('resultIframeWrap');
  const preview = document.getElementById('resultPreview');
  const iframe = document.getElementById('resultIframe');

  wrap.classList.remove('loaded');
  preview.style.display = '';
  iframe.src = 'about:blank';
}

function resetResultPanel() {
  const wrap = document.getElementById('resultIframeWrap');
  const preview = document.getElementById('resultPreview');
  const iframe = document.getElementById('resultIframe');
  const loading = document.getElementById('iframeLoading');

  wrap.classList.remove('loaded');
  preview.style.display = '';
  iframe.src = 'about:blank';
  loading.classList.remove('hidden');
}

/* ── RENDER CARDS ─────────────────────────────────────────── */
const grid = document.getElementById('promptGrid');
const panel = document.getElementById('detailPanel');
let activeCard = null;
let activeIndex = null;

function renderCards(filter = 'all') {
  grid.innerHTML = '';
  panel.classList.remove('open');
  activeCard = null;
  activeIndex = null;

  const filtered = filter === 'all' ? prompts : prompts.filter(p => p.category === filter);

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'prompt-card reveal';
    card.dataset.index = i;
    card.innerHTML = `
      <div class="card-top">
        <span class="card-index">// ${p.id}</span>
        <span class="card-category">${p.category}</span>
      </div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-preview">${p.preview}</p>
      <div class="card-footer">
        <span class="card-level">${p.level}</span>
        <span class="card-cta">View prompt <span class="card-arrow"></span></span>
      </div>
    `;
    card.addEventListener('click', () => openPanel(p, card, i));
    grid.appendChild(card);

    setTimeout(() => {
      card.classList.add('visible');
    }, i * 60 + 100);
  });

  // re-insert panel at the end of grid
  grid.appendChild(panel);
}

/* ── OPEN PANEL ──────────────────────────────────────────── */
function openPanel(p, cardEl, idx) {
  // deactivate old
  document.querySelectorAll('.prompt-card.active-card').forEach(c => c.classList.remove('active-card'));

  if (activeIndex === idx) {
    panel.classList.remove('open');
    activeIndex = null;
    return;
  }

  activeIndex = idx;
  cardEl.classList.add('active-card');

  document.getElementById('panelIndex').textContent = `// PROMPT ${p.id} · ${p.category.toUpperCase()}`;
  document.getElementById('panelTitle').textContent = p.title;
  document.getElementById('panelPrompt').textContent = p.full;
  document.getElementById('panelEmoji').textContent = p.emoji;
  document.getElementById('panelResultHint').textContent = p.resultHint;

  // set result URL for iframe (fallback to a search if no dedicated url)
  currentResultUrl = p.resultUrl || `https://www.google.com/search?q=${encodeURIComponent(p.title + ' AI portrait example')}&tbm=isch`;
  resetResultPanel();

  // tags
  const tagsEl = document.getElementById('panelTags');
  tagsEl.innerHTML = p.tags.map(t => `<span class="panel-tag">${t}</span>`).join('');

  // tips
  const tipsEl = document.getElementById('panelTips');
  tipsEl.innerHTML = p.tips.map(t => `
    <div class="tip-item">
      <div class="tip-dot"></div>
      <p class="tip-text">${t}</p>
    </div>
  `).join('');

  panel.classList.add('open');

  // move panel after clicked card's row
  // Insert panel after card element
  cardEl.after(panel);

  setTimeout(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 100);

  // reset copy btn
  document.getElementById('copyBtn').textContent = 'COPY';
  document.getElementById('copyBtn').classList.remove('copied');
}

/* ── COPY ─────────────────────────────────────────────────── */
document.getElementById('copyBtn').addEventListener('click', () => {
  const text = document.getElementById('panelPrompt').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = 'COPIED ✓';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'COPY';
      btn.classList.remove('copied');
    }, 2000);
  });
});

/* ── CLOSE ────────────────────────────────────────────────── */
document.getElementById('panelClose').addEventListener('click', () => {
  panel.classList.remove('open');
  document.querySelectorAll('.prompt-card.active-card').forEach(c => c.classList.remove('active-card'));
  activeIndex = null;
});

/* ── FILTERS ──────────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards(btn.dataset.filter);
  });
});

/* ── SCROLL REVEAL ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

/* ── INIT ─────────────────────────────────────────────────── */
renderCards();
