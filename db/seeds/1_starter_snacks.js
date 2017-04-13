exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('snacks').del()
        .then(function() {
            // Inserts seed entries
            return knex('snacks').insert([{
                    id: 1,
                    name: 'Grilled chicken sandwich',
                    img_url: 'https://vignette1.wikia.nocookie.net/witcher/images/1/10/Tw3_grilled_chicken_sandwich.png',
                    origin: 'The Witcher 3: Wild Hunt',
                    type: 'Food',
                    review: 'A trusty chicken sandwich snack.',
                    rating: '5'
                },
                {
                    id: 2,
                    name: 'Nuka-Cola',
                    img_url: 'http://vignette1.wikia.nocookie.net/fallout/images/9/9d/FO3_Nuka-Cola_Quantum.png',
                    origin: 'Fallout',
                    type: 'Beverage',
                    review: 'Twice the calories, twice the carbohydrates, twice the caffeine and twice the taste.',
                    rating: '5'
                },
                {
                    id: 3,
                    name: 'Ruby Bliel',
                    img_url: 'http://vignette1.wikia.nocookie.net/starwars/images/9/92/Ruby_Bliel.png/revision/latest?cb=20140221182308',
                    origin: 'Star Wars: Jedi Knight 2: Jedi Outcast',
                    type: 'Beverage',
                    review: 'In a clean glass.',
                    rating: '5'
                },
                {
                    id: 4,
                    name: 'Portal Cake',
                    img_url: 'https://i1.theportalwiki.net/img/thumb/0/0a/Portal_Cake.png/200px-Portal_Cake.png',
                    origin: 'Portal',
                    type: 'Food',
                    review: 'The cake is a lie.',
                    rating: '5'
                }
            ]);
        }).then(() => {
    return knex.raw(
      "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks))"
    )
  })
};
