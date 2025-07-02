import React, { useState } from 'react';
import { Wine, Coffee, Martini } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('antipasti');

  const menuCategories = [
    { id: 'antipasti', name: 'Antipasti', icon: '🍅' },
    { id: 'primi', name: 'Primi Piatti', icon: '🍝' },
    { id: 'carni', name: 'Le Carni', icon: '🥩' },
    { id: 'pesci', name: 'I Pesci', icon: '🐟' },
    { id: 'dolci', name: 'I Dolci', icon: '🍮' },
    { id: 'boissons', name: 'Boissons', icon: '🍷' }
  ];

  const menuItems = {
    antipasti: [
      { 
        name: 'Vitello Tonnato', 
        description: 'À la Génoise - Veal slices with sauce at Genoese style', 
        price: '43.-' 
      },
      { 
        name: 'Carpaccio de Thon', 
        description: 'Fenouil mariné au citron, huile d\'olive, pecorino piquant et tomate Datterino - Tuna carpaccio with marinated fennel in olive oil and lemon, spicy pecorino and Datterino tomato, basil', 
        price: '38.-' 
      },
      { 
        name: 'Carpaccio de Bœuf', 
        description: 'Avec une mousseline et lamelles de truffe noire d\'automne - Beef carpaccio with muslin and slices of truffle', 
        price: '40.-' 
      },
      { 
        name: 'Burrata', 
        description: 'Servis avec des courgettes grillés, tomates grappa et basilic - Burrata and grilled zucchini with tomatoes grappa and basil', 
        price: '32.-' 
      },
      { 
        name: 'Salade Roquette', 
        description: 'Accompagné d\'artichauts à la romaine, tomates et parmesan - Rocket salad with romaine artichokes, tomatoes, and parmesan slices', 
        price: '21.-' 
      },
      { 
        name: 'Poêlée d\'Artichauts', 
        description: 'Scampi, Noix de St Jacques avec son jus de langoustine - Pan artichokes, scampi and St. Jacques scallops with langoustine juice', 
        price: '44.-' 
      },
      { 
        name: 'Jambon San Daniel', 
        description: 'Avec bufala di campana - San Daniele ham with bufala di campana', 
        price: '40.-' 
      },
      { 
        name: 'Bufala alla Sicilienne', 
        description: 'Mozzarella di buffala, aubergine, oignon, tomate et basilic - Mozzarella di buffala with eggplant, onion, tomatoes and basil', 
        price: '30.-' 
      },
      { 
        name: 'Potage à la courge', 
        description: 'Velouté de courge de saison', 
        price: '26.-' 
      }
    ],
    primi: [
      { 
        name: 'Pennette à la Finestra', 
        description: 'Artichauts poêlés et son jambon San Daniele avec sa crème, sauge, noix de muscade et thym - Finestra\'s pennette with cream and San Daniele ham, sage, nutmeg, thyme and pan artichokes', 
        price: '36.-' 
      },
      { 
        name: 'Ravioli de Bœuf', 
        description: 'Accompagné de chanterelles, vin blanc, tomate Datterino, huile d\'olive et ciboulette - Beef ravioli with chanterelles, white wine, Datterino tomatoes, olive oil and chives', 
        price: '42.-' 
      },
      { 
        name: 'Gnocchi à la Roquette', 
        description: 'Avec une crème de gorgonzola et amandes effilées - Rocket gnocchi with gorgonzola cream and roasted almonds', 
        price: '34.-' 
      },
      { 
        name: 'Tortellonis à la Ricotta', 
        description: 'Artichauts poêlés, sauce beurre et sauge - Ricotta tortelloni, with pan artichokes, butter, and sage sauce', 
        price: '38.-' 
      },
      { 
        name: 'Tagliolini Maison', 
        description: 'Dans son jus de langoustines, scampis, tomates Datterino et câpres de Salina - Tagliolini of the house in lobster juice, scampis, Datterino tomatoes and capers of Salina', 
        price: '48.-' 
      },
      { 
        name: 'Risotto aux champignons', 
        description: 'Aux Bolets et chanterelles - Risotto with boletus and chanterelles mushrooms', 
        price: '46.-' 
      }
    ],
    carni: [
      { 
        name: 'Tagliata de Bœuf', 
        description: 'Accompagnée d\'une sauce aux bolets, pommes de terre rôties - Beef tagliata with boletus sauce, roasted potatoes (Origine Suisse)', 
        price: '64.-' 
      },
      { 
        name: 'Carré d\'agneau', 
        description: 'Avec une polenta gratinée au gorgonzola et sa jardinière de mini légume - Rack of Lamb served with a polenta gratinated gorgonzola cheese and baby vegetables (Origine Irlande)', 
        price: '56.-' 
      },
      { 
        name: 'Foie de veau à la Vénitienne', 
        description: 'Accompagnée d\'un risotto au prosecco - Veal liver at the Venetian with onion and Prosecco risotto (Origine Suisse)', 
        price: '48.-' 
      }
    ],
    pesci: [
      { 
        name: 'Filet de Thon Poêlé', 
        description: 'À la Sicilienne et légumes du marché - Tuna fillet served with a Sicilienne and day vegetables (Origine Sri Lanka)', 
        price: '54.-' 
      },
      { 
        name: 'Filets de Loup', 
        description: 'Dans son jus de langoustine, tomate Datterino, piment rouge, oignon et olives taggiasche, servis avec un riso venere aux chanterelles - Bass fillet in its langoustine juice, Datterino tomato, red pepper, onion and taggiasche olives, served with a chanterelle riso venere (Origine France)', 
        price: '52.-' 
      }
    ],
    dolci: [
      { 
        name: 'Panna Cotta', 
        description: 'À l\'amarenatta - Cherry amarenatta panna cotta', 
        price: '16.-' 
      },
      { 
        name: 'Tiramisu classique à l\'amaretto', 
        description: 'Traditional Tiramisu with amaretto and cacao', 
        price: '16.-' 
      },
      { 
        name: 'Mousse au chocolat blanc', 
        description: 'Aux figues - White chocolate mousse with figs', 
        price: '16.-' 
      },
      { 
        name: 'Poire caramélisée au vin rouge', 
        description: 'Accompagnée d\'une glace vanille - Caramelized pear in red wine served with a vanilla ice cream', 
        price: '16.-' 
      }
    ],
    boissons: []
  };

  const drinkCategories = [
    {
      title: 'Apéritifs',
      items: [
        { name: 'Martini Blanc/Rouge', description: '15% - 4cl', price: '10.-' },
        { name: 'Campari', description: '23% - 4cl', price: '10.-' },
        { name: 'Pastis', description: '45% - 4cl', price: '10.-' },
        { name: 'Kir', description: '10cl', price: '14.-' },
        { name: 'Kir Royal', description: '10cl', price: '18.-' },
        { name: 'Gin-Tonic', description: '4cl', price: '18.-' },
        { name: 'Aperol Spritz', description: '2dl', price: '18.-' },
        { name: 'Vodka', description: '4cl', price: '16.-' },
        { name: 'Moët et Chandon brut', description: '1dl', price: '18.-' },
        { name: 'Prosecco brut Superiore DOCG', description: '1dl', price: '16.-' }
      ]
    },
    {
      title: 'Dynastie de la Finestra',
      subtitle: '(Bar à cocktails à partir de 18h00)',
      items: [
        { name: 'Cocktail Japon', description: 'Letchi, Sirop Rhubarbe maison, vodka et Umeshu (liqueur de Prune)', price: '23.-' },
        { name: 'Cocktail La Finestra', description: 'Italicus, Gin Malfy, sirop orange sanguine maison, citron jaune et basilic', price: '23.-' },
        { name: 'Cocktail Rosé Monroe', description: 'Rosé, aperol, Purée framboise maison, romarins et perrier', price: '23.-' }
      ]
    },
    {
      title: 'Bière',
      items: [
        { name: 'Peroni', description: '33cl', price: '10.-' }
      ]
    },
    {
      title: 'Boissons au verre',
      items: [
        { name: 'Lait', description: '25cl', price: '3.-' },
        { name: 'Jus de fruit', description: '25cl', price: '3.-' },
        { name: 'Verre d\'eau gazeuse', description: '25cl', price: '3.-' }
      ]
    },
    {
      title: 'Minérales et jus de fruits',
      items: [
        { name: 'Aqua San Pellegrino', description: '50cl', price: '7.50.-' },
        { name: 'Aqua Panna', description: '50cl', price: '7.50.-' },
        { name: 'Perrier', description: '33cl', price: '7.50.-' },
        { name: 'Coca-Cola', description: '33cl', price: '7.50.-' },
        { name: 'Coca-Cola Zero', description: '33cl', price: '7.50.-' },
        { name: 'Thé froid citron', description: '33cl', price: '7.50.-' },
        { name: 'Schweppes Tonic', description: '20cl', price: '7.50.-' },
        { name: 'Nectar d\'orange', description: '20cl', price: '7.50.-' },
        { name: 'Nectar de Tomate', description: '20cl', price: '7.50.-' },
        { name: 'Jus de Pomme Ramseier', description: '33cl', price: '7.50.-' },
        { name: 'Jus d\'orange frais', description: '20cl', price: '9.-' },
        { name: 'San Bitter', description: '10cl', price: '6.-' },
        { name: 'Carafe d\'eau', description: '5dl', price: '3.50.-' }
      ]
    },
    {
      title: 'Crus au Verre (vin ouvert)',
      sections: [
        {
          subtitle: 'Rosé',
          items: [
            { name: '20/26 Elena Walch, 2020', description: '1dl', price: '13.-' }
          ]
        },
        {
          subtitle: 'Rouge',
          items: [
            { name: 'Sangiovese – Toscana, Badilante 414, 2020', description: '1dl', price: '13.-' },
            { name: 'Primitivo di Puglia, Tator, IGP, 2020', description: '1dl', price: '13.-' }
          ]
        },
        {
          subtitle: 'Blanc',
          items: [
            { name: 'Pinot Grigio Venezie DOC Italo Cescon, 2021', description: '1dl', price: '13.-' },
            { name: 'Chardonnay Alto Adige DOC, Elena Walch, 2021', description: '1dl', price: '13.-' }
          ]
        },
        {
          subtitle: 'Per Dessert',
          items: [
            { name: 'Deltetto, Bric du Liun, 2016, Appassite de Piemonte', description: '1dl', price: '18.-' }
          ]
        }
      ]
    },
    {
      title: 'Vini Rosati',
      items: [
        { name: '20/26 Elena Walch, Vigneti Delle Dolomiti, 2020', description: 'Pinot Noir, Lagrein et Merlot', price: '78.-' }
      ]
    },
    {
      title: 'Vini Bianchi',
      items: [
        { name: 'Pinot Grigio Venezie, DOC Italo Cescon', description: '(Delle Venezie) 2021', price: '75.-' },
        { name: 'Chardonnay Alto Adige DOC, Elena Walch, 2021', description: '', price: '78.-' },
        { name: 'Zibibbo Sicilia DOC, Gagliardetta Curatolo Arini, 2020', description: '', price: '88.-' }
      ]
    },
    {
      title: 'Vini Rossi',
      sections: [
        {
          subtitle: 'Della Regione del Veneto',
          items: [
            { name: 'Amarone Della Valpolicella DOCG Superiore, San Rustico, 2017', description: 'Corvina, Rondinella et Mollinara', price: '105.-' },
            { name: 'Santomè Merlot IGT, 2015', description: '100% Merlot', price: '95.-' }
          ]
        },
        {
          subtitle: 'Della Regione Puglia',
          items: [
            { name: 'Tator, Primitivo di Puglia, IGP, 2020', description: '', price: '68.-' }
          ]
        },
        {
          subtitle: 'Della Regione Sicilia',
          items: [
            { name: 'Lumà, Cantina Cellaro IGT 2020', description: 'Nero D\'Avola et Syrah', price: '64.-' },
            { name: 'Sito Dell\'Ulmo, Planeta IGT 2015', description: 'Merlot', price: '78.-' }
          ]
        },
        {
          subtitle: 'Regione Autònoma della Sardegna',
          items: [
            { name: 'Cannonau Tamara 2016', description: '100% Cannonau', price: '68.-' }
          ]
        },
        {
          subtitle: 'Della Regione del Piemonte',
          items: [
            { name: 'Dolcetto d\'Alba DOC 2020, Figli Luigi Oddero', description: '100% Dolcetto', price: '68.-' },
            { name: 'Barbera d\'Asti DOCG Superiore 2020', description: 'Elio Perrone, Mongovone 100% Barbera', price: '85.-' },
            { name: 'Oddero Langhe DOC, Nebbiolo, 2018, Figli Luigi Oddero', description: '', price: '97.-' },
            { name: 'Gaja Sito Moresco DOC 2018', description: 'Nebbiolo, Cabernet, Merlot', price: '158.-' },
            { name: 'Gaja Barolo Dagromis DOCG 2017', description: 'Nebbiolo', price: '205.-' },
            { name: 'Gaja Barbaresco DOCG 2018', description: 'Nebbiolo', price: '320.-' }
          ]
        },
        {
          subtitle: 'Della Regione Toscana',
          items: [
            { name: 'Badilante 414, 2020', description: '100% Sangiovese', price: '68.-' },
            { name: 'Villa Antinori 2019', description: '60% Sangiovese, 20% Cabernet Sauvignon, 15% Merlot, 5% Syrah', price: '72.-' },
            { name: 'Bolgheri Rosso DOC 2020, Podere Grattamacco', description: 'Cabernet Sauvignon, Cabernet Franc, Merlot, Sangiovese', price: '75.-' },
            { name: 'Le Volte Dell\'Ornellaia 2020', description: 'Cabernet Sauvignon, Merlot, Cabernet Franc', price: '88.-' },
            { name: 'Rosso di Montalcino DOC 2020', description: 'Sangiovese Grosso 15%', price: '88.-' },
            { name: 'Marchese Antinori, Chianti Classico DOCG, Riserva 2019', description: 'Sangiovese, Cabernet Sauvignon', price: '98.-' },
            { name: 'Brunello di Montalcino DOCG 2016, Col D\'Orcia', description: '*Biologico', price: '145.-' },
            { name: 'Gaja Ca\' Marcanda Magari 2020', description: '60% Cabernet Franc, 30% Cabernet Sauvignon, 10% Petit Verdot', price: '158.-' },
            { name: 'Antinori Tignanello 2019', description: '80% Sangiovese, 15% Cabernet Sauvignon, 5% Cabernet Franc', price: '420.-' },
            { name: 'Ca\' Marcanda Bolgheri camarcanda, 2011, Gaja', description: '50% Merlot, 40% Cabernet Sauvignon, 10% Cabernet Franc', price: '349.-' },
            { name: 'Tenuta S. Guido Sassicaia 2019', description: '85% Cabernet Sauvignon, 15% Cabernet Franc', price: '620.-' },
            { name: 'Tenuta dell\'Ornellaia 2019', description: '34% Cabernet Sauvignon, 32% Merlot, 20% Petit Verdot, 14% Cabernet Franc', price: '560.-' },
            { name: 'Antinori Solaia 2018', description: '75% Cabernet Sauvignon, 25% Sangiovese, 5% Cabernet Franc', price: '720.-' }
          ]
        }
      ]
    },
    {
      title: 'Le Bottiglia Mezzine (37,5 cl)',
      items: [
        { name: 'Villa Antinori 2019', description: '60% Sangiovese, 20% Cabernet Sauvignon, 15% Merlot, 5% Syrah', price: '42.-' },
        { name: 'Amarone Della Valpolicella DOCG Superiore, 2016, San Rustico', description: 'Corvina, Rondinella et Mollinara', price: '68.-' },
        { name: 'Gaja Ca\' Marcanda Magari 2020', description: '60% Cabernet Franc, 30% Cabernet Sauvignon, 10% Petit Verdot', price: '78.-' },
        { name: 'Antinori Tignanello 2019', description: '80% Sangiovese, 15% Cabernet Sauvignon, 5% Cabernet Franc', price: '210.-' },
        { name: 'Tenuta S. Guido Sassicaia 2019', description: '85% Cabernet Sauvignon, 15% Cabernet Franc', price: '270.-' },
        { name: 'Tenuta dell\'Ornellaia 2019', description: '34% Cabernet Sauvignon, 32% Merlot, 20% Petit Verdot, 14% Cabernet Franc', price: '285.-' }
      ]
    },
    {
      title: 'Le Bottiglia Magnums (150 cl)',
      items: [
        { name: 'Villa Antinori 2019', description: '60% Sangiovese, 20% Cabernet Sauvignon, 15% Merlot, 5% Syrah', price: '160.-' },
        { name: 'Amarone Della Valpolicella DOCG Superiore, 2016, San Rustico', description: 'Corvina, Rondinella et Mollinara', price: '205.-' },
        { name: 'Marchese Antinori, Chianti Classico DOCG, Riserva 2019', description: 'Sangiovese, Cabernet Sauvignon', price: '195.-' },
        { name: 'Brunello di Montalcino DOCG 2016, Col D\'Orcia', description: '*Biologico', price: '290.-' },
        { name: 'Antinori Tignanello 2019', description: '80% Sangiovese, 15% Cabernet Sauvignon, 5% Cabernet Franc', price: '640.-' }
      ]
    },
    {
      title: 'Champagne e spumante',
      items: [
        { name: 'Ruinart Champagne Blanc de blanc', description: '', price: '350.-' },
        { name: 'Ruinart Champagne Brut Rosé', description: '', price: '250.-' },
        { name: 'Laurent Perrier Brut Cuvée Rosé', description: '', price: '250.-' },
        { name: 'Moët et Chandon, Brut Imperial', description: '', price: '170.-' },
        { name: 'Franciacorta Millesimato Rosé 2016 L\'Acrobata', description: '', price: '140.-' },
        { name: 'Bortolin Angelo Prosecco', description: 'Brut Superiore Valdobbiadene DOCG 2021', price: '95.-' }
      ]
    },
    {
      title: 'Vini da Dessert',
      items: [
        { name: 'Deltetto, Bric du Liun 2016, Appassite de Piemonte', description: '', price: '95.-' }
      ]
    },
    {
      title: 'Il Digestivi al bicchiere',
      items: [
        { name: 'Limoncello Maison', description: '2cl', price: '12.-' }
      ]
    },
    {
      title: 'Grappa',
      items: [
        { name: 'Berta Bric del Gaian, 2012 43%', description: '2cl', price: '26.-' },
        { name: 'Sassicaia 40%', description: '2cl', price: '26.-' },
        { name: 'Ornellaia 42%', description: '2cl', price: '26.-' },
        { name: 'Barolo Riserva 43%', description: '2cl', price: '21.-' },
        { name: 'Nonino di Mosc. 41%', description: '2cl', price: '21.-' },
        { name: 'Tignanello 42%', description: '2cl', price: '21.-' },
        { name: 'Nonino 41%', description: '2cl', price: '14.-' }
      ]
    },
    {
      title: 'Liqueurs',
      items: [
        { name: 'Amaretto DiSaronno 28%', description: '4cl', price: '16.-' },
        { name: 'Sambuca 40%', description: '4cl', price: '16.-' },
        { name: 'Amaro Averna 32%', description: '4cl', price: '16.-' },
        { name: 'Williamine 43%', description: '4cl', price: '14.-' },
        { name: 'Porto 19.5%', description: '4cl', price: '12.-' },
        { name: 'Cognac Remy Martin 40%', description: '4cl', price: '18.-' },
        { name: 'Whisky Single Malt 40%', description: '4cl', price: '18.-' },
        { name: 'Whisky Blended 43%', description: '4cl', price: '16.-' },
        { name: 'Brandy 38%', description: '4cl', price: '18.-' }
      ]
    },
    {
      title: 'Bevande calde',
      items: [
        { name: 'Cafe/expresso/ristretto', description: '', price: '5.50.-' },
        { name: 'Macchiato', description: '', price: '5.50.-' },
        { name: 'The/Infusion', description: '', price: '6.50.-' },
        { name: 'Cappuccino', description: '', price: '6.-' },
        { name: 'Café double', description: '', price: '6.-' }
      ]
    }
  ];

  const wineSelection = [
    { name: 'Chianti Classico DOCG', region: 'Toscane', price: '65.-' },
    { name: 'Barolo DOCG', region: 'Piémont', price: '95.-' },
    { name: 'Prosecco di Valdobbiadene', region: 'Vénétie', price: '48.-' },
    { name: 'Brunello di Montalcino', region: 'Toscane', price: '120.-' }
  ];

  const renderDrinkSection = (section: any, index: number) => {
    return (
      <div key={index} className="mb-8 animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
        <h3 className="text-2xl font-serif font-bold text-primary mb-2">{section.title}</h3>
        {section.subtitle && (
          <p className="text-sm text-gray-600 italic mb-4">{section.subtitle}</p>
        )}
        
        {section.sections ? (
          // For wine sections with subsections
          <div className="space-y-6">
            {section.sections.map((subsection: any, subIndex: number) => (
              <div key={subIndex}>
                <h4 className="text-lg font-semibold text-accent mb-3">{subsection.subtitle}</h4>
                <div className="space-y-3">
                  {subsection.items.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="flex justify-between items-start border-b border-gray-100 pb-2">
                      <div className="flex-1">
                        <h5 className="font-semibold text-primary text-sm">{item.name}</h5>
                        {item.description && (
                          <p className="text-xs text-gray-600">{item.description}</p>
                        )}
                      </div>
                      <span className="text-accent font-bold text-sm ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // For regular sections
          <div className="space-y-3">
            {section.items.map((item: any, itemIndex: number) => (
              <div key={itemIndex} className="flex justify-between items-start border-b border-gray-100 pb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-primary text-sm">{item.name}</h4>
                  {item.description && (
                    <p className="text-xs text-gray-600">{item.description}</p>
                  )}
                </div>
                <span className="text-accent font-bold text-sm ml-4">{item.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="pt-40 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-primary mb-6 animate-fade-in-up">
              Notre Menu
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Découvrez nos spécialités italiennes préparées avec passion et des ingrédients 
              d'exception importés directement d'Italie.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-secondary pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Menu Content */}
            <div className="lg:w-3/4">
              {/* Category Navigation */}
              <div className="flex flex-wrap gap-2 mb-20 justify-center">
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-white text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Menu Items */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-serif font-bold text-primary mb-12 text-center pt-4">
                  {menuCategories.find(cat => cat.id === activeCategory)?.name}
                </h2>
                
                {activeCategory === 'boissons' ? (
                  // Drinks Menu
                  <div className="space-y-8">
                    {drinkCategories.map((section, index) => renderDrinkSection(section, index))}
                  </div>
                ) : (
                  // Food Menu
                  <div className="space-y-6">
                    {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-b-0 animate-fade-in-up"
                        style={{animationDelay: `${index * 0.1}s`}}
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary mb-2">{item.name}</h3>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="text-xl font-bold text-accent">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Wine Selection Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="flex items-center mb-6">
                  {activeCategory === 'boissons' ? (
                    <Martini className="text-accent mr-3" size={28} />
                  ) : (
                    <Wine className="text-accent mr-3" size={28} />
                  )}
                  <h3 className="text-xl font-serif font-bold text-primary">
                    {activeCategory === 'boissons' ? 'Nos Spécialités' : 'Sélection de Vins'}
                  </h3>
                </div>
                
                {activeCategory === 'boissons' ? (
                  <div>
                    <p className="text-sm text-gray-600 mb-6">
                      Découvrez nos cocktails signature et notre sélection de vins d'exception.
                    </p>
                    <div className="space-y-4">
                      <div className="border-b border-gray-200 pb-3">
                        <h4 className="font-semibold text-primary text-sm">Cocktail La Finestra</h4>
                        <p className="text-xs text-gray-600">Notre signature</p>
                        <p className="text-accent font-bold text-sm mt-1">23.-</p>
                      </div>
                      <div className="border-b border-gray-200 pb-3">
                        <h4 className="font-semibold text-primary text-sm">Sassicaia 2019</h4>
                        <p className="text-xs text-gray-600">Toscane d'exception</p>
                        <p className="text-accent font-bold text-sm mt-1">620.-</p>
                      </div>
                      <div className="border-b border-gray-200 pb-3">
                        <h4 className="font-semibold text-primary text-sm">Limoncello Maison</h4>
                        <p className="text-xs text-gray-600">Fait maison</p>
                        <p className="text-accent font-bold text-sm mt-1">12.-</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-sm text-gray-600 mb-6">
                      Découvrez notre sélection de vins italiens soigneusement choisis par notre sommelier.
                    </p>
                    
                    <div className="space-y-4">
                      {wineSelection.map((wine, index) => (
                        <div key={index} className="border-b border-gray-200 pb-3 last:border-b-0">
                          <h4 className="font-semibold text-primary text-sm">{wine.name}</h4>
                          <p className="text-xs text-gray-600">{wine.region}</p>
                          <p className="text-accent font-bold text-sm mt-1">{wine.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-6 p-4 bg-secondary rounded-lg">
                  <p className="text-xs text-gray-700 text-center">
                    <strong>Conseil du sommelier :</strong><br />
                    {activeCategory === 'boissons' 
                      ? 'Demandez nos accords cocktails-plats pour une expérience unique.'
                      : 'Demandez nos accords mets-vins personnalisés pour sublimer votre repas.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;