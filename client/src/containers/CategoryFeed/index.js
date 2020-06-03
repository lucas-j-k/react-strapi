import React, { useEffect, useState } from 'react';


import ArticleFetchFeed from '../../components/ArticleFetchFeed';
import PageHeading from '../../components/PageHeading';
import ErrorPanel from '../../components/ErrorPanel';
import LoadingPanel from '../../components/LoadingPanel';
import Layouts from '../../components/Layouts';
import UI from '../../components/UI';

const CategoryFeed = ({categoryId, categoryTitle}) => {

    // Set the URL path to fetch resource from the API
    const resourcePath = `articles?category=${categoryId}`;

    const generateBody = () => {
        return (
            <UI.Box>
                <UI.Box>
                    <PageHeading text={categoryTitle} />
                </UI.Box>

                <ArticleFetchFeed resourcePath={resourcePath} />
                
            </UI.Box>
        );
    };

    return <Layouts.SingleColumn main={generateBody()} />
}

export default CategoryFeed;
