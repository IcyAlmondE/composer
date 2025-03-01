function scrollToTopic(topicId) {
  const topic = document.getElementById(topicId);
  if(topicId==='return'){
    topic.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, null, ` `);
    return;
  }
  if (topic) {
    topic.scrollIntoView({ behavior: "smooth" });
    history.pushState(null, null, `#${topicId}`);
  }
}