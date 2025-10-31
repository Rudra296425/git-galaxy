*** Settings ***
Library    RequestsLibrary

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Data-Driven API Test
    [Template]    Validate API Response
    /posts/1    1
    /posts/2    2
    /posts/3    3

*** Keywords ***
Validate API Response
    [Arguments]    ${endpoint}    ${expected_id}
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    GET    jsonplaceholder    ${endpoint}
    Should Be Equal As Strings    ${response.status_code}    200
    ${json_data}=    To Dictionary    ${response.json()}
    Should Be Equal As Strings    ${json_data["id"]}    ${expected_id}