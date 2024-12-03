// Random Sentence Generator Utility
class RandomSentenceGenerator {
    constructor() {
        this.subjects = [
            "The cat",
            "A dog",
            "The teacher",
            "My friend",
            "The chef",
            "A scientist",
            "The artist",
            "An astronaut"
        ];

        this.verbs = [
            "jumps over",
            "paints",
            "explores",
            "teaches",
            "cooks",
            "discovers",
            "writes about",
            "plays with"
        ];

        this.objects = [
            "the moon.",
            "a beautiful landscape.",
            "a delicious meal.",
            "an interesting book.",
            "the stars.",
            "a new recipe.",
            "a fascinating experiment.",
            "a lovely melody."
        ];
    }

    getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    generateSentence() {
        const subject = this.getRandomElement(this.subjects);
        const verb = this.getRandomElement(this.verbs);
        const object = this.getRandomElement(this.objects);
        
        return `${subject} ${verb} ${object}`;
    }
}

module.exports = RandomSentenceGenerator;