import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Style from './components/styles/styles.js';

import { 

  resetGame,
  returnScreenGame, 
  verifyWinner, 
  setWinnerScreen, 
  setScreenGame, 
  returnMenu, 
  verifySimbol,
  changeToComputer,
  choose,
  robotPlay

} from  './components/scripts/scripts';

export default function App() {

  const [screen,setScreen]=useState("MenuScreen")
  const [squares,setSquares]=useState([["","",""],["","",""],["","",""]])
  const [player,setPlayer]=useState("")
  const [winnerX, setWinnerX] = useState(0)
  const [winnerO, setWinnerO] = useState(0)

  var time = false

  switch(screen){
    case "MenuScreen":
      return MenuScreen()
    case "GameScreen":
      return GameScreen()
    case "WinnerScreen":
      return WinnerScreen()
    case "ComputerDifficultScreen":
      return ComputerDifficultScreen()
    case "Choose":
      return chooseSimbol()
  }

  function onPressSquareOnGame(player = "", line = 0, column = 0){

    var nextSimbol = verifySimbol(player)

    squares[line][column] = nextSimbol[0]
    setSquares([...squares])

    if(verifyWinner(squares,player)){

      Alert.alert("Alerta de ganhador", "O jogador " + player + " ganhou")

      if(player === "X"){

        setWinnerX(winnerX + 1)

      }

      if(player === "O"){

        setWinnerO(winnerO + 1)

      }

      setSquares([...resetGame(squares)])      
      setScreen(setWinnerScreen())

    }

    setPlayer(...nextSimbol[1])

    return

  }

 

  function MenuScreen(){
    return(
      <>
        <StatusBar backgroundColor='#000' style={'inverted'} animated={true} />

        <View style={Style.container}>

          <Text style={Style.txtTitle}>Jogo da velha</Text>
          <Text style={Style.txtCred}>Desenvolvedor: Pedro Augusto</Text>
          <Text style={Style.txtChoise}>Escolha o simbolo desejado: </Text>

          <View style={Style.viewMenu}>

            <TouchableOpacity style={Style.btn} onPress={()=>{
                var aux = setScreenGame("X")

                setPlayer(aux[0])
                setScreen(aux[1])
          
              }}>
              <Text style={Style.txtBtn}>X</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.btn} onPress={()=>{
                var aux = setScreenGame("O")

                setPlayer(aux[0])
                setScreen(aux[1])
          
              }}>
              <Text style={Style.txtBtn}>O</Text>
            </TouchableOpacity>

          </View>
          
          <TouchableOpacity style={Style.btnComputer} onPress={()=>{setScreen(choose())}}>
              <Text style={Style.txtBtnComputer}>
                Jogar contra o computador
              </Text>
          </TouchableOpacity>
        
        </View>
      </>
    )
  }

  function GameScreen(){
    return(
      <>
        <StatusBar backgroundColor='#000' style={'inverted'} animated={true} />

        <View style={Style.container}>
          
          <View style={Style.auxCanvas}/>

          <View style={Style.mainCanvas}>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,0,0)}} disabled={squares[0][0]!==''}>
                <Text style={Style.txtBtn}>{squares[0][0]}</Text>                
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,0,1)}} disabled={squares[0][1]!==''}>
                <Text style={Style.txtBtn}>{squares[0][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,0,2)}} disabled={squares[0][2]!==''}>
                <Text style={Style.txtBtn}>{squares[0][2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,1,0)}} disabled={squares[1][0]!==''}>
                <Text style={Style.txtBtn}>{squares[1][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,1,1)}} disabled={squares[1][1]!==''}>
                <Text style={Style.txtBtn}>{squares[1][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,1,2)}} disabled={squares[1][2]!==''}>
                <Text style={Style.txtBtn}>{squares[1][2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,2,0)}} disabled={squares[2][0]!==''}>
                <Text style={Style.txtBtn}>{squares[2][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,2,1)}} disabled={squares[2][1]!==''}>
                <Text style={Style.txtBtn}>{squares[2][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGame(player,2,2)}} disabled={squares[2][2]!==''}>
                <Text style={Style.txtBtn}>{squares[2][2]}</Text>
              </TouchableOpacity>

          </View>

          <View style={Style.auxCanvas2}>

            <TouchableOpacity style={Style.btnMenu} onPress={()=>{returnMenu()}}>
              <Text style={Style.txtBtnMenu}>Voltar ao Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.btnMenu} onPress={()=>{setSquares([...resetGame(squares)])}}>
              <Text style={Style.txtBtnMenu}>Resetar game.</Text>
            </TouchableOpacity>

          </View>
        </View>

      </>
    )
  }

  function WinnerScreen(){
    return(
      <>
        <StatusBar backgroundColor='#000' style={'inverted'} animated={true} />

        <View style={Style.container}> 

          <Text style={Style.txtWinner}>      O Ganhador foi "{player}" desta jogada </Text>

          <View style={Style.viewQtdV}>

            <Text style={Style.txtQtdV}>Quantidade de Vitórias do "X": {winnerX}</Text>
            <Text style={Style.txtQtdV}>Quantidade de Vitórias do "O": {winnerO}</Text>

          </View>

          <View style={Style.viewBtnWinner}>

            <TouchableOpacity style={Style.btnWinner} onPress={()=>{setScreen(returnMenu())}}>
              <Text style={Style.txtBtnWinner}>
                Voltar ao Menu do jogo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.btnWinner} onPress={()=>{setScreen(returnScreenGame())}}>
              <Text style={Style.txtBtnWinner}>
                Voltar a tela do game
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </>
    )
  }

  function chooseSimbol(){
    
    return(

      <>

        <StatusBar backgroundColor='#000' style={'inverted'} animated={true}/>

        <SafeAreaView style={Style.container}>

          <TouchableOpacity style={Style.btnChoose2} onPress={()=>{
                var aux = setScreenGame("X")

                setPlayer(aux[0])
                setScreen(changeToComputer())
          
              }}>
            <Text style={Style.txtBtnChoose}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Style.btnChoose} onPress={()=>{
                var aux = setScreenGame("O")

                setPlayer(aux[0])
                setScreen(changeToComputer())
          
              }}>
            <Text style={Style.txtBtnChoose}>O</Text>
          </TouchableOpacity>

        </SafeAreaView>

      </>

    )

  }

  function onPressSquareOnGameComputer(simbol = '', board = [[""],[""]], line = 0, column = 0){
    
    if(!time){

      if(simbol === "X"){

        setSquares([...robotPlay(simbol, time, board, line, column)])

        if(verifyWinner(squares, simbol)){

          Alert.alert("Ganhador","O player " + simbol + " ganhou")

          if(player === "X"){

            setWinnerX(winnerX + 1)
    
          }
    
          if(player === "O"){
    
            setWinnerO(winnerO + 1)
    
          }
    
          setSquares([...resetGame(squares)])     

          setScreen(setWinnerScreen())
          
        }

        setPlayer(..."O")

      }else{

        setSquares([...robotPlay(simbol, time, board, line, column)])

        if(verifyWinner(squares, simbol)){

          Alert.alert("Ganhador","O player " + simbol + " ganhou")

          if(player === "X"){

            setWinnerX(winnerX + 1)
    
          }
    
          if(player === "O"){
    
            setWinnerO(winnerO + 1)
    
          }
    
          setSquares([...resetGame(squares)])     

          setScreen(setWinnerScreen())
          
        }

        setPlayer(..."X")

      }

      time = true
      return

    }else{
      
      if(simbol === "X"){

        setSquares([...robotPlay(simbol, time, board)])

        if(verifyWinner(squares, simbol)){

          Alert.alert("Ganhador","O player " + simbol + " ganhou")

          if(player === "X"){

            setWinnerX(winnerX + 1)
    
          }
    
          if(player === "O"){
    
            setWinnerO(winnerO + 1)
    
          }
    
          setSquares([...resetGame(squares)])     

          setScreen(setWinnerScreen())
          
        }

        setPlayer(..."O")

      }else{

        setSquares([...robotPlay(simbol, time, board)])

        if(verifyWinner(squares, simbol)){

          Alert.alert("Ganhador","O player " + simbol + " ganhou")

          if(player === "X"){

            setWinnerX(winnerX + 1)
    
          }
    
          if(player === "O"){
    
            setWinnerO(winnerO + 1)
    
          }
    
          setSquares([...resetGame(squares)])     

          setScreen(setWinnerScreen())
         
        }

        setPlayer(..."X")

      }

      time = false
      return
    
    }

  }

  function ComputerDifficultScreen(){

    return(

      <>
        <StatusBar backgroundColor='#000' style={'inverted'} animated={true} />

        <View style={Style.container}>
          
          <View style={Style.auxCanvas}/>

          <View style={Style.mainCanvas}>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,0,0)}} disabled={squares[0][0]!==''}>
                <Text style={Style.txtBtn}>{squares[0][0]}</Text>                
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,0,1)}} disabled={squares[0][1]!==''}>
                <Text style={Style.txtBtn}>{squares[0][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,0,2)}} disabled={squares[0][2]!==''}>
                <Text style={Style.txtBtn}>{squares[0][2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,1,0)}} disabled={squares[1][0]!==''}>
                <Text style={Style.txtBtn}>{squares[1][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,1,1)}} disabled={squares[1][1]!==''}>
                <Text style={Style.txtBtn}>{squares[1][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,1,2)}} disabled={squares[1][2]!==''}>
                <Text style={Style.txtBtn}>{squares[1][2]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,2,0)}} disabled={squares[2][0]!==''}>
                <Text style={Style.txtBtn}>{squares[2][0]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,2,1)}} disabled={squares[2][1]!==''}>
                <Text style={Style.txtBtn}>{squares[2][1]}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Style.subCanvas} onPress={()=>{onPressSquareOnGameComputer(player,squares,2,2)}} disabled={squares[2][2]!==''}>
                <Text style={Style.txtBtn}>{squares[2][2]}</Text>
              </TouchableOpacity>

          </View>

          <View style={Style.auxCanvas2}>

            <TouchableOpacity style={Style.btnMenu} onPress={()=>{returnMenu()}}>
              <Text style={Style.txtBtnMenu}>Voltar ao Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Style.btnMenu} onPress={()=>{setSquares([...resetGame(squares)])}}>
              <Text style={Style.txtBtnMenu}>Resetar game.</Text>
            </TouchableOpacity>

          </View>
        </View>

      </>

    )

  }

}