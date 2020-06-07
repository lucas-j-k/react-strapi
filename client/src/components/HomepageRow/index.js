/*
*
*   Homepage Row - renders a row of articles for a single category
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ErrorPanel from '../ErrorPanel';
import LoadingPanel from '../LoadingPanel';
import UI from '../UI';

import useFetchSingle from '../../utilities/customHooks/useFetchSingle';

const StyledHeaderBlock = styled(UI.Flex)`
    background-image: url('${props => props.bgImg}')};
    background-size: cover;
    background-position: center;
    align-items: flex-start;
    flex-direction: space-between;
    min-height: 200px
`;

const HomepageRow = ({resourcePath, categoryTitle}) => {

    const [
        rowContent,
        rowContentLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(resourcePath);

    const generateBody = articles => articles.map(article => (
        <UI.Box my={[6, 2]} width={[1, '30%']} key={article.id} >
            <StyledHeaderBlock bgImg={article.headerimageurl} />
            <UI.Text color='grayscale.4' fontSize={1}>
                Published {article.publisheddate} by <UI.TextLink to={`/author/${article.author.id}`}>{article.author.username}</UI.TextLink>
            </UI.Text>
            <UI.H3 mt={1}>
                <Link to={`/article/${article.id}`}>
                    {article.title}
                </Link>
            </UI.H3>
            <UI.Text mt={1} color='grayscale.3'>{article.subtitle}</UI.Text>
        </UI.Box>
    ))

    return (
        <UI.Box mb='40px' bg='grayscale.8' px={3} pb={4} minHeight='300px'>
            <UI.H2 m={0} pt={4} pb={1} color='primary.4'>
                {categoryTitle}
            </UI.H2>
            {loading && <LoadingPanel showText/>}
            {errorOccurred && <ErrorPanel message='Unable to load articles for this category' />}
            {rowContentLoaded && rowContent && rowContent.length === 0 && (
                <ErrorPanel message='No articles found for this category' />
            )}
            {rowContentLoaded && rowContent && rowContent.length > 0 && (
                <UI.Flex justifyContent='space-between'>
                    {generateBody(rowContent)}
                </UI.Flex>        
            )}
        </UI.Box>
    );
};

export default HomepageRow;
