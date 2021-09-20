import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
    return (
        <Layout>
            <Suspense
                fallback={
                    <div className="centered">
                        <LoadingSpinner />
                    </div>
                }
            >
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quote" />
                    </Route>
                    <Route path="/quote" exact>
                        <AllQuotes />
                    </Route>
                    <Route path="/quote/:quoteID">
                        <QuoteDetail />
                    </Route>

                    <Route path="/new-quote" exact>
                        <AddQuote />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    );
}

export default App;
