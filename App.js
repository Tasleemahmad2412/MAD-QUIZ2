import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraScreen from "./components/cameraScreen";
import SignUpScreen from "./components/signUpScreen";
import SignInScreen from "./components/signInScreen";
import ImageScreen from "./components/imageScreen";
import FaceDetector from "./components/objectDetectionScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    // Wrapping the entire app with the NavigationContainer component
    <NavigationContainer>
      {/* Stack Navigator for managing navigation between screens */}
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        {/* Screen for signing in */}
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "Sign In" }}
        />
        {/* Screen for signing up */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign Up" }}
        />
        {/* Screen for camera functionality */}
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{ title: "Camera" }}
        />
        {/* Screen for displaying images */}
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: "Image" }}
        />
        {/* Screen for face detection */}
        <Stack.Screen
          name="FaceDetection"
          component={FaceDetector}
          options={{ title: "Face Detection" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
