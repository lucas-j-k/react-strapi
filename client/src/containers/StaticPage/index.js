/*
 * 
 *	Static Page
 * 	Load and render a single static page with header and content 
 * 
 */

import React, { useEffect, useRef } from "react";


import useFetchSingle from '../../utilities/customHooks/useFetchSingle';

import PageHeading from '../../components/PageHeading';
import UI from '../../components/UI';
import Layouts from '../../components/Layouts';
import MarkdownRender from '../../components/MarkdownRender';
import ErrorPanel from '../../components/ErrorPanel';
import LoadingPanel from '../../components/LoadingPanel';


const StaticPage = ({pageName, children}) => {

    // Set the URL path to fetch resource from the API
    const resourcePath = `${pageName}`;

    // Store the previous page name, so we can show loading screen when switching
    // from one static page to another.
    const prevPageName = useRef();

    useEffect(() => {
        prevPageName.current = pageName;        
    });

    const [
        content,
        contentLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(resourcePath);

    const generateBody = () => {
        // Loading State
        if(loading || pageName !== prevPageName.current) {
            return (<LoadingPanel showText />);
        };
        // Error State
        if(errorOccurred) {
            return (
                <ErrorPanel message={errorMessage} />
            );
        };
        // Ready State
        if(content && contentLoaded){ 
            return (
                <UI.Box p={4} width={[1, 2/3]} maxWidth={1024}>
                    <PageHeading text={content.heading} />
                    <UI.Box my={4} py={1}>
                        <MarkdownRender content={content.body} />
                    </UI.Box>
                    {children}
                </UI.Box>
            );
        };
    }

    return (
        <Layouts.SingleColumn main={generateBody()} />
    );
}

export default StaticPage;

