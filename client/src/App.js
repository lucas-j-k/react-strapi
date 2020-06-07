
import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize'

import HomePage from './containers/HomePage';
import Navbar from './containers/Navbar';
import Footer from './components/Footer';
import StaticPage from './containers/StaticPage';
import ErrorBoundary from './containers/ErrorBoundary';
import CategoryFeed from './containers/CategoryFeed';
import SingleArticle from './containers/SingleArticle';
import AuthorPage from './containers/AuthorPage';
import NotFoundPage from './components/NotFoundPage';
import ContactForm from './components/ContactForm';
import UI from './components/UI';

import theme from './theme/styled-system-theme';
import useFetchSingle from './utilities/customHooks/useFetchSingle';


// Set up the CSS reset as a global style
const GlobalStyle = createGlobalStyle`
  ${Normalize}
  * {
    box-sizing: border-box;
  }
  body {
	  font-family: 'Lora', serif;
	  font-size: 16px;
  }
  a {
	  color: inherit;
	  text-decoration: none;
  }
	  
`;


function App() {
	
  const categoriesPath = 'categories';

  const [
        categories,
        categoriesLoaded,
        notFound,
        errorOccurred,
        errorMessage,
        loading,
    ] = useFetchSingle(categoriesPath);

    const generateCategoryRoutes = () => categories.map(category => (
      <Route path={`/${category.slug}`} exact key={category.id}>
        <CategoryFeed categoryId={category.id} categoryTitle={category.name}/>
      </Route>
    ));

  return (
    <ThemeProvider theme={theme}>
      {<GlobalStyle />}
        <UI.Box minHeight='100vh' bg="grayscale.7" color='grayscale.3'>
          <ErrorBoundary>
            <Router>
              <Navbar categories={categories} />
              <UI.Box minHeight='100vh'>
              <Switch>
                <Route path='/about' exact >
                  <StaticPage pageName='about-page' />
                </Route>
                <Route path='/contact' exact >
                  <StaticPage pageName='contact-page'>
	                  <ContactForm />
                  </StaticPage>
                </Route>
                  {categoriesLoaded && categories && generateCategoryRoutes()}
                <Route path='/article/:articleId' exact >
                  <SingleArticle />
                </Route>
                <Route path='/author/:authorId' exact >
                  <AuthorPage />
                </Route>
                <Route path='/' exact>
                  <HomePage categories={categories} />
                </Route>
                <Route path='/404'>
                  <NotFoundPage />
                </Route>
                <Redirect to="/404" />
              </Switch>
              </UI.Box>
              <Footer />
            </Router>
          </ErrorBoundary>
        </UI.Box>
		
      </ThemeProvider>
  );
}

export default App;
