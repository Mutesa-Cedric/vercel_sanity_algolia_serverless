import algoliasearch from 'algoliasearch'
const algolia = algoliasearch(
    process.env.ALGOLIA_APP_ID||'6O9KIWQRE1',//your algolia application id
    process.env.ALGOLIA_ADMIN_API_KEY!//your algolia admin api key
)
export default algolia
