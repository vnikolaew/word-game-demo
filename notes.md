// Proposal ///

A word quiz website with a basic design. The website will be fully in Arabic. The website will have 3 similar versions. The standard website version has been created.

Requirements:
-- The standard website version requires several modifications relating to survey + admin dashboard.
-- Once we are done with these modifications, we can create the other 2 website versions.
-- We need to use the PsychoJS library (https://github.com/psychopy/psychojs) for word presentation and response collection.

/// NEW INFO ///

In this project, the website will be used via computers, tablets, tablets, and phones. The standard website design is already responsive. Take this info in consideration while doing the following standard website modifications:

-- login: please add a google login method.

-- quiz response method: please ensure that phone AND tablet users should be asked to respond using buttons ONLY during the practice and main quiz. Computer/laptop users should be asked to respond via keyboard arrows ONLY during the practice and main quiz.

-- quiz response value: For phone/tablet users, a click on the right "Yes" box means a "Word" response. In contrast, a click on the left "No" box means a "Nonword" response. For computer/laptop users, a right arrow response means a "Word" response. In contrast, a left arrow response means a "Nonword" response.

-- The practice session will include only 10 items: 5 words and 5 nonwords. I included the practice session items in the attached xlsx file. The order of these items will be randomized per user. Each user will see a different item order.

-- Please include a restriction on quiz completion: prevent users from retaking the quiz more than 4 times within 1 hour. prevent users from retaking the quiz more than 20 times within 24 hours.

-- Admin Dashboard: please revise the calculation of the average time taken to complete the main quiz. It is currently incorrect.

-- the background survey content is not correct. Please include the questions attached in txt file. All survey questions are required. An error message should be appear to the user if he did not make a selection/answer the question.

-- After the practice session, show the final score on the practice quiz and include a "Begin Main Quiz" button. The score calculation method is the same is the one used in the main quiz. The score calculation method is as follows:
---- Score = (Percentage of Correctly Accepted Words) - (Percentage of Incorrectly Accepted Non-Words)
---- Minimum Score: -100 (user identified all non-words as words and all words as non-words)
---- Maximum Score: 100 (user correctly identified all words and non-words)

-- In the quiz csv output:
--- please revise column "User Reaction Time in milliseconds". This metric needs to be calculated using the PsychoJS library. This is the single most important metric in this quiz. (Additional info about this metric: in the PsychoJS library, response time is automatically recorded in seconds when we collect a response from a user. This is stored in the rt property of the response object. However, this response time is not automatically saved to the output data file - we need to explicitly add it using the addData method. Check this script: https://github.com/psychopy/psychojs/blob/main/src/data/ExperimentHandler.js).
--- revise column "User Response". User Response here means the response that the user gave for that word/nonword. Column Values: word OR nonword.
--- revise column "Answer". Answer here means the correct answer to the displayed word/nonword. Column Values: word OR nonword.
--- add column "quiz ID" for each unique quiz.

-- Admin Dashboard: Add quiz completion statistics by Arabic dialect for 5 main Arabic dialects. These dialects are provided in the background survey. Users are asked to select their dialect out of 6 options (Gulf Arabic, Levantine Arabic, Iraqi Arabic, Egyptian Arabic, Maghrebi Arabic, and "other, please specify"). In the admin dashboard, display statistics by Arabic dialect:

- Total number of users per dialect
- Total number of tests taken per dialect
- Total number of completed tests per dialect
- Total number of completed tests with scores of 90% or higher per dialect
- Percentage of tests completed by users of this dialect compared to all tests completed across all dialects

Add quiz completion statistics by Saudi University. Users who selected their current country as Saudi Arabia, will be asked in the background survey, "If you're a university student, what is your university?". The options for this questions will be (King Saud University, Princess Nora bint Abdulrahman University, Imam Mohammad Ibn Saud Islamic University, Majmaah University, Qassim University, Other specify, not applicable). Please include the following stats for the 5 mentioned universities:

- Total number of users per Saudi University
- Total number of tests taken per Saudi University
- Total number of completed tests per Saudi University
- Total number of completed tests with scores of 90% or higher per Saudi University
- Percentage of tests completed by users of this Saudi University compared to all tests completed across all Saudi universities

-- there are a few spacing issues in the "study information/consent page" and "instructions". Please share with me the current text file to revise spacing.
