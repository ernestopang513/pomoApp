
import { useEffect, useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export const PomodoroApp = () => {

  const [time, setTime] = useState(60*25);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null;
    
    if (isRunning && time > 0 ) {

      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0))
      }, 1000)
    } 

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isRunning, time])
  
  
  return (
    <View style={{flex: 1, backgroundColor: '#BA4949', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.title}>Pomodoro</Text>
      <View style={styles.card} >
        <Text style={styles.timer}>{Math.floor(time/60)}:{String(time%60).padStart(2, '0')}</Text>
        <Pressable 
          style = {{backgroundColor: 'white', padding: 20, borderRadius: 5, alignItems: 'center'}} 
          onPress={()=>{ setIsRunning(!isRunning)}}
        >
          <Text style={{color: '#BA4949', fontSize: 30, fontWeight: '800'}}>{isRunning? "PAUSE" : 'START'}</Text>
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