exports.up = function(knex) {
  return knex.raw(
    'ALTER TABLE shared.voter_file ADD COLUMN propensity_score INTEGER DEFAULT 0, ADD COLUMN party VARCHAR'
  );
  // return knex.schema.alterTable('shared.voter_file', t => {
  //   t.integer('propensity_score').defaultTo(0);
  //   t.string('party');
  // });
};

exports.down = function(knex) {
  return knex.raw(
    'ALTER TABLE shared.voter_file DROP COLUMN propensity_score CASCADE, DROP COLUMN party CASCADE'
  );
};
