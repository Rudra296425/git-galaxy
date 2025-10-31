import json

# Function to read a JSON file
def read_json_file(file_path):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)  # Parse JSON data
            return data
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
    except json.JSONDecodeError:
        print(f"Error: Failed to decode JSON from {file_path}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example usage
if __name__ == "__main__":
    file_path = "example.json"  # Replace with your JSON file path
    json_data = read_json_file(file_path)
    
    if json_data:
        print("JSON Data:")
        print(json.dumps(json_data, indent=4))  # Pretty print JSON

# How to run this program
# Replace example.json with the path to your JSON file.
# Run the script:
# python read_json.py