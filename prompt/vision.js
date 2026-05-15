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
