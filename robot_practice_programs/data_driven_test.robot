*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}     https://example.com
${BROWSER}    Chrome

*** Test Cases ***
Verify Page Title
    [Template]    Check Title
    Example Domain    https://example.com
    Google            https://www.google.com

*** Keywords ***
Check Title
    [Arguments]    ${expected_title}    ${url}
    Open Browser    ${url}    ${BROWSER}
    Title Should Be    ${expected_title}
    Close Browser