import React from 'react';
import { Users, Heart, Award, Clock } from 'lucide-react';

const About = () => {
  const timeline = [
    { year: '2006', event: 'Ouverture de La Finestra' },
    { year: '2010', event: 'Agrandissement avec salle privée' },
    { year: '2015', event: 'Rénovation complète du restaurant' },
    { year: '2020', event: 'Adaptation et service de livraison' },
    { year: '2025', event: 'Nouveau menu saisonnier' }
  ];

  const gallery = [
    '/la-finestra-geneve-plat-truffes.jpg',
    '/la-finestra-geneve-interieur-salle-manger.jpg',
    '/la-finestra-geneve-interieur-detail-table.jpg',
    '/la-finestra-geneve-equipe-restaurant.jpg',
    '/la-finestra-geneve-plat-specialite.jpg',
    '/la-finestra-geneve-facade-enseigne.jpeg'
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-40 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6 animate-fade-in-up">
              À propos de La Finestra
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Plus qu'un restaurant, La Finestra est une véritable invitation au voyage 
              culinaire au cœur de l'Italie authentique.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-primary animate-fade-in-up">
              Notre philosophie
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Heart className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Passion authentique</h3>
                    <p className="text-gray-700">
                      Chaque plat est préparé avec l'amour et la passion qui caractérisent 
                      la cuisine italienne traditionnelle.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Award className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Ingrédients d'exception</h3>
                    <p className="text-gray-700">
                      Nous sélectionnons rigoureusement nos produits, importés directement 
                      d'Italie pour garantir l'authenticité des saveurs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="text-accent mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Accueil chaleureux</h3>
                    <p className="text-gray-700">
                      Dans l'esprit de la convivialité italienne, nous accueillons chaque client 
                      comme un membre de notre famille.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img
                src="/la-finestra-geneve-facade-principale.jpeg"
                alt="Façade du restaurant La Finestra"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-20">
            Notre histoire
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-accent"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="flex items-center mb-12 relative">
                {/* Left side content (for even indices: 0, 2, 4) */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pr-8 text-right opacity-0 pointer-events-none'} animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  {index % 2 === 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-accent mb-2">{item.year}</h3>
                      <p className="text-gray-700">{item.event}</p>
                    </>
                  )}
                </div>
                
                {/* Center dot */}
                <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Right side content (for odd indices: 1, 3) */}
                <div className={`w-1/2 ${index % 2 === 1 ? 'pl-8 text-left' : 'pl-8 text-left opacity-0 pointer-events-none'} animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
                  {index % 2 === 1 && (
                    <>
                      <h3 className="text-2xl font-bold text-accent mb-2">{item.year}</h3>
                      <p className="text-gray-700">{item.event}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-20">
            Notre équipe
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chef Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <div className="h-80 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="/la-finestra-geneve-chef-cuisinier.jpeg"
                  alt="Le chef cuisinier de La Finestra"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Le chef</h3>
                <p className="text-accent font-semibold mb-4">Chef cuisinier</p>
                <p className="text-gray-700 leading-relaxed">
                  Passionné de cuisine italienne, notre chef vous propose une expérience authentique inspirée des traditions transmises de génération en génération. Il accorde une grande importance à la qualité des produits et à la finesse des saveurs.
                </p>
              </div>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="h-80 bg-gray-100 flex items-center justify-center">
                <img
                  src="/la-finestra-geneve-equipe-restaurant.jpg"
                  alt="L'équipe de La Finestra"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-2">Notre équipe</h3>
                <p className="text-accent font-semibold mb-4">Une famille unie par la passion</p>
                <p className="text-gray-700 leading-relaxed">
                  Notre équipe expérimentée partage la même passion pour l'excellence culinaire et l'hospitalité italienne. 
                  Ensemble, nous créons une atmosphère chaleureuse et authentique, où chaque client est accueilli comme un membre de la famille. 
                  De la cuisine au service, chaque détail est pensé pour vous offrir une expérience inoubliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-20">
            Notre restaurant
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={image}
                  alt={`Restaurant La Finestra ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;