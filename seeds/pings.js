
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('pings').del()
    .then(function () {
      // Inserts seed entries
      return knex('pings').insert([
        {id: 1, sender_id: 1001, recipient_id: 1005, image_url: '/images/lol.gif'},
        {id: 2, sender_id: 1006, recipient_id: 1010, image_url: '/images/dog.gif'},
        {id: 3, sender_id: 1003, recipient_id: 1008, image_url: '/images/meme.gif'}
      ])
    })
}
