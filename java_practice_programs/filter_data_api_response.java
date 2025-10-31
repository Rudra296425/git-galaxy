import org.json.JSONArray;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class FilterApiResponse {
    public static void main(String[] args) {
        String url = "https://jsonplaceholder.typicode.com/posts"; // Example API

        try {
            // Fetch data from the API
            URL apiUrl = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
            connection.setRequestMethod("GET");

            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                StringBuilder response = new StringBuilder();
                String inputLine;

                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // Parse the response as a JSON array
                JSONArray jsonArray = new JSONArray(response.toString());

                // Filter data where userId == 1
                System.out.println("Filtered Data:");
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject obj = jsonArray.getJSONObject(i);
                    if (obj.getInt("userId") == 1) {
                        System.out.println(obj.toString(4));
                    }
                }
            } else {
                System.out.println("GET request failed.");
            }
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}