import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Appbar from "./Appbar";
import { Button, Banner, Card } from "react-native-paper";
import AutoCarousel from "./Carousel";
import InCard from "./Card";
import Minicard from "./Minicard";
import Data from "../components/Data/Demo";
export default function Cart() {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  console.log(Data);
  function Item({ title }) {
    return (
      <>
        <Minicard title={title} />
      </>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Appbar title={"ตะกร้า"} />
        <View style={{ margin: 10 }}>
          <Card style={{ marginBottom: 4 }}>
            <Card.Content>
              <FlatList
                data={Data.Product}
                renderItem={(item) => <Item title={item.item} />}
                horizontal={false}
                keyExtractor={(item, index) => index}
              />
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
