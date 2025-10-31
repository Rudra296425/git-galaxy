import json

# Function to filter data from a JSON file
def filter_json(file_path, key, value):
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

        # Filter data based on the condition
        filtered_data = [item for item in data if item.get(key) == value]

        return filtered_data
    except FileNotFoundError:
        print(f"Error: File not found at {file_path}")
    except json.JSONDecodeError:
        print(f"Error: Failed to decode JSON from {file_path}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example usage
if __name__ == "__main__":
    file_path = "data.json"
    key = "category"
    value = "electronics"
    filtered_data = filter_json(file_path, key, value)

    if filtered_data:
        print("Filtered Data:")
        print(json.dumps(filtered_data, indent=4))