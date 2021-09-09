import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import AddQuote from "./pages/AddQuote";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Layout>
            <main>
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
            </main>
        </Layout>
    );
}

export default App;
