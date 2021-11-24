import React, { useState } from "react";

import Screen from "./app/components/Screen";
import AppPicker from "./app/components/AppPicker";

import { Button, View } from "react-native";
import AppText from "./app/components/AppText";

const categories1 = [
  { label: "মগবাজার", value: 1 },
  { label: "বনানী", value: 2 },
  { label: "ধানমন্ডী", value: 3 },
];

const categories2 = [
  { label: "মগবাজার", value: 1 },
  { label: "বনানী", value: 2 },
  { label: "ধানমন্ডী", value: 3 },
];

export default function App() {
  const [category1, setCategory1] = useState('categories1[0]');

  const [category2, setCategory2] = useState('categories2[0]');

  return (
    <Screen>
      <View style={{
        width:'50%',
        alignItems:'center',
        left:'25%',
    }}>
        <AppText> From </AppText>
        <AppPicker
          selectedItem={category1}
          onSelectItem={(item) => setCategory1(item)}
          items={categories1}
          icon="apps"
          placeholder="Category"
        />
        <AppText> To </AppText>
        <AppPicker
          selectedItem={category2}
          onSelectItem={(item) => setCategory2(item)}
          items={categories2}
          icon="apps"
          placeholder="Category"
        />
        <Button title={'Go'}/>
      </View>
    </Screen>
  );
}
