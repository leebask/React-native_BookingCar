import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView, Image, Modal, ActivityIndicator, StatusBar, Switch } from 'react-native';
import { Avatar, Header } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { SearchBar } from '@rneui/themed';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  twoButton: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,

  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#C6E2FF',

  },
  modal: {
    // height: '20px',
  },
  marginRightBtn: {
    marginRight: 10,
    right: 10,
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Hello {props.name}!</Text>
    </View>
  );
}

const Home = () => {
  const [count, setCount] = React.useState(5)
  const [openModal, setOpenModal] = React.useState(false)
  const [animating, setAnimating] = React.useState(true)
  const [search, setSearch] = React.useState('')


  const account = useSelector(state => state.login.account)

  const onPressAdd = () => {
    setCount(count + 1);
    console.log(count)
  }
  const onPressSubtract = () => {
    if (count > 0)
      setCount(count - 1);
  }

  const onPressOpenModal = () => {
    setOpenModal(true)
    setAnimating(true)
    setTimeout(() => {
      setAnimating(false)
    }, 2000);
  }

  const onPressCloseModal = () => {
    setOpenModal(false)
  }
  const names = [
    { 'name': 'Menu 1', 'id': 1 },
    { 'name': 'Menu 2', 'id': 2 },
    { 'name': 'Robert', 'id': 3 },
    { 'name': 'Mary', 'id': 4 },
    { 'name': 'Daniel', 'id': 5 },
    { 'name': 'Laura', 'id': 6 },
    { 'name': 'John', 'id': 7 },
    { 'name': 'Debra', 'id': 8 },
    { 'name': 'Aron', 'id': 9 },
    { 'name': 'Ann', 'id': 10 },
    { 'name': 'Steve', 'id': 11 },
    { 'name': 'Olivia', 'id': 12 }
  ]
  const updateSearch = (e) => {
    setSearch(e)
    console.log(e)
  }
  return (
    <>

      <ScrollView>
        <Text>{account.username},</Text>
        <View style={[styles.center, { top: 50 }]}>
          <Greeting name={account.username} />
          <Image source={{ uri: 'https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png' }}
            style={{ width: count * 10, height: count * 10 }}
          />
          <Text>{count}</Text>
          <View style={styles.twoButton}>
            <Button
              onPress={onPressAdd}
              title="Cộng 😘"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={onPressSubtract}
              title="Trừ 😭"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
            <Button
              onPress={onPressOpenModal}
              title="Open Ảnh 🤗"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />

          </View>

        </View>
        <View style={[{ top: 50 }]}>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <SearchBar
              placeholder="Tìm menu"
              onChangeText={e => updateSearch(e)}
              value={search}
              lightTheme={true}
            />
          </View>
          <ScrollView>
            <View>
              {
                names.filter(k => k?.name.toLowerCase().includes(String(search).toLowerCase())).map((item, index) => (
                  <View 
                  key={item.id} 
                  style={styles.item}
                  >
                    <Text onPress={() => alert('Bạn chọn: ' + item.name + '🍎')}>{(index + 1) + '.' + item.name}🍎</Text>
                  </View>
                ))
              }
            </View>
          </ScrollView>
        </View>
        <View 
        style={[{ top: 50 }]}
        >

          <Modal
            animationType={"slide"}
            transparent={false}
            visible={openModal}
          >
            <View>
              {
                !animating ?
                  <View >
                    <Image source={{ uri: 'https://cdn.haitrieu.com/wp-content/uploads/2021/11/Logo-The-Gioi-Di-Dong-MWG.png' }}
                      style={{ width: count * 10, height: count * 10 }}
                    />
                    <Text>Bạn Open Ảnh</Text>
                  </View>
                  :
                  <View
                  // style = {styles.container}
                  >
                    <ActivityIndicator
                      animating={animating}
                      color='#bc2b78'
                      size="large"
                    //  style = {styles.activityIndicator}
                    />
                  </View>
              }
              <View>
                {/* <Picker
              // selectedValue={this.state.user} onValueChange={this.updateUser}
              >
                <Picker.Item label="Steve" value="steve" />
                <Picker.Item label="Ellen" value="ellen" />
                <Picker.Item label="Maria" value="maria" />
              </Picker> */}
                <Text
                // style={styles.text}
                >
                  {/* {this.state.user} */}
                </Text>
              </View>
              <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" translucent={true} />
              <View style={styles.container}>
                <Switch
                  //  onValueChange = {props.toggleSwitch1}
                  value={true}
                />
              </View>
              <Button
                onPress={onPressCloseModal}
                title="Close 😶‍🌫️"
                color="#841584"
              />
            </View>
          </Modal>
        </View>


      </ScrollView>
    </>
  );
}

export default Home;