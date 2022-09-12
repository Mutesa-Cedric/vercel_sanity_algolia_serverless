import { SanityDocumentStub } from "@sanity/client"
import indexer from "sanity-algolia"
import algolia from "./algolia"

const algoliaIndex = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME || 'rca')
const sanityAlgolia = indexer(

    {
        pages: {
            index: algoliaIndex,
            projection: `{
                title,
                description,
                "slug":slug.current
        }`,
        },

        blog: {
            index: algoliaIndex,
            projection: `{
                title,
                description,
                "slug":slug.current
        }`,
        },
        topics: {
            index: algoliaIndex,
            projection: `{
                title,
                description,
                "slug":slug.current
        }`,
        },
        about: {
            index: algoliaIndex,
            projection: `{
                Title,
                description,
                "slug":slug.current
        }`,
        },
        sermons: {
            index: algoliaIndex,
            projection: `{
                Title,
                description,
                "slug":slug.current
        }`,
        }, 
        events: {
            index: algoliaIndex,
            projection: `{
                Title,
                description,
                "slug":slug.current
        }`,
        }, 
        legal: {
            index: algoliaIndex,
            projection: `{
                title,
                description,
                "slug":slug.current
        }`,
        },
    },


    // The second parameter is a function that maps from a fetched Sanity document
    // to an Algolia Record. Here you can do further mutations to the data before
    // it is sent to Algolia.
    (document: SanityDocumentStub) => {
       
        if(document._type==="about"||document._type==="sermons"||document._type==="events"){
            return {
                title:document.Title,
                description:document.description,
                slug:document.slug
            }
        }
        return document
    },
    // Visibility function (optional).
    //
    // The third parameter is an optional visibility function. Returning `true`
    // for a given document here specifies that it should be indexed for search
    // in Algolia. This is handy if for instance a field value on the document
    // decides if it should be indexed or not. This would also be the place to
    // implement any `publishedAt` datetime visibility rules or other custom
    // visibility scheme you may be using.
    (document: SanityDocumentStub) => {
        if (document.hasOwnProperty('isHidden')) {
            return !document.isHidden
        }
        return true
    }
)

export default sanityAlgolia;