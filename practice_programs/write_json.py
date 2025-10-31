import json

# Function to write data to a JSON file
def write_json_file(file_path, data):
    try:
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=4)  # Write JSON data with pretty formatting
            print(f"Data successfully written to {file_path}")
    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage
if __name__ == "__main__":
    file_path = "output.json"
    data = {
        "name": "Alice",
        "age": 25,
        "skills": ["Python", "Data Analysis", "Machine Learning"]
    }
    write_json_file(file_path, data)