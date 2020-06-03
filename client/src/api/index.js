/*
*
*   API helpers
*
*/

const API_ROOT = 'http://localhost:1337';

/*
*   Fetch content for a single resource
*   PARAMS ::  resourcePath: string - path to the resource 
*   RETURN ::  result:article object OR {error:bool, message:string}
*/

export const fetchSingleResource = async (resourcePath) => {
    try {
        const response = await fetch(`${API_ROOT}/${resourcePath}`);
        if(response.status === 404){
            return {
                error: true,
                message: "Not Found",
                status: 404,
            }
        }
        if(!response.ok) throw new Error();
        const responseJSON = await response.json();
        return { 
            data: responseJSON,
         };
    } catch (e) {
        return {
            error: true,
            message: 'Unable to load the content for this page.',
        }
    }
};