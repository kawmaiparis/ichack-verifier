import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { primaryGradientArray } from "../utils/Colors";

import Header from "../components/Header.js";
import MyButton from "../components/ListElement.js";
import { serverIP } from "../utils/Config";

class License extends React.Component {
  state = {
    licenses: []
  };

  componentDidMount() {
    this.getLicenses();
  }

  getLicenses = async () => {
    const url = `${serverIP}get-events`;
    await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === undefined) {
          this.setState({ licenses: response });
        } else {
          alert(`Error fetching Licenses.`);
        }
      })
      .catch(() => {
        alert("Error fetching Licenses.");
      });
  };

  render() {
    /* 2. Get the param, provide a fallback value if not available */
    const { navigation } = this.props;
    const username = navigation.getParam("username", "default username");
    const password = navigation.getParam("password", "default password");
    const DID = navigation.getParam("DID", "default DID");

    return (
      <LinearGradient colors={["#f0f0f0", "#f0f0f0"]} style={styles.container}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.centered}>
            <Header title="Choose your Event" />
          </View>
          {this.state.licenses.map(license => (
            <MyButton
              key={license}
              title={license}
              onPress={async next => {
                await new Promise(resolve => setTimeout(resolve, 1000));
                next();
                this.props.navigation.navigate("ReadQR", {
                  username: username,
                  password: password,
                  DID: DID,
                  license: license
                });
              }}
            />
          ))}
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centered: {
    alignItems: "center",
    width: 300,
    marginBottom: -40
  }
});

export default License;
