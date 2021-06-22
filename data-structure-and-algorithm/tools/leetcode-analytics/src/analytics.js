const fs = require('fs');

class Topic {
  constructor(topic) {
    this.name = topic.name;
    this.slug = topic.slug;
    this.count = topic.count;
  }

  size() {
    return this.count.easy + this.count.medium + this.count.hard;
  }

  score() {
    return ((this.count.easy * 0 + this.count.medium * 2 + this.count.hard * 5) / this.size()).toFixed(2);
  }

  display() {
    console.log(`${this.size()}(${this.count.easy}/${this.count.medium}/${this.count.hard} ${this.score()}) ${this.name}`);
  }
}

function mostPopularTopics(topics) {
  console.log('--- Most Popular Topics ---');
  topics.sort((a, b) => {
    return b.size() - a.size();
  });
  topics.forEach((topic) => topic.display());
}

function fundamentalTopics(topics) {
  console.log('--- Fundamental Topics ---');
  topics.sort((a, b) => {
    return a.score() - b.score();
  });
  topics.forEach((topic) => topic.display());
}

function topicsYouShouldUnderstand(topics) {
  console.log('--- Topics You Should Understand ---');
  const tpcs = topics.filter((a) => {
    return a.size() > 10 && a.score() < 3.5;
  });
  tpcs.sort((a, b) => {
    return b.size() - a.size();
  });
  tpcs.forEach((topic) => topic.display());
}

(() => {
  const topics = JSON.parse(fs.readFileSync('./result.json')).map((topic) => {
    return new Topic(topic);
  });

  // mostPopularTopics(topics);
  // fundamentalTopics(topics);
  topicsYouShouldUnderstand(topics);
})();
