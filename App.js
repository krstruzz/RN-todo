// TODO: Add item persistence to save lists
// TODO: Add text input clear button

import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';

class App extends React.Component {
    state = {
        text: "",
        todo: []
    };

    addTodo = () => {
        var newTodo = this.state.text;
        var arr = this.state.todo;
        arr.push(newTodo);
        this.setState({todo: arr, text: ""});
    };

    deleteTodo = (t) => {
        var arr = this.state.todo;
        var pos = arr.indexOf(t);
        arr.splice(pos, 1);
        this.setState({todo: arr});
    };

    renderTodos = () => {
        return this.state.todo.map(t=>{
            return (
                <View key={t}>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.todoList}
                        >{t}</TextInput>
                        <Text
                            style={styles.iconStyle}
                            onPress={()=>{this.deleteTodo(t)}}
                        >&#xf057;</Text>
                    </TouchableOpacity>
                </View>
            )
        })
    };

    clearTodos = () => {
        var arr = this.state.todo;
        arr.splice(0);
        this.setState({todo: arr});
    };

    render() {
        return (
            <View style={styles.mainStyle}>
                <View style={styles.viewStyle}>
                    <Text style={styles.header}>Enter Action Item</Text>
                    <TextInput
                        style={styles.inputStyle}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}
                        placeholder={"type here..."}
                    />
                    <View style={{flexDirection: 'row', marginBottom: 20}}>
                        <TouchableNativeFeedback
                            onPress={this.addTodo}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{
                                width: 150,
                                height: 50,
                                borderRadius: 25,
                                margin: 10,
                                backgroundColor: '#607D8B',
                                alignItems: 'center',
                                elevation: 4,
                                borderColor: 'white',
                                borderWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    margin:15,
                                    color: '#FFFFFF'}}>ADD</Text>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback
                            onPress={this.clearTodos}
                            background={TouchableNativeFeedback.SelectableBackground()}>
                            <View style={{
                                width: 150,
                                height: 50,
                                borderRadius: 25,
                                margin: 10,
                                backgroundColor: '#607D8B',
                                alignItems: 'center',
                                elevation: 4,
                                borderColor: 'white',
                                borderWidth: 1
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    margin:15,
                                    color: '#FFFFFF'}}>CLEAR</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View>
                        {this.renderTodos()}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = {
    mainStyle: {
        backgroundColor: '#03A9F4',
        flex: 1
    },
    header: {
        fontWeight: 'bold',
        color: "#FFFFFF",
        fontSize: 30,
        marginBottom: 10
    },
    viewStyle: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
        fontSize: 18,
        backgroundColor: '#03A9F4'
    },
    inputStyle: {
        alignContent: 'flex-start',
        margin: 15,
        height: 40,
        width: 350,
        fontSize: 18,
        backgroundColor: "#FFFFFF",
        elevation: 4
    },
    todoList: {
        fontSize: 22,
        textAlign: 'left',
        borderWidth: 1,
        borderColor: '#607D8B',
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: 300,
        color: '#212121'
    },
    iconStyle: {
        fontFamily: 'fontawesome',
        fontSize: 40,
        margin: 10
    }
};

export default App;