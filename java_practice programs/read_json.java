import org.json.JSONObject;
import java.nio.file.Files;
import java.nio.file.Paths;

public class ReadJsonFile {
    public static void main(String[] args) {
        String filePath = "example.json"; // Replace with your JSON file path

        try {
            // Read the file content as a String
            String content = new String(Files.readAllBytes(Paths.get(filePath)));

            // Parse the JSON content
            JSONObject json = new JSONObject(content);

            // Print the JSON data
            System.out.println("JSON Data:");
            System.out.println(json.toString(4)); // Pretty print with indentation
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}