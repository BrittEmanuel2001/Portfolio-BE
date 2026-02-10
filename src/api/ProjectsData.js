const category = [ "Development", "Design"]

const projects = [
    {
        id: 1,
        name: "TechSphere",
        image: "Project_TechSphere.jpg",
        category: category[0],
        description: "Schaalbare Spring Boot webapplicatie voor het organiseren en beheren van een techconferentie. Functionaliteiten omvatten gebruikersbeheer, het plannen van events en het beheren van ruimtes, met een focus op duidelijke structuur en uitbreidbaarheid.",
        tools: [
            { icon: "cibSpring", name: "Spring Boot", type: "framework" }
        ],
        link: "https://github.com/BrittEmanuel2001?tab=repositories"
    },
    {
        id: 2,
        name: "The End(o)game - Bachelorproef",
        image: "Project_TheEndogame.jpg",
        category: category[1],
        description: "Bachelorproef en sluitstuk van mijn opleiding GDM, met als resultaat een educatief kaartspel dat bewustwording creëert rond endometriose. Het project combineert onderzoek, conceptontwikkeling en visueel ontwerp om een complexe en vaak onzichtbare ziekte toegankelijk en bespreekbaar te maken.",
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
        description: "Proof of concept voor de My Campus-app in opdracht van HOGENT, een centrale mobiele applicatie die studenten ondersteunt door alle campusinformatie overzichtelijk en gebruiksvriendelijk te bundelen. Het project werd uitgevoerd als schoolopdracht en ons team werd verkozen tot beste groep.",
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
            { firstname: "Maxim", lastname: "Bauwelinck", link: "https://www.linkedin.com/in/maxim-bauwelinck-a0a6a433b/" },
        ],
        link: "https://github.com/BrittEmanuel2001/RISE-CampusApp-2526"
    },
    {
        id: 4,
        name: "Contentplanning Heimdal",
        image: "Project_Contentplanning.jpg",
        category: category[0],
        description: "Contentplanning-app ontwikkeld tijdens mijn praesidiumjaar (2024-2025) om het beheer van posts te centraliseren. De applicatie biedt een lijst- en kalenderweergave van posts, ledenbeheer en herinneringen, waardoor het proces overzichtelijker en efficiënter werd in vergelijking met eerdere Excel- en Canva-oplossingen.",
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
        description: "Shopfloor-applicatie voor gebruikers-, site- en machinebeheer, met rapportagemogelijkheden. De web- en Java-versie boden elk aangepaste functionaliteiten afhankelijk van de gebruiksomgeving. Uitgevoerd als schoolopdracht, waarbij ons team werd verkozen tot beste groep.",
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
        description: "Queendomino, een digitale adaptatie van Kingdomino, ontwikkeld door ons vrouwelijke dev-team als eerste groepsproject binnen het TI-vak SDP1. Fun fact: het project werd een jaar later getoond als voorbeeld voor nieuwe eerstejaarsstudenten.",
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