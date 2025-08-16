
import { Pest } from "./types";

export const pests: Pest[] = [
  {
    id: 1,
    name: "Aphid",
    scientificName: "Aphidoidea",
    category: "Insect",
    severity: "Medium",
    description: "Aphids are small sap-sucking insects that can appear in a range of colors including green, black, brown, and pink. They typically cluster on new growth and the undersides of leaves. Aphids reproduce rapidly and can quickly become a serious problem as they weaken plants by sucking sap and can transmit plant viruses.",
    imageUrl: "/uploads/b45638d3-53ba-4a45-85ca-299d9ca57c97.png",
    damageSigns: [
      "Curled or distorted leaves",
      "Stunted growth",
      "Yellowing foliage",
      "Sticky honeydew residue on leaves",
      "Sooty mold growth on honeydew",
      "Presence of ants (attracted to honeydew)"
    ],
    preventionTips: [
      "Encourage beneficial insects like ladybugs and lacewings",
      "Use reflective mulch to deter aphids",
      "Plant trap crops like nasturtiums",
      "Remove heavily infested plant parts",
      "Use water spray to dislodge aphids from plants"
    ],
    affectedCrops: [
      "Lettuce", "Cabbage", "Kale", "Beans", "Potatoes", "Tomatoes", "Peppers", "Cucumber", "Rose"
    ]
  },
  {
    id: 2,
    name: "Tomato Hornworm",
    scientificName: "Manduca quinquemaculata",
    category: "Caterpillar",
    severity: "High",
    description: "Tomato hornworms are large, green caterpillars that can grow up to 4 inches long with a distinctive horn on their rear end. They are voracious feeders that can defoliate tomato plants and other nightshades very quickly. The adult form is the five-spotted hawk moth.",
    imageUrl: "/uploads/ee5de60c-281a-4f9f-b3f2-5e97a6cbc319.png",
    damageSigns: [
      "Extensive defoliation of upper leaves",
      "Missing or damaged fruit",
      "Dark green or black droppings (frass) on leaves and ground",
      "Stem damage",
      "Plant stunting from severe feeding"
    ],
    preventionTips: [
      "Handpick caterpillars from plants",
      "Till soil at the end of the season to destroy pupae",
      "Plant dill, basil, and marigolds as repellent companions",
      "Use UV blacklights at night to locate caterpillars",
      "Attract parasitic wasps with flowering plants"
    ],
    affectedCrops: [
      "Tomatoes", "Peppers", "Eggplant", "Potatoes", "Tobacco"
    ]
  },
  {
    id: 3,
    name: "Colorado Potato Beetle",
    scientificName: "Leptinotarsa decemlineata",
    category: "Beetle",
    severity: "High",
    description: "The Colorado potato beetle is a serious pest of potato crops. Adults are yellow-orange with black stripes and about 3/8 inch long. Their larvae are reddish with black spots and can cause significant damage. Both adults and larvae feed on foliage and can completely defoliate plants.",
    imageUrl: "/uploads/0ba84875-049b-416f-b3dc-ec8e24474d17.png",
    damageSigns: [
      "Holes in leaves",
      "Completely defoliated plants",
      "Presence of orange egg masses on undersides of leaves",
      "Reduced tuber development",
      "Visible reddish larvae or striped adult beetles"
    ],
    preventionTips: [
      "Rotate crops annually",
      "Cover young plants with row covers",
      "Mulch heavily with straw to impede beetle movement",
      "Plant resistant potato varieties",
      "Handpick beetles and destroy egg masses"
    ],
    affectedCrops: [
      "Potato", "Tomato", "Eggplant", "Pepper"
    ]
  },
  {
    id: 4,
    name: "Powdery Mildew",
    scientificName: "Various genera",
    category: "Fungus",
    severity: "Medium",
    description: "Powdery mildew is a fungal disease that affects a wide range of plants. It appears as a white to gray powdery coating on leaf surfaces, stems, and sometimes fruit. This fungus draws nutrients from plant cells, causing reduced vigor, yield, and quality.",
    imageUrl: "/uploads/465e1466-3b2c-4f75-9951-0b29e4655631.png",
    damageSigns: [
      "White or grayish powdery spots on leaves and stems",
      "Yellowing or browning of infected tissue",
      "Distorted or stunted growth",
      "Premature leaf drop",
      "Reduced fruit quality or yield"
    ],
    preventionTips: [
      "Space plants for good air circulation",
      "Avoid overhead watering",
      "Plant resistant varieties when available",
      "Remove infected plant material promptly",
      "Apply preventative fungicides early in the season"
    ],
    affectedCrops: [
      "Squash", "Cucumber", "Melon", "Zucchini", "Grapes", "Roses", "Apple", "Strawberry"
    ]
  },
  {
    id: 5,
    name: "Spider Mite",
    scientificName: "Tetranychus urticae",
    category: "Mite",
    severity: "Medium",
    description: "Spider mites are tiny arachnids that feed on plant cells, causing stippling on leaves. They thrive in hot, dry conditions and can reproduce rapidly, with populations exploding in just a few weeks. They create fine webbing on plants when populations are high.",
    imageUrl: "/uploads/eedd8efe-28af-4efc-805f-88e6236390da.png",
    damageSigns: [
      "Fine stippling or speckling on leaves",
      "Yellowing or bronzing of foliage",
      "Fine webbing between leaves and stems",
      "Leaf drop in severe infestations",
      "Visible tiny moving dots when observed closely"
    ],
    preventionTips: [
      "Maintain adequate humidity around plants",
      "Regularly spray plants with water to discourage infestation",
      "Introduce predatory mites as biological control",
      "Avoid drought stress in plants",
      "Remove heavily infested plants to prevent spread"
    ],
    affectedCrops: [
      "Beans", "Strawberries", "Tomatoes", "Melons", "Eggplant", "Cucumber", "Houseplants"
    ]
  },
  {
    id: 6,
    name: "Japanese Beetle",
    scientificName: "Popillia japonica",
    category: "Beetle",
    severity: "High",
    description: "Japanese beetles are invasive pests that feed on over 300 species of plants. Adults are metallic green with coppery wing covers and white tufts of hair along their sides. They skeletonize leaves by feeding on tissue between the veins and can cause severe damage to many garden plants.",
    imageUrl: "/uploads/02e753cd-5ed5-45c3-a64b-c588ad00d1a4.png",
    damageSigns: [
      "Skeletonized leaves (only veins remaining)",
      "Flowers with holes or completely consumed",
      "Clusters of beetles feeding together",
      "Damaged fruit with surface feeding",
      "Lacy appearance of foliage"
    ],
    preventionTips: [
      "Use row covers during peak season",
      "Handpick beetles in early morning when they're sluggish",
      "Plant resistant species like magnolias, lilacs, and dogwoods",
      "Apply milky spore to lawn for grub control",
      "Avoid Japanese beetle traps which can attract more beetles"
    ],
    affectedCrops: [
      "Roses", "Grapes", "Beans", "Raspberries", "Corn", "Blueberries", "Apple", "Cherry"
    ]
  },
  {
    id: 7,
    name: "Cabbage Worm",
    scientificName: "Pieris rapae",
    category: "Caterpillar",
    severity: "Medium",
    description: "Cabbage worms are the larvae of the small white butterfly commonly seen fluttering around vegetable gardens. The caterpillars are velvety green and grow to about 1 inch long. They chew large, irregular holes in leaves and can bore into heads of cabbage and other brassicas.",
    imageUrl: "/uploads/2ee75dd5-63ea-4922-9ef8-fb990ce50d6c.png",
    damageSigns: [
      "Large irregular holes in leaves",
      "Presence of dark green frass (excrement)",
      "Damaged growing points in young plants",
      "Tunnels in cabbage heads",
      "Reduced crop yield"
    ],
    preventionTips: [
      "Cover crops with floating row covers",
      "Inspect plants regularly and remove caterpillars",
      "Plant aromatic herbs like thyme and rosemary as companion plants",
      "Encourage parasitic wasps with flowering plants",
      "Apply Bacillus thuringiensis (Bt) as a biological control"
    ],
    affectedCrops: [
      "Cabbage", "Broccoli", "Cauliflower", "Kale", "Brussels Sprouts", "Collards", "Kohlrabi"
    ]
  },
  {
    id: 8,
    name: "Cucumber Beetle",
    scientificName: "Diabrotica spp.",
    category: "Beetle",
    severity: "High",
    description: "Cucumber beetles are serious pests of cucurbit crops. They come in spotted and striped varieties, both about 1/4 inch long. Beyond direct feeding damage, they transmit bacterial wilt disease, which can kill plants quickly. They overwinter as adults and emerge in spring to feed and lay eggs.",
    imageUrl: "/uploads/012bb120-8a68-450c-a2f8-600ddd6e03d7.png",
    damageSigns: [
      "Chewed leaves, stems, and fruit",
      "Scarring on fruit surface",
      "Plants wilting suddenly (from bacterial wilt)",
      "Reduced vigor and yield",
      "Seedling death in severe cases"
    ],
    preventionTips: [
      "Use yellow sticky traps to monitor and reduce population",
      "Cover young plants with row covers until flowering",
      "Plant trap crops like blue Hubbard squash",
      "Clean up garden debris in fall to reduce overwintering sites",
      "Apply kaolin clay as a repellent"
    ],
    affectedCrops: [
      "Cucumber", "Squash", "Pumpkin", "Melon", "Zucchini", "Watermelon", "Corn"
    ]
  }
];
