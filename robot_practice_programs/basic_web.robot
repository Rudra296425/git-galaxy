*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}     https://example.com
${BROWSER}    Chrome

*** Test Cases ***
Open Example Website
    Open Browser    ${URL}    ${BROWSER}
    Title Should Be    Example Domain
    Close Browser