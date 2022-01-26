# Front-end Developer Code Activity 

## List of Upcoming EventBrite Events
Using your favorite in-browser coding sandbox*, or a suggested one like CodePen or Glitch, create a web page to display details about a selection of upcoming events.
</br>
**Other deployment options available if arranged (repo with environment instructions, hosted live page, etc).*

### Deadline
This activity is due after 60 minutes. The intention for this activity is to learn more about your approach to the code, not a test that all details have been completed. At the end of our hour, and even if not all tasks are in place, submit a link to your solution to webmaster@capradio.org 

### Questions
Questions about this activity can be submitted to webmaster@capradio.org 

### Specifications 
-	Use any framework, libraries or references
-	Use straight CSS or your choice of preprocessor
-	Browser compatibility for Chrome

### Task
- Create a page with the requirements needed for your framework of choice
- Include a heading on the page of “CapRadio Front-end Activity,” include a subheading with your name
- Connect and read from the EventBrite API
  - Display upcoming, published events
  - List in chronological descending order
  - Include date, event name, short description, and image○	Include date, event name, short description, and image
- Render items on the page
  - For a desktop view the items should be in one row, centered on the page with space around and between them
  - For a mobile view the items should stack on the page
  - For a mobile view, the items should not have the short description
  - Use Roboto font for all text. Use Roboto Black 900 for event name, use Regular 400 for date and description


### Mock-ups
-	[Mobile](https://drive.google.com/file/d/1e6YnimyRZkXenMzplktNCDUgGTjAtYPj/view)
-	[Desktop](https://drive.google.com/file/d/12hwi4qdSl_MYoPmCnrHCbsJGyZMWmqc-/view)

### Reference
[API Documentation](https://www.eventbrite.com/platform/api#/reference/event/list/list-events-by-organization): list events by organization
- Parameters
  - API Token: T3WDVAJJSGPIT2JLXDLT
  - organization_id: 604645012433
  - order_by: start_desc
  - time_filter: current_future
  - status: live
- Values
  - events.name
  - events.description
  - events.start
  - events.logo

### Font
-	Google Font - Roboto 

### Evaluation
-	Was a front-end framework used?
-	Does the API request return data?
-	Did the response have three events, all of which are in the future?
-	Did the response return the events sorted?
-	Is the data returned from the api rendered dynamically in HTML?
-	Is CSS used for layout?
-	Is the webfont loaded and applied via CSS?
-	Does the HTML include at least one semantic element?
