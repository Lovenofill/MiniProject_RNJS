import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import Appbar from "./Appbar";
import InCard from "./Card";
import Demo from "./Data/Demo";
import Detail from "./Detail";
export default function Products() {
  function Item({ title }) {
    function start() {
      setmodalDetail(true);
    }

    function end() {
      setmodalDetail(false);
    }
    const [modalDetail, setmodalDetail] = useState(false);
    return (
      <>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Pressable onPress={start}>
            <InCard title={title} />
          </Pressable>
        </View>
        {modalDetail && (
          <Detail visible={modalDetail} data={title} onCancel={end} />
        )}
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Appbar title={"รายการสินค้า"} />
        <FlatList
          data={Demo.Product}
          renderItem={(item) => <Item title={item.item} />}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
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

{
  /* <Card style={{ margin: 5 }}>
<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
<Card.Content>
    <Text variant="titleLarge">{title}</Text>
    <Text variant="bodyMedium">Card content</Text>
</Card.Content>
<View>
    <Card.Actions >
        <Button onPress={Width}>Detail</Button>
    </Card.Actions>
</View>
</Card> */
}
