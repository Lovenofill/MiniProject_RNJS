import {
  Image,
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
  ImageBackground,
  TextInput,
  Alert,
} from "react-native";
import { Card } from "react-native-paper";
import React, { useState } from "react";
import imageBG from "../assets/v748-toon-111.jpg";

export default function Login({ visible, onCancel }) {
  return (
    <Modal animationType="slide" visible={visible}>
      <ImageBackground source={imageBG} resizeMode="cover" style={styles.image}>
        <View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              สมัครสมาชิก
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
            }}
          >
            <Image
              style={{ width: 150, height: 150 }}
              source={require("../assets/Charactor-11.png")}
            />
          </View>
          <Card style={{ margin: 15 }}>
            <Card.Content>
            <View style={styles.textInput}>
                <TextInput
                  placeholder="ชื่อผู้ใช้"
                  style={{ borderBottomWidth: 1 }}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="อีเมล"
                  style={{ borderBottomWidth: 1 }}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="รหัสผ่าน"
                  style={{ borderBottomWidth: 1 }}
                />
              </View>
              <View style={styles.textInput}>
                <TextInput
                  placeholder="ยืนยันรหัสผ่าน"
                  style={{ borderBottomWidth: 1 }}
                />
              </View>
            </Card.Content>
          </Card>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="สมัครสมาชิก"
                onPress={() =>
                  Alert.alert("สมัครสมาชิก", "สมัครไม่ได้หรอก")
                }
              />
            </View>
            <View style={styles.button}>
              <Button title="ยกเลิก" onPress={onCancel} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    padding: 20,
  },
  textInput: {
    paddingBottom: 5,
  },
  buttonContainer: {
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: "45%",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
