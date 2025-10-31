import org.json.JSONObject;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.Map;

public class WriteJsonFile {
    public static void main(String[] args) {
        String filePath = "output.json";

        // Create a map with data
        Map<String, Object> data = new HashMap<>();
        data.put("name", "Alice");
        data.put("age", 25);
        data.put("skills", new String[]{"Java", "Spring", "Hibernate"});

        // Convert the map to a JSON object
        JSONObject json = new JSONObject(data);

        try {
            // Write the JSON object to a file
            Files.write(Paths.get(filePath), json.toString(4).getBytes());
            System.out.println("Data successfully written to " + filePath);
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}