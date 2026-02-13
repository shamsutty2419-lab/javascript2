// JavaScript for Angular Learning Project
// This demonstrates basic JavaScript concepts used in Angular

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Angular Learning Page Loaded!');
    
    // Get references to DOM elements
    const changeColorBtn = document.getElementById('changeColorBtn');
    const demoText = document.getElementById('demoText');
    
    // Array of colors to cycle through
    const colors = [
        '#667eea',
        '#ff6b6b',
        '#4ecdc4',
        '#45b7d1',
        '#f7b731',
        '#5f27cd',
        '#00d2d3',
        '#ff9ff3'
    ];
    
    let currentColorIndex = 0;
    
    // Event listener - similar to Angular's event binding
    changeColorBtn.addEventListener('click', function() {
        // Change the color of the text
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        demoText.style.color = colors[currentColorIndex];
        
        // Add a little animation
        demoText.style.transform = 'scale(1.1)';
        setTimeout(() => {
            demoText.style.transform = 'scale(1)';
        }, 200);
        
        console.log('Color changed to:', colors[currentColorIndex]);
    });
    
    // Example of a function - similar to Angular component methods
    function displayMessage(message) {
        console.log('Message:', message);
    }
    
    // Example of an object - similar to Angular component data
    const angularConcepts = {
        components: 'Building blocks of Angular apps',
        directives: 'Add behavior to elements',
        services: 'Share data and logic across components',
        modules: 'Organize application into cohesive blocks',
        routing: 'Navigate between different views'
    };
    
    // Example of array manipulation - common in Angular
    const learningTopics = [
        'Components',
        'Templates',
        'Data Binding',
        'Directives',
        'Services',
        'Dependency Injection',
        'Routing',
        'Forms',
        'HTTP Client',
        'Observables'
    ];
    
    // Log some information
    displayMessage('Welcome to Angular Learning!');
    console.log('Angular Concepts:', angularConcepts);
    console.log('Topics to Learn:', learningTopics);
    
    // Example of setTimeout - similar to Angular lifecycle hooks
    setTimeout(() => {
        console.log('Keep learning! You started one month ago, continue today!');
    }, 2000);
});

// Example of a class - similar to Angular component classes
class AngularLearner {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = startDate;
        this.skills = [];
    }
    
    addSkill(skill) {
        this.skills.push(skill);
        console.log(`${this.name} learned: ${skill}`);
    }
    
    getProgress() {
        return `${this.name} has learned ${this.skills.length} skills since ${this.startDate}`;
    }
}

// Create an instance
const learner = new AngularLearner('Student', 'One month ago');
learner.addSkill('HTML');
learner.addSkill('CSS');
learner.addSkill('JavaScript');
console.log(learner.getProgress());
