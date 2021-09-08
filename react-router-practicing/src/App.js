import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import AddQuote from "./pages/AddQuote";

function App() {
    return (
        <Layout>
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/quotes" />
                    </Route>
                    <Route path="/quotes" exact>
						<AllQuotes />
					</Route>
					<Route path="/quotes/:quoteID" exact>
						<QuoteDetail />
					</Route>

					<Route path="/new-quote" exact>
						<AddQuote />
					</Route>
                </Switch>
            </main>
        </Layout>
    );
}

export default App;
