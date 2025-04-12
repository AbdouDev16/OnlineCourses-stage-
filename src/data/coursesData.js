export const coursesData = [
  {
    id: 1,
    title: "Sécurité Réseaux",
    description: "Maîtrisez les fondamentaux de la sécurité des réseaux informatiques et des télécommunications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Intermédiaire",
    duration: "25 heures",
    chapters: [
      {
        id: 1,
        title: "Introduction à la Sécurité Réseaux",
        description: "Concepts fondamentaux et menaces courantes",
        duration: "3 heures",
        content: "Dans ce chapitre, nous aborderons les principes de base de la sécurité des réseaux...",
        quiz: [
          {
            question: "Quel est le principal objectif d'un pare-feu ?",
            options: [
              "Accélérer la connexion internet",
              "Filtrer le trafic réseau",
              "Stocker des données",
              "Gérer les mots de passe"
            ],
            correctAnswer: "Filtrer le trafic réseau"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Gestion des Fréquences",
    description: "Apprenez à gérer et optimiser l'utilisation des fréquences radio dans les télécommunications.",
    image: "https://images.unsplash.com/photo-1517976547714-720226b864c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Avancé",
    duration: "30 heures",
    chapters: [
      {
        id: 1,
        title: "Principes de la Gestion des Fréquences",
        description: "Fondamentaux et réglementation",
        duration: "4 heures",
        content: "Découvrez les principes essentiels de la gestion du spectre radioélectrique...",
        quiz: [
          {
            question: "Quelle autorité gère l'attribution des fréquences en France ?",
            options: ["ARCEP", "CSA", "ANFR", "CNIL"],
            correctAnswer: "ANFR"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Radio HF",
    description: "Explorez les technologies de communication radio Haute Fréquence et leurs applications.",
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Intermédiaire",
    duration: "20 heures",
    chapters: [
      {
        id: 1,
        title: "Fondamentaux de la Radio HF",
        description: "Principes de propagation et équipements",
        duration: "3 heures",
        content: "Les communications HF permettent des liaisons à longue distance...",
        quiz: [
          {
            question: "Quelle est la plage de fréquences HF ?",
            options: [
              "3-30 MHz",
              "30-300 MHz",
              "300-3000 MHz",
              "0.3-3 MHz"
            ],
            correctAnswer: "3-30 MHz"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Radio VHF/UHF",
    description: "Maîtrisez les communications radio en Very High Frequency et Ultra High Frequency.",
    image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Intermédiaire",
    duration: "22 heures",
    chapters: [
      {
        id: 1,
        title: "Introduction aux VHF/UHF",
        description: "Caractéristiques et applications",
        duration: "4 heures",
        content: "Les bandes VHF et UHF sont essentielles pour les communications à courte et moyenne portée...",
        quiz: [
          {
            question: "Quelle est la principale différence entre VHF et UHF en termes de propagation ?",
            options: [
              "La portée",
              "La puissance nécessaire",
              "Le coût des équipements",
              "La qualité du son"
            ],
            correctAnswer: "La portée"
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Informatique",
    description: "Découvrez les fondamentaux de l'informatique et les technologies modernes.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Débutant",
    duration: "35 heures",
    chapters: [
      {
        id: 1,
        title: "Introduction à l'Informatique",
        description: "Concepts de base et architecture des ordinateurs",
        duration: "5 heures",
        content: "L'informatique est au cœur de toutes les technologies modernes...",
        quiz: [
          {
            question: "Quel est le rôle principal d'un système d'exploitation ?",
            options: [
              "Gérer les ressources de l'ordinateur",
              "Créer des documents",
              "Naviguer sur internet",
              "Envoyer des emails"
            ],
            correctAnswer: "Gérer les ressources de l'ordinateur"
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Développement",
    description: "Apprenez à créer des applications et des logiciels avec les langages de programmation modernes.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    level: "Débutant à Avancé",
    duration: "45 heures",
    chapters: [
      {
        id: 1,
        title: "Introduction au Développement",
        description: "Concepts de base de la programmation",
        duration: "6 heures",
        content: "Le développement logiciel permet de créer des solutions sur mesure...",
        quiz: [
          {
            question: "Quel langage est souvent recommandé pour débuter la programmation ?",
            options: [
              "Python",
              "C++",
              "Assembly",
              "Rust"
            ],
            correctAnswer: "Python"
          }
        ]
      }
    ]
  }
]; 