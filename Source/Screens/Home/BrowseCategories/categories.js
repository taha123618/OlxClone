import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const categories = [
  {
    name: 'Mobile',
    backgroundColor: 'green',
    fontSize: 40,
    icon: <Feather name="home" size={30} />,
  },
  {
    name: 'Vechicles',
    backgroundColor: 'pink',
    icon: <AntDesign name="phone" size={30} />,
  },
  {
    name: 'Property for sale', // for line break {'\n'}
    backgroundColor: '#f5f454',
    icon: <AntDesign name="windows" size={30} />,
  },
  {
    name: 'Property for Rent',
    backgroundColor: '#4565f5',
    icon: <AntDesign name="creditcard" size={30} />,
  },
  {
    name: 'Electronics & Home Appliance',
    backgroundColor: 'red',
    icon: <AntDesign name="bars" size={30} />,
  },
  {
    name: 'Bikes',
    backgroundColor: 'purple',
    icon: <AntDesign name="frown" size={30} />,
  },
  {
    name: 'Business',
    backgroundColor: 'brown',
    icon: <AntDesign name="mail" size={30} />,
  },
  {
    name: 'Services',
    backgroundColor: 'yellow',
    icon: <AntDesign name="linechart" size={30} />,
  },
  {
    name: 'Jobs',
    backgroundColor: 'yellow',
    icon: <AntDesign name="videocamera" size={30} />,
  },
  {
    name: 'Animals',
    backgroundColor: 'yellow',
    icon: <AntDesign name="setting" size={30} />,
  },
  {
    name: 'Furnuture',
    backgroundColor: 'yellow',
    fontSize: 20,
    icon: <AntDesign name="qrcode" size={30} />,
  },
  {
    name: 'Fashion & Beauty',
    backgroundColor: 'yellow',
    icon: <AntDesign name="lock" size={30} />,
  },
  {
    name: 'Books Sport & Hobbies',
    backgroundColor: 'yellow',
    icon: <AntDesign name="camerao" size={30} />,
  },
  {
    name: 'Kids',
    backgroundColor: 'red',
    icon: <AntDesign name="dingding-o" size={30} />,
  },
];

export default categories;
