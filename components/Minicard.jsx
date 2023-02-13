import { View, Text, Image } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
export default function Minicard({ title }) {
  return (
    <View style={{ flex: 1, flexDirection: "column", paddingBottom: 10 }}>
      <View>
        <Card>
          <Card.Content>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text variant="titleLarge">
                {title.name} {"\n"}
                ราคา {title.price} บาท {"\n"}
                จำนวน {title.Amount} ชิ้น
              </Text>

              <Image
                style={{
                  width: 50,
                  height: 150,
                  borderRadius: 20,
                  flex: 1,
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  borderWidth: 5,
                  borderColor: "pink",
                }}
                source={{ uri: title.Pic }}
              />
            </View>
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}
