var React = require( 'react-native' );

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
	TouchableHighlight
} = React;

var hits = [
	{
		name: 'Terry Griffin',
		price: '$10,000'
	},
	{
		name: 'Hieu Tran',
		price: '$1'
	}
];

var dataSource = new ListView.DataSource( {
	rowHasChanged: ( r1, r2 ) => r1.name !== r2.name
} );

var contracts = React.createClass( {
	getInitialState: function() {
		return {
			dataSource: dataSource.cloneWithRows( hits )
		}
	},

	pressRow: function( row ) {
		console.log( 'press' );
	},

	renderRow: function( row ) {
		return (
			<TouchableHighlight onPress={ () => this.pressRow( row ) } >
				<View style={ styles.row } >
					<Text>{ row.name }</Text>
				</View>
			</TouchableHighlight>
		);
	},

	render: function() {
		return(
			<ListView
				dataSource={ this.state.dataSource }
				renderRow={ this.renderRow }
			/>
		);
	}
} );


var styles = StyleSheet.create( {
	row: {
		flex: 1,
		padding: 10,
		backgroundColor: '#ffffff',
		borderBottomWidth: 1,
		borderColor: '#e0e0e0'
	}
} );

module.exports = contracts;
