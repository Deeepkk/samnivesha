import React from "react";
import { HashRouter,Route, Switch } from "react-router-dom";

import "assets/scss/blk-design-system-react.scss?v=1.1.0";

// import Index from "pages/Index.js";
import HomePage from "pages/HomePage";
import Photos from "components/Gallery/gallery.js";
import NotFound from "components/NotFound/notFound.js";
// import Events from "components/Events/Events.js";
import Events from "components/events";

// import CA from "./components/CA/ca.js";
import Teams from "./components/Team/team";



class App extends React.Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route
						path="/"
						exact
						// front page
						// render={(props) => <Index {...props} />}
						render={(props) => <HomePage {...props} />}
					/>
					<Route
						path="/events-page"
						render={(props) => <Events {...props} />}
					/>
          <Route
						path="/Team"
						render={(props) => <Teams {...props} />}
					/>
				
										<Route
						path="/gallery"
						render={(props) => <Photos {...props} />}
					/>
					
					{/* <Route path="/ca" render={(props) => <CA {...props} />} /> */}
					<Route path="*" component={NotFound} />
					{/* <Redirect from="/" to="/components" /> */}

					{/* <Route
            path="/test-register"
            exact
            // render={(props) => <RegisterPageN {...props} />}
          /> */}
				</Switch>
			</HashRouter>
		);
	}
}
export default App;
