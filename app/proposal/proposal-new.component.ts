import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
	moduleId: module.id,
	selector: 'proposal-new',
	templateUrl: 'proposal-new.component.html',
	stulesUrls: ['proposal-new.component.css']
})

export class ProposalNewComponent {
	proposal = new Proposal;
}