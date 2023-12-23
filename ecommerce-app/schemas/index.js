import { createSchema } from "sanity";
// import { schema } from 'part:@sanity/base/schema';


import product from './product';
import banner from './banner';

// export default createSchema({
//     name: 'default',
//     types: schema.concat([product, banner]),
// })

export const schemaTypes = [product, banner]

