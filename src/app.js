import React from 'react';
import ReactDOM from 'react-dom';
import { RedocStandalone } from 'redoc';

//css
import './styles/styles.scss';

class Jsx extends React.Component {
	render() {
		return (
			<RedocStandalone
				options={{
					nativeScrollbars: true,
					theme: {
						colors: {
							primary: {
								main: '#1B75BB'
							}
						},
						logo: {
							gutter: '30px',
						},
						typography: {
							fontSize: '14px',
							lineHeight: '1.5em',
							fontWeightRegular: '400',
							fontWeightBold: '600',
							fontWeightLight: '300',
							fontFamily: 'Montserrat, sans-serif',
							smoothing: 'antialiased',
							optimizeSpeed: true,
							headings: {
							  fontFamily: 'Montserrat, sans-serif',
							  fontWeight: '400',
							  lineHeight: '1.6em',
							},
							code: {
								fontSize: '13px',
								fontFamily: 'JetBrainsMono, monospace',
							}
						}
					},
				}}
				spec={
					'https://petstore.swagger.io/v2/swagger.yaml'
				}
			/>
		)
	}
}


ReactDOM.render(<Jsx />, document.getElementById('app'));