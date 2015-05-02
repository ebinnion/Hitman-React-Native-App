/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require( 'react-native' );
var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TabBarIOS
} = React;

var Hitman = React.createClass( {
	getInitialState: function() {
		return {
			selectedTab: 'list'
		};
	},

	render: function() {
		return (
			<TabBarIOS>
				<TabBarIOS.Item
					title="Contracts"
					selected={ 'list' === this.state.selectedTab }
					onPress={ () => { this.setState( {
						selectedTab: 'list'
					} ) } }
				>
					<View><Text>List Tab</Text></View>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title="Stats"
					selected={ 'stats' === this.state.selectedTab }
					onPress={ () => { this.setState( {
						selectedTab: 'stats'
					} ) } }
				>
					<View><Text>Stats tab</Text></View>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
} );

var styles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
} );

AppRegistry.registerComponent('Hitman', () => Hitman);
