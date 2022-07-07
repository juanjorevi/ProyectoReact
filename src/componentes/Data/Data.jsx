const Data= [
  {
    "id":1,
    "nombre": "bulbasaur",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
   tipo:"planta",
   "descripcion":"A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol. Después de nacer, crece alimentándose de las semillas de su lomo. Una rara semilla le fue plantada en el lomo al nacer. La planta brota y crece con este Pokémon."
  },
  {
    "id":2,
    "nombre": "ivysaur",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    tipo:"planta",
    "descripcion":"Este Pokémon lleva un bulbo en el lomo y, para poder con su peso, tiene unas patas y un tronco gruesos y fuertes. Si empieza a pasar más tiempo al sol, será porque el bulbo está a punto de hacerse una flor grande. Cuando el bulbo de su lomo se hincha, desprende un dulce aroma para indicar el florecimiento. Este Pokémon tiene un bulbo en el lomo. Dicen que, al absorber nutrientes, el bulbo se transforma en una flor grande."
  },
  {
    "id":3,
    "nombre": "venusaur",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    tipo:"planta",
    "descripcion":"Venusaur tiene una flor enorme en el lomo que, según parece, adquiere unos colores muy vivos si está bien nutrido y le da mucho el sol. El aroma delicado de la flor tiene un efecto relajante en el ánimo de las personas. Después de un día de lluvia, la flor de su lomo tiene un aroma más potente y atrae a otros Pokémon. Llena su cuerpo de energía con los rayos solares que captan los anchos pétalos de su flor."
  },
  {
    "id":4,
    "nombre": "charmander",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    tipo:"fuego",
    "descripcion":"La llama que tiene en la punta de la cola arde según sus sentimientos. Llamea levemente cuando está alegre y arde vigorosamente cuando está enfadado."
  },
  {
    "id":5,
    "nombre": "charmeleon",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    tipo:"fuego",
    "descripcion":"Charmeleon, es un Pokémon orgulloso que destroza a sus enemigos usando sus afiladas garras y su cola sin piedad alguna. Si se encuentra con un Pokémon fuerte en su camino se torna agresivo. En ese estado de excitación, la llama de la punta de su cola arde con más fervor. Cuando Charmeleon se encuentra en peligro durante el combate, el fuego de su cola crece, proporcionándole más fuerza. Al evolucionar, se convierte en un Pokémon testarudo y difícil de controlar, pues al sentirse más fuerte creerá que puede hacer todo sin ayuda, es fácil que desobedezca a los entrenadores novatos."
  },
  {
    "id":6,
    "nombre": "charizard",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    tipo:"fuego",
    "descripcion":"Es muy presuntuoso, violento, agresivo y muy orgulloso. Es tanto así, que no es capaz de pelear contra un Pokémon más débil que él. Es por esta sencilla razón que prefiere luchar contra oponentes que le representen un desafío. Hasta que no derrote a su adversario no parará. Si entra en estado de furia, su llama se multiplicará por diez, de modo que puede ser capaz de derretir cualquier cosa con su potente lanzallamas. El color de la llama de su cola cambia según sea su estado anímico, teniendo un tono rojo al estar tranquilo, y tornándose azul y más caliente al enfurecerse."
  },
  {
    "id":7,
    "nombre": "squirtle",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    tipo:"agua",
    "descripcion":"Squirtle es una de las especies más difíciles de encontrar. Habita tanto aguas dulces como marinas, preferiblemente zonas bastante profundas. Son pequeñas tortugas color celeste con caparazones color café; o rojas en algunos casos, con una cola enrollada que los distingue. Poco después de nacer, sus caparazones se endurecen y se hacen más resistentes a los ataques; muchos objetos rebotarán en ella."
  },
  {
    "id":8,
    "nombre": "wartortle",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
    tipo:"agua",
    "descripcion":"Es un Pokémon fuerte que a veces tiene arañazos en su caparazón, que sirve como recordatorio de batallas pasadas. Para mantener el balance mientras nada a altas velocidades, Wartortle mueve sus orejas y su cola. Ésta, cubierta de un suave pelaje, es tan larga que un pedazo de ella sobresale cuando Wartortle se oculta en su caparazón. Usa su pelaje para almacenar aire y poder bucear por más tiempo."
  },
  {
    "id":9,
    "nombre": "blastoise",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
    tipo:"agua",
    "descripcion":"Blastoise es una enorme tortuga bípeda, que puede extender unos poderosos cañones situados en su espalda para disparar potentes chorros de agua, con la fuerza suficiente para quebrar muros de cemento o metales delgados. Pueden disparar balas de agua con suficiente precisión para golpear latas a 50 metros de distancia. Pese a ello, son incapaces de apuntar a objetivos demasiado cercanos. Pueden arrojar la cantidad de agua suficiente como para llenar 3 piscinas olímpicas en un minuto, razón por la que muchos equipos de bomberos poseen varios Blastoise, pues con las enormes cantidades de agua que pueden disparar cualquier incendio puede ser extinguido fácilmente."
  },
  {
    "id":10,
    "nombre": "caterpie",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    tipo:"bicho",
    "descripcion":"Su característica más notable son sus brillantes antenas color rojo sobre su cabeza. Estas, junto con sus grandes ojos, ayudan a ahuyentar depredadores. Este Pokémon es capaz de producir una sustancia que desprende un hedor de su antena. Comparte muchas características físicas con Wurmple y Weedle, teniendo además, una línea evolutiva muy similar."
  },
  {
    "id":11,
    "nombre": "metapod",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
    tipo:"bicho",
    "descripcion":"Su característica más notable son sus brillantes antenas color rojo sobre su cabeza. Estas, junto con sus grandes ojos, ayudan a ahuyentar depredadores. Este Pokémon es capaz de producir una sustancia que desprende un hedor de su antena. Comparte muchas características físicas con Wurmple y Weedle, teniendo además, una línea evolutiva muy similar."
  },
  {
    "id":12,
    "nombre": "butterfree",
    "imgUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
    tipo:"bicho",
    "descripcion":"Butterfree es una mariposa Pokémon atractiva que posee unos grandes ojos rojos, un cuerpo de color púrpura oscuro, dos pequeñas manos y dos pies de un color azul cielo; a diferencia de las seis patas que poseen las mariposas en la vida real. Sus alas blancas están cubiertas por un polvo tóxico y son impermeables al agua."
  },
];

  export default Data ;
