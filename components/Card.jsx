import * as React from 'react';
import { Button, Card, Text, View } from 'react-native-paper';

const MyComponent = ({title}) => (
    <Card style={{ marginVertical: 5, marginHorizontal: 10 }}>
        <Card.Cover style={{padding:10}} source={{ uri: title.Pic }} />
        <Card.Content>
            <Text variant="titleLarge">{title.name}</Text>
            <Text variant="bodyMedium">ราคา {title.price} บาท</Text>
        </Card.Content>
    </Card>
);

export default MyComponent;