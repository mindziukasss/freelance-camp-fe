import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = 'Document Dashboard'
	
	documents: Document[] = [
		{
			title: "My first Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'http://www.top-gadgets.net/gallery/things-you-should-know-before-hiring-a-freelancer-picture/Things-you-should-know-before-hiring-a-freelancer.jpg',
		},
		{
			title: "My second Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'https://udemy-images.udemy.com/course/750x422/54155_ffa4_6.jpg',
		},
		{
			title: "My Last Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'https://www.policygenius.com/blog/library/uploads/2015/07/Freelancer-Long-Term-Disability-Featured.png',
		}
	]
}