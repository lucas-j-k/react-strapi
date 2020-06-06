/*
 * 
 *	Custom Hook
 *	Make a single call to an API endpoint and store the result. Track error and loading states 	
 *
 */

import { useEffect, useState } from "react";
import { fetchSingleResource } from '../../api';

const useFetchSingle = (resourcePath) => {
	const [ content, setContent ] = useState(null);
	const [ contentLoaded, setContentLoaded ] = useState(false);
    const [ notFound, setNotFound ] = useState(false);
    const [ errorOccurred, setErrorOccurred ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState("");
    const [ loading, setLoading ] = useState(true);

    const fetchData = async () => {
    	resetState();
	    setContentLoaded(false);
	    setLoading(true);
	    const apiResponse = await fetchSingleResource(resourcePath);
	    if(apiResponse.status === 404) {
	        setNotFound(true);
	    }
	    if (apiResponse.error) {
	        setErrorOccurred(true);
	        setErrorMessage(apiResponse.message);
	    }
	    setContent(apiResponse.data);
	    setContentLoaded(true);
	    setLoading(false);
	}

	const resetState = () => {
		setContent(null);
		setContentLoaded(false);
		setNotFound(false);
		setErrorOccurred(false);
		setErrorMessage("");
		setLoading(true);
	}

	useEffect(() => {
		fetchData();
		return resetState;
	}, [resourcePath]);

	return [
		content,
		contentLoaded,
		notFound,
		errorOccurred,
		errorMessage,
		loading,
	];

};

export default useFetchSingle;


