let resume = {
    name: 'Quinten De Cleyn',
    career: 'Real estate agent',
    description: 'Cat lover',
    interests: ['star wars', 'football', 'legos', 'watching TV']
}

let upperCase = resume.name.toUpperCase();
console.log('name:',upperCase);
console.log('career:', resume.career);
console.log('description:',resume.description);
console.log('My interest:');
for (i = 0; i < resume.interests.length; i++){
    console.log('*', resume.interests[i]);
}


console.log("My previous experience:")

function displayPosition (jobtitle, companyname, description) {
    console.log('*', jobtitle, "at", companyname, " - ", description)
}

displayPosition("Waiter", "a restaurant", "serving and preparing food.")
displayPosition("administrative servant", "katoennatie", "filing and checking papers.")
displayPosition("IT-worker", "nowhere", "really believing I want something to do with this.")



console.log("My Skills:")
function displaySkill (cool, skill) {
    if (cool === 1){
    console.log("*", "BAM:", skill)} 
    else{
        console.log(skill)}
}

displaySkill(0, "Dutch");
displaySkill(0, "video editing");
displaySkill(1, "beatbox");
displaySkill(1, "dancing");
displaySkill(0, "Math")

