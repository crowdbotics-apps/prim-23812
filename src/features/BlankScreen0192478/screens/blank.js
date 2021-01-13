import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <View>
      <View style={styles.View_2}>
        <View />
        <View />
      </View>
      <View style={styles.View_5}>
        <View>
          <Button
            title="Press me!"
            color="#4e68b7"
            style={styles.Button_9}
            onPress={() => this.props.navigation.navigate("BlankScreen1192479")}
          />
        </View>
        <View />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_2: { flexDirection: "row" },
  View_3: {},
  View_4: {},
  View_5: { flexDirection: "row" },
  View_6: {},
  Button_9: { height: 31, fontSize: 20, color: "#ffffff" },
  View_7: {}
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
