import java.util.Scanner;
public class FourIntegers{

   public static void main(String[] args) {
   Scanner input = new Scanner(System.in);

   
   System.out.print("Enter four variables: ");
   int a = input.nextInt();
   int b = input.nextInt();
   int c = input.nextInt();
   int d = input.nextInt();
   
   System.out.println("the number of odd values are: 
   double SumOddNumbers = (((a%2) * a) + ((b%2) * b) + ((c%2) * c) + ((d%2) * d));
   
   System.out.println("The sum of the odd entered number is: " + SumOddNumbers);
   
   
   }
}