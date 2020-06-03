import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ArticleFetchFeed from '../../components/ArticleFetchFeed';
import PageHeading from '../../components/PageHeading';
import Layouts from '../../components/Layouts';
import LoadingPanel from '../../components/LoadingPanel';
import ErrorPanel from '../../components/ErrorPanel';
import UI from '../../components/UI';

import useFetchSingle from '../../utilities/customHooks/useFetchSingle';

const AuthorPage = () => {

    // Get author ID from the url via React Router
    const { authorId } = useParams();

    // Set the URL path to fetch resource from the API
    const profileResourcePath = `author-profiles?user=${authorId}`;
    const feedResourcePath = `articles?author=${authorId}&_limit=10&_sort=created_at:DESC`;

    const [
        authorProfile,
        authorProfileLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(profileResourcePath);

    const generateBody = () => {
        // Error State
        if(errorOccurred) {
            return <ErrorPanel message='Unable to load author profile. Please refresh to try again' />
        }
        // Loading State
        if(loading){
            return <LoadingPanel showText />
        }
        // Ready State
        if(authorProfileLoaded && authorProfile){
            return (
                <UI.Box>
                    <PageHeading text={authorProfile.username} />
                    <UI.Text color='grayscale.4'>{authorProfile.bio}</UI.Text>
                    <UI.H3 color='grayscale.3' mb={6}>Articles by this author</UI.H3>
                    <ArticleFetchFeed showCategories resourcePath={feedResourcePath} />
                </UI.Box>
            );
        }
    };

    return <Layouts.SingleColumn main={generateBody()}/>
}

export default AuthorPage;
