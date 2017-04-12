exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('snacks').del()
        .then(function() {
            // Inserts seed entries
            return knex('snacks').insert([{
                    id: 1,
                    name: 'placeholder',
                    img_url: 'placeholder',
                    origin: 'placeholder',
                    type: 'placeholder',
                    review: 'placeholder',
                    rating: '5'
                },
                {
                    id: 2,
                    name: 'placeholder',
                    img_url: 'placeholder',
                    origin: 'placeholder',
                    type: 'placeholder',
                    review: 'placeholder',
                    rating: '5'
                },
                {
                    id: 3,
                    name: 'placeholder',
                    img_url: 'placeholder',
                    origin: 'placeholder',
                    type: 'placeholder',
                    review: 'placeholder',
                    rating: '5'
                }
            ]);
        });
};
