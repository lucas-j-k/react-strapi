/*
 * 
 * Typography components 
 * 
 */

import React, { useEffect, useState } from "react";
import { useParams, Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import UI from '../../components/UI';
import MarkdownRender from '../../components/MarkdownRender';
import Sidebars from '../../components/Sidebars';
import Layouts from '../../components/Layouts';
import LoadingPanel from '../../components/LoadingPanel';
import ErrorPanel from '../../components/ErrorPanel';

import useFetchSingle from '../../utilities/customHooks/useFetchSingle';

const StyledHeaderBlock = styled(UI.Box)`
	background-image: url('${props => props.bgImg}')};
	background-size: cover;
	background-position: center;
`;


const SingleArticle = () => {

    // Get article ID from the url via React Router
    const { articleId } = useParams();

    // Set the URL path to fetch resource from the API
    const resourcePath = `articles/${articleId}`;

    const [
        articleContent,
        articleContentLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(resourcePath);

    const generateBody = () => {
        if(errorOccurred){
            return (<ErrorPanel message='Unable to load the article. Please refresh to try again' />);
        };
        if(loading) {
            return (<LoadingPanel showText />);
        };
        if(articleContentLoaded && articleContent) {
            return (
                <React.Fragment>
                    <StyledHeaderBlock bgImg={articleContent.headerimageurl} minHeight='400px' />
                    <UI.Box bg='grayscale.8' mt={0} py={3} px={3}>
                        <UI.Text color='grayscale.4' mb={6} fontSize={1}>
                            Published {articleContent.publisheddate} by <UI.TextLink to={`/author/${articleContent.author.id}`}>{articleContent.author.username}</UI.TextLink>
                        </UI.Text>
                        <UI.H1 mb={3} color='primary.4'>{articleContent.title}</UI.H1>
                        <UI.Text mt={0} mb={4} color='grayscale.3'>{articleContent.subtitle}</UI.Text>
                    </UI.Box>
                    
                    <UI.Box my={9}>
                       <MarkdownRender content={articleContent.body} />
                    </UI.Box>
                </React.Fragment>
            );
        };
    };

    const generateSidebar = () => (
        <React.Fragment>
            {!articleContent && <Sidebars.Placeholder />}
            {articleContentLoaded && articleContent && <Sidebars.Category categoryId={articleContent.category.id} />}
            <Sidebars.Latest />
        </React.Fragment>
    );

    return (
        <UI.Box>
            {notFound && <Redirect to="/404" />}
            <Layouts.WithSidebar 
                main={generateBody()}
                sidebar={generateSidebar()}
            />
        </UI.Box>
    );
}

export default SingleArticle;

