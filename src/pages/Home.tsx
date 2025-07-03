import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Star, Users, Calendar, Award, ChefHat } from 'lucide-react';

const Home = () => {
  const testimonials = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment: "Une expérience culinaire exceptionnelle ! Les pâtes maison sont divines et l'ambiance très chaleureuse."
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      comment: "Le meilleur restaurant italien de Genève. Service impeccable et cuisine authentique."
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment: "Parfait pour les événements d'entreprise. La salle privée est magnifique et la cuisine excellente."
    }
  ];

  const menuHighlights = [
    {
      category: 'Antipasti',
      name: 'Vitello Tonnato',
      description: 'À la Génoise - Veal slices with sauce at Genoese style',
      price: '43.-',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'Primi Piatti',
      name: 'Pennette à la Finestra',
      description: 'Artichauts poêlés et son jambon San Daniele avec sa crème, sauge, noix de muscade et thym',
      price: '36.-',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'Le Carni',
      name: 'Tagliata de Bœuf',
      description: 'Accompagnée d\'une sauce aux bolets, pommes de terre rôties',
      price: '64.-',
      image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'I Dolci',
      name: 'Tiramisu classique à l\'amaretto',
      description: 'Traditional Tiramisu with amaretto and cacao',
      price: '16.-',
      image: 'https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const restaurantGallery = [
    {
      src: '/WhatsApp Image 2025-07-01 at 18.25.06.jpeg',
      alt: 'Façade du restaurant La Finestra avec terrasse romantique et roses rouges',
      category: 'facade'
    },
    {
      src: '/BCD37293-4E2E-4C86-A960-1054D4C6A824.jpeg',
      alt: 'Terrasse extérieure avec parasols et tables dressées',
      category: 'terrasse'
    },
    {
      src: '/269CD06F-ED8B-485B-B750-557DF95D02C4.jpeg',
      alt: 'Vue de la terrasse avec architecture genevoise typique',
      category: 'terrasse'
    },
    {
      src: '/5FC2D24B-FE88-49FE-84A0-42C15FC20F4B.jpeg',
      alt: 'Table dressée en terrasse avec vue sur la cave à vins',
      category: 'terrasse'
    },
    {
      src: '/449981AF-E9A6-4580-8CFF-F7130A446CFA.jpeg',
      alt: 'Art de la table raffiné en terrasse avec verres colorés',
      category: 'terrasse'
    },
    {
      src: '/57528187-F004-4E76-9F93-EE75BE403FAD.jpeg',
      alt: 'Rue pavée avec terrasse du restaurant La Finestra',
      category: 'terrasse'
    },
    {
      src: '/E520E08F-39C6-429E-9704-64A51E142FAA.jpeg',
      alt: 'Salle intérieure avec chaises en cuir et tables dressées',
      category: 'interieur'
    },
    {
      src: '/4C2130EC-A769-49F0-BCE3-3F922A7BF733.jpeg',
      alt: 'Table dressée avec verres à vin et arrangement floral',
      category: 'interieur'
    },
    {
      src: '/3C327A0E-CF27-40F4-8FF9-1CC11A6CD953.jpeg',
      alt: 'Décoration romantique avec cœur en bois et bougies',
      category: 'interieur'
    },
    {
      src: '/FF447DD9-55B0-426A-B6FD-6FA25A11D788.jpeg',
      alt: 'Façade du restaurant La Finestra avec enseigne',
      category: 'exterieur'
    },
    {
      src: '/10687BA8-56D8-4585-BB1B-25D118940AAE.jpeg',
      alt: 'Entrée du restaurant avec menu affiché',
      category: 'exterieur'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(68, 15, 30, 0.4), rgba(68, 15, 30, 0.4)), url('/BCD37293-4E2E-4C86-A960-1054D4C6A824.jpeg')`
          }}
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="brush-script logo-large text-secondary mb-6 animate-fade-in-up font-light">
            La Finestra
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Une fenêtre sur l'Italie - Cuisine italienne traditionnelle à Genève depuis 2006
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              to="/reservations"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Réserver une table
            </Link>
            <Link
              to="/menu"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Découvrir notre menu
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">
                L'amour de l'Italie dans chaque assiette
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Depuis 2006, La Finestra vous invite à découvrir l'authenticité de la cuisine italienne 
                dans un cadre chaleureux au cœur de Genève. Notre chef passionné perpétue les traditions 
                culinaires transmises de génération en génération.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Chaque plat est préparé avec des ingrédients frais importés directement d'Italie, 
                dans le respect des recettes traditionnelles qui font la richesse de la gastronomie italienne.
              </p>
              <Link
                to="/about"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                En savoir plus
              </Link>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <img
                src="/E520E08F-39C6-429E-9704-64A51E142FAA.jpeg"
                alt="Intérieur chaleureux du restaurant La Finestra"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <ChefHat className="text-accent mr-3" size={32} />
              <h2 className="text-4xl font-serif font-bold text-primary animate-fade-in-up">
                Nos spécialités
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Découvrez un aperçu de notre menu authentique, préparé avec passion 
              et des ingrédients d'exception importés directement d'Italie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {menuHighlights.map((dish, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {dish.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {dish.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-accent">{dish.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
              style={{animationDelay: '0.8s'}}
            >
              <ChefHat size={20} />
              <span>Voir tout le menu</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-6 animate-fade-in-up">
              Découvrez notre restaurant
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Entre tradition et élégance, La Finestra vous accueille dans un cadre authentique 
              avec sa terrasse charmante et son intérieur chaleureux.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurantGallery.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg group animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg capitalize">
                    {image.category === 'facade' ? 'Façade' :
                     image.category === 'terrasse' ? 'Terrasse' : 
                     image.category === 'interieur' ? 'Intérieur' : 'Extérieur'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gallery Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Terrasse charmante</h3>
              <p className="text-gray-700">
                Profitez de notre terrasse dans une rue pavée typiquement genevoise, 
                parfaite pour les beaux jours.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🕯️</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Ambiance intimiste</h3>
              <p className="text-gray-700">
                Un intérieur chaleureux avec un éclairage tamisé et une décoration 
                soignée pour des moments inoubliables.
              </p>
            </div>
            
            <div className="text-center animate-fade-in-up" style={{animationDelay: '1s'}}>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🍷</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">Art de la table</h3>
              <p className="text-gray-700">
                Chaque table est dressée avec soin, alliant tradition italienne 
                et raffinement contemporain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="flex justify-center mb-4">
                <Calendar className="text-secondary" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">2006</h3>
              <p className="text-xl">Depuis plus de 19 ans</p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="flex justify-center mb-4">
                <Award className="text-secondary" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">100%</h3>
              <p className="text-xl">Traditionnel</p>
            </div>
            
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex justify-center mb-4">
                <Star className="text-secondary" size={48} />
              </div>
              <h3 className="text-4xl font-bold text-secondary mb-2">5★</h3>
              <p className="text-xl">Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-12">
            Ce que disent nos clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg animate-fade-in-up"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-primary">– {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-primary mb-6 animate-fade-in-up">
            Réservez votre table
          </h2>
          <p className="text-xl text-gray-700 mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Venez découvrir l'authenticité de la cuisine italienne dans notre cadre chaleureux. 
            Que ce soit en terrasse ou dans notre salle, nous vous promettons une expérience mémorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link
              to="/reservations"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Réserver maintenant
            </Link>
            <Link
              to="/events"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Événements privés
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;