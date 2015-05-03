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
	TabBarIOS,
	NavigatorIOS
} = React;

var Contracts = require( './contracts' );

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
					<NavigatorIOS
						initialRoute={ {
							component: Contracts,
							title: 'Contracts'
						} }
						style={ styles.container }
					/>
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
		flex: 1
	}
} );

AppRegistry.registerComponent('Hitman', () => Hitman);
