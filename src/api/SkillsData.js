import { PenTool, Monitor, Server, Code } from "lucide-react";

const tabs = [
  { 
    id: 1, 
    since: 2019,
    title: "Graphic design", 
    content: "Sterke visuele ontwerpen die jouw verhaal helder en herkenbaar maken. Van logo tot volledige branding, altijd met oog voor detail en consistentie.", 
    products: "Posters, layout, logo en brand design ...",
    icon: PenTool,
    tools: [
      { icon: "cibAdobePhotoshop", name: "Adobe Photoshop" },
      { icon: "cibAdobeIllustrator", name: "Adobe Illustrator" },
      { icon: "cibAdobeIndesign", name: "Adobe InDesign" },
      { icon: "cibCanva", name: "Canva" },
    ],
    image: "GraphicDesign.jpg"
  },
  { 
    id: 2, 
    since: 2019,
    title: "UI / UX design", 
    content: "Gebruiksvriendelijke interfaces die logisch aanvoelen en er goed uitzien. Ontworpen met focus op flow, toegankelijkheid en de eindgebruiker.", 
    products: "Website en app designs", 
    icon: Monitor,
    tools: [
      { icon: "cibFigma", name: "Figma" },
      { icon: "cibAdobeXd", name: "Adobe XD" },
    ],
    image: "UIUX.jpg"
  },
  { 
    id: 3, 
    since: 2019,
    title: "Front-end development", 
    content: "Moderne, responsive websites en applicaties die design en performance combineren tot een vlotte gebruikerservaring.", 
    products: "Websites, UI components, apps...",
    icon: Code,
    tools: [
        { icon: "cibHtml5", name: "HTML", type: "language" },
        { icon: "cibCss3", name: "CSS", type: "language" },
        { icon: "cibJavascript", name: "Javascript", type: "language" },
        { icon: "cibTypescript", name: "Typescript", type: "language" },
        { icon: "cibReact", name: "React", type: "framework" },
        { icon: "cilLayers", name: "Blazor WebAssembly", type: "framework" },
        { icon: "cibCsswizardry", name: "Tailwind CSS", type: "framework" },
        { icon: "cibGit", name: "Git", type: "tooling" },
    ],
    image: "Project_CampusApp.jpg"
  },
  { 
    id: 4, 
    since: 2023,
    title: "Back-end development", 
    content: "Betrouwbare back-end oplossingen met duidelijke API’s en performante databases als stevige basis voor jouw applicatie.", 
    products: "REST API's, databases, servers...",
    icon: Server,
    tools: [
        { icon: "cibJava", name: "Java", type: "language" },
        { icon: "cibC", name: "C#", type: "language" },
        { icon: "cibPython", name: "Python", type: "language" },
        { icon: "cilSettings", name: ".NET", type: "framework" },
        { icon: "cibNodeJs", name: "Node.js", type: "framework" },
        { icon: "cilLeaf", name: "Spring Boot", type: "framework" },
        { icon: "cibMysql", name: "MySQL", type: "database" },
        { icon: "cibMongodb", name: "MongoDB", type: "database" },
        { icon: "cilMemory", name: "Redis", type: "database" },
        { icon: "cibNeo4j", name: "Neo4j", type: "database" },
        { icon: "cibGit", name: "Git", type: "tooling" },
    ],
    image: "Backend.jpg"
  },
];

export default tabs;