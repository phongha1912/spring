package com.logigear.democalculator.beans;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.Serializable;

@Component
public class CalculatorUtil {
    public int sumTwoNumber(int number1, int number2){
        return number1 + number2;
    }
    public int minusTwoNumber(int number1, int number2){
        return number1 - number2;
    }
    public int multipTwoNumber(int number1, int number2){
        return number1*number2;
    }
    public long devisionTwoNumber(int number1, int number2){
        return number1/number2;
    }
}
