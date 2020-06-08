
import React,{useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,

  Text,
  Linking
} from 'react-native';
import {Container, Content, Form, Icon, Input, Item} from 'native-base';
import Button from 'react-native-button';

import Axios from 'axios';
export default function SignUp({navigation}) {
  const [number,setNumber]=useState({
    mobile:"09376720694"
  })
  const ChangeApi=()=>{
    const Url = `https://api.moshaverchi.com/user/send-sms-for-login?mobile=${number.mobile}`;
    Axios.get(Url).then(res=>{
      console.log(res.data)
    }).then(err=>{
      throw err
    })
  }
  return (
    <Container>
      <ImageBackground style={styles.circle} source={require('./../../assets/img/red_circle_render_by_rincagamine-d67j48d.png')} alt="circleRed">
        <Icon
          style={styles.icon} name="lock"
          iconStyle={{ color: "green" }}
        />
      </ImageBackground>
      <Content>
        <Form>
          <Item>
            <Input  style={styles.name}
                    placeholder="لطفا اسم خود را واردکنید"
                    placeholderTextColor="black"
            />
          </Item>
          <Item last>
            <Input

                style={styles.mobile} placeholder="لطفا شماره تلفن خود را واردکنید"
                     placeholderTextColor="black"
            />
          </Item>
        </Form>
      </Content>
      <TouchableOpacity
          onPress={ChangeApi}
          onChange={(e)=>setNumber(e.target.value)}
          style={styles.touch}>
        <Text style={styles.login}>ثبت نام در مشاورچی</Text>

      </TouchableOpacity>
      <Text onPress={()=>navigation.navigate("login")}
              style={styles.Text}> حساب کاربری ندارید ثبت نام کنید</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:"#fff"
  },
  circle:{
    marginTop:30,
    width:200,
    marginLeft:80,
    height:200
  },


  touch:{
    marginBottom:180,
    backgroundColor: "#0c5c39",
    alignSelf:"stretch",
    padding:10,
    borderRadius:60,
    marginLeft: 20,
    marginRight: 20,
  },
  name:{
    borderWidth:1,
    marginLeft:10,
    marginRight:10,
    borderRadius: 30,
    borderColor:"#0c5c39",
    color:"#0c5c39",
    fontFamily:"Vazir",
    paddingRight:30,
    paddingLeft:30,

  },
  mobile:{
    borderRadius: 30,
    borderWidth:1,
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    borderColor:"#0c5c39",
    color:"#0c5c39",
    fontFamily:"Vazir",
    paddingRight:30,
    paddingLeft:30

  },
  login:{
    color:"#fff",
    fontSize:20,
    marginRight: 80,
    fontFamily: "Vazir"
  },
  icon:
    {
      fontSize:100,
      color:"#fff",
      marginLeft:70,
      marginTop:20,

    },
  user:{
    fontSize:20,
    color:"#fff",
    marginRight:40,
    fontFamily:"Vazir"
  },
  Text:{
    fontSize:18,
    marginBottom:20,
    top:-150,
    color:"#0c5c39",
    fontFamily:"Vazir",
    marginRight:50,
    marginLeft:50,
    padding:10
  }
});


