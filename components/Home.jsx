import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import React, { useState } from "react";
import Appbar from "./Appbar";
import { Button, Banner, Card } from "react-native-paper";
import AutoCarousel from "./Carousel";
export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Appbar title={"หน้าหลัก"} />
        <Banner
          visible={visible}
          actions={[
            {
              label: "ฮั่นแน่",
              onPress: () => setVisible(false),
            },
            {
              label: "ปิด",
              onPress: () => setVisible(false),
            },
          ]}
          icon={({ size }) => (
            <Image
              source={{
                uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4",
              }}
              style={{
                width: size,
                height: size,
              }}
            />
          )}
        >
          นี้คือ แบนเนอร์ จาก เปเปอร์เฟี้ยวๆเลย
        </Banner>
        <View style={{ marginTop: 10 }}>
          <AutoCarousel />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: 10,
          }}
        >
          <View style={{ width: "90%" }}>
            <Button mode="contained" onPress={() => setVisible(true)}>
              Banner
            </Button>
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <Card>
            <Card.Title title=" MiniProject Font-End From Nawapol M" />
            <Card.Content>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  style={{
                    width: 100,
                    height: 150,
                    backgroundColor: "pink",
                  }}
                  source={require("../assets/278936731_2264708170344899_4655358977417897161_n.jpg")}
                />
                <Card style={{ marginLeft: 10, maxWidth: 240 }}>
                  <Card.Content>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Numquam pariatur nostrum voluptatum assumenda harum iusto
                      similique aperiam rerum quis iure. Enim provident saepe
                      nulla quidem. Quam quas laudantium a nisi?
                    </Text>
                  </Card.Content>
                </Card>
              </View>
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
    backgroundColor: "#F3EFE0",
  },
});
