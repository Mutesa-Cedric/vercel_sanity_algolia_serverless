import sanity from '../config/sanity'; // configured Sanity client
import sanityAlgolia from '../config/sanityAlgolia'  // configured sanity-algolia

// Fetch the _id of all the documents we want to index
const types = ["pages","blog","topics","about","semons","events","legal"];
const query = `* [_type in $types && !(_id in path("drafts.**"))][]._id`

sanity.fetch(query, { types }).then((ids: any) => 
  sanityAlgolia.webhookSync(sanity, { ids: { created: ids, updated: [], deleted: [] }})
)