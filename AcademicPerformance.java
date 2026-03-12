import java.util.Scanner;
import java.util.Random;

public class AcademicPerformance {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.println("==============================================");
        System.out.println("  Measure Academic Performance With Precision ");
        System.out.println("==============================================");

        // Taking student name input
        System.out.print("Enter Student Name: ");
        String name = scanner.nextLine();

        int[] marks = new int[5];
        int total = 0;

        // Taking marks for 5 subjects
        for (int i = 0; i < 5; i++) {
            System.out.print("Enter marks for Subject " + (i + 1) + " (out of 100): ");
            marks[i] = scanner.nextInt();
            total += marks[i];
        }

        // Calculate average
        double average = total / 5.0;

        String grade;
        String tip;

        /*
         Grade calculation logic:
         The program checks the average marks and assigns a grade
         based on the defined grading scale.
        */

        if (average >= 90) {
            grade = "A";
            tip = "Excellent work! Keep challenging yourself.";
        } 
        else if (average >= 80) {
            grade = "B";
            tip = "Great job! With a little more practice, you can reach the top.";
        } 
        else if (average >= 70) {
            grade = "C";
            tip = "Good effort! Try reviewing difficult topics daily.";
        } 
        else if (average >= 60) {
            grade = "D";
            tip = "You can improve! Practice consistently and ask for help when needed.";
        } 
        else {
            grade = "F";
            tip = "Don't give up! Focus on fundamentals and study step by step.";
        }

        // Motivational quotes array
        String[] quotes = {
            "Success is the sum of small efforts repeated daily.",
            "Your only limit is your determination.",
            "Dream big and work hard.",
            "Education is the most powerful weapon you can use to change the world."
        };

        // Select random quote
        Random random = new Random();
        String quote = quotes[random.nextInt(quotes.length)];

        // Display results
        System.out.println("\n========== Performance Report ==========");
        System.out.println("Student Name : " + name);
        System.out.println("Total Marks  : " + total + "/500");
        System.out.println("Average      : " + average);
        System.out.println("Grade        : " + grade);
        System.out.println("\nPerformance Tip:");
        System.out.println(tip);

        System.out.println("\nMotivational Quote:");
        System.out.println("\"" + quote + "\"");

        System.out.println("========================================");

        scanner.close();
    }
}