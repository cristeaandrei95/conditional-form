import { h, Component } from 'preact';
import { Route, Switch } from 'react-router-dom'
import style from './style'
import OfferEn from './offer_en';

export default class Routes extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
                         <Switch>
                          <Route path="/" component={OfferEn} />
                         </Switch>
			</div>
		);
	}
}
