import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html',
	styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
	proposalOne: Proposal = new Proposal(15,'ABC Company', 'http://mb-portfolio', 'RoR',150, 120, 15, 'jonas@jonas.lt')
	proposalTwo: Proposal = new Proposal(99, 'ABC Company', 'http://mb-portfolio', 'RoR',150, 120, 15, 'jonas@jonas.lt')
	proposalThree: Proposal = new Proposal(335,'ABC Company', 'http://mb-portfolio', 'RoR',150, 120, 15, 'jonas@jonas.lt')

proposals: Proposal[] = [
this.proposalOne,
this.proposalTwo,
this.proposalThree
	]
}
