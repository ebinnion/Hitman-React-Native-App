var React = require( 'react-native' );

var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableHighlight
} = React;

var addContract = React.createClass( {
	saveContract: function() {
		this.props.navigator.pop();
	},

	render: function() {
		return(
			<View style={ styles.container } >
				<View style={ styles.inputGroup }>
					<Text style={ styles.label }>Name</Text>
					<TextInput
						autoFocus={ true }
						style={ styles.textInput }
						placeholder='John Doe'
						onChange={ ( text ) => { this.setState( { name: text } ) } }
					/>
				</View>

				<View style={ styles.inputGroup } >
					<Text style={ styles.label }>Contract Award</Text>
					<TextInput
						autoFocus={ true }
						style={ styles.textInput }
						placeholder='$1,000'
						onChange={ ( text ) => { this.setState( { award: text } ) } }
					/>
				</View>

				<View style={ styles.inputGroup }>
					<TouchableHighlight onPress={ this.saveContract } style={ { borderRadius: 6 } }>
						<View style={ styles.button }>
							<Text style={ styles.buttonText }>Save Contract</Text>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
} );


var styles = StyleSheet.create( {
	container: {
		flex: 1,
		marginTop: 70,
		padding: 10
	},
	textInput: {
		height: 40,
		padding: 4,
		borderColor: '#cccccc',
		borderWidth: 1,
		borderRadius: 6
	},
	inputGroup: {
		marginBottom: 10
	},
	label: {
		color: '#333333',
		marginBottom: 4
	},
	button: {
		backgroundColor: '#333333',
		borderRadius: 6,
		padding: 10
	},
	buttonText: {
		color: '#ffffff'
	}
} );

module.exports = addContract;
