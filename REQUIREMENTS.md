## Requirements

The requirements below are broken into separate **tiers**, which model the way we **recommend you approach the project**. That is, we recommend you complete (or complete the majority of) the requirements in Tier 1 before moving on to Tier 2, and so on. Of course, if you get stuck on a particular feature, we recommend moving on and trying another feature - don't sacrifice the good for the perfect!

### Tier 1: All Campuses and Students (20/61)

<details>

#### Frontend

- [ ] Write a component to display a list of all campuses (at least their names and images)
- [ ] Write a component to display a list of all students (at least their names)
- [ ] Write a campuses sub-reducer to manage campuses in your Redux store
- [ ] Write a students sub-reducer to manage students in your Redux store
- [ ] Display the all-campuses component when the url matches `/campuses`
- [ ] Display the all-students component when the url matches `/students`
- [ ] Add a links to the navbar that can be used to navigate to the all-campuses view and the all-students view

#### Backend

- [ ] Write a route to serve up all students
- [ ] Write a route to serve up all campuses

- Write a `campuses` model with the following information:
  - [ ] name - not empty or null
  - [ ] imageUrl - with a default value
  - [ ] address - not empty or null
  - [ ] description - extremely large text
- Write a `students` model with the following information:
  - [ ] firstName - not empty or null
  - [ ] lastName - not empty or null
  - [ ] email - not empty or null; must be a valid email
  - [ ] imageUrl - with a default value
  - [ ] gpa - decimal between 0.0 and 4.0
- [ ] Students may be associated with at most one campus. Likewise, campuses may be associated with many students

#### Seed

- [ ] Running the seed file creates campuses and students for demonstration purposes

Congrats! You have completed your first vertical slice! Make sure to `commit -m "Feature: Get All Campuses and Students"` before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 2: Single Student and Single Campus (12/61)

<details>

#### Frontend

- Write a component to display a single campus with the following information:
  - [ ] The campus's name, image, address and description
  - [ ] A list of the names of all students in that campus (or a helpful message if it doesn't have any students)
- [ ] Display the appropriate campus's info when the url matches `/campuses/:campusId`
- [ ] Clicking on a campus from the all-campuses view should navigate to show that campus in the single-campus view

- Write a component to display a single student with the following information:
  - [ ] The student's full name, email, image, and gpa
  - [ ] The name of their campus (or a helpful message if they don't have one)
- [ ] Display the appropriate student when the url matches `/students/:studentId`
- [ ] Clicking on a student from the all-students view should navigate to show that student in the single-student view

- [ ] Clicking on the name of a student in the single-campus view should navigate to show that student in the single-student view
- [ ] Clicking on the name of a campus in the single-student view should navigate to show that campus in the single-campus view

#### Backend

- [ ] Write a route to serve up a single campus (based on its id), _including that campuses' students_
- [ ] Write a route to serve up a single student (based on their id), _including that student's campus_

Congrats! You have completed your second vertical slice! Make sure to `commit -m "Feature: Get Single Campus and Student"` before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 3: Adding a Campus and Adding a Student (10/61)

<details>

#### Frontend

- [ ] Write a component to display a form for adding a new campus that contains inputs for _at least_ the name and address.
- [ ] Display this component as part of the all-campuses view, alongside the list of campuses
- Submitting the form with a valid name/address should:

  - [ ] Make an AJAX request that causes the new campus to be persisted in the database
  - [ ] Add the new campus to the list of campuses without needing to refresh the page

- [ ] Write a component to display a form for adding a new student that contains inputs for _at least_ first name, last name and email
- [ ] Display this component as part of the all-students view, alongside the list of students
- Submitting the form with a valid first name/last name/email should:
  - [ ] Make an AJAX request that causes the new student to be persisted in the database
  - [ ] Add the new student to the list of students without needing to refresh the page

#### Backend

- [ ] Write a route to add a new campus
- [ ] Write a route to add a new student

Congrats! You have completed your third vertical slice! Make sure to `commit -m "Feature: Add Campus and Student"` before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 4: Removing a Campus and Removing a Student (8/61)

<details>

#### Frontend

- [ ] In the all-campuses view, include an `X` button next to each campus
- Clicking the `X` button should:

  - [ ] Make an AJAX request that causes that campus to be removed from database
  - [ ] Remove the campus from the list of campuses without needing to refresh the page

- [ ] In the all-students view, include an `X` button next to each student
- Clicking the `X` button should:
  - [ ] Make an AJAX request that causes that student to be removed from database
  - [ ] Remove the student from the list of students without needing to refresh the page

#### Backend

- [ ] Write a route to remove a campus (based on its id)
- [ ] Write a route to remove a student (based on their id)

Congrats! You have completed your fourth vertical slice! Make sure to `commit -m "Feature: Remove Campus and Student"` before moving on (see RUBRIC.md - points are awarded/deducted for a proper git workflow)!

</details>

### Tier 5: Updating a Campus and Updating a Student (11/61)

<details>

#### Frontend

- [ ] Write a component to display a form updating _at least_ a campus's name and address
- [ ] Display this component as part of the single-campus view, alongside the single campus
- Submitting the form with valid data should:
  - [ ] Make an AJAX request that causes that campus to be updated in the database
  - [ ] Update the campus in the current view without needing to refresh the page
- [ ] In the single-campus view, display an `Unregister` button next to each of its students, which removes the student from the campus (in the database as well as this view); hint: the student is still in the database but is no longer associated with the campus

- [ ] Write a component to display a form updating _at least_ a student's first and last names, and email
- [ ] Display this component as part of the single-student view, alongside the single student
- Submitting the form with valid data should:
  - [ ] Make an AJAX request that causes that student to be updated in the database
  - [ ] Update the student in the current view without needing to refresh the page

#### Backend

- [ ] Write a route to update an existing campus
- [ ] Write a route to update an existing student

</details>

### Bonus Tier: Finishing Touches (23 EC)

<details>

#### Testing

- Write the following tests, each marked with a \*\*\* in the tests directory
  - [ ] React (AllCampuses): renders "No Campuses" if passed an empty array of campuses
  - [ ] React (AllStudents): renders "No Students" if passed an empty array of students
  - [ ] Redux (campuses): returns the initial state by default
  - [ ] Redux (students): returns the initial state by default
  - [ ] Express: GET /api/students responds with all students
  - [ ] Sequelize (Campus): requires name and address
  - [ ] Sequelize (Student): email must be a valid email
  - [ ] Navigation: navbar to navigate to home, campuses, students

#### Finishing Touches

- [x] If a user attempts to add a new student or campus without a required field, a helpful message should be displayed
- [x] If a user attempts to access a page that doesn't exist (ex. `/potato`), a helpful "not found" message should be displayed
- [ ] If a user attempts to view a student/campus that doesn't exist, a helpful message should be displayed
- [ ] Whenever a component needs to wait for data to load from the server, a "loading" message should be displayed until the data is available
- [ ] Overall, the app is spectacularly styled and visually stunning

#### Ordering

- [ ] Create option for students to be ordered based on lastName on all-students view
- [ ] Create option for students to be ordered based on GPA on all-students view
- [ ] Create option for campuses to be ordered based on number of enrolled students on all-campuses view

#### Filtering

- [ ] Create a filter on all-students view to only show students who are not registered to a campus
- [ ] Create a filter on the all-campuses view to only show campuses that do not have any registered students

#### Seeding & Pagination

- [ ] Seed 100+ students and 100+ campuses
- [ ] Implement _front-end_ pagination for the all-students view (e.g. `/students?page=1` renders the first ten students, and `/students?page=2` renders students 11-20)
- [ ] Implement _front-end_ pagination for the all-campuses view (e.g. `/campuses?page=1` renders the first ten campuses, and `/campuses?page=2` renders campuses 11-20)
- [ ] Implement _back-end_ pagination for students (e.g. `/api/students?page=1` returns the first ten students' data, and `/api/students?page=2` returns students 11-20)
- [ ] Implement _back-end_ pagination for campuses (e.g. `/api/campuses?page=1` returns the first ten campuses' data, and `/api/campuses?page=2` returns campuses 11-20)

</details>
