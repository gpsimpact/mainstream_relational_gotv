exports.up = function(knex) {
  return knex.schema
    .withSchema('shared')
    .hasTable('voter_file')
    .then(exists => {
      if (!exists) {
        return knex.schema.withSchema('shared').createTable('voter_file', table => {
          table
            .string('state_file_id')
            .notNullable()
            .primary();
          table.string('first_name');
          table.string('middle_name');
          table.string('last_name');
          table.string('home_address');
          table.string('city');
          table.string('state');
          table.string('zipcode');
          table.date('dob');
          table.boolean('vo_ab_requested_primary').defaultTo(false);
          table.date('vo_ab_requested_date_primary');
          table.boolean('vo_voted_primary').defaultTo(false);
          table.date('vo_voted_date_primary');
          table.string('vo_voted_method_primary');
          table.boolean('vo_ab_requested_general').defaultTo(false);
          table.date('vo_ab_requested_date_general');
          table.boolean('vo_voted_general').defaultTo(false);
          table.date('vo_voted_date_general');
          table.string('vo_voted_method_general');
        });
      }
    });
};

exports.down = function(knex) {
  return knex.raw('DROP TABLE IF EXISTS shared.voter_file CASCADE');
};
