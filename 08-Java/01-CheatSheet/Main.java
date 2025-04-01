// 1. Basics

// Single-line comment
/* Multi-line comment */

// Print to console
System.out.println("Hello, World!");

// Variables
int num = 10;
double pi = 3.14;
char letter = 'A';
boolean isJavaFun = true;
String name = "Java";


2. Operators


// Arithmetic: +, -, *, /, %
int sum = 5 + 3;  // 8

// Relational: ==, !=, >, <, >=, <=
boolean isEqual = (5 == 3); // false

// Logical: && (AND), || (OR), ! (NOT)
boolean result = (5 > 3) && (10 > 5); // true

// Bitwise: &, |, ^, ~, <<, >>, >>>
int bitwiseAnd = 5 & 3;  // 1

// Assignment: =, +=, -=, *=, /=, %=
int x = 10;
x += 5;  // x is now 15


3. Control Flow


// If-Else
if (x > 0) {
    System.out.println("Positive");
} else if (x < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}

// Switch
switch (x) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
    default:
        System.out.println("Other");
}

// Loops
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

do {
    System.out.println(i);
    i++;
} while (i < 5);


4. Methods (Functions)


// Method with parameters & return type
public static int add(int a, int b) {
    return a + b;
}

// Call the method
int result = add(5, 3);


5. Arrays

// Declare and initialize
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers[0]); // 1

// Loop through array
for (int num : numbers) {
    System.out.println(num);
}



6. Object-Oriented Programming (OOP)


// Class and Object
class Car {
    String brand;

    // Constructor
    Car(String brand) {
        this.brand = brand;
    }

    // Method
    void honk() {
        System.out.println("Beep! Beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Toyota");
        myCar.honk();
        System.out.println(myCar.brand);
    }
}



7. Inheritance & Polymorphism



// Parent class
class Animal {
    void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Child class
class Dog extends Animal {
    void makeSound() { // Method Overriding
        System.out.println("Dog barks");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        myDog.makeSound(); // "Dog barks"
    }
}


8. Interfaces&

Abstract Classes



// Abstract class
abstract class Animal {
    abstract void makeSound(); // Abstract method
}

// Implementing abstract class
class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow");
    }
}

// Interface
interface Vehicle {
    void drive();
}

class Car implements Vehicle {
    public void drive() {
        System.out.println("Driving a car");
    }
}


9.

Exception Handling



try
{
    int result = 10 / 0;
}catch(
ArithmeticException e)
{
    System.out.println("Cannot divide by zero!");
}finally
{
    System.out.println("Execution completed.");
}



10.
File Handling


import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileHandling {
    public static void main(String[] args) {
        try {
            // Create a file
            File myFile = new File("file.txt");
            myFile.createNewFile();

            // Write to a file
            FileWriter writer = new FileWriter("file.txt");
            writer.write("Hello, Java!");
            writer.close();

            // Read from a file
            Scanner reader = new Scanner(myFile);
            while (reader.hasNextLine()) {
                System.out.println(reader.nextLine());
            }
            reader.close();
        } catch (IOException e) {
            System.out.println("An error occurred.");
        }
    }
}



11. Collections(ArrayList,HashMap,etc.)



import java.util.ArrayList;
import java.util.HashMap;

public class CollectionsExample {
    public static void main(String[] args) {
        // ArrayList
        ArrayList<String> fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        System.out.println(fruits.get(0)); // Apple

        // HashMap
        HashMap<String, Integer> ages = new HashMap<>();
        ages.put("Alice", 25);
        ages.put("Bob", 30);
        System.out.println(ages.get("Alice")); // 25
    }
}



12. Threads(Multithreading)


// Extending Thread class
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running...");
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}


13.

Lambda Expressions (Java 8+)


interface MathOperation {
    int operation(int a, int b);
}

public class LambdaExample {
    public static void main(String[] args) {
        MathOperation add = (a, b) -> a + b;
        System.out.println(add.operation(5, 3)); // 8
    }
}
