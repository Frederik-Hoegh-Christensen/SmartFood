import { Button, Text, View } from "react-native";


export const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        Profile Screen
        Preferences such as allergies, dislike of coriander and stuff should be set in here
      </Text>
      <Button 
        title="Go to homescreen"
        onPress={() => navigation.navigate('Home')}>
      </Button>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}>
      </Button>
    </View>
  );
};


