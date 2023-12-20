import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../constants/colors";
const Welcome = () => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[colors.secondary, colors.primary]}
    >
      <View
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "15%",
          paddingBottom: "15%",
          paddingRight: "10%",
          paddingLeft: "10%",
        }}
      >
        <View
          style={{
            flex: 2,
            width: "100%",

            alignItems: "center",
            paddingTop: 30,
            gap: 15,
          }}
        >
          <Image
            source={require("../assets/smart-home.png")}
            style={{ width: 200, height: 200 }}
          />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 40 }}>
            Welcome to Smart Home App.
          </Text>
        </View>
        <View style={{ flex: 1, width: "100%" }}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "grey" : "white",
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={{
                height: 80,
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: 15,
                paddingRight: 30,
                paddingLeft: 30,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>LOGIN</Text>
              <Image
                source={require("../assets/arrow-right.png")}
                style={{ width: 20, height: 20 }}
              />
            </View>
          </Pressable>

          <View
            style={{
              width: "100%",
              alignItems: "center",
              paddingTop: 15,
              paddingBottom: 10,
            }}
          >
            <Text style={{ color: "white" }}>Don't have an account</Text>
          </View>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "grey" : "black",
                borderRadius: 20,
              },
            ]}
          >
            <View
              style={{
                height: 80,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: 15,
                paddingRight: 30,
                paddingLeft: 30,
              }}
            >
              <Text style={{ color: "white" }}>SIGN UP</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
