
import { Pressable, StyleSheet, Text, View } from "react-native"

export const PomodoroApp = () => {
  
  return (
    <View style={{flex: 1, backgroundColor: '#BA4949', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.card} >
        <Text style={styles.timer}>25:00</Text>
        <Pressable style = {{backgroundColor: 'white', padding: 20, borderRadius: 5, alignItems: 'center'}} onPress={()=>{ return console.log('Native')}}>
          <Text style={{color: '#BA4949', fontSize: 30, fontWeight: '800'}}>START</Text>
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: "800",
    marginBottom: 40,
  },
  timer: {
    color: 'white',
    fontWeight: '900',
    fontSize: 100,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 40,
    borderRadius: 15,
  }
})