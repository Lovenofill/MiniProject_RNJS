// import * as React from 'react';
// export default MyComponent;
import { Appbar, Modal, Portal, Searchbar, Card } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Appbarname({ title }) {
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} style={{}}>
                    <View style={{ marginHorizontal: 20, paddingBottom: 100 }}>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                        />
                    </View>
                </Modal>
            </Portal>
            <View style={{ backgroundColor: "#22A39F" }}>
                <Appbar.Header >
                    <Appbar.Content title={title} subtitle={'Subtitle'} />
                    <Appbar.Action icon="magnify" onPress={showModal} />
                </Appbar.Header>
            </View>
        </View>
    )
}