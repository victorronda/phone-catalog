// Helper function to create a simple slug to make the url more SEO friendly.
export const getSlug = (stringToSlug) => {
    if (typeof stringToSlug !== 'string') {
        throw new Error('The argument must be a valid string')
    }
    const preSlugArray = stringToSlug.toLowerCase().split(' ');
    if (preSlugArray.length > 15) {
        const shortenedSlug = preSlugArray.slice(0,15).join('-')
        return shortenedSlug;
    } else {
        const slug = preSlugArray.join('-');
        return slug;
    }
}