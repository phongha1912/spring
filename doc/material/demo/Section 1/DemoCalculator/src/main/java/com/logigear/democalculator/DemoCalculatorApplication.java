package com.logigear.democalculator;

import com.logigear.democalculator.beans.CalculatorUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.logigear")
public class DemoCalculatorApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoCalculatorApplication.class, args);
        ApplicationContext context = SpringApplication.run(DemoCalculatorApplication.class, args);
        CalculatorUtil calculatorUtil = context.getBean(CalculatorUtil.class);
        System.out.println("Element number 1:" + args[0]);
        System.out.println("Element number 2:" + args[1]);
        System.out.println("Sum two number using ComponentScan: "
                +calculatorUtil.sumTwoNumber(Integer.parseInt(args[0]),Integer.parseInt(args[1])));
        System.out.println("Minus two number using ComponentScan: "
                +calculatorUtil.minusTwoNumber(Integer.parseInt(args[0]),Integer.parseInt(args[1])));
        System.out.println("Multip two number using ComponentScan: "
                +calculatorUtil.multipTwoNumber(Integer.parseInt(args[0]),Integer.parseInt(args[1])));
        System.out.println("Devis two number using ComponentScan: "
                +calculatorUtil.devisionTwoNumber(Integer.parseInt(args[0]),Integer.parseInt(args[1])));

    }
}
