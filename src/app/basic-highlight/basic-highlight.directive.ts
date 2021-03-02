import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  // to, ze som selektor dala do hranatych zatvoriek hovori o tom, ze sa moja classa BasicHighlightDirective nebude selektovat ako element ale ako atribut a ked ju budem pouzivat v app.component.html, tak ju nedavam do hranatych zatvoriek ale staci napisat len 'appBasicHighlight'.
  selector: "[appBasicHighlight]",
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
