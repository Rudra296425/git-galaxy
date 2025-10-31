*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Filter API Data
    Create Session    jsonplaceholder    ${BASE_URL}
    ${response}=    GET    jsonplaceholder    /posts
    Should Be Equal As Strings    ${response.status_code}    200
    ${json_data}=    To List    ${response.json()}
    ${filtered_data}=    Get Matching Items    ${json_data}    userId    1
    Log    Filtered Data: ${filtered_data}

*** Keywords ***
Get Matching Items
    [Arguments]    ${data}    ${key}    ${value}
    ${filtered}=    Create List
    FOR    ${item}    IN    @{data}
        ${item_value}=    Get From Dictionary    ${item}    ${key}
        Run Keyword If    '${item_value}' == '${value}'    Append To List    ${filtered}    ${item}
    END
    [Return]    ${filtered}