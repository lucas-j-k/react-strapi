/*
*
*   Article Feed - renders an array of article preview cards
*
*/

import React from 'react';

import ArticlePreview from '../ArticlePreview';
import ErrorPanel from '../ErrorPanel';
import LoadingPanel from '../LoadingPanel';
import UI from '../UI';

import useFetchSingle from '../../utilities/customHooks/useFetchSingle';

const ArticleFetchFeed = ({resourcePath, showCategories}) => {


    const [
        content,
        contentLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(resourcePath);

    const renderFeed = articles => articles.map(a => (
        <ArticlePreview 
            showCategories={showCategories} 
            article={a} 
        /> 
    ))


    return (
        <UI.Box>
            {loading && <LoadingPanel showText/>}
            {errorOccurred && <ErrorPanel message={errorMessage} />}
            {contentLoaded && content.length === 0 && (
                <ErrorPanel message='No articles found for this category' />
            )}
            {contentLoaded && content && content.length > 0 && (
                <UI.Flex justifyContent='flex-start'>
                    {renderFeed(content)}
                </UI.Flex>        
            )}
        </UI.Box>
    );
};

export default ArticleFetchFeed;
