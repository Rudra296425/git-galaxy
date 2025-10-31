import requests
import json

# Function to fetch data from an API
def fetch_api_data(url, params=None):
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise an HTTPError for bad responses (4xx, 5xx)
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"API request failed: {e}")
        return None

# Function to filter data from the API response
def filter_api_data(data, key, value):
    try:
        # Filter data based on the condition
        filtered_data = [item for item in data if item.get(key) == value]
        return filtered_data
    except Exception as e:
        print(f"An error occurred while filtering data: {e}")
        return None

# Example usage
if __name__ == "__main__":
    # Example API endpoint
    url = "https://jsonplaceholder.typicode.com/posts"

    # Fetch data from the API
    print("Fetching data from the API...")
    api_data = fetch_api_data(url)

    if api_data:
        # Filter data where userId == 1
        key = "userId"
        value = 1
        print(f"\nFiltering data where {key} == {value}...")
        filtered_data = filter_api_data(api_data, key, value)

        if filtered_data:
            print("\nFiltered Data:")
            print(json.dumps(filtered_data, indent=4))
        else:
            print("No data matched the filter condition.")