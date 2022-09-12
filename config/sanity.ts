import sanityClient from '@sanity/client'

const sanity = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET || 'production',
    // If your dataset is private you need to add a read token.
    // You can mint one at https://manage.sanity.io,
    token: process.env.SANITY_TOKEN || undefined,
    apiVersion: '2021-03-25',
    useCdn: false,
})


export default sanity