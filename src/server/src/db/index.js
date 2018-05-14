import knex from 'knex';
import knexfile from './knexfile';

// Eventually we want to wrap Knex to do some batching and caching, but for
// now this will do since we know none of our queries need it
console.log(process.env.NODE_ENV);
console.log(knexfile[process.env.NODE_ENV || 'development']);
export default knex(knexfile[process.env.NODE_ENV || 'development']);
