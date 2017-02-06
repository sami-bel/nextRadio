/* * * ./app/comments/components/index.ts * * */
// Imports
import { Component} from '@angular/core';

@Component({
  selector: 'ng-menu',
  template: `
        <div>
            <h2> Menu channel</h2>
                    
        </div>
    `
})
export class MenuComponent {
  // Event tracking properties
  private listId = 'COMMENT_COMPONENT_LIST';
  private editId = 'COMMENT_COMPONENT_EDIT';
}
