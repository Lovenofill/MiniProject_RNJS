import {
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
  Switch,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Appbar from "./Appbar";
import { List, Card, Avatar } from "react-native-paper";
import Login from "./Login";
import Register from "./Register";

export default function Account() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalRegister, modalsetRegister] = useState(false);
  function start() {
    setModalVisible(true);
  }
  function startRegister() {
    modalsetRegister(true);
  }
  function end() {
    setIsEnabled((previousState) => !previousState);
    setModalVisible(false);
  }
  function endRegister() {
    modalsetRegister(false);
  }
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Appbar title={"บัญชีของฉัน"} />
        <View style={{ padding: 10 }}>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Card>
            <Card.Content>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                  <Avatar.Image
                    size={80}
                    source={require("../assets/IMG_3581.jpg")}
                  />
                </View>
                <View
                  style={{ flex: 3, justifyContent: "center", paddingLeft: 10 }}
                >
                  <Text style={{ fontSize: 30 }}>
                    {isEnabled ? "Nawapol" : "กรุณาเข้าสู่ระบบ"}
                  </Text>
                  <Text style={{ fontSize: 20 }}>
                    {isEnabled ? "Gold Member" : "ก่อนใช้งาน"}
                  </Text>
                </View>
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          {isEnabled && (
            <>
              <List.Section title="การตั้งค่า">
                <List.Accordion
                  title="บัญชี"
                  left={(props) => <List.Icon {...props} icon="folder" />}
                >
                  <List.Item
                    title="ความเป็นส่วนตัว"
                    left={(props) => <List.Icon {...props} icon="account" />}
                  />
                  <List.Item
                    title="การแจ้งเตือน"
                    left={(props) => (
                      <List.Icon {...props} icon="notification-clear-all" />
                    )}
                  />
                </List.Accordion>
              </List.Section>
            </>
          )}
          <Card>
            <Card.Content>
              {isEnabled ? (
                <>
                  <View style={{ paddingVertical: 5 }}>
                    <Button title="ออกจากระบบ" onPress={toggleSwitch} />
                    {modalVisible && (
                      <Login visible={modalVisible} onCancel={end} />
                    )}
                  </View>
                </>
              ) : (
                <>
                  <View style={{ paddingVertical: 5 }}>
                    <Button title="เข้าสู่ระบบ" onPress={start} />
                    {modalVisible && (
                      <Login visible={modalVisible} onCancel={end} />
                    )}
                  </View>
                  <View style={{ paddingVertical: 5 }}>
                    <Button title="สมัครสมาชิก" onPress={startRegister} />
                    {Register && (
                      <Register
                        visible={modalRegister}
                        onCancel={endRegister}
                      />
                    )}
                  </View>
                </>
              )}
            </Card.Content>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "#EEE9DA",
  },
});
