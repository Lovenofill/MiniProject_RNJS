import {
  StyleSheet,
  View,
  Modal,
  Text,
  Button,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Card, TextInput } from "react-native-paper";
import React from "react";
import imageBG from "../assets/v748-toon-111.jpg";
import Incard from "../components/Card";
export default function Detail({ data, visible, onCancel }) {
  console.log(data);
  return (
    <SafeAreaView>
      <Modal animationType="slide" visible={visible}>
        <ImageBackground
          source={imageBG}
          resizeMode="cover"
          style={styles.image}
        >
          <ScrollView>
            <View style={{ margin: 10 }}>
              <Incard title={data} />
              <Card style={{ marginVertical: 5, marginHorizontal: 10 }}>
                <Card.Content>
                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ textAlign: "center" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sequi praesentium aspernatur repudiandae, sapiente ut
                      temporibus? Quis eius error quo obcaecati libero possimus
                      numquam ea recusandae cum, quia est incidunt molestias!
                    </Text>
                  </View>
                </Card.Content>
                <View style={{ width: "100%", padding: 10 }}>
                  <Button title="Close Details" onPress={onCancel} />
                </View>
              </Card>
            </View>
          </ScrollView>
        </ImageBackground>
      </Modal>
    </SafeAreaView>
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
  },
});
