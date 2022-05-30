import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[shopLlcNavButton]'
})
export class NavButtonDirective {
  // private isOpen = false;

  @HostBinding('attr.aria-expanded')
  @Input()
  public isOpen!: boolean;

  constructor(private eleRef: ElementRef) { }

  @HostListener('click', ["$event"])
  public onClick(event: MouseEvent): void {
    this.isOpen = !this.isOpen;
  }

}
