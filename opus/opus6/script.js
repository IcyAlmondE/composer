function scrollToTopic(topicId) {
    const topic = document.getElementById(topicId);
    topic.scrollIntoView({ behavior: "smooth" });
  }