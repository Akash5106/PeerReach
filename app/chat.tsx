import { Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const messages = [
    { id: "1", text: "Bro where you at?", fromMe: false },
    { id: "2", text: "In hostel da", fromMe: true },
    { id: "3", text: "Pull up fast", fromMe: false },
    { id: "4", text: "Coming in 5 mins", fromMe: true },
    { id: "5", text: "Aight bet", fromMe: false },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Chat",
          headerShown: true,
        }}
      />

      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.messagesContainer}>
          {messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.fromMe ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.inputBar}>
          <Text style={styles.inputPlaceholder}>Message…</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  messagesContainer: {
    flex: 1,
    padding: 15,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  myMessage: {
    backgroundColor: "#4A90E2",
    marginLeft: "auto",
    borderBottomRightRadius: 4,
  },
  otherMessage: {
    backgroundColor: "#fff",
    marginRight: "auto",
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: "#000",
    fontSize: 15,
  },
  inputBar: {
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  inputPlaceholder: {
    color: "#888",
    fontSize: 16,
  },
});
