import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = 'Document Dashboard'
	
	documents: Document[] = [
		{
			title: "My first Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'http://google.com',
		},
		{
			title: "My second Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'http://google.com',
		},
		{
			title: "My Last Doc",
			description: 'addsfdfsd fsgf',
			file_url: 'http://google.com',
			updated_at: '01/09/17',
			image_url: 'http://google.com',
		}
	]
}