function tellStory(name,mood,activity){
    let story = `This is ${name} is a nice person.Today they are ${mood}. They are ${activity} all day`
    return story;
}
let storyNew = [3];
for(let i=0;i<3;i++){
    storyNew[i]=prompt("Enter name, mood and activity");
}
alert(tellStory(storyNew[0],storyNew[1],storyNew[2]));