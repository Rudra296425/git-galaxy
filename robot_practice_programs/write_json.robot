*** Settings ***
Library    OperatingSystem
Library    Collections

*** Variables ***
${JSON_FILE}    output.json

*** Test Cases ***
Write JSON to File
    ${data}=    Create Dictionary    name=John Doe    age=30    city=New York
    ${json_string}=    Convert To String    ${data}
    Create File    ${JSON_FILE}    ${json_string}
    Log    JSON data written to ${JSON_FILE}