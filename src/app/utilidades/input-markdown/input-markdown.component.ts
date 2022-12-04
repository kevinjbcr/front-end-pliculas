import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent {

  @Input()
  contenidoMarkDown = ''

  @Input()
  placeHolderTextarea: string = 'Texto'
  
  @Output()
  changeMarkdown: EventEmitter<string> = new EventEmitter<string>()

  inputTextArea(texto) {
    this.contenidoMarkDown = texto.target.value
    this.changeMarkdown.emit(texto.target.value)

  }

}
