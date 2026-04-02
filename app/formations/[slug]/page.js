import styles from './page.module.css'

// Liste de projets (normalement, ça viendrait d'une API ou d'une base de données)
const projects = {
    'openclassrooms_2026': {
       title: 'OpenClassrooms',
       slug: 'openclassrooms_2026',
       description: 'Formation de Développeur React - 2026',
       image: '/images/portfolio.jpg',
       ecole: 'https://ecole.com/...',
   },
   'metz_numeric_school_2025': {
       title: 'Metz Numeric School',
       slug: 'Metz Numeric School',
       description: 'Formation de Concepteur Développeur d\'Application - 2025',
       image: '/images/portfolio.jpg',
       ecole: 'https://ecole.com/...',
   },
   'metz_numeric_school_2023': {
       title: 'App E-Metz Numeric School',
       slug: 'Metz Numeric School',
       description: 'Formation de Développeur Web et Web mobile - 2023',
       image: '/images/ecommerce.jpg',
       ecole: 'https://ecole.com/...',
   },
   'bosserville': {
       title: 'Bosserville',
       slug: 'Bosserville',
       description: 'Bac professionnel Technique du froid et du conditionnement de l\'air',
       image: '/images/blog.jpg',
       ecole: 'https://ecole.com/...',
   }
}

export default async function ProjectDetail({ params }) {
   const { slug } = await params
   // Next.js passe automatiquement le slug dans params
   const project = projects[slug]

   // Si le projet n'existe pas, afficher un message
   if (!project) {
       return (
           <div className="container">
               <h1>formation non trouvé</h1>
               <p>La formation n&apos;existe pas ou a été supprimé.</p>
           </div>
       )
   }

   return (
       <div className={styles.container}>
           <div className={styles.header}>
               <h1 className={styles.title}>{project.title}</h1>
               <p className={styles.description}>{project.description}</p>
           </div>

           <div className={styles.content}>
               <div className={styles.imageWrapper}>
                   <div className={styles.imagePlaceholder}>
                       Image de l'école
                   </div>
               </div>
                   <div className={styles.links}>
                       <a
                           href={project.ecole}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={styles.link}
                       >
                           Voir l'école
                       </a>  
                   </div>
           </div>
       </div>
   )
}