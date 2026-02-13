# Angular Component Example

This folder demonstrates a typical Angular component structure. In Angular, each component consists of multiple files working together.

## Component Structure

A typical Angular component consists of:

1. **TypeScript Class (.ts)** - Component logic and data
2. **HTML Template (.html)** - Component structure
3. **CSS Styles (.css)** - Component styling
4. **Spec File (.spec.ts)** - Unit tests (optional)

## Example: User Profile Component

Below is a simplified example of an Angular component:

### user-profile.component.ts
\`\`\`typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  // Component properties (data)
  userName: string = 'Angular Learner';
  userLevel: string = 'Beginner';
  daysLearning: number = 30;
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'TypeScript'];
  
  // Component methods (logic)
  addSkill(skill: string): void {
    this.skills.push(skill);
  }
  
  getLearningMessage(): string {
    return \`Learning Angular for \${this.daysLearning} days!\`;
  }
}
\`\`\`

### user-profile.component.html
\`\`\`html
<div class="profile-card">
  <h2>{{ userName }}</h2>
  <p class="level">Level: {{ userLevel }}</p>
  
  <div class="learning-info">
    <p>{{ getLearningMessage() }}</p>
  </div>
  
  <div class="skills-section">
    <h3>Skills Learned:</h3>
    <ul>
      <li *ngFor="let skill of skills">{{ skill }}</li>
    </ul>
  </div>
  
  <button (click)="addSkill('Angular')">Add Angular Skill</button>
</div>
\`\`\`

### user-profile.component.css
\`\`\`css
.profile-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

h2 {
  color: #667eea;
  margin-bottom: 10px;
}

.level {
  color: #666;
  font-weight: bold;
}

.skills-section {
  margin: 20px 0;
}

.skills-section ul {
  list-style-type: none;
  padding: 0;
}

.skills-section li {
  background: #f0f0f0;
  padding: 8px;
  margin: 5px 0;
  border-radius: 5px;
}

button {
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #5568d3;
}
\`\`\`

## Key Angular Features Demonstrated

1. **Component Decorator**: `@Component` - Defines the component metadata
2. **Property Binding**: `{{ userName }}` - Displays component data
3. **Event Binding**: `(click)="addSkill('Angular')"` - Handles user interactions
4. **Structural Directive**: `*ngFor` - Loops through arrays
5. **Method Calls**: `{{ getLearningMessage() }}` - Calls component methods

## How Angular Components Work Together

1. The **TypeScript class** contains the logic and data
2. The **HTML template** displays the data using Angular's template syntax
3. The **CSS file** styles the component
4. Angular's **data binding** keeps everything synchronized

## Next Steps

To create a real Angular project:

\`\`\`bash
# Install Angular CLI
npm install -g @angular/cli

# Create a new project
ng new my-angular-app

# Generate a component
ng generate component user-profile

# Serve the application
ng serve
\`\`\`

Then visit `http://localhost:4200` to see your app!
