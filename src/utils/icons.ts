// Mapa de excepciones: nombre del tag -> nombre exacto en Simple Icons
const exceptions: Record<string, string> = {
  "Node.js": "simple-icons:nodedotjs",
  "Next.js": "simple-icons:nextdotjs",
  "Lucide React": "simple-icons:lucide",
  "React Native": "simple-icons:react",
  "Apache Kafka": "simple-icons:apachekafka",
  "Tailwind CSS": "simple-icons:tailwindcss",
  "Spring Boot": "simple-icons:springboot",
  "Cloud Firestore": "simple-icons:firebase",
  "Grails": "grails", 
  "Spock": "spock",
  "JWT": "jwt",
  "Testcontainers": "simple-icons:developmentcontainers",
  "Groovy": "simple-icons:apachegroovy",
  "Java": "simple-icons:openjdk",
};

export function getIconName(tag: string): string {
  if (exceptions[tag]) {
    return `${exceptions[tag]}`;
  }

  const cleanTag = tag.toLowerCase()
    .replace(/\s+/g, '')  // quita espacios
    .replace(/\./g, '')   // quita puntos (ej: node.js -> nodejs)
    .replace(/-/g, '');   // quita guiones

  return `simple-icons:${cleanTag}`;
}