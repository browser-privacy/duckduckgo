import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { List, ListItem } from 'react-native-elements';
import CustomSearchBar from '../components/customSearchBar';
import { connect } from 'react-redux';
import * as actions from '../actions';


class SettingsScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor, focused }) => (
              <FontAwesome
                  name={'cog'}
                  size={24}
                  color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
                />

          ),
    });

    onChangeQuackOnRefresh = () => {
        if (this.props.quack_on_refresh) {
            this.props.changeQuackOnRefreshSetting(false)
        } else {
            this.props.changeQuackOnRefreshSetting(true)
        }
    }

  onChangeAutoComplete = () => {
      if (this.props.autocomplete) {
          this.props.changeAutocompleteSetting(false)
      } else {
          this.props.changeAutocompleteSetting(true)
      }
  }

  onChangeSaveRecents = () => {
      if (this.props.save_recent) {
          this.props.changeSaveRecentSetting(false)
      } else {
          this.props.changeSaveRecentSetting(true)
      }
  }

  render() {
    return (
      <View style={styles.settigsGreyBackground}>
        <CustomSearchBar />
          <ScrollView style={{ marginBottom: 42, paddingBottom: 10 }}>
            <InfoText
                text="General"
            / >
            <List>
                <ListItem
                    title='Home'
                    rightTitle="Stories (Default)"
                />
            </List>
            <InfoText
                text="Stories"
            / >
            <List>
                <ListItem
                    title='Sources'
                />
                <ListItem
                    title='Readability'
                />
                <ListItem
                    title='Quack on Refresh'
                    switchButton={true}
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.quack_on_refresh}
                    onSwitch={this.onChangeQuackOnRefresh}
                />
            </List>
            <InfoText
                text="Search"
            / >
            <List>
                <ListItem
                    switchButton={true}
                    title='Autocomplete'
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.autocomplete}
                    onSwitch={this.onChangeAutoComplete}
                />
                <ListItem
                    title='Region'
                    rightTitle="None (Default)"
                />
            </List>
            <InfoText
                text="Privacy"
            / >
            <List>
                <ListItem
                    switchButton={true}
                    title='Save Recents'
                    hideChevron
                    switchOnTintColor={Colors.tintColor}
                    switched={this.props.save_recent}
                    onSwitch={this.onChangeSaveRecents}
                />
                <ListItem
                    title='Clear Recents'
                    hideChevron
                />
            </List>
            <InfoText
                text="Other"
            / >
            <List>
                <ListItem
                    title='Send Feedback'
                />
                <ListItem
                    title='Share'
                />
                <ListItem
                    title='Leave a Rating'
                />
            </List>
            <InfoText
                text="Version 0.1.1"
            / >
        </ScrollView>
      </View>

    );
  }
}


class InfoText extends Component {
    render() {
        return (
            <Text
                style={styles.infoTextStyle}
            >
            {this.props.text}
            </Text>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reduceHeight: {
      height: 5,
  },
  infoTextStyle: {
      paddingTop: 10,
      marginLeft: 20,
      color: "black",
      opacity: .7,
  },
  settigsGreyBackground: {
      backgroundColor: 'rgba(247, 247, 247, 1)'
  }
});


const mapStateToProps = (state) => {
	return {
		autocomplete: state.LoadSettings.autocomplete,
        quack_on_refresh: state.LoadSettings.quack_on_refresh,
        save_recent: state.LoadSettings.save_recent
	};
}


export default connect(mapStateToProps, actions)(SettingsScreen);
