/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Screen from './Screen';
import Button from './Button';

const Container = () => {

    const [operand, setOperand] = useState("");
    const [result, setResult] = useState("0");
    const [NewNumber, setNewNumber] = useState(false);

    const isOperator = (char) => {
        ['+', '-', '*', '/'].includes(char);
    }

    const evaluateExpression = (expression) => {
        try {
            const validPattern = /^[0-9+\-*/.() ]+$/;
            if (!validPattern.test(expression)) {
                return "Error";
            }

            const result = new Function(`return ${expression}`)();

            if (!isFinite(result)) {
                return "Error";
            }

            const roundedResult = Number(result.toFixed(10));
            return roundedResult.toString();
        } catch (err) {
            return "Error";
        }
    };



    const handlebutton = (val) => {
        if (val === 'AC') {
            setOperand("");
            setResult("0");
            setNewNumber(false);
            return;
        }

        if (val === 'C') {
            if (operand.length > 0) {
                const newOperand = operand.slice(0, -1);
                setOperand(newOperand);
                if (newOperand === "") {
                    setResult("0");
                } else {
                    const evalResult = evaluateExpression(newOperand);
                    setResult(evalResult !== "Error" ? evalResult : "0");
                }
            }
            return;
        }


        if (val === '=') {
            if (operand) {
                const evalResult = evaluateExpression(operand);
                setResult(evalResult);
                setOperand(operand);
                setNewNumber(true);
            }
            return;
        }

        if (NewNumber && !isOperator(val)) {
            setOperand(val);
            setResult(val);
            setNewNumber(false);
            return;
        }
        if (NewNumber && isOperator(val)) {
            setOperand(result + val);
            setNewNumber(false);
            return;
        }

        if (val === '.') {
            const parts = operand.split(/[+\-*/]/);
            const currentNumber = parts[parts.length - 1];
            if (currentNumber.includes('.')) {
                return; 
            }
            if (currentNumber === '') {
                setOperand(operand + '0.');
                return;
            }
        }


        if (isOperator(val)) {
            if (operand === "") {
                return; 
            }

            const lastChar = operand.slice(-1);
            if (isOperator(lastChar)) {
                setOperand(operand.slice(0, -1) + val);
                return;
            }
        }

        const newOperand = operand + val;
        setOperand(newOperand);

        if (!isOperator(val)) {
            const evalResult = evaluateExpression(newOperand);
            if (evalResult !== "Error") {
                setResult(evalResult);
            }
        }
    };







    return (
        <section className="flex justify-center items-center h-[90vh] bg-[#272727] text-center w-[30vw] mx-auto rounded-2xl flex-col p-10 gap-15">
            <Screen value={operand} result={result} />
            <div className="grid grid-cols-4 gap-4">
                {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C', 'AC'].map((val, index) => (
                    <Button key={index} title={val} onClick={handlebutton} />
                ))}
            </div>
        </section>
    );
}

export default Container
