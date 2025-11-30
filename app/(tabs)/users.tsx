import { useRouter } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function UsersScreen() {
  const router = useRouter();

  // Dummy nearby users
  const users = [
    { id: "1", name: "Akash", status: "20m away", photo: "https://i.pravatar.cc/400?img=11" },
    { id: "2", name: "Pavan", status: "5m away", photo: "https://i.pravatar.cc/400?img=6" },
    { id: "3", name: "Manoj", status: "10m away", photo: "https://i.pravatar.cc/400?img=46https://i.pravatar.cc/400?img=50" },
    { id: "4", name: "Shreyas", status: "2m away", photo: "https://i.pravatar.cc/400?img=22" },
    { id: "5", name: "Vasu", status: "15m away", photo: "https://i.pravatar.cc/400?img=50" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.userCard,
              pressed && { opacity: 0.7 },
            ]}
            onPress={() => router.push("/chat")}
          >
            <Image source={{ uri: item.photo }} style={styles.avatar} />

            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#F2F3F5",
    flex: 1,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },

  userCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 12,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 100,
    marginRight: 15,
  },

  userName: {
    fontSize: 17,
    fontWeight: "600",
  },

  userStatus: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
  },
});
