## Inspiration
We wanted to create something women could use to empower themselves and encourage them throughout the day while working on their computers. All the team members are officers in clubs and organizers of multiple hackathons, so there are many meetings and projects to focus on at once, which can be draining and discouraging at times, no matter how much we love the organizations we are part of. Whether in a meeting, fixing a bug in code, or simply just wanting something positive to read at the start of the day, Kōtei is there to provide phrases of inspiration to help women conquer the day.

## What it does
The dog icon stays in the corner of the screen of all tabs, waiting for the user to click on it. When clicked, it spouts an inspirational quote to motivate the user. The bubble lasts for 6 seconds before going away.

## How we built it
With a lot of hair pulling, that's for sure. We really embodied the quote "first we walk, then we run" as said by a Microsoft employee before we started hacking. Trying to wrap our heads around the multitude of chrome extension starter kits was difficult, especially since there were so many with different manifests, and popup.htmls. We started with just the simple extension icon in the corner of our browser, which in and of itself was a challenge. Many times we'd run into issues where the Chrome console would output all these interesting errors we'd never heard of before. Thanks to stackoverflow, the Chrome extension document pages, and a friend who had made a Chrome extension, we were able to get our extension up and "walking". We hope to make it "run" in the future.

## Challenges we ran into
Trying to understand Javascript syntax in junction with Chrome extension commands because the one teammate who has worked with Javascript learned an older style of syntax and had to relearn it with ES6 syntax. The image for the dog sprite also would not load up because we created an element named "image" rather than "img" which caused an error, most likely because it is a keyword in Javascript. The problem was solved by simply renaming the element. Many times, we'd load up the extension, thinking that it was working, when in fact the console was outputting a multitude of errors. We also wanted the utilize Azure or some sort of API where we could pull quotes randomly as the user used the extension. We realized that maybe this was too big of a task, and looked into instead scraping a website, but even that was a task too great with a great chance of failing. We weighed the cost benefit and just hand picked and hard coded the speech bubbles to at least have something we could work with.

## Accomplishments we are proud of
We used a JSON file for the first time and were able to make an operational Chrome Extension. We also managed to work together as a team rather than having one person do a brunt of the work and the others trailing. We were all able to showcase our strengths and come together to make an extension to motivate other users.

## What we learned
We learn the benefits of unit testing. Because we would code just a little bit, and then test, it made it easier to track down and fix bugs. We also learned how to utilize the Chrome web dev tools to out advantage, as the error messages could be google searched and researched to find where we went wrong. In many cases, we were able to solve issues, but without knowing exactly why. We were just happy that it started working.

## What's next for Kōtei
With more time, we would connect an API that contains a multitude of inspirational quotes to add variety. We would also like a more robust algorithm to generate the phrases rather than the one we have now. We would also like to have Koko the shiba have different facial expression throughout the day (time based changes).
