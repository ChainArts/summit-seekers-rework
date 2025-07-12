import type { CarouselPost } from "../components/Carousel";
import aiTianzi from "../assets/ai_tianzi_mountains.webp";
import aiAlps from "../assets/ai_alps.webp";
import aiCanyon from "../assets/ai_canyon.webp";
import aiCampfire from "../assets/ai_campfire.webp";

export const posts: CarouselPost[] = [
    {
        id: 1,
        slug: "alps",
        imagePath: aiAlps,
        alt: "Alps",
        link: "/adventure/alps",
        title: "Alps",
        meta: { footnotes: "Austria, Carinthia" },
        content: ["As I gazed upon the snow-capped peaks of the Austrian Alps, their majestic beauty promised an adventure filled with exhilaration and awe.",
                "In the Austrian Alps, I embarked on an exhilarating adventure through stunning landscapes.My early morning start led me through valleys shadowed by towering peaks into lush meadows and rugged terrains of rocks and glaciers.As I ascended, overcoming challenges and steep slopes, the Alps offered breathtaking panoramic views and a sense of dizzying freedom.The tranquil high mountains, with only the sound of my steps and occasional eagles, culminated in reaching a summit with endless peak views under a vast sky—an unforgettable alpine experience."]
    },
    {
        id: 2,
        slug: "grand-canyon",
        imagePath: aiCanyon,
        alt: "Grand Canyon",
        link: "/adventure/grand-canyon",
        title: "Grand Canyon",
        meta: { footnotes: "USA, Arizona" },
        content: ["The Grand Canyon, with its vastness and intricate rock formations, is a testament to nature's artistry.",
                "As I stood at the rim, the sheer scale of the canyon took my breath away. The Colorado River snaked through the depths, its waters glistening under the sun. Hiking along the trails, I marveled at the layers of rock that tell a story spanning millions of years. Each step revealed new vistas, from towering cliffs to hidden alcoves. The silence was profound, broken only by the distant call of a hawk. This adventure was not just about conquering a landscape; it was about connecting with the earth's ancient history."]
    },
    {
        id: 3,
        slug: "zhangjiajie",
        imagePath: aiTianzi,
        alt: "zhangjiajie",
        link: "/adventure/zhangjiajie",
        title: "Zhangjiajie National Forest",
        meta: { footnotes: "China, Hunan Province" },
        content: ["I have never imagined that scaling the elusive peaks of Zhangjiajie National Forest would reveal secrets hidden in the whispers of the wind.", "From the moment I set foot in the mystical Zhangjiajie National Forest, the adventure of a lifetime began. The air was crisp, filled with the scent of pine and earth, as I embarked on a journey to conquer its towering quartz-sandstone pillars. Each step upwards was a test of endurance and will, as the rugged terrain challenged every muscle in my body. The path was narrow, winding through dense foliage, occasionally opening up to breathtaking vistas of jagged cliffs and verdant valleys. My hands gripped the cool, rough surface of the rocks, finding holds in crevices that seemed to have been waiting for me. The higher I climbed, the more the forest revealed its secrets – the distant echo of a waterfall, the rare sight of exotic birds soaring above. As I neared the summit, the world below seemed like a distant dream. Finally, standing atop the peak, with the clouds caressing my face and a vast expanse of untamed wilderness stretching before me, I realized I hadn’t just conquered a mountain. I had touched the very soul of Zhangjiajie."]
    },
    {
        id: 4,
        slug: "manytravels",
        imagePath: aiCampfire,
        alt: "mmmh travels",
        link: "/adventure/manytravels",
        title: "Many Travels",
        meta: { footnotes: "Travel Travel" },
        content: "Many travels yes",
    },
];