async function logMessageAfterDelay(message,delay){
    await new Promise(resolve => setTimeout(resolve,delay));
    console.log(message);
}

console.log(logMessageAfterDelay("Favourite,Food!",3000));






const userIds = [1, 2, 3, 4, 5];

async function fetchAndLogUserData() {
  for (const id of userIds) {
    const userData = await getUserData(id);
    console.log(userData);
  }
}

fetchAndLogUserData();









async function taskHandler() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.log("An error occurred while performing the task: ", error);
    }
  }
  