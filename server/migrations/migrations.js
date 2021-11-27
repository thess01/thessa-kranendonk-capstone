exports.up = function(knex) {
    return knex
        .schema
        .createTable("breweries", (table) => {
            table.increments("id");
            table.string("breweryName").notNullable();
            table.string("address").notNullable();
            table.string('cityState').notNullable();
            table.string('country').notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable("foods", (table) => {
            table.increments("id");
            table.string("foodName").notNullable();
            table.string("cuisine").notNullable();

        })
        .createTable("comments", (table) => {
            table.increments("id");
            table.string("userName").notNullable();
            table.string("comment").notNullable();
            table
                    .integer('beer_id')
                    .unsigned()
                    .references('id')
                    .inTable('beers')
                    .onUpdate('CASCADE')
                    .onDelete('SET NULL');
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable("beers", (table) => {
            table.increments('id');
            table.string('beerName').notNullable();
            table.string('description').notNullable();
            table
                .integer('brewery_id')
                .unsigned()
                .references('id')
                .inTable('breweries')
                .onUpdate('CASCADE')
                .onDelete('SET NULL');
            table.string('beerType').notNullable();
            table.string('season').notNullable();
            table.string('image').notNullable().defaultTo("../public/beer_1");;
            table.integer('rating').notNullable().defaultTo(0);
            // table
            //     .integer('food_id')
            //     .unsigned()
            //     .references('id')
            //     .inTable('foods')
            //     .onUpdate('CASCADE')
            //     .onDelete('SET NULL');
            table.timestamp('updated_at').defaultTo(knex.fn.now());
    })

};

exports.down = function(knex) {
    return knex.schema.dropTable("beers").dropTable("foods").dropTable("breweries").dropTable("comments");
};