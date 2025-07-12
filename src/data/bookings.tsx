import aiAlps from "../assets/ai_alps.webp";
import canyon2 from "../assets/canyon_2.png";
import aiCampfire from "../assets/ai_campfire.webp";



export const bookings = [
    {
        id: 1,
        slug: "alpine-adventure",
        title: "Alpine Adventure",
        location: "Austrian Alps",
        start: "2025-08-01",
        end: "2025-08-07",
        days: 2,
        meters: 3798,
        level: 1,
        cost: "€1,200",
        image: aiAlps,
        link: "/booking/alpine-adventure",
        text: "Should you find yourself without personal gear, rest assured we have you covered. Detailed information regarding the expedition will be provided via email. We're eagerly looking forward to welcoming you!"

    },
    {
        id: 2,
        slug: "desert-trek",
        title: "Desert Trek",
        location: "Sahara",
        start: "2025-09-10",
        end: "2025-09-17",
        image: canyon2,
        days: 14,
        meters: 450,
        level: 2,
        cost: "€3,500",
        link: "/booking/desert-trek",
        text: "Should you find yourself without personal gear, rest assured we have you covered. Detailed information regarding the expedition will be provided via email. We're eagerly looking forward to welcoming you!"
    },
    {
        id: 3,
        slug: "rainforest-expedition",
        title: "Rainforest Expedition",
        location: "Amazon",
        start: "2025-10-05",
        end: "2025-10-12",
        days: 7,
        meters: 200,
        level: 3,
        cost: "€2,800",
        image: aiCampfire,
        link: "/booking/rainforest-expedition",
        text: "Should you find yourself without personal gear, rest assured we have you covered. Detailed information regarding the expedition will be provided via email. We're eagerly looking forward to welcoming you!"
    },
    {
        id: 4,
        slug: "northern-lights-quest",
        title: "Northern Lights Quest",
        location: "Iceland",
        start: "2025-11-15",
        end: "2025-11-22",
        days: 2,
        meters: 1000,
        level: 1,
        cost: "€500",
        image: aiAlps,
        link: "/booking/northern-lights-quest",
        text: "Should you find yourself without personal gear, rest assured we have you covered. Detailed information regarding the expedition will be provided via email. We're eagerly looking forward to welcoming you!"
    },
];