import json

# Function to merge two JSON files
def merge_json_files(file1, file2, output_file):
    try:
        with open(file1, 'r') as f1, open(file2, 'r') as f2:
            data1 = json.load(f1)
            data2 = json.load(f2)

        merged_data = {**data1, **data2}  # Merge dictionaries

        with open(output_file, 'w') as out_file:
            json.dump(merged_data, out_file, indent=4)
            print(f"Merged data written to {output_file}")
    except FileNotFoundError as e:
        print(f"Error: {e}")
    except json.JSONDecodeError:
        print("Error: Failed to decode JSON from one of the files")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Example usage
if __name__ == "__main__":
    file1 = "file1.json"
    file2 = "file2.json"
    output_file = "merged.json"
    merge_json_files(file1, file2, output_file)