import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const SecondApp = ({ taskCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ToDoApp ReactNative</Text>
      <Image source={require('./assets/Curry.png')} style={styles.imagen} />
      <Text style={styles.countText}>Count: {taskCount}</Text>
    </View>
  );
};

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  useEffect(() => {
    // Actualiza el estado del componente SecondApp cuando cambian las tareas
    const taskCount = tasks.length;
    // Lógica adicional que puedes agregar según tus necesidades

  }, [tasks]);

  return (
    <View style={styles.container}>
      {/* Contenedor de la imagen */}
      <View style={styles.imageContainer}>
        {/* Puedes agregar tu componente de imagen aquí */}
        <SecondApp taskCount={tasks.length} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la tarea"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTask}>
          <Text style={styles.addButtonText}>Agregar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteTask(item.id)}
            >
              <Text style={styles.deleteButtonText}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  // Nuevo estilo para el contenedor de la imagen
  imageContainer: {
    height: '50%', // Ocupa la mitad de la pantalla
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'purple',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  taskText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'black',
    borderRadius: 5,
    padding: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  
  text: {
    fontSize: 24,
    color: 'purple',
    marginTop: 20,  
  },
  imagen: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 10,  
  },
  
  countText: {
    fontSize: 18,
    color: 'purple',
    marginTop: 10,
  },
});

export default App;
