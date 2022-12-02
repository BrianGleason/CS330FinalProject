function playPause(){
    let play = document.getElementById("play-button")
    let pause = document.getElementById("pause-button")
    if(play && pause){
        play.classList.toggle("hidden")
        pause.classList.toggle("hidden")
    }
}
function recordStop(){
    let record = document.getElementById("record-button")
    let stop = document.getElementById("stop-button")
    if(record && stop){
        record.classList.toggle("hidden")
        stop.classList.toggle("hidden")
    }
}

function switchPlay() {
	// Your code goes here
	let shelf= document.getElementById("PausePlay Song Button");
	paused = !paused
	if (paused){
		var html = `
			<i class="material-icons">play_arrow</i>
		`

	}
	else {
		var html = `
			<i class="material-icons">pause</i>
		`
	}
	shelf.innerHTML = html;
}

function setCloudHealth(){
    let projects = document.getElementById("Experience")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="ProjectsID">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Experience </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                        <button class="button-selector" onclick="setCMEGroup();" aria-label="View CME Group Button">
                        <div> CME Group</div>
                        </button>
                        <button class="button-selector" onclick="setCloudHealth();" aria-label="View CloudHealth Button">
                            <div> CloudHealth</div>
                        </button>
                        <button class="button-selector" onclick="setPeerMentor();" aria-label="View Peer Mentor Button">
                        <div> Peer Mentor </div>
                        </button>
                    </div>
                    <div>
                      <p class="itemselector-line">
                      Developed a regional spend monitoring system for collection and processing of customers’ AWS data to achieve work avoidance and increased scalability for CloudHealth. <br/><br/>
                      Accomplished this by building a caching system with GraphQL, DynamoDB, and Redis to track and reduce calling of inactive regions. <br/><br/>
                      Reduced cost and increased efficiency of data collection from AWS by eliminating unnecessary calls based on customer usage, shortening job runtimes by preventing overseas queries, and decreasing AWS throttling by minimizing calls to smaller regions. <br/><br/>
                      Saved over 950 million API calls per day, a 23% decrease in system-wide API calls, generated a 35-45% decrease in job runtimes for impacted services, and reduced throttling from AWS. 
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemselector-image-wrapper">
            <img src="./CHCollage.jpg" class="itemselector-image" alt="Collage of skills developed at CloudHealth"/>
        </div>
      </div>`

      projects.innerHTML = innerhtml;
}

function setCMEGroup() {
    let projects = document.getElementById("Experience")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="ProjectsID">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Experience </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                        <button class="button-selector" onclick="setCMEGroup();" aria-label="View CME Group Button">
                        <div> CME Group</div>
                        </button>
                        <button class="button-selector" onclick="setCloudHealth();" aria-label="View CloudHealth Button">
                            <div> CloudHealth</div>
                        </button>
                        <button class="button-selector" onclick="setPeerMentor();" aria-label="View Peer Mentor Button">
                        <div> Peer Mentor </div>
                        </button>
                    </div>
                    <div>
                      <p class="itemselector-line">
                      Redesigned and updated Asset Management system and user interface using Java, React, and SQL, a system that handles the data for what asset types CME Group accepts as liquidity from its customers. <br/><br/>
                        Designed interface for Asset Management system with React and Redux for effective state management, utilizing code splitting, filtering, searching, user inputs, and notifications confirming user actions and mistakes. <br/><br/>
                        Iterated on and improved project by adding new functionality to improve user experience, synchronizing styling with similar services, improving code formatting, and making optimization improvements across other pages, drawing from constructive feedback from end users, QA team, and end of internship presentation. 
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemselector-image-wrapper">
            <img src="./CMECollage.jpg" class="itemselector-image" alt="Collage of skills developed at CME Group"/>
        </div>
      </div>`

      projects.innerHTML = innerhtml;
}

function setPeerMentor() {
    let projects = document.getElementById("Experience")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="ProjectsID">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Experience </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                    <button class="button-selector" onclick="setCMEGroup();" aria-label="View CME Group Button">
                    <div> CME Group</div>
                </button>
                <button class="button-selector" onclick="setCloudHealth();" aria-label="View CloudHealth Button">
                    <div> CloudHealth</div>
                </button>
                <button class="button-selector" onclick="setPeerMentor();" aria-label="View Peer Mentor Button">
                  <div> Peer Mentor </div>
                </button>
                    </div>
                    <div>
                      <p class="itemselector-line">
                        Taught students of Fundamentals of Computer Science II (CS 211) and Introduction to Artificial Intelligence (CS 348). <br/><br/>
                        Covered topics from memory allocation, pointer logic, and fundamental data structures in CS 211, to searches like A*, Markov Decision Process, and simple computer vision in CS 348. <br/><br/>
                        Led office hours, providing students with personalized assistance to facilitate a better understand of topics from class, overseeing as many as 30 students a session. <br/><br/>
                        Graded written assignments and exams, providing constructive feedback on functionality, performance, and style.
                    </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemselector-image-wrapper">
            <img src="./PMCollage.jpg" class="itemselector-image" alt="Collage of skills developed as a Peer Mentor"/>
        </div>
      </div>`

      projects.innerHTML = innerhtml;
}

function setCROWNS() {
    let projects = document.getElementById("Projects")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="Projects">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Projects </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                        <button class="button-selector" onclick="setCROWNS();" aria-label="View CROWNS Project Button">
                            <div> CROWNS Prototype</div>
                        </button>
                        <button class="button-selector" onclick="setTwitter();" aria-label="View Twitter Project Button">
                            <div> Twitter NLP Analyzer</div>
                        </button>
                        <button class="button-selector" onclick="setOLM();" aria-label="View Online Markets Project Button">
                            <div> Online Learning Algorithms </div>
                        </button>
                    </div>
                    <div>
                      <p class="itemselector-line">
                        In four weeks, developed a product prototype webapp with team of classmates for team of MBA students at Northwestern's Kellogg School of Management to help people with less common hairtypes.<br/><br/>
                        CROWNS was designed to provide users a way to learn more about their hair and a community that can support them in finding products, stylists, and haircare recommendations from people who have had similar experiences. <br/><br/>
                        Built the prototype using React for the frontend, Google Auth for user information and security, Google Firestore and Firebase for data storage, Cypress for end-to-end testing, and Github Workflows for the CI/CD pipeline. <br/><br/>
                        Utilized frequent user testing, generation of user stories, and feedback from the project management team to continually improve user experience.
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemselector-image-wrapper">
            <img src="./CROWNS.jpg" class="itemselector-image" alt="Architecture Diagram of CROWNS"/>
        </div>
      </div>`

      projects.innerHTML = innerhtml;
}

function setTwitter() {
    let projects = document.getElementById("Projects")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="Projects">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Projects </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                        <button class="button-selector" onclick="setCROWNS();" aria-label="View CROWNS Project Button">
                        <div> CROWNS Prototype</div>
                        </button>
                        <button class="button-selector" onclick="setTwitter();" aria-label="View Twitter Project Button">
                            <div> Twitter NLP Analyzer</div>
                        </button>
                        <button class="button-selector" onclick="setOLM();" aria-label="View Online Markets Project Button">
                            <div> Online Learning Algorithms </div>
                        </button>
                    </div>
                    <div>
                      <p class="itemselector-line">
                      Analyzed Twitter data to predict award winners, nominees, presenters, hosts, and award names from over 500,000 tweets across two award shows within a 10 minute runtime threshold. <br/><br/>
                      Utilized various NLP libraries, custom methods targeting specific noun/verb patterns, punctuation, and capitalization, and the IMDB API to identify targets and conduct sentiment analysis on key individuals. 
                      </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="itemselector-image-wrapper">
            <img src="./TwitterAwardShowNLP.jpg" class="itemselector-image" alt="Architecture Diagram of Twitter NLP Analyzer"/>
        </div>
      </div>`

      projects.innerHTML = innerhtml;

}

function setOLM() {
    let projects = document.getElementById("Projects")
    var innerhtml = `
    <div class="itemselector-display-wrapper" id="Projects">
        <div class="itemselector-wrapper">
            <div class="itemselector-card">
                <div class="itemselector-title"> Projects </div>
                <div class="itemselector-display-wrapper">
                    <div class="buttons-wrapper">
                        <button class="button-selector" onclick="setCROWNS();" aria-label="View CROWNS Project Button">
                        <div> CROWNS Prototype</div>
                        </button>
                        <button class="button-selector" onclick="setTwitter();" aria-label="View Twitter Project Button">
                            <div> Twitter NLP Analyzer</div>
                        </button>
                        <button class="button-selector" onclick="setOLM();" aria-label="View Online Markets Project Button">
                            <div> Online Learning Algorithms </div>
                        </button>
                    </div>
                    <div>
                        <p class="itemselector-line">
                        Using Python and Jupyter Notebook, wrote reports on the performance and applicability of different learning algorithms like Exponential Weights and Multi-Armed Bandit as a response to a variety of auction and bidding related optimization problems. <br/><br/>
                        Composed formal reports comparing these algorithms' performance and learning rates through Monte Carlo Trials against various distributions and historical datasets, and designed adversarial algorithms that could take advantage of specific learning algorithms. <br/><br/>
                        *Because this work was for a class that may re-use the prompts I was given, my work is not available here. If you're curious, feel free to contact me at me email or on LinkedIn for a copy of a report, links at the top of the page. 
                        <p/>
                    </div>
                </div>
            </div>
        </div>
      </div>`

      projects.innerHTML = innerhtml;

}