*** Settings ***
Library    OperatingSystem
Library    Collections
Library    JSONLibrary

*** Variables ***
${JSON_FILE}    output.json

*** Test Cases ***
Read JSON from File
    ${json_string}=    Get File    ${JSON_FILE}
    ${json_data}=    Load JSON From String    ${json_string}
    Should Be Equal As Strings    ${json_data["name"]}    John Doe
    Should Be Equal As Numbers    ${json_data["age"]}     30
    Should Be Equal As Strings    ${json_data["city"]}    New York
    Log    JSON data validated successfully