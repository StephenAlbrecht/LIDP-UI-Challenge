# LIDP UI Challenge

This project integrates Angular into Spring Boot using Gradle to serve a landing page demonstrating several Angular Material components.
`lidp-ui` contains the Angular frontend and `lidp-api` contains the Spring Boot backend.

## Required software

* [Gradle](https://gradle.org)
* [npm](https://www.npmjs.com/)
* [Java JDK](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

## Running the project

After navigating to the project directory, build the project using the gradle wrapper with `./gradlew build`

This will create `lidp-api-0.0.1.jar` in `/lidp-api/build/libs`

Execute the server using `java -jar lidp-api-0.0.1.jar`

Navigate to [http://localhost](http://localhost/) to see the landing page!

## Requirements

* Project built with Gradle
* Spring boot implemented, running on port 80
* Landing page created for the server using Angular and Angular Material
#### Optional Requirements
* Hello World - When a user inputs their name, Angular displays "Hello, {NAME}"
* GET - The UI calls a RESTful web service to retrieve the application name and today's date, then displays it in a navbar at the top of the page.
* Material
  * A button pops up a snackbar
  * A grid of 3+ cards displays some content
  * A DatePicker allows the user to select their DOB and tells them their age
