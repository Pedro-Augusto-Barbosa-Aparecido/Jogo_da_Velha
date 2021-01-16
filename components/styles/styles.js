import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#85698f',
        alignItems: 'center',
        
    },

    mainCanvas: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#333',
        borderWidth: 3,
        borderColor: '#333',
        borderRadius: 8,
        width: 350,
        height: 350,
        padding: 5,
    },

    subCanvas:{
        backgroundColor: "white",
        width:105.5,
        height: 110.9,
        borderWidth:2,
        borderColor: '#fff',
        borderRadius:8,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    auxCanvas: {
        height:96
    },

    auxCanvas2: {
        height:177,
        justifyContent: 'center',
        alignContent: 'center'
    },

    fontBtn: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
        fontStyle: 'italic',
    },

    txtTitle: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#444',
        includeFontPadding: true,
        marginTop: 25
    },

    txtCred: {
        fontSize: 30,
        fontWeight: '700',
        color: '#000',
        marginTop: 50,
        marginHorizontal: 1
    },

    txtChoise: {
        fontSize: 20,
        fontWeight: '400',
        color: '#111',
        marginHorizontal: 5,
        marginTop: 150
    },

    txtBtn: {
        fontSize: 50,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#000',
    },

    btn: {
        width: 100,
        height: 100,
        margin: 5,
        padding: 4,
        backgroundColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#999',
        borderRadius: 10
    },

    viewMenu: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 100,
        maxWidth: 300,
        justifyContent: 'space-around',
        justifyContent: 'space-between',
    },

    btnMenu: {
        backgroundColor: '#557800',
        width: 150,
        height: 30,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderColor: '#333',
        borderWidth: 2,
        borderRadius: 10,
        borderStyle: 'solid'
    },

    txtBtnMenu: {
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#222',
    },

    txtWinner: {
        color: '#111',
        fontSize: 40,
        marginTop: 20,
        marginHorizontal: 3,
        fontWeight: '900',
        fontStyle: 'italic',
        includeFontPadding: true,
    },

    viewQtdV:{
        borderColor: '#000',
        borderWidth: 5,
        borderRadius: 2,
        minHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 100,
        maxHeight: 100,
        maxWidth: 500,
        backgroundColor: '#f0f',
        padding: 5,
        margin:10,
    },

    txtQtdV: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#0ff',
        includeFontPadding: true,
        margin: 2
    },

    viewBtnWinner: {
        marginTop: 320,
        width: 350,
        maxHeight: 500,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-around',
    },

    btnWinner: {
        maxWidth: 210,
        maxHeight: 100,
        backgroundColor: '#d6f',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'dashed',
        flex: 1,
        flexWrap: 'wrap'
    },

    txtBtnWinner: {
        fontSize: 25,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#003'
    },

    btnComputer: {
        backgroundColor: '#999',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#aaa',
        borderStyle: 'dashed',
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 10,
        maxHeight: 100,
        maxWidth: 500,
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around'
    },

    txtBtnComputer: {
        fontSize: 20,
        fontStyle:'italic',
        fontWeight: 'bold',
        color: '#05f',
        includeFontPadding: true,
        padding: 5,
        margin: 2
    },

    btnChoose: {
        backgroundColor: '#666',
        width: 360,
        height: 310,
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnChoose2: {
        backgroundColor: '#666',
        marginTop: 23,
        width: 360,
        height: 310,
        alignItems: 'center',
        justifyContent: 'center'
    },

    txtBtnChoose: {
        fontSize: 150
    },

})