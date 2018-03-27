import base64 from 'base-64';
import { map } from 'lodash';

// expects ordering as [{field: first_name, order: ASC}, {field: last_name, order: DESC}]
// expect decoded cursor as ['Jake','Lowen']

// let paginated = await paginator(this.sqlDb, query, orderBy, limit, after, 'state_file_id');

export const paginator = async (db, query, orderBy, limit, after, uniqueColumn) => {
  // treat original query as subquery (includes filters)
  const paginationQuery = db.select().from(query.clone().as('filters'));

  if (after) {
    const decodedCursor = JSON.parse(base64.decode(after));
    // override orderBY
    orderBy = decodedCursor.orderBy;
    // let rawCompositeColumns
    const keys = map(orderBy, 'sort');
    const whereRawValues = decodedCursor.values.map(value => `'${value}'`).join(',');
    const whereRawComposite = `(${keys.join()}) >= (${whereRawValues})`;
    paginationQuery.whereRaw(whereRawComposite);
  } else {
    // if cursor is present below is automatically done.
    // also apply unique column orderBy
    orderBy.push({ sort: uniqueColumn, direction: 'ASC' });
  }

  // honor request orderBy args
  if (orderBy) {
    map(orderBy, ordering => {
      paginationQuery.orderBy(ordering.sort, ordering.direction);
    });
  }

  // apply item count limit
  if (limit) {
    paginationQuery.limit(limit + 1);
  }

  // fetch items
  console.log(paginationQuery.toSQL());
  let items = await paginationQuery;
  console.log(items);

  // encode cursor if necessary
  let encodedCursor;
  if (items.length > limit) {
    const values = map(orderBy, ordering => items[limit][ordering.sort]);
    // add uniqueColumn to values
    values.push(items[limit][uniqueColumn]);
    orderBy.push({ sort: uniqueColumn, direction: 'ASC' });
    const cursorPayload = {
      orderBy,
      values,
    };
    // we have a next page - make a cursor
    encodedCursor = base64.encode(JSON.stringify(cursorPayload));
    items = items.slice(0, limit);
  }

  return {
    items,
    response_metadata: {
      next_cursor: encodedCursor,
    },
  };

  // query.orderBy(uniqueColumn, 'ASC');

  // // if cursor then base64 decode
  // if (page.cursor) {
  //   const decodedCursor = base64.decode(page.cursor);
  //   query.where(uniqueColumn, '>=', decodedCursor);
  // }

  // // then apply limit + 1
  // query.limit(page.limit + 1);

  // // fetch items
  // let items = await query;

  // let encodedCursor;
  // if (items.length > page.limit) {
  //   // we have a next page - make a cursor
  //   encodedCursor = base64.encode(items[page.limit][uniqueColumn]);
  //   items = items.slice(0, page.limit);
  // }

  // return {
  //   items,
  //   response_metadata: {
  //     next_cursor: encodedCursor,
  //   },
  // };
};