const category = ["Development", "Design"];

const projects = [
    {
        id: 1,
        name: "TechSphere 2025",
        image: "Project_TechSphere.jpg",
        category: category[0],
        description: "Schaalbare Spring Boot webapplicatie voor het organiseren van een techconferentie, met gebruikersbeheer, eventplanning en ruimtebeheer.",
        tools: [
            { icon: "cibSpring", name: "Spring Boot", type: "framework" }
        ],
        link: "https://github.com/BrittEmanuel2001/TechSphere-2425"
    },
    {
        id: 2,
        name: "The End(o)game - Bachelorproef",
        image: "Project_TheEndogame.jpg",
        category: category[1],
        description: "Educatief kaartspel dat bewustwording creëert rond endometriose, ontwikkeld als bachelorproef binnen GDM.",
        tools: [
            { icon: "cibAdobePhotoshop", name: "Adobe Photoshop" },
            { icon: "cibAdobeIllustrator", name: "Adobe Illustrator" },
            { icon: "cibAdobeIndesign", name: "Adobe InDesign" }
        ],
        link: "https://theendogame.wixsite.com/theend-o-game"
    },
    {
        id: 3,
        name: "Campus app",
        image: "Project_CampusApp.jpg",
        category: category[0],
        description: "Proof of concept voor een centrale campusapp voor HOGENT, ontwikkeld als schoolopdracht en verkozen tot beste project.",
        tools: [
            { icon: "cilLayers", name: "Blazor WebAssembly", type: "framework" },
            { icon: "cibDotNet", name: ".NET", type: "framework" },
            { icon: "cibC", name: "C#", type: "language" }
        ],
        team: [
            { firstname: "Milan", lastname: "Dhondt", link: "https://www.linkedin.com/in/milan-dhondt/" },
            { firstname: "Tristan", lastname: "Van Speybroeck", link: "https://www.linkedin.com/in/tristan-van-speybroeck-95987434a/" },
            { firstname: "Yenthly", lastname: "Devolder", link: "https://www.linkedin.com/in/yenthly-devolder-356690243/" },
            { firstname: "Eray", lastname: "Köksoy", link: "https://www.linkedin.com/in/eray-k%C3%B6ksoy-501665279/" },
            { firstname: "Maxim", lastname: "Bauwelinck", link: "https://www.linkedin.com/in/maxim-bauwelinck-a0a6a433b/" }
        ],
        link: "https://github.com/BrittEmanuel2001/RISE-CampusApp-2526"
    },
    {
        id: 4,
        name: "Contentplanning Heimdal",
        image: "Project_Contentplanning.jpg",
        category: category[0],
        description: "Contentplanning-app voor postbeheer met kalender- en lijstweergave, ontwikkeld tijdens mijn praesidiumjaar.",
        tools: [
            { icon: "cibReact", name: "React", type: "framework" },
            { icon: "cibNodeJs", name: "Node.js", type: "framework" }
        ],
        link: "https://github.com/BrittEmanuel2001/Frontendweb-2425"
    },
    {
        id: 5,
        name: "Shopfloor applicatie",
        image: "Project_Shopfloor.jpg",
        category: category[0],
        description: "Shopfloor-applicatie voor gebruikers-, site- en machinebeheer met rapportage, ontwikkeld als bekroonde schoolopdracht.",
        tools: [
            { icon: "cibReact", name: "React", type: "framework" },
            { icon: "cibNodeJs", name: "Node.js", type: "framework" },
            { icon: "cibJava", name: "Java", type: "language" }
        ],
        team: [
            { firstname: "Alex", lastname: "Emanuel", link: "https://www.linkedin.com/in/alex-emanuel/" },
            { firstname: "Maxe", lastname: "Adams", link: "https://www.linkedin.com/in/maxeadams/" },
            { firstname: "Deniz", lastname: "Callens", link: "https://www.linkedin.com/in/deniz-callens/" },
            { firstname: "Emilia", lastname: "Daelman", link: "https://www.linkedin.com/in/emilia-daelman/" }
        ],
        link: "https://github.com/orgs/SDP2-2425/repositories"
    },
    {
        id: 6,
        name: "Queendomino",
        image: "Project_Queendomino.jpg",
        category: category[0],
        description: "Digitale adaptatie van Kingdomino, ontwikkeld als eerste groepsproject binnen SDP1 door een volledig vrouwelijk team.",
        tools: [
            { icon: "cibJava", name: "Java", type: "language" }
        ],
        team: [
            { firstname: "Alex", lastname: "Emanuel", link: "https://www.linkedin.com/in/alex-emanuel/" },
            { firstname: "Maxe", lastname: "Adams", link: "https://www.linkedin.com/in/maxeadams/" },
            { firstname: "Yana", lastname: "Cattoir", link: "https://www.linkedin.com/in/yana-cattoir-145629363/" }
        ],
        link: "https://github.com/BrittEmanuel2001/Queendomino-2324"
    }
];

export default projects;
