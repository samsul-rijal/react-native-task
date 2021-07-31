import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { textAlign } from "styled-system";

export default function Calculator() {
  const [resultText, setResultText] = useState("");
  const [calculationText, setCalculationText] = useState("");

  const onButtonClick = (text) => {
    console.log(text);
    if (text == "=") {
      return calculation();
    }
    setResultText(resultText + text);
  };

  const calculation = () => {
    setCalculationText(eval(resultText));
  };

  const onOperationClick = (text) => {
    let operations = ["DEL", "AC", "+", "-", "*", "/"];

    if (text == "AC") {
      setResultText("");
      setCalculationText(0);
      return;
    }

    if (text == "DEL") {
      return setResultText(
        resultText.toString().substring(0, resultText.length - 1)
      );
    }

    console.log(text);

    if (operations.includes(resultText.toString().split("").pop())) return;

    setResultText(resultText + text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Calculator App</Text>
      <View style={styles.result}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>

      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{calculationText}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.operationDel}>
            <TouchableOpacity
              onPress={() => {
                onOperationClick("DEL");
              }}
            >
              <Text style={styles.operationButtonsDel}>DEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onOperationClick("AC");
              }}
            >
              <Text style={styles.operationButtonsAc}>AC</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(1);
              }}
            >
              <Text style={styles.number}>1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(2);
              }}
            >
              <Text style={styles.number}>2</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(3);
              }}
            >
              <Text style={styles.number}>3</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(4);
              }}
            >
              <Text style={styles.number}>4</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(5);
              }}
            >
              <Text style={styles.number}>5</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(6);
              }}
            >
              <Text style={styles.number}>6</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(7);
              }}
            >
              <Text style={styles.number}>7</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(8);
              }}
            >
              <Text style={styles.number}>8</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(9);
              }}
            >
              <Text style={styles.number}>9</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => {
                onButtonClick(".");
              }}
            >
              <Text style={styles.number}> .</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick(0);
              }}
            >
              <Text style={styles.number}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                onButtonClick("=");
              }}
            >
              <Text style={styles.number}>=</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.operations}>
          <TouchableOpacity
            onPress={() => {
              onOperationClick("+");
            }}
          >
            <Text style={styles.operationButtons}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onOperationClick("-");
            }}
          >
            <Text style={styles.operationButtons}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onOperationClick("/");
            }}
          >
            <Text style={styles.operationButtons}>/</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onOperationClick("*");
            }}
          >
            <Text style={styles.operationButtons}>*</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onOperationClick("%");
            }}
          >
            <Text style={styles.operationButtons}>%</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff471a",
  },
  result: {
    backgroundColor: "#ff704d",
    flex: 4,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
    paddingBottom: 20,
  },
  calculation: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
  },
  buttons: {
    flex: 12,
    flexDirection: "row",
  },
  numbers: {
    backgroundColor: "#ff704d",
    flex: 3,
    // backgroundColor: "blue",
    paddingBottom: 20,
  },
  operations: {
    backgroundColor: "#ff704d",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 15,
  },
  resultText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    marginTop: 80,
  },
  calculationText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  row: {
    flexDirection: "row",
    flex: 5,
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  number: {
    color: "white",
    fontSize: 30,
    backgroundColor: "#e62e00",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: -20,
    // height: 70,
  },
  operationButtons: {
    color: "white",
    fontSize: 30,
    marginTop: 35,
    backgroundColor: "#cc0000",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 10,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingBottom: 15,
    paddingLeft: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  operationDel: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 17,
    // marginBottom: -20,
  },
  operationButtonsDel: {
    color: "white",
    fontSize: 30,
    marginTop: 20,
    backgroundColor: "#cc0000",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    marginRight: 20,
  },
  operationButtonsAc: {
    color: "white",
    fontSize: 30,
    marginTop: 20,
    backgroundColor: "#cc0000",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10,
    justifyContent: "space-around",
  },
});
