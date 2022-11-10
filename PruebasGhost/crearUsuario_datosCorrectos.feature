Feature: Crear usuario campos correctos
@user2 @web
Scenario: Como primer usuario inicio sesion y mandó un mensaje al usuario 2
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 3 seconds
  When I enter email "e.angulov@uniandes.edu.co"
  And I wait for 2 seconds
  And I enter password "Elymary-420@"
  And I wait for 2 seconds
  And I click next
  And I wait for 2 seconds
  Then I send user "Failed to send email. Reason: Sending failed."
  And I wait for a signal containing "Failed to send email. Reason: Sending failed." for 15 seconds