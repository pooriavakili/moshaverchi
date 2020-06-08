import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Text, TextInput,

} from 'react-native';
import {addData} from '../component/store/Action';
import {Container, Content, Form, Input, Item, Icon} from 'native-base';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

export default function Login({navigation,props}) {
  const [number, setNumber] = useState({
    mobile: '09376720694',
    verify: 0,
    code: '',
  });
  useSelector(state => {
    code:state.homepage.data;
  });
  useDispatch((dispatch) => {
    return {
      addData: data => dispatch(addData((data))),
    };
  });
  const ChangeApi = (e) => {
    const Url = `https://api.moshaverchi.com/user/send-sms-for-login?mobile=${number.mobile}`;
    axios.get(Url).then(({data}) => {
      addData(data);

      if (data.status == 1) {
        setNumber(prevState => ({
          ...prevState,
          verify: 1,


        }));
      }
      //inja msg ro alart kon
    }).then(err => {
      throw err;
    });
  };

  const sendVerifyCode = (e) => {
    // inja bayad code ro ke karbar gozashte
  };

    return (

      <Container>
        <ImageBackground style={styles.circle}
                         source={require('./../../assets/img/red_circle_render_by_rincagamine-d67j48d.png')}
                         alt="circleRed">
          <Icon style={styles.icon} name='person'/>
        </ImageBackground>
        <Content>
          <Form>

            {

              number.verify === 0 ?

                <>


                  <Item last>
                    <Input onChange={(e) =>
                      setNumber(prevState => ({
                        ...prevState,
                        mobile: e.target.value,
                      }))}
                           style={styles.mobile}
                           placeholder="لطفا شماره تلفن خود را واردکنید"/>
                  </Item>
                  <TouchableOpacity
                    onPress={ChangeApi}
                    style={styles.touch}
                  >
                    <Text style={styles.login}>ثبت نام </Text>
                  </TouchableOpacity>
                </>

                :

                <>

                  <Item last>
                    <Input onChange={(e) =>
                      setNumber(prevState => ({
                        ...prevState,
                        code: e.target.value,
                      }))}
                           style={styles.Werify}
                           placeholder="کد امنیتی را وارد کنید">

                    </Input>
                  </Item>
                  <TouchableOpacity
                    onPress={sendVerifyCode}
                    style={styles.Confirmation}>
                    <Text style={styles.codeNumber}>


                      تایید کد </Text>
                  </TouchableOpacity>
                </>


            }


          </Form>
        </Content>


        <Text
          onPress={() => navigation.navigate('signup')}
          style={styles.Text}>حساب کاربری دارید؟وارد شوید</Text>
      </Container>

    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  circle: {
    marginTop: 30,
    width: 200,
    marginLeft: 80,
    height: 200,
  },


  touch: {
    borderRadius: 50,
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#0c5c39',
    alignSelf: 'stretch',
    padding: 10,

  },
  mobile: {
    borderRadius: 30,
    borderWidth: 1,
    marginTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
    marginLeft: 10,
    marginRight: 10,
    borderColor: '#0c5c39',
    color: '#0c5c39',
    fontFamily: 'Vazir',

  },
  login: {
    color: '#fff',
    fontSize: 20,
    marginRight: 140,
    fontFamily: 'Vazir',


  },
  icon:
    {
      fontSize: 100,
      color: '#fff',
      marginLeft: 65,
      marginTop: 20,

    },
  touchOne: {

    marginBottom: 50,
    backgroundColor: '#0c5c39',
    padding: 10,
    borderRadius: 60,
    top: -160,
    marginRight: 10,
    marginLeft: 10,
  },
  user: {
    fontSize: 20,
    color: '#fff',
    marginRight: 40,
    fontFamily: 'Vazir',
  },
  Text: {

    top: -230,
    marginRight: 60,

    fontSize: 20,
    color: '#0c5c39',
    fontFamily: 'Vazir',
  },
  security: {
    marginTop: 20,
  },
  Confirmation: {},
  codeNumber: {},
  Werify: {},
});


