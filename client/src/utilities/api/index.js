/*
*
*   API helpers
*
*/

/*
*   Fetch content for a single resource
*   PARAMS ::  resourcePath: string - path to the resource 
*   RETURN ::  result: object OR {error:bool, message:string}
*/

export const fetchSingleResource = async (resourcePath) => {

    //API base URL is defined in environment variables
    const API_ROOT = process.env.REACT_APP_API_ROOT;

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