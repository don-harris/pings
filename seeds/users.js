exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({
          id: 1001,
          name: 'Callan',
          photo_url: '/images/cal.png',
          username: 'Callan the Careless Whisper',
          hash: ''
        }),
        knex('users').insert({
          id: 1002,
          name: 'Raj',
          photo_url: '/images/raj.jpg',
          username: 'The Fijian Taxi Man',
          hash: ''
        }),
        knex('users').insert({
          id: 1003,
          name: 'Joe',
          photo_url: '/images/joe.jpg',
          username: 'Joey Badass',
          hash: ''
        }),
        knex('users').insert({
          id: 1004,
          name: 'Richard',
          photo_url: '/images/rich.jpg',
          username: 'Long John Silver',
          hash: ''
        }),
        knex('users').insert({
          id: 1005,
          name: 'Don',
          photo_url: '/images/don.jpeg',
          username: 'The Code Thief',
          hash: ''
        }),
        knex('users').insert({
          id: 1006,
          name: 'Harrison',
          photo_url: '/images/harry.jpeg',
          username: 'Ladybug Killer',
          hash: ''
        }),
        knex('users').insert({
          id: 1007,
          name: 'Skye',
          photo_url: '/images/skye.jpeg',
          username: 'The Sloth of the Skies',
          hash: ''
        }),
        knex('users').insert({
          id: 1008,
          name: 'Aaron',
          photo_url: '/images/aaron.png',
          username: 'The Coach',
          hash: ''
        }),
        knex('users').insert({
          id: 1009,
          name: 'Andrea',
          photo_url: '/images/andrea.jpeg',
          username: 'The Bombastic Brazilian',
          hash: ''
        }),
        knex('users').insert({
          id: 1010,
          name: 'Octavia',
          photo_url: '/images/oct.jpeg',
          username: 'OctoLady',
          hash: ''
        }),
        knex('users').insert({
          id: 1011,
          name: 'Daz',
          photo_url: '/images/daz.jpeg',
          username: 'Freeform',
          hash: ''
        }),
        knex('users').insert({
          id: 1012,
          name: 'Annah',
          photo_url: '/images/annah.jpeg',
          username: 'Wonder Woman',
          hash: ''
        }),
        knex('users').insert({
          id: 1013,
          name: 'Don H',
          photo_url: '/images/donh.jpeg',
          username: 'The Murricane',
          hash: ''
        })

      ])
    })
};
