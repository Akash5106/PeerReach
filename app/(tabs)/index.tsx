import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const chats = [
    { id: "1", name: "Kanye", lastMsg: "Come back nigga", photo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Mountain_Goat%2C_Enchantments_Basin.jpg" },
    { id: "2", name: "Pavan", lastMsg: "Book goa tickets", photo: "https://i.pravatar.cc/400?img=6" },
    { id: "3", name: "Vasu", lastMsg: "pull up RR", photo: "https://i.pravatar.cc/400?img=50" },
    { id: "4", name: "Frank", lastMsg: "Drop some music already", photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/08/21/09/blond-frank-ocean.jpg?width=1200&height=900&fit=crop" },
    { id: "5", name: "Manoj", lastMsg: "Check WhatsApp da", photo: "https://i.pravatar.cc/400?img=46" },
    { id: "6", name: "Shreyas", lastMsg: "On the way", photo: "https://i.pravatar.cc/400?img=22" },
    { id: "7", name: "Rohit", lastMsg: "Call me asap", photo: "https://i.pravatar.cc/400?img=15" },
    { id: "8", name: "Sanjay", lastMsg: "Pull up RR", photo: "https://i.pravatar.cc/400?img=7" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Chats</Text>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.chatCard,
              pressed && { opacity: 0.7 },
            ]}
            onPress={() => router.push("/chat")}
          >
            <Image source={{ uri: item.photo }} style={styles.avatar} />

            <View style={styles.textContainer}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMsg}>{item.lastMsg}</Text>
            </View>
          </Pressable>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F3F5",
    paddingHorizontal: 18,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#222",
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 18,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 999,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  textContainer: {
    flex: 1,
  },
  chatName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  chatMsg: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
