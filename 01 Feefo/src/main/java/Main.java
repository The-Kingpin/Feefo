import normaliser.Normaliser;
import normaliser.NormaliserImpl;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String input = scanner.nextLine();

        Normaliser n = new NormaliserImpl();
        String normalisedTitle = n.normalise(input);

        System.out.println(normalisedTitle);
    }
}
