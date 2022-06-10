import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[shopLlcNavButton]'
})
export class NavButtonDirective {
  @Input()
  @HostBinding('attr.aria-expanded')
  public isOpen!: boolean;

  constructor(private eleRef: ElementRef) { }

  @HostListener('click', ["$event"])
  public onClick(event: MouseEvent): void {
    this.isOpen = !this.isOpen;
  }

  /*
    Close the highlighting if user clicks outside of nav item element
   */
  @HostListener('document:mousedown', ["$event"])
  public onGlobalClick(event: MouseEvent):void {
    if (!this.eleRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
