module.exports = ({ name, contacts, social, interests, about, skills, achievements, education }) => {
    let contactsComponent = '';
    let socialsComponent = '';
    let interestsComponent = '';
    let skillsComponent = '';
    let achievementsComponent = '';
    let educationComponent = '';

    contacts && contacts.forEach(val => {
        contactsComponent += `<div>
             <strong>${val.place}: </strong>${val.value}
        </div>`
    })

    social && social.forEach(val => {
        socialsComponent += `<div>
             <strong>${val.website}: </strong>${val.username}
        </div>`
    })

    interests && interests.forEach(val => {
        interestsComponent += `<div>
            ${val.interest}
        </div>`
    })

    skills && skills.forEach(val => {
        skillsComponent += `<div class="skill">
            ${val.skill} 
        </div>`
    })

    achievements && achievements.forEach(val => {
        achievementsComponent += `<div class="achievement">
            <div class="info">
                <span class="position">${val.position}</span>
                <span class="company">${val.company}</span>
                <span class="summary">${val.summary}</span>
            </div> 
            <div class="year-container">
                <span class="year">${val.year}</span> 
            </div>
        </div>`
    })

    education && education.forEach(val => {
        educationComponent += `<div class="education">
            <div class="info">
                <span class="degree">${val.title}</span>
                <span class="place">${val.place}</span>
            </div> 
            <div class="year-container">
                <span class="year">${val.year}</span>
            </div>
        </div>`
    })

  return `
    <html>
        <head>
            <style>
                .cv {
                    width: 100vw;
                    height: 100vh;
                    box-sizing: border-box;
                    font-size: 16px;
                    margin: 0 auto;
                }

                .cv-container {
                    max-width: 100vw;
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                }

                .left {
                    background-color: #EDEDED;
                    padding: 1rem;
                    width: 100%;
                    word-wrap: break-word;
                }

                .right {
                    padding: 1rem;
                    width: 100%;
                }

                .name {
                    text-decoration: none;
                }

                .skills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .skill {
                    border: 1px solid black;
                    background-color: black;
                    color: white;
                    padding: 10px;
                    box-shadow: 0px 0px 5px solid black;
                }

                .achievements {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .achievement {
                    border: 1px solid black;
                    padding: 7px;
                    box-shadow: 0px 0px 5px solid black;
                    display: flex;
                }

                .info {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .year-container {
                    display: flex;
                }

                .education-container {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .education {
                    border: 1px solid black;
                    padding: 7px;
                    box-shadow: 0px 0px 5px solid black;
                    display: flex;
                }

                .position {
                    font-size: 24px;
                    font-weight: 600;
                }

                .company {
                    color: rgb(59, 58, 58);
                    margin: 5px 0;
                }

                .summary {
                    font-size: 16px;
                }

                .year {
                    font-size: 20px;
                    font-weight: 600;
                }

                .degree {
                    font-size: 24px;
                    font-weight: 600;
                }

                .place {
                    color: rgb(59, 58, 58);
                    margin: 5px 0;
                }
            </style> 
        </head>
        <body>
                <main>
                <div class="cv">
                    <div class="cv-container">
                        <div class="left">
                            <h1 class="name">${name}</h1>
                            <h3>Contacts</h3>
                            ${contactsComponent}
                            <div>
                                <h3>Socials</h3>
                                ${socialsComponent}
                            </div>
                            <div>
                                <h3>Interests</h3>
                                ${interestsComponent}
                            </div>
                        </div> 
                        <div class="right">
                            <div>
                                <h1>About</h1>
                                ${about}
                            </div>
                            <div>
                                <h1>Skills</h1>
                                <div class="skills">
                                    ${skillsComponent}
                                </div>
                            </div>
                            <div>
                                <h1>Achievements</h1>
                                <div class="achievements">
                                    ${achievementsComponent}
                                </div> 
                            </div>
                            <div>
                                <h1>Education</h1>
                                <div class="education-container">
                                    ${educationComponent} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </main>
        </body>
    </html>
    `;
};
