
# UX Heuristics — Endangered Animals: An Immersive Experience

## H1 — NFC interaction must be immediately discoverable
**Severity:** 5/5 — Critical
**Rationale:** The entire exhibit depends on users knowing to tap their phone to an animal model. If this is not instantly obvious, the interaction fails before it begins. The paper states the exhibit needs "clear instructions", implying this is a real risk.
**Example Violation:** A visitor approaches the exhibit, sees a wooden animal model, and has no idea they are supposed to tap their phone to it. They read the panel text and leave without interacting.
**Redesign Suggestion:** Place a prominent NFC tap indicator directly on or beside each model, using the universal NFC wave symbol. Add a short animated loop on a nearby screen showing the tap gesture. Do not rely on text instructions alone.

---

## H2 — Content must be readable by primary school children without adult help
**Severity:** 5/5 — Critical
**Rationale:** The paper identifies primary age children as the key audience. If a child cannot read or understand the content independently, the emotional and educational goal of the exhibit fails.
**Example Violation:** The website uses full sentences with specialist vocabulary such as "critically endangered", "habitat loss", and "overharvesting" without explanation. A seven-year-old tapping the tiger model reads none of it.
**Redesign Suggestion:** Set a maximum reading age of 8 for all body copy. Replace jargon with plain language. Add illustrated icons to reinforce key facts. Test every page with a child before deployment.

---

## H3 — Each page must load without noticeable delay on a mobile connection
**Severity:** 4/5 — High
**Rationale:** The website is hosted on a Raspberry Pi over Ethernet. Users connect via personal mobile data or museum Wi-Fi. Any lag between tapping the NFC and the page appearing will break the sense of immediacy and lose younger visitors.
**Example Violation:** A visitor taps the panda model and waits four seconds for the page to load. Their child has already moved on to another exhibit.
**Redesign Suggestion:** Optimise all images before upload. Set a target page load time of under two seconds on a 4G connection. Test under simulated museum Wi-Fi conditions before launch.

---

## H4 — The donation call to action must be visible without scrolling
**Severity:** 4/5 — High
**Rationale:** The paper explicitly states the goal is to inspire visitors to donate. If the donation link is buried at the bottom of a scrollable page, many users will never see it, particularly children and casual visitors.
**Example Violation:** The WWF donation link appears at the foot of a long page after population statistics, habitat maps, and a poll. Fewer than 20% of users scroll far enough to see it.
**Redesign Suggestion:** Place a prominent donate button in the fixed header or immediately below the hero image on every animal page. It must be visible on first load without any scrolling.

---

## H5 — The quiz must give immediate feedback on correct and incorrect answers
**Severity:** 4/5 — High
**Rationale:** The paper describes a quiz as the entry point to each page. Without feedback, the quiz provides no learning value and may leave users confused about whether their answer was right.
**Example Violation:** A child taps an answer, the screen moves to the next section, and they are never told whether they were correct. They feel no satisfaction and receive no information.
**Redesign Suggestion:** On answer selection, immediately show a clear correct or incorrect state with a short explanation. Use colour and iconography, not just text, so younger children can read the result.

---

## H6 — Navigation between animal pages must be available from every screen
**Severity:** 3/5 — Medium
**Rationale:** The paper states users should be able to access other pages from any location. If navigation is absent or hard to find, users are stranded on a single animal page and the breadth of the exhibit is lost.
**Example Violation:** A visitor scanning the rhino model arrives on the rhino page. There is no visible link to other animals. They close the browser and try tapping another model separately.
**Redesign Suggestion:** Add a persistent bottom navigation bar or a fixed animal selector showing all available species as small icons. It must be reachable from any scroll position.

---

## H7 — Emotive design must be age-appropriate and avoid distressing imagery
**Severity:** 3/5 — Medium
**Rationale:** The paper mentions using emotive faces to build empathy. Without care, imagery of declining populations, dead animals, or threatening statistics could distress younger visitors rather than motivate them.
**Example Violation:** A page displays a graph showing a species population crashing toward zero alongside a photograph of habitat destruction. A young child becomes upset and refuses to continue.
**Redesign Suggestion:** Use cartoon-style expressive faces on the wooden models and website illustrations. Frame statistics as hopeful rather than terminal. Focus on what visitors can do to help, not the scale of the threat.

---

## H8 — Error messages must be written in plain language a child can act on
**Severity:** 2/5 — Low
**Rationale:** The paper highlights built-in error handling as a Next.js benefit. However, a technical error message is worse than useless for a child or non-technical adult in a museum context.
**Example Violation:** The server is briefly unavailable. The browser shows "503 Service Unavailable". A parent and child stare at it, unsure whether to tap again or find a museum attendant.
**Redesign Suggestion:** Replace all default error pages with a friendly, branded page that says something like "This page is resting — try tapping the animal again" with a retry button.

---

## H9 — The feedback form must be short enough to complete in under five minutes
**Severity:** 2/5 — Low
**Rationale:** The paper includes a feedback mechanism to gather improvement ideas. Museum visitors are transient with low dwell time. A long or complex form will be abandoned before completion.
**Example Violation:** The feedback form has eight fields including a free-text comment box. Visitors skip it entirely because they are moving on to the next exhibit.
**Redesign Suggestion:** Reduce the form to three questions maximum, all multiple choice. Use large tap targets. Add a single optional free-text field at the end. Target a 5 minute completion time.

# Summary and Evaluation of Heuristics
For the heuristics, we decided to run our entire project in great detail into an LLM, specifically Claude. This allowed us to get an entirely unbiased view, with a perspective that our team may not necessarily think of. As for how we acted on these heuristics, as a team we considered which ones we agreed with for the intended result of our project, and removed any from the result that we didn't. In the end we got 9 considerations we were each very pleased with. As for the NFC's needing to be immediately discoverable, we have achieved this by having the NFC tag on the bottom of each 3D model, which are the main interactivity part of the project. This NFC will then be placed onto the very obviously placed reader, in a large wooden box, and will then allow the user to scan the animal. Next, as for content needing to be simple, we specifically wrote all information and quiz questions with the intention for it to be as simple as possible for young children to understand, and in the final result we have a very simple website, with what we believe to be no words that someone from our intended audience (primary school children and up) wouldn't be able to read/understand. Next, we have a heuristic about using a mobile device, which we did not end up deciding on for our final result, but chose to leave this in as if we were to continue the project from here, we would implement the optional use of a mobile phone to scan the NFC tags, although unfortunately in this prototype we did not have the ability or time to do so. This is a potential future scope of the project, and in terms of connection speed, it loads withing 3 seconds, which is a good standard for general usability of the website. 

Moving on to another element we didn't end up implementing, the donation button. The original plan was to have a link to a reputable animal preservation charity, which would allow users to donate to them. This is again something we would implement in the future, but as this is a prototype, we felt it was more beneficial to include the usability and technical side of the whole experience to ensure the user had a seamless experience on the website.

Back to another heuristic we did include, the quiz having immediate results. This was relatively simple to implement, and we considered it to be a major factor, specifically with young audiences who need to be entertained continuously, and now chase dopamine. To ensure this, we also ensured we implemented the next heuristic, for all animal pages to be navigable from each screen. We achieved this by having a button at the bottom of each page which bring up the scanning menu, then allowing the user to scan an animal again and not have a break between completing the quizzes. If we had more time for this prototype, this would also have been excellent if we had added more animals to the project, which is a potential future scope for the project.

As for the images, we ended up going for a basic image of each animal which is easy to see and very clear and age appropriate for a younger audience, as this was obviously crucial. As for error messages, this really wasn't a concern for us, as in the final result we didn't want there to be error messages in general, so the user shouldn't have to worry about that. Currently, all the code is working correctly and everything has been put together well. Finally, we were considering implementing a feedback form on the website, but in the end we decided this was not necessary in a prototype, and once again this is something that could potentially be explored were this project to continue, but in this current state this was not necessary, and we instead focused on making an interactive quiz instead.

Overall, these heuristics were very helpful to us as a team and allowed us to have a more specific guide over what we wanted from the final product, and while some things are not implemented, we decided to include features, like the quiz, which required more thought and effort which was more worthwhile and more interactive for the user. 